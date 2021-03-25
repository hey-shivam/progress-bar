const next = document.getElementById("next");
const previous = document.getElementById("prev");
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let count = 1;

next.addEventListener("click", ()=> {
    count++;

    if(count > circles.length){
        count = circles.length
    }
    console.log(count);
    update();
})

previous.addEventListener("click", ()=> {
    count--;

    if(count < 1){
        count = 1
    }
    console.log(count);
   update();
})

function update(){
    circles.forEach((circle, idx) => {
        if(idx < count){
            circle.classList.add("active");
        }else{
            circle.classList.remove("active");
        }
        let active = document.querySelectorAll(".active");
        progress.style.width = (active.length -1) /(circles.length -1) * 100+"%";
    })
    
    if(previous === 1){
        previous.disabled = true;
    } else if(next == 4){
        next.disabled = true
    }else{
        previous.disabled = false;
         next.disabled = false;
    }
}