import { Link } from "react-router"
import BlogList from "./BlogList.tsx"

function Home() {
    return (
        <>
            <div className="container mx-auto">
                <div className="flex justify-end my-2">
                    <Link to="/posts/create" className="px-2 py-2 bg-green-500 rounded text-white">
                        + Create a Post
                    </Link>
                </div>
                <BlogList/>
            </div>
        </>
    )
}

export default Home
