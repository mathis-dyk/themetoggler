import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'
import Button from './components/Button'
import './index.scss'
import ThemeContext, { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeContext.Consumer>
      {(value) => (
        <div className={`app ${theme}`}>
          <main>
            {value.counter}
            <Card />
            <Button />
          </main>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

ReactDOM.render(<ThemeProvider><App /></ThemeProvider>, document.querySelector("#root"))
