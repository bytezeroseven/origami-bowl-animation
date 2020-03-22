
/* 

	Step keyframe regions

*/




var keyframePositions = [

	0, 4,
	4, 4,
	8, 4,
	12, 4,
	16, 4, 
	20, 4,
	24, 8,
	32, 8,
	40, 4,
	44, 4,
	48, 8,
	56, 8,
	64, 4,
	68, 4,
	72, 4,
	76, 8,
	84, 8

];

appendKeyframePosition(4);
appendKeyframePosition(4);
appendKeyframePosition(8);
appendKeyframePosition(4);
appendKeyframePosition(4);

appendKeyframePosition(4);
appendKeyframePosition(4);
appendKeyframePosition(4);

appendKeyframePosition(8);
appendKeyframePosition(4);
appendKeyframePosition(4);

appendKeyframePosition(4 * 2);
appendKeyframePosition(4 * 2);

appendKeyframePosition(4);
appendKeyframePosition(4);
appendKeyframePosition(4);
appendKeyframePosition(4);
appendKeyframePosition(4);
appendKeyframePosition(4);
appendKeyframePosition(4);
appendKeyframePosition(4);

appendKeyframePosition(4);
appendKeyframePosition(4);

appendKeyframePosition(4);
appendKeyframePosition(4);

appendKeyframePosition(4);
appendKeyframePosition(4);

appendKeyframePosition(4);
appendKeyframePosition(4);

appendKeyframePosition(8);

appendKeyframePosition(4 * 3);






/*
	
	Line data

 */

var keyframeLines = [

	[

		[new THREE.Vector2(-1, 0), new THREE.Vector2(1, 0), true]
	
	],

];

appendLines([

	[new THREE.Vector2(0, -1), new THREE.Vector2(0, 1), true]

]);

appendLines([]);

var sin45 = Math.sin(Math.PI / 2);

var mid = (Math.tan(Math.PI / 8) + 1) / 2;

appendLines([

	[new THREE.Vector2(0, 0), new THREE.Vector2(mid, mid), true],
	[new THREE.Vector2(0, 0), new THREE.Vector2(mid, -mid), true]

]);

appendLines([

	[new THREE.Vector2(0, 0), new THREE.Vector2(-mid, mid), true],
	[new THREE.Vector2(0, 0), new THREE.Vector2(-mid, -mid), true]

]);

appendLines([]);

appendLines([]);

appendLines([]);

var tan22 = Math.tan(Math.PI / 8);

var a = tan22;
var b = 1;


appendLines([

	[new THREE.Vector2(0, 0), new THREE.Vector2(a, b), true],
	[new THREE.Vector2(0, 0), new THREE.Vector2(b, a), true],

	[new THREE.Vector2(0, 0), new THREE.Vector2(-a, b), true],
	[new THREE.Vector2(0, 0), new THREE.Vector2(-b, a), true],

]);


appendLines([]);

appendLines([]);

appendLines([]);

appendLines([]);

appendLines([

	[new THREE.Vector2(0, 0), new THREE.Vector2(a, -b), true],
	[new THREE.Vector2(0, 0), new THREE.Vector2(b, -a), true],

	[new THREE.Vector2(0, 0), new THREE.Vector2(-a, -b), true],
	[new THREE.Vector2(0, 0), new THREE.Vector2(-b, -a), true],

]);


appendLines([]);

appendLines([]);

appendLines([]);



// w q lines
var w = (a + b) / 2;
var q = w - a;


appendLines([

	[new THREE.Vector2(0, -1), new THREE.Vector2(q, -w), true],
	[new THREE.Vector2(w, -w), new THREE.Vector2(q, -w), true],

	[new THREE.Vector2(0, -1), new THREE.Vector2(-q, -w), true],
	[new THREE.Vector2(-w, -w), new THREE.Vector2(-q, -w), true],

]);

appendLines([]);
appendLines([]);

appendLines([

	[new THREE.Vector2(-w, -w), new THREE.Vector2(-w, -q), true],
	[new THREE.Vector2(-w, -q), new THREE.Vector2(-1, 0), true],

	[new THREE.Vector2(-1, 0), new THREE.Vector2(-w, q), true],
	[new THREE.Vector2(-w, q), new THREE.Vector2(-w, w), true],

]);

appendLines([]);

appendLines([]);

appendLines([

	[new THREE.Vector2(-w, w), new THREE.Vector2(-q, w), true],
	[new THREE.Vector2(-q, w), new THREE.Vector2(0, 1), true],

	[new THREE.Vector2(0, 1), new THREE.Vector2(q, w), true],
	[new THREE.Vector2(q, w), new THREE.Vector2(w, w), true],

]);

appendLines([]);

appendLines([]);

appendLines([

	[new THREE.Vector2(w, w), new THREE.Vector2(w, q), true],
	[new THREE.Vector2(w, q), new THREE.Vector2(1, 0), true],

	[new THREE.Vector2(1, 0), new THREE.Vector2(w, -q), true],
	[new THREE.Vector2(w, -q), new THREE.Vector2(w, -w), true],

]);

appendLines([]);

appendLines([]);

appendLines([]);



/*

	perpendicular_axis_aligned_x = 1;
	perpendicular_axis_aligned_y = q;

	perpendicular_outer_ratio = q / b;

*/

