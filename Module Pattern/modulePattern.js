const currencyModule = (function () {
  const data = {
    USD: { EUR: 0.82, GBP: 0.74, JPY: 0.74 },
    EUR: { USD: 1.23, GBP: 0.91, JPY: 0.74 },
    GBP: { USD: 1.35, EUR: 1.1, JPY: 0.74 },
    JPY: { USD: 1.35, EUR: 1.1, GBP: 0.74 },
  };
  const currencyKeys = Object.keys(data);

  const $parentFromEl = document.querySelector("#currency-box-from");
  const $parentToEl = document.querySelector("#currency-box-to");
  const $currencyResult = document.querySelector("#currency-result");
  const $calculateButton = document.querySelector("#calculate-button");

  const currencyFromInputName = "currency_from";
  const currencyToInputName = "currency_to";
  const amountInputName = "amount";

  const getCheckedFromTarget = () => {
    return document.querySelector(
      "input[name='" + currencyFromInputName + "']:checked"
    );
  };

  const getCheckedToTarget = () => {
    return document.querySelector(
      "input[name='" + currencyToInputName + "']:checked"
    );
  };

  const getAmount = () =>
    document.querySelector("input[name='" + amountInputName + "']").value;

  const renderRadios = (elements, root, inputName) => {
    elements.forEach((element) => {
      const currencyKeyDiv = document.createElement("div");
      const currencyKeyInput = document.createElement("input");
      currencyKeyInput.setAttribute("type", "radio");
      currencyKeyInput.setAttribute("name", inputName);
      currencyKeyInput.setAttribute("id", inputName + element);
      currencyKeyInput.setAttribute("value", element);

      const currencyKeyLabel = document.createElement("label");
      currencyKeyLabel.setAttribute("for", inputName + element);
      currencyKeyLabel.textContent = element;

      currencyKeyDiv.appendChild(currencyKeyInput);
      currencyKeyDiv.appendChild(currencyKeyLabel);
      root.appendChild(currencyKeyDiv);
    });
  };

  const calculate = (selectedFrom, selectedTo, amount) => {
    const currentCurrencyObject = data[selectedFrom];
    const resultForOne = currentCurrencyObject[selectedTo];
    const result = amount * resultForOne;
    return result;
  };

  const renderResult = () => {
    const $selectedFrom = getCheckedFromTarget();
    const $selectedTo = getCheckedToTarget();
    const amount = getAmount();
    const result = calculate($selectedFrom.value, $selectedTo.value, amount);
    $currencyResult.innerHTML =
      amount +
      " " +
      $selectedFrom.value +
      " = " +
      result +
      " " +
      $selectedTo.value;
    $currencyResult.innerHTML = `${amount} ${$selectedFrom.value} = ${result} ${$selectedTo.value}`;
  };

  const bindCalculateEvent = () => {
    $calculateButton.addEventListener("click", function () {
      renderResult();
    });
  };

  const init = function () {
    // from icin radiolari olustur
    renderRadios(currencyKeys, $parentFromEl, currencyFromInputName);

    // to icin radiolari olustur
    renderRadios(currencyKeys, $parentToEl, currencyToInputName);

    // bind calculate event
    bindCalculateEvent();
  };

  return {
    init, // init: init
    calculate, // calcuate: calculate
  };
})();

currencyModule.init();
