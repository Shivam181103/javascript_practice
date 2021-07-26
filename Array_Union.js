function processData(input) {
    //Enter your code here
    var arr=input.split("\n");
    var arr1=JSON.parse(arr[0]);
    var arr2=JSON.parse(arr[1]);
    //var ans=[];
    var set2 = new Set(arr1);
    for(var i=0;i<arr2.length;i++)
        {
            set2.add(arr2[i]);
        }
    const array = [...set2];
    console.log(array);
    
} 