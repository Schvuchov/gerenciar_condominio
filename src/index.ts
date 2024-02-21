import Apartamento from "./entities/apartamento";
import Cargo from "./entities/cargo";
import Endereco from "./entities/endereco";
import Funcionario from "./entities/funcionario";
import Morador from "./entities/morador";
import Pessoa from "./entities/pessoa";


// Cargo
const zelador = new Cargo("Zelador", 50);
const sindico = new Cargo("Sindico", 50);


//Endereco
const endereco1 = new Endereco("Rua tal", "Bla", "Floripa", "SC", 880456764)
const endereco2 = new Endereco("Rua abc", "Blo", "Floripa", "SC", 880434234)
const endereco3 = new Endereco("Rua ble", "Blu", "Floripa", "SC", 880454674)
const endereco4 = new Endereco("rua condo", "condo", "floripa", "sc", 23432535)


//Pessoa para funcionarios
const pessoa1 = new Pessoa("Alvaro", 2345678, new Date(1980,7,20), endereco1, 99867564, 99867564, "umEmailParaAlvaro")
const pessoa2 = new Pessoa("Virginia", 5465647, new Date(1990,11,16), endereco2, 99867564, 99867564, "umEmailParaVirginia")
const pessoa3 = new Pessoa("Bob", 2343253, new Date(1985,9,10), endereco3, 99867564, 99867564, "umEmailParaBob")


//Pessoas para moradores
const pessoa4 = new Pessoa("Jose", 2343253, new Date(1985,9,10), endereco4, 99867564, 99867564, "umEmailParaJose")
const pessoa5 = new Pessoa("Marcus", 2343253, new Date(1985,9,10), endereco4, 99867564, 99867564, "umEmailParaMarcus")
const pessoa6 = new Pessoa("Magali", 2343253, new Date(1985,9,10), endereco4, 99867564, 99867564, "umEmailParaMagali")
const pessoa7 = new Pessoa("Mag", 2343253, new Date(2020,9,10), endereco4, 99867564, 99867564, "umEmailParaMag")
const pessoa8 = new Pessoa("Jim", 2343253, new Date(2018,6,3), endereco4, 99867564, 99867564, "umEmailParaJim")


//Funcionario
const funcionario1 = new Funcionario(pessoa1, zelador, 1500)
const funcionario2 = new Funcionario(pessoa2, zelador, 1600)
const funcionario3 = new Funcionario(pessoa3, sindico, 2000)

const listaFuncionarios = [funcionario1, funcionario2, funcionario3]


//Apartamento
const apartamento1 = new Apartamento("bloco1", 23, "Jose")
const apartamento2 = new Apartamento("bloco2", 34, "Marcus")
const apartamento3 = new Apartamento("bloco3", 14, "Magali")


//Morador
const morador1 = new Morador(pessoa4, apartamento1)
const morador2 = new Morador(pessoa5, apartamento2)
const morador3 = new Morador(pessoa8, apartamento2)
const morador4 = new Morador(pessoa6, apartamento3)
const morador5 = new Morador(pessoa7, apartamento3)



//filtro de salarios dos zeladores

const zeladores = listaFuncionarios.filter(funcionario => funcionario.getCargo().getDescricao() === "Zelador");

const salarioZeladores = zeladores.map(zelador => zelador.getSalario());

console.log("Salarios dos zeladores: "+ salarioZeladores)



// filtro de moradores menores de idade

console.log("Moradores menores de idade apto2: "+apartamento2.menorDeIdade())
console.log("Moradores menores de idade apto3: "+apartamento3.menorDeIdade())