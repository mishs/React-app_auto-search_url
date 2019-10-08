import React from 'react'
import $ from 'jquery'

class InputSearchArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        
            this.handleChange = this.handleChange.bind(this);
            //   this.handleSubmit = this.handleSubmit.bind(this); 
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

        return (
            <div>
     {/* tell React that we want to associate the <input> ref
     with the `textInput` that we created in the constructor */}
                <input 
                    type='url' 
                    placeholder='Enter url and Press Enter' 
                    ref={this.setTextInputRef}
                    style={inputStyling}
                    value={this.state.value}
                    onChange={this.handleChange}
                    required pattern="https?://.*"
                 />
            </div>
        );
    }
}

export default InputSearchArea;