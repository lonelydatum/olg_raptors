import {size} from '../../_common/js/common.js'

function start(){
	TweenLite.defaultEase = Power4.easeOut
	const tl = new TimelineMax()
	const speed = .3
	tl.set(".frame1", {opacity:1})
	tl.to(".t1", .3, {y:90}, "+=.3")
	tl.add("one", "+=1")
	tl.to(".t1", speed, {y:0}, "one")
	tl.to(".w", speed, {y:0}, "one")
	tl.to(".person", speed, {y:0}, "one+=.5")
	
	
	
	
}

start()


module.exports = {};

