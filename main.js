const article = document.querySelector("article");
const progressBar = document.querySelector(".progress");

window.addEventListener("scroll", () => {
  let scrollValue = window.scrollY;
  let articleHeight = article.clientHeight - window.innerHeight;

  let progressPercentage = (scrollValue / articleHeight) * 100;

  progressBar.style.width = progressPercentage + "%";
});
