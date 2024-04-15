import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, SetKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`🔎 Searching for the definition of ${keyword}`);
  }

  function changeKeyword(event) {
    SetKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word"
          onChange={changeKeyword}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
