 function analisarSequencia() {
      const n1 = parseInt(document.getElementById("n1").value);
      const n2 = parseInt(document.getElementById("n2").value);
      const n3 = parseInt(document.getElementById("n3").value);

      if (isNaN(n1) || isNaN(n2) || isNaN(n3) || n1 <= 0 || n2 <= 0 || n3 <= 0) {
        alert("Por favor, insira três números inteiros positivos.");
        return;
      }

      const sequencia = [n1, n2, n3];
      let padrao = "";
      let proximos = [];

      const diff1 = n2 - n1;
      const diff2 = n3 - n2;

      const ratio1 = n2 / n1;
      const ratio2 = n3 / n2;

      const isAritmetica = diff1 === diff2;
      const isGeometrica = Number.isInteger(ratio1) && Number.isInteger(ratio2) && ratio1 === ratio2;

      if (isAritmetica) {
        padrao = "Progressão Aritmética";
        for (let i = 0; i < 5; i++) {
          sequencia.push(sequencia[sequencia.length - 1] + diff1);
        }
      } else if (isGeometrica) {
        padrao = "Progressão Geométrica";
        for (let i = 0; i < 5; i++) {
          sequencia.push(sequencia[sequencia.length - 1] * ratio1);
        }
      } else {
        padrao = "Padrão Personalizado";
        for (let i = 0; i < 5; i++) {
          const len = sequencia.length;
          sequencia.push(sequencia[len - 1] + sequencia[len - 2]);
        }
      }

      document.getElementById("resultado").innerHTML = `
        <strong>Padrão identificado:</strong> ${padrao}<br>
        <strong>Sequência completa:</strong> ${sequencia.join(', ')}
      `;
    }