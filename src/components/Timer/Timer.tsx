import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Timer.module.scss';

const cx = classNames.bind(styles);

const getTime = (wDay, wMonth, wYear, wTime) => {
    const now = new Date().getTime();
    const futureDate = new Date(`${wDay} ${wMonth} ${wYear} ${wTime}`).getTime();

    const timeLeft = futureDate - now;

    let days = Math.floor(Math.abs(timeLeft) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((Math.abs(timeLeft) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((Math.abs(timeLeft) % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((Math.abs(timeLeft) % (1000 * 60)) / 1000);

    return {
        days,
        hours,
        minutes,
        seconds,
        pass: timeLeft <= 0 ? 'YES' : 'NO',
    };
};

function Timer({
    wDay,
    wMonth,
    wYear,
    wTime,
}: {
    wDay: string | number;
    wMonth: string;
    wYear: string | number;
    wTime: string;
}) {
    const [timeLeft, setTimeLeft] = useState(getTime(wDay, wMonth, wYear, wTime));

    const { days, hours, minutes, seconds, pass } = timeLeft;
     
    const MonthNum = {
        January:   01,
        February:  02,  
        March:     03, 
        April:     04, 
        May:       05, 
        June:      06, 
        July:      07, 
        August:    08, 
        September: 09, 
        October:   10, 
        November:  11, 
        December:  12
    }                     
                          
    setTimeout(() => {
        setTimeLeft(getTime(wDay, wMonth, wYear, wTime));
    }, 1000);

    switch (pass) {
        case 'NO':
            return (
                <div className={cx('wrapper')}>
                    <div className={cx('wrapper-in')}>
                        <span className={cx('time')}>{days}</span>
                        <span className={cx('display')}>Ngày,</span>
                    </div>
                    <div className={cx('wrapper-in')}>
                        <span className={cx('time')}>{hours}</span>
                        <span className={cx('display')}>Giờ,</span>
                    </div>
                    <div className={cx('wrapper-in')}>
                        <span className={cx('time')}>{minutes}</span>
                        <span className={cx('display')}>Phút,</span>
                    </div>
                    <div className={cx('wrapper-in')}>
                        <span className={cx('time')}>{seconds}</span>
                        <span className={cx('display')}>Giây</span>
                    </div>
                </div>
            );
        case 'YES':
            return (
                <span className={cx('day')}>
                    {wDay}/{MonthNum[wMonth]}/{wYear}
                </span>
            );
    }
}

export default Timer;
