import React from "react"
import styled from "styled-components"
const Main = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`
const H1 = styled.h1`
  justify-content: center;
  align-items: center;
`
const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 80%;
  overflow: auto;
`
const Tr = styled.tr`
  background-color: #f2f2f2;
  :hover {
    background-color: #ddd;
  }
`
const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: blue;
  color: white;
`
const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`

const Button = styled.button`
  width: 60%;
  height: 20px;
  border: none;
  color: white;
  background-color: red;
`
const Manage = () => {
  return (
    <>
      <Main>
        <H1>Manage</H1>
        <Table>
          <Tr>
            <Th>Id</Th>
            <Th>User</Th>
            <Th>Role</Th>
            <Th>Department</Th>
            <Th>Username</Th>
            <Th>Password</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Function</Th>
            <Th>Function</Th>
          </Tr>
          <Tr>
            <Td typeof="id">1</Td>
            <Td typeof="text">john</Td>
            <Td typeof="text">admin</Td>
            <Td typeof="text">HN</Td>
            <Td typeof="text">John</Td>
            <Td typeof="password">123456</Td>
            <Td typeof="text">Jhon</Td>
            <Td typeof="email">Jhon@gmail.com</Td>
            <Td>
              <Button>Edit</Button>
            </Td>
            <Td>
              <Button>Delete</Button>
            </Td>
          </Tr>
        </Table>
      </Main>
    </>
  )
}

export default Manage
