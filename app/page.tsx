"use client";
declare global {
  interface Window {
    VANTA: any;
    _strk: any;
    edit_page: any;

  }

  var VANTA: any;
}
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

export default function Home() {

  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = (index: number) => {
    setActiveProject(index);
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalOpen(false);
      setIsClosing(false);
      setActiveProject(null);
    }, 300); // Match blow-down animation duration
  };

  useEffect(() => {
    const setVanta = () => {
      if (typeof window !== "undefined" && window.VANTA) {
        VANTA.FOG({
          el: "#main",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0xf2b5b5,
          midtoneColor: 0x413f3f,
          lowlightColor: 0x0,
          baseColor: 0x0,
          blurFactor: 0.81,
          speed: 1.30,
          zoom: 0.40
        })
      }
    };

    // Check if _strk and edit_page exist before using them
    if (typeof window !== "undefined" && window._strk && window.edit_page?.Event) {
      window._strk.push(() => {
        setVanta();
        window.edit_page.Event.subscribe("Page.beforeNewOneFadeIn", setVanta);
      });
    } else {
      // Fallback for testing or if _strk is not defined
      setVanta();
    }
  }, []);

  return (
    <>
      <div className="">
        <nav className="row flex justify-center py-[24px] border border-white">
          <div className="container flex justify-between items-center">
            <h1 className="monument-black text-[18px] lg:text-[24px]">MIA<span className="monument-regular">SALAVERIA</span></h1>
            <a href="/files/MiaSalaveria2025Resume.pdf" download className="monument-regular text-[12px] lg:text-[18px] relative group text-white after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
  RESUME
</a>
          </div>
        </nav>
        <main className="relative" id="main">
          <section className="w-full border border-white flex justify-center">
            <div className="container flex">
              <div className="flex justify-start flex-wrap w-full xl:w-[60%] md:border-r border-white ">
                <div className="text w-full md:w-[60%] flex justify-center flex-col pr-[32px] py-[24px] md:border-r border-white">
                  <h2 className="monument-black text-[34px] mb-[24px] leading-none"><span className="monument-regular">FRONT-END</span> DEVELOPER</h2>
                  <h3 className="max-w-[700px] mt-[16px] text-[14px]">Hi! I'm Mia and I'm a front-end developer with 7 years of experience building and maintaining web applications helping companies generate leads on marketing websites. A creative at heart, I dabble in different types of interactive media mainly web, design, and music.</h3>
                </div>
                <div className="image-wrapper px-none py-[16px] md:p-[16px] w-full md:w-[40%]">
                  <div className="h-[300px] relative overflow-hidden">
                    <Image src="/images/mia-salaveria.jpg" alt="Profile" fill style={{ objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
              <div className="w-[40%] p-[16px] hidden xl:block">
                <div className="h-full relative overflow-hidden">
                  <Image src="/images/black-texture.jpg" alt="Profile" fill style={{ objectFit: 'cover' }} className="hidden" />
                </div>
              </div>
            </div>
          </section>
          <section className="w-full border-r border-l border-b border-white flex justify-center">
            <div className="container flex flex-wrap">
            <div className="flex justify-start flex-wrap w-full lg:w-[45%] border-r border-l lg:border-r-0 lg:border-l-0 border-white">
                <div className="tools w-full flex justify-center flex-col py-[20px] pr-[32px]">
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
              <div className="flex justify-start flex-wrap  w-full lg:w-[55%] lg:border-r border-b lg:border-b-0 border-white relative overflow-hidden">
                <Image src="/images/black-texture.jpg" alt="Profile" fill style={{ objectFit: 'cover' }} className="hidden"/>
                <div className="projects flex w-full flex-wrap relative z-2 border-l border-r lg:border-r-0 border-white">
                  <div className="header-bar w-full p-4">
                    <h2 className="text-left monument-regular text-[18px] text-white">+ WORK</h2>
                  </div>
                  <div className="h-[400px] w-full md:w-[50%] cursor-pointer" onClick={() => openModal(0)}>
                    <div className="h-full w-full p-[16px]  border-t border-white">
                      <div className="image-wrapper bg-black h-full w-full flex items-center justify-center hover:bg-white transition duration-400 ease-in-out">
                        <Image src="/images/tb-logo.png" alt="Profile" width={0} style={{ width: 'auto', height: '40px' }} height={70} sizes="100vw" />
                      </div>
                    </div>
                  </div>
                  <div className="h-[400px] w-full md:w-[50%] cursor-pointer" onClick={() => openModal(1)}>
                    <div className="h-full w-full p-[16px] border-l border-t border-white">
                      <div className="image-wrapper bg-black h-full w-full flex items-center justify-center hover:bg-white transition duration-400 ease-in-out">
                        <Image src="/images/relay-logo.png" alt="Profile" width={0} style={{ width: 'auto', height: '60px' }} height={80} sizes="100vw" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {modalOpen && (
          <div className="fixed inset-0 flex bg-black/75 justify-center items-center z-50">
             <div
               className={`bg-black border border-white w-[90%] max-w-[600px] relative ${
                 isClosing ? 'blow-down' : 'blow-up'
               }`}
             >
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
                      <div className="w-full md:w-[50%] h-[200px] bg-[#eee] flex justify-center items-center">
                        <Image src="/images/tb-logo.png" alt="Profile" width={0} style={{ width: 'auto', height: '40px' }} height={60} sizes="100vw" />
                      </div>
                      <div className="w-full md:w-[50%] mt-4 md:mt-0 flex flex-col justify-center px-6">
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
                      <div className="w-full md:w-[50%] h-[200px] bg-[#eee] flex justify-center items-center">
                        <Image src="/images/relay-logo.png" alt="Profile" width={0} style={{ width: 'auto', height: '50px' }} height={80} sizes="100vw" />
                      </div>
                      <div className="w-full md:w-[50%] mt-4 md:mt-0 flex flex-col justify-center px-6">
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
          <p className="text-[10px] text-center font-bold monument-regular ">COPYRIGHT © 2025 MIA SALAVERIA</p>
        </footer>
      </div>
    </>
  );
}
