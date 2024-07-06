import './App.css';
import React from "react";

function Header() {
  return (
      <div>
    <h1>Header</h1>
      <Title/>
      </div>
  );
}


function Content() {
  return (
      <div>
          <h1>Content</h1>
          <Title/>
      </div>
  );
}

function Footer() {
  return (
      <div>
          <h1>Footer</h1>
          <Title/>
      </div>

  );
}

function Title() {
    return (
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    );
}

function App() {
  return (
      <div className='App'>
        <Header/>
        <Content/>
        <Footer/>
      </div>

  );
}
export default App;
