import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import Nav from './Nav'
import ImageSwiper from './Slider'
import Policy from './Policy'
import SupplyDirect from "./SupplyDirect";

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className='header-search'>
                    <Logo  />
                    <SearchBar />
                </div>
                <Nav/>
                <ImageSwiper/>
                <Policy/>
                <SupplyDirect/>
            </header>
        )
    }
}

export default Header