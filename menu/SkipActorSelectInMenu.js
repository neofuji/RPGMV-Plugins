//=============================================================================
// SkipActorSelectInMenu.js
//=============================================================================

/*:
 * @plugindesc Skips actor selection in menu when only 1 actor in party.
 * @author Toru Higuruma
 *
 * @help SkipActorSelectInMenu v1.0 (2017-07-28)
 * Copyright (c) 2017 Toru Higuruma
 * This plugin is provided under the MIT License.
 * https://git.io/tmv
 *
 * Plugin commands:
 *   This plugin does not provide plugin commands.
 */

/*:ja
 * @plugindesc 1人パーティーのとき、メニュー画面でアクター選択をスキップします。
 * @author Toru Higuruma
 *
 * @help SkipActorSelectInMenu v1.0 (2017-07-28)
 * Copyright (c) 2017 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 * https://git.io/tmv
 *
 * プラグインコマンド:
 *   このプラグインにプラグインコマンドはありません。
 */

(function() {

    var _Scene_Menu_commandPersonal = Scene_Menu.prototype.commandPersonal;
    Scene_Menu.prototype.commandPersonal = function() {
        if ($gameParty.size() === 1) {
            $gameParty.setMenuActor($gameParty.members()[0]);
            this.onPersonalOk();
            return;
        }
        _Scene_Menu_commandPersonal.call(this);
    };

})();
