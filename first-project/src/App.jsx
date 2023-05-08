import './App.css'

import menuIcon from '../src/assets/menu-top-xs.png';
import logo from '../src/assets/ironhack-logo-xs.png';
import icon1 from '../src/assets/icon1.png';
import icon2 from '../src/assets/icon2.png';
import icon3 from '../src/assets/icon3.png';
import icon4 from '../src/assets/icon4.png';



function App() {
  return <div className='App'>

  <div>
  <img src={logo} alt='Logo'/>
  <img src={menuIcon} alt='Menu'/>
  </div>
  <div>
    <h1>Say Hello to React JS</h1>
    <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
    <button>Awesome!</button>
  </div>
  <div>
    <div>
      <img src={icon1} alt='Icon1'/>
      <h3>Declarative</h3>
      <p>React makes it painless to create interactive UIs.</p>
    </div>
    <div>
      <img src={icon2} alt='Icon2'/>
      <h3>Components</h3>
      <p>Build encapsulated components that manage their state</p>
    </div>
    <div>
      <img src={icon3} alt='Icon3'/>
      <h3>Single-Way</h3>
      <p>A set of immutable values are passed to the components</p>
    </div>
    <div>
      <img src={icon4} alt='Icon4'/>
      <h3>JSX</h3>
      <p>Statically-typed, designed to run on modern browsers.</p>
    </div>
  </div>




  </div>
}
export default App