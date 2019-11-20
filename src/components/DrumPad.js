import React from 'react'
import Pad from './Pad'

const DrumPad = (props) => {
    let pad = props.pads.map(pad => {
        return (
            <Pad key={pad.id} padDetails={pad} mouseDown={props.mouseDown} mouseUp={props.mouseUp}/>
        )
    })

    return(
        <div className='drum-pad-container' >
            <div className='drum-pad'>
                {pad}
            </div>
        </div>
    )

}

export default DrumPad