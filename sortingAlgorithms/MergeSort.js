
function merge() {
    c_delay = 0;

    merge_partition(0, array_size - 1);

    enable_buttons();
}

function merge_sort(start, mid, end) {
    var p = start, q = mid + 1;

    var Arr = [], k = 0;

    for (var i = start; i <= end; i++) {
        
        if (p > mid) {
            Arr[k++] = div_height[q++];
            animate(divs[q - 1], div_height[q - 1], "red")
        }
        else if (q > end) {
            Arr[k++] = div_height[p++];
            animate(divs[p - 1], div_height[p - 1], "red")
        }
        else if (div_height[p] < div_height[q]) {
            Arr[k++] = div_height[p++];
            animate(divs[p - 1], div_height[p - 1], "red")
        }
        else {
            Arr[k++] = div_height[q++];
            animate(divs[q - 1], div_height[q - 1], "red")
        }
    }

    for (var t = 0; t < k; t++) {
        div_height[start++] = Arr[t];
        animate(divs[start - 1], div_height[start - 1], "#40e0d0")
    }
}

function merge_partition(start, end) {
    if (start < end) {

        var mid = Math.floor((start + end) / 2);
        animate(divs[mid], div_height[mid], "yellow")

        merge_partition(start, mid);
        merge_partition(mid + 1, end);

        merge_sort(start, mid, end);
    }
}
