import React, { useState } from 'react';
import InputScreen from './InputScreen';
import OutputScreen from './OutputScreen';

export default function generator() {
  const [data, setData] = useState(null);

  function handleSubmit(data) {
    setData(data);
  }

  return (
    <>
      <InputScreen onSubmit={handleSubmit} />
      {data && <OutputScreen data={data} />}
    </>
  );
}
