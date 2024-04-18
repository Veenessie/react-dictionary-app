import React, { useState } from "react";
import axios from "axios";
import Definition from "./Definition";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, SetKeyword] = useState("");
  let [definition, SetDefinition] = useState("");
  let [photos, setPhotos] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    SetDefinition(response.data);
  }

  function handlePexelsResponse(response) {
    console.log(response.data.photos);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "7b12a4c8c3fba7979089o3b3ff6teab1";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "ifRCfBWcw3y4NjXjBZoxpWxkTQD78pWiStxgNqHeTenqJe680b4oE1At";
    let pexelsApiURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `${pexelsApiKey}` };

    axios.get(pexelsApiURL, { headers: headers }).then(handlePexelsResponse);
  }

  function changeKeyword(event) {
    SetKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search for a word"
            onChange={changeKeyword}
          />
        </form>
      </section>
      <Definition definition={definition} />
      <Photos photos={photos} />
    </div>
  );
}
