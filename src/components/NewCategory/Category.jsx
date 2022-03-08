import React from "react"
import styled from "styled-components"

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  height: 100vh;
  background-size: cover;
`
const Form = styled.form`
  border-radius: 10px;
  background-color: #404079;
  padding: 0px 60px;
  display: flex;
  flex-direction: column;
`
const H2 = styled.h1`
  text-align: center;
  color: #f10a0a;
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
  background-color: #f10a0a;
  margin-top: 15px;
  margin-bottom: 30px;
`
const Category = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <>
        <Main>
          <Form onSubmit={{ handleSubmit }}>
            <H2>New Category</H2>
            <Label>Category</Label>
            <Input placeholder="Category" type="text" />

            <Button type="submit">Submit</Button>
          </Form>
        </Main>
      </>
    </>
  )
}

export default Category
