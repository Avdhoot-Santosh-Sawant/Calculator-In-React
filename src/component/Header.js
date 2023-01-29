import React from "react";
import '../css/Header.css'

const Header = () => {


    return (
        <>
            <div className="header">
                <h1 id="app-name">Calculator App</h1>
                <div >
                    <a id="linkedin" href="https://www.linkedin.com/in/avdhoot-sawant-44259025b/" target={'_blank'} rel="noreferrer">
                        <img alt="in" src="./linkedin.png" width={'20px'} />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Header;