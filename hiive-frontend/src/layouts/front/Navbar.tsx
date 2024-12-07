function Navbar() {
    return (
        <>
            <div className="bg-gray-300 md:px-20 px-2">
                <div className="container mx-auto flex justify-between whitespace-no-wrap overflow-x-auto overflow-y-hidden py-2">
                    <a href="/" className="flex items-center">
                        <div className="px-2">
                            Hiive's Blog
                        </div>
                    </a>
                    <div className="flex">
                        <div className="px-3 py-3">
                            <a href="/">Blogs</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
