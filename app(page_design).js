let ham_burger=document.getElementById(`nav_bar_hamburger`);

let nav_logo_img=document.getElementById(`nav_logo_img`);

let hamburger_close=document.getElementById(`hamburger_close`);
ham_burger.addEventListener('click',(e)=>{
    document.getElementById(`side_nav`).style.display="flex";
})


nav_logo_img.addEventListener(('click'),()=>{
    document.body.style.backgroundColor="black"
});


hamburger_close.addEventListener('click',(e)=>{
    console.log("removed");
    document.getElementById(`side_nav`).style.display="none";
})



