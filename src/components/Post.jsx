const Post = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">Featured Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Post Image"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Belajar Tailwind CSS</h3>
            <p className="text-gray-600 mb-4">
              Tailwind mempermudah styling halaman web dengan utility class
              modern.
            </p>
            <a href="#post1" className="text-blue-500 hover:underline">
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
            <h3 className="text-xl font-bold mb-2">Tips React JS</h3>
            <p className="text-gray-600 mb-4">
              Belajar React untuk membuat UI dinamis dengan efisien.
            </p>
            <a href="#post2" className="text-blue-500 hover:underline">
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
            <h3 className="text-xl font-bold mb-2">HTML &amp; CSS Modern</h3>
            <p className="text-gray-600 mb-4">
              Teknik modern membuat layout responsif dengan Flex &amp; Grid.
            </p>
            <a href="#post3" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post
