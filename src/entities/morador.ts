import Apartamento from "./apartamento";
import Pessoa from "./pessoa";

class Morador {
    private pessoa: Pessoa;
    private apartamento: Apartamento;

    constructor(pessoa: Pessoa, apartamento: Apartamento){
        this.pessoa = pessoa;
        this.apartamento = apartamento;
        
    }


    public getIdade(): number {
        const dataNascimento = this.pessoa.getDataNascimento();
        const hoje = new Date();
        const diferencaAnos = hoje.getFullYear() - dataNascimento.getFullYear();
        return diferencaAnos;
    }

    getPessoa(): Pessoa {
        return this.pessoa;
    }

}

export default Morador;