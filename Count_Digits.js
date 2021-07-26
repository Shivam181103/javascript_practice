function processData(input) {
    //Enter your code here
        var ans=0;
        while(input>0)
        {
            
            input=(input-input%10)/10;
            ans=ans+1;
        }
    console.log(ans);
} 
