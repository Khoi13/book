import React from 'react';
import classNames from 'classnames/bind';
import styles from './Displays.module.scss';

const cx = classNames.bind(styles);

function Displays({
    children,
    controller,
    length,
}: {
    children: React.ReactElement;
    controller: any[];
    length: number;
}) {
    const [childIndex, setChildIndex] = controller;

    return (
        <div className={cx('displays-status')}>
            <div className={cx('ds-inner')}>{children}</div>
            <div className={cx('controller')}>
                <button
                    className={cx({
                        disable: childIndex === 0,
                    })}
                    onClick={() => {
                        if (childIndex > 0) {
                            setChildIndex((prev) => prev - 1);
                        }
                    }}
                >
                    back
                </button>
                <span>
                    {childIndex + 1}/{length}
                </span>
                <button
                    className={cx({
                        disable: childIndex === length - 1,
                    })}
                    onClick={() => {
                        if (childIndex < length - 1) {
                            setChildIndex((prev) => prev + 1);
                        }
                    }}
                >
                    next
                </button>
            </div>
        </div>
    );
}

export default Displays;
