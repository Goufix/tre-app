import React from 'react';
import styled from 'styled-components';

const Output = styled.pre`
  border: solid 1px;
  padding: 1rem;
`;

function Data(props) {
  return (
    <Output>
      <p>{props.data}</p>
    </Output>
  );
}

export default function OutputScreen(props) {
  return (
    <Output>
      {props.data.map((data, index) => {
        return <Data data={data} />;
      })}
    </Output>
  );
}
