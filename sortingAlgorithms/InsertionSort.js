function insertionSort() {

    c_delay = 0

    for (var j = 0; j < array_size; j++) {

        animate(divs[j], div_height[j], "yellow");

        var key = div_height[j];
        var i = j - 1;

        while (i >= 0 && div_height[i] > key) {

            animate(divs[i], div_height[i], "red");
            animate(divs[i + 1], div_height[i + 1], "red");

            div_height[i + 1] = div_height[i];

            animate(divs[i], div_height[i], "red");
            animate(divs[i + 1], div_height[i + 1], "red");

            animate(divs[i], div_height[i], "yellow");

            if (i == (j - 1)) {
                
                animate(divs[i + 1], div_height[i + 1], "yellow");

            }else {

                animate(divs[i + 1], div_height[i + 1], "yellow");
                
            }

            i -= 1;
        }

        div_height[i + 1] = key;

        for (var t = 0; t < j; t++) {
            animate(divs[t], div_height[t], "#40e0d0");
        }
    }

            animate(divs[j - 1], div_height[j - 1], "#40e0d0");

    enable_buttons();
}