import React from "react";
import "./Exercise.scss";

interface WebsiteObject {
  name: string;
  url: string;
}

interface ExerciseProps {
  title: string;
  website: WebsiteObject;
  description?: string;
  solutions?: string;
}

const Exercise: React.FC<ExerciseProps> = ({
  title,
  website,
  description,
  solutions,
}) => (
  <div className="exercise">
    <h3>{title}</h3>
    <a href={website.url}>{website.name}</a>
    <button>View</button>
    <button>How I Did</button>
  </div>
);

export default Exercise;
