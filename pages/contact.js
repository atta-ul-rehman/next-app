import ReactImageMagnify from "react-image-magnify";

const Contact = ({ imageBaseUrl2 }) => {
  const imageBaseUrl =
    "https://static-01.daraz.pk/p/9629525ef6a64598f5f1539c6bae57f9.jpg";

  const sizes = [
    "355",
    "481",
    "584",
    "687",
    "770",
    "861",
    "955",
    "1033",
    "1112",
    "1192",
    "1200",
  ];
  let index = imageBaseUrl.lastIndexOf("/");
  const img1 = imageBaseUrl.slice(0, index);
  const img2 = imageBaseUrl.slice(index + 1);
  const srcSet = () => {
    sizes.forEach((i) => {
      return `${img1}/w_${i},c_scale/${img2}`;
    });
  };
  return (
    <div className="image2">
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Cat",
            isFluidWidth: true,
            src: `${imageBaseUrl}`,
            srcSet,
            sizes:
              "(min-width: 1000px) 33.5vw, (min-width: 415px) 50vw, 1000vw",
          },
          largeImage: {
            alt: "",
            src: `${imageBaseUrl}`,
            width: 1500,
            height: 1500,
          },
          isHintEnabled: true,
        }}
      />
    </div>
  );
};

export default Contact;
