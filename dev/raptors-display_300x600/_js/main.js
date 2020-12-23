import {size} from '../../_common/js/common.js'

function start(){
	TweenLite.defaultEase = Power4.easeOut
	const tl = new TimelineMax()
	const speed = .6
	tl.set(".frame1", {opacity:1})

	// return
	tl.to(".t1", .3, {y:140}, "+=.3")
	tl.add("one", "+=.6")
	tl.to(".t1", speed*.5, {y:0}, "one")
	tl.to(".w", speed, {y:0, ease:Back.easeOut}, "one")

	tl.to(".person", speed, {y:0, ease:Power3.easeIn}, "one+=.2")
	
	
	
	
}

start()


module.exports = {};

