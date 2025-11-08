import CardBlog from "./CardBlog";

const Post = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">Featured Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <CardBlog title="ini adalah title 1" body="ini adalah body 1"/>
        <CardBlog title="ini adalah title 2" body="ini adalah body 2"/>
        <CardBlog title="ini adalah title 3" body="ini adalah body 3"/>
      </div>
    </section>
  );
};

export default Post
