import React from 'react';

const inputsearch = {
    display: 'inline-block',
    background: 'white',
    height: '1.6em',
    borderRadius: '5px',
    display: 'inline-block',
    paddingLeft: '0.5em',
    width: '180px'
}
const inputField = {
    display: 'inline-block',
    paddingLeft: '2.3em'
}
const labelIcon = {
    left: '0.7rem'
}
const close = {
    right: '0em'
}

export default function SearchForm() {

    const handleChange = (e) => {
        if(e.key === ' ') e.preventDefault();
    }

    return (
        <div className="input-field" style={inputField}>
          <input id="search" type="search" style={inputsearch} onKeyDown={handleChange} required />
          <label className="label-icon" htmlFor="search" style={labelIcon}><i className="material-icons">search</i></label>
          <i className="material-icons" style={close}>close</i>
        </div>
    )
}
