import ListingCard from "./ListingCard";
import TourCardImg from "../../../public/assets/tourcard.jpeg";
import Heading from "../common/Heading";

const ActivityListing = () => {
  return (
    <section className="w-screen lg:py-4 bg-white py-24">
      <Heading heading={"Popular Adventure Activities"} />
      <div className="grid grid-cols-2 gap-4 px-5 md:grid-cols-4 md:max-w-7xl mx-auto">
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
            href="localhost"
          />
        ))}
      </div>
    </section>
  );
};

export default ActivityListing;
