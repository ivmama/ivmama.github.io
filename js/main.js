(function () {
  window.addEventListener("mousemove", function (e) {
    if (window.innerWidth > 1000) {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      document.querySelector(".castle").style.transform =
        "translate(" + x * 20 + "px, " + y * 20 + "px)";
      document.querySelector(".man").style.transform =
        "translate(-" + x * 50 + "px, -" + y * 50 + "px)";
    }
  });
})();




