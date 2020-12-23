import {size} from '../../_common/js/common.js'

function start(){
	TweenLite.defaultEase = Power4.easeOut
	const tl = new TimelineMax()
	const speed = .4
	tl.set(".frame1", {opacity:1})

	
	// tl.to(".t1", .3, {y:140}, "+=.3")
	tl.add("one", "+=.2")
	tl.to(".t1", .2, {y:0}, "one")
	tl.to(".w", speed, {y:0, ease:Back.easeOut}, "+=.2")

	tl.to(".person", .3, {y:0, ease:Power3.easeOut}, "-=.1")
	
	
	
	
}

start()


module.exports = {};

