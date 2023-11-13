class Banco{

  constructor(limite,agencia,cpf,nome_do_usuario){
     this.limite=limite;
            this.agencia=agencia;
       this.cpf=cpf;
       this.nome_do_usuario=nome_do_usuario;
         
    }
SetarEmail(Email){
if (typeof Email == "string")
this.contato = Email
}


}


let b1 = new Banco
 (3500,"Santader",838.891,"Mbappe")

let b2 = new Banco
 (6000,"Inter",893.781,"Ednaldo  Pereira")

let b3 = new Banco
 (9500,"Nubank",438.278,"Felipe Neto")

let b4 = new Banco
 (6700,"paypay",478.472,"Adam Sandler")

console.log (`${b1.nome_do_usuario} 
tem um banco com agencia de 
${b1.agencia} com limite de 
${b1.limite} e sua senha é seu cpf que é
${b1.cpf} `)

console.log (`${b2.nome_do_usuario} 
tem um banco com agencia de 
${b2.agencia} com limite de 
${b2.limite} e sua senha é seu cpf que é
${b2.cpf} `)

console.log (`${b3.nome_do_usuario} 
tem um banco com agencia de 
${b3.agencia} com limite de 
${b3.limite} e sua senha é seu cpf que é
${b3.cpf} `)

console.log (`${b4.nome_do_usuario} 
tem um banco com agencia de 
${b4.agencia} com limite de 
${b4.limite} e sua senha é seu cpf que é
${b4.cpf} `)

b1.SetarEmail("esseémeuemail@email.com")
console.log(`${b1.nome_do_usuario} seu email é
 ${b1.contato}`)

 b2.SetarEmail("Aterraéplana@email.com")
console.log(`${b2.nome_do_usuario} seu email é
 ${b2.contato}`)

 b3.SetarEmail("Italoémeuheroi@email.com")
console.log(`${b3.nome_do_usuario} seu email é
 ${b3.contato}`)
 
 b4.SetarEmail("gostodeE-Girl@email.com")
console.log(`${b4.nome_do_usuario} seu email é
 ${b4.contato}`)
