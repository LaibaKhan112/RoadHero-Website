import Image from "next/image";

export default function AppShowcaseSection() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-2">
          <div
            id="customer-app"
            className="relative aspect-1672/941 w-full scroll-mt-20"
          >
            <Image
              src="/images/apps/customer-app-showcase.png"
              alt="RoadHero Customer App showcase: easy booking, live tracking, multiple payment options, real-time notifications, and rate & review"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain"
            />
          </div>

          <div
            id="provider-app"
            className="relative aspect-1672/941 w-full scroll-mt-20"
          >
            <Image
              src="/images/apps/provider-app-showcase-v2.png"
              alt="RoadHero Provider App showcase: live service requests, earnings overview, job history, navigation support, and profile management"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
