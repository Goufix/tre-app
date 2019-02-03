import React, { useState } from 'react';
import { INPUT_SCREEN } from './SwitchScreen';
import styles from '../styles/styles.css';

export function write(response) {
  const arrayResp = response.split('\n');
  alert(arrayResp);
}

export default function InputScreen() {
  const [input, setInput] = useState('');
  function count(e) {
    let response = input;
    e.preventDefault();
    write(response);
  }

  function handleInput(e) {
    setInput(e.target.value);
  }
  return (
    <>
      <hr />
      <form onSubmit={count}>
        <textarea value={input} onChange={handleInput} />
        <input type="submit" value="Gerar" />
      </form>
    </>
  );
}
