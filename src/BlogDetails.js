import useAxios from "axios-hooks";
import { useParams } from "react-router-dom";


const BlogDetails = () => {
    const { title } = useParams();

    const [{ data:blogs, loading, error}] = useAxios('http://localhost:8000/blogs/' + title)
    return ( 
        <div className="blog-details">
            {error && <div>{error}</div>}
            {loading && <div>Loading........</div>}
            {blogs && 
                <article>
                    <h2>{blogs.title.replace( /([A-Z])/g, " $1" ).split('_').join(' ').toUpperCase()}</h2>
                    <p>Written By: {blogs.author}</p>
                    <div>{blogs.body}</div>
                </article>
            }
        </div>
     );
}
 
export default BlogDetails;