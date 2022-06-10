
let passwords=[]
let characters=[1,2,3,4,5,6,7,8,9,"&","~",",","'",",","(","-","`","_","^","@",")","=","+","-","*","/","!", ",", ":", "," , ";" , "," , "<" , ">","a","z","e","r","t","y","u","i","o","p","m","l","k","j","h","g","f","d","s","q","w","x","c","v","b","n","A","Q","W","Z","S","X","E","D","C","R","F","V","T","G","B","Y","H","N","U","J","I","K","O","L","P","M","&","~",",","'",",","(","-","`","_","^","@",")","=","+","-","*","/","!", ",", ":", "," , ";" , "," , "<" , ">"]

let randomIndex=0
let newPass=""

let output1=document.getElementById("password1")
let output2=document.getElementById("password2")
let output3=document.getElementById("password3")
let output4=document.getElementById("password4")

let message=document.getElementById("message")

function emptyInput() {
    output1.value=""
    output2.value=""
    output3.value=""
    output4.value=""
    message.textContent=""
}


function generate4Password() {
    let passwordLen=document.getElementById("length");
    if(passwordLen.value <8){
        passwordLen.value=""
        emptyInput()
        alert("Please Try Again !!\nPassword length too short\n ->> MINiMUM LENGTH IS 8.")
        
    }
    else{

    for(let i=0;i<4;i++){
        for(let j=0;j<passwordLen.value;j++){
            randomIndex=Math.floor(Math.random()*112)
            newPass+=characters[randomIndex]
        }
        passwords.push(newPass)
        newPass=""
    }
    
    output1.value=passwords[0]
    output2.value=passwords[1]
    output3.value=passwords[2]
    output4.value=passwords[3]
    message.innerHTML="Click on passwords to copy them!"

    passwords=[]
 }
}

function copyToclipboard(passToCopy) {
    navigator.clipboard.writeText(passToCopy.value)
    alert("password copied successfuly")
}

function copyPassword1(){
copyToclipboard(output1)
}
function copyPassword2(){
    copyToclipboard(output2)
}
function copyPassword3(){
    copyToclipboard(output3)
}
function copyPassword4(){
    copyToclipboard(output4)
}