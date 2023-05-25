import { useState, useEffect } from "react";
import "./WordAnimation.css";

/**
 * 一文字づつ現れるようなアニメーションをつける
 * @param {{word:string}} props
 * @returns
 */
export function WordAnimation(props) {
  const word = props.word;
  const wordArr = word.split("");

  const outWord = wordArr.map((str, index) => {
    return <TransitionChar char={str} index={index} />;
  });
  return <>{outWord}</>;
}

/**
 * n番目のオブジェクトをn*250秒遅らせて表示する
 * @param {{char:string,index:Number}} props
 */
function TransitionChar(props) {
  const index = props.index;
  const char = props.char;
  const cName = "transitionChar";

  const [name, setName] = useState(cName);
  useEffect(() => {
    setTimeout(() => {
      setName(cName + " opacity_1");
    }, index * 250);
  }, []);

  return <span className={name}>{char}</span>;
}
