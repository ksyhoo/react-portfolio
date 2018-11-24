import React from "react";
import { Jumbotron } from "reactstrap";

const Description = () => {
  return (
    <div>
      <Jumbotron style={{ backgroundColor: "#fbf6ec" }}>
        <h1 className="display-3">Witaj!</h1>
        <p className="lead">Jestem pocztkującym Web Developerem. </p>
        <hr className="my-2" />
        <p>
          {" "}
          Znajdzesz tutaj moje reazlizacje oraz informacje nad czym obecnie pracuję oraz czego
          chciałbym się nauczyć.
        </p>
      </Jumbotron>
    </div>
  );
};

export default Description;
