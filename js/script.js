/* =============== Animação Escrevendo ===============*/

var typed = new Typed(".typing", {
    strings:["", "Desenvolvedor Web", "Desenvolvedor Front-End"],
    typeSpeed:80,
    BackSpeed:80,
    loop:true
})

/* =============== Aside ===============*/

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    for(let i=0; i<totalNavList; i++) {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function(){
            for(let j=0; j<totalNavList; j++) {
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
        })
    }
    function showSection(element) {
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }