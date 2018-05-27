import React from 'react'

class SupplyDirect extends React.Component {

    state={
        list: {
            title: '',
            price:'',
            newItem: false,
        }
    }

    render() {
        return (
            <section className='supply'>
                <header className='supply-title'>
                    <span>品牌制造商直供</span>
                </header>
                <div className="supply-wrapper">
                    <ul className="supply-list">
                        <li className='supply-item'>
                            <a >
                                <img src="https://yanxuan.nosdn.127.net/f898f62e0a3d68faf9506792f344a503.png?imageView&thumbnail=355x0&quality=65" alt=""/>
                                <div className="detail">
                                    <div className="title">
                                        ggoddfadfaf
                                    </div>
                                    <div className="price">
                                        1222rmb
                                    </div>
                                    <div>
                                        上新
                                    </div>

                                </div>
                            </a>


                        </li>

                        <li className='supply-item'>
                                <img src="https://yanxuan.nosdn.127.net/f898f62e0a3d68faf9506792f344a503.png?imageView&thumbnail=355x0&quality=65" alt=""/>
                                <div className="detail">
                                    <div className="title">
                                        ggoddfadfaf
                                    </div>
                                    <div className="price">
                                        1222rmb
                                    </div>

                                </div>

                        </li>

                        <li className='supply-item'>
                            <img src="https://yanxuan.nosdn.127.net/f898f62e0a3d68faf9506792f344a503.png?imageView&thumbnail=355x0&quality=65" alt=""/>
                            <div className="detail">
                                <div className="title">
                                    ggoddfadfaf
                                </div>
                                <div className="price">
                                    1222rmb
                                </div>

                            </div>

                        </li>

                        <li className='supply-item'>
                            <img src="https://yanxuan.nosdn.127.net/f898f62e0a3d68faf9506792f344a503.png?imageView&thumbnail=355x0&quality=65" alt=""/>
                            <div className="detail">
                                <div className="title">
                                    ggoddfadfaf
                                </div>
                                <div className="price">
                                    1222rmb
                                </div>

                            </div>

                        </li>

                    </ul>


                </div>
            </section>

        )
    }
}

export default SupplyDirect