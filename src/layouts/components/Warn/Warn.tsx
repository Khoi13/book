import React from 'react';
import classNames from 'classnames/bind';
import styles from './Warn.module.scss';

const cx = classNames.bind(styles);

function Warn({ content, header, confirm, setter }) {
    return (
        <div className={cx('back')}>
            <div className={cx('wrapper')}>
                <header className={cx('header')}>{header}</header>
                <p className={cx('content')}>{content}</p>
                <button
                    tabIndex={0}
                    className={cx('confirm-button')}
                    onClick={() => {
                        setter(false);
                    }}
                >
                    {confirm}
                </button>
            </div>
        </div>
    );
}

export default Warn;
