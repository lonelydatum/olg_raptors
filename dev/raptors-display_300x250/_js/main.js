import {size} from '../../_common/js/common.js'

function start(){
	TweenLite.defaultEase = Power4.easeOut
	const tl = new TimelineMax()
	const speed = .4
	tl.set(".frame1", {opacity:1})
	tl.to(".t1", .3, {y:90}, "+=.3")
	tl.add("one", "+=.6")
	tl.to(".t1", speed*.5, {y:0}, "one")
	tl.to(".w", speed, {y:0, ease:Back.easeOut}, "one")

	tl.to(".person", speed, {y:0, ease:Power3.easeOut}, "one+=.2")
	
	
	
	
}

start()


module.exports = {};

