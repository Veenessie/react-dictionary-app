import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, SetKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    alert(`🔎 Searching for the definition of ${keyword}`);

    let apiKey = "7b12a4c8c3fba7979089o3b3ff6teab1";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
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
