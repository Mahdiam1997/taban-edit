import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Instagram, Send, MessageCircle, Radio } from "lucide-react";
import hero from "@/assets/hero.avif";
import { contacts } from "@/lib/contacts";

const IG = "https://instagram.com/taban_edit";
const DM = "https://ig.me/m/taban_edit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "تابان ادیت | طراحی کاور، پروفایل و تدوین ویدیو" },
      { name: "description", content: "تابان ادیت؛ طراحی کاور و بنر، پروفایل، تدوین ویدیو و محتوای بصری. ارتباط در اینستاگرام، بله، روبیکا و تلگرام." },
      { property: "og:title", content: "تابان ادیت | طراحی و تدوین — از ایده تا اجرا" },
      { property: "og:description", content: "طراحی و تولید محتوای بصری با رنگ و جزئیات؛ راه‌های ارتباطی تابان ادیت در اینستاگرام، بله، روبیکا و تلگرام." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fa_IR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: "🖼️", title: "طراحی کاور و بنر", text: "کاور پست، هایلایت و بنرهای چشم‌نواز برای دیده شدن برندت." },
  { icon: "🌸", title: "طراحی پروفایل", text: "پروفایل یکدست و حرفه‌ای که هویت پیجت را می‌سازد." },
  { icon: "🎬", title: "تدوین ویدیو", text: "ریلز و ویدیوهای جذاب با ریتم، افکت و زیرنویس دقیق." },
  { icon: "✨", title: "تولید محتوای بصری", text: "ایده‌پردازی و ساخت محتوای تصویری هماهنگ با سبک تو." },
];

function HeroImg() {
  return <img src={hero} width={1024} height={1024} alt="تصویر کارتونی طراح تابان ادیت پشت میز طراحی" className="float relative aspect-square w-full rounded-[2.5rem] object-cover shadow-soft" />;
}

function Index() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.15 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-hero">
      <header className="sticky top-0 z-20 px-4 pt-4">
        <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 shadow-soft">
          <a href="#top" className="flex shrink-0 items-center gap-2 font-heading text-lg font-bold">
            <img src="/assets/header-logo-01.webp" width={56} height={56} alt="نشان تابان ادیت" className="h-11 w-11 shrink-0 object-contain sm:h-14 sm:w-14" />
            <span className="text-grad">تابان ادیت</span>
          </a>
          <div className="hidden gap-6 text-sm sm:flex">
            <a href="#services" className="hover:text-primary">خدمات</a>
            <a href="#contact" className="hover:text-primary">راه‌های ارتباطی</a>
          </div>
          <a href="#contact" className="bg-grad rounded-full px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:scale-105">
            ارتباط با ما
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-24">
          <div className="reveal text-center md:text-right">
            <span className="glass inline-block rounded-full px-4 py-1 text-sm text-muted-foreground">استودیو طراحی و تدوین ✿</span>
            <h1 className="mt-5 text-5xl font-extrabold leading-tight md:text-7xl">
              از ایده <span className="text-grad">تا اجرا</span>
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              طراحی کاور، پروفایل، تدوین ویدیو و محتوای بصری؛ با رنگ، حس و جزئیاتی که پیجت را خاص می‌کند.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <a href={IG} target="_blank" rel="noopener noreferrer" className="bg-grad rounded-full px-6 py-3 font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-1">
                اینستاگرام تابان ادیت
              </a>
              <a href="#contact" className="glass rounded-full px-6 py-3 font-semibold transition hover:-translate-y-1">راه‌های ارتباطی</a>
            </div>
          </div>
          <div className="reveal relative">
            <div className="bg-grad absolute inset-6 rounded-[3rem] opacity-40 blur-3xl" />
            <HeroImg />
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="reveal text-center text-3xl font-extrabold md:text-4xl">خدمات <span className="text-grad">تابان</span></h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <article key={s.title} style={{ transitionDelay: `${i * 90}ms` }} className="reveal glass rounded-3xl p-6 shadow-soft transition-transform duration-300 hover:-translate-y-2">
                <div className="bg-grad grid h-14 w-14 place-items-center rounded-2xl text-2xl">{s.icon}</div>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-4xl px-5 py-16">
          <div className="reveal glass rounded-[2.5rem] p-8 text-center shadow-soft md:p-12">
            <h2 className="text-3xl font-extrabold md:text-4xl">بیا با هم <span className="text-grad">بسازیم</span></h2>
            <p className="mt-3 text-muted-foreground">برای سفارش و مشاوره از راه‌های ارتباطی زیر پیام بده.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2" aria-label="راه‌های ارتباطی">
              {contacts.map((contact) => {
                const Icon = { instagram: Instagram, bale: MessageCircle, rubika: Radio, telegram: Send }[contact.id];
                return (
                  <a key={contact.id} href={contact.href} target="_blank" rel="noopener noreferrer" className={`contact-link contact-${contact.id} flex items-center justify-center gap-3 rounded-2xl border-2 px-6 py-4 font-bold transition hover:-translate-y-1`}>
                    <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                    <span>{contact.label}</span>
                  </a>
                );
              })}
            </div>
            <a href={DM} target="_blank" rel="noopener noreferrer" className="bg-grad mt-6 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-bold text-primary-foreground transition hover:-translate-y-1"><Instagram className="h-5 w-5 shrink-0" aria-hidden="true" />پیام مستقیم اینستاگرام</a>
          </div>
        </section>
      </main>

      <footer className="pb-8 text-center text-sm text-muted-foreground">© تابان ادیت — از ایده تا اجرا</footer>
    </div>
  );
}