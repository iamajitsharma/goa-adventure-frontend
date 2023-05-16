import { AiTwotoneStar } from "react-icons/ai";
interface IReviewHeaderProps {
  noOfStars: Number[];
  name: String;
  date: String;
}
export default function Header({ noOfStars, name, date }: IReviewHeaderProps) {
  return (
    <div className="flex flex-row items-center justify-start my-2">
      <img src="/ProfilePic.png" alt="Profile Picture" />
      <div className="flex flex-col justify-between items-center mx-4">
        <div className="font-semibold my-1 w-full">{name}</div>
        <div className="text-xs text-gray-400 my-1 w-full">{date}</div>
        <div className="flex flex-row justify-between my-1 w-full">
          {noOfStars.map((num) => (
            <AiTwotoneStar className="text-yellow-500 mr-1 scale-125" />
          ))}
        </div>
      </div>
    </div>
  );
}
