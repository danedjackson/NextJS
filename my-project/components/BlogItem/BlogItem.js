const BlogItem = (props) => {
    const {title, image, description, details} = props;
    return (
        <div className = "max-w-sm mx-auto overflow-hidden rounded shadow-lg py-5">
            <img className = "w-full h-60" src = {image} alt = {title} />
            <div className = "px-6 py-4 ">
                <center>
                    <div className = "mb-2 text-xl font-bold">{title}</div>
                    <p className = "text-base text-gray-700">{description}</p>
                </center>
            </div>
            <div className = "text-center">
                <button className = "px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">
                    Read More. . .
                </button>
            </div>
        </div>
    );
}

export default BlogItem;