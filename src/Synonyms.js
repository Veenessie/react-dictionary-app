import React from "react";

export default function Synonyms(props) {
  let synonyms = props.synonyms;
  if (props.synonyms) {
    return (
      <div ClassName="Synonyms">
        <div>Synonyms: </div>
        <ul>
          {synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
