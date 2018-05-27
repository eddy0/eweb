import React from 'react'

class ColorPannel extends React.Component {

    render() {
        return (
            <div>
                <div className='color-pannel'>
                    <div className="content" style={{color: 'rgb(139, 160, 182)'}}>
                        <div className="title">
                            新品首发
                        </div>
                        <div className="more">
                            发现更多&gt;
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ColorPannel