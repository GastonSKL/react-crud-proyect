import { useState } from "react";
import { CrudApi } from './Components/CrudApi'
import './App.css'
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-container">
      <CrudApi />
    </div>
  );
}

export default App;
