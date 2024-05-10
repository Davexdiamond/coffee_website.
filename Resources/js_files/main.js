
// code for page loader
let loader = document.querySelector('#loader');
if (loader) {
    window.addEventListener('load', () =>{
        loader.remove();
    });
};

// code for back to top btn
let back_top = document.querySelector(".back_top");
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 95){
        back_top.classList.add("back_top_active");
    }else{
        back_top.classList.remove("back_top_active");
    }
})

// code for side navigation bar
let menu_bar = document.getElementById('menu_bar');

function open_nav(){
    let side_bar = document.querySelector('.side_nav_bar');
    side_bar.classList.add('side_nav_bar2');
};

let close_bar = document.getElementById('xmark');

function close_nav(){
    let side_bar = document.querySelector('.side_nav_bar');
    side_bar.classList.remove('side_nav_bar2');
};

let side_bar = document.querySelector('.side_nav_bar');
side_bar.addEventListener('mouseleave' , ()=>{
    side_bar.classList.remove('side_nav_bar2');
});


// code for sticky nav bar
window.addEventListener('scroll', ()=>{
    let nav_bar = document.querySelector(".navigation");
    if(window.scrollY > 100){
        nav_bar.classList.add("sticky");
    }else{
        nav_bar.classList.remove("sticky");
    };
});

// validation for contact form

function validate_name(){
    let f_name = document.getElementById("f_name").value;
    let error_name = document.getElementById("error_name");

    if (f_name == 0) {
        error_name.innerHTML = "name is reqiured"
        error_name.style.color = "red"
        return false;
    }else if (!f_name.match(/^[a-zA-Z]+(?:\s+[a-zA-Z]+)+$/)){
        error_name.innerHTML = "please enter your name"
        error_name.style.color = "red"
        return false;
    }else{
        error_name.innerHTML = ''
        return true;
    }
    
}
function validate_email(){
    let email = document.getElementById("email").value;
    let error_email = document.getElementById("error_email");

    if (email == 0) {
        error_email.innerHTML = "email is reqiured"
        error_email.style.color = "red"
        return false;
    }else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        error_email.innerHTML = "please enter your email"
        error_email.style.color = "red"
        return false;
    }else{
        error_email.innerHTML = ''
        return true;
    }
    
}
function validate_msg(){
    let msg = document.getElementById("msg").value;
    let error_msg = document.getElementById("error_msg");

    if (msg == 0) {
        error_msg.innerHTML = "message is empty"
        error_msg.style.color = "red"
        return false;
    }else if (!msg.match(/.{1,255}/)){
        error_msg.innerHTML = "please type a message"
        error_msg.style.color = "red"
        return false;
    }else{
        error_msg.innerHTML = ''
        return true;
    }
    
}


// success message
// let form = document.getElementById('form');
// form.addEventListener('submit', ()=>{
//     let succ_wrapper = document.querySelector(".succ_wrapper");
//     succ_wrapper.classList.add("succ_wrapper_active");
// })


// let succ_ok = document.querySelector('#succ_ok');
// succ_ok.addEventListener('click', ()=>{
//     let succ_wrapper = document.querySelector(".succ_wrapper");
//     succ_wrapper.classList.remove("succ_wrapper_active");
// })