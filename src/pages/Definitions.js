import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NotFoundComponent  from "../components/NotFound";
import DefinitionSearch from "../components/Definitionsearch";

export default function Definition() {
  const [word, setWord] = useState([]);
  const [NotFound, setNotFound] = useState(false);
  let { search } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        }

        return response.json();
      })
      .then((data) => {
        const meanings = data[0]?.meanings || [];
        setWord(meanings.map((meaning) => meaning.definitions));
      });
  }, [search]);

  if (NotFound) {
    return (
      <div>
      <NotFoundComponent/>
      </div>
      );
  }

  return (
    <div>
      <h1>Here is a Definition: </h1>
      {word.length > 0 ? (
        word.map((definitions, index) => (
          <div key={index}>
            {definitions.map((definition, definitionIndex) => (
              <p key={definitionIndex}>
                {definition.definition || "No definition available"}
              </p>
            ))}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
      <p>Search Again:</p>
      <DefinitionSearch></DefinitionSearch>
    </div>
  );
}