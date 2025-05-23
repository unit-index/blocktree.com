import { useEffect, useRef } from "react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        { title: "Blocktree - Scalable Blockchain for AI and Space Economies" },
        {
            name: "description",
            content:
                "Blocktree revolutionizes blockchain with a tree-like architecture for AI-driven economies, edge DApps, and interstellar finance. Join a scalable, permissionless network for Earth and beyond.",
        },
    ];
};

export default function Index() {
    const useCasesSectionRef = useRef<HTMLElement>(null);
    const useCasesBackgroundRef = useRef<HTMLDivElement>(null);
    const useCasesContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = useCasesSectionRef.current;
        const background = useCasesBackgroundRef.current;
        const content = useCasesContentRef.current;

        if (!section || !background || !content) return;

        let isBackgroundFixed = false;

        const handleScroll = () => {
            const sectionRect = section.getBoundingClientRect();
            const contentRect = content.getBoundingClientRect();

            if (sectionRect.top <= 0 && contentRect.top > 0) {
                if (!isBackgroundFixed) {
                    background.style.position = 'fixed';
                    background.style.top = '0';
                    background.style.left = '0';
                    background.style.width = '100%';
                    background.style.height = '100vh';
                    background.style.zIndex = '-1'; 
                    isBackgroundFixed = true;
                }
            } else if (contentRect.top <= 0) {
                const scrollPastContentTop = -contentRect.top;
                background.style.position = 'fixed';
                background.style.top = `-${scrollPastContentTop}px`;
                background.style.left = '0';
                background.style.width = '100%';
                background.style.height = '100vh';
                background.style.zIndex = '-1';
                isBackgroundFixed = true;
            } else if (sectionRect.top > 0) {
                if (isBackgroundFixed) {
                    background.style.position = 'absolute';
                    background.style.top = '0';
                    background.style.left = '0';
                    background.style.width = '100%';
                    background.style.height = '100vh';
                    background.style.zIndex = '-1'; 
                    isBackgroundFixed = false;
                }
            }

            if (sectionRect.bottom <= 0) {
                if (isBackgroundFixed) {
                    background.style.position = 'absolute';
                    background.style.top = `${Math.max(0, sectionRect.height - window.innerHeight)}px`;
                    background.style.left = '0';
                    background.style.width = '100%';
                    background.style.height = '100vh';
                    background.style.zIndex = '-1';
                    isBackgroundFixed = false;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Hero */}
            <section
                className="text-left mb-8 md:mb-16 bg-cover bg-center min-h-[600px] md:min-h-[900px]"
                style={{ backgroundImage: "url('/hero-background.png')" }}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col justify-center min-h-[500px] md:min-h-[800px]">
                    <h1
                        className="text-[2rem] md:text-5xl font-medium text-[#FFFFFF] font-poppins max-w-[630px]"
                        style={{ letterSpacing: "0.48px", lineHeight: 1.2 }}
                    >
                        Interstellar DApps and Space Economies
                    </h1>
                    <p
                        className="mt-4 md:mt-8 text-base md:text-lg text-[#FFFFFF] font-poppins font-light max-w-[540px]"
                        style={{ letterSpacing: "0.48px", lineHeight: 1.5 }}
                    >
                        Blocktree’s tree-like architecture powers AI-driven finance, real-time edge DApps, and space commerce with subsecond block times and infinite scalability.
                    </p>
                    <div className="inline-block">
                        <Link to="/demo">
                            <button
                                className="mt-6 md:mt-[42px] bg-white text-black font-bold font-poppins text-[14px] md:text-[16px] py-2 px-4 md:px-4 rounded-[20px] md:hover:bg-gray-200 transition-colors"
                                style={{ letterSpacing: "0.48px" }}
                            >
                                Blocktree Simulator
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Blocktree Section */}
            <section className="mb-24 max-w-7xl mx-auto px-4 md:px-12">
                <div className="flex flex-col sm:flex-row md:flex-row gap-8 items-center">
                    {/* Left Text Section */}
                    <div className="flex-1 flex flex-col justify-center">
                        <h2
                            className="text-[1.375rem] md:text-2xl font-light text-[#FFFFFF] font-poppins font-light mb-4"
                            style={{ letterSpacing: "1.5px", lineHeight: 1.2 }}
                        >
                            WHAT IS BLOCKTREE?
                        </h2>
                        <p
                            className="text-[0.875rem] md:text-base text-[#FFFFFF] font-poppins font-normal max-w-[540px]"
                        >
                            Blocktree is a blockchain scaling solution that transforms traditional blockchain architectures into a spatially scalable "blocktree" structure. It delivers subsecond block times and unbounded scalability for AI-driven economies, edge DApps, and interstellar finance. This permissionless network empowers silicon-based life and machine economies with unmatched scalability.
                        </p>
                    </div>
                    {/* Right GIF Section */}
                    <div className="flex-1 flex justify-end items-center">
                        <img
                            src="/pythagorean-tree.gif"
                            alt="Pythagorean Tree Animation"
                            className="max-w-full h-auto rounded-lg invert"
                            style={{ backgroundColor: 'transparent', mixBlendMode: 'screen' }}
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section
                className="py-16 bg-cover bg-center"
                style={{ backgroundImage: "url('/key-features-background.png')" }}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-12">
                    <h2
                        className="text-[1.375rem] md:text-[26px] font-light text-[#FFFFFF] font-poppins font-light mb-8 text-left"
                        style={{ letterSpacing: "2.5px", lineHeight: 1.2 }}
                    >
                        KEY FEATURES
                    </h2>
                    {/* Container for all blocks */}
                    <div className="flex flex-col gap-8 items-center">
                        {/* First Row */}
                        <div className="flex flex-col md:flex-row gap-8 justify-center w-full">
                            {/* Feature 1 */}
                            <div
                                className="pt-8 pb-4 px-8 rounded-[20px] bg-cover bg-center w-full md:w-1/4 flex flex-col items-start min-h-[200px]"
                                style={{ backgroundImage: "url('/block-background.png')" }}
                            >
                                <img src="/feature1.png" alt="Feature 1" className="mb-8 h-[75px]" />
                                <p
                                    className="text-[0.875rem] md:text-[16px] text-[#000000] font-poppins font-medium text-left"
                                    style={{ letterSpacing: "0.8px" }}
                                >
                                    Spacial scalability via a tree-like structure with latency-driven branch splits.
                                </p>
                            </div>
                            {/* Feature 2 */}
                            <div
                                className="pt-8 pb-4 px-8 rounded-[20px] bg-cover bg-center w-full md:w-1/4 flex flex-col items-start min-h-[200px]"
                                style={{ backgroundImage: "url('/block-background.png')" }}
                            >
                                <img src="/feature2.png" alt="Feature 2" className="mb-8 h-[75px]" />
                                <p
                                    className="text-[0.875rem] md:text-[16px] text-[#000000] font-poppins font-medium text-left"
                                    style={{ letterSpacing: "0.8px" }}
                                >
                                    AI-driven DeFi with subsecond block times for autonomous machine-to-machine trading.
                                </p>
                            </div>
                            {/* Feature 3 */}
                            <div
                                className="pt-8 pb-4 px-8 rounded-[20px] bg-cover bg-center w-full md:w-1/4 flex flex-col items-start min-h-[200px]"
                                style={{ backgroundImage: "url('/block-background.png')" }}
                            >
                                <img src="/feature3.png" alt="Feature 3" className="mb-8 h-[75px]" />
                                <p
                                    className="text-[0.875rem] md:text-[16px] text-[#000000] font-poppins font-medium text-left"
                                    style={{ letterSpacing: "0.8px" }}
                                >
                                    Low-latency edge DApps for IoT and gaming via latency-aware node clustering.
                                </p>
                            </div>
                        </div>
                        {/* Second Row */}
                        <div className="flex flex-col md:flex-row gap-8 justify-center w-full">
                            {/* Feature 4 */}
                            <div
                                className="pt-8 pb-4 px-8 rounded-[20px] bg-cover bg-center w-full md:w-1/4 flex flex-col items-start min-h-[200px]"
                                style={{ backgroundImage: "url('/block-background.png')" }}
                            >
                                <img src="/feature4.png" alt="Feature 4" className="mb-8 h-[75px]" />
                                <p
                                    className="text-[0.875rem] md:text-[16px] text-[#000000] font-poppins font-medium text-left"
                                    style={{ letterSpacing: "0.8px" }}
                                >
                                    Interstellar-ready finance, supporting space economies and cross-planetary transactions.
                                </p>
                            </div>
                            {/* Feature 5 */}
                            <div
                                className="pt-8 pb-4 px-8 rounded-[20px] bg-cover bg-center w-full md:w-1/4 flex flex-col items-start min-h-[200px]"
                                style={{ backgroundImage: "url('/block-background.png')" }}
                            >
                                <img src="/feature5.png" alt="Feature 5" className="mb-8 h-[75px]" />
                                <p
                                    className="text-[0.875rem] md:text-[16px] text-[#000000] font-poppins font-medium text-left"
                                    style={{ letterSpacing: "0.8px" }}
                                >
                                    Permissionless PoW network for universal access, from Earth to extraterrestrial nodes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section - Modified with refs and background handling */}
            <section
                ref={useCasesSectionRef}
                className="relative min-h-[1100px] mb-64 md:mb-80 lg:mb-96 pt-16 pb-8"
                style={{ zIndex: 0 }}
            >
                {/* Background Element */}
                <div
                    ref={useCasesBackgroundRef}
                    className="absolute top-0 left-0 w-full h-screen bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/use-cases-background.png')",
                        zIndex: -1,
                    }}
                />

                {/* This div creates space before content appears */}
                <div className="h-96 relative" style={{ zIndex: 2 }} />

                {/* Content Container - Ensure it's above background */}
                <div
                    ref={useCasesContentRef}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto px-4 md:px-12 relative"
                    style={{ zIndex: 2 }}
                >
                    {/* Block 1 */}
                    <div
                        className="pt-[48px] px-[26px] pb-[26px] rounded-[20px] bg-[#6E6E6E] bg-opacity-5 backdrop-blur-[40px] flex flex-col w-full md:max-w-[300px] mx-auto relative overflow-hidden"
                        style={{
                            position: 'relative',
                            border: 'none',
                        }}
                    >
                        <div
                            style={{
                                content: '""',
                                position: 'absolute',
                                inset: '0',
                                padding: '2px',
                                borderRadius: '20px',
                                background: 'linear-gradient(135deg, #FFFFFF, #555555)',
                                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                WebkitMaskComposite: 'xor',
                                maskComposite: 'exclude',
                                pointerEvents: 'none',
                                zIndex: '0',
                            }}
                        ></div>
                        <img
                            src="/use-case-1.png"
                            alt="AI Economies"
                            className="mb-4 h-[90px] w-auto object-contain self-start relative z-10"
                        />
                        <h3
                            className="text-[1.375rem] md:text-[26px] font-semibold text-[#FFFFFF] font-poppins relative z-10"
                            style={{ letterSpacing: "1.3px" }}
                        >
                            AI Economies
                        </h3>
                        <p
                            className="mt-4 text-[0.875rem] md:text-[16px] font-light text-[#FFFFFF] font-poppins leading-[24px] relative z-10"
                            style={{ letterSpacing: "0.48px" }}
                        >
                            Enable autonomous AI agents to trade, invest, and operate in decentralized finance (DeFi) without human intervention.
                        </p>
                    </div>

                    {/* Block 2 */}
                    <div
                        className="pt-[48px] px-[26px] pb-[26px] rounded-[20px] bg-[#6E6E6E] bg-opacity-5 backdrop-blur-[40px] flex flex-col w-full md:max-w-[300px] mx-auto relative overflow-hidden"
                        style={{
                            position: 'relative',
                            border: 'none',
                        }}
                    >
                        <div
                            style={{
                                content: '""',
                                position: 'absolute',
                                inset: '0',
                                padding: '2px',
                                borderRadius: '20px',
                                background: 'linear-gradient(135deg, #FFFFFF, #555555)',
                                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                WebkitMaskComposite: 'xor',
                                maskComposite: 'exclude',
                                pointerEvents: 'none',
                                zIndex: '0',
                            }}
                        ></div>
                        <img
                            src="/use-case-2.png"
                            alt="Edge DApps"
                            className="mb-4 h-[90px] w-auto object-contain self-start relative z-10"
                        />
                        <h3
                            className="text-[1.375rem] md:text-[26px] font-semibold text-[#FFFFFF] font-poppins relative z-10"
                            style={{ letterSpacing: "1.3px" }}
                        >
                            Edge DApps
                        </h3>
                        <p
                            className="mt-4 text-[0.875rem] md:text-[16px] font-light text-[#FFFFFF] font-poppins leading-[24px] relative z-10"
                            style={{ letterSpacing: "0.48px" }}
                        >
                            Power low-latency, decentralized apps for IoT, gaming, and real-time data processing at the network edge.
                        </p>
                    </div>

                    {/* Block 3 */}
                    <div
                        className="pt-[48px] px-[26px] pb-[26px] rounded-[20px] bg-[#6E6E6E] bg-opacity-5 backdrop-blur-[40px] flex flex-col w-full md:max-w-[300px] mx-auto relative overflow-hidden"
                        style={{
                            position: 'relative',
                            border: 'none',
                        }}
                    >
                        <div
                            style={{
                                content: '""',
                                position: 'absolute',
                                inset: '0',
                                padding: '2px',
                                borderRadius: '20px',
                                background: 'linear-gradient(135deg, #FFFFFF, #555555)',
                                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                WebkitMaskComposite: 'xor',
                                maskComposite: 'exclude',
                                pointerEvents: 'none',
                                zIndex: '0',
                            }}
                        ></div>
                        <img
                            src="/use-case-3.png"
                            alt="Space Economies"
                            className="mb-4 h-[90px] w-auto object-contain self-start relative z-10"
                        />
                        <h3
                            className="text-[1.375rem] md:text-[26px] font-semibold text-[#FFFFFF] font-poppins relative z-10"
                            style={{ letterSpacing: "1.3px" }}
                        >
                            Space Economies
                        </h3>
                        <p
                            className="mt-4 text-[0.875rem] md:text-[16px] font-light text-[#FFFFFF] font-poppins leading-[24px] relative z-10"
                            style={{ letterSpacing: "0.48px" }}
                        >
                            Facilitate secure, scalable transactions for interstellar commerce, mining, and colonization.
                        </p>
                    </div>
                </div>

                {/* Extra space to ensure scrolling effect works well */}
                <div className="h-64 relative z-10" />
            </section>

            {/* Call to Action Section */}
            <section
              className="text-center mb-32 max-w-7xl mx-auto px-4 md:px-12 relative mt-[-400px] md:mt-[-200px]"
              style={{ zIndex: 5 }}
            >
              <div className="flex flex-col md:flex-row rounded-[10px] overflow-hidden bg-transparent">
                {/* Left Side: Text and Button */}
                <div className="flex-1 p-8 text-left flex flex-col justify-center bg-[#3B3B3B] bg-opacity-50 backdrop-blur-[10px] min-h-[300px] md:min-h-[350px]">
                  <h2
                    className="text-[1.375rem] md:text-[26px] font-thin text-[#FFFFFF] font-poppins mb-6 md:mb-[32px] md:mt-[16px]"
                    style={{ letterSpacing: "1.3px", lineHeight: "39px" }}
                  >
                    BUILD THE COSMIC FUTURE WITH BLOCKTREE
                  </h2>
                  <p
                    className="text-[0.875rem] md:text-[16px] font-semibold text-[#FFFFFF] font-poppins mb-6 md:mb-[32px]"
                    style={{ letterSpacing: "0.8px", lineHeight: "24px" }}
                  >
                    Join our open-source community to shape a scalable blockchain for AI, edge computing, and space. Collaborate on GitHub or contact us to innovate across Earth and Mars.
                  </p>
                  <a
                    href="mailto:contact@blocktree.com"
                    className="inline-block bg-white text-black font-bold font-poppins text-[16px] rounded-[20px] py-2 px-4 transition-colors md:mb-[16px] self-start"
                  >
                    Message Us
                  </a>
                </div>
                {/* Right Side: Image */}
                <div className="flex-1 w-full min-h-[200px] md:min-h-[350px] bg-[#3B3B3B] bg-opacity-50 backdrop-blur-[10px]">
                  <img
                    src="/cta-background.png"
                    alt="Call to Action Background"
                    className="w-full h-full object-cover"
                    onError={() => console.error("Failed to load cta-background.png")}
                  />
                </div>
              </div>
            </section>
        </>
    );
}