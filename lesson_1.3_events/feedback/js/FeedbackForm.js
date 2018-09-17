'use strict';
const FeedbackForm = (props)=>{

function onSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;

  const formData = {
    'salutation': elements.salutation.value,
    'name': elements.name.value,
    'email': elements.email.value,
    'subject': elements.subject.value,
    'message': elements.message.value,
    'snacks': Array.from(elements.snacks).filter(item => item.checked).map(item => item.value)
  }
  props.onSubmit(JSON.stringify(formData)); 
}

return (
  <form onSubmit={onSubmit} className="content__form contact-form">
  <div className="testing">
    <p>Чем мы можем помочь?</p>
  </div>
  <div className="contact-form__input-group">
    <input defaultChecked={props.data.salutation === 'Мистер'} className="contact-form__input contact-form__input--radio" id="salutation-mr" name="salutation" type="radio" value="Мистер"/>
    <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
    <input defaultChecked={props.data.salutation === 'Мисcис'} className="contact-form__input contact-form__input--radio" id="salutation-mrs" name="salutation" type="radio" value="Миссис"/>
    <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Миссис</label>
    <input defaultChecked={props.data.salutation === 'Мисс'} className="contact-form__input contact-form__input--radio" id="salutation-ms" name="salutation" type="radio" value="Мисс"/>
    <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мисс</label>
  </div>
  <div className="contact-form__input-group">
    <label className="contact-form__label" htmlFor="name">Имя</label>
    <input defaultValue={props.data.name} className="contact-form__input contact-form__input--text" id="name" name="name" type="text"/>
  </div>
  <div className="contact-form__input-group">
    <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
    <input defaultValue={props.data.email} className="contact-form__input contact-form__input--email" id="email" name="email" type="email"/>
  </div>
  <div className="contact-form__input-group">
    <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
    <select defaultValue={props.data.subject} className="contact-form__input contact-form__input--select" id="subject" name="subject">
      <option>У меня проблема</option>
      <option>У меня важный вопрос</option>
    </select>
  </div>
  <div className="contact-form__input-group">
    <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
    <textarea defaultValue={props.data.message} className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65"></textarea>
  </div>
  <div className="contact-form__input-group">
    <p className="contact-form__label--checkbox-group">Хочу получить:</p>
    <input defaultChecked={props.data.snacks && props.data.snacks.includes('пицца')} className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks" type="checkbox" value="пицца"/>
    <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
    <input defaultChecked={props.data.snacks && props.data.snacks.includes('пирог')} className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks" type="checkbox" value="пирог"/>
    <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
  </div>
  <button className="contact-form__button" type="submit">Отправить сообщение!</button>
  <output id="result" />
</form>
)
}