import { Mail } from "lucide-react";
import { Input } from "@ui/components/ui/input";
import { Button } from "@ui/components/ui/button";

const SubscribeNewsletters = () => {
  return (
    <section className="px-4">
      <div className="bg-black rounded-[20px] pt-8 px-6 pb-7">
        <h1 className="title !text-white !text-left">
          Stay up to date about our latest offers
        </h1>
        <form className="w-full pt-8">
          <div className="w-full relative">
            <Input
              className="rounded-full w-full py-3 pr-4 pl-12 bg-white placeholder:text-sm"
              placeholder="Enter your email address"
            />
            <Mail className="text-black/40 absolute top-1/2 left-3.5 -translate-y-1/2" />
          </div>
          <Button
            variant="outline"
            className="mt-3 w-full rounded-full font-satoshi-medium font-medium text-sm">
            Subscribe to Newsletter
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeNewsletters;
