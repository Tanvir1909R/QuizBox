import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './statistics.css'

const Statistics = () => {
  const { data }= useLoaderData()
  return (
    <section>
        <div className="container">
          <div className="barWrapper">
            <h1>statistics of quizzes</h1>
            <div className="bar">
            <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
            <XAxis dataKey="name" tick={{fill:'white'}} />
            <YAxis dataKey="total" tick={{fill:'white'}} />
            <Tooltip />
            <Bar dataKey="total" fill="#3cb6de" />
            </BarChart>
            </ResponsiveContainer>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Statistics