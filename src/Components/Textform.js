import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        let new_txt = text.toLocaleUpperCase();
        setText(new_txt)
    }
    const handleLowClick = () => {
        let new_txt = text.toLocaleLowerCase();
        setText(new_txt)
    }
    const handleClearClick = () => {
        let new_txt = '';
        setText(new_txt)
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    let mystyle = {
        color: 'black',
        backgroundColor: 'rgba(23, 39, 186, 0.257)',
        border: '4px solid white'
    }
    let st={
        color:'red'
    }

    return (
        <>
            <div className="container mb-3" style={mystyle}>
                <h3>{props.heading}</h3>
                <div className="mb-4" id="div1">
                    <textarea type="text" className="form-control" value={text} onChange={handleOnChange} id="my-text" rows="8" placeholder='Enter text here'></textarea>
                </div>
                <button className="btn btn-primary mb-2 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mb-2 mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mb-2 mx-2" onClick={handleClearClick}>Clear text</button>


            </div>
            <div className="accordion accordion-flush mb-4" id="accordionFlushExample" style={mystyle}>
                <h2>Your text summary</h2>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                        >
                           <b> Total number of words </b>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <p> <b style={st}>{text.split(" ").length}</b></p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                        >
                          <b>Total number of charecters </b>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <p> <b style={st}>{text.length}</b></p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                        >
                           <b>Total time(in mins) take to read words </b>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <p>  <b style={st}> {0.008 * text.split(" ").length}</b></p>
                        </div>
                    </div>
                </div>
                {/* <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFour"
                            aria-expanded="false"
                            aria-controls="flush-collapseFour"
                        >
                            Accordion Item #4
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body.
                        </div>
                    </div>
                </div> */}
            </div>
            {/* <div className='container my-3'>
                <button type="button" className="btn btn-primary">Enable dark mode</button>
            </div> */}
        </>

    );
}
