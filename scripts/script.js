const languageDropdown = document.querySelectorAll(".language");
const faqListItem = document.querySelectorAll("#faq-list ul li");
const printButton = document.getElementById("printButton");

languageDropdown.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.querySelectorAll(".language-dropdown").forEach((i) => {
      i.classList.toggle("show");
    })
  })
})

faqListItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.classList.toggle("show");
  })
})

printButton.addEventListener("click", function() {
  window.print();
});