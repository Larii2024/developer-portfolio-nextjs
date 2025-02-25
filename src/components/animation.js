import dynamic from "next/dynamic";
import React from "react";

// Dynamically import LottieReact with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  if (typeof window === "undefined") return null; // Prevents errors during SSR

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || "95%",
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
