import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px 5%;
  box-sizing: border-box; 
`

export const PageTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const PageInfo = styled.p`
  margin-bottom: 20px;
`

export const BuyCartButton = styled.button`
  background-color: green;
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

export const BuyCartContainer = styled.form`
  display: ${props => (props.showForm ? "flex" : "none")};
  flex-direction: column;
  width: 50%;
  border: 1px solid #828282;
  border-radius: 15px;
  padding: 15px;
  box-sizing: border-box;
  margin-top: 20px;
`

export const FormInput = styled.input`
  border: 1px solid #acacac;
  border-radius: 15px;
  height: 40px;
  margin-bottom: 10px;
  padding-left: 10px;
  box-sizing: border-box;

  ::placeholder {
    color: #acacac;
  }
`

export const Label = styled.label`
  margin-bottom: 10px;
`

export const BuyButton = styled.button`
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
