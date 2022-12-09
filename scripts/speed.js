
//We only have to change background-color and height of the sorting element.

let speed = 1000;

array_speed_slider.addEventListener("input", speedfn);

let delay_time = 10000 / (Math.floor(array_size / 10) * speed);        //Decrease numerator to increase speed.

function speedfn() {

    let val = array_speed_slider.value

    switch (parseInt(val)) {
        case 1: speed = 1;
            break;
        case 2: speed = 10;
            break;
        case 3: speed = 100;
            break;
        case 4: speed = 1000;
            break;
        case 5: speed = 10000;
            break;
    }

    delay_time = 10000 / (Math.floor(array_size / 10) * speed);

}

var c_delay = 0

function animate(cont, height, color) {

    window.setTimeout(function () {

        cont.style = `margin:0rem ${margin_size}rem; background-color:${color}; width: ${(100 / array_size - (2 * margin_size))}rem; height: ${height}rem`

    }, c_delay += delay_time)

}

function enable_buttons() {

    console.log("inside enable buttons")

    window.setTimeout(function () {
        
        for (var i = 0; i < algo_all_btns.length; i++) {

            algo_all_btns[i].classList = []
            algo_all_btns[i].classList.add("btn-on")
            
            algo_all_btns[i].disabled = false
            array_size_slider.disabled = false
            generate_new_array_btn.disabled = false
            array_speed_slider.disabled = false

        }

    }, c_delay += delay_time);

}
