import React from 'react';
import classNames from 'classnames/bind';
import styles from './Grid.module.scss';

const cx = classNames.bind(styles);

function Grid({ children, grid, className }: { children: any; grid?: number; className?: any }) {
    return (
        <div
            style={{ '--grid': grid } as React.CSSProperties}
            className={cx('grid', {
                [className]: className,
            })}
        >
            {children}
        </div>
    );
}

export default Grid;
