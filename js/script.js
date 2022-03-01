// menu button 
    
let hiddenMenuEl = document.getElementById("hiddenMenu");
let openMenuEl = document.getElementById("openMenu");
let closeMenuEl = document.getElementById("closeMenu"); 
let hiddenLinkEl = document.getElementsByClassName("hidden_link")

openMenuEl.addEventListener("click",function(){
    hiddenMenuEl.classList.toggle("hideToggle")
    openMenuEl.classList.toggle("hideToggle")
    closeMenuEl.classList.toggle("hideToggle")
})

closeMenuEl.addEventListener("click",function(){
    hiddenMenuEl.classList.toggle("hideToggle")
    closeMenuEl.classList.toggle("hideToggle")
    openMenuEl.classList.toggle("hideToggle")
})

hiddenMenuEl.addEventListener("click",()=>{
    hiddenMenuEl.classList.toggle("hideToggle")
    closeMenuEl.classList.toggle("hideToggle")
    openMenuEl.classList.toggle("hideToggle")
})



// scroll to top button 

let navBarEl = document.getElementById("navBar")
let topBtnEl = document.getElementById("topBtn")
let verticalNavEl = document.getElementById("verticalNav")
let socialSideBarEl = document.getElementById("socialSideBar")
window.addEventListener("scroll",function(){
    let cond = window.scrollY > 0;
    navBarEl.classList.toggle("scrolling-active",cond)
    topBtnEl.classList.toggle("hideToggle",!(cond))
    verticalNavEl.classList.toggle("newNav",cond)
    socialSideBarEl.classList.toggle("hideToggle",cond)

})

// mode buttons

let lightModeEl = document.getElementById("lightMode");
let darkModeEl = document.getElementById("darkMode");

lightModeEl.addEventListener("click",()=>{
    darkModeEl.classList.toggle("hideToggle")
    lightModeEl.classList.toggle("hideToggle")
    document.body.classList.toggle("dark_mode")
})

darkModeEl.addEventListener("click",()=>{
    lightModeEl.classList.toggle("hideToggle");
    darkModeEl.classList.toggle("hideToggle");
    document.body.classList.toggle("dark_mode")
})

// auto type 

var typed = new Typed(".auto_type",{
    strings : ["Full-Stack Developer","Web Developer","Python Developer"],
    typeSpeed : 100,
    backSpeed : 100,
    loop : true
    });


// content expansion

let expandBtnEl = document.getElementById("expandBtn");
let collapseBtnEl = document.getElementById("collapseBtn");
let hiddenIntroEl = document.getElementById("hiddenIntro")

expandBtnEl.addEventListener("click",()=>{
    hiddenIntroEl.classList.toggle("hideToggle")
    collapseBtnEl.classList.toggle("hideToggle")
    expandBtnEl.classList.toggle("hideToggle")
})

collapseBtnEl.addEventListener("click",()=>{
    hiddenIntroEl.classList.toggle("hideToggle")
    expandBtnEl.classList.toggle("hideToggle")
    collapseBtnEl.classList.toggle("hideToggle")
})

// project carousel 

var btnEl = document.getElementsByClassName("page_btn")
var slideImgEl = document.getElementsByClassName("hover_block")
var sliderEl = document.getElementById("slideCont")
var imgEl = document.getElementsByClassName("img_cont")

btnEl[0].onclick  = () => {
    sliderEl.style.transform = "translateX(0px)";
    for (i=0;i<7;i++){
        btnEl[i].classList.remove("active")
        imgEl[i].classList.remove("project_active")
    }
    btnEl[0].classList.add("active")
    imgEl[0].classList.add("project_active")
}

slideImgEl[0].onclick = () => {
    sliderEl.style.transform = "translateX(0px)";
    for (i=0;i<7;i++){
        btnEl[i].classList.remove("active")
        imgEl[i].classList.remove("project_active")
    }
    btnEl[0].classList.add("active")
    imgEl[0].classList.add("project_active")
}

btnEl[1].onclick = () => {
    sliderEl.style.transform = "translateX(-380px)";
    for (i=0;i<7;i++){
        btnEl[i].classList.remove("active")
        imgEl[i].classList.remove("project_active")
    }
    btnEl[1].classList.add("active")
    imgEl[1].classList.add("project_active")
}

