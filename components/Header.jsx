import React from 'react'
import useTheme from '../hooks/useTheme'

export default function Header() {
  const [isDark, setIsDark]=useTheme()
  return (
    <header className={`header-container ${isDark?'dark':''}`}>
      <div className="header-content">
        <h2 className="title"><a href="/">Where in the world?</a></h2>
        <p className="theme-changer" onClick={()=>{
          document.body.classList.toggle('dark')
          setIsDark(!isDark)
          localStorage.setItem('isDarkMode',!isDark)
        }}><i className={`fa-solid fa-${isDark?'sun':'moon'}`}
        ></i>{isDark?'Light':'Dark'} Mode</p>
      </div>
    </header>
  )
}
