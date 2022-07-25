import React from 'react';
// import logo from './logo.svg';
import './header.css';

function Header() {
    return (
        <div className={"-header w-full fixed top-0"}>
            <div className={"-list"}>LOGO</div>
            <div>
                <div className={"-list"}>Button_1</div>
                <div className={"-list"}>Button_2</div>
                <div className={"-list"}>Button_3</div>
                <div className={"-list"}>
                    <input className="absolute right-10 h-8 shadow appearance-none bg-transparent text-white border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search"/>
                </div>
                <div className={"-list"}>
                    <img className={"img absolute right-2"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Header;
