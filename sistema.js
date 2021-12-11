let numeroDEAlunos =10
for (let contador= 0; contador <=numeroDEAlunos; contador++) {
   console.log(contador)
    
    if(contador == 0){
        console.log("Onúmero atual é zero")
    }else if(contador % 2 == 0){
        console.log("O número é par ")
    }else{
        console.log( "O número é impar")
    }
}

   exemplo 2

   let numeroDEAlunos =10
for (let contador= 0; contador <=numeroDEAlunos; contador++) {
   //console.log(contador)
    
    if(contador == 0){
        console.log("Onúmero atual é zero")
    }else if(contador % 2 == 0){
        console.log("O número " + contador + " é par " )
    }else{
        console.log(`O número  ${contador} é impar`)
    }
}


    // exemplo 3 wille

    let numeroDEAlunos =10
    let contador =0
while (contador  <= numeroDEAlunos) {
    //console.log (contator)
    
    if(contador == 0){
        console.log("Onúmero atual é zero")
    }else if(contador % 2 == 0){
        console.log("O número " + contador + " é par " )
    }else{
        console.log(`O número  ${contador} é impar`)
    }
    contador++;
}


// exemplo 4 lista 
let nomeDeAluno= ["Marcel","Franklin","Rita","Afrânio"]
for (let nome of nomeDeAluno) {
   console.log(`esta pessoa se chama${nome}`)
}   



       