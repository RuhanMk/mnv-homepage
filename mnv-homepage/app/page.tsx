/* eslint-disable @next/next/no-img-element */

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

const IMG = {
  hero: img("photo-1600880292203-757bb62b4baf", 1400),
  about: img("photo-1497366216548-37526070297c"),
  dubai: img("photo-1512453979798-5ea266f8880c", 1600),
  a1: img("photo-1454165804606-c3d57bc86b40", 800),
  a2: img("photo-1460925895917-afdab827c52f", 800),
  a3: img("photo-1521791136064-7986c2920216", 800),
  p1: img("photo-1573496359142-b8d87734a5a2", 300),
  p2: img("photo-1507679799987-c73779587ccf", 300),
};

const wrap = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

const services = [
  ["Business Setup", "Mainland, free zone and offshore company formation, licensing and visas."],
  ["Corporate Tax", "Registration, planning and filing under the UAE corporate tax regime."],
  ["VAT", "Registration, returns, refunds and VAT health checks."],
  ["Transfer Pricing", "Documentation and policies that meet UAE and OECD rules."],
  ["Accounting", "Bookkeeping, monthly reporting and audit-ready financials."],
  ["CFO Advisory", "Budgeting, cash flow and board reporting without a full-time hire."],
  ["Compliance", "Economic substance, UBO and licence renewals kept on schedule."],
  ["HR Advisory", "Policies, payroll set-up and labour law guidance."],
  ["Business Advisory", "Market entry, restructuring and growth strategy."],
];

const stats = [
  ["12+", "years in the UAE"],
  ["600+", "companies supported"],
  ["40+", "specialists"],
  ["98%", "filings on time"],
];

const reasons = [
  ["Local expertise", "We work with UAE regulations every day, so your filings are right the first time."],
  ["One team for everything", "Tax, accounting and HR under one roof means fewer hand-offs and fewer surprises."],
  ["Clear, honest advice", "A plain-language recommendation and a fixed scope before we start."],
];

const steps = [
  ["Discovery call", "We learn about your business, licence and goals in a 30 minute call."],
  ["Fixed proposal", "You receive a clear scope, timeline and fee. No hidden costs."],
  ["We deliver", "A dedicated adviser handles the work and keeps you updated."],
];

const articles = [
  ["Corporate Tax", "What UAE businesses should file before the next deadline", "6 min read", IMG.a1],
  ["VAT", "Five VAT mistakes that lead to penalties and how to avoid them", "5 min read", IMG.a2],
  ["Business Setup", "Free zone or mainland: choosing the right structure", "7 min read", IMG.a3],
];

const clients = ["Al Noor Trading", "Gulf Logistics", "Desert Foods", "Bluewave Tech", "Marina Retail"];

