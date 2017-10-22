//=============================================================================
// CustomizeItemMessage.js
//=============================================================================

/*:
 * @plugindesc Enables changing [Use Item] message for each item.
 * @author Toru Higuruma
 *
 * @help CustomizeItemMessage v1.0 (2017-10-23)
 * Copyright (c) 2017 Toru Higuruma
 * This plugin is provided under the MIT License.
 * https://git.io/tmv
 *
 * Plugin commands:
 *   This plugin does not provide plugin commands.
 *
 * Item note:
 *   <message1:%1 raises %2 aloft!>                     : Message line 1
 *   <message2:%2 begins to shine even more brightly!>  : Message line 2
 */

/*:ja
 * @plugindesc ［アイテム使用］のメッセージをアイテムごとに変更できるようにします。
 * @author Toru Higuruma
 *
 * @help CustomizeItemMessage v1.0 (2017-10-23)
 * Copyright (c) 2017 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 * https://git.io/tmv
 *
 * プラグインコマンド:
 *   このプラグインにプラグインコマンドはありません。
 *
 * アイテムのメモ:
 *   <message1:%1は%2を高くささげた！>                  : メッセージ 1 行目
 *   <message2:あたりにまばゆいばかりの光が広がるっ！>  : メッセージ 2 行目
 */

(function() {

    Window_BattleLog.prototype.displayAction = function(subject, item) {
        var numMethods = this._methods.length;
        if (DataManager.isSkill(item)) {
            if (item.message1) {
                this.push('addText', subject.name() + item.message1.format(item.name));
            }
            if (item.message2) {
                this.push('addText', item.message2.format(item.name));
            }
        } else {
            if (item.meta.message1 !== undefined) {
                if (item.meta.message1) {
                    this.push('addText', item.meta.message1.format(subject.name(), item.name));
                }
            } else {
                this.push('addText', TextManager.useItem.format(subject.name(), item.name));
            }
            if (item.meta.message2) {
                this.push('addText', item.meta.message2.format(subject.name(), item.name));
            }
        }
        if (this._methods.length === numMethods) {
            this.push('wait');
        }
    };

})();
