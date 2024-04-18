import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

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
              <div>Definition: {meaning.definition}</div>
              <Example example={meaning.example} />
              <Synonyms synonyms={meaning.synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return "";
  }
}
