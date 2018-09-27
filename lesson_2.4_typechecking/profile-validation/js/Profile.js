'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const urlPropType = (props, propName, componentName) => {
  let url = props[propName];
  if (!url) {
    return null;
  }
  let isUrl =
    typeof url === 'string' &&
    /^https:\/\/vk\.com\/(id[0-9]+|[A-Za-z0-9_-]+)/.test(url);
  if (!isUrl) {
    return new Error(
      `Неверный параметр ${propName} в компоненте ${componentName}: параметр должен быть ссылкой на профиль ВК`
    );
  }
  return null;
};

const birthdayPropType = (props, propName, componentName) => {
  let birthday = props[propName];
  if (!birthday) {
    return null;
  }
  let isData =
    typeof birthday === 'string' &&
    /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(birthday);
  let isFutureDate = new Date(birthday) > new Date();
  if (!isData || isFutureDate) {
    return new Error(
      `Неверный параметр ${propName} в компоненте ${componentName}: параметр должен быть датой в формате YYYY-MM-DD и не быть больше текущей`
    );
  }
  return null;
};

const Profile = props => {
  return (
    <div className="col-md-4 text-center" style={{ marginBottom: '10px' }}>
      <div style={profileStyle}>
        <h2>
          {props.first_name} {props.last_name}
        </h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle} />
        </div>
        <p>
          vk: <a href={props.url}>{props.url}</a>
        </p>
        <p>
          birthday: <a href={props.birthday}>{props.birthday}</a>
        </p>
      </div>
    </div>
  );
};

Profile.defaultProps = {
  img: './images/profile.jpg'
};

Profile.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string,
  birthday: birthdayPropType,
  url: urlPropType
};
