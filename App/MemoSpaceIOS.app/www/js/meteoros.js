(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"meteoros_atlas_", frames: [[0,514,512,512],[0,0,512,512]]}
];


// symbols:



(lib.meteoro2 = function() {
	this.initialize(ss["meteoros_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.meteoro22 = function() {
	this.initialize(ss["meteoros_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.meteoros = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.meteoro22();
	this.instance.parent = this;
	this.instance.setTransform(-386,-447,0.4,0.4);

	this.instance_1 = new lib.meteoro2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-377,-232,0.3,0.3);

	this.instance_2 = new lib.meteoro22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-193,-341,0.4,0.4);

	this.instance_3 = new lib.meteoro2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-181,-136,0.3,0.3);

	this.instance_4 = new lib.meteoro22();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-128,-93,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{x:-128,y:-93}},{t:this.instance_3,p:{x:-181,y:-136}},{t:this.instance_2,p:{x:-193,y:-341}},{t:this.instance_1,p:{x:-377,y:-232}},{t:this.instance,p:{x:-386,y:-447}}]}).to({state:[{t:this.instance_4,p:{x:-76,y:-40}},{t:this.instance_3,p:{x:-129,y:-83}},{t:this.instance_2,p:{x:-141,y:-288}},{t:this.instance_1,p:{x:-325,y:-179}},{t:this.instance,p:{x:-334,y:-394}}]},4).to({state:[{t:this.instance_4,p:{x:-26,y:12}},{t:this.instance_3,p:{x:-79,y:-31}},{t:this.instance_2,p:{x:-91,y:-236}},{t:this.instance_1,p:{x:-275,y:-127}},{t:this.instance,p:{x:-284,y:-342}}]},5).to({state:[{t:this.instance_4,p:{x:33,y:73}},{t:this.instance_3,p:{x:-20,y:30}},{t:this.instance_2,p:{x:-32,y:-175}},{t:this.instance_1,p:{x:-216,y:-66}},{t:this.instance,p:{x:-225,y:-281}}]},4).to({state:[{t:this.instance_4,p:{x:88,y:132}},{t:this.instance_3,p:{x:35,y:89}},{t:this.instance_2,p:{x:23,y:-116}},{t:this.instance_1,p:{x:-161,y:-7}},{t:this.instance,p:{x:-170,y:-222}}]},5).to({state:[{t:this.instance_4,p:{x:140,y:185}},{t:this.instance_3,p:{x:87,y:142}},{t:this.instance_2,p:{x:75,y:-63}},{t:this.instance_1,p:{x:-109,y:46}},{t:this.instance,p:{x:-118,y:-169}}]},4).to({state:[{t:this.instance_4,p:{x:190,y:234}},{t:this.instance_3,p:{x:137,y:191}},{t:this.instance_2,p:{x:125,y:-15}},{t:this.instance_1,p:{x:-59,y:95}},{t:this.instance,p:{x:-68,y:-121}}]},5).to({state:[{t:this.instance_4,p:{x:246,y:287}},{t:this.instance_3,p:{x:193,y:244}},{t:this.instance_2,p:{x:181,y:38}},{t:this.instance_1,p:{x:-3,y:148}},{t:this.instance,p:{x:-12,y:-68}}]},4).to({state:[{t:this.instance_4,p:{x:288,y:329}},{t:this.instance_3,p:{x:235,y:286}},{t:this.instance_2,p:{x:223,y:80}},{t:this.instance_1,p:{x:39,y:190}},{t:this.instance,p:{x:30,y:-26}}]},5).to({state:[{t:this.instance_4,p:{x:340,y:382}},{t:this.instance_3,p:{x:287,y:339}},{t:this.instance_2,p:{x:275,y:133}},{t:this.instance_1,p:{x:91,y:243}},{t:this.instance,p:{x:82,y:27}}]},4).to({state:[{t:this.instance_4,p:{x:384,y:429}},{t:this.instance_3,p:{x:331,y:386}},{t:this.instance_2,p:{x:319,y:180}},{t:this.instance_1,p:{x:135,y:290}},{t:this.instance,p:{x:126,y:74}}]},5).to({state:[{t:this.instance_4,p:{x:422,y:473}},{t:this.instance_3,p:{x:369,y:430}},{t:this.instance_2,p:{x:357,y:224}},{t:this.instance_1,p:{x:173,y:334}},{t:this.instance,p:{x:164,y:118}}]},4).to({state:[{t:this.instance_4,p:{x:470,y:524}},{t:this.instance_3,p:{x:417,y:481}},{t:this.instance_2,p:{x:405,y:275}},{t:this.instance_1,p:{x:221,y:385}},{t:this.instance,p:{x:212,y:169}}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-261,-322,935.8,1050.8);
// library properties:
lib.properties = {
	id: '4DB56AF25658264EB62CD255BE0C89A6',
	width: 250,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/meteoros_atlas_.png", id:"meteoros_atlas_"}
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
an.compositions['4DB56AF25658264EB62CD255BE0C89A6'] = {
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