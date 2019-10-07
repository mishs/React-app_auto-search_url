import React from 'react'

class InputSearchArea extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }

      focusTextInput() {
        // Explicitly focus the text input using the raw DOM API
        this.textInput.current.focus();
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