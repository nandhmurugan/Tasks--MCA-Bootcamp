
const con = document.getElementById('trends-container')
const arr=["https://is2-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/a4/d5/78/a4d5787f-1034-0f63-2d41-54d7898c0cb1/d1d1cdf8-a452-4040-9bd0-293996696cd7_3.jpg/750x750bb.jpeg",
    "https://is2-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/af/d5/29/afd52952-8a05-cdb2-d2e5-feb9f2afd67a/46d5fd63-c060-4cba-a4dd-4fe256ad0bb0_2.jpg/750x750bb.jpeg",
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/c6/d2/69/c6d2693a-6bfd-a742-ec79-827f43de0229/97f46af7-bd91-4e3f-a120-f9b4eac16749_1242x2208-8.jpg/750x750bb.jpeg",
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/20/00/02/200002a5-0bdb-32cd-43ff-8924576f88f9/347c5c89-72ae-4211-88f0-0135fe214a0f_5.jpg/750x750bb.jpeg",
   "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/2b/59/96/2b59962a-fd84-0776-4764-efe8c8001610/175f205f-1b1b-4f73-bd4f-87e044aac027_1242x2208-4.jpg/750x750bb.jpeg"

]

const img=document.getElementsByClassName('img');
console.log(img);


let i=0;
let changeimg=()=>{
    img[i].classList.remove('active');
      i++;
      
    if(i==arr.length)
    {
        i=0;
    }
    
  
    img[i].classList.add('active');
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

