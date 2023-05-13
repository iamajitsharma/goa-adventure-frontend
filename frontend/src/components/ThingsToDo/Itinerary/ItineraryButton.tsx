interface IItineraryProps {
  time: String;
}

export default function ItineraryButton({ time }: IItineraryProps) {
  return (
    <>
      <button className="rounded-full text-black bg-orange-500 py-2 px-4 mr-12 whitespace-nowrap ">
        {time}
      </button>
    </>
  );
}
