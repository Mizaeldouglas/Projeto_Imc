
let calcular = document.getElementById('calcular');


function imc(){
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        let valorIMC = (peso / (altura * altura)).toFixed(1);
        let classificaçao = '';
        if(valorIMC < 18.5){
            classificaçao = 'abaixo do Peso.'
        }else if(valorIMC < 25){
            classificaçao = 'Com o peso ideal. Parabéns!'
        }else if(valorIMC < 30){
            classificaçao = 'Levemente acima do peso'
        }else if(valorIMC < 35){
            classificaçao = 'Com obesidade grau I'
        }else if(valorIMC < 40){
            classificaçao = 'Com obesidade grau II'
        }else{
            classificaçao = 'Com obesidade grau III. Cuidado!'
        }
        

        resultado.innerHTML = `${nome} seu IMC é  ${valorIMC} e você esta ${classificaçao}`
    }else{
        resultado.innerHTML = "Preencha todos os campos!!!"
    };

};

calcular.addEventListener('click', imc);
