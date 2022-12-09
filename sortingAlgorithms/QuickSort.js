

function quickSort()
{

    c_delay=0;

    qs(0,array_size-1);

    enable_buttons();
}

function partition (start, end)
    
    {

    var i = start + 1;
    var piv = div_height[start] ;
    animate(divs[start],div_height[start],"yellow");

        for(var j =start + 1; j <= end ; j++ )
        {
            if (div_height[ j ] < piv)
            {
                animate(divs[j],div_height[j],"yellow");

                animate(divs[i],div_height[i],"red");
                animate(divs[j],div_height[j],"red");

                var temp=div_height[i];
                div_height[i]=div_height[j];
                div_height[j]=temp;

                animate(divs[i],div_height[i],"red");
                animate(divs[j],div_height[j],"red");

                animate(divs[i],div_height[i],"yellow");
                animate(divs[j],div_height[j],"yellow");

                i += 1;
            }
    }
    animate(divs[start],div_height[start],"red");
    animate(divs[i-1],div_height[i-1],"red");
    
    var temp=div_height[start];
    div_height[start]=div_height[i-1];
    div_height[i-1]=temp;

    animate(divs[start],div_height[start],"red");
    animate(divs[i-1],div_height[i-1],"red");

    for(var t=start;t<=i;t++)
    {
        animate(divs[t],div_height[t],"#40e0d0");
    }

    return i-1
}

function qs(start, end )
{
    if( start < end )
    {
        
        var piv_pos = partition(start, end )      
        qs(start, piv_pos -1)
        qs(piv_pos +1, end) 
    }
 }
