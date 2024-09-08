let chat_list_toggle_button=document.getElementById(`chat_list_toggle_button`);

chat_list_toggle_button.addEventListener(('click'),(event)=>{
    console.log("toogled");
    
    document.getElementById(`chat_list`).classList.toggle(`chat_list_visible`);
})