class Veiculo {
    constructor(marca, modelo) {
        if (this.constructor === Veiculo) {
            throw new Error("Não é possível instanciar uma classe abstrata.");
        }

        this._marca = marca;
        this._modelo = modelo;
    }

    calcularConsumo() {
        throw new Error("O método calcularConsumo() deve ser implementado.");
    }

    exibirInformacoes() {
        console.log("Marca:", this._marca);
        console.log("Modelo:", this._modelo);
        console.log("Consumo:", this.calcularConsumo().toFixed(2), "km/l");
    }

    getMarca() {
        return this._marca;
    }

    getModelo() {
        return this._modelo;
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, cilindrada) {
        super(marca, modelo);
        this.cilindrada = cilindrada;
    }

    calcularConsumo() {
        return 15.0 - (this.cilindrada / 200);
    }

    exibirInformacoes() {
        super.exibirInformacoes();
        console.log("Cilindrada:", this.cilindrada);
        console.log("---------------------------");
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    calcularConsumo() {
        return 30.0 - (this.cilindradas / 100.0);
    }

    exibirInformacoes() {
        super.exibirInformacoes();
        console.log("Cilindradas:", this.cilindradas);
        console.log("---------------------------");
    }
}

class Caminhao extends Veiculo {
    constructor(marca, modelo, capacidadeCarga) {
        super(marca, modelo);
        this.capacidadeCarga = capacidadeCarga;
    }

    calcularConsumo() {
        return 5.0 - (this.capacidadeCarga / 1000.0);
    }

    exibirInformacoes() {
        super.exibirInformacoes();
        console.log("Capacidade de carga:", this.capacidadeCarga, "kg");
        console.log("---------------------------");
    }
}

class Main {
    static main() {
        const carro = new Carro("Toyota", "Corolla", 2000);
        const moto = new Moto("Honda", "CG 160", 160);
        const caminhao = new Caminhao("Volvo", "FH", 3000);

        carro.exibirInformacoes();
        moto.exibirInformacoes();
        caminhao.exibirInformacoes();
    }
}

Main.main();