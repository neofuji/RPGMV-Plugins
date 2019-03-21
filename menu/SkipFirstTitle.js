//=============================================================================
// SkipFirstTitle.js
//=============================================================================

/*:
 * @plugindesc Skips the title screen and starts a new game when no savefile exists.
 * @author Toru Higuruma
 *
 * @help SkipFirstTitle v1.0 (2019-03-21)
 * Copyright (c) 2019 Toru Higuruma
 * This plugin is provided under the MIT License.
 * https://git.io/tmv
 *
 * Plugin commands:
 *   This plugin does not provide plugin commands.
 */

/*:ja
 * @plugindesc セーブファイルが存在しない場合、タイトル画面を表示せずニューゲームします。
 * @author Toru Higuruma
 *
 * @help SkipFirstTitle v1.0 (2019-03-21)
 * Copyright (c) 2019 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 * https://git.io/tmv
 *
 * プラグインコマンド:
 *   このプラグインにプラグインコマンドはありません。
 */

(function() {

    var _Scene_Boot_start = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function() {
        _Scene_Boot_start.call(this);
        if (SceneManager.isNextScene(Scene_Title) && !DataManager.isAnySavefileExists()) {
            SceneManager.goto(Scene_Map);
        }
    };

})();
