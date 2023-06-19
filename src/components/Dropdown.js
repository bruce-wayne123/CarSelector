import { useState } from "react";
import "../styles/Dropdown.css"
const Dropdown = () => {

    const [isActive, setActive] = useState(false);
    const [list] = useState(['Tata', 'BMW','Tesla',"VolksWagen"]);
    const [value, setValue] = useState('');

    const onClickHandeler = (e) => {
        setValue(e.target.textContent);
        setActive(false);
    };

    const onMouseHover = () => {
        setActive(true);
    };

    const results = list.map((result, index) => {
        return <a href="#" onClick={onClickHandeler} key={index}>{result}</a>;
    });

    return (
        <div className="dropdown">
            <h1>Please select your car model</h1>
            <h2>{value}</h2>
            <button className="dropbtn" onMouseEnter={onMouseHover}>Select</button>
            <div className="dropdown-content" style={{ display: `${isActive ? 'block' : 'none'}` }}>
                {results}
            </div>
        </div>
    );
}

export default Dropdown;