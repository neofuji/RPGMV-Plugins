//=============================================================================
// RememberSkillByType.js
//=============================================================================

/*:
 * @plugindesc Remembers last-used skill for each skill type.
 * @author Toru Higuruma
 *
 * @help RememberSkillByType v1.0 (2017-04-27)
 * Copyright (c) 2017 Toru Higuruma
 * This plugin is provided under the MIT License.
 * https://git.io/tmv
 *
 * Plugin commands:
 *   This plugin does not provide plugin commands.
 */

/*:ja
 * @plugindesc 最後に使用したスキルをスキルタイプごとに記憶します。
 * @author Toru Higuruma
 *
 * @help RememberSkillByType v1.0 (2017-04-27)
 * Copyright (c) 2017 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 * https://git.io/tmv
 *
 * プラグインコマンド:
 *   このプラグインにプラグインコマンドはありません。
 */

(function() {

    var _Game_Actor_initMembers = Game_Actor.prototype.initMembers;
    Game_Actor.prototype.initMembers = function() {
        _Game_Actor_initMembers.call(this);
        this._lastMenuSkillsByStype = [];
        this._lastBattleSkillsByStype = [];
    };

    var _Game_Actor_setLastMenuSkill = Game_Actor.prototype.setLastMenuSkill;
    Game_Actor.prototype.setLastMenuSkill = function(skill) {
        _Game_Actor_setLastMenuSkill.call(this, skill);
        var skills = this._lastMenuSkillsByStype;
        if (skills[skill.stypeId]) {
            skills[skill.stypeId].setObject(skill);
        } else {
            skills[skill.stypeId] = new Game_Item(skill);
        }
    };

    var _Game_Actor_setLastBattleSkill = Game_Actor.prototype.setLastBattleSkill;
    Game_Actor.prototype.setLastBattleSkill = function(skill) {
        _Game_Actor_setLastBattleSkill.call(this, skill);
        var skills = this._lastBattleSkillsByStype;
        if (skills[skill.stypeId]) {
            skills[skill.stypeId].setObject(skill);
        } else {
            skills[skill.stypeId] = new Game_Item(skill);
        }
    };

    Game_Actor.prototype.getLastMenuSkillByStype = function(stypeId) {
        var skill = this._lastMenuSkillsByStype[stypeId];
        return skill ? skill.object() : null;
    }

    Game_Actor.prototype.getLastBattleSkillByStype = function(stypeId) {
        var skill = this._lastBattleSkillsByStype[stypeId];
        return skill ? skill.object() : null;
    }

    Window_SkillList.prototype.selectLast = function() {
        var skill;
        if ($gameParty.inBattle()) {
            skill = this._actor.getLastBattleSkillByStype(this._stypeId);
        } else {
            skill = this._actor.getLastMenuSkillByStype(this._stypeId);
        }
        var index = this._data.indexOf(skill);
        this.select(index >= 0 ? index : 0);
    };

})();
