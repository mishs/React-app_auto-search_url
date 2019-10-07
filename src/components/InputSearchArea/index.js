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

      componentDidMount() {
        // autofocus the input on mount
        this.focusTextInput();
      }

    render() {
        const inputStyling = {
            minWidth: '50vw',
            height: '30px',
            borderRadius: 8,
            marginRight: '2px'
        };

        const btnStyling = {
            minWidth: '12vw',
            height: '35px',
            borderRadius: 5
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
                 <input
                    type="button"
                    value="Click for Enter"
                    onClick={this.focusTextInput}
                    style={btnStyling}
                />
            </div>
        )
    }

}

export default InputSearchArea;