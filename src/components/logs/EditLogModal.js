import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(message === '' || tech === ''){
            M.toast({ html: 'Please enter a message and tech'})
        } else {
            console.log(message, tech, attention);

            //clear Input
            setMessage('');
            setTech('');
            setAttention(false);
        }
    }
    return(
        <div id="edit-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter system System Crash</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message}
                        onChange={e => setMessage(e.target.value)} />
                        <label htmlFor="message" className="active">
                            Log System Crash
                        </label>
                    </div>
                </div>
                <div className="row">
                    <select name="tech" value={tech} className="browser-default"
                    onChange={e => setTech(e.target.value)}>
                        <option value="" disabled>Select Technician</option>
                        <option value="John Doe">John Doe</option>
                        <option value="Sam Smith">Sam Smith</option>
                        <option value="Sara Whilson">Sara Whilson</option>
                    </select>
                </div>
                <div className="row">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in" checked={attention} 
                            value={attention} onChange={e => setAttention(!attention)} />
                            <span>Needs Attention</span>
                        </label>
                    </p>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: "75%",
    height: "75%"
}

export default EditLogModal;