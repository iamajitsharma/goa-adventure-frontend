interface IHeaderProps {
  heading: string;
}
export default function Header({ heading }: IHeaderProps) {
  return (
    <div className="text-2xl text-black border-l-4 border-l-orange-400 px-4 mx-4">
      {heading}
    </div>
  );
}
