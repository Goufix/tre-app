import React, { useState } from 'react';
import InputScreen from '../screens/InputScreen';
import OutputScreen from './Output';

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
