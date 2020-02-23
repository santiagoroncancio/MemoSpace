(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"planeta_atlas_", frames: [[0,0,1401,1401]]},
		{name:"planeta_atlas_2", frames: [[0,861,626,626],[0,0,840,859]]}
];

(lib.estrella = function() {
	this.initialize(ss["planeta_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.luna = function() {
	this.initialize(ss["planeta_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.tierra = function() {
	this.initialize(ss["planeta_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.planeta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.tierra();
	this.instance.parent = this;
	this.instance.setTransform(60,57,0.1,0.1);

	this.instance_1 = new lib.luna();
	this.instance_1.parent = this;
	this.instance_1.setTransform(68,98,0.08,0.08);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:68,y:98}},{t:this.instance,p:{y:57}}]}).to({state:[{t:this.instance_1,p:{x:44,y:117}},{t:this.instance,p:{y:60}}]},4).to({state:[{t:this.instance_1,p:{x:23,y:135}},{t:this.instance,p:{y:58}}]},5).to({state:[{t:this.instance_1,p:{x:0,y:153}},{t:this.instance,p:{y:60}}]},5).to({state:[{t:this.instance,p:{y:58}},{t:this.instance_1,p:{x:26,y:130}}]},5).to({state:[{t:this.instance,p:{y:60}},{t:this.instance_1,p:{x:75,y:100}}]},5).to({state:[{t:this.instance,p:{y:58}},{t:this.instance_1,p:{x:120,y:66}}]},6).to({state:[{t:this.instance,p:{y:60}},{t:this.instance_1,p:{x:149,y:35}}]},6).to({state:[{t:this.instance,p:{y:58}},{t:this.instance_1,p:{x:174,y:12}}]},6).to({state:[{t:this.instance_1,p:{x:152,y:36}},{t:this.instance,p:{y:60}}]},6).to({state:[{t:this.instance_1,p:{x:135,y:56}},{t:this.instance,p:{y:58}}]},5).to({state:[{t:this.instance_1,p:{x:104,y:80}},{t:this.instance,p:{y:60}}]},6).wait(5));

	// Capa_2
	this.instance_2 = new lib.estrella();
	this.instance_2.parent = this;
	this.instance_2.setTransform(44,200,0.05,0.05);

	this.instance_3 = new lib.estrella();
	this.instance_3.parent = this;
	this.instance_3.setTransform(46,7,0.05,0.05);

	this.instance_4 = new lib.estrella();
	this.instance_4.parent = this;
	this.instance_4.setTransform(131,-3,0.05,0.05);

	this.instance_5 = new lib.estrella();
	this.instance_5.parent = this;
	this.instance_5.setTransform(5,212,0.05,0.05);

	this.instance_6 = new lib.estrella();
	this.instance_6.parent = this;
	this.instance_6.setTransform(199,212,0.05,0.05);

	this.instance_7 = new lib.estrella();
	this.instance_7.parent = this;
	this.instance_7.setTransform(205,105,0.05,0.05);

	this.instance_8 = new lib.estrella();
	this.instance_8.parent = this;
	this.instance_8.setTransform(185,174,0.05,0.05);

	this.instance_9 = new lib.estrella();
	this.instance_9.parent = this;
	this.instance_9.setTransform(214,143,0.05,0.05);

	this.instance_10 = new lib.estrella();
	this.instance_10.parent = this;
	this.instance_10.setTransform(211,0,0.05,0.05);

	this.instance_11 = new lib.estrella();
	this.instance_11.parent = this;
	this.instance_11.setTransform(219,59,0.05,0.05);

	this.instance_12 = new lib.estrella();
	this.instance_12.parent = this;
	this.instance_12.setTransform(143,219,0.05,0.05);

	this.instance_13 = new lib.estrella();
	this.instance_13.parent = this;
	this.instance_13.setTransform(5,100,0.05,0.05);

	this.instance_14 = new lib.estrella();
	this.instance_14.parent = this;
	this.instance_14.setTransform(93,199,0.05,0.05);

	this.instance_15 = new lib.estrella();
	this.instance_15.parent = this;
	this.instance_15.setTransform(29,147,0.05,0.05);

	this.instance_16 = new lib.estrella();
	this.instance_16.parent = this;
	this.instance_16.setTransform(93,22,0.05,0.05);

	this.instance_17 = new lib.estrella();
	this.instance_17.parent = this;
	this.instance_17.setTransform(36,59,0.05,0.05);

	this.instance_18 = new lib.estrella();
	this.instance_18.parent = this;
	this.instance_18.setTransform(174,28,0.05,0.05);

	this.instance_19 = new lib.estrella();
	this.instance_19.parent = this;
	this.instance_19.setTransform(5,12,0.05,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19,p:{scaleX:0.05,scaleY:0.05,x:5,y:12}},{t:this.instance_18,p:{scaleX:0.05,scaleY:0.05,x:174,y:28}},{t:this.instance_17,p:{scaleX:0.05,scaleY:0.05,x:36,y:59}},{t:this.instance_16,p:{scaleX:0.05,scaleY:0.05,x:93,y:22}},{t:this.instance_15,p:{scaleX:0.05,scaleY:0.05,x:29,y:147}},{t:this.instance_14,p:{scaleX:0.05,scaleY:0.05,x:93,y:199}},{t:this.instance_13,p:{scaleX:0.05,scaleY:0.05,x:5,y:100}},{t:this.instance_12,p:{scaleX:0.05,scaleY:0.05,x:143,y:219}},{t:this.instance_11,p:{scaleX:0.05,scaleY:0.05,x:219,y:59}},{t:this.instance_10,p:{scaleX:0.05,scaleY:0.05,x:211,y:0}},{t:this.instance_9,p:{scaleX:0.05,scaleY:0.05,x:214,y:143}},{t:this.instance_8,p:{scaleX:0.05,scaleY:0.05,x:185,y:174}},{t:this.instance_7,p:{scaleX:0.05,scaleY:0.05,x:205,y:105}},{t:this.instance_6,p:{scaleX:0.05,scaleY:0.05,x:199,y:212}},{t:this.instance_5,p:{scaleX:0.05,scaleY:0.05,x:5,y:212}},{t:this.instance_4,p:{scaleX:0.05,scaleY:0.05,x:131,y:-3}},{t:this.instance_3,p:{scaleX:0.05,scaleY:0.05,x:46,y:7}},{t:this.instance_2,p:{scaleX:0.05,scaleY:0.05,x:44,y:200}}]}).to({state:[{t:this.instance_19,p:{scaleX:0.06,scaleY:0.06,x:2,y:9}},{t:this.instance_18,p:{scaleX:0.06,scaleY:0.06,x:171,y:25}},{t:this.instance_17,p:{scaleX:0.06,scaleY:0.06,x:33,y:56}},{t:this.instance_16,p:{scaleX:0.06,scaleY:0.06,x:90,y:19}},{t:this.instance_15,p:{scaleX:0.06,scaleY:0.06,x:26,y:144}},{t:this.instance_14,p:{scaleX:0.06,scaleY:0.06,x:90,y:196}},{t:this.instance_13,p:{scaleX:0.06,scaleY:0.06,x:2,y:97}},{t:this.instance_12,p:{scaleX:0.06,scaleY:0.06,x:140,y:216}},{t:this.instance_11,p:{scaleX:0.06,scaleY:0.06,x:216,y:56}},{t:this.instance_10,p:{scaleX:0.06,scaleY:0.06,x:208,y:-3}},{t:this.instance_9,p:{scaleX:0.06,scaleY:0.06,x:211,y:140}},{t:this.instance_8,p:{scaleX:0.06,scaleY:0.06,x:182,y:171}},{t:this.instance_7,p:{scaleX:0.06,scaleY:0.06,x:202,y:102}},{t:this.instance_6,p:{scaleX:0.06,scaleY:0.06,x:196,y:209}},{t:this.instance_5,p:{scaleX:0.06,scaleY:0.06,x:2,y:209}},{t:this.instance_4,p:{scaleX:0.06,scaleY:0.06,x:128,y:-6}},{t:this.instance_3,p:{scaleX:0.06,scaleY:0.06,x:43,y:4}},{t:this.instance_2,p:{scaleX:0.06,scaleY:0.06,x:41,y:197}}]},6).to({state:[{t:this.instance_19,p:{scaleX:0.05,scaleY:0.05,x:5,y:12}},{t:this.instance_18,p:{scaleX:0.05,scaleY:0.05,x:174,y:28}},{t:this.instance_17,p:{scaleX:0.05,scaleY:0.05,x:36,y:59}},{t:this.instance_16,p:{scaleX:0.05,scaleY:0.05,x:93,y:22}},{t:this.instance_15,p:{scaleX:0.05,scaleY:0.05,x:29,y:147}},{t:this.instance_14,p:{scaleX:0.05,scaleY:0.05,x:93,y:199}},{t:this.instance_13,p:{scaleX:0.05,scaleY:0.05,x:5,y:100}},{t:this.instance_12,p:{scaleX:0.05,scaleY:0.05,x:143,y:219}},{t:this.instance_11,p:{scaleX:0.05,scaleY:0.05,x:219,y:59}},{t:this.instance_10,p:{scaleX:0.05,scaleY:0.05,x:211,y:0}},{t:this.instance_9,p:{scaleX:0.05,scaleY:0.05,x:214,y:143}},{t:this.instance_8,p:{scaleX:0.05,scaleY:0.05,x:185,y:174}},{t:this.instance_7,p:{scaleX:0.05,scaleY:0.05,x:205,y:105}},{t:this.instance_6,p:{scaleX:0.05,scaleY:0.05,x:199,y:212}},{t:this.instance_5,p:{scaleX:0.05,scaleY:0.05,x:5,y:212}},{t:this.instance_4,p:{scaleX:0.05,scaleY:0.05,x:131,y:-3}},{t:this.instance_3,p:{scaleX:0.05,scaleY:0.05,x:46,y:7}},{t:this.instance_2,p:{scaleX:0.05,scaleY:0.05,x:44,y:200}}]},6).to({state:[{t:this.instance_19,p:{scaleX:0.06,scaleY:0.06,x:2,y:9}},{t:this.instance_18,p:{scaleX:0.06,scaleY:0.06,x:171,y:25}},{t:this.instance_17,p:{scaleX:0.06,scaleY:0.06,x:33,y:56}},{t:this.instance_16,p:{scaleX:0.06,scaleY:0.06,x:90,y:19}},{t:this.instance_15,p:{scaleX:0.06,scaleY:0.06,x:26,y:144}},{t:this.instance_14,p:{scaleX:0.06,scaleY:0.06,x:90,y:196}},{t:this.instance_13,p:{scaleX:0.06,scaleY:0.06,x:2,y:97}},{t:this.instance_12,p:{scaleX:0.06,scaleY:0.06,x:140,y:216}},{t:this.instance_11,p:{scaleX:0.06,scaleY:0.06,x:216,y:56}},{t:this.instance_10,p:{scaleX:0.06,scaleY:0.06,x:208,y:-3}},{t:this.instance_9,p:{scaleX:0.06,scaleY:0.06,x:211,y:140}},{t:this.instance_8,p:{scaleX:0.06,scaleY:0.06,x:182,y:171}},{t:this.instance_7,p:{scaleX:0.06,scaleY:0.06,x:202,y:102}},{t:this.instance_6,p:{scaleX:0.06,scaleY:0.06,x:196,y:209}},{t:this.instance_5,p:{scaleX:0.06,scaleY:0.06,x:2,y:209}},{t:this.instance_4,p:{scaleX:0.06,scaleY:0.06,x:128,y:-6}},{t:this.instance_3,p:{scaleX:0.06,scaleY:0.06,x:43,y:4}},{t:this.instance_2,p:{scaleX:0.06,scaleY:0.06,x:41,y:197}}]},6).to({state:[{t:this.instance_19,p:{scaleX:0.05,scaleY:0.05,x:5,y:12}},{t:this.instance_18,p:{scaleX:0.05,scaleY:0.05,x:174,y:28}},{t:this.instance_17,p:{scaleX:0.05,scaleY:0.05,x:36,y:59}},{t:this.instance_16,p:{scaleX:0.05,scaleY:0.05,x:93,y:22}},{t:this.instance_15,p:{scaleX:0.05,scaleY:0.05,x:29,y:147}},{t:this.instance_14,p:{scaleX:0.05,scaleY:0.05,x:93,y:199}},{t:this.instance_13,p:{scaleX:0.05,scaleY:0.05,x:5,y:100}},{t:this.instance_12,p:{scaleX:0.05,scaleY:0.05,x:143,y:219}},{t:this.instance_11,p:{scaleX:0.05,scaleY:0.05,x:219,y:59}},{t:this.instance_10,p:{scaleX:0.05,scaleY:0.05,x:211,y:0}},{t:this.instance_9,p:{scaleX:0.05,scaleY:0.05,x:214,y:143}},{t:this.instance_8,p:{scaleX:0.05,scaleY:0.05,x:185,y:174}},{t:this.instance_7,p:{scaleX:0.05,scaleY:0.05,x:205,y:105}},{t:this.instance_6,p:{scaleX:0.05,scaleY:0.05,x:199,y:212}},{t:this.instance_5,p:{scaleX:0.05,scaleY:0.05,x:5,y:212}},{t:this.instance_4,p:{scaleX:0.05,scaleY:0.05,x:131,y:-3}},{t:this.instance_3,p:{scaleX:0.05,scaleY:0.05,x:46,y:7}},{t:this.instance_2,p:{scaleX:0.05,scaleY:0.05,x:44,y:200}}]},6).to({state:[{t:this.instance_19,p:{scaleX:0.06,scaleY:0.06,x:2,y:9}},{t:this.instance_18,p:{scaleX:0.06,scaleY:0.06,x:171,y:25}},{t:this.instance_17,p:{scaleX:0.06,scaleY:0.06,x:33,y:56}},{t:this.instance_16,p:{scaleX:0.06,scaleY:0.06,x:90,y:19}},{t:this.instance_15,p:{scaleX:0.06,scaleY:0.06,x:26,y:144}},{t:this.instance_14,p:{scaleX:0.06,scaleY:0.06,x:90,y:196}},{t:this.instance_13,p:{scaleX:0.06,scaleY:0.06,x:2,y:97}},{t:this.instance_12,p:{scaleX:0.06,scaleY:0.06,x:140,y:216}},{t:this.instance_11,p:{scaleX:0.06,scaleY:0.06,x:216,y:56}},{t:this.instance_10,p:{scaleX:0.06,scaleY:0.06,x:208,y:-3}},{t:this.instance_9,p:{scaleX:0.06,scaleY:0.06,x:211,y:140}},{t:this.instance_8,p:{scaleX:0.06,scaleY:0.06,x:182,y:171}},{t:this.instance_7,p:{scaleX:0.06,scaleY:0.06,x:202,y:102}},{t:this.instance_6,p:{scaleX:0.06,scaleY:0.06,x:196,y:209}},{t:this.instance_5,p:{scaleX:0.06,scaleY:0.06,x:2,y:209}},{t:this.instance_4,p:{scaleX:0.06,scaleY:0.06,x:128,y:-6}},{t:this.instance_3,p:{scaleX:0.06,scaleY:0.06,x:43,y:4}},{t:this.instance_2,p:{scaleX:0.06,scaleY:0.06,x:41,y:197}}]},6).to({state:[{t:this.instance_19,p:{scaleX:0.05,scaleY:0.05,x:5,y:12}},{t:this.instance_18,p:{scaleX:0.05,scaleY:0.05,x:174,y:28}},{t:this.instance_17,p:{scaleX:0.05,scaleY:0.05,x:36,y:59}},{t:this.instance_16,p:{scaleX:0.05,scaleY:0.05,x:93,y:22}},{t:this.instance_15,p:{scaleX:0.05,scaleY:0.05,x:29,y:147}},{t:this.instance_14,p:{scaleX:0.05,scaleY:0.05,x:93,y:199}},{t:this.instance_13,p:{scaleX:0.05,scaleY:0.05,x:5,y:100}},{t:this.instance_12,p:{scaleX:0.05,scaleY:0.05,x:143,y:219}},{t:this.instance_11,p:{scaleX:0.05,scaleY:0.05,x:219,y:59}},{t:this.instance_10,p:{scaleX:0.05,scaleY:0.05,x:211,y:0}},{t:this.instance_9,p:{scaleX:0.05,scaleY:0.05,x:214,y:143}},{t:this.instance_8,p:{scaleX:0.05,scaleY:0.05,x:185,y:174}},{t:this.instance_7,p:{scaleX:0.05,scaleY:0.05,x:205,y:105}},{t:this.instance_6,p:{scaleX:0.05,scaleY:0.05,x:199,y:212}},{t:this.instance_5,p:{scaleX:0.05,scaleY:0.05,x:5,y:212}},{t:this.instance_4,p:{scaleX:0.05,scaleY:0.05,x:131,y:-3}},{t:this.instance_3,p:{scaleX:0.05,scaleY:0.05,x:46,y:7}},{t:this.instance_2,p:{scaleX:0.05,scaleY:0.05,x:44,y:200}}]},6).to({state:[{t:this.instance_19,p:{scaleX:0.06,scaleY:0.06,x:2,y:9}},{t:this.instance_18,p:{scaleX:0.06,scaleY:0.06,x:171,y:25}},{t:this.instance_17,p:{scaleX:0.06,scaleY:0.06,x:33,y:56}},{t:this.instance_16,p:{scaleX:0.06,scaleY:0.06,x:90,y:19}},{t:this.instance_15,p:{scaleX:0.06,scaleY:0.06,x:26,y:144}},{t:this.instance_14,p:{scaleX:0.06,scaleY:0.06,x:90,y:196}},{t:this.instance_13,p:{scaleX:0.06,scaleY:0.06,x:2,y:97}},{t:this.instance_12,p:{scaleX:0.06,scaleY:0.06,x:140,y:216}},{t:this.instance_11,p:{scaleX:0.06,scaleY:0.06,x:216,y:56}},{t:this.instance_10,p:{scaleX:0.06,scaleY:0.06,x:208,y:-3}},{t:this.instance_9,p:{scaleX:0.06,scaleY:0.06,x:211,y:140}},{t:this.instance_8,p:{scaleX:0.06,scaleY:0.06,x:182,y:171}},{t:this.instance_7,p:{scaleX:0.06,scaleY:0.06,x:202,y:102}},{t:this.instance_6,p:{scaleX:0.06,scaleY:0.06,x:196,y:209}},{t:this.instance_5,p:{scaleX:0.06,scaleY:0.06,x:2,y:209}},{t:this.instance_4,p:{scaleX:0.06,scaleY:0.06,x:128,y:-6}},{t:this.instance_3,p:{scaleX:0.06,scaleY:0.06,x:43,y:4}},{t:this.instance_2,p:{scaleX:0.06,scaleY:0.06,x:41,y:197}}]},6).to({state:[{t:this.instance_19,p:{scaleX:0.05,scaleY:0.05,x:5,y:12}},{t:this.instance_18,p:{scaleX:0.05,scaleY:0.05,x:174,y:28}},{t:this.instance_17,p:{scaleX:0.05,scaleY:0.05,x:36,y:59}},{t:this.instance_16,p:{scaleX:0.05,scaleY:0.05,x:93,y:22}},{t:this.instance_15,p:{scaleX:0.05,scaleY:0.05,x:29,y:147}},{t:this.instance_14,p:{scaleX:0.05,scaleY:0.05,x:93,y:199}},{t:this.instance_13,p:{scaleX:0.05,scaleY:0.05,x:5,y:100}},{t:this.instance_12,p:{scaleX:0.05,scaleY:0.05,x:143,y:219}},{t:this.instance_11,p:{scaleX:0.05,scaleY:0.05,x:219,y:59}},{t:this.instance_10,p:{scaleX:0.05,scaleY:0.05,x:211,y:0}},{t:this.instance_9,p:{scaleX:0.05,scaleY:0.05,x:214,y:143}},{t:this.instance_8,p:{scaleX:0.05,scaleY:0.05,x:185,y:174}},{t:this.instance_7,p:{scaleX:0.05,scaleY:0.05,x:205,y:105}},{t:this.instance_6,p:{scaleX:0.05,scaleY:0.05,x:199,y:212}},{t:this.instance_5,p:{scaleX:0.05,scaleY:0.05,x:5,y:212}},{t:this.instance_4,p:{scaleX:0.05,scaleY:0.05,x:131,y:-3}},{t:this.instance_3,p:{scaleX:0.05,scaleY:0.05,x:46,y:7}},{t:this.instance_2,p:{scaleX:0.05,scaleY:0.05,x:44,y:200}}]},6).to({state:[{t:this.instance_19,p:{scaleX:0.06,scaleY:0.06,x:2,y:9}},{t:this.instance_18,p:{scaleX:0.06,scaleY:0.06,x:171,y:25}},{t:this.instance_17,p:{scaleX:0.06,scaleY:0.06,x:33,y:56}},{t:this.instance_16,p:{scaleX:0.06,scaleY:0.06,x:90,y:19}},{t:this.instance_15,p:{scaleX:0.06,scaleY:0.06,x:26,y:144}},{t:this.instance_14,p:{scaleX:0.06,scaleY:0.06,x:90,y:196}},{t:this.instance_13,p:{scaleX:0.06,scaleY:0.06,x:2,y:97}},{t:this.instance_12,p:{scaleX:0.06,scaleY:0.06,x:140,y:216}},{t:this.instance_11,p:{scaleX:0.06,scaleY:0.06,x:216,y:56}},{t:this.instance_10,p:{scaleX:0.06,scaleY:0.06,x:208,y:-3}},{t:this.instance_9,p:{scaleX:0.06,scaleY:0.06,x:211,y:140}},{t:this.instance_8,p:{scaleX:0.06,scaleY:0.06,x:182,y:171}},{t:this.instance_7,p:{scaleX:0.06,scaleY:0.06,x:202,y:102}},{t:this.instance_6,p:{scaleX:0.06,scaleY:0.06,x:196,y:209}},{t:this.instance_5,p:{scaleX:0.06,scaleY:0.06,x:2,y:209}},{t:this.instance_4,p:{scaleX:0.06,scaleY:0.06,x:128,y:-6}},{t:this.instance_3,p:{scaleX:0.06,scaleY:0.06,x:43,y:4}},{t:this.instance_2,p:{scaleX:0.06,scaleY:0.06,x:41,y:197}}]},6).to({state:[{t:this.instance_19,p:{scaleX:0.05,scaleY:0.05,x:5,y:12}},{t:this.instance_18,p:{scaleX:0.05,scaleY:0.05,x:174,y:28}},{t:this.instance_17,p:{scaleX:0.05,scaleY:0.05,x:36,y:59}},{t:this.instance_16,p:{scaleX:0.05,scaleY:0.05,x:93,y:22}},{t:this.instance_15,p:{scaleX:0.05,scaleY:0.05,x:29,y:147}},{t:this.instance_14,p:{scaleX:0.05,scaleY:0.05,x:93,y:199}},{t:this.instance_13,p:{scaleX:0.05,scaleY:0.05,x:5,y:100}},{t:this.instance_12,p:{scaleX:0.05,scaleY:0.05,x:143,y:219}},{t:this.instance_11,p:{scaleX:0.05,scaleY:0.05,x:219,y:59}},{t:this.instance_10,p:{scaleX:0.05,scaleY:0.05,x:211,y:0}},{t:this.instance_9,p:{scaleX:0.05,scaleY:0.05,x:214,y:143}},{t:this.instance_8,p:{scaleX:0.05,scaleY:0.05,x:185,y:174}},{t:this.instance_7,p:{scaleX:0.05,scaleY:0.05,x:205,y:105}},{t:this.instance_6,p:{scaleX:0.05,scaleY:0.05,x:199,y:212}},{t:this.instance_5,p:{scaleX:0.05,scaleY:0.05,x:5,y:212}},{t:this.instance_4,p:{scaleX:0.05,scaleY:0.05,x:131,y:-3}},{t:this.instance_3,p:{scaleX:0.05,scaleY:0.05,x:46,y:7}},{t:this.instance_2,p:{scaleX:0.05,scaleY:0.05,x:44,y:200}}]},6).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(125,119,128.6,134.6);
// library properties:
lib.properties = {
	id: '67284BD9C907784ABEFB9C6145C30F0A',
	width: 250,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/planeta_atlas_.png", id:"planeta_atlas_"},
		{src:"images/planeta_atlas_2.png", id:"planeta_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['67284BD9C907784ABEFB9C6145C30F0A'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;