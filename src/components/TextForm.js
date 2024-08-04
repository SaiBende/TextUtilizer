import React, { useState } from 'react';



export default function TextForm(props) {
    const [text, setText] = useState(' ');
    const [copied, setCopied] = useState(false);
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);



    };
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);



    };
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        setCopied(false);



    };

    const handleSpeakClick = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }


    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(true);
                alert("text copied to clipboard");
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    };


    const handleOnChange = (event) => {

        setText(event.target.value);

    };

    return (
        <>
            <div className="container" style={{color:props.mode==='dark'? 'white':'black'}}>
                <h1  >{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'white':'white' }}></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
                <button type="button " className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
                <button type="button " className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button type="button " className="btn btn-primary mx-2" onClick={handleSpeakClick}>Speak</button>
                <button type="button " className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>

                {copied && <p>Text copied to clipboard!</p>}
            </div>
            <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>

                <h2>Your Text Summery</h2>
                <p>{text.split(" ").length} words and {text.length} chars</p>
                <p>{text.split(" ").length * 0.08} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>


        </>

    )
}
