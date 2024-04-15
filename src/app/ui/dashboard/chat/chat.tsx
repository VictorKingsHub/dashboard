"use client"
import React from 'react'
import styles from "./chat.module.css"
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const Chat = () => {
  
  interface MyDataItem {
    name: string;
    visit: number;
    click: number;
  }

  const data: MyDataItem[] =[
    {
      name: "Mon",
      visit: 160,
      click: 2800,
    },
    {
      name: "Tue",
      visit: 180,
      click: 2900,
    },
    {
      name: "Wed",
      visit: 200,
      click: 3000,
    },
    {
      name: "Thur",
      visit: 220,
      click: 3200,
    },
    {
      name: "Fri",
      visit: 240,
      click: 3400,
    },
    {
      name: "Sat",
      visit: 260,
      click: 3600,
    },
    {
      name: "Sun",
      visit: 300,
      click: 4000,
    },
  ]

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="90%" height="100%">
          <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
            {/* <CartesianGrid strokeDasharray="3 3"/> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip contentStyle={{background: "#151c2c", border: "none"}} />
            <Legend />
            <Line type="monotone" dataKey="visit"  stroke="#8884d8" />
            <Line type="monotone" dataKey="click"  stroke="#8884d8" />

          </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chat
