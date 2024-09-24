const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };

  // Inicializando o total em zero
  let faturamentoTotal = 0;

  //  faturamento total
  faturamentoTotal += faturamento.SP;
  faturamentoTotal += faturamento.RJ;
  faturamentoTotal += faturamento.MG;
  faturamentoTotal += faturamento.ES;
  faturamentoTotal += faturamento.Outros;

  //  percentual de cada estado e exibindo o resultado
  console.log("Percentual de faturamento por estado:");
  console.log("SP: " + ((faturamento.SP / faturamentoTotal) * 100).toFixed(2) + "%");
  console.log("RJ: " + ((faturamento.RJ / faturamentoTotal) * 100).toFixed(2) + "%");
  console.log("MG: " + ((faturamento.MG / faturamentoTotal) * 100).toFixed(2) + "%");
  console.log("ES: " + ((faturamento.ES / faturamentoTotal) * 100).toFixed(2) + "%");
  console.log("Outros: " + ((faturamento.Outros / faturamentoTotal) * 100).toFixed(2) + "%");
