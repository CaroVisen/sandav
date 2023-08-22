import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ddd;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 8px;
  padding: 1%;
  padding-top: -2%;
  width: 25%;
  border-radius: 7px;
  max-width: 200px;
  margin-top: 5%;
  margin-bottom: 5%;
  cursor: pointer;
`;

export const CardImg = styled.img`
  border-radius: 100%;
  width: 55%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 8px;
  margin-top: -35%;
`;

export const CardTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 16px;
  color: #000;
  margin-bottom: 5px;
`;

export const CardSubTitle = styled.p`
  margin: 0;
  padding: 0;
  color: #aaa;
  margin-bottom: 10px;
`;
