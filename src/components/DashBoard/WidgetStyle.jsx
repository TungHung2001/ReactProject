import styled from "styled-components"

export const Main = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
  justify-content: space-between;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  border-radius: 10px;
  height: 100px;
`
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Title = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: rgb(160, 160, 160);
`
export const Counter = styled.span`
  font-size: 28px;
  font-weight: 300;
`
export const Per = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  &.positive {
    color: green;
  }
  &.negative {
    color: red;
  }
`
export const Icon = styled.span`
  color: white;

  border-radius: 50%;
`
export const Main3 = styled.div``
