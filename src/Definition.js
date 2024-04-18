import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import "./Definition.css";

export default function Definition(props) {
  console.log(props.definition);
  console.log(props.definition.meanings);

  if (props.definition) {
    let meanings = props.definition.meanings;
    return (
      <div className="Definition">
        <section>
          <h2>{props.definition.word}</h2>
          <div className="phonetic">/{props.definition.phonetic}/</div>
        </section>
        {meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <h4>{meaning.partOfSpeech}</h4>
              <div>{meaning.definition}</div>
              <Example example={meaning.example} />
              <Synonyms synonyms={meaning.synonyms} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return "";
  }
}
