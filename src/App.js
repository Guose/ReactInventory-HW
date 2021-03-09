import logo from './logo.svg';
import './counter.css';
import Jackets from './Jacket';
import Ties from './Ties';
import Shoes from './Shoes';
import Pants from './Pants';

function App() {
  return (
    <div>
      <Jackets startingCount= {1}/>
      <Ties startingCount= {5}/>
      <Shoes startingCount= {2}/>
      <Pants startingCount= {3}/>
    </div>
  );
}

export default App;
