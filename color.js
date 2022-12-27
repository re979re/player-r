class Colors{
    constructor(){
        this.color1=document.getElementById("color1");
        this.color1.addEventListener("click",()=>{
            this.selectColor("color1");

        });
        this.color2=document.getElementById("color2");
        this.color2.addEventListener("click",()=>{
            this.selectColor("color2");

        });
        this.color3=document.getElementById("color3");
        this.color3.addEventListener("click",()=>{
            this.selectColor("color3");

        });
        this.color4=document.getElementById("color4");
        this.color4.addEventListener("click",()=>{
            this.selectColor("color4");

        });

        if(localStorage.getItem("color")==null){
            document.body.style.background="linear-gradient(to right,#43acc4,#074b65)";  
        }

        this.selectColor(localStorage.getItem("color"));
    }

    selectColor(color){
        if(color=="color1"){
           document.body.style.background= "linear-gradient(to right,#074b65,#48bfd8)";
        }else if(color=="color2"){
            document.body.style.background="linear-gradient(to right,#43acc4,#074b65)";
        }else if(color=="color3"){
            document.body.style.background="linear-gradient(to right,#43acc4,#62858b)";
        }
        else if(color=="color4"){
            document.body.style.background="linear-gradient(to right,#67bdcd,#053244)";
        }
        
        localStorage.setItem("color",)
    }
}
onload =new Colors();