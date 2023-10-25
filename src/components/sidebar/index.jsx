import React from 'react';
import "./styles.css";
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='header'>
      <div className="logo">
        <Link to="/" >
          <button>
            <h1>Market</h1>
          </button>
        </Link>
      </div>
      <div className="search">
        <input type="text" placeholder="Поиск" />
      </div>
      <div className="icons">
        <Link to="/basket">
          <button>
            <img src="https://pngteam.com/images/cart-png-980x804_cf7c7237_transparent_202743.png.png" alt="Корзина" />
            <h3>Корзина</h3>
          </button>
        </Link>
        <Link to="/profile">
          <button>
            <img src="https://uploads-ssl.webflow.com/612e1151f336d5488bcf09cf/612e3216fc10566ce6bcfdb7_kirjaudu%20sisään%20(1).png" alt="Профиль" />
            <h3>Профиль</h3>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
