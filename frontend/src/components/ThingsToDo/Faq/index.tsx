import Header from "./Header";
import Body from "./Body";
import Number from "./Number";

const data = [
  {
    number: "01",
    header: "Question 1",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos reiciendis suntdolor sit, amet consectetur adipisicing elit. E ullam maiores. Quibusdam non obcaecati quidem voluptate amet consectetur adconsequuntur magni, aut ratione assumenda ullam illo ipsam mollitia cum corporis molestias.",
  },
  {
    number: "02",
    header: "Question 2",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos reiciendis suntdolor sit, amet consectetur adipisicing elit.amet consectetur ad E ullam maiores. Quibusdam non obcaecati quidem voluptate consequuntur magni, aut ratione assumenda ullam illo ipsam mollitia cum corporis molestias.",
  },
  {
    number: "03",
    header: "Question 3",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos reiciendis suntdolor sit, amet consectetur adipisicing elit. E ullam maiores. Quibusdam non obcaecati quidem voluptate consequuntur magni, aut ratione assumenda ullam illo ipsam mollitia cum corporis molestias.",
  },
  {
    number: "04",
    header: "Question 4",
    body: " sit, amet consectetur adipisicing elit. E ullam maiores. Quibusdam non obcaecati quidem voluptate consequuntur magni, aut ratione assumendaamet consecteamet consectetur adtur ad ullam illo ipsam mollitia cum corporiamet consectetur ad amet consectetur ad amet consectetur ad s molestias.",
  },
];

export default function Faq() {
  return (
    <div className="flex flex-row justify-center items-center mt-12 mx-6">
      <div className="flex flex-col mt-8 w-9/12 justify-start ">
        <div className="text-2xl my-4 mb-12 mx-4 ">
          Scuba Diving Grand Island FAQ's{" "}
        </div>
        {data.map((d) => (
          <div className="flex flex-row my-4">
            <Number number={d.number} />
            <div className="flex flex-col ">
              <Header question={d.header} />
              <Body answer={d.body} />
            </div>
          </div>
        ))}
      </div>
      <div className="w-3/12"></div>
    </div>
  );
}
