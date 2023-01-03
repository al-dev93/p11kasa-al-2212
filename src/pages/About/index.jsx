import styled from 'styled-components';
import Banner from '../../components/Banner';

const Wrapper = styled.div`
  margin-top: 44px;
`;
const About = () => (
  <Wrapper>
    <Banner onAbout />
    <div>A propos de</div>
  </Wrapper>
);

export default About;
