import React from "react";
import "./MainImage.css";
import Huawei from "./assets/huawei.png";

function MainImage() {
  return (
    <div className="wrong_word">
      <img src={Huawei} className="wrong_word_img" alt="React logo" />
    </div>
  );
}

export default MainImage;
