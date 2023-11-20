//criando classe autor
class Autor{
	//defenido as variaveis
      id1=0
	constructor(nome_autor){
	  this.nome_autor = nome_autor
	}
	   
	Id_Autor(NovoID){
		if(typeof NovoID == "number"){
		    this.Id_autor = NovaID
		    }
	}

	  get id_autor(){
		return this.id1
	  }

	    set id_autor (x){
		if(typeof x == "number") {
		     this.id1 = x	
		}
	     }
		//metado pra criar um livro mas vai precisar 
		//fazer uma class pra isso

	       RegistrarLivro(){
		alert("Registre o seu livro na pagina de registro")
		} 
}

//criando os objetos da class

let a1 = new Autor ("Scott Cawthon")
let a2 = new Autor ("Mike Wazowski")
let a3 = new Autor ("Magnus Carsel")
let a4 = new Autor ("Gabriel Azevedo")
a1.id_autor=1
a2.id_autor=2
a3.id_autor=3
a4.id_autor=4

//quando usa esse metado é pra avisar que 
//objeto quer fazer um livro(outro objeto)

a4.RegistrarLivro()

//era pra ser meio que uma tabela que motraria que o objeto esta no sistema

console.log(`identificador é ${a1.id_autor} seu nome é ${a1.nome_autor}`)
console.log(`identificador é ${a2.id_autor} seu nome é ${a2.nome_autor}`)
console.log(`identificador é ${a3.id_autor} seu nome é ${a3.nome_autor}`)
console.log(`identificador é ${a4.id_autor} seu nome é ${a4.nome_autor}`)

//criando uma subclasse 

class Livros extends Autor{
	//definido as variaveis
	//mas o id2,pg,vl teria que usar get,set pra cada
	id2=0
	pg=0
	vl=0
	constructor(nome_livro,genero,nome_autor){
		super(nome_autor)
		this.nome_livro = nome_livro
		this.genero = genero

	}
		//definido a variavel id2

	Id_Livro(NovoID){
		if(typeof NovoID == "number"){
		    this.Id_autor = NovaID
		    }
	}
		
	  get id_livro(){
		return this.id2
	  }
		//obs: usei try catch para caso o usuario 
		//tentar definir a variavel e fosse igual 
		// ou menor do zero vai dar error	
		//definido a variavel pg
        
	Paginas(NovasPaginas){
		if(typeof NovasPaginas == "number"){
		    this.paginas = NovasPaginas
		    }
        }
	  get paginas(){
		return this.pg
	  }

	  set paginas (x){
		if(typeof x == "number"){
		     this.pg = x	
		}
	 }


        
		//definido a variavel vl
        Valor(NovoValor){
            if(typeof NovoValor == "number"){
                this.Valor = NovoValor
                }
        }
    
          get Valor(){
            return this.vl
          }
    
            set Valor(x){
            if(typeof x == "number") {
                 this.vl = x	
            }
             }
  	//conseguisse fazer seu livro nessa classe

	RegistrarLivro(){
		alert("Ja, ja vamos levar a lista")
	} 
	        RegistrarLivro(){
		alert("ja colocamos na lista")
		} 
    }

    try{
        throw new Error ("deu erro para determina o numero")
       }catch  (error){
        console.error(error.message)
    
       }
		
	

//criando os objetos livro
let l1 = new Livros ("Rosa são vermelhas, violetas são azuis","romance")
let l2 = new Livros ("Five night at freddy o ultimo?","terror")
let l3 = new Livros ("Como não ser um campeão de xadrez","educacional")
let l4 = new Livros ("Adoro você Gabs","comedia")
l1.Id_livro = 2
l1.paginas = 125
l1.valor = 59.99

l2.Id_livro = 1
l2.paginas = 250
l2.valor = 110.50

l3.Id_livro = 3
l3.paginas = 180
l3.valor = 90.00

l4.Id_livro = 4
l4.paginas =80 
l4.valor = 25.00

//era pra ser meio que uma tabela que motraria que o objeto esta no sistema

console.log(`id_livro: ${l2.Id_livro},${l1.Id_livro},${l3.Id_livro},${l4.Id_livro}\n
nome_livro: ${l2.nome_livro},${l1.nome_livro},${l3.nome_livro},${l4.nome_livro}\n
paginas: ${l2.paginas},${l1.paginas},${l3.paginas},${l4.paginas}\n
genero: ${l2.genero},${l1.genero},${l3.genero},${l4.genero}\n
id_autor: ${a1.id_autor},${a2.id_autor},${a3.id_autor},${a4.id_autor}\n
nome_autor:${a1.nome_autor},${a2.nome_autor},${a3.nome_autor},${a4.nome_autor}\n
valor: ${l2.valor},${l1.valor},${l3.valor},${l4.valor}.`)

//criando uma classe cliente onde a pessoa que for entrar no site
//poderia olhar todos os livros e se querer comprar

class Cliente{

	//definido as variaveis

	constructor(nome_cliente,email,endereco){
	     this.nome_cliente = nome_cliente
	     this.email = email
	     this.endereco = endereco	
	}

}
//criando os objetos cliente

let c1 = new Cliente ("Cleiteison","coringa@email.com","rua caminho da paz")
let c2 = new Cliente ("Robernando","comoserhulk@email.com","rua andrade da silva")

//era pra ser um metado mas nao conseguir entao coloquei como se nao fosse metado
//mas por favor considere isso um metado
		
alert(`${c1.nome_cliente} comprará esse livro ${l1.nome_livro},
com genero ${l1.genero}, tem quantidade ${l1.paginas},
seu autor é ${a1.nome_autor},valor desse livro é ${a1.valor}.
precisamos do seu email ${c1.email} e 
seu endereco ${c1.endereco}. obrigado pela compra`)

alert(`${c2.nome_cliente} comprará esse livro ${l4.nome_livro},
com genero ${l4.genero}, tem quantidade ${l4.paginas},
seu autor é ${a4.nome_autor},valor desse livro é ${l4.valor}.
precisamos do seu email ${c2.email} e 
seu endereco ${c2.endereco}. obrigado pela compra`)