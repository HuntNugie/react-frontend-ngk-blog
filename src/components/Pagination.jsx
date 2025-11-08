const Pagination = () => {
    return (
        <>
            {/* Pagination */}
            <div className="flex justify-center mt-8 space-x-2">
                <button className="px-3 py-1 rounded bg-blue-500 text-white">1</button>
                <button className="px-3 py-1 rounded bg-white border text-gray-700 hover:bg-gray-100">2</button>
                <button className="px-3 py-1 rounded bg-white border text-gray-700 hover:bg-gray-100">3</button>
            </div>
        </>
    );
};

export default Pagination;
