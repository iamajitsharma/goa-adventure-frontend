interface IBodyProps {
  text: String;
}
export default function Body({ text }: IBodyProps) {
  return <div className="w-full my-8">{text}</div>;
}
