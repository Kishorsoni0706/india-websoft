"use client";

import Image from "next/image";
import Reveal from "@/components/animations/Reveal";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import CountUp from "react-countup";
import gsap from "gsap";

import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  useTransform,
} from "framer-motion";

import {
  ArrowRight,
  Phone,
  Mail,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Brain,
  Monitor,
  Smartphone,
  ShoppingCart,
  Star,
  Trophy,
  Rocket,
  Globe,
  Crown,
} from "lucide-react";

export default function HomePage() {

  const heroRef = useRef(null);

  useEffect(() => {
        gsap.from(heroRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.4,
        ease: "power4.out",
      });
    }, []);

  useEffect(() => {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return () => lenis.destroy();
}, []);

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(
      e.clientX - rect.left - rect.width / 2
    );

    mouseY.set(
      e.clientY - rect.top - rect.height / 2
    );
  };

  const stats = [
  {
    value: 1500,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: 500,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    value: 12,
    suffix: "+",
    label: "Years Experience",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Retention",
  },
];

  const brands = [
    "Microsoft",
    "Google",
    "Amazon",
    "Adobe",
    "Shopify",
    "Oracle",
  ];

  return (
    <main className="relative overflow-hidden bg-[#030712] text-white">

      <div
          className="
            pointer-events-none
            fixed
            inset-0
            z-[1]
            opacity-[0.03]
            mix-blend-soft-light"
            
            style={{
                backgroundImage:
                  "url('/textures/noise.png')",
            }}
         />

            <div className="absolute inset-0 -z-20 overflow-hidden">

  {/* GOLD BLOB */}

  <motion.div
    animate={{
      x: [0, 100, 0],
      y: [0, 60, 0],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
    }}
    className="
    absolute
    left-[-250px]
    top-[-250px]
    h-[900px]
    w-[900px]
    rounded-full
    bg-[#D4AF37]/15
    blur-[180px]
    "
  />

  {/* CURSOR GLOW */}

  <motion.div
    className="
    pointer-events-none
    fixed
    z-0
    h-[500px]
    w-[500px]
    rounded-full
    bg-[#D4AF37]/10
    blur-[150px]
    "
    style={{
      x: mouseX,
      y: mouseY,
      translateX: "-50%",
      translateY: "-50%",
    }}
  />

</div>

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {[...Array(30)].map((_, i) => (

          <motion.div
            key={i}
            animate={{
              y: [0, -200, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 12 + i,
              repeat: Infinity,
            }}
            className="
            absolute
            h-1
            w-1
            rounded-full
            bg-[#D4AF37]
            "
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />

        ))}

      </div>

            <motion.div
        className="
        fixed
        left-0
        top-0
        z-[999]
        h-[3px]
        w-full
        origin-left
        bg-gradient-to-r
        from-[#D4AF37]
        via-[#F8E9C0]
        to-[#4F46E5]
        "
        style={{ scaleX }}
      /> 

            <div className="border-b border-white/5 bg-black/30 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-sm">

          <div className="flex items-center gap-6 text-slate-400">

            <span className="flex items-center gap-2">
              <Phone size={14} />
              +91 9755907700
            </span>

            <span className="flex items-center gap-2">
              <Mail size={14} />
              info@indiawebsoft.com
            </span>

          </div>

          <div className="hidden md:flex items-center gap-2 text-[#D4AF37]">

            <Sparkles size={14} />

            Enterprise Digital Transformation Partner

          </div>

        </div>

      </div>

            <header
        className="
        sticky
        top-0
        z-50
        border-b
        border-white/5
        bg-white/[0.03]
        backdrop-blur-3xl
        "
      >

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Image
            src="/logo/logo.png"
            alt="India Websoft"
            width={190}
            height={60}
            className="h-12 w-auto"
            priority
          />

          <nav className="hidden lg:flex items-center gap-10">

            {[
              "Home",
              "Services",
              "Portfolio",
              "Industries",
              "About",
              "Contact",
            ].map((item) => (

              <motion.a
                key={item}
                href="#"
                whileHover={{ y: -3 }}
                className="
                text-slate-300
                transition-all
                hover:text-[#D4AF37]
                "
              >
                {item}
              </motion.a>

            ))}

          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: .98 }}
            className="
            rounded-2xl
            bg-gradient-to-r
            from-[#D4AF37]
            to-[#F8E9C0]
            px-7
            py-3
            font-semibold
            text-black
            "
          >
            Start Project
          </motion.button>

        </div>

      </header>

            <section ref={heroRef} className="relative overflow-hidden">

        <div className="mx-auto max-w-7xl px-6 py-32">

          <div className="grid gap-24 lg:grid-cols-2 lg:items-center">

            <Reveal direction="left">

              <div>

                <div
                  className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#D4AF37]/20
                  bg-[#D4AF37]/5
                  px-5
                  py-2
                  "
                >
                  <Crown
                    size={14}
                    className="text-[#D4AF37]"
                  />

                  <span className="text-sm text-[#D4AF37]">
                    Luxury Digital Innovation Studio
                  </span>
                </div>

                <h1
                  className="
                  mt-8
                  text-6xl
                  font-black
                  leading-[0.9]
                  md:text-8xl
                  "
                >

                  Engineering

                  <span
                    className="
                    block
                    bg-gradient-to-r
                    from-[#D4AF37]
                    via-[#F8E9C0]
                    to-[#4F46E5]
                    bg-clip-text
                    text-transparent
                    "
                  >
                    Luxury Digital
                  </span>

                  Experiences

                </h1>
                                <p
                  className="
                  mt-8
                  max-w-xl
                  text-xl
                  leading-relaxed
                  text-slate-400
                  "
                >
                  Premium websites, enterprise software,
                  AI solutions, automation platforms,
                  SaaS products and digital transformation
                  engineered for ambitious businesses.
                </p>

                <div className="mt-12 flex flex-wrap gap-4">

                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: .98,
                    }}
                    className="
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#D4AF37]
                    to-[#F8E9C0]
                    px-8
                    py-4
                    font-semibold
                    text-black
                    "
                  >
                    Start Project
                  </motion.button>

                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-8
                    py-4
                    backdrop-blur-xl
                    "
                  >
                    View Portfolio
                  </motion.button>

                </div>

              </div>

            </Reveal>

                        <Reveal direction="right">

              <motion.div
                onMouseMove={handleMouseMove}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                className="relative h-[650px]"
              >

                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  rounded-[40px]"
                  >
                  <source
                    src="/videos/hero.mp4"
                    type="video/mp4"
                  />
                </video>

                {/* KPI CARD 1 */}

                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                  }}
                  className="
                  absolute
                  -left-10
                  top-10
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.05]
                  p-6
                  backdrop-blur-2xl
                  "
                >

                  <TrendingUp
                    size={28}
                    className="text-[#D4AF37]"
                  />

                  <h3 className="mt-3 text-3xl font-black">
                    +240%
                  </h3>

                  <p className="text-slate-400">
                    Revenue Growth
                  </p>

                </motion.div>

                {/* KPI CARD 2 */}

                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                  }}
                  className="
                  absolute
                  right-0
                  top-0
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.05]
                  p-6
                  backdrop-blur-2xl
                  "
                >

                  <Brain
                    size={28}
                    className="text-[#4F46E5]"
                  />

                  <h3 className="mt-3 text-3xl font-black">
                    98%
                  </h3>

                  <p className="text-slate-400">
                    AI Automation
                  </p>

                </motion.div>

                {/* KPI CARD 3 */}

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5,
                  }}
                  className="
                  absolute
                  right-10
                  bottom-0
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.05]
                  p-6
                  backdrop-blur-2xl
                  "
                >

                  <ShieldCheck
                    size={28}
                    className="text-[#D4AF37]"
                  />

                  <h3 className="mt-3 font-bold">
                    Enterprise Ready
                  </h3>

                </motion.div>

              </motion.div>

            </Reveal>

          </div>

        </div>

      </section>

            <section className="pb-20">

        <div className="mx-auto max-w-7xl px-6">

          <Reveal>

            <div className="text-center">

              <span className="tracking-[6px] uppercase text-[#D4AF37]">
                Trusted Worldwide
              </span>

              <h2 className="mt-6 text-5xl font-black md:text-7xl">

                Trusted By

                <span className="block text-[#4F46E5]">
                  Industry Leaders
                </span>

              </h2>

            </div>

          </Reveal>

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">

            {brands.map((brand, index) => (

              <motion.div
                key={brand}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .08,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                text-center
                backdrop-blur-xl
                "
              >
                {brand}
              </motion.div>

            ))}

          </div>

        </div>

      </section>

            <section className="pb-32">

        <div className="mx-auto max-w-7xl px-6">

          <Reveal>

            <div
              className="
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-2xl
              "
            >

              <div className="grid md:grid-cols-4">

                {stats.map((item, index) => (

                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: .8,
                      delay: index * .15,
                    }}
                    className="p-10 text-center"
                  >

                    <h3
                      className="
                      text-5xl
                      font-black
                      bg-gradient-to-r
                      from-[#D4AF37]
                      via-[#F8E9C0]
                      to-[#4F46E5]
                      bg-clip-text
                      text-transparent
                      "
                    >
                      <CountUp
                        end={item.value}
                        duration={3}
                      />
                      {item.suffix}
                    </h3>

                    <p className="mt-3 text-slate-400">
                      {item.label}
                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

          </Reveal>

        </div>

      </section>

            <section className="pb-32">

        <div className="mx-auto max-w-7xl px-6">

          <Reveal>

            <div
              className="
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-2xl
              "
            >

              <div className="grid md:grid-cols-4">

                {stats.map((item, index) => (

                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: .8,
                      delay: index * .15,
                    }}
                    className="p-10 text-center"
                  >

                    <h3
                      className="
                      text-5xl
                      font-black
                      bg-gradient-to-r
                      from-[#D4AF37]
                      via-[#F8E9C0]
                      to-[#4F46E5]
                      bg-clip-text
                      text-transparent
                      "
                    >
                      {item.value}
                    </h3>

                    <p className="mt-3 text-slate-400">
                      {item.label}
                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

          </Reveal>

        </div>

      </section>

            <section className="py-32 bg-[#070B18]">

        <div className="mx-auto max-w-7xl px-6">

          <Reveal>

            <div className="text-center">

              <span className="tracking-[6px] uppercase text-[#D4AF37]">
                Premium Services
              </span>

              <h2 className="mt-6 text-5xl font-black md:text-7xl">

                Solutions
                <span className="block bg-gradient-to-r from-[#D4AF37] via-[#F8E9C0] to-[#4F46E5] bg-clip-text text-transparent">
                  Crafted For Growth
                </span>

              </h2>

            </div>

          </Reveal>

          <div className="mt-20 grid gap-6 lg:grid-cols-4">

            <div className="lg:col-span-2 rounded-[40px] border border-white/10 bg-white/[0.03] p-10">

              <Monitor
                size={60}
                className="text-[#D4AF37]"
              />

              <h3 className="mt-8 text-4xl font-black">
                Enterprise Web Development
              </h3>

            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
              <Brain size={40} className="text-[#D4AF37]" />
              <h3 className="mt-6 text-2xl font-bold">
                AI Automation
              </h3>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
              <Smartphone size={40} className="text-[#D4AF37]" />
              <h3 className="mt-6 text-2xl font-bold">
                Mobile Apps
              </h3>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
              <ShoppingCart size={40} className="text-[#D4AF37]" />
              <h3 className="mt-6 text-2xl font-bold">
                E-Commerce
              </h3>
            </div>

          </div>

        </div>

      </section>

            <section className="py-32">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">

            <div>

              <span className="tracking-[6px] uppercase text-[#D4AF37]">
                AI Innovation
              </span>

              <h2 className="mt-6 text-5xl font-black md:text-7xl">

                Enterprise AI
                <span className="block text-[#4F46E5]">
                  Solutions
                </span>

              </h2>

              <p className="mt-8 text-lg text-slate-400">

                AI Agents, Automation,
                Chatbots, RAG Systems,
                Enterprise AI Platforms,
                Predictive Analytics and
                Workflow Automation.

              </p>

            </div>

            <div
              className="
              rounded-[40px]
              border
              border-white/10
              bg-gradient-to-br
              from-[#0D1323]
              to-[#111827]
              p-10
              "
            >

              <Brain
                size={100}
                className="text-[#D4AF37]"
              />

            </div>

          </div>

        </div>

      </section>

            <section className="py-32 bg-[#070B18]">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="tracking-[6px] uppercase text-[#D4AF37]">
              Industries
            </span>

            <h2 className="mt-6 text-5xl font-black md:text-7xl">

              Industries We Serve

            </h2>

          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3 lg:grid-cols-4">

            {[
              "Architecture",
              "Construction",
              "Healthcare",
              "Finance",
              "Education",
              "Retail",
              "Real Estate",
              "Manufacturing",
            ].map((item) => (

              <div
                key={item}
                className="
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                text-center
                "
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      </section>

            <section className="py-32">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="tracking-[6px] uppercase text-[#D4AF37]">
              Global Presence
            </span>

            <h2 className="mt-6 text-5xl font-black md:text-7xl">

              Serving Clients
              Worldwide

            </h2>

          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-5">

            {[
              "India",
              "USA",
              "UAE",
              "UK",
              "Australia",
            ].map((country) => (

              <div
                key={country}
                className="
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                text-center
                "
              >
                {country}
              </div>

            ))}

          </div>

        </div>

      </section>

            <section className="py-32 bg-[#070B18]">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="tracking-[6px] uppercase text-[#D4AF37]">
              Process
            </span>

            <h2 className="mt-6 text-5xl font-black md:text-7xl">

              How We Deliver

            </h2>

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-5">

            {[
              "Discovery",
              "Strategy",
              "Design",
              "Development",
              "Launch",
            ].map((step, index) => (

              <div
                key={step}
                className="text-center"
              >

                <div
                  className="
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D4AF37]/30
                  bg-[#D4AF37]/10
                  text-2xl
                  font-black
                  text-[#D4AF37]
                  "
                >
                  {index + 1}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {step}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>
      
   

{/* GLOBAL PRESENCE */}

<section className="py-32">

  <div className="mx-auto max-w-7xl px-6">

    <Reveal>

      <div className="text-center">

        <span className="tracking-[6px] uppercase text-[#D4AF37]">
          Global Presence
        </span>

        <h2 className="mt-6 text-5xl font-black md:text-7xl">

          Delivering Projects
          <span className="block text-[#4F46E5]">
            Worldwide
          </span>

        </h2>

      </div>

    </Reveal>

    <div
      className="
      mt-20
      rounded-[50px]
      border
      border-white/10
      bg-white/[0.03]
      p-20
      text-center
      backdrop-blur-xl
      "
    >

      <Globe
        size={120}
        className="mx-auto text-[#D4AF37]"
      />

      <h3 className="mt-8 text-4xl font-black">
        25+ Countries Served
      </h3>

      <p className="mt-4 text-slate-400">
        India • USA • UK • Canada • UAE • Australia
      </p>

    </div>

  </div>

</section>

{/* TECHNOLOGY STACK */}

<section className="py-32">

  <div className="mx-auto max-w-7xl px-6">

    <Reveal>

      <div className="text-center">

        <span className="tracking-[6px] uppercase text-[#D4AF37]">
          Technology Stack
        </span>

        <h2 className="mt-6 text-5xl font-black md:text-7xl">
          Built Using
          <span className="block bg-gradient-to-r from-[#D4AF37] via-white to-[#4F46E5] bg-clip-text text-transparent">
            Future Technologies
          </span>
        </h2>

      </div>

    </Reveal>

    <div className="mt-20 grid gap-6 md:grid-cols-3 lg:grid-cols-6">

      {[
        "Next.js",
        "React",
        "Laravel",
        "Node.js",
        "AWS",
        "OpenAI",
      ].map((tech) => (

        <motion.div
          key={tech}
          whileHover={{
            y: -8,
            scale: 1.05,
          }}
          className="
          rounded-[30px]
          border
          border-white/10
          bg-white/[0.03]
          p-8
          text-center
          backdrop-blur-xl
          "
        >

          <h3 className="font-bold text-xl">
            {tech}
          </h3>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* CASE STUDIES */}

<section className="bg-[#050816] py-32">

  <div className="mx-auto max-w-7xl px-6">

    <Reveal>

      <div className="text-center">

        <span className="tracking-[6px] uppercase text-[#D4AF37]">
          Case Studies
        </span>

        <h2 className="mt-6 text-5xl font-black md:text-7xl">
          Proven Results
        </h2>

      </div>

    </Reveal>

    <div className="mt-20 space-y-10">

      {[
        {
          company: "Healthcare Platform",
          growth: "+280%",
        },
        {
          company: "E-Commerce Brand",
          growth: "+340%",
        },
        {
          company: "Real Estate ERP",
          growth: "+210%",
        },
      ].map((item, index) => (

        <motion.div
          key={index}
          whileHover={{
            scale: 1.02,
          }}
          className="
          rounded-[40px]
          border
          border-white/10
          bg-white/[0.03]
          p-10
          backdrop-blur-xl
          "
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-400">
                Project
              </p>

              <h3 className="mt-2 text-3xl font-black">
                {item.company}
              </h3>

            </div>

            <div className="text-right">

              <p className="text-slate-400">
                Growth
              </p>

              <h4 className="text-4xl font-black text-[#D4AF37]">
                {item.growth}
              </h4>

            </div>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

</main>
);
}