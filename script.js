let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voicer=document.querySelector("#voicer")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="eng"
     window.speechSynthesis.speak(text_speak)
}
function wishme(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good morning, how can i help you ")
    }
    else if(hours>=12 && hours<16){
        speak("Good afternoon, how can i help you ")
    }
    else{
        speak("good evening,how can i help you ")
    }
}
window.addEventListener('load',()=>{
    wishme()
})
let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex =event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.computedStyleMap.display="flex"
    voice.computedStyleMap.display="none"
})
function takeCommand(message){
    btn.style.display="flex";
    voice.style.display ="none"
    
    if(message.includes("hello") || message.includes("hey")){
        speak("Hello , what can i help you? ");
    }
    
    else if(message.includes("how are you")){
        speak(" i am good ,thank you and how are you");
    }

    else if(message.includes("i am good, thank you")){
        speak(" thats nice to hear from you , then how can i help you.....");
    }

    else if(message.includes("who are you")){
        speak(" i am Astra the virtual assistant ,created by 5th semester students.");
    }
   else if(message.includes("open youtube")){
        speak("opening youtube");
        window.open("https://www.youtube.com");
      }
   else if(message.includes("open instagram")){
        speak("opening instagram");
        window.open("https://www.instagram.com");
      }
   else if(message.includes("open google")){
        speak("opening google");
        window.open("https://www.google.com");
      }
   else if(message.includes("open calculator")){
        speak("opening calculator");
        window.open("calculator://");
      }
   else if(message.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"});
        speak(time)
      }
   else if(message.includes("date")){
        let date= new Date().toLocaleString(undefined,{day:"numeric",month:"short"});
        speak(date)
      }
   else {
         let finalText ="This is what i found in internet" + message.replace("Astra","") || message.replace("Astro","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("Astra","")}`,"_blank");
   }
}