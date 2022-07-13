// document.querySelectorAll("a[href^='#'").forEach((ancher) => {
//   ancher.addEventListener("click", (e) => {
//     e.preventDefault();
//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

const removeRepeat = (string) => {
  let finalString = "";

  for (let i = 0; i < string.length; i++) {
    if (!finalString.includes(string[i])) {
      finalString += string[i];
    }
  }
  return finalString;
};
