import React from "react"
import { Jumbotron } from "reactstrap"

const Description = () => {
  return (
    <div>
      <Jumbotron style={{ backgroundColor: "#fbf6ec" }}>
        <h1 className="display-3">Witaj!</h1>
        <p className="lead">
          Jestem JavaScript developerem. Na co dzień zawodowo zajmuję się tworzeniem aplikacji Front Endowych z
          wykorzystaniem React.js{" "}
        </p>
        <hr className="my-2" />
        <p>
          {" "}
          Znajdziesz tutaj moje realizacje oraz linki go Github / LinkedIn. Obecnie zajmuję się tworzeniem swojego
          starter kit-a do aplikacji React.{" "}
        </p>
      </Jumbotron>
    </div>
  )
}

export default Description
