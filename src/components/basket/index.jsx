import React from 'react';
import './styles.css';
import Sidebar from '../sidebar';

function Basket() {
  return (
    <div>
      <Sidebar />
      <div className="cart">
        <div className="product-card-basket">
          <img
            src="https://c.dns-shop.ru/thumb/st4/fit/320/250/56d2836ffa0105ca29b69fb304e15f10/f471f73186df557b2322a352d3147c14ea1d65fcbfdfe1129756366247cdf78e.jpg"
            alt="Товар 1"
            className="img-card"
          />
          <div className="description">
            <h3>Компьютер</h3>
            <p>
              ПК ARDOR GAMING RAGE H322 [Intel Core i5-13400F, 6 x 2.5
              ГГц, 32 ГБ DDR4, GeForce RTX 4070, SSD 1000 ГБ, без ОС]
            </p>
          </div>
          <input type="number" id="quantity1" value="1" />
          <h4>146 999 ₽</h4>
          <input type="checkbox" id="checkbox1" className="checkbox" />
        </div>
        <div className="product-card-basket">
          <img
            src="https://c.dns-shop.ru/thumb/st4/fit/320/250/aaa5c9e0ff2fb2d11cf07a0b2267c579/1db1b2f57db5a86a13f75eb235c2178cc6ec0d08808a58952056d376d2fc12d2.jpg"
            alt="Товар 2"
            className="img-card"
          />
          <div className="description">
            <h3>Компьютер</h3>
            <p>
              ПК ARDOR GAMING RAGE H322 [Intel Core i5-13400F, 6 x 2.5
              ГГц, 32 ГБ DDR4, GeForce RTX 4070, SSD 1000 ГБ, без ОС]
            </p>
          </div>
          <input type="number" id="quantity2" value="1" />
          <h4>87 499 ₽</h4>
          <input type="checkbox" id="checkbox2" className="checkbox" />
        </div>

        <div className="product-card-basket">
          <img
            src="https://c.dns-shop.ru/thumb/st4/fit/320/250/7ff63a73950df6a4c565435618bcca4f/323f353cc37b864b469f5f5d2fdddd0d27fd06b62ce6947975a764f587de5a49.jpg"
            alt="Товар 3"
            className="img-card"
          />
          <div className="description">
            <h3>Компьютер</h3>
            <p>
              ПК MSI MAG Infinite S3 13TC-853XRU [9S6-B93821-853] [Intel
              Core i5-13400F, 6 x 2.5 ГГц, 16 ГБ DDR4, GeForce RTX 3060,
              SSD 512 ГБ, без ОС]
            </p>
          </div>
          <input type="number" id="quantity3" value="1" />
          <h4>146 999 ₽</h4>
          <input type="checkbox" id="checkbox3" className="checkbox" />
        </div>
      </div>
      <div className="cart-total">
        <p>Доставка в пункт выдачи</p>
        <p>г.Владимир</p>
        <p>30 октября</p>
        <p>Оплата картой</p>
        <p>Спишем оплату при получении ?</p>

        <div className="checkbox-pay">
          <input type="checkbox" id="checkbox3" className="checkbox" />
          Оплатить сразу
        </div>
        <p>Товары, 3 шт. 381 497₽</p>
        <p>ИТОГО: 381 497₽</p>
        <button className="order-button">Заказать</button>
      </div>
    </div>
  );
}

export default Basket;
