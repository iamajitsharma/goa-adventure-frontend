import Header from "./Header";
import Lists from "./Lists";

const data = [
  {
    header: "HEader 1",
    lists: [
      "Lorem ipsum dolor sit amet",
      " consectetur, adipisicing elit. Delectus repellat deleniti aperiam commodi",
      " nam voluptatem consequuntur, amet rerum aspernatur! ",
      "Animi ad dicta veritatis odit inventore magnam   nam voluptatem consequuntur, amet rerum aspernatur! fuga quisquam, dolor quidem.",
    ],
  },
  {
    header: "HEader 2",
    lists: [
      "Lorem ipsum dolor sit amet",
      " consectetur, adipisicing elit. Delectus repellat deleniti aperiam commodi",
      " nam voluptatem consequuntur, amet rerum aspernatur! ",
      "Animi ad dicta veritatis odit inventore magnam   nam voluptatem consequuntur, amet rerum aspernatur! fuga quisquam, dolor quidem.",
    ],
  },
  {
    header: "HEader 3",
    lists: [
      "Lorem ipsum dolor sit amet",
      " consectetur, adipisicing elit. Delectus repellat deleniti aperiam commodi",
      " nam voluptatem consequuntur, amet rerum aspernatur! ",
      "Animi ad dicta veritatis odit inventore magnam   nam voluptatem consequuntur, amet rerum aspernatur! fuga quisquam, dolor quidem.",
      " consectetur, adipisicing elit. Delectus repellat deleniti aperiam commodi",
      " nam voluptatem consequuntur, amet rerum aspernatur! ",
    ],
  },
  {
    header: "HEader 4",
    lists: [
      "Lorem ipsum dolor sit amet",
      " consectetur, adipisicing elit. Delectus repellat deleniti aperiam commodi",
      " nam voluptatem consequuntur, amet rerum aspernatur! ",
      " consectetur, adipisicing elit. Delectus repellat deleniti aperiam commodi",
      " nam voluptatem consequuntur, amet rerum aspernatur! ",
      "Animi ad dicta veritatis odit inventore magnam   nam voluptatem consequuntur, amet rerum aspernatur! fuga quisquam, dolor quidem.",
    ],
  },
];
const databullet = [
  {
    header: "HEader 3",
    lists: [
      "Lorem ipsum dolor sit amet",
      " consectetur, adipisicing elit. Delectus repellat deleniti aperiam commodi",
      " nam voluptatem consequuntur, amet rerum aspernatur! ",
      "Animi ad dicta veritatis odit inventore magnam   nam voluptatem consequuntur, amet rerum aspernatur! fuga quisquam, dolor quidem.",
      " consectetur, adipisicing elit. Delectus repellat deleniti aperiam commodi",
      " nam voluptatem consequuntur, amet rerum aspernatur! ",
    ],
  },
  {
    header: "HEader 4",
    lists: [
      "Lorem ipsum dolor sit amet",
      " consectetur, adipisicing elit. Delectus repellat deleniti aperiam commodi",
      " nam voluptatem consequuntur, amet rerum aspernatur! ",
      " consectetur, adipisicing elit. Delectus repellat deleniti aperiam commodi",
      " nam voluptatem consequuntur, amet rerum aspernatur! ",
      "Animi ad dicta veritatis odit inventore magnam   nam voluptatem consequuntur, amet rerum aspernatur! fuga quisquam, dolor quidem.",
    ],
  },
];
export default function Policies() {
  return (
    <div className="flex flex-row justify-center items-center mt-12">
      <div className="flex flex-col mt-8 w-9/12 justify-start">
        {data.map((d) => (
          <div>
            <Header heading={d.header} />
            <Lists lists={d.lists} bullet={false} />
          </div>
        ))}
        {databullet.map((d) => (
          <div>
            <Header heading={d.header} />
            <Lists lists={d.lists} bullet={true} />
          </div>
        ))}
      </div>
      <div className="w-3/12"></div>
    </div>
  );
}
