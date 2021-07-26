function processData(input) {
    //Enter your code here
    var splitted=input.split(" ");
    var ans="";
    for(var i=0;i<splitted.length;i++)
        {
            if(splitted[i].length==1)
                {
                    var str=splitted[0].toUpperCase();
                }
               var str=splitted[i].slice(0,1).toUpperCase()+splitted[i].slice(1,splitted[i].length).toLowerCase();
            ans+=str+" ";
        }
    console.log(ans);
} 