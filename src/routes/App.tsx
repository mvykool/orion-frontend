
import Login from "./Login";
import Home from "./Home";
import { useState } from "react";

const App = () => {

	const [isLogin, setIsLogin] = useState(false)

  return (
    <div>
      {isLogin ? <Home /> : <Login />}
    </div>
  );
};

export default App;