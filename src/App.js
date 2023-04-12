// import axios from 'axios'
import './App.css';
import Banner from './Components/Banner/Banner';

import NavBar from './Components/NavBar/NavBar'
import RowPost from './Components/RowPost/RowPost';
import { Orginals,Action,HorrorMovies,Documentaries,Romantic,ComedyMovies } from './urls';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={Orginals} title="Netflix Orginals"/>
      <RowPost url={Action} title="Action" isSmall/>
      <RowPost url={HorrorMovies} title="Horror Movies" isSmall/>
      <RowPost url={Documentaries} title="Documenteries" isSmall/>
      <RowPost url={Romantic} title="Romantic" isSmall/>
      <RowPost url={ComedyMovies} title="Comedy" isSmall/>
      
    </div>
  );
}

export default App;
