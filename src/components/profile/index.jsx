import React from 'react';
import "./style.css";
import Sidebar from '../sidebar';

function Profile() {
  return (
    <>
      <Sidebar />
      <div className="content">
        <h2>Личная информация</h2>
        <div className="profile">
          <img src="https://e7.pngegg.com/pngimages/375/358/png-clipart-song-learning-high-hopes-google-play-user-game-monochrome.png"
            alt="Аватар" />
          <div className="details">
            <h3>Кашин Илья Сергеевич</h3>
            <p>user@example.com</p>
          </div>
        </div>

        <h2>История заказов</h2>
        <table>
          <thead>
            <tr>
              <th>Заказ</th>
              <th>Дата</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1234</td>
              <td>01.01.2022</td>
              <td>В процессе</td>
            </tr>
            <tr>
              <td>#5678</td>
              <td>05.02.2022</td>
              <td>Доставлен</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Profile;
