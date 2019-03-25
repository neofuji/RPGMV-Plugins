# RPGMV-Plugins
Simple plugins for RPG Maker MV

[![license: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

Some plugins are also available on [RGSS3-Plugins](https://git.io/tic).

## Author
[Toru Higuruma](https://github.com/neofuji)

## Plugins
- [InitTargetActorToUser](/battle/InitTargetActorToUser.js) v1.0 (2017-04-26)
  - Changes initial target actor of skills/items to user in battle.
  - 戦闘中、スキルやアイテムの対象アクターの初期値を使用者に変更します。
- [MapNameAfterLoad](/map/MapNameAfterLoad.js) v1.0 (2017-04-26)
  - Shows map name after loading savefile.
  - セーブファイルのロード後にマップ名を表示します。
- [RememberSkillByType](/system/RememberSkillByType.js) v1.0 (2017-04-27)
  - Remembers last-used skill for each skill type.
  - 最後に使用したスキルをスキルタイプごとに記憶します。
- [WraparoundShopNum](/menu/WraparoundShopNum.js) v1.0 (2017-04-28)
  - Wraparound number input in shop.
  - ショップの個数入力で最大値と最小値をループさせます。
- [DisableSealedSkillCommand](/battle/DisableSealedSkillCommand.js) v1.0 (2017-05-16)
  - Disables commands of sealed skill type in battle.
  - 戦闘中、封印されたスキルタイプのコマンドを選べなくします。
- [SkipActorSelectInMenu](/menu/SkipActorSelectInMenu.js) v1.0 (2017-07-28)
  - Skips actor selection in menu when only 1 actor in party.
  - 1人パーティーのとき、メニュー画面でアクター選択をスキップします。
- [HideSkillByOccasion](/battle/HideSkillByOccasion.js) v1.0 (2017-07-28)
  - Hides skills not matching occasion in battle.
  - 戦闘中、バトル画面で使用可能でないスキルを非表示にします。
- [OptionsInBattle](/battle/OptionsInBattle.js) v1.0 (2017-07-31)
  - Adds [Options] command in battle.
  - バトル画面に［オプション］コマンドを追加します。
- [FastBattleOption](/battle/FastBattleOption.js) v1.0 (2017-08-02)
  - Adds fast battle option.
  - 高速戦闘のオプションを追加します。
- [HideSkillByWtype](/battle/HideSkillByWtype.js) v1.0 (2017-09-05)
  - Hides skills not matching equipped weapon type in battle.
  - 戦闘中、必要武器の条件を満たさないスキルを非表示にします。
- [CustomizeItemMessage](/battle/CustomizeItemMessage.js) v1.0 (2017-10-23)
  - Enables changing [Use Item] message for each item.
  - ［アイテム使用］のメッセージをアイテムごとに変更できるようにします。
- [ChangeFaceImageInText](/event/ChangeFaceImageInText.js) v1.0 (2018-02-04)
  - Enables changing the face image at any time in [Show Text].
  - ［文章の表示］の途中、任意の時点で顔グラフィックを変更できるようにします。
- [CenterGameoverImage](/event/CenterGameoverImage.js) v1.0 (2019-03-17)
  - Centers the image in the gameover scene.
  - ゲームオーバー画面の画像を中央揃えにします。
- [AccelerateWindowOpenness](/system/AccelerateWindowOpenness.js) v1.0 (2019-03-18)
  - Accelerates/decelerates all animations opening/closing a window.
  - すべてのウィンドウの開閉アニメーションを加減速させます。
- [SkipFirstTitle](/menu/SkipFirstTitle.js) v1.0 (2019-03-21)
  - Skips the title screen and starts a new game when no savefile exists.
  - セーブファイルが存在しない場合、タイトル画面を表示せずニューゲームします。
- [SealEscapeCommand](/battle/SealEscapeCommand.js) v1.0 (2019-03-23)
  - Creates a trait to disable the [Escape] command.
  - ［逃げる］コマンドが使用できなくなる特徴を作ります。
