const btns=document.querySelectorAll(".btn")
const main=document.querySelector("main")
btns.forEach((btn)=>{
btn.addEventListener("click",()=>{
    main.style.backgroundColor=btn.value;
});

});
