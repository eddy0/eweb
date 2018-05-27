import React from 'react'
import ColorPannel from "./ColorPannel";
import GoodsList from "./GoodsList";

class NewPublish extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <ColorPannel/>
                <GoodsList/>
            </div>

        )
    }
}

export default NewPublish