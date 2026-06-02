import Activity1 from './activity1.jsx'
import AgeChecker from './ageChecker.jsx';
import './App.css';
import Card from './Card.jsx'
import './Card.css'
import CardList from './cardList.jsx'
import Button from './Button.jsx'
function App() {

  return (
  <div className="card">
      <Activity1 username="ayush" textColor="red"/>
      <AgeChecker age={18}/>
      <AgeChecker age={15}/>
      <CardList/>
      <Button/>
  </div>

  );
}

export default App;
