import React from 'react';
import UserAcountPage from '../UserAcc/UserAcountPage';
import HambergBurron from '../Hamberg/HamButton';
import AllNavLinks from '../NavLinks/AllNavLinks';
import Logo from '../Logo/Logo.jsx';





function NavBar() {
    const navLinks = [
        { name: "Doctors", href: "/doctors" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "SignIn", href: "/signIn" },
        { name: "SignUp", href: "/signUp" },
    ];

    return (
        <div>
            <nav className="navbar bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <HambergBurron />
                    <AllNavLinks links={navLinks} />

                    <Logo img="/Images/LogoTest.png" />
                    
                    <UserAcountPage name="About LifeLine" href="/user-account" />



                </div>
            </nav>
        </div>
    );
}

export default NavBar;
