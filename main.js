
              //Lógica de coisas que preciso para montar essa aplicação

//Pegar todas as teclas
 const keys = document.querySelectorAll(".key")


//Fazer ele tocar notas
 function playNote(Event){
    console.log(Event.target)
    
    let audioKeyCode = getKeyCode(Event)
    //typed or pressed key
    const key = document.querySelector(`[data-key = "${audioKeyCode}"]`)
    console.log(key)
   //if key existis
  


   //play audio
 }

 function getKeyCode (Event){
  let keyCode;

  const isKeyboard = Event.type === "keydown"//true and false
  if(isKeyboard){
     keyCode = Event.keyCode
  }else{
      keyCode = Event.target.datase.key;
  }
  

  console.log(Event.type)
  console.log(keyCode)
 } 

//Fazer ele cilicar com o mouse
  keys.forEach( function(key){
     key.addEventListener("click", playNote)
  })


//clicar com o teclado
window.addEventListener("keydown",playNote)// EventListener ele vai ficar ouvindo eventos de "keydown",toda vez que clicar na tecla ele vai disparar a função "event".

