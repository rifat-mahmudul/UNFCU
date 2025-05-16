import Image from "next/image";

export default function PreApprovalBenefits() {
  return (
    <div className="bg-[#f8f9fb]">
      <div className="container mx-auto px-16 py-16 max-w-4xl">
        <h2 className="text-2xl lg:text-3xl font-medium text-[#1d3f59] mb-5 text-center">
          With a UNIFI-CU pre-approval, you can:
        </h2>

        <div className="space-y-8">
          <div className="flex items-start gap-3">
            <div>
              <Image src={"/clock.png"} alt="clock" height={40} width={40} />
            </div>

            <div>
              <h3 className="font-medium text-2xl text-[#1d3f59]">Save time</h3>
              <p className="text-[16px] text-[#5A6978] mt-1 leading-tight">
                Position yourself to close quickly by clearing required steps
                early in the mortgage process.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div>
              <Image src={"/carv.png"} alt="clock" height={40} width={40} />
            </div>

            <div>
              <h3 className="font-medium text-xl text-[#1d3f59]">
                Budget better
              </h3>
              <p className="text-[16px] text-[#5A6978] mt-1 leading-tight">
                Understand how much you can afford so you can focus on homes
                that are within your price range.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div>
              <Image src={"/list.png"} alt="clock" height={40} width={40} />
            </div>

            <div>
              <h3 className="font-medium text-xl text-[#1d3f59]">
                Impress sellers
              </h3>
              <p className="text-[16px] text-[#5A6978] mt-1 leading-tight">
                A pre-approval tells sellers and real estate agents that you are
                serious, reliable, and prepared to finance a purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
