function CalcularIMC() {

  // PEGAR OS IDs DOS INPUTS QUE O USUARIO COLOCOU
  let Peso = document.getElementById("Kilogramas").value;
  let Altura = document.getElementById("altura").value;

  // Calcular o IMC
  let Calcular = (Peso / Altura ** 2).toFixed(2);

  document.getElementById("resultado").textContent = `Seu IMC é: `&{Calcular};
  if (Calcular < 18.5) {
      document.getElementById("resultado").textContent += Calcular + " - Abaixo do peso";
  }
  else if (Calcular >= 18.5 && Calcular < 24.9) {
      document.getElementById("resultado").textContent += Calcular +" - Peso normal";
  } else if (Calcular >= 25 && Calcular < 29.9) {
      document.getElementById("resultado").textContent += Calcular +" - Sobrepeso";
  } else if (Calcular >= 30 && Calcular < 34.9) {
      document.getElementById("resultado").textContent += Calcular +" - Obesidade grau 1";
  } else if (Calcular >= 35 && Calcular < 39.9) {
      document.getElementById("resultado").textContent += Calcular +" - Obesidade grau 2";
  } else if (Calcular >= 40) {
      document.getElementById("resultado").textContent += Calcular +" - Obesidade grau 3";
   } else 
      document.getElementById("resultado").textContent += " - IMC inválido"; 
  
  //mostrar o resultado na tela
}

    // // PEGAR OS IDs DOS INPUTS QUE O USUARIO COLOCOU
    // let Peso = document.getElementById("Kilogramas").value;
    // let Altura = document.getElementById("altura").value;

    // // Calcular o IMC
    // let Calcular = (Peso / Altura ** 2);

    // document.getElementById("resultado").textContent = `Seu IMC é: `+ Calcular;
    // // if (Calcular < 18.5) {
    // //     document.getElementById("resultado").textContent += " - Abaixo do peso";
    // // }
    // // else if (Calcular >= 18.5 && Calcular < 24.9) {
    // //     document.getElementById("resultado").textContent += " - Peso normal";
    // // } else if (Calcular >= 25 && Calcular < 29.9) {
    // //     document.getElementById("resultado").textContent += " - Sobrepeso";
    // // } else if (Calcular >= 30 && Calcular < 34.9) {
    // //     document.getElementById("resultado").textContent += " - Obesidade grau 1";
    // // } else if (Calcular >= 35 && Calcular < 39.9) {
    // //     document.getElementById("resultado").textContent += " - Obesidade grau 2";
    // // } else {
    // //     document.getElementById("resultado").textContent += " - Obesidade grau 3";
    // // }
    // // //mostrar o resultado na tela
    // // document.getElementById("resultado").textContent = "Seu IMC é: " + Calcular;