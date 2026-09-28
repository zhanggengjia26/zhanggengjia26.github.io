document.addEventListener("DOMContentLoaded", function () {
  // News expand
  var nb = document.getElementById("news-toggle"), list = document.querySelector(".news");
  if (nb && list) {
    if (!list.querySelector(".news-hidden")) nb.style.display = "none";
    nb.addEventListener("click", function () {
      var open = list.classList.toggle("expanded");
      var zh = document.documentElement.lang.indexOf("zh") === 0;
      nb.textContent = open ? (zh ? "收起" : "Show less") : (zh ? "展开更多" : "Show more");
    });
  }
  // Publication filter
  var f = document.getElementById("pub-filter");
  if (f) f.addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    f.querySelectorAll("button").forEach(function (x) { x.classList.toggle("on", x === b); });
    document.querySelector(".content").classList.toggle("only-first", b.dataset.f === "first");
  });
});
