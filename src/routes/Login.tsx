

const Login = () => {
	return (
		<section className="h-screen w-screen flex items-center justify-center bg-login flex-col">

			<div className="bg-glass h-[70vh] w-[75vw] rounded-lg p-10 relative overflow-hidden">
			<h2 className="flex justify-center text-purple-950 mt-8 text-3xl font-semibold">
				<span className='text-red-400'>L</span>ogin
			</h2>
			
			<div className="flex justify-center	mt-20 gap-8 flex-col">
			<input type="text" className="h-10 bg-transparent text-white border-2 border-white gradient-border placeholder-white pl-2 rounded-lg" placeholder="Username" />

			<input type="password" className="h-9 bg-transparent text-white border-2 border-white placeholder-white pl-2 rounded-lg" placeholder="Password" />
			</div>

			<button type="button" className="mt-9 h-14 text-white bg-rose-400 w-full flex justify-center items-center rounded-lg">Login</button>

			<p className="flex justify-center mt-8 text-white gap-2">No Account? <span className="text-red-600">Sign Up</span></p>
			</div>

		</section>
	)
}

export default Login