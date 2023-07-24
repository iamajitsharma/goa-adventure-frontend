import Date from "./Date";
import TourInfo from "./TourInfo";
export default function BookingHistoryCard() {
  let newDate: any = "2023-07-24T11:43:43.919Z";
  console.log("TOdya's data", newDate);
  let sampleObject = {
    title: "Scuba Diving Grand Island",
    state: "Goa",
    country: "India",
    bookingDate: "25th Dec 2023",
    status: "Complete",
  };
  return (
    <>
      <div className="flex flex-row ">
        <Date dateOfBooking={newDate} />
        <TourInfo tourData={sampleObject} />
      </div>
    </>
  );
}