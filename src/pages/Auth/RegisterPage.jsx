import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (<>
        <section id="register" className="py-20 px-6 bg-gray-50 flex justify-center">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-2">Register</h2>
                <p className="text-gray-600 text-center mb-8">
                    Daftar untuk membuat akun baru.
                </p>

                {/* Form */}
                <form className="space-y-6 text-left">

                    {/* Nama */}
                    <div>
                        <label className="block text-sm font-semibold mb-1">Nama</label>
                        <input
                            type="text"
                            placeholder="Masukkan nama lengkap"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-semibold mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Masukkan email"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-semibold mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Masukkan password"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Konfirmasi Password */}
                    <div>
                        <label className="block text-sm font-semibold mb-1">Konfirmasi Password</label>
                        <input
                            type="password"
                            placeholder="Ulangi password"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
                    >
                        Daftar
                    </button>
                </form>

                {/* Divider */}
                <div className="my-8 flex items-center">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="mx-3 text-sm text-gray-500">atau</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                {/* Login Link */}
                <p className="text-center text-gray-600">
                    Sudah punya akun?{" "}
                    <Link to="/login" className="text-blue-600 font-semibold hover:underline">
                        Masuk di sini
                    </Link>
                </p>

            </div>
        </section>
    </>);
}

export default RegisterPage;