import React, { Component } from "react";
import pic from "../assets/pictures/pic.svg";
import appstore from "../assets/pictures/appstore.svg";
import playstore from "../assets/pictures/playstore.svg";

class Index extends Component {
    componentDidMount() {
        document.title = "Fundo  || Implementé par Abba Sali."
    }
    render() {


        return (
            <div className="site">
                <div className="container">
                    <header className="site-header">
                        <nav className="header-nav">
                            <a href="#" className="nav-logo">Fundo</a>
                            <ul className="nav-list">
                                <li><a href="">Home</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Branches</a></li>
                                <li><a href="">Contact</a></li>
                                <li><button>Login</button></li>
                            </ul>
                        </nav>
                    </header>
                    <main className="site-main">
                        <section className="main-section__text">
                            <h2>Stylish Furniture</h2>
                            <h4>in unique style</h4>
                            <p>We have wide range of furniture in wooden metal and plastic</p>
                            <div className="section-down">
                                <a href="#" className="down-appstore"><img src={appstore} /></a>
                                <a href="#" className="down-playstore"><img src={playstore} /></a>
                            </div>
                        </section>
                        <section className="main-section__picture">
                            <img src={pic} />
                        </section>
                    </main>
                </div>
            </div>
        )
    }
}

export default Index;