export default function Home() {
  return (
    <>
      {/* Top bar */}
      <div className="hidden bg-brand-dark text-xs text-white/80 md:block">
        <div className={`${wrap} flex items-center justify-between py-2`}>
          <p>Dubai, United Arab Emirates</p>
          <p>connect@mnvassociates.com &nbsp;|&nbsp; +971 4 000 0000</p>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-brand/10 bg-white/95 backdrop-blur">
        <div className={`${wrap} flex items-center justify-between py-4`}>
          <a href="#" className="text-xl font-extrabold tracking-tight text-brand">
            MNV <span className="font-medium text-soft">Associates</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#why" className="hover:text-brand">Why MNV</a>
            <a href="#insights" className="hover:text-brand">Insights</a>
            <a href="#contact" className="rounded-full bg-brand px-5 py-2.5 text-white hover:bg-brand-dark">
              Book a consultation
            </a>
          </nav>
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-md border border-brand/20 px-3 py-2 text-sm font-semibold text-brand">
              Menu
            </summary>
            <div className="absolute right-0 mt-3 flex w-56 flex-col gap-1 rounded-xl border border-brand/10 bg-white p-3 shadow-lg">
              <a href="#about" className="rounded-md px-3 py-2 hover:bg-tint">About</a>
              <a href="#services" className="rounded-md px-3 py-2 hover:bg-tint">Services</a>
              <a href="#why" className="rounded-md px-3 py-2 hover:bg-tint">Why MNV</a>
              <a href="#insights" className="rounded-md px-3 py-2 hover:bg-tint">Insights</a>
              <a href="#contact" className="rounded-md bg-brand px-3 py-2 text-center text-white">Book a consultation</a>
            </div>
          </details>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-brand text-white">
          <div className={`${wrap} grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2`}>
            <div>
              <p className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">
                unlock your growth
              </p>
              <h1 className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
                Tax, advisory and business process solutions for companies building in Dubai and across the UAE.
              </h1>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-full bg-white px-7 py-3.5 font-semibold text-brand hover:bg-tint">
                  Book a consultation
                </a>
                <a href="#services" className="rounded-full border border-white/40 px-7 py-3.5 font-semibold hover:bg-white/10">
                  See our services
                </a>
              </div>
              <dl className="mt-10 grid max-w-lg grid-cols-4 gap-4 border-t border-white/20 pt-6">
                {stats.map(([n, l]) => (
                  <div key={l}>
                    <dt className="text-2xl font-extrabold sm:text-3xl">{n}</dt>
                    <dd className="mt-1 text-xs text-white/70">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative">
              <img
                src={IMG.hero}
                alt="Advisers meeting with a client"
                className="h-72 w-full rounded-3xl bg-soft object-cover shadow-2xl sm:h-96 lg:h-[30rem]"
              />
              <div className="absolute -bottom-5 left-4 rounded-2xl bg-white p-4 text-brand shadow-xl sm:left-8">
                <p className="text-sm font-bold">Corporate tax ready</p>
                <p className="text-xs text-[#5b5266]">Registration and filing handled for you</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client strip */}
        <section className="border-b border-brand/10 bg-white py-8">
          <div className={`${wrap} flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-semibold text-soft`}>
            <span className="text-[#5b5266]">Trusted by growing businesses</span>
            {clients.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 py-16 md:py-24">
          <div className={`${wrap} grid items-center gap-12 lg:grid-cols-2`}>
            <img
              src={IMG.about}
              alt="MNV Associates office"
              className="h-72 w-full rounded-3xl bg-soft object-cover sm:h-[26rem]"
            />
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand sm:text-4xl">
                A Dubai advisory firm that works like part of your team
              </h2>
              <p className="mt-5 leading-relaxed text-[#5b5266]">
                MNV Associates helps founders, family businesses and regional branches of international groups
                set up, stay compliant and scale in the UAE. We combine tax, accounting and advisory skills so
                you deal with one team, not five.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {["Licensed and experienced UAE tax professionals", "Fixed-scope proposals with clear timelines", "English and Arabic speaking advisers"].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-brand" />
                    {t}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-8 inline-block rounded-full bg-brand px-7 py-3.5 font-semibold text-white hover:bg-brand-dark">
                Talk to our team
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-20 bg-tint py-16 md:py-24">
          <div className={wrap}>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-brand sm:text-4xl">
              Everything your business needs to stay compliant and grow
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(([name, text]) => (
                <a
                  key={name}
                  href="#contact"
                  className="group rounded-2xl border-t-4 border-brand bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-lg font-bold text-brand">{name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5b5266]">{text}</p>
                  <p className="mt-5 text-sm font-semibold text-brand group-hover:underline">Learn more</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Why MNV */}
        <section id="why" className="scroll-mt-20 py-16 md:py-24">
          <div className={wrap}>
            <div className="relative overflow-hidden rounded-3xl bg-brand text-white">
              <img src={IMG.dubai} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-20" />
              <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why businesses choose MNV</h2>
                  <p className="mt-4 max-w-md text-white/80">
                    Advice you can act on, from people who know the UAE market.
                  </p>
                </div>
                <ul className="space-y-6">
                  {reasons.map(([t, d]) => (
                    <li key={t} className="border-l-4 border-soft pl-5">
                      <h3 className="font-bold">{t}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/80">{d}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Process */}
            <h3 className="mt-16 text-2xl font-bold text-brand">How we work with you</h3>
            <ol className="mt-6 grid gap-5 md:grid-cols-3">
              {steps.map(([t, d], i) => (
                <li key={t} className="rounded-2xl border border-brand/10 p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h4 className="mt-4 font-bold">{t}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-[#5b5266]">{d}</p>
                </li>
              ))}
            </ol>

            {/* Testimonials */}
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                [IMG.p1, "Sara Khan", "Finance Director", "MNV registered us for corporate tax and VAT in under two weeks. Clear, calm and always on time."],
                [IMG.p2, "Omar Hadid", "Founder", "They set up our free zone company and now handle our monthly accounts. One team for everything."],
              ].map(([src, name, role, quote]) => (
                <figure key={name} className="rounded-2xl bg-tint p-7">
                  <blockquote className="leading-relaxed">{quote}</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <img src={src} alt={name} className="h-11 w-11 rounded-full bg-soft object-cover" />
                    <span className="text-sm">
                      <span className="block font-bold text-brand">{name}</span>
                      <span className="text-[#5b5266]">{role}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Insights */}
        <section id="insights" className="scroll-mt-20 bg-tint py-16 md:py-24">
          <div className={wrap}>
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-3xl font-bold tracking-tight text-brand sm:text-4xl">Latest insights</h2>
              <a href="#" className="hidden text-sm font-semibold text-brand hover:underline sm:block">View all articles</a>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {articles.map(([tag, title, time, src]) => (
                <article key={title} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
                  <img src={src} alt="" className="h-48 w-full bg-soft object-cover" loading="lazy" />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm font-semibold text-soft">{tag}</p>
                    <h3 className="mt-2 flex-1 text-lg font-bold leading-snug">{title}</h3>
                    <div className="mt-5 flex items-center justify-between text-sm">
                      <span className="text-[#5b5266]">{time}</span>
                      <a href="#" className="font-semibold text-brand hover:underline">Read article</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 bg-brand py-16 text-white md:py-24">
          <div className={`${wrap} grid gap-10 lg:grid-cols-2`}>
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Talk to an adviser this week</h2>
              <p className="mt-4 max-w-md text-white/80">
                Tell us what you are working on. We will reply within one business day.
              </p>
              <p className="mt-8 text-sm text-white/80">connect@mnvassociates.com</p>
              <p className="mt-1 text-sm text-white/80">+971 4 000 0000</p>
              <p className="mt-1 text-sm text-white/80">Dubai, United Arab Emirates</p>
            </div>
            <form
              action="mailto:connect@mnvassociates.com"
              method="post"
              encType="text/plain"
              className="space-y-4 rounded-2xl bg-white p-6 text-[#2a2233] sm:p-8"
            >
              <label className="block text-sm font-semibold">
                Full name
                <input name="name" required className="mt-1 w-full rounded-lg border border-brand/20 px-4 py-3 font-normal outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
              </label>
              <label className="block text-sm font-semibold">
                Work email
                <input name="email" type="email" required className="mt-1 w-full rounded-lg border border-brand/20 px-4 py-3 font-normal outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
              </label>
              <label className="block text-sm font-semibold">
                How can we help?
                <textarea name="message" rows={4} className="mt-1 w-full rounded-lg border border-brand/20 px-4 py-3 font-normal outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
              </label>
              <button type="submit" className="w-full rounded-full bg-brand px-7 py-3.5 font-semibold text-white hover:bg-brand-dark">
                Book a consultation
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white/80">
        <div className={`${wrap} grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4`}>
          <div>
            <p className="text-xl font-extrabold text-white">MNV Associates</p>
            <p className="mt-2 text-sm">unlock your growth</p>
          </div>
          <div>
            <p className="font-semibold text-white">Services</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Corporate Tax</li>
              <li>VAT</li>
              <li>Accounting</li>
              <li>CFO Advisory</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Company</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#why" className="hover:text-white">Why MNV</a></li>
              <li><a href="#insights" className="hover:text-white">Insights</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Contact</p>
            <p className="mt-3 text-sm">Dubai, United Arab Emirates</p>
            <p className="mt-2 text-sm">connect@mnvassociates.com</p>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs">
          © 2026 MNV Associates. Concept homepage for assignment purposes.
        </div>
      </footer>
    </>
  );
}