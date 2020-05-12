import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Button = () => {
  const { theme, toggle } = useContext(ThemeContext);

   return (
     <ThemeContext.Consumer>
       {() => (
         <button onClick={toggle}>mode</button>
       )}
     </ThemeContext.Consumer>
   );
}

export default Button
