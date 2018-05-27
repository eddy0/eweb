import React from 'react'

class NavBar extends React.Component {
    state = {
        list: ['HOME', 'CART', 'INFO']
    }

    render() {
        return (
            <nav className='nav-link'>
                <ul>
                        {this.state.list.map((l) => (
                            <li key={l}>
                                {l}
                            </li>
                        ))}

                </ul>

            </nav>
        )
    }
}

export default NavBar