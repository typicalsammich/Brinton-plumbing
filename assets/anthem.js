document.addEventListener('DOMContentLoaded',function(){
const button=document.getElementById('anthem-toggle'),audio=document.getElementById('anthem-audio');
if(!button||!audio)return;
audio.volume=0.16;
button.addEventListener('click',async function(){
if(audio.paused){try{await audio.play();button.textContent='Pause patriotic instrumental';button.setAttribute('aria-pressed','true')}catch(e){button.textContent='Audio unavailable'}}else{audio.pause();button.textContent='Play patriotic instrumental';button.setAttribute('aria-pressed','false')}
});
});