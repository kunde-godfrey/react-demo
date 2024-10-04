import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [visibility, setVisibility] = useState(false);
  return (
    <div>
      {visibility && (
        <Alert onClose={() => setVisibility(false)}>Hello Word</Alert>
      )}
      <Button colour="primary" onClick={() => setVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
