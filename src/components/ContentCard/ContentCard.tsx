import React from "react";
import styled from "styled-components";


interface Props {
  id?: number;
  image?: string;
  title?: string;
  desc?: string;
  date?: string;
  views?: number;
  isPdf?: boolean;
  category?: string;

}

const Card = styled.div`
  max-width: 300px;
  max-height: 276px;
  min-height: 276px;
  border-radius: 12px;
  overflow: hidden;
  background:rgb(227, 224, 228);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align : right ;
  margin: .5rem;
  padding: .5rem 
    display: flex;
  align-items: center;
  justify-content: space-between;


`;

const Image = styled.img`
  width: 100%;
  height: 160px;
`;

const Content = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
`;


const Decs = styled.div` 
  font-size: 14px;
  margin: 8px 0;
  overflow: hidden;
  text-align: right

`;

const Meta = styled.div`
  font-size: 12px;
  color: gray;

`;

const ContentCard: React.FC<Props> = ({
  id,
  image,
  title,
  desc,
  date,
  views,
  isPdf,
  category,
}) => {
  return (
    <Card>
      <Image src={image} alt="" />
      <Content>
        <Title>{title && title.length > 50 ? `${title.substring(0, 50)}...` : title}</Title>
        <Decs>
          {desc && desc.length > 50 ? `${desc.substring(0, 50)}...` : desc}
          {/* <LinesEllipsis
            text={desc || ""}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          /> */}
        </Decs>
        <Meta>
          {category} | {date} | 👁 {views} {isPdf && "📄"}
        </Meta>
      </Content>
    </Card>
  );
};

export default ContentCard;
