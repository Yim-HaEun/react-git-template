//theme 불러오는 코드 작성
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ChildTwoComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <p>현재 테마는 : {theme}이다. </p>
    </div>
  );
};
export default ChildTwoComponent;
