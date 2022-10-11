import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './pages/Main'
import Topics from './pages/topics/Topics'
import Error from './components/error/Error'
import Blog from './pages/blog/Blog'
import Statistics from './pages/statistics/Statistics'
import Quizzes from './components/quizzes/Quizzes'

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
          path:'/quiz/:quizId',
          loader:async({params})=>{
            return fetch(` https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Quizzes/>,
          errorElement:<Error/>
        },
        {
          path:'/blog',
          element:<Blog/>
        },
        {
          path:'/statistics',
          loader: async ()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Statistics/>,
          errorElement:<h1>Bal amni akta leko na</h1>

        },
      ]
    },
    {
      path:'/*',
      element:<Error/>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App