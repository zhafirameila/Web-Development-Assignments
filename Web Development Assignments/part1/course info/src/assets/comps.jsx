
const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    );
  };
  
  const Content = (props) => {
    return (
      <div>
        {props.parts.map((part, index) => (
          <Part key={index} part={part} />
        ))}
      </div>
    );
  };
  
  const Header = (props) => {
    return <h1>{props.course.name}</h1>;
  };
  
  const Total = (props) => {
    const totalExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0);
  
    return <p>Number of exercises {totalExercises}</p>;
  };
  
  export { Content, Header, Total };