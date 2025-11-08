const BlogPage = () => {
  return (
    <>
   <section id="blog" className="py-16 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-6">Latest Blog Posts</h2>

      {/* Search Input */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search posts..."
          className="w-full sm:w-1/2 p-3 border rounded shadow focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Post Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Post Card 1 */}
        <div className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Post Image"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Belajar Tailwind CSS</h3>
            <p className="text-gray-600 mb-4">
              Tailwind mempermudah styling halaman web dengan utility class modern.
            </p>
            <a href="#post1" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
        </div>

        {/* Post Card 2 */}
        <div className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Post Image"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Tips React JS</h3>
            <p className="text-gray-600 mb-4">
              Belajar React untuk membuat UI dinamis dengan efisien.
            </p>
            <a href="#post2" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
        </div>

        {/* Post Card 3 */}
        <div className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Post Image"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">HTML & CSS Modern</h3>
            <p className="text-gray-600 mb-4">
              Teknik modern membuat layout responsif dengan Flex & Grid.
            </p>
            <a href="#post3" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
        </div>
        <div className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Post Image"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Belajar Tailwind CSS</h3>
            <p className="text-gray-600 mb-4">
              Tailwind mempermudah styling halaman web dengan utility class modern.
            </p>
            <a href="#post1" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
        </div>

        {/* Post Card 2 */}
        <div className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Post Image"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Tips React JS</h3>
            <p className="text-gray-600 mb-4">
              Belajar React untuk membuat UI dinamis dengan efisien.
            </p>
            <a href="#post2" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
        </div>

        {/* Post Card 3 */}
        <div className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Post Image"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">HTML & CSS Modern</h3>
            <p className="text-gray-600 mb-4">
              Teknik modern membuat layout responsif dengan Flex & Grid.
            </p>
            <a href="#post3" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        <button className="px-3 py-1 rounded bg-blue-500 text-white">1</button>
        <button className="px-3 py-1 rounded bg-white border text-gray-700 hover:bg-gray-100">2</button>
        <button className="px-3 py-1 rounded bg-white border text-gray-700 hover:bg-gray-100">3</button>
      </div>
    </section>
  </>
  );
};

export default BlogPage;