import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../assets/ArrowLeft.svg'
import { ReactComponent as GameIcon } from '../../assets/gamer.svg'
import './styles.css'

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <div className="home-text">
                <h1 className="home-text-title">Quais jogos a galera gosta mais?</h1>
                <h3 className="home-text-subtitle">Clique no botão abaixo e saiba quais são os jogos que os gamers estão escolhendo!</h3>
                <Link to="/Records">
                    <div className="home-actions">
                        <button className="home-btn">QUERO SABER QUAIS SÃO</button>
                        <div className="home-btn-icon">
                            <ArrowIcon />
                        </div>
                    </div>
                </Link>
            </div>
            <GameIcon className="home-image" />
        </div>
    );
}

export default Home;