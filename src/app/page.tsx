import PropertyCard from "@/compontent/properties/propertyCard/PropertyCard";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
export default function Home() {
  return (
    <div>
      <div className="cardsContainer">
        {/* <Button>helloooo</Button> */}
        {Array(8)
          .fill(0)
          .map((each) => (
            <PropertyCard
              title="Prestige Park Grove"
              tags={["Apartment", "New Launch"]}
              benefits={["Cashback Starting from ₹75 K "]}
              location="Whitefield Hope Farm Junction, Bengaluru"
              price="₹4.80 Cr"
              subheading="4 BHK+4T | 3900 sq ft"
              images={[
                "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/89485/pexels-photo-89485.jpeg?auto=compress&cs=tinysrgb&w=600",
                // "/images/property2.jpg",
                // "/images/property3.jpg", // Replace these paths with actual image URLs
              ]}
            />
          ))}
      </div>
    </div>
  );
}
