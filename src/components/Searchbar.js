import { useState} from "react";


function Searchbar() {
  const [query, setQuery] = useState("");

  function changeHandler(event) {
    let value = event.target.value;
    setQuery(value);
  }

  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <div classname="searchbar">
      <form className="searchbar__form">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={changeHandler}
        />
        <button className="btn" onClick={submitHandler}>
        🔍
        </button>
      </form>
    </div>
  );
}

export default Searchbar;