import React from "react";
import Masonry, {
  ResponsiveMasonry,
  MasonryProps,
  ResponsiveMasonryProps,
} from "react-responsive-masonry";
import galleryImages from "./GalleryImages";
import Image from "next/image";

interface MasonryProps {
  children: any;
  columnsCount?: number;
  gutter?: string;
  className?: string;
  style?: any;
}
interface ResponsiveMasonryProps {
  children: any;

  columnsCountBreakPoints?: {
    [key: number]: number;
  };
  className?: string;
  style?: any;
}

const MasonryImagesGallery: React.FC<MasonryProps> = ({
  children,
  columnsCount,
  gutter,
  className,
  style,
}) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry>
        {galleryImages.map((item, index) => (
          <Image
            className="transition duration-75 hover:transform hover:scale-110"
            src={item}
            key={index}
            alt=""
            style={{ width: "100%", display: "block", borderRadius: "10px" }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImagesGallery;
