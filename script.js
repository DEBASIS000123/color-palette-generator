const generatebtn=document.getElementById("generateBtn");


const singlehexcolorgeneraor=()=>{
    const hex= [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexColor="#";
    for(let i=0;i<6;i++){
        let random=Math.floor(Math.random()*hex.length);
        hexColor+=hex[random];
        
    }
    return hexColor;
};
const colorpeletegenerator=()=>{
    const colorpelete=[];
    for(let i=0;i<4;i++){
        colorpelete.push(singlehexcolorgeneraor());
    }
    return colorpelete;
}
const renderColorpalate=()=>{
    const colorcontainer=document.querySelector(".colors_container");
    colorcontainer.innerHTML="";
    const colorpelete =colorpeletegenerator();
    colorpelete.forEach((color,i)=>{
        const colordiv=document.createElement("div");
        colordiv.id=`color${i+1}`;
        colordiv.style.backgroundColor=color;
        colordiv.className="colorbox";

        const colortag=document.createElement("p");
        colortag.id=`color${i+1}Tag`;
        colortag.className="Colortag";
        colortag.innerText=color;
        colordiv.appendChild(colortag);
        colorcontainer.append(colordiv);
    });
    const copytoclipboard=(id)=>{
        const el=document.getElementById(id);
        navigator.clipboard.writeText(el.innerText).then(()=>{
            alert("copied to clipboard")
        }).catch((err)=>{
            alert("Could not able to copy.")
        });
    };

    const colorTags=document.querySelectorAll(".Colortag");
    colorTags.forEach((colortag,i)=>{
        colortag.addEventListener("click",()=>{
            copytoclipboard(`color${i+1}Tag`);
        });
    });
}
renderColorpalate();
generatebtn.addEventListener("click",renderColorpalate);