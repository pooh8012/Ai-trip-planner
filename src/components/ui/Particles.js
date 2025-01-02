import Particles from "react-tsparticles";

function BackgroundAnimation() {
  return (
    <Particles
      options={{
        particles: {
          number: { value: 80 },
          color: { value: "#ffffff" },
          opacity: { value: 0.5 },
          size: { value: 5 },
          move: { speed: 1 },
        },
      }}
      className="absolute inset-0"
    />
  );
}
