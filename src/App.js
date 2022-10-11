import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './pages/Main'
import Topics from './pages/topics/Topics'
import Error from './components/error/Error'
import Blog from './pages/blog/Blog'
import Statistics from './pages/statistics/Statistics'

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main/>,
      children:[
        {
          path:'/',
          loader: async ()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Topics/>
        },
        {
          path:'/blog',
          element:<Blog/>
        },
        {
          path:'/statistics',
          element:<Statistics/>
        },
        {
          path:'*',
          element:<Error/>
        }
      ]
    },
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App