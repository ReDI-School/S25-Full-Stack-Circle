import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import styles from "./CardDetailPage.module.css";
import { cards } from "./cardDetails";

const CardDetailPage = () => {
  const { id } = useParams();

  const card = cards[parseInt(id)];

  const categories = [
    { name: "Explore", link: "/explore" },
    { name: "Electronics", link: "/electronics" },
    { name: "Cell Phones And Accessories", link: "/phones-accessories" },
    { name: "Phone Accessories", link: "/phone-accessories" }
  ];

  if (!card) {
    return <div className="card-detail-page">Card not found!</div>;
  }

  const galleryImages = [
  {
    src: "https://i.pinimg.com/236x/bc/3c/cc/bc3ccc733a0ac6ac294888b06665a470.jpg",
    tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"]
  },
  {
    src: "https://i.pinimg.com/236x/6d/c5/dd/6dc5dd834698dd083ebc1ddb319df53f.jpg",
    tags: ["Example A", "Example B", "Example C", "Example D", "Example E"]
  },
  {
    src: "https://i.pinimg.com/236x/17/74/ef/1774ef031f3c94300f193980216bd0d0.jpg",
    tags: []
  },
  {
    src: "https://i.pinimg.com/236x/5a/d6/5e/5ad65eaace8223210c035152cf52fca7.jpg",
    tags: ["Nature", "Adventure", "Travel", "Explore", "Landscapes"]
  },
  {
    src: "https://i.pinimg.com/236x/0d/36/80/0d368099a12f5e66951a9b938bd66740.jpg",
    tags: ["Nature", "Adventure", "Travel", "Explore", "Landscapes"]
  },
  {
    src: "https://i.pinimg.com/236x/a2/c9/00/a2c90037b015bef8de2a6b6e8cb0053a.jpg",
    tags: ["Paper Birthday Decorations"]
  },
  {
    src: "https://i.pinimg.com/236x/e8/87/20/e88720cabf9ec57aabc943d0c9a5e8a1.jpg",
    tags: ["Nature", "Adventure", "Travel"]
  },
  {
    src: "https://i.pinimg.com/236x/ad/ba/81/adba8160b0862e6ddbf3333eba7b5ae3.jpg",
    tags: []
  }
];

  return (
    <div className={styles.cardDetailPage}>
      <Breadcrumb categories={categories} />
      <div className={styles.cardImageContainer}>
        <img src={card.image} alt={card.title} />
        <div className={styles.cardOverlay}>
          <h1>{card.title}</h1>
          <p>{card.description}</p>
        </div>
      </div>
      <h3>{card.subtitle}</h3>

      <div className={styles.galleryContainer}>
        <div className={styles.gallery}>
          {galleryImages.map((image, index) => (
            <div key={index} className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <img src={image.src} alt={`Gallery ${index + 1}`} className={styles.image} />
                <div className={styles.overlay}>
                  <span className={styles.overlayText}>Open</span>
                  <div className={styles.overlayButtons}>
                    <img src="/images/share-icon.svg" alt="Share" className={styles.shareIcon} />
                    <img src="/images/more-icon.svg" alt="More" className={styles.moreIcon} />
                  </div>
                </div>
              </div>
              <div className={styles.tags}>
                {image.tags.map((tag, tagIndex) => (
                  <div key={tagIndex} className={styles.tag}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardDetailPage;
