
import Login from "./Login";
import Home from "./Home";
import { useState } from "react";
import { StateContext } from "../context/AuthContext";

const App = () => {

	const [isLogin, setIsLogin] = useState(false)


return (
	<StateContext>
	{isLogin ? <Home /> : <Login setIsLogin={setIsLogin} />}
	</StateContext>
);
};

export default App;