import React from 'react'
import Pad from './Pad'

const DrumPad = (props) => {
    let pad = props.pads.map(pad => {
        return (
            <Pad key={pad.id} padDetails={pad}/>
        )
    })

    return(
        <div className='drum-pad-container'>
            <div className='drum-pad' style={{border: '1px solid black', height: '500px', width: '500px'}}>
                {pad}
            </div>
        </div>
    )

}

export default DrumPad