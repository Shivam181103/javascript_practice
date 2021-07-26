function processData(input) {
    var array=input.split(" ");
    var max=array[0].length;
    var maxidx=0;
    // if(array.length==1)
    //     {
    //         var str=array[0];
    //         str=str.slice(0,1).toUppercase+
    //         console.log()
    //     }
    for(var i=1;i<array.length;i++)
        {
           if(array[i].length>max)
           {
               maxidx=i;
               max=array[i].length;
           }
        }
    console.log(array[maxidx]);
} 