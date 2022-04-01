import React from "react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Legend,
} from "recharts"
import { Chart1, Chart2, MainChart, H1, MainBox } from "./DashStyle"
import Widget from "./Widget"
const data1 = [
  { name: "2020", HN: 2500, HCM: 2300 },
  { name: "2021", HN: 5500, HCM: 6900 },
  { name: "2022", HN: 8000, HCM: 10000 },
  { name: "2023", HN: 0, HCM: 0 },
  { name: "2024", HN: 0, HCM: 0 },
]
const data2 = [
  { name: "2020", HN: 1500, HCM: 2300 },
  { name: "2021", HN: 4500, HCM: 5900 },
  { name: "2022", HN: 6000, HCM: 9000 },
  { name: "2023", HN: 0, HCM: 0 },
  { name: "2024", HN: 0, HCM: 0 },
]
const Dashboard = () => {
  return (
    <>
      <MainBox>
        <Widget type="ideas" />
        <Widget type="like" />
        <Widget type="dislike" />
        <Widget type="department" />
      </MainBox>
      <MainChart>
        <Chart1>
          <H1>Ideas Submmited</H1>

          <AreaChart
            width={900}
            height={300}
            data={data1}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="HN"
              stackId="1"
              stroke="#d50000"
              fill="#d50000"
            />
            <Area
              type="monotone"
              dataKey="HCM"
              stackId="1"
              stroke="#3f51b5"
              fill="#3f51b5"
            />
          </AreaChart>
        </Chart1>

        <Chart2>
          <H1>Contribution</H1>
          <BarChart
            width={900}
            height={300}
            data={data2}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="HN" stackId="a" fill="#0288d1" />
            <Bar dataKey="HCM" stackId="a" fill="#dd2c00" />
          </BarChart>
        </Chart2>
      </MainChart>
    </>
  )
}

export default Dashboard
