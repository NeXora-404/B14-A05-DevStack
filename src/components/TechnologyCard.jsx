import React from "react";

function TechnologyCard({ technology, added, onAdd }) {
  return (
    <article className={`technology-card ${added ? "is-added" : ""}`}>
      <div className="card-top">
        <img
          className="technology-icon"
          src={technology.icon}
          alt={`${technology.name} icon`}
        />

        {technology.badge && (
          <span className="badge">{technology.badge}</span>
        )}
      </div>

      <h3>{technology.name}</h3>

      <p className="description">{technology.description}</p>

      <div className="meta-row">
        <span className="category-chip">{technology.category}</span>

        <span className="difficulty">{technology.difficulty}</span>

        <span className="rating">
          <span aria-hidden="true">★</span> {technology.rating}
        </span>
      </div>

      <button
        type="button"
        className={`stack-button ${added ? "added" : ""}`}
        disabled={added}
        onClick={() => onAdd(technology)}
      >
        {added ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}

export default TechnologyCard;