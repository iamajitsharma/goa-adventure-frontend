interface DOB {
  dateOfBooking: string;
}
export default function Date({ dateOfBooking }: DOB) {
  let newDate = dateOfBooking.split("T")[0];
  let dateArray = newDate.split("-");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  dateArray[1] = monthNames[Number(dateArray[1]) - 1];
  //console.log("Date final", dateArray);

  return (
    <>
      <div className="flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.4)] justify-center rounded-2xl w-1/4 ml-3">
        <div className="text-lg">{dateArray[1].substring(0, 3)}</div>
        <div className="text-orange-400 font-semibold text-2xl ">
          {dateArray[2]}
        </div>
        <div className="text-lg">{dateArray[0]}</div>
      </div>
    </>
  );
}
