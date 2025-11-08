import CardBlog from "../components/CardBlog";
import Pagination from "../components/Pagination";
import SearchBlog from "../components/SearchBlog";

const BlogPage = () => {
  return (
    <>
   <section id="blog" className="py-16 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-6">Latest Blog Posts</h2>

      {/* Search Input */}
      <SearchBlog/>

      {/* Post Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
       <CardBlog title="react js" body="ini react js"/>
       <CardBlog title="express js" body="ini express js"/>
       <CardBlog title="react native" body="ini react native"/>
       <CardBlog title="php native" body="ini php native"/>
       <CardBlog title="laravel framework" body="ini laravel framework"/>
       <CardBlog title="polka js" body="ini polka js"/>

       
      </div>

      <Pagination/>
    </section>
  </>
  );
};

export default BlogPage;