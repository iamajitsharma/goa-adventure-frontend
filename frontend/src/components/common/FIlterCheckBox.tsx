interface IFilterCheckBoxProps {
  label: string;
}
export default function FilterCheckBox({ label }: IFilterCheckBoxProps) {
  return (
    <>
      <span className="mx-6 mt-2 ">
        {" "}
        <input
          type="checkbox"
          id="instantBooking"
          name=""
          value=""
          className="mr-3 border-[2px] border-gray-400"
        />
        <label htmlFor="instantBooking">{label}</label>
      </span>
    </>
  );
}
