import { useState, useEffect } from "react";
import "./WordAnimation.css";

/**
 * 一文字づつ現れるようなアニメーションをつける
 * @param {{word:string}} props
 * @returns
 */
export function WordAnimation(props) {
  const word = props.word;
  const chars = word.split("");

  return chars.map((char, index) => {
    return <TransitionChar char={char} index={index} key={index} />;
  });
}

/**
 * n番目のオブジェクトをn*250秒遅らせて表示する
 * @param {{char:string,index:Number}} props
 */
function TransitionChar(props) {
  const index = props.index;
  const char = props.char;
  const cName = "transitionChar";
  const [name, setName] = useState(cName + " opacity_0");

  useEffect(() => {
    setTimeout(() => {
      setName(cName + " opacity_1");
    }, index * 250);
  }, []);

  return <span className={name}>{char}</span>;
}
