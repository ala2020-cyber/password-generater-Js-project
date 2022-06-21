
const numbers=[1,2,3,4,5,6,7,8,9]
const lowerChars=["a","q","w","z","s","x","e","d","c","r","f","v","t","g","b","y","h","n","u","j","i","k","o","l","p","m"]
const upperChars=["A","Q","W","Z","S","X","E","D","C","R","F","V","T","G","B","Y","H","N","U","J","I","K","O","L","P","M"]
const specialChars=["&","'","(",")","-","_",")","=","~","#","{","[","`","|","^","@","]","}","!",":",";",",","*","/"]
const arrayOfChars=[
  ...numbers,
  ...lowerChars,
  ...upperChars,
  ...specialChars
]
let passwords = [];
let newPass = "";
let btnClicked=false
const message = document.getElementById("message");
const cardBtn = document.getElementById("cardBtn");
const passwordsOutput = document.getElementsByClassName("PasswordField");
const slider = document.getElementById("slider")

const emptyInputFields = () => {
  for (let field of passwordsOutput) {
    field.textContent = "";
  }
};

const generate1Password = (passLen) => {
  for (let j = 0; j < passLen; j++) {
    let randomIndex = Math.floor(Math.random() * 85);
    newPass += arrayOfChars[randomIndex];
  }
  passwords.push(newPass);
  newPass = "";
};

const generate4Password = () => {
  let inputLength = document.getElementById("passwordLength");
  
  if(isNaN(inputLength.value)){
    message.textContent = "";
    inputLength.value = "";
    emptyInputFields();
    message.textContent=`Enter a number please !`
    message.style.color="red"
    return
  }
  if (inputLength.value >= 8 && inputLength.value<=19) {
    for (let i = 0; i < 4; i++) {
      generate1Password(inputLength.value);
    }
    console.log(passwords);
  
    for(let i=0;i<passwordsOutput.length;i++){
       passwordsOutput[i].innerHTML = ` <div class="label "></div> ${passwords[i]}`;
    }

    message.textContent = "Click on passwords to copy.";
    message.style.color="#10B981"

    passwords = [];
    btnClicked=true
  } else {
    message.textContent = "";
    inputLength.value = "";
    emptyInputFields();
    message.textContent=`Length should be between 8 and 19 !`
    message.style.color="red"
  }
  
};

cardBtn.addEventListener("click", generate4Password);

const CopyToClipboard = (elem) => {
    console.log(elem.textContent)
  if (window.getSelection) {
    if (window.getSelection().empty) {
      // Chrome
      window.getSelection().empty();
    } else if (window.getSelection().removeAllRanges) {
      // Firefox
      window.getSelection().removeAllRanges();
    }
  } else if (document.selection) {
    // IE?
    document.selection.empty();
  }

  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(elem);
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(elem);
    window.getSelection().addRange(range);
    document.execCommand("copy");
  }
};


for( let i of passwordsOutput){
    i.addEventListener("click",()=> {
        if(btnClicked){
            CopyToClipboard(i)
            i.firstChild.textContent="Copied !"
            
        }
    })
    
}



const setTheme = themeName => {
   
  localStorage.setItem("theme",themeName)
  document.documentElement.className= themeName
  
}


const toggleTheme = () => {
    const themeInLocalStorage = localStorage.getItem("theme") 
    if(themeInLocalStorage === "theme-dark"){
      setTheme("theme-ligth")
    }
    else {
      setTheme("theme-dark")
    }
} 

(() => {
  if(localStorage.getItem("theme") === "theme-dark"){
    setTheme("theme-dark")
    slider.checked=true
  }
  else {
    setTheme("theme-ligth")
    slider.checked=false
  }
})();

slider.addEventListener("change", toggleTheme) 
