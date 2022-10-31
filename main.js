//PEGAR TODAS AS  TECLAS
const keys = document.querySelectorAll(".key")

console.log(keys)




//TOCAR NOTAS
function playNote(event){

//keyCode/qual o código que estou rodando
let audioKeyCode = getKeyCode(event);



  //tecla pressionada
 const key = document.querySelector(`key[data-key="${audioKeyCode}"]`)
 console.log(key)


  //se a tecla existe
   const cantFoundAnyKey = key
    
 
    if(cantFoundAnyKey){
       return;
      
    }

    
  //tocar audio
   const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}

function getKeyCode(event){
  let keyCode;

  const isKeyboard = event.type === "keydown" //isso ai vai me responder um verdadeiro ou falso
  if (isKeyboard){
     keyCode = event.keyCode
  }else{
     keyCode = event.target.dataset.key
  }
     return keyCode
}


//CLICAR COM O MOUSE
keys.forEach( function (key) {
    key.addEventListener("click", playNote)
})



//CLICAR COM O TECLADO
window.addEventListener("keydown", playNote)