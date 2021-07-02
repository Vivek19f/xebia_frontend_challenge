import { useState } from "react";
import BlogList from "./BlogList";
import Fuse from 'fuse.js'
import useAxios from 'axios-hooks'

const Blogs = () => {
    
    const [{ data:blogs, loading, error}] = useAxios('http://localhost:8000/blogs')
    
    const [data, setData ] = useState()
    const [toggle, setToggle] = useState(false);    
    const searchData = (pattern) => {
        if (!pattern) {
          setData(blogs);
          return;
        }
    
        const fuse = new Fuse(blogs, {
          keys: ["title"],
        });
    
        const result = fuse.search(pattern);
        const matches = [];
        if (!result.length) {
          setData([]);
        } else {
          result.forEach(({item}) => {
            matches.push(item);
          });
        //   console.log(matches)
          setData(matches);
          setToggle(true)
        }
      };

    return ( 
        <div className="blogs">
            <input
                    type="search"
                    onChange={(e) => searchData(e.target.value)}
                    placeholder="Search Blog"
                    
                />
            {error && <div>{error}</div>}
            {loading && <div>Loading........</div>}
            { toggle ? [data && <BlogList blogs={data} title="All Blogs!"/>]:[blogs && <BlogList blogs={blogs} title="All Blogs!"/>]}
        </div>
     );
}
 
export default Blogs;