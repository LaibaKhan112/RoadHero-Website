import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | RoadHero",
  description:
    "Read the terms and conditions that govern use of the RoadHero customer and provider apps.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="flex w-full flex-1 flex-col">
      <section className="w-full bg-neutral-900 pb-10 pt-28 text-white sm:pt-32">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-sm text-neutral-400">
            Last updated: July 16, 2026
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-12 sm:py-16">
        <div className="mx-auto w-full max-w-4xl space-y-10 px-4 text-neutral-700 sm:px-6 lg:px-8">
          <p className="leading-7">
            These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your
            access to and use of the RoadHero website and mobile apps
            (together, the &ldquo;Platform&rdquo;), which connect drivers
            (&ldquo;Customers&rdquo;) with independent roadside service
            providers (&ldquo;Providers&rdquo;). By accessing or using the
            Platform, you agree to these Terms.
          </p>

          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              1. Acceptance of Terms
            </h2>
            <p className="mt-3 leading-7">
              By creating an account or using RoadHero, you confirm that you
              are able to enter into a binding agreement and agree to comply
              with these Terms and any policies referenced here.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              2. Description of Service
            </h2>
            <p className="mt-3 leading-7">
              RoadHero is a marketplace that helps Customers request roadside
              assistance services — including towing, jump starts, flat tire
              changes, fuel delivery, lockout help, car washes, and oil
              changes — and helps independent Providers find and fulfill
              those requests. RoadHero does not itself perform roadside
              services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              3. User Accounts
            </h2>
            <p className="mt-3 leading-7">
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activity that occurs under your
              account. You agree to provide accurate and complete information
              when creating an account.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              4. Provider Responsibilities
            </h2>
            <p className="mt-3 leading-7">
              Providers are independent contractors, not employees or agents
              of RoadHero. Providers are responsible for holding any licenses,
              permits, and insurance required to perform the services they
              offer, and for performing services safely and professionally.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              5. Customer Responsibilities
            </h2>
            <p className="mt-3 leading-7">
              Customers agree to provide accurate service request details,
              treat Providers respectfully, and pay for services rendered
              through the Platform in accordance with the displayed pricing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              6. Payments &amp; Fees
            </h2>
            <p className="mt-3 leading-7">
              Prices for services are shown in the app prior to booking.
              RoadHero may charge a service or platform fee, and Providers
              receive payouts for completed jobs on the schedule described in
              the app. All payments are processed through our third-party
              payment processors.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              7. Prohibited Conduct
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
              <li>Using the Platform for any unlawful purpose.</li>
              <li>
                Providing false information about yourself, your vehicle, or
                your services.
              </li>
              <li>
                Attempting to circumvent the Platform to avoid fees.
              </li>
              <li>
                Harassing, threatening, or abusing other users.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              8. Limitation of Liability
            </h2>
            <p className="mt-3 leading-7">
              To the fullest extent permitted by law, RoadHero is not liable
              for any indirect, incidental, or consequential damages arising
              from your use of the Platform or services performed by
              independent Providers. The Platform is provided &ldquo;as
              is&rdquo; without warranties of any kind.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              9. Termination
            </h2>
            <p className="mt-3 leading-7">
              We may suspend or terminate your access to the Platform if you
              violate these Terms or engage in conduct that we determine, in
              our discretion, is harmful to other users or to RoadHero.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              10. Governing Law
            </h2>
            <p className="mt-3 leading-7">
              These Terms are governed by the laws of the jurisdiction in
              which RoadHero operates, without regard to conflict of law
              principles.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              11. Changes to These Terms
            </h2>
            <p className="mt-3 leading-7">
              We may update these Terms from time to time. Continued use of
              the Platform after changes take effect constitutes acceptance
              of the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              12. Contact Us
            </h2>
            <p className="mt-3 leading-7">
              Questions about these Terms can be sent to{" "}
              <a
                href="mailto:info@roadherosapp.com"
                className="text-roadhero-orange hover:underline"
              >
                info@roadherosapp.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
