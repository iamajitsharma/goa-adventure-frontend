interface IFaqProps {
  question: string;
}

export default function Header({ question }: IFaqProps) {
  return <div className="my-2 font-semibold">{question}</div>;
}
