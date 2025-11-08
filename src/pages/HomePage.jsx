import Post from "../components/Post";

const HomePage = () => {
  return (
    <>
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-6"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Welcome to My Blog
      </h1>
      <p className="text-gray-700 text-lg md:text-xl max-w-3xl mb-6">
        Blog ini dibuat untuk berbagi ilmu, tips, dan pengalaman seputar web
        development, desain, dan teknologi.
      </p>
      <a
        href="#blog"
        className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Explore Posts
      </a>
    </section>
    <Post/>
  </>
  );
};
export default HomePage;