import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px 5%;
  box-sizing: border-box; 
`

export const BookTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const BookInfo = styled.p`
  margin-bottom: 5px;
`

export const BookPrice = styled.p`
  font-size: 30px;
  color: green;
  font-weight: bold;
  margin-top: 10px;
`

export const AddToCartButton = styled.button`
  background-color: #DB0000;
  border: 0;
  border-radius: 15px;
  width: 150px;
  height: 50px;
  color: white;
  font-weight: bold;
  margin-top: 10px;

  &:hover{
    cursor: pointer;
  }
`
