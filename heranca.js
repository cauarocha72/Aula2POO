class Person {

    idade = 0

    constructor(nome){
        this.nome = nome
         
    }
   
}
let p1 = new Person ('hjjfdsi')
let p2 = new Person ('jsdhgjas')
let p3 = new Person ('kfdsjkfji')
let p4 = new Person ('fasdhfsa','123456789')

class Aluno extends Person{

    constructor(nome,id){

       
       super(nome);
        this.id = id
    }
    ola(){
        alert(`${this.nome} quer dizer ola`)
      
    }
    ola(){
        alert(`${this.nome} Bem-vindo ao Mundo`)
      
    }
}
let a1 = new Aluno ("Rafael",8)
a1.idade = 12
a1.ola()

console.log(`${a1.nome} tem ${a1.idade} e matricula ${a1.id}`)
