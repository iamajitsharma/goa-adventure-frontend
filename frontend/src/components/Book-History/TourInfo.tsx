interface DOB {
  dateOfBooking: string;
}
export default function TourInfo({ dateOfBooking }: DOB) {
  return (
    <>
      <div className="flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.4)] py-1 rounded-2xl w-1/4 ">
        <div className="text-xl">{dateArray[1].substring(0, 3)}</div>
        <div className="text-orange-400 font-semibold text-3xl ">
          {dateArray[2]}
        </div>
        <div className="text-xl">{dateArray[0]}</div>
      </div>
    </>
  );
}
