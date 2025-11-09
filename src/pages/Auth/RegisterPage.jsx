import {Link} from "react-router-dom";
import FormRegister from "../../components/Auth/FormRegister.jsx";
const RegisterPage = () => {
    return (
        <>
            <section id="register" className="py-20 px-6 bg-gray-50 flex justify-center">
                <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
                    {/* Title */}
                    <h2 className="text-4xl font-bold text-center mb-2">Register</h2>
                    <p className="text-gray-600 text-center mb-8">Daftar untuk membuat akun baru.</p>

                    {/* Form */}
                    <FormRegister />

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
        </>
    );
};

export default RegisterPage;
