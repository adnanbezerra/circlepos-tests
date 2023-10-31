import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #EDEDED;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 15%;
  box-sizing: border-box;
  color: #828282;
  font-size: 18px;
`

export const Footer = styled.footer`
  background-color: #E1E1E1;
  color: #8A8A8A;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  display: flex;

  a {
    color: #E21518;
    text-decoration: none;
    margin: 2px 5px;
  }
`

export const RedBar = styled.div`
  background-color: #DB0000;
  height: 20px;
  width: 100%;
`

export const ContentDivisory = styled.div`
  width: 33%;
  height: fit-content;

  a {
    color: #E21518;
    text-decoration: none;
    margin: 2px 5px;
  }
`
