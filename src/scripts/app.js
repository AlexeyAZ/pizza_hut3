// require("babel-polyfill");
const app = {
	load: () => {
		app.bindEvents();
	},
	bindEvents: () => {
		const btn = document.querySelector('.btn_large');

		function stopAnim() {
			btn.classList.remove('btn_anim');
			btn.removeEventListener('animationend', stopAnim);
		}

		function startAnim() {
			btn.classList.add('btn_anim');
			btn.addEventListener('animationend', () => {
				stopAnim();
			});
		}

		startAnim();

		setInterval(function () {

			startAnim();
		}, 5000);
	}
};

// window.addEventListener('load', app.load);
