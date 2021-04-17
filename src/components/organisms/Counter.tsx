import React, { useState } from 'react';
import classes from '../../assets/styles/Counter.module.scss';
import { Link } from 'react-router-dom';

export const OCounter = () => {
  // 改行・空白を含める文字数
  const [countAll, setCountAll] = useState(0);
  // 改行・空白を含めない文字数
  const [countTextOnly, setCountTextOnly] = useState(0);
  // 改行を含めない・空白を含める文字数
  const [countBlank, setCountBlank] = useState(0);
  // 改行を含める・空白を含めない文字数
  const [countLine, setCountLine] = useState(0);

  // https://zenn.dev/stin/articles/use-appropriate-api
  const counter = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // 改行・空白を含める文字数
    const text = e.target.value;
    setCountAll(text.length);
    // 改行・空白を含めない文字数
    setCountTextOnly(text.replace(/\s/g, '').length);
    // 改行を含めない・空白を含める文字数
    setCountBlank(text.replace(/\n/g, '').length);
    // 改行を含める・空白を含めない文字数
    setCountLine(text.replace(/ /g, '').length);
  };

  return (
    <div>
      <Link to="/" className={classes.link}>
        トップページへ戻る
      </Link>

      <h2 className={classes.title}>文字数カウント</h2>

      <div className={classes.textareaBox}>
        <div className={classes.count}>
          現在の文字数：<span className={classes.number}>{countAll}</span>文字
        </div>
        <textarea className={classes.textarea} onInput={counter}></textarea>
      </div>

      <div className={classes.countList}>
        <div className={classes.listTitle}>現在の文字数</div>
        <ul className={classes.list}>
          <li>
            改行・空白を含める文字数...<span className={classes.item}>{countAll}</span>
          </li>
          <li>
            改行・空白を含めない文字数...<span className={classes.item}>{countTextOnly}</span>
          </li>
          <li>
            改行を含めない・空白を含める文字数...<span className={classes.item}>{countBlank}</span>
          </li>
          <li>
            改行を含める・空白を含めない文字数...<span className={classes.item}>{countLine}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
