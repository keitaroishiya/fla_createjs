(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 24,
	color: "#F7F1DD",
	manifest: [
		{src:"images/bt.png", id:"bt"}
	]
};



// symbols:



(lib.bt = function() {
	this.initialize(img.bt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,560,88);


(lib.TextView = function() {
	this.initialize();

	// Layer1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494542").s().p("AG/BdIAAhqIAZAAIAABRICWAAIAAATIiWAAIAAAGgAE5BdIAAgGIg0AAIAAAGIgVAAIAAiIIAYAAIAAgTIgbAAIAAgXIBkAAIAAAXIgbAAIAAATIAZAAIAACIgAEFBCIA0AAIAAgKIg0AAgAEFAjIA0AAIAAgNIgHAAQgFAAgDgBQgDgBgCgDQgDgEAAgNIAAgWIgHAAIAAANQAAAKgCAJQgFANgFAGIgKgGgAEFAQQAEgGACgHQABgEAAgIIAAgNIgHAAgAExAAIABAGIACABIAFAAIAAgdIgIAAgAEbgrIAHAAIAAgTIgHAAgAgdBdIAAgFIhPAAIAAAFIgaAAIAAhDICFAAIAABDgAhsBCIBPAAIAAgTIhPAAgAjqBNQgXgOgKgIIgQAMIgTAKQgaAMgQAEIgSgXQAPgEAbgKIASgJIAQgLQgQgVgHgMQgGgJgKgbIgkAAIAAgZIBOAAIAAgiIAcAAIAAAiIBQAAIAAAZIgjAAQgKAbgGAJQgOAXgIAKQAKAHAYAMQAMAFAcAIIgUAZQgbgKgNgGgAkdgEQAIALAKALQAJgLAHgLQAGgOAFgPIg6AAQAIAUAFAJgAF0BaQgJAAgGgCQgGgCgDgEQgDgEgCgIIgBgUIAAhKIAyAAIAAglIgxAAIAAgYIBKAAIAABUIgyAAIAAAzQAAAJACADQABACAFAAIASAAQAFAAABgDIABgPIAYAEIgDAVQgBAIgDAEQgDAEgGABQgEACgJAAgAB4BVQgMgDgJgEQgIgEgFgHQgEgHAAgJQAAgHAEgHQADgGAHgHQAJgIAagOQgEgFgFAAQgJAAgKADQgJADgIAIQgLAKgLAOIgVgRQAIgHAOgRQAIgKAMgWIgjAAIAAgYIAtAAQAFgOADgLIAcAGIgGATIA5AAIAAAYIhDAAQgGAMgGAIIAMgFIANgCQAJAAAHAFQAGAEAEAJIAvgTIAKAYIg0ARQACAPAAAUIgaAAIAAgYQgMAGgHAGQgHAGAAAGQAAADACADQACACAFACQAHACAXABIAZgBQAQgBAJgDIADAZQgKACgQABIgbABQgQAAgMgCgAmSBMIgQgoQgFgMgFgEQgFgFgIAAIgTAAIAAA9IgcAAIAAiYIAmAAQAPAAAKACQAMACAJAEIAHAFIAGAIIAEAKIABAMQAAAIgBAGQgCAHgEAEIgIAIQgEABgGACQAGADAEAEQAEAEACAGIAZA4gAnMgGIAaAAIAIgDIAGgFIAEgHQABgEAAgFQAAgGgCgFQgCgEgFgCQgEgCgGgBIgagBgApvBMIAAiYIAqAAQAOAAALACQAMADAIAFQAFADADAEQAEADACAFIAEAKIABANIgBANIgDALIgGAHIgGAIQgHAGgKADQgKADgLAAIgWAAIAAA1gApRAAIAOAAQAIAAAGgBQAFgBAEgDQAEgDACgFQACgGAAgHQAAgGgCgFQgCgEgEgDQgEgDgGgCQgGgBgIAAIgNAAgAHhA9IAAhLIAhAAIABgGIhOAAIAAgSIBQAAIABgHIhHAAIAAgqICnAAIAAAqIhFAAIgBAHIBQAAIAAASIhUAAIgCAGIA6AAIAABLgAH6AuIA/AAIAAgHIg/AAgAH6AaIA/AAIAAgHIg/AAgAH6AGIA/AAIAAgGIg/AAgAI0g9IAYAAIAAgKIgYAAgAIGg9IAXAAIAAgKIgXAAgAHYg9IAWAAIAAgKIgWAAgAiAARIAAgRIB4AAIAAARgAiAgJIAAgTIB4AAIAAATgAigglIAAgVIC2AAIAAAVgAh9hCIAAgUIByAAIAAAUg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.4,-9.3,124.9,18.8);


(lib.PriceView = function() {
	this.initialize();

	// Layer1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#51453F").s().p("ADbDHQAVgNATgRQAUgRAOgUIgpAAIAAkLIBGAAIAHgfIhQAAIAAg2IDoAAIAAA2IhWAAIgLAfIBTAAIAAELIgrAAQAaAcAnAyIg6AXQgjg0gZgdIAsgUIhwAAIAwASQgOAXgXAWQgTAVgZARgAE7BPIBXAAIAAgZIhXAAgAE7AKIBXAAIAAgXIhXAAgAE7g5IBXAAIAAgZIhXAAgAApDjIAAiNIgjgmQAZgKAVgOQAWgNATgOIgTgaIgVAWIgsgbQASgPAbgkQATgcAKgeIA2ADIgGASIAvAAIAJADIAAgeIh3AAIAAAlIgyAAIAAhWIBOAAIAAgjIA+AAIAAAjIBRAAIAABWIgbAAIAHACQgJAdgOAaQgNAagRAXQATANAVAKQAWALAYAHIgjAwIAACAIh1AAIAAAQgABkCeIA5AAIAAgyIg5AAgACjA4IgigZIgfAZIBBAAgABqhJQAJARAMAOQAOgUAGgOIgnAAgAnVDeIAAg5IC1AAIAAhuIifAAIAAg3ICfAAIAAgjIhWAAIAAgiQgyAbgaAKIgmg6QAdgIAZgNQAcgOAagRQAZgSAYgWQAZgXAWgcIA9AAQAXAbAaAYQAZAWAbARQAZASAdANQAaAMAdAKIgqA7QgpgRghgUIAAAhIhaAAIAAAjIClAAIAAA3IilAAIAABuIC6AAIAAA5gAijhaQgXgRgXgUQgWgVgXgZQgWAZgWAVQgWAUgXARIC0AAIAAAAgAi9CNQATgdAag2IA/AYQgjA2gVAcgAmHB7QgKgVgOgWIA1gVQAPAWAMAVQALAUAGATIg8AWQgFgTgIgVg");
	this.shape.setTransform(0,0,1.021,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-23.4,100,46.8);


(lib.LogoView = function() {
	this.initialize();

	// Logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494542").s().p("A5DDgIAEg/QAbAJAdAAQAMAAAGgCQAGgCAFgIQAMgQAGgiQAEgWADg/QAAgSgDgKQgDgMgGgHQgGgHgKgDQgJgCgQAAIgVABQgcBfgSArQgOAhgPAcQgPAegQAYIg9ggQAQgVAOgYIAag0QARgkAahRQgsAGgrAJIgNg/QA3gKA9gHQAHgkAJhLIBFAIQgJA6gJApIAKAAQAegBAWAIQAWAHAOAOQAOAPAHAXQAHAWAAAdQgEBLgFAdIgKAnQgGARgHALQgNAXgSAJQgRAKgbAAQg1gDgVgGgAw/CiQAuAAAhgGQAfgGATgLQATgKAIgRQAIgOAAgUQAAgSgFgMQgFgMgLgJQgKgJgRgEQgQgEgVgBQgbAAgwALQgtAKgvAPIgPg+IBqgWQAigGA1gFQAhAAAaAIQAaAJASARQASAPAJAWQAKAXAAAeQAAARgDAQQgDAPgGANQgGAOgJAMQgKAMgMAJQgNAKgRAIQgRAHgVAGQgVAGgZADIg4ADgApCDaQgmgEgZgLQgMgFgKgIQgJgGgHgJQgGgJgDgLQgDgLAAgMIAAAAQAAgMADgNQAEgOAHgOIASgcIAZgdIA1AkQgSASgKAQQgKARAAAMQAAAKAHAGQAIAHAQAEQAWAFBQACQAiAAAmgEQAqgFAegIIALBHQgiAHgrADQgrAEgnAAQg0AAgkgFgAGHDQQgLgEgLgGQgLgIgLgLQgKgLgJgPQgKgPgHgTQgIgTgFgWQgGgYgDgaQgDgcAAgdQAAg3AFg7IBJAHQgIBJAAAgQAAAlAEAfQAFAfAIAWQAIAVAKAMQAKALAKAAQALAAAKgUQAKgUAGghIA6AaQgHAggJAYQgKAXgMAPQgLAQgOAIQgOAHgPAAQgMAAgLgEgAhrDQQgLgEgLgGQgLgIgLgLQgKgLgJgPQgKgPgHgTQgIgTgFgWQgGgYgDgaQgDgcAAgdQAAg3AFg7IBJAHQgIBJAAAgQAAAlAEAfQAFAfAIAWQAIAVAKAMQAKALAKAAQALAAAKgUQAKgUAGghIA4AaQgGAggIAYQgKAXgMAPQgLAQgOAIQgOAHgPAAQgMAAgLgEgAUWDOIAAhFIEWAAIAAjOIkWAAIAAhDIFFAAQgPgYgfgkIAhgYQAgAkAPAZIghAXIAaAAIAAFWgAMfDMIAAlZIF0AAIAAFZgANnCHIDiAAIAAjRIjiAAgAJyAxQgFgjgKgbQgKgcgQgaQgRgZgZgZIA7gnQAjApANAUQATAfAMAiQALAeAGAnQAGAjACAuIhMAHQAAgtgEghgAB+AxQgFgjgKgbQgKgcgQgaQgRgZgZgZIA7gnQAjApANAUQATAfAMAiQALAeAGAnQAGAjACAuIhMAHQAAgtgEghgA1GAwQgHgbgLgWQgLgagOgYQgQgYgTgTIA4gjQAVAWARAcQARAaANAdQAMAaAIAcQAIAbADAYIhEASQgDgZgGgagAoPgtIBCgvQgmACgXAAQgkAAgngEQgigDgigHIALhAQAfAGAmAEQAnAEAqAAIABAAQAtgBBXgFIAaA7QgVAMgtAhIhFA0gAaOizQgMgRgNgNIAigXQAgApANAVIgiAWg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-173.2,-23.3,346.6,46.6);


(lib.IconLogoView = function() {
	this.initialize();

	// Layer1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A9AC0").s().p("AmnGoQiwiwAAj4QAAj3CwivQCwixD3AAQD4AACvCxQCxCvAAD3QAAD4ixCwQivCwj4AAQj3AAiwiwg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60,-60,120,120);


(lib.BtnImageView = function() {
	this.initialize();

	// Layer1
	this.instance = new lib.bt();
	this.instance.setTransform(-280,-44);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-280,-44,560,88);


// stage content:
(lib.animation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var mainOutside = new lib.Main(this);
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// root frame
	this.instance = new lib.BtnImageView("synched",0);
	this.instance.setTransform(500,315);

	this.instance_1 = new lib.PriceView("synched",0);
	this.instance_1.setTransform(406.2,454);

	this.instance_2 = new lib.TextView("synched",0);
	this.instance_2.setTransform(406.3,132);

	this.instance_3 = new lib.IconLogoView("synched",0);
	this.instance_3.setTransform(100.1,315);

	this.instance_4 = new lib.LogoView("single",0);
	this.instance_4.setTransform(400,188);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;