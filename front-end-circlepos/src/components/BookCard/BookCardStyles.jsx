import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-width: 250px;
  height: 150px;
  border: 1px solid #000;
  border-radius: 5px;
  margin: 20px 40px 0 0;
  background-color: #EDEDED;

  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const Title = styled.p`
  font-weight: bold;
  color: #000;
  font-size: 16px;
  margin-bottom: 5px;
`

export const BookInfo = styled.p`
  color: #000;
  font-size: 14px;
  margin-bottom: 5px;
`
