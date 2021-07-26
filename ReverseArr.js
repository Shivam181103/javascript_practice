function processData(input) {
    //Enter your code here
    var arr=JSON.parse(input);
    var ans=[];
    for(var i=arr.length-1;i>=0;i--)
        {
            ans.push(arr[i]);
            
        }
    console.log(ans);
} 