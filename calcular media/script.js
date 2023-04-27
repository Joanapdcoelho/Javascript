// função para calcular a média
function calcularMedia() {
    /*função document.getElementById() para obter os valores dos três campos de notas na página HTML e armazená-los nas variáveis nota1, nota2 e nota3 */
    var nota1 = parseInt(document.getElementById("disciplina1").value.trim());
    var nota2 = parseInt(document.getElementById("disciplina2").value.trim());
    var nota3 = parseInt(document.getElementById("disciplina3").value.trim()); 
    //método trim() é usado para remover espaços em branco no início e no final dos valores, caso eles existam.  

    /* função isNaN() 'Not a Number' para verificar se algum dos valores não é um número válido. */
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        /*Se algum dos valores não for um número, exibimos mensagem de erro usando a função alert() e retornamos false para interromper a execução da função. */
        alert("Erro! Todos os campos devem ser preenchidos e com notas entre 0 e 20!");
        return false;
    } 

    /* verificamos se todas as notas estão dentro do intervalo de 0 a 20 usando uma condição 'if' com várias cláusulas or '||' */
    if (nota1 < 0 || nota1 > 20 || nota2 < 0 || nota2 > 20 || nota3 < 0 || nota3 > 20) {
        /* Se alguma nota estiver fora do intervalo, exibimos uma mensagem de erro e retornamos false */
        alert("Erro! Notas devem ser entre 0 e 20!");
        return false;
    } 

    else {
        /* Se nenhuma das condições anteriores se verificar, ele faz o cálculo da média */
        var media = (nota1 + nota2 + nota3) / 3;
        /* se a média for menor ou igual a 7 é reprovado */
        if (media <= 7) {
            /* document.getElementById().innerHTML para exibir uma mensagem na página HTML com base no valor da média.  */
            document.getElementById("resultado").innerHTML = "<div class='notaReprovado'>Reprovado! A sua média foi: " + media.toFixed(0) + "</div>";            
        } 
        /* se a média for maior ou igual a 10 é aprovado */
        else if (media >= 10) {
            document.getElementById("resultado").innerHTML = "<div class='notaAprovado'>Parabéns, foi Aprovado! A sua média foi: " + media.toFixed(0) + "</div>";            
        } 
        /* Senão, vai a oral. Significa que a nota ficou fora das condições anteriores, ou seja ficou entre 8 e 9 */
        else {            
            document.getElementById("resultado").innerHTML = "<div class='notaOral'>Oral! A sua média foi: " + media.toFixed(0) + "</div>";
        }
    }
}