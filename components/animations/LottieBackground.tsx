"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

interface LottieBackgroundProps {
  animationPath: string;
}

export default function LottieBackground({ animationPath }: LottieBackgroundProps) {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch(animationPath)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Lottie loading error:", err));
  }, [animationPath]);

  if (!animationData) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
      <Lottie 
        animationData={animationData} 
        loop={true} 
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
