interface ExampleProps {
  text: string;
}

const Example: React.FC<ExampleProps> = ({ text }) => {
  return <div>{text}</div>;
};

export default Example;
