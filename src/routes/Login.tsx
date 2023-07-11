import { useState } from "react";
import { useStateContext } from "../context/AuthContext";

interface Props {
	setIsLogin: (value: boolean) => void;
}

const Login = ({setIsLogin}: Props) => {

	const [usernameInfo, setUsername] = useState("");
	const [passwordInfo, setPassword] = useState("");


	const { setUserId } = useStateContext();


	const handleLogin = async () => {
		const url = "https://localhost:7045/api/Auth/login";
	
		try {
		const response = await fetch(url, {
			method: "POST",
			headers: new Headers({
			"Content-Type": "application/json",
			accept: "text/plain",
			}),
			body: JSON.stringify({
			username: usernameInfo,
			password: passwordInfo,
			}),
		});
	
		if (response.ok) {
			const responseBody = await response.text();

			const tokenParts = responseBody.split(".");
			if (tokenParts.length === 3) {
			const payload = JSON.parse(atob(tokenParts[1]));
			const userId = payload.id; 
			console.log("User ID:", userId);
			setUserId(userId);
			setIsLogin(true);

			} else {
			console.error("Invalid token format");
			}
		} else {
			console.error("Error fetching notes:", response.status);
		}
		} catch (error) {
		console.error("Error fetching notes:", error);
		}
	};

	return (
		<section className="h-screen w-screen flex items-center justify-center bg-login flex-col">

			<div className="bg-glass h-[70vh] w-[75vw] rounded-lg p-10 relative overflow-hidden">
			<h2 className="flex justify-center text-purple-800 mt-8 text-3xl font-semibold">
				<span className='text-red-300'>L</span>ogin
			</h2>
			
			<div className="flex justify-center	mt-20 gap-8 flex-col">
			<input 
			type="text" 
			className="h-10 bg-transparent text-white border-2 border-white gradient-border placeholder-white pl-2 rounded-lg" 
			placeholder="Username"
			onChange={(e) => setUsername(e.target.value)}
			/>

			<input 
			type="password"
			className="h-9 bg-transparent text-white border-2 border-white placeholder-white pl-2 rounded-lg"
			placeholder="Password"
			onChange={(e) => setPassword(e.target.value)}
			/>
			</div>

			<button onClick={handleLogin} type="button" className="mt-9 h-14 text-white bg-rose-400 w-full flex justify-center items-center rounded-lg">Login</button>

			<p className="flex justify-center mt-8 text-white gap-2">No Account? <span className="text-red-600">Sign Up</span></p>
			</div>

		</section>
	)
}

export default Login