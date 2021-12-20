import CustomLink from "components/CustomLink";

import s from "./Logo.module.css";

function Logo() {
  return (
    <CustomLink to="/" className={s.logo}>
      STORE
    </CustomLink>
  );
}

export default Logo;
