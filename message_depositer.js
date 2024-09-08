
let send_button=document.getElementById(`send_right_button`);
let receive_button=document.getElementById(`receive_left_button`);


let chat_box_chat_content_design=document.getElementById('chat_box_char_content_design');

let text_input=document.getElementById(`chat_text_input`);
text_input.value=" ";

let store_time=new Date();
let hour=0;
let minute=0;
let put_time=new String();
receive_button.addEventListener(('click'),(event_send)=>{
    
    hour=store_time.getHours();
    minute=store_time.getMinutes();
    put_time=hour+":"+minute;
    


    if (text_input.value!=" ") {
    let each_chat_recieved=document.createElement('div');
    each_chat_recieved.style.display="flex";
    each_chat_recieved.style.justifyContent="space-between";
    each_chat_recieved.style.maxWidth="90%";
    each_chat_recieved.style.backgroundColor="rgb(157, 154, 154)";
    each_chat_recieved.style.marginLeft="0.5em";
    each_chat_recieved.style.marginBottom="0.5em";
    each_chat_recieved.style.paddingInline="0.5em";
    each_chat_recieved.style.position="relative";
    each_chat_recieved.style.alignSelf="flex-start";




    let chat_received_content_para=document.createElement('p');
    chat_received_content_para.innerText=text_input.value;





    let chat_received_time=document.createElement('p');
    chat_received_time.innerText=put_time;
    chat_received_time.style.paddingLeft="1em";
    chat_received_time.style.fontSize="0.8em";
    chat_received_time.style.alignSelf="end";



    let chat_output=document.getElementById(`chat_output`);
    chat_output.appendChild(chat_box_chat_content_design);
    chat_box_chat_content_design.appendChild(each_chat_recieved);
    each_chat_recieved.appendChild(chat_received_content_para);
    each_chat_recieved.appendChild(chat_received_time);
    }


    console.log(text_input.value);
    text_input.value=" ";
})







send_button.addEventListener(('click'),(event_send)=>{

    
    // let each_chat_recieved=document.createElement('div');
    // each_chat_recieved.style.display="flex";
    // each_chat_recieved.style.justifyContent="space-between";
    // each_chat_recieved.style.maxWidth="80%";
    // each_chat_recieved.style.backgroundColor="rgb(157, 154, 154)";
    // each_chat_recieved.style.marginLeft="0.5em";
    // each_chat_recieved.style.marginBottom="0.5em";
    // each_chat_recieved.style.paddingInline="0.5em";
    // each_chat_recieved.style.position="relative";
    // each_chat_recieved.style.alignSelf="flex-end";







    // let chat_received_content_para=document.createElement('p');
    // chat_received_content_para.innerText="I am CHAT SENT";





    // let chat_received_time=document.createElement('p');
    // chat_received_time.innerText="Time";
    // chat_received_time.style.paddingLeft="1em"



    // let chat_output=document.getElementById(`chat_output`);
    // chat_output.appendChild(chat_box_chat_content_design);
    // chat_box_chat_content_design.appendChild(each_chat_recieved);
    // each_chat_recieved.appendChild(chat_received_content_para);
    // each_chat_recieved.appendChild(chat_received_time);


    hour=store_time.getHours();
    minute=store_time.getMinutes();
    put_time=hour+":"+minute;




    if (text_input.value!=" ") {
    let each_chat_sent=document.createElement('div');
    each_chat_sent.style.display="flex";
    each_chat_sent.style.justifyContent="space-between";
    each_chat_sent.style.maxWidth="90%";
    each_chat_sent.style.backgroundColor="rgb(157, 154, 154)";
    each_chat_sent.style.marginLeft="0.5em";
    each_chat_sent.style.marginBottom="0.5em";
    each_chat_sent.style.paddingInline="0.5em";
    each_chat_sent.style.position="relative";
    each_chat_sent.style.alignSelf="flex-end";




    let chat_sent_content_para=document.createElement('p');
    chat_sent_content_para.innerText=text_input.value;





    let chat_sent_time=document.createElement('p');
    chat_sent_time.innerText=put_time;
    chat_sent_time.style.paddingLeft="1em";
    chat_sent_time.style.fontSize="0.8em";
    chat_sent_time.style.alignSelf="end";



    let chat_output=document.getElementById(`chat_output`);
    chat_output.appendChild(chat_box_chat_content_design);
    chat_box_chat_content_design.appendChild(each_chat_sent);
    each_chat_sent.appendChild(chat_sent_content_para);
    each_chat_sent.appendChild(chat_sent_time);
    }
    console.log(text_input.value);
    text_input.value=" ";
})