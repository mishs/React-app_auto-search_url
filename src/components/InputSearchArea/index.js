import React from 'react'

class InputSearchArea extends React.Component {
    constructor(props) {
        super(props);
            // create a ref to store the textInput DOM element
            this.textInput = React.createRef();
            this.focusTextInput = this.focusTextInput.bind(this);
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
     {/* tell React that we want to associate the <input> ref
     with the `textInput` that we created in the constructor */}
                <input 
                 type='url' 
                 placeholder='Enter url and Press Enter' 
                 ref={this.textInput}
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