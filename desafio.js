class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
                break;
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Testando a classe Heroi
const Marika = new Heroi('Marika', 25, 'guerreiro');
heroi1.atacar(); // "O guerreiro atacou usando espada"

const MagoNegro = new Heroi('Mago Negro', 30, 'mago');
heroi2.atacar(); // "O mago atacou usando magia"

const Eryon = new Heroi('Eryon', 28, 'monge');
heroi3.atacar(); // "O monge atacou usando artes marciais"

const Aelin = new Heroi('Aelin', 17, 'ninja');
heroi4.atacar();