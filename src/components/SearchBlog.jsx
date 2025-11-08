const SearchBlog = () => {
    return (
        <>
            <div className="flex justify-center mb-8">
                <input
                    type="text"
                    placeholder="Search posts..."
                    className="w-full sm:w-1/2 p-3 border rounded shadow focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>
        </>
    );
};
export default SearchBlog;