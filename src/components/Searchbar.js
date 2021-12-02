import { useState, useContext } from "react";
import ShowsContext from '../context/context'

function Searchbar() {
  const [query, setQuery] = useState("");
  const {searchShows} = useContext(ShowsContext);


  function changeHandler(event) {
    let value = event.target.value;
    setQuery(value);
  }

  function submitHandler(event) {
    event.preventDefault();
    searchShows(query);
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