import React from 'react';
import styled from 'styled-components';
import BBCode from './BBCode';
import DataDisplayer from './DataDisplayer';

const Style = styled.pre`
  border: solid 1px;
  padding: 0;
`;

export default function Output(props) {
  const array = props.data;
  return (
    <Style>
      {array.map((data, index, array) => {
        if (index === array.length - 1) {
          return <DataDisplayer data={data} />;
        } else if (index === 0) {
          return <BBCode nick={data} />;
        } else if (index === 1) {
          return <BBCode tag={data} />;
        } else if (index === 2) {
          return <BBCode position={data} />;
        } else if (index === 3) {
          return <BBCode weekRef={data} />;
        }
      })}
    </Style>
  );
}
