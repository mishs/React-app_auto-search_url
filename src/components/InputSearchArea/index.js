import React from 'react'

class InputSearchArea extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }

    render() {

    const inputStyling = {
        minWidth: '50vw',
        height: '30px',
        borderRadius: 8
    };
 
        return (
            <div>
                <input 
                 type='url' 
                 placeholder='Enter url and Press Enter' 
                 style={inputStyling}
                 className="show-value"
                 name="website"
                 required pattern="https?://.*"
                 />
            </div>
        )
    }

}

export default InputSearchArea;