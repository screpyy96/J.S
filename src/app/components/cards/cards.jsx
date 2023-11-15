// ProjectsPage.js

import React from 'react';
import styles from "./styles.cards.css"

const ProjectCard = ({ title, description, imageUrl, button }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <button>{button}</button>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Interior Painting',
      description: 'Nothing freshens up the interior of a home quite like a fresh coat of paint!',
      imageUrl: '/images/interior.jpeg',
      button: "View More"
    },
    {
      title: 'Exterior Painting',
      description: 'Our skilled painters know the best methods and type of paint to use on all types of surfaces.',
      imageUrl: '/images/exterior.jpeg',
      button: "View More"
    },
    {
      title: 'Cabinets',
      description: 'Don’t replace, refinish! Our kitchen cabinet painters are highly trained professionals who use only top-quality paint and sprayers to give your kitchen cabinets a smooth, flawless finish that will make them look like they are brand new!.',
      imageUrl: '/images/cabinets.jpeg',
      button: "View More"
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsPage;