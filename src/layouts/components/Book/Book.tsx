import React from 'react';
import classNames from 'classnames/bind';
import styles from './Book.module.scss';

const cx = classNames.bind(styles);

function Book() {
    return <div className={cx('book')}></div>;
}

export default Book;
