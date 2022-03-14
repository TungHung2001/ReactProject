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
const Form = styled.form`
  border-radius: 10px;
  background-color: #f0f2f5;
  padding: 0px 60px;
  display: flex;
  flex-direction: column;
`
const H2 = styled.h1`
  text-align: center;
  color: #1775ee;
`
const Label = styled.label`
  font-size: 15px;
  color: gray;
`
const Input = styled.input``
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
const Category = () => {
  const { handleSubmit } = useForm()
  const onSubmit = (e) => {
    console.log(e)
  }
  return (
    <>
      <Main>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <H2>New Category</H2>
          <Label>Category</Label>
          <Input placeholder="Category" type="text" />

          <Button type="submit">Submit</Button>
        </Form>
      </Main>
    </>
  )
}

export default Category