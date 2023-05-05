export default function CarouselNextArrow(props: any) {
  const { className, style, onClick } = props;

  return (
    <div className="bg-red-500">
      <div
        className={className}
        style={{ ...style, display: "block", padding: "4px 16px" }}
        onClick={onClick}
      />
    </div>
  );
}
