import logo from './imgbin-naruto-uzumaki-karin-kushina-uzumaki-clan-naruto-h72DeDBG1rsiMKhHhAxZzQ9eT.png';
import './App.css';
import './bootstrap.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-dark">
          <div class="container-fluid">
          <a class="navbar-brand" href="#header">
          <img src={logo} className="App-logo" alt="logo" />
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent"> 
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#header">Home</a>
        </li>
        <li class="nav-item" >
          <a class="nav-link" href="#portfolio">Work</a>
        </li>
        <li class="nav-item" >
          <a class="nav-link" href="#about">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact" >Contact</a>
        </li>
      </ul>
          </div>
          </div>
      </nav>

    </div>
  );
}

export default App;
