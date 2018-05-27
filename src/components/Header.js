import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import Nav from './Nav'
import ImageSwiper from './Slider'
import Policy from './Policy'
import SupplyDirect from "./SupplyDirect";
import NewPublish from './NewPublish'

class Header extends React.Component {
    render() {
        return (
            <div>
            <header>
                <div className='header-search'>
                    <Logo  />
                    <SearchBar />
                </div>
                <Nav/>
            </header>

            <ImageSwiper/>
                <Policy/>
                <SupplyDirect/>
                <NewPublish/>
            </div>
        )
    }
}

export default Header