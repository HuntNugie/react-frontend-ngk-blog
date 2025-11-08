import { Link } from "react-router-dom";

const ButtonNavigation = ({path,name}) => {
    return (
        <>
            <Link to={path} className="block px-4 py-2 rounded hover:bg-gray-800 transition">
                {name}
            </Link>
        </>
    );
};

export default ButtonNavigation;
