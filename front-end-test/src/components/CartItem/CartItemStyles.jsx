import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`

export const BookInfo = styled.p`
  margin-bottom: 2px;
`

export const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  p {
    margin-bottom: 5px;
  }
`
