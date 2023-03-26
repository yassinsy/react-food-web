import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';




function App() {
  return (
    <div>
     
     <html>

<body>
 <header>
       
     
     
        <ul class="navbar">
     
            <li><Link to="adminpage">admin</Link></li>
            <li><Link to="menupage">menu</Link></li>
            <li><Link to="propospage">propos de nous</Link></li>
            <li><Link to="contactpage">contact</Link></li>
            <Link to="registraionpage" class="btn-login" >inscription</Link>
          </ul>
    </header>
   <section class="banniere" id="banniere">
        <div class="contenu">
            <h2>que des plats délicieux</h2>
            <p>tous nos conseils pour un faire de bon plat</p>
      
            <Link to="loginpage" class="btn1" >se connecter</Link>
            <Link to="registraionpage" class="khaoula" >inscription</Link>
           
        </div>
    </section>
</body>
</html>
    
    </div>
  );
}

export default App;
