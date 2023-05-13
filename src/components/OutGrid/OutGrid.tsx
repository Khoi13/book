import React from 'react';
import classNames from 'classnames/bind';
import styles from './OutGrid.module.scss';

const cx = classNames.bind(styles);

function OutGrid({ children, className }: { children: any; className?: any }) {
    return (
        <div
            className={cx('out-grid', {
                [className]: className,
            })}
        >
            {children}
        </div>
    );
}

export default OutGrid;
