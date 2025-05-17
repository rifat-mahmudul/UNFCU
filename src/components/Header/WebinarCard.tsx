import Image from "next/image";
import Link from "next/link";

export default function WebinarCard() {
  return (
    <div className="bg-[#f8f9fb] pb-16">
      <div className="container mx-auto md:p-16 lg:p-16 max-w-4xl bg-white px-5 md:px-0 py-16">
        <div className="flex flex-col md:flex-row items-start gap-4 max-w-[700px] mx-auto">
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
