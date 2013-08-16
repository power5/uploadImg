(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// success
	this.backBtn = new lib.back();
	this.backBtn.setTransform(307,100);
	new cjs.ButtonHelper(this.backBtn, 0, 1, 1);

	this._result = new cjs.Text("上传成功!", "20px Microsoft YaHei", "#601986");
	this._result.lineHeight = 22;
	this._result.lineWidth = 141;
	this._result.setTransform(307,44.9);

	this.successBox = new lib.successBox();
	this.successBox.setTransform(768.7,98.1,1,1,0,0,0,64.8,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.successBox},{t:this._result},{t:this.backBtn}]},2).wait(1));

	// beard
	this._label = new cjs.Text("", "12px Microsoft YaHei", "#601986");
	this._label.lineHeight = 14;
	this._label.lineWidth = 76;
	this._label.setTransform(412,230.3);

	this.btnSle = new lib.sle();
	this.btnSle.setTransform(364,280.4,0.849,0.849,0,0,0,53,17.5);
	new cjs.ButtonHelper(this.btnSle, 0, 1, 2);

	this.btnOk = new lib.btnOk();
	this.btnOk.setTransform(364,239.3,0.849,0.849,0,0,0,53,17.5);
	new cjs.ButtonHelper(this.btnOk, 0, 1, 2);

	this._eyebrow1 = new lib.comjteyebrow1();
	this._eyebrow1.setTransform(440.4,195,1,1,0,0,0,37.5,25);

	this._eyebrow0 = new lib.comjteyebrow0();
	this._eyebrow0.setTransform(346.5,195,1,1,0,0,0,37.5,25);

	this.text = new cjs.Text("选择眉毛：", "12px Microsoft YaHei");
	this.text.lineHeight = 14;
	this.text.lineWidth = 100;
	this.text.setTransform(311.5,150.1);

	this._beard5 = new lib.comjtbeard5();
	this._beard5.setTransform(458.4,112,1,1,0,0,0,28.5,25);

	this._beard4 = new lib.comjtbeard4();
	this._beard4.setTransform(401.4,115.5,1,1,0,0,0,28.5,25);

	this._beard3 = new lib.comjtbeard3();
	this._beard3.setTransform(337.5,115.5,1,1,0,0,0,28.5,25);

	this._beard2 = new lib.comjtbeard2();
	this._beard2.setTransform(458.4,62,1,1,0,0,0,28.5,25);

	this._beard1 = new lib.comjtbeard1();
	this._beard1.setTransform(396.5,65.5,1,1,0,0,0,28.5,25);

	this._beard0 = new lib.comjtbeard0();
	this._beard0.setTransform(341.5,71,1,1,0,0,0,32.5,30.5);

	this.text_1 = new cjs.Text("选择胡子：", "12px Microsoft YaHei");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 100;
	this.text_1.setTransform(313.5,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this._beard0},{t:this._beard1},{t:this._beard2},{t:this._beard3},{t:this._beard4},{t:this._beard5},{t:this.text},{t:this._eyebrow0},{t:this._eyebrow1},{t:this.btnOk},{t:this.btnSle},{t:this._label}]},1).to({state:[]},1).wait(1));

	// btn
	this.rotateBtn = new lib.rotateBtn();
	this.rotateBtn.setTransform(256,15);
	new cjs.ButtonHelper(this.rotateBtn, 0, 1, 1);

	this.zoomOut = new lib.zoomOut();
	this.zoomOut.setTransform(12.4,276.3);
	new cjs.ButtonHelper(this.zoomOut, 0, 1, 1);

	this.zoomIn = new lib.zoomIn();
	this.zoomIn.setTransform(45.4,276.3);
	new cjs.ButtonHelper(this.zoomIn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.zoomIn},{t:this.zoomOut},{t:this.rotateBtn}]},1).to({state:[]},1).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("A2EYGMAAAgu2MAtcAAAMAAAAu2g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:149.6,y:154.3}).wait(2));

	// border
	this._browseBtn = new lib.flcontrolsButton();
	this._browseBtn.setTransform(307.2,61.5,0.756,1.136,0,0,0,50,11);

	this.instance = new lib.flcontrolsLabel("synched",0);
	this.instance.setTransform(155.8,61,2.114,1.091,0,0,0,50.1,11);

	this._loading = new lib.sprite5();
	this._loading.setTransform(440.5,238.9,0.548,0.548);

	this.imgBorder = new lib.imgBorder();
	this.imgBorder.setTransform(152.5,158,1,1,0,0,0,145.5,151);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this._browseBtn}]}).to({state:[{t:this.imgBorder},{t:this._loading}]},1).wait(2));

	// bg
	this.instance_1 = new lib.bg2();

	this.instance_2 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,492,317);


