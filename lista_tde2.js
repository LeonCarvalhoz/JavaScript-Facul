
for (let i = 0; i <= 100; i+=2) {
    console.log(i)
    }
    
    /////////////////////////////////////////////////////////
    
    let array1 = [2,4,6,8]
    
    let soma = 0
    
    for (let i = 0; i < array.length; i++) {
    soma += array1[i]
    }
    console.log(soma)
    //////////////////////////////////////////////////////////
    let array2 = [-2,-4,-6,-8,2,4,6,8];
    
    for (let i = array.length - 1; i >= 0; i--) {
      if (array2[i] < 0) {
        array2.splice(i, 1);
      }
    }
    
    console.log(array2);
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
    