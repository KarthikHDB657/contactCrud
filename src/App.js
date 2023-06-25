import './App.css';
import ContactForm from './Component/ContactForm';
import { Routes , Route } from 'react-router-dom'
import ContactList  from './Component/ContactList';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
      <Route path='/' element ={<ContactForm/>}/>
      <Route path='/contactList' element ={<ContactList/>}/>
     </Routes>
   
    </div>
  );
}

export default App;
