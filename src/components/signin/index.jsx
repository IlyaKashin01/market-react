import React from 'react';
import "./styles.css";

function Signin() {
  return (
    <div className="Container">
      <div className="FormWrap">
        <button className="Icon" >Market</button>
        <div className="FormContent">
          <form className="Form" action='#'>
            <h1 className="FormH1">Вход в учетную запись</h1>
            <label className="FormLabel" htmlFor='for'>Логин</label>
            <input className="FormInput" htmlFor='login' required type="text" name="login" />
            <label className="FormLabel" htmlFor='for'>Пароль</label>
            <input className="FormInput" htmlFor='password' required type="text" name="password" />
            <button className="FormButton" type='submit'>Войти</button>
            <span className="Text">Забыли пароль?</span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
