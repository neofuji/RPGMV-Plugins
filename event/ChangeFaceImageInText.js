//=============================================================================
// ChangeFaceImageInText.js
//=============================================================================

/*:
 * @plugindesc Enables changing the face image at any time in [Show Text].
 * @author Toru Higuruma
 *
 * @help ChangeFaceImageInText v1.0 (2018-02-04)
 * Copyright (c) 2018 Toru Higuruma
 * This plugin is provided under the MIT License.
 * https://git.io/tmv
 *
 * Escape characters (only available in [Show Text]):
 *   \F[n]  Changes the showing face image to n-th face in the same file.
 *          Also variables can be used as n.
 *
 * Plugin commands:
 *   This plugin does not provide plugin commands.
 */

/*:ja
 * @plugindesc ［文章の表示］の途中、任意の時点で顔グラフィックを変更できるようにします。
 * @author Toru Higuruma
 *
 * @help ChangeFaceImageInText v1.0 (2018-02-04)
 * Copyright (c) 2018 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 * https://git.io/tmv
 *
 * 制御文字（［文章の表示］でのみ有効）:
 *   \F[n]  表示中の顔グラフィックを同じファイルの n 番目の顔に変更します。
 *          n には変数を使用することもできます。
 *
 * プラグインコマンド:
 *   このプラグインにプラグインコマンドはありません。
 */

(function() {

    var _Window_Message_processEscapeCharacter =
            Window_Message.prototype.processEscapeCharacter;
    Window_Message.prototype.processEscapeCharacter = function(code, textState) {
        switch (code) {
        case 'F':
            this.contents.clearRect(0, 0, Window_Base._faceWidth, Window_Base._faceHeight);
            $gameMessage.setFaceImage($gameMessage.faceName(), this.obtainEscapeParam(textState) - 1);
            this.drawMessageFace();
            break;
        default:
            _Window_Message_processEscapeCharacter.call(this, code, textState);
            break;
        }
    };

})();
