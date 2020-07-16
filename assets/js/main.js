// Nettobetrag + Mehrwertsteuer = Bruttobetrag.
// Nettobetrag * (1 + Mehrwertsteuersatz) = Bruttobetrag.
// Bruttobetrag/ (1 + Mehrwertsteuersatz) = Nettobetrag.
// Bruttobetrag – Nettobetrag = Mehrwertsteuerbetrag.
// mws - 19% or 7%

function showNettoOrBrutto() {
  if (toNetto.checked == true) {
    document.getElementById("betrag").innerHTML =
      "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro";
  } else if (toBrutto.checked == true) {
    document.getElementById("betrag").innerHTML =
      "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro";
  }
}

function berechnen() {
  console.log("working");
  let mwsRate = document.getElementById("form").mws.value;
  let input = document.getElementById("input").value;
  let mwsResult;
  let result;

  if (toNetto.checked == true) {
    result = input / mwsRate;
    mwsResult = input - result;
    document.getElementById("bn-result").innerHTML = `Nettobetrag (Endpreis)`;
  } else if (toBrutto.checked == true) {
    result = input * mwsRate;
    mwsResult = result - input;
    document.getElementById("brutto-result").innerHTML =
        `Bruttobetrag (Endpreis)`;
  }

  document.getElementById("mehrwertsteuerbetrag").innerHTML =
    "Mehrwertsteuerbetrag: ";
  document.getElementById("mws-result").innerHTML = `${mwsResult.toFixed(2)} €`;
  document.getElementById("bn-result").innerHTML = `: ${result.toFixed(2)} €`;
}
