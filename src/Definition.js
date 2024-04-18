import React from "react";

export default function Definition(props) {
  console.log(props.definition);
  console.log(props.definition.meanings);

  if (props.definition) {
    let meanings = props.definition.meanings;
    return (
      <div className="Definition">
        <h2>{props.definition.word}</h2>
        <div>{props.definition.phonetic}</div>
        {meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <h4>{meaning.partOfSpeech}</h4>
              <p>{meaning.definition}</p>
              <p>{meaning.example}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return "";
  }
}
