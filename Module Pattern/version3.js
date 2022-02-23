const data = {
  USD: { EUR: 0.82, GBP: 0.74, JPY: 0.74 },
  EUR: { USD: 1.23, GBP: 0.91, JPY: 0.74 },
  GBP: { USD: 1.35, EUR: 1.1, JPY: 0.74 },
  JPY: { USD: 1.35, EUR: 1.1, GBP: 0.74 },
};

const currencyKeys = Object.keys(data);

function getErrors(fromTarget, toTarget, amount) {
  let errors = [];
  if (fromTarget && toTarget) {
    if (fromTarget.value === toTarget.value) {
      errors.push("Farkli degerler secmelisiniz");
    }
  } else {
    errors.push("Secim yapmalisiniz.");
  }

  const num = new Number(amount);
  if (isNaN(num)) {
    errors.push("Amount sayi olmali");
  }
  return errors;
}

function renderErrors(errors, root) {
  const errorList = document.createElement("ul");
  const errorsHTML = errors.reduce((acc, error) => {
    return acc + `<li>${error}</li>`;
  }, "");
  errorList.innerHTML = errorsHTML;
  root.appendChild(errorList);
}

function renderResult(fromTarget, toTarget, amount, root) {
  const currentCurrencyObject = data[fromTarget.value];
  const resultForOne = currentCurrencyObject[toTarget.value];
  const result = amount * resultForOne;
  root.innerHTML =
    amount + " " + fromTarget.value + " = " + result + " " + toTarget.value;
}

function createCurrencyElements(elements, root, inputName) {
  for (let i = 0; i < elements.length; i++) {
    const currencyKeyDiv = document.createElement("div");
    const currencyKeyInput = document.createElement("input");
    currencyKeyInput.setAttribute("type", "radio");
    currencyKeyInput.setAttribute("name", inputName);
    currencyKeyInput.setAttribute("id", inputName + elements[i]);
    currencyKeyInput.setAttribute("value", elements[i]);

    const currencyKeyLabel = document.createElement("label");
    currencyKeyLabel.setAttribute("for", inputName + elements[i]);
    currencyKeyLabel.textContent = elements[i];

    currencyKeyDiv.appendChild(currencyKeyInput);
    currencyKeyDiv.appendChild(currencyKeyLabel);
    root.appendChild(currencyKeyDiv);
  }
}

//from
const parentEl = document.querySelector("#currency-box-from");
const fromInputName = "currency_from";
createCurrencyElements(currencyKeys, parentEl, fromInputName);

// to
const parentToEl = document.querySelector("#currency-box-to");
const toInputName = "currency_to";
createCurrencyElements(currencyKeys, parentToEl, toInputName);

const calculateButton = document.querySelector("#calculate-button");
calculateButton.addEventListener("click", function () {
  // kimden ceviriyourz
  const fromTarget = document.querySelector(
    "input[name='currency_from']:checked"
  );
  // kime ceviriyoruz
  const toTarget = document.querySelector("input[name='currency_to']:checked");

  const currencyResult = document.querySelector("#currency-result");
  let amount = document.querySelector("input[name='amount']").value;

  currencyResult.innerHTML = "";

  const errors = getErrors(fromTarget, toTarget, amount);

  if (errors.length > 0) {
    renderErrors(errors, currencyResult);
  } else {
    renderResult(fromTarget, toTarget, amount, currencyResult);
  }
});
