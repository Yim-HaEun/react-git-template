import './App.css';
//import { /*ThemeContext,*/ ThemeProvider } from './ThemeContext';
//import ChildComponent from './ChildComponent';
//import UserInfo from './UserInfo';
//import Counter from './ReducerCount';
//import Quiz from './Quiz';
import NumberGuessingGame from '../../react-game/src/NumberGuessingGame';
//import ThemeToggleButton from './ThemeToggleButton';
//.Provider :해당 컴포넌트를
//통해서 ThemeContext 안에 있는
//컴포넌트 들한테 객체 값을 공유하고
//읽을 수 있도록 해줌
function App() {
  return (
    //<ThemeProvider>*/}
    <div>
      <NumberGuessingGame />
      {/*<Quiz />*/}
      {/*<h1>테마 변경</h1>*/}
      {/*<ThemeToggleButton />*/}
    </div>
    //</ThemeProvider>
  );
}
export default App;

/*return (
    <ThemeContext.Provider value={theme}>
      <ChildComponent />
      <ChildTwoComponent/>
    </ThemeContext.Provider>
  );*/
