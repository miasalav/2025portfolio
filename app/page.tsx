"use client";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const openModal = (index: number) => {
    setActiveProject(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveProject(null);
  };
  return (
    <>
      <Head>
        <title>Mia Salaveria Portfolio</title>
        <meta name="description" content="Welcome to the Next.js starter template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <nav className="row flex justify-center py-[24px] border border-white">
          <div className="container flex justify-between items-center">
            <h1 className="monument-black text-[24px]">MIA<span className="monument-regular">SALAVERIA</span></h1>
            <a className="monument-regular text-[18px]" href="/files/MiaSalaveria2025Resume.pdf" download>RESUME</a>
          </div>
        </nav>
        <main className="relative">
          <section className="w-full border border-white flex justify-center">
            <div className="container flex">
              <div className="flex justify-start flex-wrap w-[60%] border-r border-white">
                <div className="text w-[60%] flex justify-center flex-col pr-[32px] border-r border-white">
                  <h2 className="monument-black text-[34px] mb-[24px] leading-none"><span className="monument-regular">FRONT-END</span> DEVELOPER</h2>
                  <h3 className="max-w-[700px] mt-[16px] text-[14px]">Hi! I'm Mia and I'm a front-end developer with 7 years of experience building and maintaining web applications helping companies generate leads on marketing websites. A creative at heart, I dabble in different types of interactive media mainly web, design, and music.</h3>
                </div>
                <div className="image-wrapper p-[16px] w-[40%]">
                  <div className="h-[300px] relative overflow-hidden">
                    <Image src="/images/mia-salaveria.jpg" alt="Profile" fill style={{ objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
              <div className="w-[40%] p-[16px]">
                <div className="h-full relative overflow-hidden">
                  <Image src="/images/black-texture.jpg" alt="Profile" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </section>
          <section className="w-full border border-r border-l border-b border-white flex justify-center">
            <div className="container flex">
              <div className="flex justify-start flex-wrap w-[55%] border-r border-white relative overflow-hidden">
                <Image src="/images/black-texture.jpg" alt="Profile" fill style={{ objectFit: 'cover' }} />
                <div className="projects flex w-full flex-wrap relative z-2 border-l border-white">
                  <div className="header-bar w-full p-4 bg-black">
                    <h2 className="text-left monument-regular text-[18px] text-white">+ WORK</h2>
                  </div>
                  <div className="h-[400px] w-[50%] cursor-pointer" onClick={() => openModal(0)}>
                    <div className="h-full w-full p-[16px]  border-t border-white">
                      <div className="image-wrapper bg-black h-full w-full flex items-center justify-center hover:bg-white transition duration-400 ease-in-out">
                        <Image src="/images/tb-logo.png" alt="Profile" width={0} style={{ width: 'auto' }} height={70} sizes="100vw" />
                      </div>
                    </div>
                  </div>
                  <div className="h-[400px] w-[50%] cursor-pointer" onClick={() => openModal(1)}>
                    <div className="h-full w-full p-[16px] border-l border-t border-white">
                      <div className="image-wrapper bg-black h-full w-full flex items-center justify-center hover:bg-white transition duration-400 ease-in-out">
                        <Image src="/images/relay-logo.png" alt="Profile" width={0} style={{ width: 'auto', height: '60px' }} height={80} sizes="100vw" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start flex-wrap w-[45%]">
                <div className="tools w-full flex justify-center flex-col py-[20px] pl-[32px]">
                  <h2 className="monument-regular text-[18px] mb-[24px]">+ TOOLS</h2>
                  <ul className="flex flex-wrap pl-0">
                    <li className="tool-sticker">HTML</li>
                    <li className="tool-sticker">CSS</li>
                    <li className="tool-sticker">SASS</li>
                    <li className="tool-sticker">JAVASCRIPT</li>
                    <li className="tool-sticker">REACT</li>
                    <li className="tool-sticker">TYPESCRIPT</li>
                    <li className="tool-sticker">TAILWIND</li>
                    <li className="tool-sticker">GITHUB</li>
                    <li className="tool-sticker">CYPRESS</li>
                    <li className="tool-sticker">WORDPRESS</li>
                    <li className="tool-sticker">PHP</li>
                    <li className="tool-sticker">FIGMA</li>
                    <li className="tool-sticker">PHOTOSHOP</li>
                    <li className="tool-sticker">ZAPIER</li>
                    <li className="tool-sticker">SALESFORCE</li>

                  </ul>
                </div>
              </div>
            </div>
          </section>
          {modalOpen && (
            <div className="fixed inset-0 flex bg-black/75 justify-center items-center z-50">
              <div className="bg-black border border-white w-[90%] max-w-[600px] relative">
                <div className="modal-top-bar relative border-b border-white h-[32px]">
                  <button
                    onClick={closeModal}
                    className="absolute top-1 right-2 text-white font-bold cursor-pointer"
                  >
                    ×
                  </button>
                </div>
                <div className="modal-content p-6 max-h-[700px] overflow-y-scroll scrollbar-hide">
                  {activeProject === 0 && (
                    <div className="flex flex-wrap">
                      <div className="w-[50%] h-[200px] bg-[#eee] flex justify-center items-center">
                        <Image src="/images/tb-logo.png" alt="Profile" width={0} style={{ width: 'auto', height: '40px' }} height={60} sizes="100vw" />
                      </div>
                      <div className="w-[50%] flex flex-col justify-center px-6">
                        <h2 className="text-xl font-bold mb-4 monument-regular uppercase text-center">TouchBistro</h2>
                        <div className="flex justify-center"><a href="https://touchbistro.com/" target="_blank" className="tool-sticker hover:bg-white transition duration-400 ease-in-out hover:!text-black">Visit</a></div>
                      </div>
                      <div className="w-full py-6">
                        <h3 className="monument-regular text-[18px] font-bold">TASKS</h3>
                        <ul className="mt-4 text-[14px] pl-6 list-disc">
                          <li>Developed and maintained responsive web applications for the
                            TouchBistro platform</li>
                          <li>Used Wordpress as a CMS and built a custom theme using HTML,
                            Tailwind, React, Node, and more</li>
                          <li>Collaborated with cross-functional teams to enhance user
                            interface and user experience</li>
                          <li>Utilized modern web technologies to optimize performance and
                            scalability including A/B Testing and unit testing using Cypress</li>
                          <li>Created forms with React and connected them to the Salesforce CRM using Zapier integrations</li>
                        </ul>
                      </div>
                      <div className="w-full">
                        <h3 className="monument-regular font-bold">TOOLS</h3>
                        <ul className="flex flex-wrap pl-0 mt-6">
                          <li className="tool-sticker">HTML</li>
                          <li className="tool-sticker">CSS</li>
                          <li className="tool-sticker">SASS</li>
                          <li className="tool-sticker">JAVASCRIPT</li>
                          <li className="tool-sticker">REACT</li>
                          <li className="tool-sticker">TYPESCRIPT</li>
                          <li className="tool-sticker">TAILWIND</li>
                          <li className="tool-sticker">GITHUB</li>
                          <li className="tool-sticker">CYPRESS</li>
                          <li className="tool-sticker">WORDPRESS</li>
                          <li className="tool-sticker">PHP</li>
                          <li className="tool-sticker">FIGMA</li>
                          <li className="tool-sticker">SASS</li>
                          <li className="tool-sticker">ZAPIER</li>
                          <li className="tool-sticker">SALESFORCE</li>
                        </ul>
                      </div>

                    </div>
                  )}
                  {activeProject === 1 && (
                    <div className="flex flex-wrap">
                      <div className="w-[50%] h-[200px] bg-[#eee] flex justify-center items-center">
                        <Image src="/images/relay-logo.png" alt="Profile" width={0} style={{ width: 'auto', height: '50px' }} height={80} sizes="100vw" />
                      </div>
                      <div className="w-[50%] flex flex-col justify-center px-6">
                        <h2 className="text-xl font-bold mb-4 monument-regular uppercase text-center">Relay Financial</h2>
                        <div className="flex justify-center"><a href="https://relayfi.com/scaling-businesses" target="_blank" className="tool-sticker hover:bg-white transition duration-400 ease-in-out hover:!text-black">Visit</a></div>
                      </div>
                      <div className="w-full py-6">
                        <h3 className="monument-regular text-[18px] font-bold">TASKS</h3>
                        <ul className="mt-4 text-[14px] pl-6 list-disc">
                          <li>Developed two landing pages on the Relay Financial marketing website</li>
                          <li>Collaborated with designers and stakeholders to bring the Figma designs to life</li>
                          <li>Used Github for version control</li>
                        </ul>
                      </div>
                      <div className="w-full">
                        <h3 className="monument-regular font-bold">TOOLS</h3>
                        <ul className="flex flex-wrap pl-0 mt-6">
                          <li className="tool-sticker">HTML</li>
                          <li className="tool-sticker">CSS</li>
                          <li className="tool-sticker">SASS</li>
                          <li className="tool-sticker">JAVASCRIPT</li>
                          <li className="tool-sticker">REACT</li>
                          <li className="tool-sticker">GITHUB</li>
                          <li className="tool-sticker">FIGMA</li>
                          <li className="tool-sticker">NEXT.JS</li>
                          <li className="tool-sticker">NODE</li>
                        </ul>
                      </div>
                    </div>

                  )}
                </div>
              </div>
            </div>
          )}
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center p-6">
          <p className="text-[12px] text-center font-bold monument-regular ">COPYRIGHT © 2025 MIA SALAVERIA</p>
        </footer>
      </div>
    </>
  );
}
