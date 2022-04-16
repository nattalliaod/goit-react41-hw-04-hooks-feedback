import styled from "@emotion/styled";

export const FeedbackItem = styled.ul`
display: flex;
`;

export const Feedback = styled.button`
padding: 10px 15px;
  border: 2px solid lightskyblue;
  border-radius: 5px;
  margin-right: 15px;
  font-size: 15px;
  background-color: transparent;
  transition: all 250ms linear;
  cursor: pointer;

  :hover {
      background-color: blueviolet;
  transition: all 250ms linear; 
  }
`;