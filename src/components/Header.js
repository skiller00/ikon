import React, { useState } from "react";
import TopLine from "./Topline";
import Logo from "./Logo";
import ikon from '../images/ikon.png'
import bg from "../images/bg.png"
import Navigation from "./Navigation";

const month = new Date().getMonth() + 1;
const days = new Date().getDate() ;

const MenuItems = ['Эхлэл','COVID-19','Улс Төр','Эдийн засаг','Нийгэм','Эрүүл Мэнд','Дэлхий','Live','Шилдэг','Бусад']

const Header = () => {
  return <header>
      <TopLine date={`${month} сарын ${days}`}/>
      <Logo bg={bg} src={ikon}/>
      <Navigation navs={MenuItems}/>
    </header>
};

export default Header;
