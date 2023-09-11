import {
  animate,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { Shadow } from "../../enum/Shadow";

export const useRaisedShadow = (motionValue: MotionValue<number>) => {
  const boxShadow = useMotionValue(Shadow.IN_ACTIVE_SHADOW);

  const setActiveShadow = (boxShadow: MotionValue<Shadow>) => {
    animate(boxShadow, Shadow.ACTIVE_SHADOW);
  };

  const setInActiveShadow = (boxShadow: MotionValue<Shadow>) => {
    animate(boxShadow, Shadow.IN_ACTIVE_SHADOW);
  };

  const updateShadow = (isActive: boolean) => {
    isActive ? setActiveShadow(boxShadow) : setInActiveShadow(boxShadow);
  };

  useMotionValueEvent(motionValue, "change", (latestMotionValue) => {
    const isActive = latestMotionValue !== 0;
    updateShadow(isActive);
  });

  return boxShadow;
};
