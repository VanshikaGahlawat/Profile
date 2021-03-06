import React from 'react'

const Header= ({info, history}) =>{

    const {first, last} = info.name;
    const onClickHandler = (str) => {
        document.querySelector('.home').classList.remove('active')
        document.querySelector('.user').classList.remove('active')
        document.querySelector('.envelope').classList.remove('active')
        document.querySelector('.'+str).classList.add('active')
        let item = document.querySelector('body')
        item.classList.toggle('mobile-nav-active')
        document.querySelector(".navicon").classList.toggle('bi-list')
        document.querySelector(".navicon").classList.toggle('bi-x')
    }

    return(
        <>
        <header id="header">
            <div className="profile">
                <img src={info.picture.medium} alt="" className="img-fluid rounded-circle" />
                <h1 className="text-light">{first} {last}</h1>
                <p>@{info.login.username}</p>
                <div className="social-links mt-3 text-center">
                <a href="https://www.twitter.com" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="https://www.facebook.com" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="https://www.instagram.com" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="https://www.skype.com" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="https://www.linkedin.com" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
                <nav id="navbar" className="nav-menu  navbar">
                    <ul>
                    <li><a onClick={() => onClickHandler('home')} href="#home" className="home nav-link scrollto active" ><i className="bx bx-home"> </i> <span>Home</span></a></li>
                    <li><a onClick={() => onClickHandler('user')} href="#about" className="user nav-link scrollto " ><i className="bx bx-user"></i> <span>About</span></a></li>
                    <li><a onClick={() => onClickHandler('envelope')} href="#contact" className="envelope nav-link scrollto " ><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                    </ul>
                </nav>
                <a href='/' className='refresh'><i class='bx bx-refresh bx-rotate-270 bx-spin-hover'></i></a>
                <p>Refresh</p>
            </div>
        </header>
        </>
    )
}

export default Header