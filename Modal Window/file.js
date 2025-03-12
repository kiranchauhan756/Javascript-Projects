let buttons=document.querySelectorAll(".show-modal");
let overlay=document.querySelector(".overlay");
let modal=document.querySelector(".modal");

document.querySelector(".close-modal").addEventListener('click',()=>{
    overlay.classList.add("hidden");
        modal.classList.add("hidden");
})

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',()=>{
        overlay.classList.remove("hidden");
        modal.classList.remove("hidden");
    })
}

document.addEventListener('keypress',(e)=>{
    console.log(e.key);

    if(e.key==='Escape' || e.key==='Enter'){
        if(!modal.classList.contains("hidden")){
            overlay.classList.add("hidden");
            modal.classList.add("hidden");
        }
    }
})