class Suit {
	constructor() {
		this.choose = document.querySelectorAll('.choose');
		this.com = document.querySelectorAll('.com');
		this.hasil = document.getElementById('hasil');
	}

	fight = (i, c) => {
		if (c === 0) {
			if(i === 0){
				hasil.innerHTML = `<div class="draw">Draw</div>`;
			}else if(i === 1){
				hasil.innerHTML = `<div class="hasil">Player 1 <br> Win</div>`;
			}else if(i === 2){
				hasil.innerHTML = `<div class="hasil">Com <br> Win</div>`;
			}
		}else if (c === 1) {
			if(i === 0){
				hasil.innerHTML = `<div class="hasil">Com <br> Win</div>`;
			}else if(i === 1){
				hasil.innerHTML = `<div class="draw">Draw</div>`;
			}else if(i === 2){
				hasil.innerHTML = `<div class="hasil">Player 1 <br> Win</div>`;
			}
		}else if (c === 2) {
			if(i === 0){
				hasil.innerHTML = `<div class="hasil">Player 1 <br> Win</div>`;
			}else if(i === 1){
				hasil.innerHTML = `<div class="hasil">Com <br> Win</div>`;
			}else if(i === 2){
				hasil.innerHTML = `<div class="draw">Draw</div>`;
			}
		}
	}
	
	myChoose = (i) => {
		if (i==0) {
			this.choose[0].classList.add('on')
			this.choose[1].classList.remove('on')
			this.choose[2].classList.remove('on')
		}else if (i==1) {
			this.choose[0].classList.remove('on')
			this.choose[1].classList.add('on')
			this.choose[2].classList.remove('on')
		}else if (i==2) {
			this.choose[0].classList.remove('on')
			this.choose[1].classList.remove('on')
			this.choose[2].classList.add('on')
		}
	}
	
	comView = (c) => {
		if (c==0) {
			this.com[0].classList.add('on')
			this.com[1].classList.remove('on')
			this.com[2].classList.remove('on')
		}else if (c==1) {
			this.com[0].classList.remove('on')
			this.com[1].classList.add('on')
			this.com[2].classList.remove('on')
		}else if (c==2) {
			this.com[0].classList.remove('on')
			this.com[1].classList.remove('on')
			this.com[2].classList.add('on')
		}
	}
}

const Game = new Suit()
let time = 0;

Game.choose.forEach((e,i) => {
	e.addEventListener('click', () => {
		if(time === 1){
			return false;
		}
		let comChoose = Math.floor(Math.random() * 3);
		Game.myChoose(i)
		Game.comView(comChoose)
		Game.fight(i, comChoose)
		time += 1;		
	})
})

document.getElementById('refresh')
	.addEventListener('click', () => location.reload())