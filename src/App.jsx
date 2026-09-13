import React from "react";
import { useEffect, useMemo, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import TechnologyCard from "./components/TechnologyCard";
import StackPanel from "./components/StackPanel";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/data/technologies.json");
        if (!response.ok) throw new Error("Unable to load technology data.");
        setTechnologies(await response.json());
      } catch (error) {
        setLoadError(error.message);
        toast.error("Unable to load technologies.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const selectedTechnologies = useMemo(
    () => selectedIds
      .map((id) => technologies.find((technology) => technology.id === id))
      .filter(Boolean),
    [selectedIds, technologies]
  );

  const addToStack = (technology) => {
    if (selectedIds.includes(technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedIds((current) => [...current, technology.id]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const removeFromStack = (technology) => {
    setSelectedIds((current) => current.filter((id) => id !== technology.id));
    toast.info(`${technology.name} removed from your stack.`);
  };

  const removeAll = () => {
    if (!selectedIds.length) return;
    setSelectedIds([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <div className="app">
      <Navbar />

      <main>
        <section className="hero container" id="home">
          <div className="hero-content">
            <h1>Build Your Ideal<span>Development Stack</span></h1>
            <p>
              Explore frontend, backend, database, and tooling options, compare them side by side,
              and put together the stack that fits your next project.
            </p>
            <div className="hero-actions">
              <a href="#technologies" className="btn btn-primary">Explore Technologies</a>
              <a href="#about" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/assets/banner-stack.png" alt="Modern development stack illustration" />
          </div>
        </section>

        <section className="technologies-section container" id="technologies">
          <div className="section-heading">
            <h2>Explore the <span>Technologies</span></h2>
            <p>Pick one technology per category to build your ideal stack.</p>
          </div>

          {loading ? (
            <div className="loading-state" role="status" aria-live="polite">
              <span className="spinner" />
              Loading technologies...
            </div>
          ) : loadError ? (
            <div className="error-state" role="alert">{loadError}</div>
          ) : (
            <div className="stack-layout">
              <div className="technology-grid">
                {technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    added={selectedIds.includes(technology.id)}
                    onAdd={addToStack}
                  />
                ))}
              </div>
              <StackPanel
                selectedTechnologies={selectedTechnologies}
                onRemove={removeFromStack}
                onRemoveAll={removeAll}
              />
            </div>
          )}
        </section>
      </main>

      <Footer />
      <ToastContainer position="top-right" autoClose={2200} hideProgressBar newestOnTop closeOnClick pauseOnHover />
    </div>
  );
}

export default App;
