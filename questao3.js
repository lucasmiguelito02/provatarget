// Simulação de dados vindo de um arquivo JSON
const faturamentoMensal = [
    {"dia": 1, "valor": 221.50},
    {"dia": 2, "valor": 230.00},
    {"dia": 3, "valor": 0.00},
    {"dia": 4, "valor": 540.00},
    {"dia": 5, "valor": 0.00},
    {"dia": 6, "valor": 350.00},
    {"dia": 7, "valor": 480.00},
    {"dia": 8, "valor": 0.00},
    {"dia": 9, "valor": 650.00},
    {"dia": 10, "valor": 310.00}
  ];

  // Função para calcular o menor, maior e dias acima da média
  function calcularFaturamento(faturamentoMensal) {
    // Inicializa o menor e maior faturamento com o primeiro valor válido (não-zero)
    let menorFaturamento = null;
    let maiorFaturamento = null;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;

    // Iterar sobre o vetor de faturamento diário
    faturamentoMensal.forEach(dia => {
      if (dia.valor > 0) { // Ignora dias sem faturamento (valor == 0)
        // Inicializa menor e maior com o primeiro valor válido, se ainda não forem definidos
        if (menorFaturamento === null || dia.valor < menorFaturamento) {
          menorFaturamento = dia.valor;
        }
        if (maiorFaturamento === null || dia.valor > maiorFaturamento) {
          maiorFaturamento = dia.valor;
        }
        // Soma o valor do faturamento e conta os dias válidos
        somaFaturamento += dia.valor;
        diasComFaturamento++;
      }
    });

    // Calcula a média mensal (considerando apenas dias com faturamento)
    const mediaMensal = somaFaturamento / diasComFaturamento;

    // Conta o número de dias com faturamento superior à média
    let diasAcimaDaMedia = faturamentoMensal.filter(dia => dia.valor > mediaMensal).length;

    return {
      menorFaturamento,
      maiorFaturamento,
      diasAcimaDaMedia,
      mediaMensal
    };
  }

  // Chama a função e exibe os resultados
  const resultado = calcularFaturamento(faturamentoMensal);

  console.log(`Menor valor de faturamento: R$ ${resultado.menorFaturamento.toFixed(2)}`);
  console.log(`Maior valor de faturamento: R$ ${resultado.maiorFaturamento.toFixed(2)}`);
  console.log(`Número de dias com faturamento superior à média: ${resultado.diasAcimaDaMedia}`);
  console.log(`Média mensal: R$ ${resultado.mediaMensal.toFixed(2)}`);
