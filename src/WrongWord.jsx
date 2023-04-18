class WW {
  constructor(wrong, correct) {
    this.wrong = wrong;
    this.correct = correct;
  }
}
function WrongWord() {
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
  const rand = Math.random() * words.length;
  const index = Math.floor(rand);
  return (
    <>
      <div className="wrong-word-text">{words[index].wrong}</div>
      <div className="correct-word-text">{words[index].correct}</div>
    </>
  );
}
export default WrongWord;
