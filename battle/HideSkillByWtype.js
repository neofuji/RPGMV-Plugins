//=============================================================================
// HideSkillByWtype.js
//=============================================================================

/*:
 * @plugindesc Hides skills not matching equipped weapon type in battle.
 * @author Toru Higuruma
 *
 * @help HideSkillByWtype v1.0 (2017-09-05)
 * Copyright (c) 2017 Toru Higuruma
 * This plugin is provided under the MIT License.
 * https://git.io/tmv
 *
 * Plugin commands:
 *   This plugin does not provide plugin commands.
 */

/*:ja
 * @plugindesc 戦闘中、必要武器の条件を満たさないスキルを非表示にします。
 * @author Toru Higuruma
 *
 * @help HideSkillByWtype v1.0 (2017-09-05)
 * Copyright (c) 2017 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 * https://git.io/tmv
 *
 * プラグインコマンド:
 *   このプラグインにプラグインコマンドはありません。
 */

(function() {

    var _Window_BattleSkill_includes = Window_BattleSkill.prototype.includes;
    Window_BattleSkill.prototype.includes = function(item) {
        return (_Window_BattleSkill_includes.call(this, item) &&
                this._actor.isSkillWtypeOk(item));
    };

})();
