function processData(input) {
    
    let flag=false;
    if(input==2)
   {
       flag=true;
       //break;
   }
    for(let i=2;i*i<input;i++)
        {
            if(input%i==0)
                {
                   flag=true;
                    break;
                }
        }
    if(flag==true)
    console.log("Not Prime");
    else
    console.log("Prime");    
} 
