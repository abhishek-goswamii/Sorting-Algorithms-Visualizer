

function selectionSort() {
    
    c_delay = 0

    for (let i = 0; i < array_size; i++) {

        let min = div_height[i]
        let idx = i

            animate(divs[i], div_height[i], "yellow")

        for (let j = i+1; j < array_size; j++) {
            
            animate(divs[j], div_height[j], "yellow")


            if (min > div_height[j]){
                
                animate(divs[j], div_height[j], "red")
                
                min = div_height[j]
                idx = j

                animate(divs[j], div_height[j], "#FA9494")

            }
            animate(divs[j], div_height[j], "#FA9494")


        }
        

        let t = div_height[i]
        div_height[i] = div_height[idx]
        div_height[idx] = t

        animate(divs[idx], div_height[idx], "#FA9494")

        animate(divs[i], div_height[i], "#40e0d0")

    }
    
    console.log(div_height)

    enable_buttons()

}