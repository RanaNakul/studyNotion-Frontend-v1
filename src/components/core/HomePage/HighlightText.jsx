import React from 'react'

function HighlightText(props) {
  return (
    <span className='whitespace-pre-line font-bold bg-gradient-to-tr from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text'>
        {" "}
        {props.text}
        
    </span>
  )
}

export default HighlightText