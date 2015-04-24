"use strict";
/****************************************
* コンテンツツリーの親となるMainクラス
*****************************************/
var main;
lib.Main = function(root) {
	// root：コンテンツ全体を包括するMainクラスを配置するrootフレーム
	this.init(root);
};

lib.Main.prototype = {
	logo: null,		// ロゴのインスタンス用
	text: null,		// 文言のインスタンス用
	price: null,	// 金額表示のインスタンス用
	btn: null,		// ボタンのインスタンス用
	icon: null,		// アイコンのインスタンス用

	// イニシャライズ
	init: function(root) {
		var self = this;

		// 親となる表示オブジェクトを生成し、rootフレームに配置
		main = new createjs.Container();
		root.addChild(main);

		// 各表示要素のインスタンスを配置
		var logo = this.logo = new lib.LogoView();
		logo.x = 400;
		logo.y = 188;
		logo.alpha = 0;

		var text = this.text = new lib.TextView();
		text.x = 400;
		text.y = 132;
		text.alpha = 0;

		var price = this.price = new lib.PriceView();
		price.x = 400;
		price.y = 454;
		price.alpha = 0;

		var btn = this.btn = new lib.BtnImageView();
		btn.x = 400;
		btn.y = 317;
		btn.rotation = 355;
		btn.alpha = 0;

		main.addChild(logo, text, price, btn);
		var icon = this.icon = new lib.IconViewController();

		// アイコン要素のアニメーションが終了したイベントを購読
		main.on("ICON_ANIMATED", function() {
			self.showContents();
		});
	},

	// 各要素のアニメーションを開始
	showContents: function() {
		this.setTween(this.text, 0);
		this.setTween(this.logo, 150);
		this.setTween(this.price, 300);
		this.setTween(this.btn, 800, true);
	},

	// Tweenさせるメソッド
	setTween: function(target, waitTime, isCubic) {
		var es = isCubic? createjs.Ease.cubicIn : createjs.Ease.backOut;
		createjs.Tween.get(target, {override:false})
					.wait(waitTime)
					.to({scaleX: 1.5, scaleY: 1.5, alpha: 0})
					.to({scaleX: 1, scaleY: 1, alpha: 1}, 400, es);
	}
};
