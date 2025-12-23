"use client";

export default function PullQuote({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <aside className="pull-quote">
      <p>{children}</p>

      <style jsx>{`
        .pull-quote {
          margin: 4rem 0;
          padding-left: 1.5rem;
          border-left: 3px solid var(--gold);
          font-style: italic;
          color: #2a2a2a;
        }

        .pull-quote p {
          font-size: 1.2rem;
          line-height: 1.7;
          margin: 0;
        }
      `}</style>
    </aside>
  );
}
