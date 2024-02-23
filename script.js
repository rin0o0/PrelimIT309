//===========================SENDING TO EMAIL FUNCTION=============================

function SendMail(){
    var params = {
        from_name : document.getElementById("name").value,
        phone_number : document.getElementById("phone_no").value,
        message : document.getElementById("message").value,
        email_ad : document.getElementById("email_ad").value
    }
    emailjs.send("service_tsb95n1","template_zh0v6xy", params);
}

//===========================SCROLL ANIMATIONS===================================
ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.main-title, .section-title', { delay: 500});
ScrollReveal().reveal('.home .image, .info, .description', { delay: 600, origin:'left'});
ScrollReveal().reveal('.home .text-box, .products .image', { delay: 700, origin:'right'});
ScrollReveal().reveal('.media-icons i', { delay: 500, origin:'bottom', interval:200});
ScrollReveal().reveal('.about .image, .send-btn', { delay: 500, origin:'top',});
ScrollReveal().reveal('.media-info li', { delay: 500, origin:'left', interval:200});
ScrollReveal().reveal('.img-card', { delay: 500, origin:'bottom', interval:300});
ScrollReveal().reveal('.slider', { delay: 600, origin:'top'});
ScrollReveal().reveal('.styled-input', { delay: 500, origin:'right', interval:300});

//===========================NAV BAR ANIMATION===================================

window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


//===========================C A R O U S E L===================================

document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
    });

carousel.insertAdjacentHTML(
    "beforeend",
    `
        <div class="carousel__nav">
            ${buttonsHtml.join("")}
        </div>
    `
);

const buttons = carousel.querySelectorAll(".carousel__button");

buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
    // un-select all the items
    items.forEach((item) =>
        item.classList.remove("carousel__item--selected")
    );
    buttons.forEach((button) =>
        button.classList.remove("carousel__button--selected")
    );

    items[i].classList.add("carousel__item--selected");
    button.classList.add("carousel__button--selected");
    });
});

// Select the first item on page load
items[0].classList.add("carousel__item--selected");
buttons[0].classList.add("carousel__button--selected");
});


var counter = 2
setInterval(function(){
document.getElementById('radio' + counter).checked = true;
counter++
if (counter > 5){
    counter = 1;
}
}, 4000);


//===========================BUTTON ANIMATION===================================
send_btn = document.querySelector(".send-btn");

send_btn.onclick = function(){
    this.innerHTML = "<div class='loader'></div>";
    setTimeout(() => {
        this.innerHTML ="Message Sent";
        this.style = "background: black; color:white; pointer-events:none;";
    },2000)
    SendMail();
}



dnl_btn = document.querySelector(".dnl-btn");

dnl_btn.onclick = function(){
    this.innerHTML = "<div class='loader'></div>";
    setTimeout(() => {
        this.innerHTML ="Downloaded";
        this.style = "background: white; color:black; pointer-events:none;";
    },1500)
}

