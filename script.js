function doisNumeros() {
    const titulo = alert(`Desafio - Sintaxe e Operadores. Click no ok para continuar!`)

    let n1 = Number(prompt('Digite o primeiro número:'));
    let n2 = Number(prompt('Digite o segundo número:'));
    let result;
    var print_result = "";

    !n1 || !n2 ? alert(`Erro - Operação inválida!`) + novamente() : n1 == n2 ? print_result += "O número " + n1 + " e " + n2 + " são iguais!" : print_result += "O número " + n1 + " e " + n2 + " não são iguais!"

    result = n1 + n2;

    if (result > 10 && result < 20) {
        print_result += " Sua soma é " + result + ", que é maior que 10 e menor que 20"

        alert(print_result)
        novamente();
    } else if (result < 10) {
        print_result += " Sua soma é " + result + ", que é menor que 10 e menor que 20"

        alert(print_result)
        novamente();
    } else if (result == 10 || result == 20) {
        print_result += " Sua soma é " + result + " que é igual a " + result

        alert(print_result)
        novamente();
    }

    function novamente() {
        let opcao = prompt('Deseja verificar outro valor?\n 1 - Sim\n 2 - Não');

        opcao == 1 ? doisNumeros() : opcao == 2 ? alert('Ok, até mais!') : alert('Digite uma opção válida!')
    }
}
doisNumeros();