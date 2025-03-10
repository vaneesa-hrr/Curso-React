const Header = (props) => {
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total} </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const ex1 = 10;
  const part2 = 'Using props to pass data';
  const ex2 = 7;
  const part3 = 'State of a component';
  const ex3 = 14;
  const total = ex1 + ex2 + ex3;

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercise={ex1} />
      <Content part={part2} exercise={ex2} />
      <Content part={part3} exercise={ex3} />
      <Total total={total} />
    </div>
  )
}

export default App;