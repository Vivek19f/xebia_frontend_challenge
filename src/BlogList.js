import {Link} from 'react-router-dom';

const BlogList = ({blogs, title}) => {
    
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.title}>
                    <Link to={`/blogs/${blog.title.replace( /([A-Z])/g, " $1" ).split(' ').join('_').toLowerCase()}`}>
                        <h2>{blog.title.replace( /([A-Z])/g, " $1" ).split('_').join(' ').toUpperCase()}</h2>
                        <p>{blog.body.split("\n")[0]}</p>
                    </Link>
                    
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;