import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/app';
import "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyA8zHuUzK0S_rv7y91DF9f2hEKIY_QIdas",
    authDomain: "corded-cinema-283913.firebaseapp.com",
    projectId: "corded-cinema-283913",
    storageBucket: "corded-cinema-283913.appspot.com",
    messagingSenderId: "814903168271",
    appId: "1:814903168271:web:c4519b95f61ad56c6c027a"
  };
firebase.initializeApp(firebaseConfig)


const auth = firebase.auth()

function App() {
  auth.onAuthStateChanged(user=>{
  console.log(user)
  console.log(localStorage.getItem("expirationDate"))
  console.log(localStorage.getItem("r_expirationDate"))
})
console.log("helo")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
