interface IlistsProps {
  lists: string[];
  bullet?: Boolean;
}
export default function Lists({ lists = [], bullet = true }: IlistsProps) {
  return (
    <div className={`mx-12 px-1 my-10`}>
      <ul className={`${bullet ? "list-disc" : ""}`}>
        {lists.map((list) => (
          <li className={`${bullet ? "" : "my-2"}`}>{list}</li>
        ))}
      </ul>
    </div>
  );
}
