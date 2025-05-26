const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"]

let password1El = document.getElementById('password-el-1')
let password2El = document.getElementById('password-el-2')
let outputEl = document.getElementById('password-length')
let digitsEl = document.getElementById('password-digits-option')
let symbolsEl = document.getElementById('password-symbols-option')
let geratedPasswordsEl = document.querySelector('.generated-passwords')

geratedPasswordsEl.style.display = "none"

function generatePasswords(){
    let password1 = getPassword()
    let password2 = getPassword()
    
    console.log("Password length required: " + outputEl.textContent)

    console.log("Password-1: " + password1)
    console.log("Password-1 length: " + password1.length + " characters")
    console.log("Password-2: " + password2)
    console.log("Password-1 length: " + password1.length + " characters")

    if (geratedPasswordsEl.style.display === "none"){
        geratedPasswordsEl.style.display = "block"
    }

    password1El.textContent = password1
    password2El.textContent = password2
}

function getPassword()
{
    let password = ""
    let allowedCharacters = [...characters]
    let includesDigit = false
    let includesSymbol = false

    if (digitsEl.checked){
        allowedCharacters = allowedCharacters.concat(digits)
    }

    if(symbolsEl.checked){
        allowedCharacters = allowedCharacters.concat(symbols)
    }
    
    for (let i=0; i<outputEl.textContent; i++)
    {
        password += allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)]

    }
    return password
}

function copyContent(elId){
    let copyEl = document.getElementById(elId)
       
    navigator.clipboard.writeText(copyEl.textContent)
    alert("Password copied: " + "'" + copyEl.textContent + "'")
}




