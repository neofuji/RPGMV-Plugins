//=============================================================================
// MapNameAfterLoad.js
//=============================================================================

/*:
 * @plugindesc Shows map name after loading savefile.
 * @author Toru Higuruma
 *
 * @help MapNameAfterLoad v1.0 (2017-04-26)
 * Copyright (c) 2017 Toru Higuruma
 * This plugin is provided under the MIT License.
 * https://git.io/tmv
 *
 * Plugin commands:
 *   This plugin does not provide plugin commands.
 */

/*:ja
 * @plugindesc セーブファイルのロード後にマップ名を表示します。
 * @author Toru Higuruma
 *
 * @help MapNameAfterLoad v1.0 (2017-04-26)
 * Copyright (c) 2017 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 * https://git.io/tmv
 *
 * プラグインコマンド:
 *   このプラグインにプラグインコマンドはありません。
 */

(function() {

    var _Scene_Map_start = Scene_Map.prototype.start;
    Scene_Map.prototype.start = function() {
        _Scene_Map_start.call(this);
        if (SceneManager.isPreviousScene(Scene_Load)) {
            this._mapNameWindow.open();
        }
    };

})();
