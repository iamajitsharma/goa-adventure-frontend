interface IItineraryProps {
  text: String;
}

export default function ItineraryText({ text }: IItineraryProps) {
  return (
    <>
      <div className="">{text}</div>
    </>
  );
}
