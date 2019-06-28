// Javascript Functions to make the
// website dynamic and responsive

//MAIN CARD DECLARATION
const mainCard = document.querySelector('#mainCard');
const title = document.querySelector('h1');
const shine = document.querySelector('.shine');

//MAIN CARD FUNCTION
mainCard.addEventListener('click', function openOffers(){
	shine.style.display = 'block';
	mainCard.remove();
	setTimeout(overrideMain, 10);
});
function overrideMain() {
	setTimeout(eraseSpin, 400);
	title.style.animation = 'slideInFromBottom 0.8s';
	title.style.color = '#00C9FF';
	title.innerHTML = 'Tap a Card to Reveal Bonuses!';
	cardBox.style.display = 'flex';
}
function eraseSpin(){
    setTimeout(eraseSpin2, 80);
}
function eraseSpin2(){
    shine.style.display = 'none';
}

//CARD BOXES DECLARATION
const cardBox = document.querySelector('.cardBox');
const cardBox1= document.querySelector('.cardBox1');
const cardBox2 = document.querySelector('.cardBox2');
const cardBox3 = document.querySelector('.cardBox3');

//MINI STARS DECLARATION
const miniStars = document.querySelector('.miniStars');
const miniStars2 = document.querySelector('.miniStars2');
const miniStars3 = document.querySelector('.miniStars3');

//GLOW DECLARATION
const glow = document.querySelector('#glow');
const glow2 = document.querySelector('#glow2');
const glow3 = document.querySelector('#glow3');

//INFO DECLARATION
const info = document.querySelector('.firstH');
const info2 = document.querySelector('.secondH');
const info3 = document.querySelector('.thirdH');

//BUTTONS DECLARATION
const rBtn = document.querySelector('.rBtn');
const rBtn2 = document.querySelector('.rBtn2');
const rBtn3 = document.querySelector('.rBtn3');

//BODY DECLARATION
var bd = document.body;
var whole = document.querySelector('.whole');

//OPEN ANIMATION
cardBox1.style.animation = 'slideInFromRight 0.6s';
cardBox3.style.animation = 'slideInFromLeft 0.6s';


//CARD BOX 1 FUNCTION & DECLARATION
cardBox1.addEventListener('click', card1);
function card1(){
	cardBox1.style.animation = 'cog2 1s';
	cardBox1.style.transform = 'scale(1.2)';
	bd.style.transition = 'all 1s';
	bd.style.background = 'black';
	glow.style.display = 'none';
	cardBox1.style.background = 'linear-gradient(#2193b0, #6dd5ed)';
	setTimeout(overrideMain, 10);
	setInterval(stars, 500);
	setInterval(buttons, 1000);
	info.style.display = 'block';
}

rBtn.onclick = function(){
	card2();

	rBtn2.onclick = function(){
		card3();
		rBtn3.innerHTML = 'Reveal All';

		rBtn3.onclick = function letGo(){
			lastFunc();

		}
	}
}

//CARD BOX 2 FUNCTION & DECLARATION
cardBox2.addEventListener('click', card2);
function card2(){
	cardBox2.style.animation = 'cog2 1s';
	cardBox2.style.transform = 'scale(1.2)';
	bd.style.transition = 'all 1s';
	bd.style.background = 'black';
	glow2.style.display = 'none';
	cardBox2.style.background = 'linear-gradient(#2193b0, #6dd5ed)';
	const shine = document.querySelector('.shine');
	setTimeout(overrideMain, 10);
	setInterval(stars2, 500);
	setInterval(buttons2, 1000);
	info2.style.display = 'block';
}

rBtn2.onclick = function(){
	card3();

	rBtn3.onclick = function(){
		card1();
		rBtn.innerHTML = 'Reveal All';
		rBtn.onclick = function letGo(){
			lastFunc();
		}
	}
}

//CARD BOX 3 FUNCTION & DECLARATION
cardBox3.addEventListener('click', card3)
function card3(){
	cardBox3.style.animation = 'cog2 1s';
	cardBox3.style.transform = 'scale(1.2)';
	bd.style.transition = 'all 1s';
	bd.style.background = 'black';
	glow3.style.display = 'none';
	cardBox3.style.background = 'linear-gradient(#2193b0, #6dd5ed)';
	const shine = document.querySelector('.shine');
	setTimeout(overrideMain, 10);
	setInterval(stars3, 500);
	setInterval(buttons3, 1000);
	info3.style.display = 'block';
}

rBtn3.onclick = function(){
	card2();

	rBtn2.onclick = function(){
		card1();
		rBtn.innerHTML = 'Reveal All';
		rBtn.onclick = function letGo(){
			lastFunc();
		}
	}
}

//STARS FUNCTON
function stars(){
	miniStars.style.animation = 'spin 1s';
	miniStars.style.display = 'block';
}
function stars2(){
	miniStars2.style.animation = 'spin 1s';
	miniStars2.style.display = 'block';
}
function stars3(){
	miniStars3.style.animation = 'spin 1s';
	miniStars3.style.display = 'block';
}

//BUTTONS FUNCTION
function buttons(){
	rBtn.style.display = 'block';
	rBtn.style.animation = 'slideInFromBottom 1s';
	rBtn.style.margin = 'auto';
}
function buttons2(){
	rBtn2.style.display = 'block';
	rBtn2.style.animation = 'slideInFromBottom 1s';
	rBtn2.style.margin = 'auto';
}
function buttons3(){
	rBtn3.style.display = 'block';
	rBtn3.style.animation = 'slideInFromBottom 1s';
	rBtn3.style.margin = 'auto';
}

//SHINE FUNCTION & DECLARATION
function shine1(){
	shine.style.display = 'block';
	shine.style.left = '0%';
	shine.style.right = '50%';
}

//LAST FUNCTION
function lastFunc(){
	cardBox.style.animation = 'slideInFromBottom 1s';
	cardBox.style.transition = 'all 2s';
	cardBox.style.transform = 'scale(0.8)';
	
	whole.style.transition = 'all 1s';
	whole.style.background = 'linear-gradient(#00B4DB, #0083B0)';
	
	title.remove();
	rBtn.remove();
	rBtn2.remove();
	rBtn3.remove();
}