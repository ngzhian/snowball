var checkCollisionTree=function(ball,trees){
	trees.forEach(function(tree){
		//console.log(prevZ);
//console.log("trees"+tree.p.z);

	if((ball.p.z-200>tree.p.z&&prevZ-200<tree.p.z) ){
	//	console.log(prevZ);
	//	console.log("Ball"+ball.p.z);
	//	console.log("trees"+tree.p.z);
	//	console.log(ball.p.x-tree.p.x);
	//	console.log(ball.p.y-(tree.p.y-tree.h/2));
			if(Math.abs((ball.p.x+prevX)/2-tree.p.x) <30 && Math.abs((ball.p.y+prevY)/2-(tree.p.y-tree.h/2))<110)
				{console.log("Hit");}
			}
	
		}
			
	)
	prevZ=ball.p.z;
	prevX=ball.p.x;
	prevY=ball.p.y;
}