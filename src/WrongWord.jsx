import { useEffect, useState } from "react";
import { WordAnimation } from "./WordAnimation";
import hanko from "./assets/img/hanko.png";
import "./WrongWord.css";

class WW {
  constructor(wrong, correct) {
    this.wrong = wrong;
    this.correct = correct;
  }
}

const data = [
  new WW("スラックス", "slack"),
  new WW("ハーウェイ", "Huawei（ファーウェイ）"),
  new WW("ご戻り", "お戻り"),
  new WW("オンラインサポート", "オンライン葬儀＋ご葬儀サポート"),
  new WW("醤油バッタ", "ショウリョウバッタ"),
  new WW("てつる", "徹（とおる）"),
  new WW("＠掃除", "＠葬儀"),
  new WW("材料検討", "検討材料"),
  new WW("梅こうじ", "塩麴"),
  new WW("ふとた", "太田（おおた）"),
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
 * @param {{index:Number}} props
 * @returns
 */
function WrongWord(props) {
  // const index = props.index;
  const [index, setIndex] = useState(props.index);
  const [wrongWord, setWrongWord] = useState(
    <WordAnimation word={data[index].wrong} />
  );
  const [correctWord, setCorrectWord] = useState(data[index].correct);

  useEffect(() => {
    // ５秒に1回文字が切り替わる
    const interval = setInterval(() => {
      const newIndex = randomIndex();
      setIndex(newIndex);
      setWrongWord(<WordAnimation word={data[newIndex].wrong} />);
      setCorrectWord(data[newIndex].correct);
      // console.log("time: " + Date.now() + ", index: " + newIndex);
    }, 5000);

    // 4.9秒の段階で一度テキストを空にする
    const resetInterval = setInterval(() => {
      setWrongWord(<WordAnimation word="" />);
    }, 4900);

    return () => {
      clearInterval(interval);
      clearInterval(resetInterval);
    };
  }, []);

  // console.log(props);
  return (
    <div className="word-box">
      <div className="wrong-word-box">
        <div className="wrong-word-text">{wrongWord}</div>
      </div>
      <div className="hanko-box">
        <div className="correct-word-text">{correctWord}</div>
        <img className="hanko" src={hanko} />
      </div>
    </div>
  );
}

export default WrongWord;
export const WrongWordsLength = data.length - 1;

/**
 * ランダムでWrongWordのindexに入力可能な数値を生成する
 * @returns number
 */
export function randomIndex() {
  return Math.floor(Math.random() * WrongWordsLength);
}
