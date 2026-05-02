import { achievements } from "../data/achievements";
import SectionTitle from "./SectionTitle";

function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <SectionTitle
          label="Achievements"
          title="Milestones and recognitions"
          text="Highlights from competitions and entrance exam performance."
        />

        <div className="achievement-grid">
          {achievements.map((item) => (
            <div className="achievement-card" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;