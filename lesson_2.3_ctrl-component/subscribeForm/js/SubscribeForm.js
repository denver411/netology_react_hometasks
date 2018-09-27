class SubscribeForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isValid: false
    }
  }  
  
  handleFormCheck = (event) => {
    event.preventDefault();
    this.setState({
      isValid: this.emailField.validity.valid ? true : false
    })
  }
  render () {
    const formClassName = this.state.isValid ? 'is-valid' : 'is-error';
    return (
        <div className="subscribe__form">
          <form onChange={this.handleFormCheck} className={`form form--subscribe ${formClassName }`}>
            <h4 className="form-title">Подписаться:</h4>
            <div className="form-group">
            <label htmlFor="input-email" className="sr-only">Email</label>
            <input ref={field => this.emailField = field} type="email" id="input-email" placeholder="Email" className="form-control"/>
            <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
            <button type="submit" className="form-next">
              <i className="material-icons">keyboard_arrow_right</i>
            </button>
            </div>
          </form>
        </div>
    )
  }
};
