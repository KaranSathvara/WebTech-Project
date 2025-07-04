// Show button after scrolling
window.onscroll = function () {
  let btn = document.getElementById("topBtn");
  btn.style.display = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ? "block" : "none";
};

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
