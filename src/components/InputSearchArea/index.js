import React from 'react'

class InputSearchArea extends React.Component {

    render() {

    const inputStyling = {
        minWidth: '50vw',
        height: '20px',
        borderRadius: 5
    };

        return (
            <div>
                <input type='text' placeholder='url loads web-page' style={inputStyling}/>
            </div>
        )
    }

}

export default InputSearchArea;