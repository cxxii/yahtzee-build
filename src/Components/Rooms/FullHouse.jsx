import { useState } from 'react';
import style from './CSS/Room.module.css'

const FullHouse = (props) => {
  const [isDisabled, setIsDisabled] = useState(false)

  function fullHouseScore(roll) {
    roll.sort()
      if (roll[0] === roll[1] && roll[4] === roll[3] && roll[0] !== roll[4]) {
        if (roll[0] === roll[2] || roll[4] === roll[2]) {
          return 25
        }
      } else {
        return 0
      }
  }

  const score = fullHouseScore(props.values)

  const useRoom = () => {
    props.onRollDice(score)
    props.updateTotal(score)
    setIsDisabled(true)
  }

  return (
    <div className={`${style['room']} ${style['reverse']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled}>Full House</button>
      <div>
        <p>{isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default FullHouse;