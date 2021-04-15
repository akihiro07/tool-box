import React from 'react';
import classes from '../../assets/styles/Counter.module.scss';
import { Link } from 'react-router-dom';

export const OCounter = () => {
  return (
    <div>
      <Link to="/">トップページへ戻る</Link>

      <h2 className={classes.title}>文字数カウント</h2>

      <div className={classes.textareaBox}>
        <div className={classes.count}>
          現在の文字数：<span className={classes.number}>X</span>文字
        </div>
        <textarea className={classes.textarea}></textarea>
      </div>
    </div>
  );
};
