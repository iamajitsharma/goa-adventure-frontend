interface INumberProps {
  number: string;
}

export default function Number({ number }: INumberProps) {
  return (
    <div className="rounded-full bg-orange-500 w-6 h-6 p-5 flex justify-center items-center text-white mx-4">
      {number}
    </div>
  );
}
