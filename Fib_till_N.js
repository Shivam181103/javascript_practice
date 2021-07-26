function processData(input) {
    if(input==0)
        {
            console.log(0);
        }
    else
        {
         var first=0;
         var second=1;
         var ans="";
    
         ans+=first+" ";
         ans+=second+" ";
         while(input>=second)
         {
         var third=first+second;
            first=second;
            second=third;
           if(second<=input)
         {
            ans+=second+" ";
         }
         }
    
          console.log(ans);
            
        }
} 
