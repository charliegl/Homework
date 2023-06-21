import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />

      <Content >
      <div>
      <Part name="Part 1" exercises1={10} />
      <Part name="Part 2" exercises2={15} />
      <Part name="Part 3" exercises3={20} />
      </div>
      </Content>

      <Total>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
        </Total>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
