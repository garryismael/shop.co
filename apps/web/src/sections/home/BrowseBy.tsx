import { browses } from "@/constants/home";
import Image from "next/image";

const BrowseBy = () => {
  return (
    <section className="px-4">
      <div className="bg-anti-flash-white rounded-[20px] pt-10 pb-7 px-6">
        <h1 className="title">Browse by dress style</h1>
        <div className="grid grid-cols-1 gap-4 pt-7">
          {browses.map((browse) => (
            <div
              key={browse.name}
              className="relative h-48 overflow-hidden rounded-[20px] bg-white">
              <div className={`relative max-w-full ${browse.imgClassName}`}>
                <Image
                  src={browse.image}
                  alt={browse.name}
                  fill
                  className={`object-cover w-full h-full min-h-48 ${browse.className}`}
                />
              </div>
              <h3 className="absolute left-6 top-4 font-satoshi-bold text-2xl text-black z-20 font-bold">
                {browse.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseBy;
