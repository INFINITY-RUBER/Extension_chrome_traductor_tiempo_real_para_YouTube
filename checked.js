var lastText = "";
var Google = 0;
var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
console.log("cargando pagina");
speechSynthesis.speak(new SpeechSynthesisUtterance("Yo sere tu traductor y gracias por usar mi codigo")); 

//**********************************************************
//         CONFIGURACION DE VOZ DE API GOOGLE
//**********************************************************
// 0 Google Deutsch true
// 1 Google US English 
// 2 Google UK English Female 
// 3 Google UK English Male 
// 4 Google español 
// 5 Google español de Estados Unidos 
// 11 Google 한국의 
// 12 Google Nederlands 
// 13 Google polski 
// 14 Google português do Brasil 
// 15 Google русский 
// 16 Google 普通话（中国大陆） 
// 17 Google 粤語（香港） 
// 18 Google 國語（臺灣）
// **************************************************
// cargue el idioma deseado segun su numero

Google = 5

msg.voice = voices[Google];

// **************************************************
// otras configuraciones:

msg.rate = 1.19; // 0.1 to 2
msg.volume = 1; // 0 to 1
msg.pitch = 0; //0 to 2

// **************************************************


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

    if (lastText !== currentText && window.speechSynthesis.pending == false) {        
        
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


