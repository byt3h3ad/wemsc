"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";

export const LikeButton = ({ inactive, active }) => {
  const [isLiked, setIsLiked] = useState(false);
  const HeartIcon = isLiked ? inactive : active;
  return (
    <button className="">
      <Icon
        icon={HeartIcon}
        onClick={() => setIsLiked(!isLiked)}
        className={
          isLiked ? "text-green-500" : "text-neutral-400" + " hover:opacity-90"
        }
        fontSize={30}
      />
    </button>
  );
};
