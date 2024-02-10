import React, { useState } from "react";

const Alexa = () => {
  const [transcript, setTranscript] = useState("");

  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      setTranscript(speechToText);
      processCommand(speechToText);
    };
    recognition.start();
  };

  const processCommand = (command) => {
    // Implement your logic for processing user commands here
    const response = generateResponse(command);
    speak(response);
  };

  const generateResponse = (command) => {
    // Implement logic to generate response based on user command
    return command;
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <h1>Voice Assistant</h1>
      <button onClick={startListening}>Start Listening</button>
      <p>{transcript}</p>
    </div>
  );
};

export default Alexa;
