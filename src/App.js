 import './App.css';
import Headline from './Headline';
import Wrapper from './Wrapper';

function App() {
  return (
    <div className="App">
      <Headline />
      <Wrapper>
        <Headline />
      </Wrapper>
    </div>
  );
}

export default App;
