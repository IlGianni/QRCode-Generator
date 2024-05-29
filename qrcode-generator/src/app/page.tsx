import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import QRCodeCreator from "@/components/QRCodeCreator";

export default function Home() {
  return (
    <section className="min-h-screen bg-grid-zinc-50">
      <MaxWidthWrapper className="relative pb-24 pt-10">
        <div className="px-6">
          <div className="relative mx-auto text-center flex flex-col items-center">
            <h1 className="relative leading-snug w-fit tracking-tight text-balance mt-16 font-bold text-gray-900 text-5xl">
              Make a{" "}
              <span className="whitespace-nowrap text-green-700">QR Code</span>{" "}
              for your text
            </h1>

            <QRCodeCreator />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
