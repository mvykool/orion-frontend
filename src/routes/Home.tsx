import Notes from "../components/Notes"
import AddBtn from "../components/AddBtn"

const Home = () => {
  return (
    <div className="h-screen w-screen bg-gray-900 px-5">

      <div className="flex justify-between py-8 px-3 items-center">
      <h1 className="text-white text-4xl">Notes</h1>
      <img src="https://i.kym-cdn.com/photos/images/original/002/355/086/887.png" alt="" className="h-12 w-12 rounded-full"/>
      </div>

    <div className="flex justify-center px-2">
    <input type="text" placeholder="search" className="h-10 rounded-lg bg-gray-700 px-3 w-full" />
    </div>

      <div className="mt-10 gap-5 flex flex-col">
      <Notes/>
      <Notes/>
      </div>

      <AddBtn/>
    </div>
  )
}

export default Home