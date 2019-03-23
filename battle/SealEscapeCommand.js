//=============================================================================
// SealEscapeCommand.js
//=============================================================================

/*:
 * @plugindesc Creates a trait to disable the [Escape] command.
 * @author Toru Higuruma
 *
 * @help SealEscapeCommand v1.0 (2019-03-23)
 * Copyright (c) 2019 Toru Higuruma
 * This plugin is provided under the MIT License.
 * https://git.io/tmv
 *
 * Plugin commands:
 *   This plugin does not provide plugin commands.
 *
 * Actors/Classes/Weapons/Armors/States note:
 *   <seal_escape>  : Seal escape command
 */

/*:ja
 * @plugindesc ［逃げる］コマンドが使用できなくなる特徴を作ります。
 * @author Toru Higuruma
 *
 * @help SealEscapeCommand v1.0 (2019-03-23)
 * Copyright (c) 2019 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 * https://git.io/tmv
 *
 * プラグインコマンド:
 *   このプラグインにプラグインコマンドはありません。
 *
 * アクター／職業／武器／防具／ステートのメモ:
 *   <seal_escape>  : ［逃げる］コマンド封印
 */

(function() {

    var _BattleManager_canEscape = BattleManager.canEscape;
    BattleManager.canEscape = function() {
        return _BattleManager_canEscape.call(this) && !$gameParty.members().some(function(actor) {
            return actor.traitObjects().some(function(obj) {
                return obj.meta.seal_escape === true;
            });
        });
    };

})();
