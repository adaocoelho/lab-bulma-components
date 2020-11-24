import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './components/Navbar';
import FormField from './components/FormField';
import Button from './components/CoolButton';
import SignUp from './components/SignUp';



const App = () => {
  return (
<div className="App">
<Navbar />

<FormField label="Name" type="text" placeholder="e.g Alex Smith" />
<FormField label="E-mail" type="email" placeholder="e.g alexsmith@qualquercoisa.com" />
<Button />
<hr />
<SignUp />

</div>
  )



};

export default App;
