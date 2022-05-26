import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:7000/blogs');
    //   const [name, setName] = useState('mario');

    return ( 
        <div className="home">
            { error && <div> { error } </div> }
            { isPending && <div>Loading... </div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
            {/* <p>{ name }</p> */}
            {/* <button onClick={() => setName('Itua')}>change name</button> */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )} title="Mario Blogs!" /> */}
        </div>

     );
}
 
export default Home;