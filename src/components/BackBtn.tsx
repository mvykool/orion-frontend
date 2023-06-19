

const BackBtn = () => {

	const handleBackBtn = () => {
		history.back();
	}

return (
	<button onClick={() => handleBackBtn()} className="h-14 w-14 bg-white rounded-full flex justify-center items-center fixed left-8 top-10">
		Back
	</button>
)
}

export default BackBtn