import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import style from './Home.module.css';
import GameHeader from '../Game/JSX/GameHeader';
import '../Game/CSS/GameHeader.module.css';

const Home = () => {
  const navigate = useNavigate();
  //const [isHovered, setIsHovered] = useState(false) 

  //const hoverHandler = () => {
   // setIsHovered(!isHovered)
  //}

  const homeRedirect = () => {
    navigate('/game')
  }

  return (
    <div className={`${style['god-container']}`}>
        <div className={style['page-container']}>
        <div className={style['game-header']}>
        {GameHeader()}
        </div>
          <button className={style['enter-to-start']} 
          onClick={homeRedirect}>
            Enter to start
          </button>
        </div>
    </div>
  );
};

export default Home;