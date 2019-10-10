import React from 'react'
import './Input.css';

class InputSearchArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url_value: '',
            valid: true,
        }

            this.handleChange = this.handleChange.bind(this);
            //   this.handleSubmit = this.handleSubmit.bind(this); 
            // this.handleEmailChange = this.handleEmailChange.bind(this)
      }

       
        handleChange = (event) => {
      
        // Focus the text input using the raw DOM API
      
        const emailValid = this.validateEmail(url_value) 
  

        if (event.keyCode && event.keyCode === 13) {
            if (this.state.valid) {
              
              window.open(`http://${this.state.value}`);
        

            }
            
        }

        
      };
    
      componentDidMount(){
        // document.addEventListener("keydown", this.handleEnter, false);
        document.addEventListener("keydown", this.handleChange, false);
    }

    render() {
      const inputStyling = {
        minWidth: '50vw',
        height: '30px',
        borderRadius: 8,
        marginRight: '2px'
      };

    
    var fieldContainerClass = 'field-container'
    const { valid } = this.state
    
    if (!valid) {
      fieldContainerClass += ' error'
    }

  //   if (event.keyCode && event.keyCode === 13) {
  //     window.open(`http://${this.state.value}`)
  // }

        return (
            <div>
     {/* tell React that we want to associate the <input> ref
     with the `textInput` that we created in the constructor */}


<div className={fieldContainerClass}>
        <input type='url'
       
          ref={this.setTextInputRef}
          style={inputStyling}
          onChange={this.handleChange}
          required pattern="https?://.*"

           />
 
      </div>
 </div>
        );
    }
}

export default InputSearchArea;