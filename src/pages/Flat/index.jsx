import styled from 'styled-components';
import SlideShow from '../../components/SlideShow';
import colors from '../../utils/style/colors';
import flats from '../../data/logements.json';
import { Navigate, useParams } from 'react-router-dom';
import marked from '../../assets/STAR_PRIMARY.svg';
import unmarked from '../../assets/STAR_LIGHT.svg';
import Collapse from '../../components/Collapse';

const Wrapper = styled.div`
  margin-top: 20px;
`;

const GridWrapper = styled.article`
  margin-top: 30px;
  margin-bottom: 253px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-auto-rows: minmax(25px, 77px);
  grid-gap: 20px 10px;
`;
const TitleWrapper = styled.div`
  grid-area: 1/1/2/9;
`;
const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
`;
const Location = styled.h2`
  font-size: 18px;
`;
const Name = styled.p`
  position: relative;
  grid-column: 9 / 10;
  grid-row: 1 / 2;
  right: -33%;
  text-align: right;
  font-size: 18px;
  font-weight: 500;
  align-self: flex-start;
`;
const Photo = styled.img`
  position: relative;
  grid-column: 10 / 11;
  grid-row: 1 / 2;
  width: 64px;
  height: auto;
  margin-right: 3px;
  top: -7.79%;
  border-radius: 100%;
  justify-self: self-end;
`;
const TagWrapper = styled.div`
  grid-area: 2 / 1 / 3 / 9;
  height: 25px;
  display: flex;
  column-gap: 10px;
`;
const Tag = styled.span`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 115px;
  padding: 0 20px;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  font-size: 14px;
  font-weight: 500;
  border-radius: 10px;
`;
const RatingWrapper = styled.div`
  position: relative;
  grid-area: 2 / 9 / 3 / 11;
  justify-self: self-end;
  top: -50%;
  line-height: 0;
`;

const WrapperCollapseDescription = styled.div`
  grid-area: 3 / 1 / 4 / 6;
  width: 94.63%;
`;
const WrapperCollapseEquipment = styled.div`
  grid-area: 3 / 6 / 4 / 11;
  width: 94.63%;
  justify-self: self-end;
`;

const Flat = () => {
  const { flatId } = useParams();
  const flat = flats.find((flat) => flat.id === flatId);

  if (!flat) {
    return <Navigate to='/error' replace={true} />;
  }

  const [surname, name] = flat.host.name.split(' ');
  const scoringScale = [1, 2, 3, 4, 5];

  return (
    <Wrapper>
      <SlideShow images={flat.pictures} />
      <GridWrapper>
        <TitleWrapper>
          <Title>{flat.title}</Title>
          <Location>{flat.location}</Location>
        </TitleWrapper>
        <Name>
          {surname}
          <br />
          {name}
        </Name>
        <Photo src={flat.host.picture} alt='' />
        <TagWrapper>
          {flat.tags.map((tag, index) => (
            <Tag key={`${tag}-${index}`}>{tag}</Tag>
          ))}
        </TagWrapper>
        <RatingWrapper>
          {scoringScale.map((score, index) =>
            flat.rating >= score ? (
              <img key={`${marked}-${index}`} src={marked} alt='' />
            ) : (
              <img key={`${unmarked}-${index}`} src={unmarked} alt='' />
            ),
          )}
        </RatingWrapper>
        <WrapperCollapseDescription>
          <Collapse onPage={'Flat'} title={'Description'} content={flat.description} />
        </WrapperCollapseDescription>
        <WrapperCollapseEquipment>
          <Collapse onPage={'Flat'} title={'Équipements'} content={flat.equipments} />
        </WrapperCollapseEquipment>
      </GridWrapper>
    </Wrapper>
  );
};

export default Flat;
