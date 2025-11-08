const DashboardPage = () => {
    return (
        <>
            {/* DASHBOARD HOME SECTION */}
            <section id="dashboard-home">
                <h1 className="text-3xl font-bold mb-6">Welcome Back!</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white rounded shadow text-center">
                        <h3 className="text-xl font-bold mb-2">Total Posts</h3>
                        <p className="text-gray-600">—</p>
                    </div>
                    <div className="p-6 bg-white rounded shadow text-center">
                        <h3 className="text-xl font-bold mb-2">Visitors</h3>
                        <p className="text-gray-600">—</p>
                    </div>
                    <div className="p-6 bg-white rounded shadow text-center">
                        <h3 className="text-xl font-bold mb-2">Drafts</h3>
                        <p className="text-gray-600">—</p>
                    </div>
                </div>
            </section>
            
        </>
    );
};

export default DashboardPage;