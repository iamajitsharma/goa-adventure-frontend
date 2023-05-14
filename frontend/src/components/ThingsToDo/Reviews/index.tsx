import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
export default function Reviews() {
  const data = [
    {
      header: {
        noOfStars: [0, 1, 2, 3, 4],
        name: "Ajit Sharma",
        date: "11-May-2023",
      },
      body: "Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur corporis animi nulla libero molestias, corrupti tenetur. Tempora debitis, vitae consectetur ullam vel possimus. Ullam eum sequi itaque facere ut libero. adipisicing elit. Consectetur corporis animi nulla libero molestias, corrupti tenetur. Tempora debitis, vitae consectetur ullam vel possimus. Ullam eum sequi itaque facere ut libero.",
      footer: [
        "/Feedback.png",
        "/Feedback.png",
        "/Feedback.png",
        "/Feedback.png",
        "/Feedback.png",
      ],
    },
    {
      header: {
        noOfStars: [0, 1, 2, 3, 4],
        name: "Ajit Sharma",
        date: "11-May-2023",
      },
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur corporis animi nulla libero molestias, corrupti tenetur. Tempora debitis, vitae consectetur ullam vel possimus. Ullam eum sequi itaque facere ut libero. Consectetur corporis animi nulla libero molestias, corrupti tenetur. Tempora debitis, vitae consectetur ullam vel possimus. Ullam eum sequi itaque facere ut libero.",
      footer: [
        "/Feedback.png",
        "/Feedback.png",
        "/Feedback.png",
        "/Feedback.png",
        "/Feedback.png",
      ],
    },
    {
      header: {
        noOfStars: [0, 1, 2, 3, 4],
        name: "Ajit Sharma",
        date: "11-May-2023",
      },
      body: " amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur corporis animi nulla libero molestias, corrupti tenetur. Tempora debitis, vitae consectetur ullam vel possimus. Ullam eum sequi itaque facere ut libero. Consectetur corporis animi nulla libero molestias, corrupti tenetur. Tempora debitis, vitae consectetur ullam vel possimus. Ullam eum sequi itaque facere ut libero.",
      footer: [
        "/Feedback.png",
        "/Feedback.png",
        "/Feedback.png",
        "/Feedback.png",
        "/Feedback.png",
      ],
    },
    {
      header: {
        noOfStars: [0, 1, 2, 3],
        name: "Ajit Sharma",
        date: "12-May-2023",
      },
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur corporis animi nulla libero molestias, corrupti tenetur. Tempora debitis, vitae consectetur ullam vel possimus. Ullam eum sequi itaque facere ut libero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur corporis animi nulla libero molestias, corrupti tenetur. Tempora debitis, vitae consectetur ullam vel possimus. Ullam eum sequi itaque facere ut libero.",
      footer: ["/Feedback.png", "/Feedback.png", "/Feedback.png"],
    },
  ];
  return (
    <div className="flex flex-row justify-center items-center mt-12">
      <div className="flex flex-col mt-8 w-9/12">
        <div className="text-2xl my-4 mx-20">Review</div>
        {data.map((d) => (
          <div className="mx-8 p-8 my-2 custom-shadow">
            <Header
              noOfStars={d.header.noOfStars}
              name={d.header.name}
              date={d.header.date}
            />
            <Body text={d.body} />
            <Footer images={d.footer} />
          </div>
        ))}
      </div>
      <div className="w-3/12"></div>
    </div>
  );
}
