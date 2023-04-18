import hanko from "./assets/img/hanko.png";

class WW {
  constructor(wrong, correct) {
    this.wrong = wrong;
    this.correct = correct;
  }
}

const words = [
  new WW("スラックス", "slack"),
  new WW("ハーウェイ", "Huawei（ファーウェイ）"),
  new WW("ご戻り", "お戻り"),
  new WW("オンラインサポート", "オンライン葬儀＋ご葬儀サポート"),
  new WW("醤油バッタ", "ショウリョウバッタ"),
  new WW("てつる", "徹（とおる）"),
  new WW("＠掃除", "＠葬儀"),
  new WW("材料検討", "検討材料"),
  new WW("梅こうじ", "塩麴"),
  new WW("カネコハルオ", "金島はるこさん"),
  new WW("明日のご出棺のご予定は～", "明日の出勤の予定は"),
  new WW("あくた川市", "旭川市"),
  new WW("ゆうじょう", "友丈（ともじょう）"),
  new WW("誰様宛に連絡～", "どなた様宛に～"),
  new WW("リモート出社", "リモート出勤"),
  new WW("ようとうふとう", "東洋埠頭（とうようふとう）"),
  new WW("＠葬儀時間", "＠葬儀事務局"),
  new WW("そうさつ", "相殺（そうさい）"),
  new WW("供花棚卸サービス", "供花卸サービス"),
];

/**
 * indexにはWrongWordLength以下の整数のみ受け付けます
 * @param {index} props
 * @returns
 */
function WrongWord(props) {
  // console.log(props);
  return (
    <div className="word-box">
      <div className="wrong-word-text">{words[props.index].wrong}</div>
      <div className="hanko-box">
        <div className="correct-word-text">{words[props.index].correct}</div>
        <img className="hanko" src={hanko} />
      </div>
    </div>
  );
}

export default WrongWord;
export const WrongWordsLength = words.length;

/**
 * ランダムでWrongWordのindexに入力可能な数値を生成する
 * @returns number
 */
export function randomIndex() {
  return Math.floor(Math.random() * words.length);
}
