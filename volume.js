class Volume{
    constructor(){
        this.audio_file =document.getElementById("audio_file");
        this.audio_file.volume = 50/100;

        this.volume_range =document.getElementById("volume_range");
        this.volume_range.addEventListener("change",()=>{
            this.audio_file.volume =this.volume_range.value/100;
        });
        this.volume_range2 =document.getElementById("volume_range2");
        this.volume_range2=1;
        this.volume_range2.addEventListener("change",()=>{
            this.audio_file.playbackRate =this.volume_range2.value/100;

        });
    }
}
onload =new Volume();
