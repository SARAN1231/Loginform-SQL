import "./index.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { useState } from "react";

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const handleregisterclick = () => {
    setShowRegister(true);
  };
  const handleBackToLogin = () => {
    setShowRegister(false);
  };
  return (
    <div className="App">
      {showRegister ? (
        <Register onBackToLogin={handleBackToLogin} />
      ) : (
        <Login onRegisterClick={handleregisterclick} />
      )}
    </div>
  );
}

export default App;
