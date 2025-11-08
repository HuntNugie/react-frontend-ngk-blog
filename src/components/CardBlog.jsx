const CardBlog = ({title,body}) => {
    return (
        <>
            {/* Post Card 1 */}
            <div className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                <img src="https://pintaar.com/storage/course_picture/KJMaqOmCNiMe4USlckLcUlJzPKfQhEt8Z8WqWMhv.png" alt="Post Image" className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-gray-600 mb-4">
                       {body}
                    </p>
                    <a href="#post1" className="text-blue-500 hover:underline">
                        Read More
                    </a>
                </div>
            </div>
        </>
    );
};

export default CardBlog;
