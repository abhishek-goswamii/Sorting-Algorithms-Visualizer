
function heap()
{

    c_delay=0;

    heap_sort();
    
    enable_buttons();
}

function swap(i,j)
{
    animate(divs[i],div_height[i],"red");
    animate(divs[j],div_height[j],"red");

    var temp=div_height[i];
    div_height[i]=div_height[j];
    div_height[j]=temp;

    animate(divs[i],div_height[i],"red");
    animate(divs[j],div_height[j],"red");

    animate(divs[i],div_height[i],"yellow");
    animate(divs[j],div_height[j],"yellow");
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && div_height[l]>div_height[largest])
    {
        if(largest!=i)
        {
            animate(divs[largest],div_height[largest],"yellow");
        }

        largest=l;

        animate(divs[largest],div_height[largest],"red");
    }

    if(r<n && div_height[r]>div_height[largest])
    {
        if(largest!=i)
        {
            animate(divs[largest],div_height[largest],"yellow");
        }

        largest=r;

        animate(divs[largest],div_height[largest],"red");
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        max_heapify(array_size,i);
    }

    for(var i=array_size-1;i>0;i--)
    {
        swap(0,i);
        animate(divs[i],div_height[i],"#40e0d0");
        animate(divs[i],div_height[i],"yellow");

        max_heapify(i,0);

        animate(divs[i],div_height[i],"yellow");
        animate(divs[i],div_height[i],"#40e0d0");
    }
    
        animate(divs[i],div_height[i],"#40e0d0");
        
}
