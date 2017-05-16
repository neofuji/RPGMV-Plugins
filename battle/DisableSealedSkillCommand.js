//=============================================================================
// DisableSealedSkillCommand.js
//=============================================================================

/*:
 * @plugindesc Disables commands of sealed skill type in battle.
 * @author Toru Higuruma
 *
 * @help DisableSealedSkillCommand v1.0 (2017-05-16)
 * Copyright (c) 2017 Toru Higuruma
 * This plugin is provided under the MIT License.
 * https://git.io/tmv
 *
 * Plugin commands:
 *   This plugin does not provide plugin commands.
 */

/*:ja
 * @plugindesc 戦闘中、封印されたスキルタイプのコマンドを選べなくします。
 * @author Toru Higuruma
 *
 * @help DisableSealedSkillCommand v1.0 (2017-05-16)
 * Copyright (c) 2017 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 * https://git.io/tmv
 *
 * プラグインコマンド:
 *   このプラグインにプラグインコマンドはありません。
 */

(function() {

    var _Window_ActorCommand_addSkillCommands =
            Window_ActorCommand.prototype.addSkillCommands;
    Window_ActorCommand.prototype.addSkillCommands = function() {
        _Window_ActorCommand_addSkillCommands.call(this);
        this._list.forEach(function(command) {
            if (command.symbol === 'skill') {
                command.enabled = !this._actor.isSkillTypeSealed(command.ext);
            }
        }, this);
    };

})();
