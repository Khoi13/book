import React, { useState } from 'react';
import './App.scss';
import Content from '~/layouts/components/Content';
import Warn from '~/layouts/components/Warn';

function App() {
    const [warnState, setWarnState] = useState(true);
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {warnState && (
                <Warn
                    header={'Cảnh Báo!'}
                    content={
                        'Nếu đang sử dụng điện thoại hoặc thiết bị có màn hình nhỏ, vui lòng chuyển sang sử dụng máy tính để có được trải nghiệm tốt nhất.'
                    }
                    confirm={'Vâng, tôi hiểu'}
                    setter={setWarnState}
                />
            )}
            <div className={'App'}>
                <Content />
            </div>
        </div>
    );
}

export default App;
