window.addEventListener("scroll", function() {
    var header = document.getElementById("main-header");

    // Defina a quantidade de pixels que você deseja que a página role antes de alterar o plano de fundo
    var scrollThreshold = window.innerHeight/2;

    if (window.scrollY >= scrollThreshold) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
