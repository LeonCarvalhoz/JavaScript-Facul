
for (let i = 0; i <= 100; i+=2) {
    console.log(i)
    }
    
    /////////////////////////////////////////////////////////
    
    //let array = [2,4,6,8]
    
    let soma = 0
    
    for (let i = 0; i < array.length; i++) {
    soma += array[i]
    }
    console.log(soma)
    //////////////////////////////////////////////////////////
    //let array = [-2,-4,-6,-8,2,4,6,8];
    
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] < 0) {
        array.splice(i, 1);
      }
    }
    
    console.log(array);
    /////////////////////////////////////////////////////////
    let array = [2,4,6,8];
    
    for (let i = array.length - 1; i >= 0; i--) {
    array[i] = array[i] * 2;
      }
    console.log(array);
    ////////////////////////////////////////////////////////
    function soma(a, b) {
        return new Promise((resolve, reject) => {
        const resultado = a + b
        if(resultado % 2 == 0){
            resolve(resultado)
        }else{
            reject("Não é par")
        }
    
        })
    }
    
    soma(2, 2)
        .then((resultado) => {console.log(resultado)})
        .catch((erro) => {console.log(erro)})
    