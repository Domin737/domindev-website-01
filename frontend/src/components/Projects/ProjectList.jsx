import React, { useState, useEffect } from "react";
import "./ProjectList.scss";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) {
          throw new Error("Nie udało się pobrać projektów");
        }
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div>Ładowanie projektów...</div>;
  if (error) return <div>Błąd: {error}</div>;

  return (
    <div className="project-list">
      <h2>Nasze Projekty</h2>
      {projects.length === 0 ? (
        <p>Brak projektów do wyświetlenia</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project._id} className="project-item">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>Data rozpoczęcia: {project.startDate}</p>
              <p>Data zakończenia: {project.endDate}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectList;
