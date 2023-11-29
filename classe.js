class heroi{
  constructor (nome,idade,tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo

  }

atacar () {
  let atack;

  switch (this.tipo){
    case "mago":
      atack = "usando magia";
      const mensagem1 = `O ${this.tipo} ${this.nome} atacou ${atack} no auge dos seus ${this.idade} anos, o mais sábio `
      console.log(mensagem1);
      break;
    case "guerreiro":
      atack = "usando a espada";
      const mensagem2 = `O ${this.tipo} ${this.nome} atacou ${atack} no auge dos seus ${this.idade} anos, está bem de vida "ainda"`
      console.log(mensagem2);
      break;
    case "monge":
      atack = "usando artes marciais";
       const mensagem3 = `O ${this.tipo} ${this.nome} atacou ${atack} no auge dos seus ${this.idade} anos, esse é phoda`
      console.log(mensagem3);
      break;
    case "ninja":
      atack = "usando shuriken";
      const mensagem4 = `O ${this.tipo} ${this.nome} atacou ${atack} no auge dos seus ${this.idade} anos, nem sei o que é shuriken, mas deve ser o phodinha filho do monge`
      console.log(mensagem4);
      break;
    default:
      atack = "empacou bem na hora"
    }
  }
}
const myHeroi = new heroi("Magolee", 24, "ninja")

myHeroi.atacar();
