import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 25px 5%;
  box-sizing: border-box;
  flex-direction: column;
  overflow-x: hide;
`

export const Title = styled.h1`
  color: #000;
  font-size: 20px;
`

export const SecondTitle = styled.h2`
  margin-top: 20px;
`

export const BooksDiv = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
  margin-bottom: 10px;
  overflow: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`
