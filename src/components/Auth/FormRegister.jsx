import {useState} from "react";
import {register} from "../../../service/request";
const FormRegister = () => {
    const [form, setForm] = useState({
        nama: "",
        email: "",
        password: "",
        confirmPass: "",
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const regis = await register(form);

            // ini response nya
            console.log(regis.message);
            setForm({
                nama: "",
                email: "",
                password: "",
                confirmPass: "",
            });
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <form className="space-y-6 text-left" onSubmit={handleSubmit}>
                {/* Nama */}
                <div>
                    <label className="block text-sm font-semibold mb-1">Nama</label>
                    <input
                        type="text"
                        name="nama"
                        placeholder="Masukkan nama lengkap"
                        value={form.nama}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-semibold mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
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
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Konfirmasi Password */}
                <div>
                    <label className="block text-sm font-semibold mb-1">Konfirmasi Password</label>
                    <input
                        type="password"
                        placeholder="Ulangi password"
                        name="confirmPass"
                        value={form.confirmPass}
                        onChange={handleChange}
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
        </>
    );
};

export default FormRegister;
