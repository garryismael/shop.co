import StatsOverview from "@/components/StatsOverview";
import { stats } from "@/constants/hero";
import { Button } from "@ui/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-white-smoke pt-32">
      <div className="px-4">
        <h1 className="uppercase font-integral-cf-bold text-4xl">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-sm text-black/60 mt-5">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button className="w-full rounded-full mt-6">Shop Now</Button>
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 items-center content-center place-items-center mt-5">
          {stats.map((stat, index) => (
            <StatsOverview
              key={index}
              {...stat}
              className={`${
                index === stats.length - 1
                  ? "col-span-2 justify-self-center"
                  : ""
              }`}
            />
          ))}
        </div>
      </div>
      <div className="h-[448px] overflow-hidden relative">
        <Image src="/images/hero.jpg" alt="hero" height={2730} width={4096}/>
        <Image src="/images/stroke-1.svg" alt="stroke" width={104} height={104} className="absolute right-5 top-14 h-16 w-16" />
        <Image src="/images/stroke-2.svg" alt="stroke" width={56} height={56} className="absolute left-7 top-1/3 h-11 w-11" />
      </div>
    </section>
  );
};

export default HeroSection;
