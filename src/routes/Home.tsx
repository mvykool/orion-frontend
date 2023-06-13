import Notes from "../components/Notes"

const Home = () => {
  return (
    <div className="h-screen w-screen bg-[var(--deep-blue)] px-8">

      <div className="flex justify-between py-8 items-center">
      <h1 className="text-white text-4xl">Notes</h1>
      <img src="https://i.kym-cdn.com/photos/images/original/002/355/086/887.png" alt="" className="h-12 w-12 rounded-full"/>
      </div>

      <input type="text" placeholder="search" className="w-full flex justify-center items-center h-10 rounded-lg bg-purple-900 px-3" />

      <div className="mt-10 gap-5 flex flex-col">
      <Notes/>
      <Notes/>
      </div>
    </div>
  )
}

export default Home