// symbols:
(lib.backBtn = function() {
	this.initialize(img.backBtn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,24);


(lib.beard0 = function() {
	this.initialize(img.beard0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,61);


(lib.beard1 = function() {
	this.initialize(img.beard1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,50);


(lib.beard2 = function() {
	this.initialize(img.beard2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,50);


(lib.beard3 = function() {
	this.initialize(img.beard3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,50);


(lib.beard4 = function() {
	this.initialize(img.beard4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,50);


(lib.beard5 = function() {
	this.initialize(img.beard5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,50);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,492,317);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,492,317);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,40);


(lib.eyeborw0 = function() {
	this.initialize(img.eyeborw0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,50);


(lib.eyebrow1 = function() {
	this.initialize(img.eyebrow1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,50);


(lib.ok = function() {
	this.initialize(img.ok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,35);


(lib.ok_O = function() {
	this.initialize(img.ok_O);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,35);


(lib.ok_pver = function() {
	this.initialize(img.ok_pver);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,35);


(lib.rotate = function() {
	this.initialize(img.rotate);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,40);


(lib.rotateOver = function() {
	this.initialize(img.rotateOver);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,40);


(lib.sel = function() {
	this.initialize(img.sel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,35);


(lib.sle_Down = function() {
	this.initialize(img.sle_Down);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,35);


(lib.sle_O = function() {
	this.initialize(img.sle_O);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,35);


(lib.zoomin = function() {
	this.initialize(img.zoomin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,32);


(lib.zoomInDown = function() {
	this.initialize(img.zoomInDown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,32);


(lib.zoominO = function() {
	this.initialize(img.zoominO);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,32);


(lib.zoomout = function() {
	this.initialize(img.zoomout);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,32);


(lib.zoomoutO = function() {
	this.initialize(img.zoomoutO);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,32);


(lib.zoomOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zoomout();

	this.instance_1 = new lib.zoomoutO();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,32);


(lib.zoomIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zoomin();

	this.instance_1 = new lib.zoominO();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,32);


(lib.sle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sel();

	this.instance_1 = new lib.sle_O();

	this.instance_2 = new lib.sle_Down();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,35);


(lib.shape2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AgGAGIgCgGIACgFIAGgDIAGADIADAFIgDAGIgGADg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-1,2,2);


(lib.rotateBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rotate();

	this.instance_1 = new lib.rotateOver();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39,40);


(lib.imgBox2 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.imgBorder = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5A4658").ss(3,1,1).p("AW53qMAAAAvVMgtxAAAMAAAgvVg");
	this.shape.setTransform(146.5,151.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,293,303);


(lib.comjteyebrow1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.eyebrow1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,75,50);


(lib.comjteyebrow0 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.eyeborw0();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,75,50);


(lib.TextInput_upSkin = function() {
	this.initialize();

	// skin
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArtBjIAAjGIXbAAIAADGg");
	this.shape.setTransform(76,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3D5D6").s().p("ArtAEIAAgIIXbAAIAAAIg");
	this.shape_1.setTransform(76,21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6D6F70").s().p("AroAEIgKAAIAAgIIXlAAIAAAIg");
	this.shape_2.setTransform(75.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C9CBCC").s().p("ALuBtIAAgKIAAjGIAAgKIAKAAIAADagAr3BtIAAjQIAKAAIAADGIAAAKg");
	this.shape_3.setTransform(76,11);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.TextInput_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("ArtBjIAAjGIXbAAIAADGg");
	this.shape.setTransform(76,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(211,213,214,0.298)").s().p("ArtAEIAAgIIXbAAIAAAIg");
	this.shape_1.setTransform(76,21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(109,111,112,0.298)").s().p("AroAEIgKAAIAAgIIXlAAIAAAIg");
	this.shape_2.setTransform(75.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(201,203,204,0.298)").s().p("ALuBtIAAgKIAAjGIAAgKIAKAAIAADagAr3BtIAAjQIAKAAIAADGIAAAKg");
	this.shape_3.setTransform(76,11);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.focusRectSkin = function() {
	this.initialize();

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0075BF","#009DFF"],[0,1],0,-10.7,0,10.8).s().p("AlxBtQgoAAABgnIAAiLQgBgoAoAAILiAAQApAAAAAoIAACLQAAAngpAAgAmOhFIAACLQgBAdAdAAILlAAQAdAAAAgdIAAiLQAAgdgdgBIrlAAQgdABABAdg");
	this.shape.setTransform(41,11);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.Button_upSkin = function() {
	this.initialize();

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],40.6,5.5,40.6,-4.9).s().p("AjGA2IgBhOQAAgeAeAAIFxAAIAABsg");
	this.shape.setTransform(21,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],19.5,1.6,19.5,-4.9).s().p("AjHA2IAAhsIFwAAQAeAAAAAeIABBOg");
	this.shape_1.setTransform(61,6.5);

	// fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],-9.9,11,-9.9,-10.9).s().p("AiqBjQgdAAAAgdIAAiLQAAgdAdgBIFyAAIAADGg");
	this.shape_2.setTransform(21,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],10,11,10,-10.9).s().p("AjGBjIAAjGIFxAAQAcABAAAdIAACLQAAAdgcAAg");
	this.shape_3.setTransform(61,11);

	// border
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#585F63","#B7BABC"],[0,1],-9.4,11,-9.4,-10.9).s().p("AijBtQgoAAgBgnIAAiLQABgoAoAAIFwAAIAAAKIlyAAQgdABAAAdIAACLQAAAdAdAAIFyAAIAAAKg");
	this.shape_4.setTransform(20.5,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#585F63","#B7BABC"],[0,1],9.5,11,9.5,-10.9).s().p("AjLBtIAAgKIFxAAQAcAAABgdIAAiLQgBgdgcgBIlxAAIAAgKIFwAAQAoAAgBAoIAACLQABAngoAAg");
	this.shape_5.setTransform(61.5,11);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,22);


(lib.Button_selectedUpSkin = function() {
	this.initialize();

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(96,25,134,0)").s().p("AkYBjQgcAAAAgdIAAiLQAAgdAcgBIIwAAQAdABAAAdIAACLQAAAdgdAAg");
	this.shape.setTransform(32,11);

	// border
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(96,25,134,0)").s().p("AkWBtQgoAAAAgnIAAiLQAAgoAoAAIItAAQAoAAAAAoIAACLQAAAngoAAgAk0hFIAACLQAAAdAcAAIIwAAQAdAAAAgdIAAiLQAAgdgdgBIowAAQgcABAAAdg");
	this.shape_1.setTransform(32,11);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_selectedOverSkin = function() {
	this.initialize();

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],-9.9,11,-9.9,-10.9).s().p("AiqBjQgdAAAAgdIAAiLQAAgdAdgBIFyAAIAADGg");
	this.shape.setTransform(21,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],19,11,19,-10.9).s().p("AhsBjIAAjGIC8AAQAdABAAAdIAACLQAAAdgdAAg");
	this.shape_1.setTransform(52,11);

	// border
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#0075BF","#009DFF"],[0,1],-9.4,11,-9.4,-10.9).s().p("AijBtQgoAAAAgnIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcAAIFxAAIAAAKg");
	this.shape_2.setTransform(20.5,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#0075BF","#009DFF"],[0,1],18.5,11,18.5,-10.9).s().p("AhxBtIAAgKIC9AAQAdAAAAgdIAAiLQAAgdgdgBIi9AAIAAgKIC8AAQAoAAgBAoIAACLQABAngoAAg");
	this.shape_3.setTransform(52.5,11);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_selectedDownSkin = function() {
	this.initialize();

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#94D2FC","#ADE4FC","#BEEAFC"],[0,1,1],10,-10.9,10,11).s().p("AiqBjQgdAAAAgdIAAiLQAAgdAdgBIFyAAIAADGg");
	this.shape.setTransform(21,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#94D2FC","#ADE4FC","#BEEAFC"],[0,1,1],-18.8,-10.9,-18.8,11).s().p("AhsBjIAAjGIC8AAQAdABAAAdIAACLQAAAdgdAAg");
	this.shape_1.setTransform(52,11);

	// border
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#0075BF","#009DFF"],[0,1],-9.4,11,-9.4,-10.9).s().p("AijBtQgoAAAAgnIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcAAIFxAAIAAAKg");
	this.shape_2.setTransform(20.5,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#0075BF","#009DFF"],[0,1],18.5,11,18.5,-10.9).s().p("AhxBtIAAgKIC9AAQAdAAAAgdIAAiLQAAgdgdgBIi9AAIAAgKIC8AAQAoAAgBAoIAACLQABAngoAAg");
	this.shape_3.setTransform(52.5,11);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_selectedDisabledSkin = function() {
	this.initialize();

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0.2)","rgba(204,204,204,0.298)"],[0,1],-9.9,11,-9.9,-10.9).s().p("AiqBjQgdAAAAgdIAAiLQAAgdAdgBIFyAAIAADGg");
	this.shape.setTransform(21,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(204,204,204,0.2)","rgba(204,204,204,0.298)"],[0,1],19,11,19,-10.9).s().p("AhsBjIAAjGIC8AAQAdABAAAdIAACLQAAAdgdAAg");
	this.shape_1.setTransform(52,11);

	// border
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.2)"],[0,1],-9.4,11,-9.4,-10.9).s().p("AijBtQgoAAAAgnIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcAAIFxAAIAAAKg");
	this.shape_2.setTransform(20.5,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.2)"],[0,1],18.5,11,18.5,-10.9).s().p("AhxBtIAAgKIC9AAQAdAAAAgdIAAiLQAAgdgdgBIi9AAIAAgKIC8AAQAoAAgBAoIAACLQABAngoAAg");
	this.shape_3.setTransform(52.5,11);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_overSkin = function() {
	this.initialize();

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],40.6,5.5,40.6,-4.9).s().p("AjHA2IAAhOQAAgeAeAAIFxAAIAABsg");
	this.shape.setTransform(21,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],19.5,1.5,19.5,-4.9).s().p("AjGA2IAAhsIFwAAQAdAAABAeIAABOg");
	this.shape_1.setTransform(61,6.5);

	// fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],30,11,30,-10.9).s().p("AlyBjQgdAAABgdIAAiLQgBgdAdgBILlAAQAdABAAAdIAACLQAAAdgdAAg");
	this.shape_2.setTransform(41,11);

	// border
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-9.4,11,-9.4,-10.9).s().p("AijBtQgoAAgBgnIAAiLQABgoAoAAIFwAAIAAAKIlyAAQgdABAAAdIAACLQAAAdAdAAIFyAAIAAAKg");
	this.shape_3.setTransform(20.5,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#0075BF","#009DFF"],[0,0.992],9.5,11,9.5,-10.9).s().p("AjLBtIAAgKIFxAAQAcAAABgdIAAiLQgBgdgcgBIlxAAIAAgKIFwAAQAoAAgBAoIAACLQABAngoAAg");
	this.shape_4.setTransform(61.5,11);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,22);


(lib.Button_emphasizedSkin = function() {
	this.initialize();

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().rr(-40.05,-10,80.1,20,3);
	this.shape.setTransform(41,11);

	// border
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2C92F5","#3D00CC"],[0,1],0,-10.7,0,10.8).s().p("AlxBtQgoAAABgnIAAiLQgBgoAoAAILiAAQApAAAAAoIAACLQAAAngpAAgAmOhFIAACLQgBAdAdAAILlAAQAdAAAAgdIAAiLQAAgdgdgBIrlAAQgdABABAdg");
	this.shape_1.setTransform(41,11);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.Button_downSkin = function() {
	this.initialize();

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],40.6,5.5,40.6,-4.9).s().p("AjHA2IAAhOQAAgeAeAAIFxAAIAABsg");
	this.shape.setTransform(21,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],19.5,1.5,19.5,-4.9).s().p("AjGA2IAAhsIFwAAQAdAAABAeIAABOg");
	this.shape_1.setTransform(61,6.5);

	// fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-9.9,11,-9.9,-10.9).s().p("AiqBjQgdAAABgdIAAiLQgBgdAdgBIFyAAIAADGg");
	this.shape_2.setTransform(21,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],10,11,10,-10.9).s().p("AjHBjIAAjGIFxAAQAdABABAdIAACLQgBAdgdAAg");
	this.shape_3.setTransform(61.1,11);

	// border
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-9.4,11,-9.4,-10.9).s().p("AijBtQgoAAgBgnIAAiLQABgoAoAAIFwAAIAAAKIlyAAQgdABAAAdIAACLQAAAdAdAAIFyAAIAAAKg");
	this.shape_4.setTransform(20.5,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#0075BF","#009DFF"],[0,0.992],9.5,11,9.5,-10.9).s().p("AjLBtIAAgKIFxAAQAcAAABgdIAAiLQgBgdgcgBIlxAAIAAgKIFwAAQAoAAgBAoIAACLQABAngoAAg");
	this.shape_5.setTransform(61.5,11);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,22);


(lib.Button_disabledSkin = function() {
	this.initialize();

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.141)"],[0,1],39.5,1.6,39.5,-4.9).s().p("AmOA2IgBhOQAAgeAeAAILiAAQAeAAAAAeIABBOg");
	this.shape.setTransform(41,6.5);

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],30,11,30,-10.9).s().p("AlyBjQgdAAABgdIAAiLQgBgdAdgBILlAAQAdABAAAdIAACLQAAAdgdAAg");
	this.shape_1.setTransform(41,11);

	// border
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],-9.4,11,-9.4,-10.9).s().p("AijBtQgoAAAAgnIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcAAIFxAAIAAAKg");
	this.shape_2.setTransform(20.5,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],9.5,11,9.5,-10.9).s().p("AjMBtIAAgKIFyAAQAdAAAAgdIAAiLQAAgdgdgBIlyAAIAAgKIFxAAQAoAAAAAoIAACLQAAAngoAAg");
	this.shape_3.setTransform(61.5,11);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.Component_avatar = function() {
	this.initialize();

	// Avatar
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AGQBuIsfAAIAAjbIMfAAg");
	this.shape.setTransform(40,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmPBtIAAjaIMfAAIAADag");
	this.shape_1.setTransform(40,11);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,22);


(lib.btnOk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ok();

	this.instance_1 = new lib.ok_O();

	this.instance_2 = new lib.ok_pver();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,35);


(lib.comjtbeard5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.beard5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57,50);


(lib.comjtbeard4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.beard4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57,50);


(lib.comjtbeard3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.beard3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57,50);


(lib.comjtbeard2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.beard2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57,50);


(lib.comjtbeard1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.beard1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57,50);


(lib.comjtbeard0 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.beard0();
	this.instance.setTransform(0,0,0.877,0.82);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57,50);


(lib.back = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.backBtn();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,131,24);


(lib.uploadBox = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.flcontrolsTextInput = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// assets
	this.instance = new lib.focusRectSkin();
	this.instance.setTransform(126.5,124.4,1,1,0,0,0,41.1,11);

	this.instance_1 = new lib.TextInput_upSkin();
	this.instance_1.setTransform(91.5,29.2,1,1,0,0,0,76,11);

	this.instance_2 = new lib.TextInput_disabledSkin();
	this.instance_2.setTransform(91.5,76.7,1,1,0,0,0,76,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// avatar
	this.instance_3 = new lib.Component_avatar();
	this.instance_3.setTransform(50,11,1.25,1,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);


(lib.sprite3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAggfQANAOAAARQAAASgNANQgNAOgTAAQgSAAgNgOQgNgNAAgSQAAgRANgOQANgNASAAQATAAANANg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfAfQgNgNAAgSQAAgRANgOQAOgNARAAQASAAAOANQANAOAAARQAAASgNANQgOAOgSAAQgRAAgOgOg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgsAAQAAgRANgOQANgNASAAQATAAANANQANAOAAARQAAASgNANQgNAOgTAAQgSAAgNgOQgNgNAAgS");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0)").s().p("AgfAfQgNgNAAgSQAAgRANgOQAOgNARAAQASAAAOANQANAOAAARQAAASgNANQgOAOgSAAQgRAAgOgOg");

	this.instance = new lib.shape2("synched",0);
	this.instance.setTransform(0.1,0.6,4.667,4.692);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,9.1,9.1);


(lib.flcontrolsLabel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// avatar
	this.instance = new lib.Component_avatar();
	this.instance.setTransform(0.1,0,1.25,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,100,22);


(lib.flcontrolsButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// assets
	this.instance = new lib.focusRectSkin();
	this.instance.setTransform(70.1,310.9,1,1,0,0,0,41.1,11);

	this.instance_1 = new lib.Button_upSkin();
	this.instance_1.setTransform(70,213,1,1,0,0,0,41,11);

	this.instance_2 = new lib.Button_selectedUpSkin();
	this.instance_2.setTransform(88,18.7,1,1,0,0,0,41,11);

	this.instance_3 = new lib.Button_selectedOverSkin();
	this.instance_3.setTransform(88,50.7,1,1,0,0,0,41,11);

	this.instance_4 = new lib.Button_selectedDownSkin();
	this.instance_4.setTransform(88,114.7,1,1,0,0,0,41,11);

	this.instance_5 = new lib.Button_selectedDisabledSkin();
	this.instance_5.setTransform(88.1,82.7,1,1,0,0,0,41.1,11);

	this.instance_6 = new lib.Button_overSkin();
	this.instance_6.setTransform(70,181,1,1,0,0,0,41,11);

	this.instance_7 = new lib.Button_emphasizedSkin();
	this.instance_7.setTransform(70.1,245,1,1,0,0,0,41.1,11);

	this.instance_8 = new lib.Button_downSkin();
	this.instance_8.setTransform(70,149,1,1,0,0,0,41,11);

	this.instance_9 = new lib.Button_disabledSkin();
	this.instance_9.setTransform(70.1,277,1,1,0,0,0,41.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// avatar
	this.instance_10 = new lib.Component_avatar();
	this.instance_10.setTransform(50,11,1.25,1,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);


(lib.successBox = function() {
	this.initialize();

	// txt
	this.text = new cjs.Text("email：", "12px Microsoft YaHei");
	this.text.lineHeight = 14;
	this.text.lineWidth = 42;
	this.text.setTransform(-12.4,52.8);

	this.input2 = new lib.flcontrolsTextInput();
	this.input2.setTransform(93.9,64.3,1.098,1,0,0,0,50,11);
	this.input2.cache(-1,-1,104,26);

	this.text_1 = new cjs.Text("姓名：", "12px Microsoft YaHei");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 33;
	this.text_1.setTransform(-12.4,25.7);

	this.reSend = new lib.flcontrolsButton();
	this.reSend.setTransform(77.5,101,0.68,1,0,0,0,50,11);
	this.reSend.shadow = new cjs.Shadow("rgba(102,0,153,1)",0,0,5);

	this.input1 = new lib.flcontrolsTextInput();
	this.input1.setTransform(94,37.2,1.099,1,0,0,0,50,11);
	this.input1.cache(-1,-1,104,26);

	this.text_2 = new cjs.Text("填写姓名和Email，赢取奖品", "14px Microsoft YaHei", "#601986");
	this.text_2.lineHeight = 16;
	this.text_2.lineWidth = 187;
	this.text_2.setTransform(-12.4,-5.2);

	this.addChild(this.text_2,this.input1,this.reSend,this.text_1,this.input2,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.4,-5.2,190.5,117.3);


(lib.sprite5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:11});

	// Layer 24
	this.instance = new lib.sprite3();
	this.instance.setTransform(-12.5,-20.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(14));

	// Layer 22
	this.instance_1 = new lib.sprite3();
	this.instance_1.setTransform(-21,-10.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(15));

	// Layer 20
	this.instance_2 = new lib.sprite3();
	this.instance_2.setTransform(-23.4,0.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(16));

	// Layer 18
	this.instance_3 = new lib.sprite3();
	this.instance_3.setTransform(-20.4,12.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).wait(17));

	// Layer 16
	this.instance_4 = new lib.sprite3();
	this.instance_4.setTransform(-12.2,20.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).wait(18));

	// Layer 14
	this.instance_5 = new lib.sprite3();
	this.instance_5.setTransform(0,24.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).wait(19));

	// Layer 12
	this.instance_6 = new lib.sprite3();
	this.instance_6.setTransform(11.5,20.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).wait(20));

	// Layer 10
	this.instance_7 = new lib.sprite3();
	this.instance_7.setTransform(20.1,12.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).wait(21));

	// Layer 8
	this.instance_8 = new lib.sprite3();
	this.instance_8.setTransform(23.5,0.7);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).wait(22));

	// Layer 6
	this.instance_9 = new lib.sprite3();
	this.instance_9.setTransform(21.4,-11.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},0).wait(23));

	// Layer 4
	this.instance_10 = new lib.sprite3();
	this.instance_10.setTransform(11.7,-20.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).wait(24));

	// Layer 1
	this.instance_11 = new lib.sprite3();
	this.instance_11.setTransform(-0.5,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-28.5,9.1,9.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;