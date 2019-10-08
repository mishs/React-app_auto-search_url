import React from 'react'
import $ from 'jquery'

class InputSearchArea extends React.Component {
    constructor(props) {
        super(props);
            // create a ref to store the textInput DOM element
            this.textInput = null;
            this.inputRef = props;
            this.url = '';
        
            this.setTextInputRef = element => {
                this.textInput = element;
              };
          
      }

      handleChange = () => {
        // Focus the text input using the raw DOM API
        
        if (this.textInput){ this.textInput.focus();
                // let keycode = '',
                // if (keycode === '13') {
             var name=$("input[name=website]").val();
             window.open(name);
            }
      };
    
      componentDidMount() {
        // autofocus the input on mount

        this.handleChange();
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
                    ref={this.setTextInputRef}
                    style={inputStyling}
                    className="show-value"
                    name="website"
                    required pattern="https?://.*"
                 />
            </div>
        );
    }
}

export default InputSearchArea;