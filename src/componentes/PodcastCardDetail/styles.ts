import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ddd;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 8px;
  width: 25%;
  padding: 2%;
  height: 80%;
  border-radius: 7px;
  cursor: pointer;
`;

export const CardImg = styled.img`
  border-radius: 5px;
  width: 80%;
  margin: 5%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 8px;
`;

export const CardTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 18px;
  color: #000;
  margin-bottom: 5px;
  text-align: left;
`;

export const CardSubTitle = styled.p`
  margin: 0;
  padding: 0;
  color: #000;
  margin-bottom: 10px;
  text-align: left;
  font-style: italic;
`;

export const CardDescriptionTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 14px;
  color: #aaa:;
  margin-bottom: 5px;
  text-align: left;

`;

export const CardDescriptionSubTitle = styled.p`
  margin: 0;
  padding: 0;
  color: #333;
  margin-bottom: 10px;
  text-align: left;
  font-style: italic;
`;

export const ContainerText = styled.div`
  padding: 5% 2%;
`;
