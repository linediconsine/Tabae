window.voice = (sentence) => {
  const ttsAPI = "speechSynthesis" in window;
  const voice = new SpeechSynthesisUtterance();
  const voices = window.speechSynthesis.getVoices();
  // msg.voice = voices[10]; // Note: some voices don't support altering params
  voice.volume = 1; // 0 to 1
  voice.rate = 1; // 0.1 to 10
  voice.pitch = 1; // 0 to 2

  const browserLanguagse =
    window.navigator["userLanguage"] || window.navigator.language;
  voice.lang = browserLanguagse;

  voice.text = sentence;
  speechSynthesis.speak(voice);
};
