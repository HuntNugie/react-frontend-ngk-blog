import CardBlog from "../components/CardBlog";

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
       <CardBlog title="react js" body="ini react js"/>
       <CardBlog title="express js" body="ini express js"/>
       <CardBlog title="react native" body="ini react native"/>
       <CardBlog title="php native" body="ini php native"/>
       <CardBlog title="laravel framework" body="ini laravel framework"/>
       <CardBlog title="polka js" body="ini polka js"/>

       
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