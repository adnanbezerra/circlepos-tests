import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 25px 15%;
  box-sizing: border-box;
  flex-direction: column;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
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
  width: fit-content;
  margin-bottom: 10px;
  overflow-x: scroll;
`
