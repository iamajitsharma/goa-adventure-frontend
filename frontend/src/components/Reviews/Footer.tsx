interface IFooterProps {
  images: string[];
}
export default function Footer({ images = [] }: IFooterProps) {
  return (
    <div className="flex flex-row justify-start my-8 py-2">
      {images.map((image) => (
        <img src={image} alt="Feedback iamge" className="mr-8" />
      ))}
    </div>
  );
}
