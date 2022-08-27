const simulation = document.getElementById("simulation");
const webAR = document.getElementById("WebAR");
const demos = document.getElementById("demos");

const main = document.getElementById("main");
//const heading = document.getElementById("sec1");

const container = document.getElementById("container");




simulation.addEventListener("click", change1);
webAR.addEventListener("click", change2);
demos.addEventListener("click", change3);

function change1() {
 // heading.innerHTML = " ";
  container.remove(); 
  main.innerHTML = "<br>The WebGL version of Networked Ecosystem was originally presented as a playable simulation as part of Rhizome x New Museum First Look.<br><br><b>For this AR port for Particle, you are invited to create your own version of a networked ecosystem using elements from the full simulation.</b><br><br>The WebgL (1.0) version of Networked Ecosystem is a live-simulation environment that presents an ecosystem built of a variety of digital senses.In Networked Ecosystem, natural phenomena have been replaced by digital and artificial systems as forces that drive development: Electricity/battery = sustenance, WIFI signals = nutrition, Lidar data = fire/heat.  Data Organisms populate this digital ecosystem as native life forms in the form of bots, AI’s, and avatars. Visitors to this networked landscape develop new kinds of digital senses to experience data as environmental changes, and interact with the simulated world and each other in an ever-changing online environment.";
  document.getElementById("wall").style.opacity = "0";
  document.getElementById("wall").style.filter  = 'alpha(opacity=0)';
  document.getElementById("wall").style.transform = "scale(0,0)";
  //document.getElementById('wall').style = 'display: none'




}


function change2() {
  //heading.innerHTML = " ";
  main.innerHTML = "click button to make your own networked ecosystem in AR<br><br>";
  container.remove(); 
  document.getElementById("wall").style.opacity = "1";
  document.getElementById("wall").style.filter  = 'alpha(opacity=100)'; 
  document.getElementById("wall").style.transform = "scale(1.5,1.5)";
  //document.querySelector('footer').innerHTML = '<br><br><br<p><a href="https://www.markhramos.net/#/networkedecosystem/">Mark H. Ramos & Ziyang Wu</a></p>'


  //main.innerHTML = "<a href='https://www.markhramos.net/'>I am a link</a>";
}

function change3() {
 // heading.innerHTML = " ";
  container.remove(); 
  main.innerHTML = "<div id='container'><img src='images/taptoadd.gif'/><img src='images/generate.gif'/> <img src='images/position.gif'/><img src='images/scale.gif'/><img src='images/rotate.gif'/></div>"; 
  document.getElementById("wall").style.opacity = "0";
  document.getElementById("wall").style.filter  = 'alpha(opacity=0)'; 
  document.getElementById("wall").style.transform = "scale(0,0)";
  //document.getElementById('wall').style = 'display: none'



}