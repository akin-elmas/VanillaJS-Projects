/* Ornek 3:
  - toplam kelime sayisini h1 den sonraya yazdiralim.
*/

const bodyEl = document.querySelector("body");
const paragraph = document.querySelector("p");
const paragraphArr = paragraph.innerHTML.split(" ");
const wordsCount = paragraphArr.length;

const wordsCountEl = document.createElement("span");
wordsCountEl.innerHTML = "There are " + wordsCount + " words in text.";

bodyEl.insertBefore(wordsCountEl, paragraph);

// uygulama
// tahmini okuma suresini dakika cinsinden yazdiralim.

/* Ornek 4:
  - Yazida yer alan soru isaretlerini 🤔, unlem isaretlerini ise 😲 ile degistirelim.
*/

const paragraph = document.querySelector("p");

/* const replacements = [
  {from: "!", to: "😲"},
  {from: "?", to: "🤔"},
  {from: " ", to: "😛"},
  {from: "p", to: "😂"}
]
replacements.forEach((replacement)=> {
  paragraph.innerHTML = paragraph.innerHTML.replaceAll(replacement.from, replacement.to)
}); */

//paragraph.innerHTML = paragraph.innerHTML.replaceAll("?", "🤔")
paragraph.innerHTML = paragraph.innerHTML.replace(/\?/g, "🤔");

paragraph.innerHTML = paragraph.innerHTML.replace(/\!/g, "😲");

/* Ornek 5:
  - tum cumleleri ayri bir paragraf icinde.
*/

const paragraph = document.querySelector("p");
let newParagraph = "";

const sentences = paragraph.innerHTML.split(".");

//trim sag sol bosluklari siler
sentences.forEach((sentence) => {
  const newSentence = sentence.trim();
  if (newSentence) {
    newParagraph += "<p>" + sentence + ".</p>";
  }
});

paragraph.innerHTML = newParagraph;

// uygulama, p tagiyla \n ile satir gecelim
