import * as ParticleStyled from "./Particle.styled";

const Particle = ({ style }: { style: ParticleStyled.Props }) => (
  <ParticleStyled.Component p={ParticleStyled.adapter(style)} />
);

export default Particle;
