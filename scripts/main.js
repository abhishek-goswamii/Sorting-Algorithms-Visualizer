
let array_size_slider = document.getElementById('array-size-slider'), array_size = array_size_slider.value;

let generate_new_array_btn = document.getElementById("generate-array-btn")

let array_speed_slider = document.getElementById("array-speed-slider")

let algo_all_btns = document.querySelectorAll("#algo-div button")

let div_height = []
let divs = []


let margin_size

let container = document.getElementById("container")


generate_new_array_btn.addEventListener("click",generateNewArray)
array_size_slider.addEventListener('input',updateArraySize)

function updateArraySize() {
    array_size = array_size_slider.value
    generateNewArray()
}

function generateNewArray() {

    container.innerHTML = ""
    //making container div empty
    
    for (let i = 0; i < array_size; i++) {
        div_height[i] = Math.floor(Math.random() *0.32* (array_size_slider.max - array_size_slider.min)) + 10;
        //generating random array between 20 to 150

        divs[i] = document.createElement("div")

        container.appendChild(divs[i])

        margin_size = 0.1;

        divs[i].style = `margin:0rem ${margin_size}rem; background-color:#FA9494; width: ${(100 / array_size - (2 * margin_size))}rem; height: ${(div_height[i])}rem`

    }

}


window.onload = updateArraySize()
// filling array with random numbers on website reload

for (let i = 0; i < algo_all_btns.length; i++) {
    algo_all_btns[i].addEventListener("click" , sortfn )
}

//function for disabling buttons when algorithms start 
function disable_buttons() {

    for (var i = 0; i < algo_all_btns.length; i++) {

        algo_all_btns[i].classList = []
        algo_all_btns[i].classList.add("btn-off")

        algo_all_btns[i].disabled = true
        array_size_slider.disabled = true
        generate_new_array_btn.disabled = true
        array_speed_slider.disabled = true

    }

}

function sortfn() {
    
    disable_buttons()
    
    this.classList.add("btn-selected")

    switch (this.innerHTML) {
        case "Bubble": bubbleSort();
            break;
        case "Selection": selectionSort();
            break;
        case "Insertion": insertionSort();
            break;
        case "Merge": mergeSort();
            break;
        case "Quick": quickSort();
            break;
        case "Heap": heapSort();
            break;
    }

}









