function initQuestion() {
  const faqList = document.querySelectorAll(".faq-lista dt");
  const classActivate = "active";

  if (faqList.length) {
    faqList[0].classList.add(classActivate);
    faqList[0].nextElementSibling.classList.add(classActivate);

    function activeQuestion() {
      this.classList.toggle(classActivate);
      this.nextElementSibling.classList.toggle(classActivate);
    }

    faqList.forEach((item) => {
      item.addEventListener("click", activeQuestion);
    });
  }
}
initQuestion();
