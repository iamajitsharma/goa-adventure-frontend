export default function CarouselNextArrow(props: any) {
  const { className, style, onClick } = props;

  return (
    <div>
      <div
        className={className}
        style={{ ...style, display: "block", padding: "4px 16px" }}
        onClick={onClick}
      />
    </div>
  );
}
