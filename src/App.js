import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer nombre="Tomas" apellido="Holder" />
    </div>
  );
}

export default App;
