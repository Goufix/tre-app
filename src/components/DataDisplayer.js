import React from 'react';
import parseData from '../actions/parseData';

export default function DataDisplayer(props) {
  const parsedData = parseData(props.data);
  return (
    <>
      <p>Dados a serem tratados: {parsedData}</p>
    </>
  );
}
