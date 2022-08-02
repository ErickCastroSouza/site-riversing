import React from "react";

import {
  createChatBotMessage,
  MyAvatar,
  MyCustomAvatar,
  MyCustomChatMessage,
  MyCustomUserChatMessage,
} from "react-chatbot-kit";
import Options from "./Options/Options";

var initial = [
  "Olá! Meu nome é Rivers, estou aqui para ajudá-lo",
  "Eae! Eu sou o Rivers, tô aqui para tirar as suas dúvidas",
  "Aopa! Eu sou o Rivers, pode me perguntar o que quiser!",
  "Fala patrão! Eu sou o Rivers, pode me perguntar qualquer coisa!",
];

var randomInitial = initial[Math.floor(Math.random() * initial.length)];
console.log(randomInitial);

const config = {
  botName: "Rivers",
  initialMessages: [createChatBotMessage(randomInitial)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#4b6c8d",
    },

    userMessageBox: {
      backgroundColor: "#161e29",
    },

    chatButton: {
      backgroundColor: "#db2700",
    },
  },
  customComponents: {
    header: () => (
      <div
        style={{
          backgroundColor: "#db2700",
          padding: "10px",
          borderRadius: "3px",
          fontFamily: "Poppins",
          fontWeight: "bold",
          color: "#161e29",
        }}
      >
        Converse com o Rivers
      </div>
    ),
  },

  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
};

export default config;
