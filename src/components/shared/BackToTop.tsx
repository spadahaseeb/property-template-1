"use client";
import { ArrowUp } from "lucide-react";
import { twMerge } from "tailwind-merge";
// components
import Button from "@/components/shared/Button";
import useScrollPosition from "@/hooks/useScrollPosition";

const BackToTop = () => {
  const isScrolled = useScrollPosition(50);

  return (
    <>
      <div
        className={twMerge(
          "fixed sm:right-[30px] sm:bottom-[30px] right-[15px] bottom-[15px] transition-all duration-300 ease-in-out z-200",
          isScrolled
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <Button
          variant="v3"
          isLinkEnable={false}
          buttonIcon={<ArrowUp size={18} strokeWidth={1} />}
          className="bg-black-smooth sm:w-[50px] sm:h-[50px] w-10 h-10  text-white"
          buttonIconStyles="p-0"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
      </div>
    </>
  );
};
export default BackToTop;
