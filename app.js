const btn=document.querySelector('.talk');
const content=document.querySelector('.content');

const greetings =
[
    'I am good,What about you',
    'Doing good',
    'I am fine',
    'I am alright'
];
const hell=
[
    'Hello,My name is speechmate',
    'Hai',
    'Hey,Whatsup',
    'hey,Nice to meet you'
];

const Sr = window
.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new Sr();
 recognition.onstart = function()
 {
     console.log('voice is activated, you can to microphone');
 };

 recognition.onresult = function(event)
 {
     const current = event.resultIndex;
     const transcript = event.results[current][0].transcript;
     content.textContent = transcript;
     readOutLoud(transcript);
 }
 btn.addEventListener('click', () =>
 {
     recognition.start();
 })

 function readOutLoud(message)
 {
     const speech=new SpeechSynthesisUtterance();
     speech.text="I dont have answer for your question";
     if(message.includes('how are you'))
     {
         speech.text = greetings[Math.floor(Math.random()*greetings.length)];
     }
     if( message.includes('hello') || message.includes('hai'))
     {
         speech.text = hell[Math.floor(Math.random()*hell.length)];
     }
    
    //  speech.text=message;
     speech.volume= 1;
     speech.rate=1;
     speech.pitch=1;
    window.speechSynthesis.speak(speech)
; }

