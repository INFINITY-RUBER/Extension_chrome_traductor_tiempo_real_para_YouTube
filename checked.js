console.log("cargaando pagina");
speechSynthesis.speak(new SpeechSynthesisUtterance("Bienvenido. y gracias por usarme")); 
var lastText = "";
var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[5];
msg.volume = 1; // 0 to 1
msg.rate = 1.19; // 0.1 to 2
msg.pitch = 0; //0 to 2

function check() {
  try {
    var nowText = document.querySelectorAll('span[class=captions-text] span[class= caption-visual-line]');
  } catch (error) {
    console.log("cargaando pagina");
    
  }
  if (typeof nowText !== "undefined"){

    var texto = "";
    for(var i = 0; i < nowText.length; i++) {
        texto += nowText[i].innerText + " " // tomar el texto
        // console.log("texto: "+texto)
    } 

    var currentText = texto;  

    if (lastText !== currentText) {        
        
        msg.text = currentText
        speechSynthesis.speak(msg)
        lastText = currentText;
        console.log(currentText)
        var texto = "";
      
    }
  }
  else {
    console.clear(MessageEvent)
  }  
  
}

window.i = setInterval(check, 600);



// ************************youtube ******************************
// 'p[data-purpose="transcript-cue-active"] font')[1].innerHTML;
// document.querySelectorAll('span[class=captions-text] span[class= caption-visual-line]')[0].innerText