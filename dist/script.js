var n = 16;

for (var i=0; i<n; i++){
  var b = document.createElement('div');
  document.getElementById('stage').appendChild(b);
  
  gsap.set(b, {
    position:'absolute',
    attr:{class:'box'},
    width:350-i*30,
    height:350-i*30,
    background:'#a3a',
    left:'50%',
    top:'50%',
    xPercent:-50,
    yPercent:-50,
    borderRadius:'50%', 
    boxShadow: '0px 1px 10px rgba(0,0,0,0.5)'
  })
  
  gsap.timeline({repeat:-1})
      .to(b, {duration:0.6, borderRadius:'10%', background:'#111', yoyo:true, repeat:1, ease:'sine.inOut'}, 0)
      .to(b, {duration:1.2, rotation:-360, ease:'expo.inOut'}, 0)
      .play(i/n)
}