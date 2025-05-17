import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <main className="bg-[#eef2f6]">
      <div className="mx-auto py-16 max-w-[700px] text-center px-5 md:px-0">
        <p className="text-[#2E766F] mb-4 font-medium">US Mortgages</p>

        <h1 className="text-2xl md:text-5xl font-normal text-[#1D3F59] mb-12 leading-tight">
          Shop for a home in the US
          <br />
          with added buying power
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 mb-12">
          <div className="rounded-full overflow-hidden">
            <Image
              src="/hero1.png"
              alt="City apartment building"
              width={192}
              height={192}
              className="object-cover aspect-square lg:w-full w-[90%] mx-auto md:w-[300px]"
            />
          </div>
          <div className="rounded-full overflow-hidden">
            <Image
              src="/hero2.png"
              alt="Coastal property"
              width={192}
              height={192}
              className="object-cover aspect-square lg:w-full w-[90%] mx-auto md:w-[300px]"
            />
          </div>
          <div className="rounded-full overflow-hidden">
            <Image
              src="/hero3.png"
              alt="Suburban house"
              width={192}
              height={192}
              className="object-cover aspect-square lg:w-full w-[90%] mx-auto md:w-[300px]"
            />
          </div>
        </div>

        <p className="text-[#1D3F59] mb-8 max-w-[480px] mx-auto">
          Start the search for your next home, a vacation home, or an investment property knowing how much you can
          afford. Your free UNFCU pre-approval carries no obligation.
        </p>

        <Link
          href="#"
          className="inline-flex items-center justify-center gap-2 bg-[#226bdb] font-semibold text-white px-6 py-3 rounded-full transition-colors"
        >
          Meet with us <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  )
}