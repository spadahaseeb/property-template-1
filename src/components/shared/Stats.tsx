import { StatsPropType } from "@/assets/types";
import { twMerge } from "tailwind-merge";
// component

export const Stats = ({
  statStyle,
  statDiscriptionStyle,
  stat,
  statDiscription,
  className,
  children,
}: StatsPropType) => {
  return (
    <div className={twMerge("text-center", className)}>
      <h5
        className={twMerge(
          "md:text-[40px] sm:text-[30px] text-[20px] font-medium",
          statStyle
        )}
      >
        {stat}
      </h5>
      <p className={twMerge("text-[15px] font-normal", statDiscriptionStyle)}>
        {statDiscription}
      </p>

      {children && children}
    </div>
  );
};

export default Stats;
