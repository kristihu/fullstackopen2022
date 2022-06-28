const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  console.log(course.parts, "parts");

  const Part = ({ name, exerc }) => {
    return (
      <div>
        <p>
          {name} {exerc}
        </p>
      </div>
    );
  };

  const Content = ({ parts }) => {
    console.log(parts, "parts::");
    return (
      <div>
        <Part name={parts[0].name} exerc={parts[0].exercises} />
        <Part name={parts[1].name} exerc={parts[1].exercises} />
        <Part name={parts[2].name} exerc={parts[2].exercises} />
      </div>
    );
  };

  const Header = ({ course }) => {
    return <h2>{course}</h2>;
  };

  const Total = ({ parts }) => {
    return (
      <p>
        Number of exercises{" "}
        {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
    );
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
