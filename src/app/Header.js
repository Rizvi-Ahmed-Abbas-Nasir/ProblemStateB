"use client"
import {useEffect} from  "react";


export default function Header() {

     // local storage for saving the visits
    // click for saved 'darkMode' in localStorage
    let darkMode = localStorage.getItem('darkMode');


    //To enabled DarkTheme function
    const enableDarkTheme = () => {
        // 1 add the class to the body
        document.body.classList.add('darkmode');


        // 2 Update darkMode in the localStorage
        localStorage.setItem('darkMode','enabled');
    }


    const disableDarkTheme = () => {
        // 1 remove the class to body
        document.body.classList.remove('darkmode');


        // 2 update in localstorage
        localStorage.setItem('darkMode', null);
    }


    // If the user already visited and enabled darkmode
    // start things off with it on
    if(darkMode === "enabled"){
        enableDarkTheme();    
    }


    //when user click the button
    // Theme Toggle
    const DarkTheme = () => {
        darkMode = localStorage.getItem('darkMode');
        const themeicon = document.querySelector("#themeicons")
        if(darkMode !== "enabled"){
            enableDarkTheme();
            themeicon.classList.remove("gg-moon")
            themeicon.classList.add("gg-sun")
        }
        else{
            disableDarkTheme();
            themeicon.classList.remove("gg-sun")
            themeicon.classList.add("gg-moon")
        }
    
    }
    // $$


    useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
  });
/* Method that will fix header after a specific scrollable */
       const isSticky = (e) => {
            const header = document.querySelector('.header-section');
            const scrollTop = window.scrollY;
            scrollTop >= 80 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
        };

    return(
        <div className="Headers  header-section">
            <div className="HeadersText">
                <h4>LOGO</h4>

            </div>
            <div className="HeadersText2">
                <h4>SIGN IN</h4>
                <h4>MENU</h4>
                <div onClick={DarkTheme} className="ThemeIcons"> <div id="themeicons" className="gg-moon"></div></div>
        

            </div>
        </div>
    );
};
