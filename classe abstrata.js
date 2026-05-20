class Veiculo {

    constructor(marca, modelo) {


        if (this.constructor === Veiculo) {
            throw new Error("A classe Veiculo é abstrata e não pode ser instanciada.");
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
        console.log("Consumo:", this.calcularConsumo(), "km/l");
    }

    
    get marca() {
        return this._marca;
    }

    get modelo() {
        return this._modelo;
    }
}



class Carro extends Veiculo {

    constructor(marca, modelo, cilindrada) {
        super(marca, modelo);

        this._cilindrada = cilindrada;
    }

    calcularConsumo() {
        return 15.0 - (this._cilindrada / 200);
    }
}



class Moto extends Veiculo {

    constructor(marca, modelo, cilindradas) {
        super(marca, modelo);

        this._cilindradas = cilindradas;
    }

    calcularConsumo() {
        return 30.0 - (this._cilindradas / 100.0);
    }
}



class Caminhao extends Veiculo {

    constructor(marca, modelo, capacidadeCarga) {
        super(marca, modelo);

        this._capacidadeCarga = capacidadeCarga;
    }

    calcularConsumo() {
        return 5.0 - (this._capacidadeCarga / 1000.0);
    }
}


const carro = new Carro("Toyota", "Corolla", 2000);

const moto = new Moto("Honda", "CB 500", 500);

const caminhao = new Caminhao("Volvo", "FH", 3000);


console.log("=== CARRO ===");
carro.exibirInformacoes();

console.log("\n=== MOTO ===");
moto.exibirInformacoes();

console.log("\n=== CAMINHÃO ===");
caminhao.exibirInformacoes();