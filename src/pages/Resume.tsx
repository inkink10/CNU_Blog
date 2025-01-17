// const Resume = () => {
//   return <div>나는 프로젝트 내역</div>;
// };
//
// export default Resume;
import styled from '@emotion/styled';
import Tag from '../components/Tag';

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin-top: 0px;
  font-weight: 800;
  color: #212529;
  margin-bottom: 2rem;
  word-break: keep-all;
`;

const Text = styled.p`
  width: 700px;
  font-size: 1.5rem;
`;

const DetailText = styled.p`
  font-size: 1rem;
  padding-left: 20px;
`;

const InfoBox = styled.div`
  padding-bottom: 20px;
`;

const LinkText = styled.a``;

const Resume = () => {
  return (
    <>
      <Title>Experiences</Title>
      <InfoBox>
        <Text>충남대학교 학부생</Text>
        <DetailText>- 2021.03 ~ Current</DetailText>
        <DetailText>- Python, C#, C++, java, Dart</DetailText>
        <Tag>#컴퓨터공학</Tag>
        <Tag>#React, SpringBoot에 대한 지식 수강</Tag>
      </InfoBox>

      <Title>Project</Title>
      <InfoBox>
        <Text>"바르콘" 앱 개발</Text>
        <DetailText>
          - <LinkText href="https://github.com/inkink10/barrcon" target="_blank">barrcon</LinkText>
        </DetailText>
        <DetailText>- 기프티콘 거래 앱</DetailText>
        <DetailText>- Best Implementation 상 수상</DetailText>
        <Tag>#Flutter</Tag>
        <Tag>#Dart</Tag>
      </InfoBox>
      <InfoBox>
        <Text>"짧은 방구하기" 앱 개발</Text>
        <DetailText>
          - <LinkText href="https://github.com/inkink10/2023-short-room-bangu" target="_blank">short_room</LinkText>
        </DetailText>
        <DetailText>- 자취방 양도 앱</DetailText>
        <DetailText>- Sogra 우수상 수상</DetailText>
        <Tag>#Flutter</Tag>
        <Tag>#Dart</Tag>
      </InfoBox>
    </>
  );
};

export default Resume;
