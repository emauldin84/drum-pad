import React from 'react'


const Pad = (props) => {

    const handleClick = () => {
        console.log(props.padDetails.audioFile)
        document.getElementById(`audio-${props.padDetails.id}`).play()
    }
    let styles = props.padDetails.playing ? `pad-container-${props.padDetails.color} playing-${props.padDetails.color}` : `pad-container-${props.padDetails.color}`
    return (
        <div autoFocus className={styles} style={{border: '1px solid black', width: '100px', height: '100px'}} onClick={handleClick}>
            <div className='pad'>
                {props.padDetails.name}
                <br/>
                {props.padDetails.key}
                <audio id={`audio-${props.padDetails.id}`} src={props.padDetails.audioFile} type="audio/wav"></audio>

            </div>
        </div>
    )
}

export default Pad