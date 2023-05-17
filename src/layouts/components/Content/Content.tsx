import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Grid from '~/components/Grid';
import OutGrid from '~/components/OutGrid';
import SideStatus from '~/layouts/components/SideStatus';
import Displays from '../Displays/Displays';
import Book from '~/layouts/components/Book';

import BookImg from '~/book.png';

import styles from './Content.module.scss';
const cx = classNames.bind(styles);

function Content() {
    function SliderText({ children }) {
        return <p className={cx('slider-text')}>{children}</p>;
    }

    const [childIndex, setChildIndex] = useState(0);

    const children = [
        <SliderText>
            <ul>
                <li>
                    Bài làm về kỉ niệm ngày thành lập trường của nhóm chúng em có 3 người: Thái Nguyên Khôi, Phan Tuấn Anh,
                    Cao Hà Gia Huy.
                </li>
                <li>
                    Thiết kế của chúng em lấy ý tưởng từ những quyển sách giáo khoa vốn đã quen thuộc với các bạn học
                    sinh, là nền tảng quan trọng của mọi tri thức.
                </li>
            </ul>
        </SliderText>,
        <SliderText>
            <ul>
                <li>
                    số 5 tượng trưng cho hành trình 5 năm qua của mái trường chúng ta, một hành trình không dài cũng
                    chẳng ngắn, nhưng là đủ để biết bao kí ức xuất hiện mãi trong tâm trí.
                </li>
                <li>Số 5 màu đỏ, ngôi sao vàng, lá cờ tổ quốc? Sao thân thuộc thế.</li>
            </ul>
        </SliderText>,
        <SliderText>
            <ul>
                <li>
                    Hình ảnh ngôi sao kết hợp với 3 con đường, gợi ta đến hình ảnh ngôi sao băng - nơi chúng ta gửi gắm
                    bao mơ ước.
                </li>
                <li>
                    3 con đường, 1 ngôi sao: Mỗi người chúng ta luôn có những lối đi riêng, nhưng luôn có chung một mục
                    tiêu cao cả.
                </li>
                <li>
                    3 màu đỏ, xanh lá, xanh dương: 3 màu cơ bản trong hệ màu ánh sáng (RGB). Trên màn hình máy tính, với
                    3 màu này có thể tạo thành 16 777 216 màu khác nhau. Chẳng phải những điều vĩ đại nhất đều được dựng
                    nên từ những điều cơ bản hay sao?
                </li>
            </ul>
        </SliderText>,
    ];

    return (
        <main className={cx('main-content')}>
            <OutGrid className={cx('main-box')}>
                <Grid className={cx('content')} grid={7}>
                    <Book></Book>
                    <a href={BookImg} download={true} className={cx('download')}>
                        Download
                    </a>
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
