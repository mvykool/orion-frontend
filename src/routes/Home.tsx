import Notes from "../components/Notes"
import AddBtn from "../components/AddBtn"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useStateContext } from "../context/AuthContext";

const Home = () => {

  const { userId } = useStateContext();
  
  //api call

  const [notes, setNotes] = useState([]);

  async function getNotes() {
    const url = `https://localhost:7045/api/Notes?userId=${userId}`;
  
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: new Headers({ 'Content-type': 'application/json'}),
      });
  
      if (response.ok) {
        const postFromServer = await response.json();
        console.log(postFromServer);
        setNotes(postFromServer);
      } else {
        console.error('Error fetching notes:', response.status);
      }
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  }
  
  useEffect(() => {
    getNotes();
  }, []);


  return (
    <div className="h-screen w-screen bg-gray-900 px-5">

      <div className="flex justify-between py-8 px-3 items-center">
      <h1 className="text-gray-300 text-4xl">Notes</h1>
      <Link to={"/settings"}><img src="https://i.kym-cdn.com/photos/images/original/002/355/086/887.png" alt="" className="h-12 w-12 rounded-full"/></Link>
      </div>

    <div className="flex justify-center px-2">
    <input type="text" placeholder="search" className="h-10 rounded-lg bg-gray-700 px-3 w-full" />
    </div>

    {notes.map((note: any) => (
        <div className="mt-10 gap-5 flex flex-col">
        <Notes title={note.title} content={note.content} />
        </div>
    ))}

      <AddBtn/>
    </div>
  )
}

export default Home