var array_size_slider = document.getElementById('array-size-slider'), array_size = array_size_slider.value;
var generate_new_array_btn = document.getElementById("generate-array-btn")
var array_speed_slider = document.getElementById("array-speed-slider")

var algo_all_btns = document.querySelectorAll(".algo-div button")

var div_sizes = []
var divs = []

var margin_size

var container = document.getElementById("container")

container.style = "flex-direction:row"

generate_new_array_btn.addEventListener('click',generateNewArray)
array_size_slider.addEventListener('input',updateArraySize)

function generateNewArray() {
    container.innerHTML = ""
    div_sizes[i] = Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
    divs[i] = document.createElement("div");
    cont.appendChild(divs[i]);
    margin_size = 0.1;
    divs[i].style = " margin:0% " + margin_size + "%; background-color:blue; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + (div_sizes[i]) + "%;";

}












