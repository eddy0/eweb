import React from 'react'
import {NavLink} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BScroll from 'better-scroll'


class Nav extends React.Component {
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
          <div className='wrapper' ref={(e) => this.wrapper = e} style={{overflow: 'hidden'}}>
              <ul className='nav'>
                  {Object.keys(links).map((link) => (
                      <li key={link} className='nav-item' >
                          <NavLink
                              to={link}
                              activeClassName='active'
                          >
                              {links[link]}
                          </NavLink>
                      </li>
                  ))}
              </ul>

          </div>
        )
    }
}

export default Nav