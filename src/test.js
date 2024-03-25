import { Application } from '@splinetool/runtime';
const { onPlayerJoin, insertCoin, isHost, myPlayer } = Playroom;

const canvas = document.getElementById('canvas3d');
const spline = new Application(canvas);

// Playroom - setup
window._USETEMPSTORAGE = true;
await insertCoin({gameId: "ozM2XgsHrfrKdzQme1DV"});
await spline.load('https://prod.spline.design/ppsh64LilSrfESli/scene.splinecode');
window.spline = spline;

spline
	.load('https://prod.spline.design/ppsh64LilSrfESli/scene.splinecode')
	.then(() => {
		const obj = spline.findObjectByName('ChesspawnPink');
		// or
		// const obj = spline.findObjectById('7AF5EBC0-09BB-4720-B045-F478F8053AA4');

		console.log(obj); // Spline Object => { name: 'Cube', id: '7AF5EBC0-09BB-4720-B045-F478F8053AA4', position: {}, ... }

		// move the object in 3D space
		obj.position.x += 10;
	});

