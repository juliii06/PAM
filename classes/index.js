class Animal {

    constructor(nome, comprimento, patas, cor, ambiente, velocidade) {

        this.nome = nome;
        this.comprimento = comprimento;
        this.patas = patas;
        this.cor = cor;
        this.ambiente = ambiente;
        this.velocidade = velocidade;
    }

    dados() {

        console.log("Nome: " + this.nome);
        console.log("Comprimento: " + this.comprimento + " cm");
        console.log("Patas: " + this.patas);
        console.log("Cor: " + this.cor);
        console.log("Ambiente: " + this.ambiente);
        console.log("Velocidade: " + this.velocidade + " m/s");
    }
}

class Peixe extends Animal {

    constructor(nome, comprimento, patas, cor,
                ambiente, velocidade, caracteristica) {

        super(nome, comprimento, patas, cor, ambiente, velocidade);

        this.caracteristica = caracteristica;
    }

    dadosPeixe() {

        this.dados();

        console.log("Característica: " + this.caracteristica);
    }
}

class Mamifero extends Animal {

    constructor(nome, comprimento, patas, cor,
                ambiente, velocidade, alimento) {

        super(nome, comprimento, patas, cor, ambiente, velocidade);

        this.alimento = alimento;
    }

    dadosMamifero() {

        this.dados();

        console.log("Alimento: " + this.alimento);
    }
}

const tubarao = new Peixe(
    "Tubarão",
    300,
    0,
    "Cinzento",
    "Mar",
    1.5,
    "Barbatanas e cauda"
);

const ursocanada = new Mamifero(
    "Urso-do-canadá",
    180,
    4,
    "Vermelho",
    "Terra",
    0.5,
    "Mel"
);

console.log("=== DADOS DO TUBARÃO ===");
tubarao.dadosPeixe();

console.log("");

console.log("=== DADOS DO URSO DO CANADÁ ===");
ursocanada.dadosMamifero();