import React from "react";
import './nav-list.scss'

function SelectLang() {
  return (
    <div className={'selectLang'}>
      <select>
          <option value="0">English</option>
          <option value="1">Русский</option>
          <option value="2">Беларускі</option>
      </select>
    </div>
  )
}

const NavList = () => {
    return (
        <ul className={'sub-nav'}>
            <SelectLang />
        </ul>
    );
}

export default NavList;
