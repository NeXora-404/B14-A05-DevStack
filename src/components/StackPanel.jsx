import React from "react";

function StackPanel({ selectedTechnologies, onRemove, onRemoveAll }) {
  const count = selectedTechnologies.length;

  return (
    <aside
      className="stack-panel"
      aria-label="Your selected technology stack"
    >
      <h2>Your Stack</h2>

      <p className="stack-count">
        {count} Technology{count === 1 ? "" : "ies"} Selected
      </p>

      {count === 0 ? (
        <div className="empty-stack">Your stack is empty.</div>
      ) : (
        <>
          <div className="selected-list">
            {selectedTechnologies.map((technology) => (
              <div className="selected-item" key={technology.id}>
                <img
                  src={technology.icon}
                  alt={`${technology.name} icon`}
                />

                <div>
                  <strong>{technology.name}</strong>
                  <span>{technology.category}</span>
                </div>

                <button
                  type="button"
                  className="remove-item"
                  aria-label={`Remove ${technology.name}`}
                  onClick={() => onRemove(technology)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="remove-all"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default StackPanel;