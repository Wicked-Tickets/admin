import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative pt-14">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Deploy blockchain Tickets with confidence
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Step into a seamless blockchain-based solution for ticketing.
              Effortlessly create and launch a Ticket contract for your events.
              We handle the complex transactions and blockchain intricacies for
              you.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/sign-in/deploys"
                className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                Get started
              </Link>
              <Link
                href="/features"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
