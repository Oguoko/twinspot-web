"use client";

type Season = {
  months: string;
  conditions: string;
  highlights: string;
};

export default function SeasonalityTable({
  seasons,
}: {
  seasons: Season[];
}) {
  return (
    <section className="seasonality">
      <h2>Best Birding Seasons</h2>

      <div className="table">
        {seasons.map((s, i) => (
          <div key={i} className="row">
            <div className="cell months">{s.months}</div>
            <div className="cell">{s.conditions}</div>
            <div className="cell highlights">{s.highlights}</div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .seasonality {
          margin: 6rem 0;
        }

        h2 {
          margin-bottom: 2rem;
        }

        .table {
          display: grid;
          gap: 1.25rem;
        }

        .row {
          display: grid;
          grid-template-columns: 1fr 1.5fr 2fr;
          gap: 1.25rem;
          padding: 1.25rem;
          background: #fafafa;
          border-radius: 10px;
        }

        .cell {
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .months {
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .highlights {
          color: #333;
        }

        @media (max-width: 768px) {
          .row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
