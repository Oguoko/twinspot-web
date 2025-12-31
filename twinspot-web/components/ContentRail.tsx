type Props = {
  children: React.ReactNode;
};

export default function ContentRail({ children }: Props) {
  return (
    <div
      style={{
        /* 
          Optical centering:
          - Stronger left inset to calm the page
          - Slightly softer right inset so content doesn't feel pushed
        */
        paddingLeft: "clamp(48px, 7vw, 96px)",
        paddingRight: "clamp(32px, 5vw, 72px)",
      }}
    >
      {children}
    </div>
  );
}
