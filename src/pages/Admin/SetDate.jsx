import React from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  height: 80vh;
  background-size: cover;
`
const Label = styled.label`
  font-size: 15px;
  color: gray;
`
const Input = styled.input``
const H1 = styled.h1`
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #1775ee;
`

const Button = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 15px;
  color: white;
  background-color: #1775ee;
  margin-top: 15px;
  margin-bottom: 30px;
`
const Form = styled.form`
  border-radius: 10px;
  background-color: #f0f2f5;
  padding: 0px 60px;
  display: flex;
  flex-direction: column;
`
const SetDate = () => {
  const { handleSubmit } = useForm()

  const onSubmit = (e) => {
    console.log(e)
  }
  return (
    <>
      <Main>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <H1>Set date</H1>
          <Label>Start Date</Label>
          <Input placeholder="Start Date" type="date" />
          <Label>End Date</Label>
          <Input placeholder="End Date" type="date" />
          <Button type="submit">Submit</Button>
        </Form>
      </Main>
    </>
  )
}

export default SetDate
