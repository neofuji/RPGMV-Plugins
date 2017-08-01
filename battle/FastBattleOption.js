//=============================================================================
// FastBattleOption.js
//=============================================================================

/*:
 * @plugindesc Adds fast battle option.
 * @author Toru Higuruma
 *
 * @param Option Text
 * @desc The text for "Fast battle".
 * @default Fast battle
 *
 * @help FastBattleOption v1.0 (2017-08-02)
 * Copyright (c) 2017 Toru Higuruma
 * This plugin is provided under the MIT License.
 * https://git.io/tmv
 *
 * Plugin commands:
 *   This plugin does not provide plugin commands.
 */

/*:ja
 * @plugindesc 高速戦闘のオプションを追加します。
 * @author Toru Higuruma
 *
 * @param Option Text
 * @desc 「高速戦闘」の文字列です。
 * @default 高速戦闘
 *
 * @help FastBattleOption v1.0 (2017-08-02)
 * Copyright (c) 2017 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 * https://git.io/tmv
 *
 * プラグインコマンド:
 *   このプラグインにプラグインコマンドはありません。
 */

(function() {

    var parameters = PluginManager.parameters('FastBattleOption');
    var optionText = String(parameters['Option Text'] || 'Fast battle');

    ConfigManager.fastBattle = false;

    var _ConfigManager_makeData = ConfigManager.makeData;
    ConfigManager.makeData = function() {
        var config = _ConfigManager_makeData.call(this);
        config.fastBattle = this.fastBattle;
        return config;
    };

    var _ConfigManager_applyData = ConfigManager.applyData;
    ConfigManager.applyData = function(config) {
        _ConfigManager_applyData.call(this, config);
        this.fastBattle = this.readFlag(config, 'fastBattle');
    };

    var _Window_Options_addGeneralOptions =
            Window_Options.prototype.addGeneralOptions;
    Window_Options.prototype.addGeneralOptions = function() {
        _Window_Options_addGeneralOptions.call(this);
        this.addCommand(optionText, 'fastBattle');
    };

    var _Window_BattleLog_isFastForward =
            Window_BattleLog.prototype.isFastForward;
    Window_BattleLog.prototype.isFastForward = function() {
        return (_Window_BattleLog_isFastForward.call(this) ||
                ConfigManager.fastBattle);
    };

})();
