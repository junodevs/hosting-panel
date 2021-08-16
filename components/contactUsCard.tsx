/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

export default function ContactUsCard(): JSX.Element {
  return (
    <div>
      <h2 className="text-white font-semibold uppercase tracking-wide text-center mb-2">
        Custom
      </h2>
      <dl className="text-white flex flex-col items-center mb-auto">
        <div className="mb-6">
          <dt className="sr-only">Price</dt>
          <dd className="text-base font-medium text-gray-400">
            <span className="flex items-end justify-center">
              <span className="text-5xl tracking-tight text-white font-extrabold mx-3">
                $
                ?.??
              </span>
              <span className="text-white">/mo</span>
            </span>
          </dd>
        </div>
        <div className="space-y-4 mb-4">
          <dt className="sr-only">Features</dt>
          <p>
            Need something more than what we offer here? We&apos;ll work with you to create
            exactly what you need for your circumstances.
          </p>
        </div>
      </dl>
      <a
        href="mailto:hi@junohosting.net"
        className="rounded items-center justify-center flex px-5 py-2 transition text-white bg-rose-500 hover:bg-rose-600"
        rel="noopener noreferrer"
        target="_blank"
      >
        Contact Us
      </a>
    </div>
  );
}
