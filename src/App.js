import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';

function App() {

  

  return (
    <div className="App">
      <h3>Aprendiendo conceptos de React</h3>

      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <Greetings
          lang="es"
          
        />



    </div>
  );
}

export default App;
