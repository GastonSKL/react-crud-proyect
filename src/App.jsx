import { useState } from "react";
import { CrudApi } from './Components/CrudApi'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CrudApi />
    </>
  );
}

export default App;
