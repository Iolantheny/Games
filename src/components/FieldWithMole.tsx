import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

type Props = {
  score: number;
  setScore: (score: number) => number;
};

const FieldWithMole = ({ setScore, score }: Props) => {
  const data = useStaticQuery(
    graphql`
      query {
        img: file(relativePath: { eq: "moleIcon.png" }) {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    `
  );

  const [correct, setCorrect] = useState(false);

  const CorrectClick = () => {
    setScore(score + 1);
    setCorrect(true);
  };

  return (
    <div
      className={`molegame__field ${correct ? "correct-field" : ""}`}
      onClick={() => CorrectClick()}
    >
      <GatsbyImage
        image={data.img.childImageSharp.gatsbyImageData}
        alt="mole"
      />
    </div>
  );
};

export default FieldWithMole;
