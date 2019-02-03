import React, { useState } from 'react';
import { INPUT_SCREEN } from './SwitchScreen';
let response = '';

export function write() {
  const arrayResp = response.split('\n');
  alert(arrayResp);
}

export default function InputScreen() {
  const [input, setInput] = useState('');
  function count(e) {
    response += input;
    e.preventDefault();
    write();
  }

  function handleInput(e) {
    setInput(e.target.value);
  }
  return (
    <>
      <h1>
        Na tela <samp>{INPUT_SCREEN} (input)</samp>.
      </h1>
      <hr />
      <form onSubmit={count}>
        <textarea value={input} onChange={handleInput} />
        <input type="submit" value="Gerar" />
      </form>
    </>
  );
}
