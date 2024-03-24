import React from 'react';

export function DotBackgroundDemo() {
  return (
    <main className="flex">
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative grid items-start">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p> */}
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            GAME138&nbsp;
            <code className="font-mono font-bold">Final Project</code>
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://github.com/vtonu"
              target="_blank"
              rel="noopener noreferrer">
              By{' '}
              {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}
              Victor Tonu &copy; 2024
            </a>
          </div>
        </div>

        <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-center">
          {/* Phase 1 */}
          <a className="group rounded-lg border border-transparent px-5 py-4 ">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Phase One{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Ideas & references.</p>
          </a>

          {/* Phase 2 */}
          <a className="group rounded-lg border border-transparent px-5 py-4">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Phase Two{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Rough blockout & textures.</p>
          </a>

          {/* Phase 3 */}
          <a className="group rounded-lg border border-transparent px-5 py-4 ">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Phase Three{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Assets & composition.</p>
          </a>

          {/* Final Phase */}
          <a className="group rounded-lg border border-transparent px-5 py-4 ">
            <h2 className={`mb-3 text-2xl font-semibold`}>Final Scene </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>Final renders.</p>
          </a>
        </div>
      </div>
    </main>
  );
}
