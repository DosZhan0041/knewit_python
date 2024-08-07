import React from 'react'
import s from './Footer.module.css'

function Footer() {
  return (
    <footer>
        <div className={s.footer_right}>
            <img src="Assets/logo.png" alt=""/>
            <p>Первая школа программирования</p>
        </div>
        <div className={s.footer_left}>
            <a href="https://www.instagram.com/knewit.kz/" target="_blank">Instagram<img src="Assets/insta.png"
                alt=""/></a>
            <a href="https://knewit.kz/" target="_blank">KnewIT.kz<img src="Assets/earth.png"
                alt=""/></a>
            <a href="">+7 (701) 938-04-63<img src="Assets/phone.png" alt=""/></a>
        </div>
    </footer>
  )
}

export default Footer