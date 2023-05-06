import ListingCard from "./ListingCard";
import TourCardImg from "../../../public/assets/tourcard.jpeg";

const ActivityListing = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-2 gap-4 px-5 md:grid-cols-4">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((num) => (
          <ListingCard
            title="Goa Tour Package"
            image={TourCardImg}
            location="Goa"
            duration="3N/4D"
            review={4.5}
            reviewCount={`(450 reviews)`}
            salePrice={2500}
            regularPrice={5000}
            discount={`25%`}
          />
        ))}
      </div>
    </section>
  );
};

export default ActivityListing;
