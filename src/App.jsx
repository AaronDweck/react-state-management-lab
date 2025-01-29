import { useState } from "react";
import './App.css'

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ])

  let totalStrength = team.reduce((accumulator, currentValue) => accumulator + currentValue.strength, 0)
  let totalAgility = team.reduce((accumulator, currentValue) => accumulator + currentValue.agility, 0)

  function handleAddFighter(fighter) {
    if (money < fighter.price) {
      window.alert('Not enough money')
    } else {
      setTeam([...team, fighter])
      setZombieFighters(zombieFighters.filter(zombieFighter => zombieFighter.id !== fighter.id))
      setMoney(money - fighter.price)
    }
  }

  function handleRemoveFighter(fighter) {
    setTeam(team.filter(zombieFighter => zombieFighter.id !== fighter.id))
    setZombieFighters([...zombieFighters, fighter])
    setMoney(money + fighter.price)
  }

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength: {team.length === 0 ? 0 : totalStrength}</h2>
      <h2>Team Agility: {team.length === 0 ? 0 : totalAgility}</h2>
      <h2>Team: </h2>
      {
        team.length === 0 ? <p>Pick some team members!</p> :
          <ul>
            {team.map((zombieFighter, index) => <li key={index}>
              <img src={zombieFighter.img} alt="zombie fighter" />
              <p>Name: {zombieFighter.name}</p>
              <p>Price: {zombieFighter.price}</p>
              <p>Strength: {zombieFighter.strength}</p>
              <p>Agility: {zombieFighter.agility}</p>
              <button onClick={() => handleRemoveFighter(zombieFighter)}>Remove</button>
            </li>)}
          </ul>
      }
      <h2>Fighters: </h2>
      <ul>
        {zombieFighters.map((zombieFighter, index) => <li key={index}>
          <img src={zombieFighter.img} alt="zombie fighter" />
          <p>Name: {zombieFighter.name}</p>
          <p>Price: {zombieFighter.price}</p>
          <p>Strength: {zombieFighter.strength}</p>
          <p>Agility: {zombieFighter.agility}</p>
          <button disabled={zombieFighter.price > money} onClick={() => handleAddFighter(zombieFighter)}>Add</button>
        </li>)}
      </ul>
    </>
  );
}

export default App
