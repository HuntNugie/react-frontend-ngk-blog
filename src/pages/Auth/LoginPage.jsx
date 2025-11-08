import { Link } from "react-router-dom";

const LoginPage = ()=>{
    return (<>
    <section id="login" className="py-20 px-6 bg-gray-50 flex justify-center">
  <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
    
    {/* Title */}
    <h2 className="text-4xl font-bold text-center mb-2">Login</h2>
    <p className="text-gray-600 text-center mb-8">
      Silakan masuk untuk melanjutkan ke dashboard & fitur lainnya.
    </p>

    {/* Form */}
    <form className="space-y-6 text-left">
      {/* Username */}
      <div>
        <label className="block text-sm font-semibold mb-1">Username</label>
        <input
          type="text"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Masukkan username"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-semibold mb-1">Password</label>
        <input
          type="password"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Masukkan password"
        />
      </div>

      {/* Forgot Password */}
      <div className="text-right">
        <a href="#forgot" className="text-blue-500 text-sm hover:underline">
          Lupa password?
        </a>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
      >
        Login
      </button>
    </form>

    {/* Divider */}
    <div className="my-8 flex items-center">
      <div className="flex-grow h-px bg-gray-300"></div>
      <span className="mx-3 text-sm text-gray-500">atau</span>
      <div className="flex-grow h-px bg-gray-300"></div>
    </div>

    {/* Register Link */}
    <p className="text-center text-gray-600">
      Belum punya akun?{" "}
      <Link to="/register" className="text-blue-600 font-semibold hover:underline">
        Daftar Sekarang
      </Link>
    </p>

  </div>
</section>
</>)
}

export default LoginPage;