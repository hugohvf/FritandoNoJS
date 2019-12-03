var checaIdade = function(idade) {
    return new Promise(function(resolve, reject){
        
        function run(){
            if (idade>18){
            resolve();
        } else {
            reject();
        } 
    }
    setTimeout(run,2000);
    
});
}

checaIdade(20)
 .then(function(resolve) {
 console.log("Maior que 18");
 })
 .catch(function(reject) {
 console.log("Menor que 18");
 });