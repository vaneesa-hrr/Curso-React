const Header = (props) => {
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
};


const Part = (props) => {
  return (
    <div>
      <p> {props.name} {props.exercises} </p>
    </div>
  )
};
const Content = () => {
  return (
    <div>
      <Part name='Fundamentals of React' exercises={10} />
      <Part name='Using props to pass data' exercises={7} />
      <Part name='State of a component' exercises={14} />
    </div>
  )
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total} </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const ex1 = 10;
  const ex2 = 7;
  const ex3 = 14;
  const total = ex1 + ex2 + ex3;

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total total={total} />
    </div>
  )
}

export default App;