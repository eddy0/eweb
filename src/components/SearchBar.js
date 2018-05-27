import React from 'react'
import SearchIcon from './SearchIcon'

const log = console.log.bind(console)

class SearchBar extends React.Component {
    state = {
        showSearch: false,
        input: '',
    }

    handleInputFocus = () => {
        this.setState(() => (
            {
                showSearch: true,
            }
        ))
    }

    handleInputBlur = () => {
        if (this.state.input.trim().length > 0) {
            return
        }
        this.setState(() => (
            {
                showSearch: false,
                input: '',
            }
        ))
    }

    handleInputText = (e) => {
        let value = e.target.value
        this.setState(() => (
            {
                input: value,
            }
        ))
    }

    handleInputSubmit = (e) => {
        if (e.key === 'Enter') {
            log('submit')
        }
    }

    toggleSearch = () => {
        this.box.focus()
    }

    render() {
        return (
            <div className="search-wrapper"   >
                <SearchIcon handleClick={this.toggleSearch} />
                <input className='search-input'
                       style={this.state.showSearch? {width: '100%',background: '#ededed'}: {background: 'transparent'} }
                       value = {this.state.input}
                       type="text"
                       placeholder='search'
                       ref={(input) => this.box = input}
                       onFocus={this.handleInputFocus}
                       onBlur={this.handleInputBlur}
                       onChange={this.handleInputText}
                       onKeyUp={this.handleInputSubmit}
                />
            </div>

        )
    }
}

export default SearchBar