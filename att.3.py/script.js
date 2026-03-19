document.addEventListener('DOMContentLoaded', () => {
    const numero1Input = document.getElementById('numero1');
    const numero2Input = document.getElementById('numero2');
    const calcularBtn = document.getElementById('calcularBtn');

    const mediaSpan = document.getElementById('media');
    const somaSpan = document.getElementById('soma');
    const produtoSpan = document.getElementById('produto');
    const maiorSpan = document.getElementById('maior');
    const menorSpan = document.getElementById('menor');

    calcularBtn.addEventListener('click', () => {
        const num1 = parseFloat(numero1Input.value);
        const num2 = parseFloat(numero2Input.value);

        // Validação básica para garantir que os inputs são números
        if (isNaN(num1) || isNaN(num2)) {
            alert('Please enter valid numbers in both fields, criminal!');
            // Limpa os resultados se houver erro
            mediaSpan.textContent = '';
            somaSpan.textContent = '';
            produtoSpan.textContent = '';
            maiorSpan.textContent = '';
            menorSpan.textContent = '';
            return;
        }

        // Soma
        const soma = num1 + num2;
        somaSpan.textContent = soma.toFixed(2); // Duas casas decimais

        // Média
        const media = soma / 2;
        mediaSpan.textContent = media.toFixed(2);

        // Produto
        const produto = num1 * num2;
        produtoSpan.textContent = produto.toFixed(2);

        // Maior e Menor
        const maior = Math.max(num1, num2);
        maiorSpan.textContent = maior.toFixed(2);

        const menor = Math.min(num1, num2);
        menorSpan.textContent = menor.toFixed(2);
    });
});