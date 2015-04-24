/****************************************
* アイコンのボタンを制御するクラス
*****************************************/
lib.IconViewController = function() {
	this.init();
};

lib.IconViewController.prototype = {
	icon: null,

	// イニシャライズ
	init: function() {
		var body = document.getElementsByTagName("body")[0];

		// アイコンの表示オブジェクトを生成
		var icon = this.icon = new lib.IconLogoView();
		icon.x = 400;
		icon.y = 315;
		icon.scaleX =
		icon.scaleY = 2;
		main.addChildAt(icon, 0);

		// インタラクションを設定
		icon.on("click", this.iconClick);
		icon.on("mouseover", function() {
			icon.alpha = 0.9;
			body.style.cursor = "pointer";
		});
		icon.on("mouseout", function() {
			icon.alpha = 1;
			body.style.cursor = "default";
		});
	},

	// クリック時の処理
	iconClick: function(e) {
		createjs.Tween.get(e.currentTarget, {override:true})
					.wait(200)
					.to({rotation:0})
					.to({scaleX: 1, scaleY: 1, rotation: 360, alpha: 1}, 400, createjs.Ease.backOut)
					.call(function(e) {
						main.dispatchEvent("ICON_ANIMATED");
					});
	}
};
