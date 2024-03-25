import { Application } from '@splinetool/runtime';
const { onPlayerJoin, insertCoin, isHost, myPlayer } = Playroom;

const canvas = document.getElementById('canvas3d');
const spline = new Application(canvas);

// Playroom - setup
window._USETEMPSTORAGE = true;
await insertCoin({gameId: "ozM2XgsHrfrKdzQme1DV"});
window.spline = spline;

spline
	.load('https://prod.spline.design/ppsh64LilSrfESli/scene.splinecode')
	.then(() => {
		spline.addEventListener('mouseDown', (e) => {
			if (e.target.name === 'ChesspawnPink') {
				console.log('I have been clicked!');
			}
		});
	});

