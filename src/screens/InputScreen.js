import React, { useState } from 'react';
import { INPUT_SCREEN } from './SwitchScreen';
import styles from '../styles/styles.css';

export function Write(props) {
  const arrayResp = props.data;
  return <p>{arrayResp}</p>;
}

export default function InputScreen() {
  const [input, setInput] = useState('');
  const [nick, setNick] = useState('');
  const [position, setPosition] = useState('');
  const [weekRef, setWeekRef] = useState('');
  const [tag, setTag] = useState('');
  function count(e) {
    return <Write data={input} />;
    e.preventDefault();
  }

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleNick(e) {
    setNick(e.target.value);
  }

  function handleTag(e) {
    setTag(e.target.value);
  }

  function handlePosition(e) {
    setPosition(e.target.value);
  }

  function handleWeek(e) {
    setWeekRef(e.target.value);
  }

  return (
    <>
      <hr />
      <form onSubmit={count}>
        <label>Nick:</label>
        <input type="text" value={nick} onChange={handleNick} />
        <br />
        <label>Patente:</label>
        <input type="text" value={position} onChange={handlePosition} />
        <br />
        <label>TAG:</label>
        <input type="text" value={tag} onChange={handleTag} />
        <br />
        <label>Semana de Referência:</label>
        <input type="text" value={weekRef} onChange={handleWeek} />
        <br />
        <label>Porcentagem Semanal:</label>
        <br />
        <textarea value={input} onChange={handleInput} />
        <input type="submit" value="Gerar" />
      </form>
    </>
  );
}
