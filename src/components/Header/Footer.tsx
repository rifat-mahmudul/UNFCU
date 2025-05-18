import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <div className="">
      <div className="container mx-auto py-16 max-w-[750px] px-5 md:px-[50px] bg-[#226bdb]">
        <h2 className="text-white text-2xl md:text-3xl font-normal mb-3">
          Receive your free pre-approval
        </h2>
        <p className="text-white text-base md:text-lg font-light mb-6 max-w-md">
          Connect with our experts to begin the journey toward your next US home
          purchase.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-white border border-white rounded-full px-6 py-3 transition-colors hover:bg-white/10"
        >
          Meet with us
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
