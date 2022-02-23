// datamizi tutalim
const data = {
  USD: { EUR: 0.82, GPB: 0.74 },
  EUR: { USD: 1.23, GPB: 0.91 },
  GBP: { USD: 1.35, EUR: 1.1 },
};

// herbirini ekrana yazmak, data objesinin keylerini alalim.
const currencyKeys = Object.keys(data);

// elemanlari to ve froma ekleecek fonksiyon
// elements, hangi currencyleri yazdirmak (usd, eur, gbp)
// root, nereye yazmak istiyorum (from ve to, html elemanlari)
// inputName, secili elemana isim verelim (from ve to, string)
function createCurrencyElements(elements, root, inputName) {
  // datada 3 adet obje var, hepsini yazdirmak icin for donmeliyiz.
  for (let i = 0; i < elements.length; i++) {
    // tutacak olan divi olusturalim
    const currencyKeyDiv = document.createElement("div");
    // input elemanlarini olusturalim
    const currencyKeyInput = document.createElement("input");
    // unputa gerekli attibutelari atalim
    // tipinin radio oldugunu belirtelim
    currencyKeyInput.setAttribute("type", "radio");
    // nameini dinamik olarak fonksyiondan alalim.
    currencyKeyInput.setAttribute("name", inputName);
    // labelin hedeflemesi icin id verelim
    currencyKeyInput.setAttribute("id", inputName + elements[i]);
    // ilgili currency degerlini value olarak verelim.
    currencyKeyInput.setAttribute("value", elements[i]);

    // labeli olusturalim
    const currencyKeyLabel = document.createElement("label");
    // ilgili radioyu secmesi icin for atamasi yapalim.
    currencyKeyLabel.setAttribute("for", inputName + elements[i]);
    // labelin icinde o anki currencyi yazsin
    currencyKeyLabel.textContent = elements[i];

    // olusturdugumuz elemanlari ekleyelim
    currencyKeyDiv.appendChild(currencyKeyInput);
    currencyKeyDiv.appendChild(currencyKeyLabel);

    // tutacak olan divi htmle ekleyelim
    root.appendChild(currencyKeyDiv);
  }
}

// from icin fonksiyonu cagiralim
const parentEl = document.querySelector("#currency-box-from");
const fromInputName = "currency_from";
createCurrencyElements(currencyKeys, parentEl, fromInputName);

// to icin fonksiyonu cagiralim
const parentToEl = document.querySelector("#currency-box-to");
const toInputName = "currency_to";
createCurrencyElements(currencyKeys, parentToEl, toInputName);

// calculate butonuna tiklama askiyonu
// calculate butonunu getirelim.
const calculateButton = document.querySelector("#calculate-button");
// click eventi atayalim
calculateButton.addEventListener("click", function () {
  // neyi ceviriyoruz (usd, eur ..)
  const fromTarget = document.querySelector(
    "input[name='currency_from']:checked"
  ).value;
  // neye ceviriyoruz (usd, eur ..)
  const toTarget = document.querySelector(
    "input[name='currency_to']:checked"
  ).value;
  // ne kadar ceviriyouz (ornek: 5, 10 );
  const amount = document.querySelector("input[name='amount']").value;

  // cevrilmek istenen currency objesini tutalim.
  const currentCurrencyObject = data[fromTarget];
  // 1 birim icin karsiligini getirelim
  const resultForOne = currentCurrencyObject[toTarget];
  // kullanicinin girdigi miktarla carpalim
  const result = amount * resultForOne;

  // cikan sonucu yazdiralim
  const currencyResult = document.querySelector("#currency-result");
  currencyResult.innerHTML =
    amount + " " + fromTarget + " = " + result + " " + toTarget;
});
