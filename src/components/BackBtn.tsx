import { Link } from "react-router-dom"


const BackBtn = () => {
return (
	<Link to={"/"} className="h-14 w-14 bg-white rounded-full flex justify-center items-center fixed left-8 top-10">
		Back
	</Link>
)
}

export default BackBtn