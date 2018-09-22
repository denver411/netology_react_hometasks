'use strict';

const AuthForm = ({ onAuth }) => {

  function handleSubmit(event) {
    event.preventDefault();
    const elements = event.currentTarget.elements;
    const formData = {
      'name': elements.name.value,
      'email': elements.email.value,
      'password': elements.password.value
    }
    if (onAuth && typeof(onAuth) === 'function'){
      onAuth(formData);
    }
  }

  return (
    <form onSubmit={handleSubmit} class="ModalForm" action="/404/auth/" method="POST">
      <div className="Input">
        <input required type="text" placeholder="Имя" name="name" />
        <label></label>
      </div>
      <div className="Input">
        <input onChange={handleEmailChange} type="email" placeholder="Электронная почта" name="email" />
        <label></label>
      </div>
      <div className="Input">
        <input onChange={handlePasswordChange} required type="password" placeholder="Пароль" name="password" />
        <label></label>
      </div>
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>
    </form>
  )
}

function handleEmailChange(event){
  const field = event.currentTarget;
  field.value = (field.value).match(/[\w\.\-@]+/gi);
}

function handlePasswordChange(event){
  const field = event.currentTarget;
  field.value = (field.value).match(/[\w]+/gi);
}