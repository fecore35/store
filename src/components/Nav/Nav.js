import CustomLink from "components/CustomLink";

import s from "./Nav.module.css";

function Nav() {
  return (
    <nav className={s.menu}>
      <ul className={s.list}>
        <li className={s.item}>
          <CustomLink to="/" className={s.link}>
            Список товаров
          </CustomLink>
        </li>
        <li className={s.item}>
          <CustomLink to="/cart" className={s.link}>
            Корзина
          </CustomLink>
        </li>
        <li className={s.item}>
          <CustomLink to="/about-us" className={s.link}>
            О нас
          </CustomLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
