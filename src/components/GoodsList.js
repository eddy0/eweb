import React from 'react'
import BScroll from 'better-scroll'

class GoodsList extends React.Component {
    state={
        nav: {
            '/': '推荐',
            '/home': '居家',
            '/garment':'服装',
            '/electronic':'电器',
            '/wash':'洗护',
            '/food':'饮食',
            '/baby':'婴童',
            '/zhuangbi':'文艺',
            '/feature':'特色区',
            '/mars':'火星区',
        }
    }

    componentDidMount() {
        let wrapper =  this.wrapper
        const ulDom =  wrapper.querySelector('ul')
        const min = wrapper.clientWidth
        const listItems = Array.from(ulDom.querySelectorAll('li'))

        const listWidth = listItems.reduce((total, b) => {
            return total + Number(b.clientWidth)
        },0)
        // 最小和父元素宽度一样 否则外层写列表样式会出问题
        ulDom.style.width = `${Math.max(min, listWidth)}px`
        this.scroll = new BScroll(this.wrapper, {
            scrollX: true,
            eventPassthrough: 'vertical',
            click: true,
            bounce: false
        })

    }

    render() {

        const links = this.state.nav


        return (
            <div className='goods-wrapper' ref={(e) => this.wrapper = e} style={{overflow: 'hidden'}}>
                <ul className='goods-list'>
                        <li className='goods-item' >
                            <div className='goods-img'>
                                <img src="http://yanxuan.nosdn.127.net/71ba49bb2d5d1cde1499cad0e18f0ac2.png?imageView&quality=65&thumbnail=330x330" alt=""/>
                            </div>

                                <div className='content'>
                                    <div className="name">
                                        轻灵碳素羽毛球拍
                                    </div>
                                    <div className="description">
                                        超轻球拍，运动随心
                                    </div>
                                    <div className="price">
                                        $159
                                    </div>

                                </div>
                        </li>
                    <li className='goods-item' >
                        <div className='goods-img'>
                            <img src="http://yanxuan.nosdn.127.net/71ba49bb2d5d1cde1499cad0e18f0ac2.png?imageView&quality=65&thumbnail=330x330" alt=""/>
                        </div>

                        <div className='content'>
                            <div className="name">
                                轻灵碳素羽毛球拍
                            </div>
                            <div className="description">
                                超轻球拍，运动随心
                            </div>
                            <div className="price">
                                $159
                            </div>

                        </div>
                    </li>

                    <li className='goods-item' >
                        <div className='goods-img'>
                            <img src="http://yanxuan.nosdn.127.net/71ba49bb2d5d1cde1499cad0e18f0ac2.png?imageView&quality=65&thumbnail=330x330" alt=""/>
                        </div>

                        <div className='content'>
                            <div className="name">
                                轻灵碳素羽毛球拍
                            </div>
                            <div className="description">
                                超轻球拍，运动随心
                            </div>
                            <div className="price">
                                $159
                            </div>

                        </div>
                    </li>

                    <li className='goods-item' >
                        <div className='goods-img'>
                            <img src="http://yanxuan.nosdn.127.net/71ba49bb2d5d1cde1499cad0e18f0ac2.png?imageView&quality=65&thumbnail=330x330" alt=""/>
                        </div>

                        <div className='content'>
                            <div className="name">
                                轻灵碳素羽毛球拍
                            </div>
                            <div className="description">
                                超轻球拍，运动随心
                            </div>
                            <div className="price">
                                $159
                            </div>

                        </div>
                    </li>
                    <li className='goods-item' >
                        <div className='goods-img'>
                            <img src="http://yanxuan.nosdn.127.net/71ba49bb2d5d1cde1499cad0e18f0ac2.png?imageView&quality=65&thumbnail=330x330" alt=""/>
                        </div>

                        <div className='content'>
                            <div className="name">
                                轻灵碳素羽毛球拍
                            </div>
                            <div className="description">
                                超轻球拍，运动随心
                            </div>
                            <div className="price">
                                $159
                            </div>

                        </div>
                    </li>

                    <li className='goods-item' >
                        <div className='goods-img'>
                            <img src="http://yanxuan.nosdn.127.net/71ba49bb2d5d1cde1499cad0e18f0ac2.png?imageView&quality=65&thumbnail=330x330" alt=""/>
                        </div>

                        <div className='content'>
                            <div className="name">
                                轻灵碳素羽毛球拍
                            </div>
                            <div className="description">
                                超轻球拍，运动随心
                            </div>
                            <div className="price">
                                $159
                            </div>

                        </div>
                    </li>

                    <li className='goods-item' >
                        <div className='goods-img'>
                            <img src="http://yanxuan.nosdn.127.net/71ba49bb2d5d1cde1499cad0e18f0ac2.png?imageView&quality=65&thumbnail=330x330" alt=""/>
                        </div>

                        <div className='content'>
                            <div className="name">
                                轻灵碳素羽毛球拍
                            </div>
                            <div className="description">
                                超轻球拍，运动随心
                            </div>
                            <div className="price">
                                $159
                            </div>

                        </div>
                    </li>




                </ul>

            </div>
        )
    }
}

export default GoodsList