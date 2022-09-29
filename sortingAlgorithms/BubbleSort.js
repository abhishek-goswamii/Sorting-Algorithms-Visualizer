

function bubbleSort() {

    c_delay = 0

    for (let i = 0; i < array_size; i++) {

        for (var j = 0; j < array_size-i-1; j++) {

                animate(divs[j] , div_height[j] , "yellow")

                if(div_height[j]>div_height[j+1]){

                    animate(divs[j] , div_height[j] , "red")
                    animate(divs[j+1] , div_height[j+1] , "red")

                    let t = div_height[j]
                    div_height[j] = div_height[j+1]
                    div_height[j+1] = t

                    animate(divs[j], div_height[j], "red")
                    animate(divs[j + 1], div_height[j + 1], "red")

                }
                
                animate(divs[j], div_height[j], "yellow")

            }

                animate(divs[j], div_height[j], "#40e0d0")

            
    }

                animate(divs[0], div_height[0], "#40e0d0")


                enable_buttons()

}