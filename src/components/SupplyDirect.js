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
                <div className="supply-list">

                </div>
            </section>

        )
    }
}

export default SupplyDirect