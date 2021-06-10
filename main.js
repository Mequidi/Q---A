const qArticle = document.querySelectorAll(".q-article");

qArticle.forEach(function(art){
    const btn = art.querySelector(".q-btn");
   
    btn.addEventListener("click",function(){
        qArticle.forEach(function(item){
        if(item!==art)
            item.classList.remove("show-text");
        art.classList.toggle("show-text");
        })
    })
})
