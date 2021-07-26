(function() {
    const calculadora = (valor1 = 0, op = '', valor2 = 0) => {
        switch (op) {
            case '+':
                console.log(`Operação de soma: ${(valor1+valor2).toFixed(2)}`);
                break;
            case '-':
                console.log(`Operação de subtração: ${(valor1-valor2).toFixed(2)}`);
                break;
            case '/':
                console.log(`Operação de divisão: ${(valor1/valor2).toFixed(2)}`);
                break;
            case '*':
                console.log(`Operação de multiplicação: ${(valor1*valor2).toFixed(2)}`);
                break;
            case '%':
                console.log(`Operação de resto de divisão: ${(valor1%valor2).toFixed(0)}`);
                break;
            case '^':
                console.log(`Operação com expoente: ${(valor1**valor2)}`);
                break;
            default:
                console.log("A calculadora não realiza este tipo de operação");
        }
    }
    calculadora(5, '+', 5);
    calculadora(10, '-', 2);
    calculadora(21.5, '/', 3);
    calculadora(8, '*', 2);
    calculadora(10, '%', 4);
    calculadora(2, '^', 4);
})()