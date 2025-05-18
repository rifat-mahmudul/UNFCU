import Image from "next/image";
import Link from "next/link";

export default function WebinarCard() {
  return (
    <div className="">
      <div className="container mx-auto max-w-[750px] px-0 md:px-8 pb-16 bg-[#f8f9fb]">
        <div className="flex flex-col md:flex-row px-5 md:px-[30px] items-start gap-4 mx-auto bg-white py-6 md:py-16">
          <div className="flex-shrink-0">
            <div>
              <Image
              src={'/light.png'}
              alt="light"
              height={20}
              width={20}
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-medium text-[#1d3f59] mb-4">
              On-demand webinar: US homebuying for global citizens
            </h2>
            <p className="text-[#1d3f59] text-lg">
              If you missed this virtual event, each informative session is now
              available for you to{" "}
              <Link href="#" className="text-[#226BDB] underline">
                watch on demand on our website
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
