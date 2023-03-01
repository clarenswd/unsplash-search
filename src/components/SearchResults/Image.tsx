import { useState } from "react";
import { Blurhash } from "react-blurhash";

const Image = ({
  blur_hash,
  url,
  alt_description,
}: {
  blur_hash: string;
  url: string;
  alt_description: string;
}) => {
  const [showBlur, setShowBlur] = useState(true);

  return (
    <>
      {showBlur && (
        <Blurhash
          hash={blur_hash}
          width={300}
          height={390}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      <img
        src={url}
        alt={alt_description}
        loading="lazy"
        onLoadStart={() => setShowBlur(true)}
        onLoad={() => setShowBlur(false)}
      />
    </>
  );
};

export default Image;