appendLines([

	[new THREE.Vector2(-w, -q), new THREE.Vector2(-w, q), true],

	[new THREE.Vector2(-w, -q), new THREE.Vector2(-1, -q), true],
	[new THREE.Vector2(-w, q), new THREE.Vector2(-1, q), true],

]);

appendLines([]);



var coord_w = new THREE.Vector2(-w, -w);

var perp_factor = q / a;

var p1 = new THREE.Vector2(-1, -a).lerp(coord_w, 1 - perp_factor);
var p2 = coord_w.clone().lerp(new THREE.Vector2(-a, -1), perp_factor);

appendLines([

	[new THREE.Vector2(-w, -q), new THREE.Vector2(-q, -w), true],

	[new THREE.Vector2(-w, -q), new THREE.Vector2(p1.x, p1.y), true],
	[new THREE.Vector2(-q, -w), new THREE.Vector2(p2.x, p2.y), true],

]);

appendLines([]);

appendLines([

	[new THREE.Vector2(-q, -w), new THREE.Vector2(q, -w), true],

	[new THREE.Vector2(-q, -w), new THREE.Vector2(-q, -1), true],
	[new THREE.Vector2(q, -w), new THREE.Vector2(q, -1), true],

]);

appendLines([]);

appendLines([

	[new THREE.Vector2(q, -w), new THREE.Vector2(w, -q), true],

	[new THREE.Vector2(q, -w), new THREE.Vector2(-p2.x, p2.y), true],
	[new THREE.Vector2(w, -q), new THREE.Vector2(-p1.x, p1.y), true],

]);

appendLines([]);

appendLines([

	[new THREE.Vector2(w, -q), new THREE.Vector2(w, q), true],

	[new THREE.Vector2(w, -q), new THREE.Vector2(1, -q), true],
	[new THREE.Vector2(w, q), new THREE.Vector2(1, q), true],

]);

appendLines([]);

appendLines([

	[new THREE.Vector2(w, q), new THREE.Vector2(q, w), true],

	[new THREE.Vector2(w, q), new THREE.Vector2(-p1.x, -p1.y), true],
	[new THREE.Vector2(q, w), new THREE.Vector2(-p2.x, -p2.y), true],

]);

appendLines([]);

appendLines([

	[new THREE.Vector2(q, w), new THREE.Vector2(-q, w), true],

	[new THREE.Vector2(-q, w), new THREE.Vector2(-q, 1), true],
	[new THREE.Vector2(q, w), new THREE.Vector2(q, 1), true],

]);

appendLines([]);

appendLines([

	[new THREE.Vector2(-q, w), new THREE.Vector2(-w, q), true],

	[new THREE.Vector2(-q, w), new THREE.Vector2(p2.x, -p2.y), true],
	[new THREE.Vector2(-w, q), new THREE.Vector2(p1.x, -p1.y), true]

]);

appendLines([]);


var f = (w - (1 - w)) / 2; // Core octagon scale factor

appendLines([

	[new THREE.Vector2(-a, -1).multiplyScalar(f), new THREE.Vector2(a, -1).multiplyScalar(f), true],
	[new THREE.Vector2(a, -1).multiplyScalar(f), new THREE.Vector2(1, -a).multiplyScalar(f), true],

	[new THREE.Vector2(1, -a).multiplyScalar(f), new THREE.Vector2(1, a).multiplyScalar(f), true],

	[new THREE.Vector2(1, a).multiplyScalar(f), new THREE.Vector2(a, 1).multiplyScalar(f), true],
	[new THREE.Vector2(a, 1).multiplyScalar(f), new THREE.Vector2(-a, 1).multiplyScalar(f), true],

	[new THREE.Vector2(-a, 1).multiplyScalar(f), new THREE.Vector2(-1, a).multiplyScalar(f), true],
	[new THREE.Vector2(-1, a).multiplyScalar(f), new THREE.Vector2(-1, -a).multiplyScalar(f), true],
	[new THREE.Vector2(-1, -a).multiplyScalar(f), new THREE.Vector2(-a, -1).multiplyScalar(f), true]

]);

appendLines([], true)


var outlinePoints = [
	
	new THREE.Vector2(-a, -1), 
	new THREE.Vector2(a, -1),
	new THREE.Vector2(1, -a),
	new THREE.Vector2(1, a),
	new THREE.Vector2(a, 1),
	new THREE.Vector2(-a, 1),
	new THREE.Vector2(-1, a),
	new THREE.Vector2(-1, -a),
	new THREE.Vector2(-a, -1)

];


function appendKeyframePosition(length) {

	keyframePositions.push(keyframePositions[keyframePositions.length - 2] + keyframePositions[keyframePositions.length - 1], length);

}

function appendLines(userLines, setPrevLinesNotDashed) {

	var prevLines = keyframeLines[keyframeLines.length - 1];

	var lines = [];

	for (var i = 0; i < prevLines.length; i ++) {

		var prevLine = prevLines[i];

		lines.push([

			prevLine[0].clone(),
			prevLine[1].clone(),
			!(setPrevLinesNotDashed === true)

		]);

	}

	for (var j = 0; j < userLines.length; j++) {

		lines.push(userLines[j]);

	}

	keyframeLines.push(lines);

}