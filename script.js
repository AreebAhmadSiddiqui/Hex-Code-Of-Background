//Hex code is a code with 6 characters fromt the hexa decimal array

let hex=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
document.querySelector(".btn").addEventListener("click",function(){
    let hexcode='';
    for(let i=0;i<6;i++){
       let v=Math.floor(Math.random()*16);
       hexcode+=hex[v];
    }
    document.getElementsByClassName("hex")[0].innerHTML=hexcode;
    document.querySelector("body").style.backgroundColor="#"+hexcode;
})