'use strict';

const AuthForm = ({ onAuth }) => {

  function onSubmit(event) {
    event.preventDefault();
    const elements = event.currentTarget.elements;
    const formData = {
      name: elements[0].value,
      email: elements[1].value,
      password: elements[2].value
    }
    if (onAuth && typeof(onAuth) === 'function'){
      onAuth(formData);
    }
  }

  function getEmail(event){
    const field = event.currentTarget;
    field.value = (field.value).match(/[a-z0-9_\.\-@]+/gi);
  }

 function getPass(event){
    const field = event.currentTarget;
    field.value = (field.value).match(/[a-z0-9_]+/gi);
  }

  return (
    <form onSubmit={onSubmit} class="ModalForm" action="/404/auth/" method="POST">
      <div className="Input">
        <input required type="text" placeholder="Имя" />
        <label></label>
      </div>
      <div className="Input">
        <input onChange={getEmail} type="email" placeholder="Электронная почта" />
        <label></label>
      </div>
      <div className="Input">
        <input onChange={getPass} required type="password" placeholder="Пароль" />
        <label></label>
      </div>
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>
    </form>
  )
}
