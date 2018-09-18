'use strict';

const AuthForm = ({ onAuth }) => {

  function onSubmit(event) {
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
    <form onSubmit={onSubmit} class="ModalForm" action="/404/auth/" method="POST">
      <div className="Input">
        <input required type="text" placeholder="Имя" name="name" />
        <label></label>
      </div>
      <div className="Input">
        <input onChange={getEmail} type="email" placeholder="Электронная почта" name="email" />
        <label></label>
      </div>
      <div className="Input">
        <input onChange={getPass} required type="password" placeholder="Пароль" name="password" />
        <label></label>
      </div>
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>
    </form>
  )
}

function getEmail(event){
  const field = event.currentTarget;
  field.value = (field.value).match(/[a-z0-9_\.\-@]+/gi);
}

function getPass(event){
  const field = event.currentTarget;
  field.value = (field.value).match(/[a-z0-9_]+/gi);
}