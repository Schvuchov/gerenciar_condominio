class Cargo {
    private descricao: string;
    private cargaHoraria: number;

    constructor(descricao: string, cargaHoraria: number){
        this.descricao = descricao;
        this.cargaHoraria = cargaHoraria
    }

    getDescricao(){
        return this.descricao
    }

}

export default Cargo;