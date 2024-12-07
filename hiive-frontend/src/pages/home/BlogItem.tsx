import { Post } from "../../hiive/types/api.ts"

export function BlogItem({blog}: {blog: Post}){
    return (
        <>
            <div className="bg-white w-full rounded-b-lg lg:rounded-b-none lg:rounded-r-lg py-4 flex flex-col justify-between leading-normal">
                <div className="mb-3">
                    <div className="text-gray-900  font-bold text-xl mb-2">
                        {blog.title}
                    </div>
                    <p className="text-gray-700 text-base">
                        {blog.description}
                    </p>
                </div>
                <div className="flex items-center">
                    <div className="text-sm">
                        <p className="text-gray-600 text-sm">{blog.inserted_at.diff}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
