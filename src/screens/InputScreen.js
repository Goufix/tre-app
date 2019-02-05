import React, { useState } from 'react';
import { INPUT_SCREEN } from './SwitchScreen';
import Write from './Write';
import '../styles/styles.css';

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
        <br />
        <input type="text" size="20" value={nick} onChange={handleNick} />
        <br />
        <label>Patente:</label>
        <br />
        <input
          type="text"
          size="20"
          value={position}
          onChange={handlePosition}
        />
        <br />
        <label>TAG:</label>
        <br />
        <input type="text" size="20" value={tag} onChange={handleTag} />
        <br />
        <label>Semana de Referência:</label>
        <br />
        <input type="text" size="20" value={weekRef} onChange={handleWeek} />
        <br />
        <br />
        <label>Porcentagem Semanal:</label>
        <textarea value={input} onChange={handleInput} />
        <input type="submit" value="Gerar" />
      </form>
    </>
  );
}
