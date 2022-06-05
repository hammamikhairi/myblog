import useFetch from "../Hooks/useFetch";
import Blogs from "./Blogs-card";
import "./blogs.sass";


const DaBlog = () => {

  const { data, isPending, error } = useFetch("https://myblog.hammamikhairi.repl.co/blogs")
  return (
    <div className="blogs-container">
      {/* <BlogsNavbar /> */}
      <div>
        {error? <h1>Error</h1> : null}
        {isPending ? <h1>loading</h1> : <Blogs blogs={data} /> }
      </div>
    </div>
  );
}

export default DaBlog;