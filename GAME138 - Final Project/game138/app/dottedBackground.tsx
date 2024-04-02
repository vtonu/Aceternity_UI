import React from 'react';
import Image from 'next/image';
import { TextRevealCardPreview } from './textReveal';

export function DotBackgroundDemo() {
  return (
    <div className=" dark:bg-black bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.2] relative grid items-start">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
      <p className="text-center text-5xl font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 py-8">
        Art Deco Scene
      </p>
      <div className="items-center justify-center font-mono text-sm lg:flex gap-2 pb-8">
        <div className="flex justify-center border border-emerald-300 bg-emerald-300/10 from-emerald-500/20 backdrop-blur-sm dark:border-neutral-800  dark:from-inherit  w-auto  rounded-md  bg-emerald-200 p-4 dark:bg-zinc-800/30">
          GAME138&nbsp;
          <code className="font-mono font-bold">Final Project</code>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </div>
        <div className=" flex p-4 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="flex place-items-center gap-2"
            href="https://github.com/vtonu"
            target="_blank"
            rel="noopener noreferrer">
            By{' '}
            <Image
              src="/github.svg"
              alt="Github Logo"
              className="dark:invert"
              width={24}
              height={24}
              priority
            />
            <code className="font-bold">Victor Tonu</code>
          </a>
        </div>
      </div>

      <div className="flex-col">
        {/* Phase 1 */}
        <a className="text-center ">
          {/* <h2 className={`text-2xl font-semibold`}>
            Phase One{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2> */}

          {/* <p className={`text-sm opacity-30`}>
            Ideas & references.<br></br>{' '}
          </p> */}
          <TextRevealCardPreview />

          <div className="lg:flex justify-center pb-8 gap-4">
            <Image
              src="/phase1/FloorPlanEuropa.jpg"
              alt="ref"
              width={300}
              height={0}
              className="object-contain rounded"
            />
            <Image
              src="/phase1/RefBoard.jpg"
              alt="ref"
              width={300}
              height={0}
              className="object-contain rounded"
            />
            <Image
              src="/phase1/GlassChair_Ref.jpg"
              alt="ref"
              width={300}
              height={0}
              className="object-contain rounded"
            />
            <Image
              src="/phase1/GreenChair_Neon_Ref.jpg"
              alt="ref"
              width={300}
              height={0}
              className="object-contain rounded"
            />
            <Image
              src="/phase1/WallRef.jpg"
              alt="ref"
              width={300}
              height={0}
              className="object-contain rounded"
            />
          </div>
        </a>

        {/* Phase 2 */}
        <a className="text-center">
          <h2 className={`text-2xl font-semibold`}>
            Phase Two{' '}
            {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span> */}
          </h2>
          <p className={`text-sm opacity-40`}>
            Rough blockout & textures.<br></br> <br></br>
          </p>
          <div className="lg:flex justify-center pb-8 gap-4">
            <Image src="/phase2/Phase1 - Rough Blockout.jpg" alt="ref" width={775} height={0} />
            <Image src="/phase2/Phase1 - Rough Textures.jpg" alt="ref" width={775} height={0} />
          </div>
          <br></br>
        </a>

        {/* Phase 3 */}
        <a className="text-center">
          <h2 className={`text-2xl font-semibold`}>
            Phase Three{' '}
            {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span> */}
          </h2>
          <p className={` text-sm opacity-40`}>
            Rough assets & composition. <br></br> <br></br>
          </p>
          <div className="lg:flex justify-center pb-8 gap-4">
            <Image
              src="/phase3/blockout.jpg"
              alt="ref"
              width={325}
              height={0}
              className="rounded"
            />
            <Image src="/phase3/door.jpg" alt="ref" width={325} height={0} className="rounded" />
            <Image
              src="/phase3/fountain.jpg"
              alt="ref"
              width={325}
              height={0}
              className="rounded"
            />
            <Image src="/phase3/plant.jpg" alt="ref" width={325} height={0} className="rounded" />
            <Image
              src="/phase3/textures.jpg"
              alt="ref"
              width={325}
              height={0}
              className="rounded"
            />
          </div>
          <br></br>
        </a>

        {/* Final Phase */}
        <a className="text-center">
          <h2 className={`text-2xl font-semibold`}>Final Scene </h2>
          <p className={`text-sm opacity-40 text-balance`}>
            Final renders submitted for the assignment.<br></br> <br></br>
          </p>
          <div className="lg:flex justify-center pb-8 gap-4">
            <Image src="/final/Final1.jpg" alt="ref" width={550} height={0} />
            <Image src="/final/Final2.jpg" alt="ref" width={550} height={0} />
            <Image src="/final/Final3.jpg" alt="ref" width={550} height={0} />
          </div>
          <br></br>
        </a>

        {/* Optional Polishing & Post-Processing */}
        <a className="text-center">
          <h2 className={`text-2xl font-semibold`}>Post-Processing</h2>
          <p className={`text-sm opacity-40 text-balance`}>
            Additional polishing in Unity.<br></br> <br></br>
          </p>
          <div className="lg:flex justify-center pb-8 gap-4">
            <Image src="/extra/scene3.jpg" alt="extra scene 1" width={550} height={0} />
            <Image src="/extra/scene1.jpg" alt="extra scene 1" width={550} height={0} />
            <Image src="/extra/scene2.jpg" alt="extra scene 1" width={550} height={0} />
          </div>
          <h1 className="text-xs font-medium leading-none pt-4 pb-4 lg:flex grid justify-center items-center gap-2 pointer-events-none">
            Powered by{' '}
            <button className="px-4 py-2 backdrop-blur-sm border bg-gray-300/10 border-gray-500/20 text-white  text-center rounded">
              Vercel
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-gray-500 to-transparent" />
            </button>
            <button className="px-4 py-2 backdrop-blur-sm border bg-blue-300/10 border-blue-500/20 text-white  text-center rounded">
              React
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-500 to-transparent" />
            </button>
            <button className="px-4 py-2 backdrop-blur-sm border bg-gray-300/10 border-gray-500/20 text-white  text-center rounded">
              NextJS
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-zinc-500 to-transparent" />
            </button>
            <button className="px-4 py-2 backdrop-blur-sm border bg-sky-400/10 border-sky-400/20 text-white  text-center rounded">
              TailwindCSS
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-sky-400 to-transparent" />
            </button>
            <button className="px-4 py-2 backdrop-blur-sm border bg-fuchsia-300/10 border-fuchsia-500/20 text-white  text-center rounded">
              Framer Motion
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-fuchsia-500 to-transparent" />
            </button>
            <button className="px-4 py-2 backdrop-blur-sm border bg-gray-300/10 border-gray-500/20 text-white  text-center rounded">
              Aceternity UI
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-cyan-500 to-transparent" />
            </button>
          </h1>
        </a>
      </div>
    </div>
  );
}
