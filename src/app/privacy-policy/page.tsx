import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | RoadHero",
  description:
    "Learn how RoadHero collects, uses, and protects your information across the customer and provider apps.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex w-full flex-1 flex-col">
      <section className="w-full bg-neutral-900 pb-10 pt-28 text-white sm:pt-32">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-neutral-400">
            Last updated: July 16, 2026
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-12 sm:py-16">
        <div className="mx-auto w-full max-w-4xl space-y-10 px-4 text-neutral-700 sm:px-6 lg:px-8">
          <p className="leading-7">
            RoadHero (&ldquo;RoadHero&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
            &ldquo;our&rdquo;) provides a platform that connects drivers with
            nearby roadside service providers for towing, jump starts, flat
            tires, fuel delivery, lockout help, car washes, oil changes and
            related services. This Privacy Policy explains what information we
            collect through our website and mobile apps, how we use it, and
            the choices you have.
          </p>

          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              1. Information We Collect
            </h2>
            <p className="mt-3 leading-7">
              We collect information you provide directly, such as your name,
              email address, phone number, vehicle details, payment
              information, and — for providers — business and identity
              verification details. We also collect information automatically
              when you use our apps, including location data (to match you
              with nearby providers or jobs), device information, and usage
              data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              2. How We Use Information
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
              <li>To connect drivers with nearby available providers.</li>
              <li>
                To process bookings, payments, and provider payouts.
              </li>
              <li>
                To communicate with you about your account, service requests,
                and support inquiries.
              </li>
              <li>
                To maintain the safety, security, and reliability of the
                RoadHero platform.
              </li>
              <li>
                To improve our services and develop new features.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              3. Sharing of Information
            </h2>
            <p className="mt-3 leading-7">
              We share the minimum information necessary between a customer
              and a provider to complete a service request (such as name,
              location, and vehicle details). We may also share information
              with payment processors, service providers who support our
              platform, and when required by law. We do not sell your
              personal information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              4. Data Security
            </h2>
            <p className="mt-3 leading-7">
              We use reasonable administrative, technical, and physical
              safeguards designed to protect your information from
              unauthorized access, use, or disclosure. No method of
              transmission or storage is completely secure, so we cannot
              guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              5. Cookies &amp; Tracking
            </h2>
            <p className="mt-3 leading-7">
              Our website may use cookies and similar technologies to keep
              you signed in, remember your preferences, and understand how
              our site is used. You can control cookies through your browser
              settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              6. Children&rsquo;s Privacy
            </h2>
            <p className="mt-3 leading-7">
              RoadHero is not directed to children under 18, and we do not
              knowingly collect personal information from children.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              7. Your Rights &amp; Choices
            </h2>
            <p className="mt-3 leading-7">
              Depending on where you live, you may have the right to access,
              correct, or delete your personal information, or to object to
              certain processing. You can update most account information
              directly in the app, or contact us using the details below.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              8. Changes to This Policy
            </h2>
            <p className="mt-3 leading-7">
              We may update this Privacy Policy from time to time. We will
              post the updated version on this page with a revised
              &ldquo;Last updated&rdquo; date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              9. Contact Us
            </h2>
            <p className="mt-3 leading-7">
              If you have questions about this Privacy Policy, contact us at{" "}
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
