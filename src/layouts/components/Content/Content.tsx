import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Grid from '~/components/Grid';
import OutGrid from '~/components/OutGrid';
import SideStatus from '~/layouts/components/SideStatus';
import Displays from '../Displays/Displays';

import styles from './Content.module.scss';
const cx = classNames.bind(styles);

function Content() {
    function SliderText({ children }) {
        return <p className={cx('slider-text')}>{children}</p>;
    }

    const [childIndex, setChildIndex] = useState(0);

    const children = [
        <SliderText>Description1</SliderText>,
        <SliderText>Description2</SliderText>,
        <SliderText>Description3</SliderText>,
        <SliderText>Description4</SliderText>,
    ];

    return (
        <main className={cx('main-content')}>
            <OutGrid>
                <Grid grid={7}>
                    <span>CONTENT</span>
                </Grid>
                <Grid className={cx('side-status')} grid={5}>
                    <SideStatus />
                    <Displays length={children.length} controller={[childIndex, setChildIndex]}>
                        {children[childIndex]}
                    </Displays>
                </Grid>
            </OutGrid>
        </main>
    );
}

export default Content;
