window.voice = (sentence) => {
  const ttsAPI = "speechSynthesis" in window;
  const voice = new SpeechSynthesisUtterance();
  const voices = window.speechSynthesis.getVoices();
  const synth = window.speechSynthesis;

  if (localStorage.getItem("_m_tabae_voice") != null){
    const device_voice = JSON.parse(localStorage.getItem("_m_tabae_voice"));
    
    const utterThis = new SpeechSynthesisUtterance(sentence)

    for(var i = 0; i < voices.length ; i++) {
        if(voices[i].name === device_voice.voice) {
        utterThis.voice = voices[i];
        }
    }
    utterThis.pitch = 1//pitch.value;
    utterThis.rate = 1//rate.value;
    voice.lang = device_voice.lang;
    synth.speak(utterThis);
}else{
  // msg.voice = voices[10]; // Note: some voices don't support altering params
  voice.volume = 1; // 0 to 1
  voice.rate = 1; // 0.1 to 10
  voice.pitch = 1; // 0 to 2

  const browserLanguagse =
    window.navigator["userLanguage"] || window.navigator.language;
  voice.lang = browserLanguagse;

  voice.text = sentence;
  speechSynthesis.speak(voice);
}

  
};






