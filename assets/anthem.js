document.addEventListener('DOMContentLoaded',()=>{
 const btn=document.getElementById('anthem-toggle'),audio=document.getElementById('anthem-audio');
 if(!btn||!audio)return;
 audio.volume=0.05;
 function update(){const playing=!audio.paused;btn.classList.toggle('playing',playing);btn.setAttribute('aria-pressed',String(playing));btn.setAttribute('aria-label',playing?'Mute background music':'Play background music');btn.title=playing?'Mute background music':'Play background music'}
 btn.addEventListener('click',async()=>{if(audio.paused){try{await audio.play()}catch(e){}}else{audio.pause()}update()});
 audio.addEventListener('play',update);audio.addEventListener('pause',update);
 // Try quiet playback; browser autoplay restrictions may require a click.
 audio.play().then(update).catch(()=>update());
 update();
});