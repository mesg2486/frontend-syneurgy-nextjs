import React from "react";

export default function CourseLoader() {
  return (
    <div className="space-y-8 py-6">
      <div className="flex gap-2">
        <div className="h-5 bg-secondary animate-pulse w-36"></div>
        <div className="h-5 bg-secondary animate-pulse w-32"></div>
      </div>
      <section className="">
        <div className="max-w-7xl justify-center">
          <div className="grid max-w-2xl grid-flow-row grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2 lg:max-w-none">
            <div className="w-full bg-secondary animate-pulse h-96"></div>
            <div className="lg:row-span-3">
              <div className="border-b pb-8 border-border border-opacity-60 space-y-6">
                <div className="space-y-2">
                  <h2 className="w-2/3 bg-secondary animate-pulse h-12"></h2>
                  <h2 className="w-full bg-secondary animate-pulse h-12"></h2>
                </div>
                <div className="space-y-2">
                  <div className="w-1/2 bg-secondary animate-pulse h-7"></div>
                  <div className="w-3/4 bg-secondary animate-pulse h-7"></div>
                </div>
                <div className="w-full flex flex-row gap-6 my-10">
                  <div className="w-full bg-primary animate-pulse h-9"></div>
                  <div className="w-full bg-secondary animate-pulse h-9"></div>
                </div>
              </div>
              <div className="mt-10 space-y-3 border-b pb-8 border-border border-opacity-60">
                <h2 className="w-1/3 bg-secondary animate-pulse h-8"></h2>
                <ul className="mb-10 space-y-2 list-inside">
                  <li className="w-2/3 bg-secondary animate-pulse h-7"></li>
                  <li className="w-4/5 bg-secondary animate-pulse h-7"></li>
                  <li className="w-3/5 bg-secondary animate-pulse h-7"></li>
                </ul>
              </div>
              <div className="mt-10 space-y-3 border-b pb-8 border-border border-opacity-60">
                <h2 className="w-1/3 bg-secondary animate-pulse h-8"></h2>
                <ul className="mb-10 space-y-2 list-inside">
                  <li className="w-2/3 bg-secondary animate-pulse h-7"></li>
                  <li className="w-4/5 bg-secondary animate-pulse h-7"></li>
                  <li className="w-3/5 bg-secondary animate-pulse h-7"></li>
                </ul>
              </div>
              <div className="mt-10 flex flex-row gap-4">
                <div className="w-7 bg-secondary animate-pulse h-7"></div>
                <div className="w-7 bg-secondary animate-pulse h-7"></div>
                <div className="w-7 bg-secondary animate-pulse h-7"></div>
              </div>
            </div>
            <div>
              <div className="flex gap-2 border-b pb-2">
                <h2 className="w-20 bg-primary animate-pulse h-8"></h2>
                <h2 className="w-20 bg-secondary animate-pulse h-8"></h2>
                <h2 className="w-20 bg-secondary animate-pulse h-8"></h2>
              </div>
              <div className="mt-10 space-y-3 border-b pb-8 border-border border-opacity-60">
                <h2 className="w-1/3 bg-secondary animate-pulse h-8"></h2>
                <ul className="mb-10 space-y-2 list-inside">
                  <li className="w-2/3 bg-secondary animate-pulse h-7"></li>
                  <li className="w-4/5 bg-secondary animate-pulse h-7"></li>
                  <li className="w-3/5 bg-secondary animate-pulse h-7"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20 space-y-6">
          <div className="bg-secondary animate-pulse h-9"></div>
          <div className="bg-secondary animate-pulse h-9"></div>
          <div className="bg-secondary animate-pulse h-9"></div>
          <div className="bg-secondary animate-pulse h-9"></div>
        </div>
      </section>
    </div>
  );
}
