// Calculadora básica en JavaScript: Nome da Calculadora VELOX
function pegarValores() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if (num1 === "" || num2 === "") {
        mostrarResultado("Preencha todos os campos!");
        return null;
    }

    num1 = Number(num1);
    num2 = Number(num2);

    if (isNaN(num1) || isNaN(num2)) {
        mostrarResultado("Digite apenas números válidos!");
        return null;
    }

    return { num1, num2 };
}

function mostrarResultado(msg) {
    document.getElementById("resultado").innerText = "Resultado: " + msg;
}

function somar() {
    let valores = pegarValores();
    if (!valores) return;

    let resultado = valores.num1 + valores.num2;
    mostrarResultado(resultado);
}

function subtrair() {
    let valores = pegarValores();
    if (!valores) return;

    let resultado = valores.num1 - valores.num2;
    mostrarResultado(resultado);
}

function multiplicar() {
    let valores = pegarValores();
    if (!valores) return;

    let resultado = valores.num1 * valores.num2;
    mostrarResultado(resultado);
}

function dividir() {
    let valores = pegarValores();
    if (!valores) return;

    // Validação: divisão por zero
    if (valores.num2 === 0) {
        mostrarResultado("Não é possível dividir por zero!");
        return;
    }

    let resultado = valores.num1 / valores.num2;
    mostrarResultado(resultado);
}
function porcentagem() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let resultado = (num1 * num2) / 100;
    mostrarResultado(resultado);
}