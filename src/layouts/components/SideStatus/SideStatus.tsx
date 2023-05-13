import React from 'react';
import classNames from 'classnames/bind';
import Timer from '~/components/Timer';

import styles from './SideStatus.module.scss';

const cx = classNames.bind(styles);

function SideStatus() {
    return (
        <aside className={cx('time-status')}>
            <Timer wDay={15} wMonth="May" wTime="00:00:00" wYear={2023} />
        </aside>
    );
}

export default SideStatus;
