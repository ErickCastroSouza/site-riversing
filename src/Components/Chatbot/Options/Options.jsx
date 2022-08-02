import ActionProvider from "../ActionProvider";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Vídeo/animação",
      handler: () => {},
      id: 1,
    },

    { text: "Design", handler: () => {}, id: 2 },

    { text: "website", handler: () => {}, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
