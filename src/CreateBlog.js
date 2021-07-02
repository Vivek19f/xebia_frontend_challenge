import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [validate, setValidate] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory();

 

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)

        axios.post('http://localhost:8000/blogs', {
            title: title,
            body: body,
            author: author
        })
        .then(response => { 
            setIsLoading(false)
            history.push('/blogs');
        })
        .catch(error => {
            alert(error+"\n Please use a different title")
            setIsLoading(false)
        });
        
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label> Blog Title: </label>
                <input 
                    type="text"
                    required 
                    value={title}
                    placeholder="Choose a Unique Name"
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label> Blog Body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog Author:</label>
                <input 
                    type="text"
                    required 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />

                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Add Blog...</button>}
            </form>
            
        </div>
     );
}
 
export default CreateBlog;