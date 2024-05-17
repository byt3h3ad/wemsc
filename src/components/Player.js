"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { Slider } from "./Slider";
import { MediaItem } from "./MediaItem";
import { LikeButton } from "./LikeButton";

export const Player = () => {
  const [play, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0.6);
  const toggleMute = () => {
    if (volume === 0) {
      setVolume(1);
    } else {
      setVolume(0);
    }
  };
  const PlayerIcon = play ? "material-symbols:pause" : "mdi:play";
  const VolumeIcon =
    volume === 0 ? "iconamoon:volume-off" : "iconamoon:volume-up";

  return (
    <div className="fixed bottom-0 bg-zinc-950 w-full py-2 h-24 px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 h-full">
        <div className="flex w-full justify-start">
          <div className="flex items-center gap-x-4 ">
            <MediaItem link={""} name="Dark" artist="Taylor Swift" />
            <LikeButton
              active="iconamoon:heart-light"
              inactive="iconamoon:heart-fill"
            />
            <LikeButton
              active="basil:add-outline"
              inactive="basil:checked-box-solid"
              className="hidden md:block"
            />
          </div>
        </div>
        <div className="flex md:hidden col-auto w-full justify-end items-center">
          <div
            onClick={() => {
              setPlay(!play);
            }}
            className="h-10 w-10 flex items-center justify-center cursor-pointer rounded-full bg-white p-1 "
          >
            <Icon icon={PlayerIcon} className="text-black h-10 w-10" />
          </div>
        </div>
        <div className="hidden md:grid py-2">
          <div className="h-full w-full hidden md:flex justify-center items-center max-w-2xl gap-x-6">
            <Icon
              icon="iconoir:shuffle"
              fontSize={24}
              className="text-neutral-400 cursor-pointer hover:text-white transition"
            />
            <Icon
              icon="lucide:skip-back"
              fontSize={24}
              className="text-neutral-400 cursor-pointer hover:text-white transition"
            />
            <div
              onClick={() => {
                setPlay(!play);
              }}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-neutral-400 hover:bg-white cursor-pointer"
            >
              <Icon icon={PlayerIcon} className="text-black h-7 w-7" />
            </div>
            <Icon
              icon="lucide:skip-forward"
              fontSize={24}
              className="text-neutral-400 cursor-pointer hover:text-white transition"
            />
            <Icon
              icon="iconoir:repeat"
              fontSize={24}
              className="text-neutral-400 cursor-pointer hover:text-white transition"
            />
          </div>
          <Slider value={progress} onChange={(e) => setProgress(e)} />
        </div>
        <div className="hidden md:flex w-full justify-end pr-2">
          <div className="flex items-center justify-end gap-x-4 w-full xl:w-1/2">
            <Icon
              onClick={toggleMute}
              icon={VolumeIcon}
              fontSize={24}
              className="text-neutral-400 hover:text-white cursor-pointer hover:scale-110 transition"
            />
            <div className="w-20">
            <Slider value={volume} onChange={(e) => setVolume(e)} />
            </div>
            <Icon icon="iconamoon:microphone-light" fontSize={24} />
            <Icon icon="hugeicons:computer-phone-sync" fontSize={24} />
            <Icon icon="cil:share-alt" fontSize={24} />
          </div>
        </div>
      </div>
    </div>
  );
};
