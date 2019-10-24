import React from 'react'
import './Input.css';

class InputSearchArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url_value: '',
            valid: false,
            hasSubmitted: false,
            // color: 'black'
        }

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this); 
      }

    validateUrl (url_value) {
      const regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(url_value)) {
          this.setState({ valid: true});
        } else {
          return this.setState({valid: false});
        }
    }
            
        handleChange = (event) => {
        // Focus the text input using the raw DOM API
        const regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        const url_value = event.target.value
        // this.validateUrl(url_value)

        this.setState({valid: true})
        if (event.keyCode && event.keyCode === 13) {
          this.setState({hasSubmitted: true})
          if (regexp.test(url_value)) {              
            window.open(`http://${url_value}`);
            this.setState({valid: true})
          } else {
            this.setState({valid: false})
          }
        }
        // this.setState({value: event.target.value});
      };

      
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    
    // componentDidMount(){
    //     // document.addEventListener("keydown", this.handleEnter, false);
    //     document.addEventListener("keydown", this.handleChange, false);
    // }

    render() {
      const inputStyling = {
        minWidth: '50vw',
        height: '50px',
        borderRadius: 16,
        marginRight: '2px'
      };

    
    // var fieldContainerClass = 'field-container'
    // const { valid } = this.state
    // if (!valid) {
    //   fieldContainerClass += ' error'
    // }

     return (
      <form>
       <div className={!this.state.valid && this.state.hasSubmitted ? 'field-container error': 'field-container'}>
        <input type='url'
         url_value={this.state.value} 
          placeholder='Enter url and Press Enter' 
          ref={this.setTextInputRef}
          style={inputStyling}
          onKeyDown={this.handleChange}
          required pattern="https?://.*"
           />
        <span>Invalid url</span>
      </div>
   </form>
        );
    }
}

export default InputSearchArea;
