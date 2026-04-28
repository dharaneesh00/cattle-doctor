import { Link } from "react-router-dom";
import { Stethoscope, MapPin, NotebookPen, Languages, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { t } from "@/lib/i18n";
import heroImg from "@/assets/hero-farm.jpg";

const Index = () => {
  const { lang } = useLanguage();
  const { user } = useAuth();

  const features = [
    { icon: Stethoscope, title: t(lang, "f1Title"), desc: t(lang, "f1Desc") },
    { icon: MapPin, title: t(lang, "f2Title"), desc: t(lang, "f2Desc") },
    { icon: NotebookPen, title: t(lang, "f3Title"), desc: t(lang, "f3Desc") },
    { icon: Languages, title: t(lang, "f4Title"), desc: t(lang, "f4Desc") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-sky">
          <div className="container grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground shadow-soft">
                <Sparkles className="h-4 w-4 text-accent" />
                <span>SDG 2 — Zero Hunger</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                {t(lang, "heroTitle")}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                {t(lang, "heroDesc")}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="hero" size="xl">
                  <Link to={user ? "/diagnose" : "/auth"}>
                    {t(lang, "ctaDiagnose")}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                {!user && (
                  <Button asChild variant="outline" size="xl">
                    <Link to="/auth">{t(lang, "ctaGetStarted")}</Link>
                  </Button>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-warm rounded-[2rem] opacity-20 blur-2xl" aria-hidden />
              <img
                src={heroImg}
                alt="Smiling farmer with healthy cattle and chickens at sunrise"
                width={1536}
                height={1024}
                className="relative rounded-[2rem] shadow-warm w-full h-auto object-cover animate-float"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t(lang, "featuresTitle")}</h2>
            <p className="text-muted-foreground">{t(lang, "tagline")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="group rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-warm hover:-translate-y-1 transition-bounce"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-leaf shadow-leaf mb-4 group-hover:scale-110 transition-bounce">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="container pb-24">
          <div className="rounded-3xl bg-hero p-10 md:p-16 text-center shadow-leaf">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              {t(lang, "tagline")}
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              {t(lang, "heroDesc")}
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to={user ? "/diagnose" : "/auth"}>
                {t(lang, "ctaDiagnose")}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>PashuCare — Built for farmers · Powered by AI</p>
      </footer>
    </div>
  );
};

export default Index;
