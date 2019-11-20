import React from 'react'


const Pad = (props) => {

    let styles = props.padDetails.playing ? `pad-container-${props.padDetails.color} playing-${props.padDetails.color}` : `pad-container-${props.padDetails.color}`
    return (
        <div className={styles} id={props.padDetails.id} style={{border: '1px solid black', width: '80px', height: '80px'}} onMouseDown={(e) => props.mouseDown(e.target.id)} onMouseUp={(e) => props.mouseUp(e.target.id)}>
            <div className='pad' id={props.padDetails.id}>
                {props.padDetails.name}
                <br/>
                {props.padDetails.key}
                <audio id={`audio-${props.padDetails.id}`} src={props.padDetails.audioFile} type="audio/wav"></audio>

            </div>
        </div>
    )
}

export default Pad