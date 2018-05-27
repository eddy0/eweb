import React from 'react'
import MarkIcon from "./MarkIcon";

class Policy extends React.Component {

    state = {
        list: ['网易自营品牌','30天无忧退货', '48小时极速退款']
    }

    render() {
        return (
            <section className='policy-list'>
                {
                    this.state.list.map((l, i) => (
                        <span key={i} className='policy-item'>
                            <MarkIcon/>
                            <span>
                                {l}
                            </span>

                        </span>
                    ))
                }


            </section>

        )
    }
}

export default Policy