import React, { Dispatch, SetStateAction } from 'react';

function AccountMenu({
  displayAccMenu,
  setDisplayAccMenu,
}: {
  displayAccMenu: string;
  setDisplayAccMenu: Dispatch<SetStateAction<string>>;
}) {
  const toggleAccMenu = () => {
    if (displayAccMenu === 'block') setDisplayAccMenu('hidden');
    else setDisplayAccMenu('block');
  };
  const hideMenu = () => setDisplayAccMenu('hidden');
  return (
    <>
      <ul
        className={`fixed right-5 top-20 z-50 w-52 space-y-1 bg-light-surface ${displayAccMenu} transition-all duration-1000 ease-in-out`}
      >
        <li>
          <a
            href="/dashboard"
            className="flex items-center gap-2 rounded-lg px-4 py-2 transition-all duration-1000 ease-in-out hover:bg-palettes-primary-98 hover:text-light-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <span className="text-sm font-medium"> General </span>
          </a>
        </li>

        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="group flex items-center justify-between rounded-lg px-4 py-2 hover:bg-palettes-primary-98 hover:text-light-primary">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>

                <span className="text-sm font-medium"> Teams </span>
              </div>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <ul className="mt-2 space-y-1 px-4">
              <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium hover:bg-palettes-primary-98 hover:text-light-primary"
                >
                  Banned Users
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium hover:bg-palettes-primary-98 hover:text-light-primary"
                >
                  Calendar
                </a>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 transition-all duration-1000 ease-in-out hover:bg-palettes-primary-98 hover:text-light-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>

            <span className="text-sm font-medium"> Billing </span>
          </a>
        </li>

        <li>
          <a
            href="/dashboard/bookings"
            className="flex items-center gap-2 rounded-lg px-4 py-2 transition-all duration-1000 ease-in-out hover:bg-palettes-primary-98 hover:text-light-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>

            <span className="text-sm font-medium"> Bookings </span>
          </a>
        </li>

        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="group flex items-center justify-between rounded-lg px-4 py-2 hover:bg-palettes-primary-98 hover:text-light-primary">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>

                <span className="text-sm font-medium"> Account </span>
              </div>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <ul className="mt-2 space-y-1 px-4">
              <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium hover:bg-palettes-primary-98 hover:text-light-primary"
                >
                  Details
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium hover:bg-palettes-primary-98 hover:text-light-primary"
                >
                  Security
                </a>
              </li>

              <li>
                <form action="#">
                  <button
                    type="submit"
                    className="w-full rounded-lg px-4 py-2 text-sm font-medium [text-align:_inherit] hover:bg-palettes-primary-98 hover:text-light-primary"
                  >
                    Logout
                  </button>
                </form>
              </li>
            </ul>
          </details>
        </li>
      </ul>
      <div
        className={`fixed right-0 top-0 z-40 h-full w-full space-y-1 bg-transparent  ${displayAccMenu} `}
        onClick={hideMenu}
      ></div>
    </>
  );
}

export default AccountMenu;
