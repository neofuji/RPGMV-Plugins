//=============================================================================
// OptionsInBattle.js
//=============================================================================

/*:
 * @plugindesc Adds [Options] command in battle.
 * @author Toru Higuruma
 *
 * @help OptionsInBattle v1.0 (2017-07-31)
 * Copyright (c) 2017 Toru Higuruma
 * This plugin is provided under the MIT License.
 * https://git.io/tmv
 *
 * Plugin commands:
 *   This plugin does not provide plugin commands.
 */

/*:ja
 * @plugindesc バトル画面に［オプション］コマンドを追加します。
 * @author Toru Higuruma
 *
 * @help OptionsInBattle v1.0 (2017-07-31)
 * Copyright (c) 2017 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 * https://git.io/tmv
 *
 * プラグインコマンド:
 *   このプラグインにプラグインコマンドはありません。
 */

(function() {

    var _Window_PartyCommand_makeCommandList =
            Window_PartyCommand.prototype.makeCommandList;
    Window_PartyCommand.prototype.makeCommandList = function() {
        _Window_PartyCommand_makeCommandList.call(this);
        this.addCommand(TextManager.options,  'options');
    };

    var _Scene_Battle_isAnyInputWindowActive =
            Scene_Battle.prototype.isAnyInputWindowActive;
    Scene_Battle.prototype.isAnyInputWindowActive = function() {
        return (_Scene_Battle_isAnyInputWindowActive.call(this) ||
                this._optionsWindow.active);
    };

    var _Scene_Battle_createAllWindows = Scene_Battle.prototype.createAllWindows;
    Scene_Battle.prototype.createAllWindows = function() {
        _Scene_Battle_createAllWindows.call(this);
        this.createOptionsWindow();
    };

    var _Scene_Battle_createPartyCommandWindow =
            Scene_Battle.prototype.createPartyCommandWindow;
    Scene_Battle.prototype.createPartyCommandWindow = function() {
        _Scene_Battle_createPartyCommandWindow.call(this);
        this._partyCommandWindow.setHandler('options', this.commandOptions.bind(this));
    };

    Scene_Battle.prototype.createOptionsWindow = function() {
        this._optionsWindow = new Window_Options();
        this._optionsWindow.setHandler('cancel', this.onOptionsCancel.bind(this));
        this._optionsWindow.deactivate();
        this._optionsWindow.hide();
        this.addWindow(this._optionsWindow);
    };

    Scene_Battle.prototype.commandOptions = function() {
        this._optionsWindow.activate();
        this._optionsWindow.show();
    }

    Scene_Battle.prototype.onOptionsCancel = function() {
        ConfigManager.save();
        this._optionsWindow.hide();
        this.changeInputWindow();
        this._partyCommandWindow.selectSymbol('options');
    }

})();
