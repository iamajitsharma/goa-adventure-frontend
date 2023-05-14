interface IBodyProps {
  answer: string;
}

export default function Body({ answer }: IBodyProps) {
  return <div className="my-2">{answer}</div>;
}
