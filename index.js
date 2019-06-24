const flightPath = {
	curviness: 2.25,
	autoRotate: true,
	values: [
		{x: 100, y: -20}, {x: 300, y: -10}, {x:500, y:-150}, {x: window.innerWidth, y:0}
	]
}

const tween = new TimelineLite();

tween.add(
	TweenLite.to('.paper-plane', 1,{
		 bezier: flightPath,
		 ease: Power1.easeInOut
	})
);


const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({

	triggerElement: '.animation',
	duration: 600


})
.addIndicators()
.addTo(controller)
.setTween(tween)