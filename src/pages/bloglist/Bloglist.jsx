import Blog from "../../components/blog/Blog"

function Bloglist() {

  return (
    <div className="flex">
        <div className="p-3 m-5">
            <h1 className="text-3xl font-bold">BLOG LIST</h1>
        </div>
        <div className="grid grid-cols-3 p-5 m-5">
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
        </div>
    </div>
   

  )
}

export default Bloglist
