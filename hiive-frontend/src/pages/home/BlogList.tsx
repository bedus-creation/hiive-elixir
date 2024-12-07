import axios, { AxiosResponse } from "axios"
import useSWR from "swr"
import { Post } from "../../hiive/types/api.ts"
import { BlogItem } from "./BlogItem.tsx"

function BlogList() {
    const fetcher = async function(): Promise<Post[]> {
        let res: AxiosResponse<{ data: Post[] }> = await axios.get("http://localhost:4000/api/posts")
        return res.data.data
    }

    const { data, error, isLoading } = useSWR<Post[]>("/api/posts", fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return (
        <>
            <div className="container mx-auto">
                {data?.map((blog) => (
                    <BlogItem key={blog.id} blog={blog}/>
                ))}
            </div>
        </>
    )
}

export default BlogList
