import React from 'react'
import './blog.css'

const Blog = () => {
  return (
    <section>
        <div className="container">
          <div className="blogWrapper">
              <h1>Featured Blogs</h1>
              <div className="blogs">
                <div className="blog">
                  <h2>What is the purpose of using react-router?</h2>
                  <p>React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process is called Routing and it is made possible with the help of React Router Dom.</p>
                </div>
                <div className="blog">
                  <h2>How dose context api work?</h2>
                  <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
                <div className="blog">
                  <h2>what is useRef?</h2>
                  <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                </div>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Blog