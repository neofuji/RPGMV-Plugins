//=============================================================================
// AccelerateWindowOpenness.js
//=============================================================================

/*:
 * @plugindesc Accelerates/decelerates all animations opening/closing a window.
 * @author Toru Higuruma
 *
 * @help AccelerateWindowOpenness v1.0 (2019-03-18)
 * Copyright (c) 2019 Toru Higuruma
 * This plugin is provided under the MIT License.
 * https://git.io/tmv
 *
 * Plugin commands:
 *   This plugin does not provide plugin commands.
 */

/*:ja
 * @plugindesc すべてのウィンドウの開閉アニメーションを加減速させます。
 * @author Toru Higuruma
 *
 * @help AccelerateWindowOpenness v1.0 (2019-03-18)
 * Copyright (c) 2019 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 * https://git.io/tmv
 *
 * プラグインコマンド:
 *   このプラグインにプラグインコマンドはありません。
 */

(function() {

    Window_Base.prototype.updateOpen = function() {
        if (this._opening) {
            this.openness += Math.floor((281 - this.openness) / 3);
            if (this.isOpen()) {
                this._opening = false;
            }
        }
    };
    
    Window_Base.prototype.updateClose = function() {
        if (this._closing) {
            this.openness -= Math.floor((281 - this.openness) / 2);
            if (this.isClosed()) {
                this._closing = false;
            }
        }
    };

})();
