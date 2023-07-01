import './App.css';
import ContactForm from './Component/ContactForm';
import { Routes , Route } from 'react-router-dom'
import ContactList  from './Component/ContactList';
import Navbar from './Component/Navbar';
import { ContactProvider } from './Context/ContactContext';

function App() {
  return (
    <div className="App">
     <ContactProvider>
       <Navbar />
       <Routes>
         <Route exact path='/' component={ContactForm} element ={<ContactForm/>}/>
         <Route path='/contactList' element ={<ContactList/>}/>
       </Routes>
     </ContactProvider>
    </div>
  );
}

export default App;
