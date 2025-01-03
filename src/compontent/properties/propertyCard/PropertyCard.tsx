import ImageCarousel from "@/compontent/imageCarousel/ImageCarousel";
import Location from "@/helper/images/location.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Chip, IconButton } from "@mui/material";
import Image from "next/image";
import "./propertyCard.css";

interface PropertyCardType {
  title: string;
  tags: string[];
  benefits?: string[];
  location: string;
  price: string;
  subheading: string;
  images: string[];
  onFavoriteClick?: () => void;
}

const PropertyCard = ({
  title,
  tags,
  benefits,
  location,
  price,
  subheading,
  images,
  onFavoriteClick,
}: PropertyCardType) => {
  const tagsList = (
    <div className="tags">
      {tags.map((tag, index) => (
        <Chip
          key={index}
          label={tag}
          clickable={false}
          color={index % 2 === 0 ? "primary" : undefined}
          style={
            index % 2 !== 0
              ? { backgroundColor: "#B62681", color: "white" }
              : undefined
          }
        />
      ))}
    </div>
  );

  const benefitsList = (
    <div className="benefits">
      {benefits?.map((each) => (
        <p>{each}</p>
      ))}
    </div>
  );

  return (
    <div className="property_card">
      <div className="imgs">
        <ImageCarousel images={images} />

        { benefits?.length ? <div className="top_tags">{tagsList}</div> : null}
      </div>
      <div className="text_area">
        <div className="tags_area">
          {benefits?.length ? benefitsList : tagsList}

          <IconButton onClick={onFavoriteClick}>
            <FavoriteBorderIcon
              sx={{
                fontSize: 22,
                color: "#EC0000",
              }}
            />
          </IconButton>
        </div>
        <p className="header">{title}</p>
        <div className="location">
          <Image src={Location} alt="location" />
          <p>{location}</p>
        </div>
        <p className="price">{price}</p>
        <p className="subheading">{subheading}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
