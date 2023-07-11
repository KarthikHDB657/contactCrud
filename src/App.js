import React, { useState } from 'react';
import './App.css';
import ContactForm from './Component/ContactForm';
import { Routes, Route } from 'react-router-dom';
import ContactList from './Component/ContactList';
import Navbar from './Component/Navbar';
import { ContactProvider } from './Context/ContactContext';

function App() {
  //const navigate = useNavigate();
  const [editingContact, setEditingContact] = useState(null);

  const handleCancelEdit = () => {
    setEditingContact(null);
  };

  return (
    <div className="App">
      <ContactProvider>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<ContactForm editingContact={editingContact} onCancel={handleCancelEdit} />}
          />
          <Route path="/contactList" element={<ContactList setEditingContact={setEditingContact} />} />
        </Routes>
      </ContactProvider>
    </div>
  );
}

export default App;
