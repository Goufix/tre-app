import React from 'react';
import styled from 'styled-components';
import BBCode from './BBCode';
import DataDisplayer from './DataDisplayer';

const Output = styled.pre`
  border: solid 1px;
  padding: 0;
`;

export default function OutputScreen(props) {
  const array = props.data.reverse();
  return (
    <Output>
      {array.map((data, index, array) => {
        if (index === array.length - 1) {
          return <DataDisplayer data={data} />;
        } else {
          return <BBCode data={data} />;
        }
      })}
    </Output>
  );
}
