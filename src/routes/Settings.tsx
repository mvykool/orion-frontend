import BackBtn from "../components/BackBtn"

const Settings = () => {
	return (
		<div className="h-screen w-screen bg-gray-900 px-5">

		<BackBtn/>

			<div className="flex justify-center pt-48">
			<img src="https://i.kym-cdn.com/photos/images/original/002/355/086/887.png" alt="" className="h-36 w-36 rounded-full"/>
			</div>

			<h3 className="text-white font-semibold text-3xl flex justify-center mt-5">Username</h3>

			<p className="text-white font-semibold text-xl flex justify-center mt-10">2 Notes</p>

			<div className="flex justify-center">
			<button className="mt-10 bg-gray-700 text-red-500 py-2 px-3 text-xl rounded-lg">Log out</button>
			</div>
		</div>
	)
}

export default Settings