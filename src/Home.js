import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('Itua');
    const [age, setAge] = useState(25);
    const [first, setFirst] = useState('');

    const handleClick = (e) => {
        setName('Marcel');
        setAge(28);
        setFirst('While')
    };
    

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ first } { name } is { age } years old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>

     );
}
 
export default Home;