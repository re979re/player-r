class Player {
    constructor(){
        var heightMain = document.getElementById("player");
        heightMain.style.height=screen.height + "px"; 
    }
}
onload=new Player();

class AudioPlayer{
    constructor(){
      this.audio_file =document.getElementById("audio_file");
      this.p1 =document.getElementById("p1");
      this.play_pusse= document.getElementById("play_pusse");
      this.isPlayed;
      this.play_pusse.addEventListener("click",()=>{
            this.Play_pusse();
      });

     

      this.names_radio=[];
      this.names_radio[0] ="هيفي كروكت";
      this.names_radio[1] ="World cup";
      this.names_radio[2] ="spacetoon";

      this.sourc_roudio=[];
      this.sourc_roudio[0]="h.mp3";
      this.sourc_roudio[1]="test_Dreemer.mp3";
      this.sourc_roudio[2]="Spac.mp3";
      this.server =0;

      this. setResource();

      document.getElementById("next").addEventListener("click",()=>{
        if(this.server <this.sourc_roudio.length-1){
            ++this.server;
            this.isPlayed=false;
        }else{
            this.server =0;
        }
        //localStorage.server("Savepos",this.server);
        this.setResource();
      })
      document.getElementById("back").addEventListener("click",()=>{
          if(this.server>0){
            --this.server;
            this.isPlayed=false;
          }else{
            this.server=this.sourc_roudio.length-1;
          }
         // localStorage.server("Savepos",this.server);
          this.setResource();  
      })


      

    }

    setResource(){
        //if(localStorage.getItem("Savepos")!=null){
           // this.server=localStorage.getItem("Savepos");
       
      this.audio_file.src = this.sourc_roudio[this.server] ;
      this.p1.innerHTML = this.names_radio[this.server] ;
      this.Play_pusse();
    }

    Play_pusse(){
        if(this.isPlayed == false){
            this.play_pusse.src="imges/pl5.png";
            this.audio_file.play() ;
            this.isPlayed=true;

        }else{
            this.play_pusse.src="imges/pl6.png";
            this.audio_file.pause();
            this.isPlayed=false;
        }
    }

}

onload =new  AudioPlayer();