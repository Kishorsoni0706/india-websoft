"use client";

import Image from "next/image";
import Reveal from "@/components/animations/Reveal";

import {
  motion,
  useScroll,
  useSpring,
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
} from "lucide-react";

export default function HomePage() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="relative overflow-hidden bg-[#050816] text-white">

      {/* SCROLL PROGRESS BAR */}

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

      {/* BACKGROUND GLOW */}

      <div className="pointer-events-none absolute inset-0 -z-10">

        <div
          className="
          absolute
          left-0
          top-0
          h-[900px]
          w-[900px]
          rounded-full
          bg-[#D4AF37]/10
          blur-[250px]
          "
        />

        <div
          className="
          absolute
          right-0
          top-0
          h-[900px]
          w-[900px]
          rounded-full
          bg-[#4F46E5]/10
          blur-[250px]
          "
        />

      </div>

      {/* TOP BAR */}

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

      {/* PREMIUM GLASS NAVBAR */}

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

          <nav className="hidden gap-10 lg:flex">

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
                whileHover={{
                  y: -3,
                }}
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
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
            rounded-2xl
            bg-gradient-to-r
            from-[#D4AF37]
            to-[#F8E9C0]
            px-7
            py-3
            font-semibold
            text-black
            shadow-[0_10px_40px_rgba(212,175,55,0.25)]
            "
          >
            Start Project
          </motion.button>

        </div>

      </header>

      {/* HERO */}

      <section className="relative overflow-hidden">

        <div className="mx-auto grid max-w-7xl gap-24 px-6 py-32 lg:grid-cols-2 lg:items-center">

          {/* LEFT CONTENT */}

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

                <Sparkles
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
                leading-[0.92]
                tracking-tight
                md:text-8xl
                "
              >

                Building

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
                  Extraordinary
                </span>

                Digital Experiences

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
                mobile applications, AI automation and
                digital transformation solutions.

              </p>

              <div className="mt-12 flex flex-wrap gap-4">

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.98,
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

          {/* HERO IMAGE */}

          <Reveal direction="right">

            <div className="relative">

              <Image
                src="/hero/dashboard.jpeg"
                alt="Dashboard"
                width={900}
                height={700}
                className="
                rounded-[40px]
                border
                border-white/10
                shadow-[0_40px_120px_rgba(79,70,229,0.25)]
                "
              />

              {/* FLOATING CARD 1 */}

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
                top-12
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

              {/* FLOATING CARD 2 */}

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

              {/* FLOATING CARD 3 */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                }}
                className="
                absolute
                -bottom-8
                right-12
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

            </div>

          </Reveal>

        </div>

      </section>

            {/* STATS SECTION */}

      <section className="pb-24">

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

                {[
                  {
                    value: "1500+",
                    label: "Projects Delivered",
                  },
                  {
                    value: "500+",
                    label: "Happy Clients",
                  },
                  {
                    value: "12+",
                    label: "Years Experience",
                  },
                  {
                    value: "98%",
                    label: "Client Retention",
                  },
                ].map((item, index) => (

                  <motion.div
                    key={item.label}
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
                      duration: .7,
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

      {/* TRUSTED BRANDS */}

      <section className="pb-32">

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

            {[
              "Microsoft",
              "Google",
              "Amazon",
              "Adobe",
              "Shopify",
              "Oracle",
            ].map((brand, index) => (

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

      {/* BENTO SERVICES */}

      <section className="py-32">

        <div className="mx-auto max-w-7xl px-6">

          <Reveal>

            <div className="text-center">

              <span className="tracking-[6px] uppercase text-[#D4AF37]">
                Premium Services
              </span>

              <h2 className="mt-6 text-5xl font-black md:text-7xl">

                Digital Solutions
                <span className="block bg-gradient-to-r from-[#D4AF37] via-[#F8E9C0] to-[#4F46E5] bg-clip-text text-transparent">
                  Crafted For Growth
                </span>

              </h2>

            </div>

          </Reveal>

          <div className="mt-20 grid gap-6 lg:grid-cols-4">

            <motion.div
              whileHover={{
                y: -12,
              }}
              className="
              group
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-white/10
              bg-gradient-to-br
              from-[#0D1323]
              to-[#111827]
              p-10
              lg:col-span-2
              "
            >

              <div
                className="
                absolute
                inset-0
                opacity-0
                transition
                duration-700
                group-hover:opacity-100
                bg-gradient-to-r
                from-[#D4AF37]/10
                to-[#4F46E5]/10
                "
              />

              <Monitor
                size={60}
                className="relative z-10 text-[#D4AF37]"
              />

              <h3 className="relative z-10 mt-8 text-4xl font-black">
                Enterprise Web Development
              </h3>

              <p className="relative z-10 mt-6 text-slate-400">
                High-performance websites and enterprise applications.
              </p>

            </motion.div>

            {[
              {
                title: "AI Automation",
                icon: Brain,
              },
              {
                title: "Mobile Apps",
                icon: Smartphone,
              },
              {
                title: "E-Commerce",
                icon: ShoppingCart,
              },
            ].map((item) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  "
                >

                  <div
                    className="
                    absolute
                    inset-0
                    opacity-0
                    transition
                    duration-700
                    group-hover:opacity-100
                    bg-gradient-to-r
                    from-[#D4AF37]/10
                    to-[#4F46E5]/10
                    "
                  />

                  <Icon
                    size={42}
                    className="relative z-10 text-[#D4AF37]"
                  />

                  <h3 className="relative z-10 mt-6 text-2xl font-bold">
                    {item.title}
                  </h3>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section className="py-32">

        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2 lg:items-center">

          <Reveal direction="left">

            <Image
              src="/images/about-company.jpg"
              alt="About"
              width={900}
              height={900}
              className="
              rounded-[40px]
              border
              border-white/10
              shadow-[0_40px_120px_rgba(79,70,229,.2)]
              "
            />

          </Reveal>

          <Reveal direction="right">

            <div>

              <span className="tracking-[6px] uppercase text-[#D4AF37]">
                About India Websoft
              </span>

              <h2 className="mt-6 text-5xl font-black md:text-7xl">

                Engineering
                <span className="block text-[#4F46E5]">
                  Digital Excellence
                </span>

              </h2>

              <p className="mt-8 text-lg leading-relaxed text-slate-400">

                We build luxury digital products,
                enterprise software and AI-powered
                business solutions for ambitious companies.

              </p>

            </div>

          </Reveal>

        </div>

      </section>

      {/* PROCESS */}

      <section className="bg-[#070B18] py-32">

        <div className="mx-auto max-w-7xl px-6">

          <Reveal>

            <div className="text-center">

              <span className="tracking-[6px] uppercase text-[#D4AF37]">
                Our Process
              </span>

              <h2 className="mt-6 text-5xl font-black md:text-7xl">
                How We Deliver
              </h2>

            </div>

          </Reveal>

          <div className="mt-20 grid gap-10 md:grid-cols-5">

            {[
              "Discovery",
              "Strategy",
              "Design",
              "Development",
              "Launch",
            ].map((step, index) => (

              <motion.div
                key={step}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .15,
                }}
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

              </motion.div>

            ))}

          </div>

        </div>

      </section>

            {/* PORTFOLIO */}

      <section className="py-32">

        <div className="mx-auto max-w-7xl px-6">

          <Reveal>

            <div className="text-center">

              <span className="tracking-[6px] uppercase text-[#D4AF37]">
                Portfolio
              </span>

              <h2 className="mt-6 text-5xl font-black md:text-7xl">

                Featured
                <span className="block bg-gradient-to-r from-[#D4AF37] via-[#F8E9C0] to-[#4F46E5] bg-clip-text text-transparent">
                  Success Stories
                </span>

              </h2>

            </div>

          </Reveal>

          <div className="mt-20 grid gap-8 lg:grid-cols-2">

            {[1, 2, 3, 4].map((item, index) => (

              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: .8,
                  delay: index * .15,
                }}
                whileHover={{
                  y: -12,
                }}
                className="
                group
                overflow-hidden
                rounded-[40px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                "
              >

                <div className="relative overflow-hidden">

                  <Image
                    src={`/images/project-${item}.jpg`}
                    alt="Project"
                    width={900}
                    height={600}
                    className="
                    h-[340px]
                    w-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-105
                    "
                  />

                </div>

                <div className="relative p-8">

                  <div
                    className="
                    absolute
                    inset-0
                    opacity-0
                    transition
                    duration-700
                    group-hover:opacity-100
                    bg-gradient-to-r
                    from-[#D4AF37]/5
                    to-[#4F46E5]/5
                    "
                  />

                  <div className="relative z-10">

                    <span className="text-sm text-[#D4AF37]">
                      Enterprise Platform
                    </span>

                    <h3 className="mt-4 text-3xl font-black">
                      AI Powered Business Platform
                    </h3>

                    <p className="mt-4 text-slate-400">
                      Premium software platform delivering measurable growth.
                    </p>

                    <div className="mt-8 flex items-center justify-between">

                      <div>

                        <p className="text-sm text-slate-500">
                          Revenue Growth
                        </p>

                        <h4 className="text-2xl font-black text-[#D4AF37]">
                          +240%
                        </h4>

                      </div>

                      <ArrowRight className="text-[#D4AF37]" />

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* AWARDS */}

      <section className="bg-[#070B18] py-32">

        <div className="mx-auto max-w-7xl px-6">

          <Reveal>

            <div className="text-center">

              <span className="tracking-[6px] uppercase text-[#D4AF37]">
                Recognition
              </span>

              <h2 className="mt-6 text-5xl font-black md:text-7xl">
                Awards & Certifications
              </h2>

            </div>

          </Reveal>

          <div className="mt-20 grid gap-8 md:grid-cols-4">

            {[
              "ISO Certified",
              "Top Development Company",
              "AI Excellence Award",
              "12+ Years Experience",
            ].map((award, index) => (

              <motion.div
                key={award}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-10
                text-center
                backdrop-blur-xl
                "
              >

                <div className="text-6xl">🏆</div>

                <h3 className="mt-6 text-xl font-bold">
                  {award}
                </h3>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}

      <section className="py-32">

        <div className="mx-auto max-w-7xl px-6">

          <Reveal>

            <div className="text-center">

              <span className="tracking-[6px] uppercase text-[#D4AF37]">
                Testimonials
              </span>

              <h2 className="mt-6 text-5xl font-black md:text-7xl">
                Client Experiences
              </h2>

            </div>

          </Reveal>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">

            {[1, 2, 3].map((item, index) => (

              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .2,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                rounded-[40px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
                "
              >

                <div className="text-[#D4AF37]">
                  ★★★★★
                </div>

                <p className="mt-6 leading-relaxed text-slate-400">

                  India Websoft transformed our digital presence.
                  The final solution exceeded expectations and
                  delivered outstanding business results.

                </p>

                <div className="mt-8 flex items-center gap-4">

                  <Image
                    src={`/images/client-${item}.jpg`}
                    alt="Client"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />

                  <div>

                    <h4 className="font-semibold">
                      Client Name
                    </h4>

                    <p className="text-sm text-slate-500">
                      CEO & Founder
                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* PREMIUM CTA */}

      <section className="pb-32">

        <div className="mx-auto max-w-7xl px-6">

          <Reveal>

            <div
              className="
              relative
              overflow-hidden
              rounded-[50px]
              border
              border-[#D4AF37]/20
              bg-gradient-to-br
              from-[#0D1323]
              via-[#111827]
              to-[#0D1323]
              p-20
              text-center
              "
            >

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#D4AF3720,transparent_40%)]" />

              <div className="relative z-10">

                <span className="tracking-[6px] uppercase text-[#D4AF37]">
                  Start Today
                </span>

                <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-black leading-tight md:text-7xl">

                  Let's Build
                  Something Extraordinary

                </h2>

                <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-400">

                  Premium design, enterprise development
                  and AI innovation tailored for your business.

                </p>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: .98,
                  }}
                  className="
                  mt-10
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
                  Schedule Consultation
                </motion.button>

              </div>

            </div>

          </Reveal>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 bg-[#03050F]">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="grid gap-12 lg:grid-cols-5">

            <div className="lg:col-span-2">

              <Image
                src="/logo/logo.png"
                alt="India Websoft"
                width={200}
                height={60}
                className="h-12 w-auto"
              />

              <p className="mt-6 max-w-md text-slate-400">

                Building premium digital experiences,
                enterprise software and AI-powered solutions.

              </p>

            </div>

            <div>
              <h4 className="mb-6 font-bold text-[#D4AF37]">
                Services
              </h4>

              <ul className="space-y-3 text-slate-400">
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>AI Solutions</li>
                <li>ERP Software</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 font-bold text-[#D4AF37]">
                Company
              </h4>

              <ul className="space-y-3 text-slate-400">
                <li>About</li>
                <li>Portfolio</li>
                <li>Industries</li>
                <li>Careers</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 font-bold text-[#D4AF37]">
                Contact
              </h4>

              <ul className="space-y-3 text-slate-400">
                <li>+91 9755907700</li>
                <li>info@indiawebsoft.com</li>
                <li>India</li>
              </ul>
            </div>

          </div>

          <div className="mt-16 border-t border-white/10 pt-8 text-center text-slate-500">

            © 2026 India Websoft. All Rights Reserved.

          </div>

        </div>

      </footer>

      {/* FLOATING CONTACT */}

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

        <motion.a
          whileHover={{ scale: 1.1 }}
          href="tel:+919755907700"
          className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#4F46E5]
          shadow-xl
          "
        >
          📞
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://wa.me/919755907700"
          target="_blank"
          className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-gradient-to-r
          from-[#D4AF37]
          to-[#F8E9C0]
          text-2xl
          text-black
          shadow-[0_15px_50px_rgba(212,175,55,0.4)]
          "
        >
          💬
        </motion.a>

      </div>

    </main>
  );
}