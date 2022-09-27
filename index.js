let array_size_slider = document.getElementById('array-size-slider'), array_size = array_size_slider.value;
let generate_new_array_btn = document.getElementById("generate-array-btn")
let array_speed_slider = document.getElementById("array-speed-slider")

let algo_all_btns = document.querySelectorAll(".algo-div button")

let div_height = []
let divs = []

let margin_size

let container = document.getElementById("container")

container.style = "flex-direction:row"

generate_new_array_btn.addEventListener("click",generateNewArray)

array_size_slider.addEventListener('input',updateArraySize)

function generateNewArray() {

    container.innerHTML = ""
    //making container div empty
    
    div_height[i] = Math.floor(Math.random() * (array_size_slider.max - array_size_slider.min)) + 10;
    //generating random array between 20 to 150
    
    divs[i] = document.createElement("div")
    
    container.appendChild(divs[i])

    margin_size = 0.1;

    divs[i].style = " margin:0% " + margin_size + "%; background-color:#40e0d0; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + (div_height[i]) + "%;";

}












