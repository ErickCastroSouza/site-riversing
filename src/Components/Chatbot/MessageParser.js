class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);

    const lowercase = message.toLowerCase();

    // prettier-ignore

    if (
      lowercase.includes("olá") ||
      lowercase.includes("ola") ||
      lowercase.includes("oi") ||
      lowercase.includes("aopa") ||
      lowercase.includes("opa")
    ) {
      this.actionProvider.greet();
    } 

    else if (
      lowercase.includes("orçamento") ||
      lowercase.includes("orcamento")
    ) {
      this.actionProvider.orcamento();
    } 

    else if (
      lowercase.includes("banner") ||
      lowercase.includes("ilustração") ||
      lowercase.includes("ilustracao")
    ) {
      this.actionProvider.orcamentoDesign();
    } 
    
    else if (
      lowercase.includes("video") ||
      lowercase.includes("vídeo") ||
      lowercase.includes("edição") ||
      lowercase.includes("edicao")
    ) {
      this.actionProvider.orcamentoVideo();
    }
    
    else if (
      lowercase.includes("como vai") ||
      lowercase.includes("como você está") ||
      lowercase.includes("como voce esta") ||
      lowercase.includes("como cê tá") ||
      lowercase.includes("como ce ta") ||
      lowercase.includes("como c ta") ||
      lowercase.includes("você tá bem") ||
      lowercase.includes("voce ta bem") ||
      lowercase.includes("tu tá bem") ||
      lowercase.includes("tu ta bem")
    ) {
      this.actionProvider.greet2();
    }
    
    else if (
      lowercase.includes("quanto que tá o revolver") ||
      lowercase.includes("quanto que ta o revolver") ||
      lowercase.includes("quanto ta o revolver") ||
      lowercase.includes("quanto tá o revolver")
    ) {
      this.actionProvider.quinhentosConto();
    }
    
    else if (
      lowercase.includes("hmm") ||
      lowercase.includes("hmmm") ||
      lowercase.includes("hmmmm") ||
      lowercase.includes("hmmmmm") ||
      lowercase.includes("hmmmmmm") ||
      lowercase.includes("hmmmmmmm")
    ) {
      this.actionProvider.Hmmmm();
    }
    
    else if (
      lowercase.includes("quem é você") ||
      lowercase.includes("quem e voce")
    ) {
      this.actionProvider.apresentation();
    }
    
    else if (
      lowercase.includes("cante") ||
      lowercase.includes("canta")) {
      this.actionProvider.River_Sing();
    }
    
    else if (
      lowercase.includes("piada") ||
      lowercase.includes("rir")) {
      this.actionProvider.joke();
    }
    
    else if (
      lowercase.includes("ratinho") ||
      lowercase.includes("uepa") ||
      lowercase.includes("uepaa") ||
      lowercase.includes("pare") ||
      lowercase.includes("ele gosta") ||
      lowercase.includes("é um menino de papai é") ||
      lowercase.includes("rapaz") ||
      lowercase.includes("rapaaz") ||
      lowercase.includes("rapaaaz") ||
      lowercase.includes("cavalo") ||
      lowercase.includes("que isso meu filho calma")
    ) {
      this.actionProvider.RATINHO();
    } else if (
      lowercase.includes("kkk") ||
      lowercase.includes("kkkk") ||
      lowercase.includes("kkkkk") ||
      lowercase.includes("kkkkkk") ||
      lowercase.includes("kkkkkkk") ||
      lowercase.includes("kkkkkkkk") ||
      lowercase.includes("kkkkkkkkk") ||
      lowercase.includes("kkkkkkkkkk")
    ) {
      this.actionProvider.risadola();
    }
    
    else {
      this.actionProvider.errorMessage();
    }
  }
}

export default MessageParser;
