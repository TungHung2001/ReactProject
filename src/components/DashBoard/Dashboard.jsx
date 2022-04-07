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
  PieChart,
  Pie,
  Cell,
  LabelList,
} from "recharts"
import { Chart1, Chart2, MainChart, H1, MainBox, Chart3 } from "./DashStyle"
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
const data3 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
]
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]
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
        <Chart3>
          <PieChart width={300} height={400}>
            <Pie
              data={data3}
              cx={120}
              cy={200}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              <LabelList dataKey="name" position="outside" />
              {data3.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </Chart3>
        <Chart1>
          <H1>Ideas Submmited</H1>

          <AreaChart
            width={700}
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
      </MainChart>
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
    </>
  )
}

export default Dashboard
