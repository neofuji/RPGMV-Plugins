//=============================================================================
// CenterGameoverImage.js
//=============================================================================

/*:
 * @plugindesc Centers the image in the gameover scene.
 * @author Toru Higuruma
 *
 * @help CenterGameoverImage v1.0 (2019-03-17)
 * Copyright (c) 2019 Toru Higuruma
 * This plugin is provided under the MIT License.
 * https://git.io/tmv
 *
 * Plugin commands:
 *   This plugin does not provide plugin commands.
 */

/*:ja
 * @plugindesc ゲームオーバー画面の画像を中央揃えにします。
 * @author Toru Higuruma
 *
 * @help CenterGameoverImage v1.0 (2019-03-17)
 * Copyright (c) 2019 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 * https://git.io/tmv
 *
 * プラグインコマンド:
 *   このプラグインにプラグインコマンドはありません。
 */

(function() {

    var _Scene_Gameover_createBackground = Scene_Gameover.prototype.createBackground;
    Scene_Gameover.prototype.createBackground = function() {
        _Scene_Gameover_createBackground.call(this);
        this._backSprite.x = Graphics.width / 2;
        this._backSprite.y = Graphics.height / 2;
        this._backSprite.anchor.x = 0.5;
        this._backSprite.anchor.y = 0.5;
    };

})();
