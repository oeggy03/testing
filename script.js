var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

console.log(body)

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function setGradient() {
	body.style.background = "linear-gradient(to right, "
	+color1.value 
	+", "
	+color2.value+")";
	css.textContent = "background: "+ body.style.background + ";";
}

function individual(x) {
  var hex = x.toString(16);
  return hex.length==1?"0"+hex:hex;
}

function ToHex(r, g, b) {
  return "#"+individual(r)+individual(g)+individual(b);
}

function randomm() {
	const r1 = getRandomInt(256);
	const g1 = getRandomInt(256);
	const b1 = getRandomInt(256);
	const r2 = getRandomInt(256);
	const g2 = getRandomInt(256);
	const b2 = getRandomInt(256);
	body.style.background = "linear-gradient(to right, "
	+"rgb("+ r1 +","+ g1 +","+ b1 +")" 
	+", "
	+"rgb("+ r2 +","+ g2 +","+ b2 +")"+")";

	const random1 = ToHex(r1,g1,b1);
	const random2 = ToHex(r2,g2,b2);

	color1.value = random1;
	color2.value = random2;
	css.textContent = "background: "+ body.style.background + ";";
}

setGradient()
color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
random.addEventListener("click", randomm)
