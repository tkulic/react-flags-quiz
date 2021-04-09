import React from 'react'

export default function ProgressBar(props) {
    const progress = Math.floor(((props.round - 1) / props.roundsTotal) * 100) + "%"

    const trackDivStyle = {
        width: "80%",
        height: "5px",
        backgroundColor: "#212738",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        zIndex: 1,

    }

    const progressDivStyle = {
        width: progress,
        height: "100%",
        backgroundColor: "#57C4E5",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        transition: "width 300ms"
    }

    return (
        <div style={trackDivStyle}>
            <div style={progressDivStyle}></div>
        </div>
    )
}
