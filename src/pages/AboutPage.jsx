const AboutPage = ()=>{
    return (<>
   {/* About Blog Section */}
<section id="about" className="py-16 px-6 bg-gray-50 text-center">
  <h2 className="text-4xl font-bold mb-6">About This Blog</h2>

  {/* Intro / Vision */}
  <p className="text-gray-700 max-w-3xl mx-auto mb-4">
    Welcome to our blog, a place to explore the latest trends in web development,
    design, and technology. Our goal is to provide insightful articles that help
    developers, designers, and tech enthusiasts stay updated.
  </p>
  <p className="text-gray-700 max-w-3xl mx-auto mb-8">
    We focus on delivering content that is practical, easy to follow, and SPA-friendly,
    so you can learn modern web development techniques efficiently.
  </p>

  {/* Blog Features */}
  <h3 className="text-2xl font-semibold mb-4">Features</h3>
  <div className="flex flex-wrap justify-center gap-4 mb-8">
    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">Responsive Layout</span>
    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">SPA Friendly</span>
    <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm">Searchable Posts</span>
    <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm">Clean UI</span>
    <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm">Newsletter Support</span>
  </div>

  {/* Categories */}
  <h3 className="text-2xl font-semibold mb-4">Topics & Categories</h3>
  <div className="flex flex-wrap justify-center gap-4 mb-8">
    <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm">Web Development</span>
    <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm">UI/UX Design</span>
    <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm">JavaScript</span>
    <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm">Frameworks</span>
    <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm">Tutorials</span>
  </div>

  {/* Blog Stats */}
  <h3 className="text-2xl font-semibold mb-4">Blog Stats</h3>
  <div className="flex flex-wrap justify-center gap-6">
    <div className="bg-white shadow rounded-lg p-4 w-36">
      <p className="text-3xl font-bold text-blue-500">120+</p>
      <p className="text-gray-600 text-sm">Posts Published</p>
    </div>
    <div className="bg-white shadow rounded-lg p-4 w-36">
      <p className="text-3xl font-bold text-green-500">8</p>
      <p className="text-gray-600 text-sm">Categories</p>
    </div>
    <div className="bg-white shadow rounded-lg p-4 w-36">
      <p className="text-3xl font-bold text-purple-500">15K+</p>
      <p className="text-gray-600 text-sm">Monthly Readers</p>
    </div>
  </div>
</section>

  </>);
}

export default AboutPage;