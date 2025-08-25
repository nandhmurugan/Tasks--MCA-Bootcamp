const con = document.getElementById('img-container')
const arr=["./Assests/941788.jpg","./Assests/188673.jpg",
    "./Assests/922693.jpg",
"./Assests/941790.jpg",
"./Assests/941799.jpg" ,
"./Assests/148423.jpg"
]

let i=1;
let changeimg=()=>{
      i++;
    if(i==arr.length)
    {
        i=0;
    }
    con.style.backgroundImage=`url('${arr[i]}')`;
  
    
}
let revimg=()=>{
     i--;//i=-1
    if(i==-1)
    {
        i=5;
    }
    con.style.backgroundImage=`url('${arr[i]}')`;
   
}

let change=(a)=>{
    con.style.backgroundImage=`url('${arr[a]}')`;
}

setInterval(() => {
    changeimg()
}, 2000);
