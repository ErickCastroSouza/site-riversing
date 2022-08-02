class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  greet = () => {
    let Greetings = [
      "Aopa chefia, qual é a sua dúvida?",
      "Eae patrão, pode mandar a sua dúvida!",
      "Aopa patrão, o que tu quer saber?",
      "Salve patrão, qual é a sua dúvida?",
    ];

    let randomGreet = Greetings[Math.floor(Math.random() * Greetings.length)];
    console.log(randomGreet);

    const message = this.createChatBotMessage(randomGreet);
    this.addChatbotmessageToState(message);
  };

  greet2 = () => {
    let Greetings2 = [
      "Estou bem mano, valew por perguntar!",
      "Tô bem obrigado",
      "Tô suave, valew a pergunta",
      "Tô suave!",
      "Tô bem valew",
    ];

    let randomGreet2 =
      Greetings2[Math.floor(Math.random() * Greetings2.length)];
    console.log(randomGreet2);

    const message = this.createChatBotMessage(randomGreet2);
    this.addChatbotmessageToState(message);
  };

  apresentation = () => {
    const message = this.createChatBotMessage(
      "Eu sou Rivers, a inteligência artificial da Riversing Design. Fui feito para solucionar todos os seus problemas! Se uma dúvida não foi solucionada, entre em contato com o patrão Gustavo."
    );
    this.addChatbotmessageToState(message);
  };

  errorMessage = () => {
    let Error = [
      "Não entendi direito irmão, pode repetir?",
      "Repete aí irmão, não tendi",
      "Fala de novo issaí que eu não compreendi",
      "Não consegui entender direito, pode repetir?",
    ];

    let randomError = Error[Math.floor(Math.random() * Error.length)];
    console.log(randomError);

    const message = this.createChatBotMessage(randomError);
    this.addChatbotmessageToState(message);
  };

  orcamento = () => {
    let Orcamento = [
      "Temos diversos tipos de orçamentos, qual você deseja saber?",
      "Temos um monte de tipos de orçamentos, qual tu quer saber?",
      "Temos uma variedade de orçamentos, quer saber qual?",
      "A gente tem um monte de tipos de orçamentos, vai querer saber qual?",
    ];

    let randomOrcamento =
      Orcamento[Math.floor(Math.random() * Orcamento.length)];
    console.log(randomOrcamento);

    const message = this.createChatBotMessage(randomOrcamento, {
      widget: "overview",
    });
    this.addChatbotmessageToState(message);
  };

  orcamentoDesign = () => {
    const message = this.createChatBotMessage("orçamento de design");
    this.addChatbotmessageToState(message);
  };

  quinhentosConto = () => {
    const message = this.createChatBotMessage("É só 500 conto!");
    this.addChatbotmessageToState(message);
  };

  orcamentoVideo = () => {
    const message = this.createChatBotMessage("orçamento de vídeo");
    this.addChatbotmessageToState(message);
  };

  Hmmmm = () => {
    const message = this.createChatBotMessage("HMMMMMMMM");
    this.addChatbotmessageToState(message);
  };

  River_Sing = () => {
    let musics = [
      "I had to meet you here todaaay. There's just so many things to saaay. Please don't stop me till I'm throoough. This is something I hate to dooo 🕺 🕺 🕺",
      "Life could be a dream. Sh-boom, if I could take you to a paradise up above. If you will tell me I'm the only one that you love. Life could be a dream, sweetheaaart 🕺 🕺 🕺",
      "Wiiiise meeen saaay, Only fooools ruuush in. But Iiii caaan't help falling in looove wiiith you 🕺 🕺 🕺",
      "Hey, hey, hey. Ba-dee-ya, say, do you remember? Ba-dee-ya, dancing in September. Ba-dee-ya, never was a cloudy daaay 🕺 🕺 🕺",
      "Sun is shinin' in the sky. There ain't a cloud in sight. It's stopped rainin' everybody's in the play. And don't you know. It's a beautiful new day, hey hey 🕺 🕺 🕺",
      "Yesterday. All my troubles seemed so faaar awaaay. Now it looks as though they're heere to stay. Oh, I believe in yesterdaay 🕺 🕺 🕺",
    ];

    let randomMusic = musics[Math.floor(Math.random() * musics.length)];
    console.log(randomMusic);

    const message = this.createChatBotMessage(randomMusic);
    this.addChatbotmessageToState(message);
  };

  joke = () => {
    let jokes = [
      "Por que o rádio não pode ter filhos?    Porque ele é stereo!",
      "Por que o jacaré tirou o filho da escola?   Porque ele réptil de ano!",
      "Por que a aranha é o animal mais carente do mundo?    Porque ela é uma aracneedyou!",
      "Por que o policial não usa sabão?   Porque ele prefere deter gente!",
      "Qual o animal que não vale mais nada?   O javali!",
      "O que o tomate foi fazer no banco?   Tirar extrato!",
      "Por que Napoleão era sempre chamado para as festas? Porque ele era bom na party!",
      "Qual a nacionalidade de quem mexe com encanamentos?    Mexicano!",
      "Qual o nome do carro que mostra quando vai chover?   Celta preto!",
      "O que o pagodeiro faz na igreja?   Cantar pá god!",
      "Por que a velhinha não usa relógio?   Porque ela é sem hora!",
    ];

    let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    console.log(randomJoke);

    const message = this.createChatBotMessage(randomJoke);
    this.addChatbotmessageToState(message);
  };

  RATINHO = () => {
    let ratinho = [
      "UEPA",
      "PARE",
      "QUE ISSO MEU FILHO CALMA",
      "ELE GOOOSTA",
      "CAVALO",
      "É UM MENINO DE PAPAI É??",
      "JEEESUUUUUUIS",
      "DANÇA GATINHO DANÇA",
      "RAPAAAAAZ",
      "RATINHONHONHO",
    ];

    let randomRatinho = ratinho[Math.floor(Math.random() * ratinho.length)];
    console.log(ratinho);

    const message = this.createChatBotMessage(randomRatinho);
    this.addChatbotmessageToState(message);
  };

  risadola = () => {
    let Risadinha = [
      "KKKK",
      "KKKKK",
      "KKKKKK",
      "KKKKKKK",
      "KKKKKKKK",
      "KKKKKKKKK",
      "KKKKKKKKKK",
    ];

    let randomRisada = Risadinha[Math.floor(Math.random() * Risadinha.length)];
    console.log(randomRisada);

    const message = this.createChatBotMessage(randomRisada);
    this.addChatbotmessageToState(message);
  };

  addChatbotmessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
