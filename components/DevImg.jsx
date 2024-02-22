import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc, imgStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image className={`${imgStyles}`} src={imgSrc} fill priority alt="" />
    </div>
  );
};

export default DevImg;
