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

    validateEmail (url_value) {
      const regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(url_value))
        {
          return this.setState({valid: true});
        }
        else
        {
          return this.setState({valid: false});
        }
    }
            
        handleChange = (event) => {
          var fieldContainerClass = 'field-container'
        // Focus the text input using the raw DOM API
        const url_value = event.target.value
        const emailValid = this.validateEmail(url_value) 
  

        if (event.keyCode && event.keyCode === 13) {
            if (this.state.valid) {
              
              window.open(`http://${this.state.value}`);
              return fieldContainerClass

            }
            
        }
        this.setState(
          {url_value: event.target.value,
            valid: emailValid
          });
        
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
                {/* <input 
                    type='url' 
                    placeholder='Enter url and Press Enter' 
                    ref={this.setTextInputRef}
                    style={inputStyling}
                    value={this.state.value}
                    onChange={this.handleChange}
                    required pattern="https?://.*"
                 /> */}

<div className={fieldContainerClass}>
        <input type='url'
         url_value={this.state.value} 
          placeholder='Enter url and Press Enter' 
          ref={this.setTextInputRef}
          style={inputStyling}
          onChange={this.handleChange}
          required pattern="https?://.*"

           />
        <span>Invalid url</span>
      </div>
 </div>
        );
    }
}

export default InputSearchArea;