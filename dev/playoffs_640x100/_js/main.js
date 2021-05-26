import {size, frameEnd, init} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'


function start(){
	
	const tl = init("640x100")
	// return
	

	tl.to(".player2", 1, {x:0, y:0}, 0)
	player(.8)
	tl.from(".t1a", .15, {x:"-=150",opacity:0}, .8)
	tl.from(".t1b", .01, {opacity:0}, "+=.3")

	
	
	
	tl.add(frameEnd(), "+=2")

}


start()


module.exports = {};

