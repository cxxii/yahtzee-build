import React, { useState } from 'react'
import RollDiceButton from '../RollDiceButton/RollDiceButton'
import Die from './Die/Die'
import './DiceContainer.css'
const DiceContainer = (props) => {
  const { dice, setDice, counts, setCounts, diceValueSum, setDiceValueSum, values, setValues } = props
  // toggles dice state between locked and unlocked
  const toggleLock = (index) =>  {
    const updatedDice = [...dice];
    updatedDice[index].locked = !updatedDice[index].locked;
    setDice(updatedDice);
    //logLockedState(updatedDice);
  }
  // rolls dice that are not locked and updates the dice values
  const rollDice = () => {
    const rolledDice = dice.map(die => (die.locked ? die : { ...die, rolling: true, value: rollDie()}));
    setDice(rolledDice);
    setTimeout(() => {
      const finishedDice = rolledDice.map(die => ({ ...die, rolling: false }));
      setDice(finishedDice);
      generateCounts(finishedDice);
      generateSum(finishedDice);
      returnRollValues(finishedDice)
    }, 800);
    }
  // returns a random number 1 - 6
  const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
  }
  const generateCounts = (dice) => {
    let updatedCounts = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 5; i++) {
      updatedCounts[(dice[i].value ) -1 ] += 1;
    }
    setCounts(updatedCounts);
  }
  const generateSum = (dice) => {
    let sum = 0;
    for (let i = 0; i < 5; i++) {
      sum += dice[i].value;
    }
    setDiceValueSum(sum);
  }

  const returnRollValues = (dice) => {
    const values = []
    for (let i = 0; i < 5; i++) {
      values.push(dice[i].value)
    }
    setValues(values);
  }

  return (
    <div className="wrapper">
      <div className={`dice-container ${props.isHovered && 'light-up'}`}>
        { dice.map((die, index) => (
          <Die key={index} value={die.value} locked={die.locked} rolling={die.rolling} onClick={() => toggleLock(index)}/>
        ))}
      </div>
      <RollDiceButton onBtnHover={props.onBtnHover} onRoll={rollDice}/>
    </div>
  )
}
export default DiceContainer;
