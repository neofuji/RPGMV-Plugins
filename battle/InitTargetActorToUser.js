//=============================================================================
// InitTargetActorToUser.js
//=============================================================================

/*:
 * @plugindesc Changes initial target actor of skills/items to user in battle.
 * @author Toru Higuruma
 *
 * @help InitTargetActorToUser v1.0 (2017-04-26)
 * Copyright (c) 2017 Toru Higuruma
 * This plugin is provided under the MIT License.
 * https://git.io/tmv
 *
 * Plugin commands:
 *   This plugin does not provide plugin commands.
 */

/*:ja
 * @plugindesc 戦闘中、スキルやアイテムの対象アクターの初期値を使用者に変更します。
 * @author Toru Higuruma
 *
 * @help InitTargetActorToUser v1.0 (2017-04-26)
 * Copyright (c) 2017 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 * https://git.io/tmv
 *
 * プラグインコマンド:
 *   このプラグインにプラグインコマンドはありません。
 */

(function() {

    var _Window_BattleActor_show = Window_BattleActor.prototype.show;
    Window_BattleActor.prototype.show = function() {
        _Window_BattleActor_show.call(this);
        this.select(BattleManager.actor().index());
    };

})();
