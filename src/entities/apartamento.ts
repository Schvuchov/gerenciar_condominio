import  Morador  from "./morador";

class Apartamento {
    private bloco: string;
    private numeroApto: number;
    private nomeProprietario: string;
    private moradores: Morador[];

    constructor(bloco: string, numeroApto: number, nomeProprietario: string) {
        this.bloco = bloco;
        this.numeroApto = numeroApto;
        this.nomeProprietario = nomeProprietario;
        this.moradores = [];
    }

    public adicionarMorador(morador: Morador) {
        this.moradores.push(morador);
    }


    public menorDeIdade(): Morador[] {
        return this.moradores.filter(morador => {
            const idade = new Date().getFullYear() - morador.dataNascimento.getFullYear();
            return idade < 18;
        });
    }
}

export default Apartamento;
