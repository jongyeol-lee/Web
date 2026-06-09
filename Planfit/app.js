const screens = document.querySelectorAll(".screen");

function showScreen(index){
    
    slider.style.transform =
        `translateX(-${index * 100}vw)`;
    

    let percent =
        (index / (totalScreens -1))
        * 100;

    document.getElementById("progress")
        .style.width = percent + "%";
}



// 2초 후 화면2 이동
setTimeout(() => {
    currentIndex = 1;
    showScreen(currentIndex); 
}, 2000);

let currentIndex = 0;

// 카카오 버튼 클릭시 화면3
document.addEventListener("click",(e)=>{

    if(e.target.classList.contains("kakao-btn")){
        showScreen(2);
    }

});