slideImgEl[1].onclick = () => {
    sliderEl.style.transform = "translateX(-380px)";
    for (i=0;i<7;i++){
        btnEl[i].classList.remove("active")
        imgEl[i].classList.remove("project_active")
    }
    btnEl[1].classList.add("active")
    imgEl[1].classList.add("project_active")
}

btnEl[2].onclick = () => {
    sliderEl.style.transform = "translateX(-780px)";
    for (i=0;i<7;i++){
        btnEl[i].classList.remove("active")
        imgEl[i].classList.remove("project_active")
    }
    btnEl[2].classList.add("active")
    imgEl[2].classList.add("project_active")
}

slideImgEl[2].onclick = () => {
    sliderEl.style.transform = "translateX(-780px)";
    for (i=0;i<7;i++){
        btnEl[i].classList.remove("active")
        imgEl[i].classList.remove("project_active")
    }
    btnEl[2].classList.add("active")
    imgEl[2].classList.add("project_active")
}

btnEl[3].onclick = () => {
    sliderEl.style.transform = "translateX(-1200px)";
    for (i=0;i<7;i++){
        btnEl[i].classList.remove("active")
        imgEl[i].classList.remove("project_active")
    }
    btnEl[3].classList.add("active")
    imgEl[3].classList.add("project_active")
}

slideImgEl[3].onclick = () => {
    sliderEl.style.transform = "translateX(-1200px)";
    for (i=0;i<7;i++){
        btnEl[i].classList.remove("active")
        imgEl[i].classList.remove("project_active")
    }
    btnEl[3].classList.add("active")
    imgEl[3].classList.add("project_active")
}

btnEl[4].onclick  = () => {
    sliderEl.style.transform = "translateX(-1600px)";
    for (i=0;i<7;i++){
        btnEl[i].classList.remove("active")
        imgEl[i].classList.remove("project_active")
    }
    btnEl[4].classList.add("active")
    imgEl[4].classList.add("project_active")
}

slideImgEl[4].onclick = () => {
    sliderEl.style.transform = "translateX(-1600px)";
    for (i=0;i<7;i++){
        btnEl[i].classList.remove("active")
        imgEl[i].classList.remove("project_active")
    }
    btnEl[4].classList.add("active")
    imgEl[4].classList.add("project_active")
}

btnEl[5].onclick  = () => {
    sliderEl.style.transform = "translateX(-2000px)";
    for (i=0;i<7;i++){
        btnEl[i].classList.remove("active")
        imgEl[i].classList.remove("project_active")
    }
    btnEl[5].classList.add("active")
    imgEl[5].classList.add("project_active")
}

slideImgEl[5].onclick = () => {
    sliderEl.style.transform = "translateX(-2000px)";
    for (i=0;i<7;i++){
        btnEl[i].classList.remove("active")
        imgEl[i].classList.remove("project_active")
    }
    btnEl[5].classList.add("active")
    imgEl[5].classList.add("project_active")
}

btnEl[6].onclick  = () => {
    sliderEl.style.transform = "translateX(-2400px)";
    for (i=0;i<7;i++){
        btnEl[i].classList.remove("active")
        imgEl[i].classList.remove("project_active")
    }
    btnEl[6].classList.add("active")
    imgEl[6].classList.add("project_active")
}

slideImgEl[6].onclick = () => {
    sliderEl.style.transform = "translateX(-2400px)";
    for (i=0;i<7;i++){
        btnEl[i].classList.remove("active")
        imgEl[i].classList.remove("project_active")
    }
    btnEl[6].classList.add("active")
    imgEl[6].classList.add("project_active")
}

var backBtnEl = document.getElementById("backBtn")

backBtnEl.addEventListener("click",()=>{
    sliderEl.style.transform = "translateX(20px)";
    for (i=0;i<7;i++){
        btnEl[i].classList.remove("active")
        imgEl[i].classList.remove("project_active")
    }
    btnEl[0].classList.add("active")
    imgEl[0].classList.add("project_active")
})