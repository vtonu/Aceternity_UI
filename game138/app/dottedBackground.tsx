import React from 'react';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from './3d-card';
import { FlipWordsArtDeco } from './art-deco';

export function DotBackgroundDemo() {
  return (
    <div className=" dark:bg-black bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.2] relative grid items-start">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>

      <FlipWordsArtDeco />
      <div className="items-center justify-center font-mono text-sm lg:flex gap-2 pb-8">
        <div className="flex justify-center border border-emerald-300 bg-emerald-300/10 from-emerald-500/20 backdrop-blur-sm dark:border-neutral-800  dark:from-inherit  w-auto  rounded-md  bg-emerald-200 p-4 dark:bg-zinc-800/30">
          GAME138&nbsp;
          <code className="font-mono font-bold">Final Project</code>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </div>
        <div className=" flex p-4 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="flex place-items-center gap-2"
            href="https://github.com/vtonu/Aceternity_UI"
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
      <div className="flex-col ">
        <a className="text-center ">
          <h2 className={`text-2xl font-semibold`}>
            Phase One{' '}
            {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span> */}
          </h2>

          <p className={`text-sm opacity-40 w-1/2 mx-auto`}>
            Ideas & references
            <br></br>
            <br></br>My primary inspiration for this project came from sleek, modern designs
            featuring glass and a neon green aesthetic effect. I explored various sources and
            futuristic visual styles, to create a unique and visually appealing concept.{' '}
          </p>
          {/* <TextRevealCardPreview /> */}

          <div className="lg:flex justify-center gap-4">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xs font-bold text-neutral-600 dark:text-white">
                  Screenshot 1
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/phase1/GlassChair_Ref.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xs font-bold text-neutral-600 dark:text-white">
                  Screenshot 2
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/phase1/GreenChair_Neon_Ref.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </a>

        <a className="text-center">
          <h2 className={`text-2xl font-semibold `}>
            Phase Two{' '}
            {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span> */}
          </h2>
          <p className={`text-sm opacity-40 w-1/2 mx-auto`}>
            Rough blockout & textures.<br></br> <br></br>
            In Phase Two of my project, I moved on to creating a rough blockout in Maya. Using basic
            cubes and shapes, I sketched out the general layout of the room. I also applied textures
            and materials roughly to get a sense of the overall aesthetic.
          </p>
          <div className="lg:flex justify-center pb-2 gap-4">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xs font-bold text-neutral-600 dark:text-white">
                  Screenshot 1
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/phase2/Phase1 - Rough Blockout.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xs font-bold text-neutral-600 dark:text-white">
                  Screenshot 2
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/phase2/Phase1 - Rough Textures.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
          <br></br>
        </a>
        <a className="text-center">
          <h2 className={`text-2xl font-semibold`}>
            Phase Three{' '}
            {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span> */}
          </h2>
          <p className={` text-sm opacity-40 w-1/2 mx-auto`}>
            Rough assets & composition. <br></br> <br></br>In Phase Three of my project, I focused
            on developing rough assets and composition. I created preliminary models for key objects
            and arranged them within the scene. This stage helped refine the layout and ensured that
            the composition was visually balanced and aligned with the desired aesthetic.
          </p>
          <div className="lg:flex justify-center pb-2 gap-4">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xs font-bold text-neutral-600 dark:text-white">
                  Screenshot 1
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/phase3/blockout.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xs font-bold text-neutral-600 dark:text-white">
                  Screenshot 2
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/phase3/fountain.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
          <br></br>
        </a>
        {/* Final Phase */}
        <a className="text-center">
          <h2 className={`text-2xl font-semibold`}>Final Scene </h2>
          <p className={`text-sm opacity-40 text-balance w-1/2 mx-auto`}>
            Final renders submitted.<br></br> <br></br>In the Final stage of my project, I
            integrated all the assets, including contributions from my classmates. I added lighting,
            vines, fog, and polished textures to enhance the overall look. The final renders were
            then submitted for the assignment, showcasing the completed and refined 3D environment.
          </p>
          <div className="lg:flex justify-center pb-2 gap-4">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xs font-bold text-neutral-600 dark:text-white">
                  Screenshot 1
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/final/Final2.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xs font-bold text-neutral-600 dark:text-white">
                  Screenshot 2
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/final/Final3.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
          <br></br>
        </a>
        {/* Optional Polishing & Post-Processing */}
        <a className="text-center">
          <h2 className={`text-2xl font-semibold`}>Additional Processing</h2>
          <p className={`text-sm opacity-40 text-balance w-1/2 mx-auto`}>
            More Post-Processing.<br></br> <br></br>I further polished the project. I updated
            textures, floor tiles, and wall textures, and implemented better baked lighting. Using
            Shader Graph, I enhanced the fountain, achieving a better overall aesthetic and graphics
            quality. This additional refinement made the final scene even more visually appealing.
          </p>
          <div className="lg:flex justify-center pb-2 gap-4">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xs font-bold text-neutral-600 dark:text-white">
                  Screenshot 1
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/extra/scene1.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xs font-bold text-neutral-600 dark:text-white">
                  Screenshot 2
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/extra/scene2.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
          <div>Powered by:</div>
          <h1 className="text-xs font-medium leading-none pt-4 pb-4 lg:flex grid justify-center items-center gap-2 pointer-events-none">
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
