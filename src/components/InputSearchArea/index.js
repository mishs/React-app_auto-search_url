import React from 'react'

class InputSearchArea extends React.Component {

    render() {

    const inputStyling = {
        minWidth: '50vw',
        height: '30px',
        borderRadius: 8
    };

        return (
            <div>
                <input type='text' placeholder='Enter url and Press Enter' style={inputStyling}/>
            </div>
        )
    }

}

export default InputSearchArea;