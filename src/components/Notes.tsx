
interface Props {
	title: string;
	content: string;
}

const Notes = ({title, content}: Props) => {
	
	return (
		<div className="w-full bg-yellow-200 h-[10vh] rounded-lg p-5">
			<h2>{title}</h2>	
			<p>{content}</p>
		</div>
	)
}

export default Notes