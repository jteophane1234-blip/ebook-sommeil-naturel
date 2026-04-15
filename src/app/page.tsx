"use client";

import Image from "next/image";
import {
  Moon,
  Leaf,
  ShieldCheck,
  Clock,
  Star,
  CheckCircle2,
  Mail,
  BookOpen,
  ChevronDown,
  Sparkles,
  Heart,
  Utensils,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/components/language-provider";
import { LanguageSelector } from "@/components/language-selector";

const DIGISTORE_LINK = "https://www.digistore24.com/product/679282";

const includedIcons = [BookOpen, Leaf, Utensils, Star, Clock, Mail];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32">
          {/* Language Selector */}
          <div className="flex justify-end mb-4">
            <LanguageSelector />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-6">
              <Badge
                variant="secondary"
                className="bg-emerald-400/20 text-emerald-200 border-emerald-400/30 px-4 py-1.5 text-sm"
              >
                <Sparkles className="w-4 h-4 mr-1.5" />
                {t.heroBadge}
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                {t.heroTitle1}{" "}
                <span className="text-emerald-300">{t.heroTitleHighlight}</span>{" "}
                {t.heroTitle2}
              </h1>

              <p className="text-lg md:text-xl text-emerald-100/90 max-w-xl mx-auto lg:mx-0">
                {t.heroDescription1}{" "}
                <strong className="text-white">
                  {t.heroDescriptionStrong}
                </strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a
                  href={DIGISTORE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-bold text-lg px-8 py-6 rounded-xl shadow-lg shadow-emerald-400/25 transition-all duration-300 hover:shadow-emerald-400/40 hover:scale-105 w-full sm:w-auto"
                  >
                    {t.heroCta}
                  </Button>
                </a>
                <div className="flex items-center gap-2 text-emerald-200/80 text-sm justify-center lg:justify-start">
                  <ShieldCheck className="w-5 h-5 text-emerald-300" />
                  <span>{t.heroGuarantee}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2 text-sm text-emerald-200/70">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> {t.heroDelivery}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> {t.heroFormat}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> {t.heroLanguage}
                </span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-emerald-400/20 rounded-2xl blur-xl group-hover:bg-emerald-400/30 transition-all duration-500" />
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/ebook-cover.png"
                    alt={t.coverAlt}
                    width={420}
                    height={560}
                    className="w-full h-auto max-w-sm md:max-w-md"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t.problemTitle}
            </h2>
            <div className="w-20 h-1 bg-emerald-400 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.problems.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-bold text-sm mt-0.5">
                  ✗
                </div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl md:text-2xl font-semibold text-emerald-700">
              {t.problemCta1}
              <br />
              {t.problemCta2}
            </p>
          </div>
        </div>
      </section>

      {/* Solution / Benefits Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-4 mb-14">
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 px-4 py-1.5">
              <Leaf className="w-4 h-4 mr-1.5" />
              {t.benefitsBadge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t.benefitsTitle}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {t.benefitsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Moon, ...t.benefits[0] },
              { icon: Leaf, ...t.benefits[1] },
              { icon: Clock, ...t.benefits[2] },
              { icon: Heart, ...t.benefits[3] },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="w-14 h-14 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5">
                    <benefit.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-center lg:text-left space-y-4 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {t.includedTitle}
                </h2>
                <p className="text-gray-600 text-lg">{t.includedSubtitle}</p>
              </div>

              <div className="space-y-4">
                {t.included.map((item, index) => {
                  const Icon = includedIcons[index] || BookOpen;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-emerald-50 transition-colors"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <p className="text-gray-700 leading-relaxed pt-1.5">
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/ebook-cover.png"
                alt={t.includedCoverAlt}
                width={380}
                height={507}
                className="w-full max-w-xs md:max-w-sm h-auto rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-teal-900 to-emerald-950 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center space-y-4 mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">{t.howTitle}</h2>
            <p className="text-emerald-200 text-lg max-w-2xl mx-auto">
              {t.howSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.steps.map((item, index) => (
              <div
                key={index}
                className="relative text-center p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-400 text-emerald-950 flex items-center justify-center text-2xl font-bold mx-auto mb-5">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-emerald-200/90 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-4 mb-14">
            <Badge className="bg-amber-100 text-amber-700 border-amber-200 px-4 py-1.5">
              <Star className="w-4 h-4 mr-1.5" />
              {t.testimonialsBadge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t.testimonialsTitle}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.testimonialsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-lg">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t.guaranteeTitle}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
                {t.guaranteeText1}{" "}
                <strong className="text-emerald-700">
                  {t.guaranteeTextStrong}
                </strong>{" "}
                {t.guaranteeText2}
              </p>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full font-semibold">
                <CheckCircle2 className="w-5 h-5" />
                {t.guaranteeBadge}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center space-y-4 mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t.faqTitle}
            </h2>
            <p className="text-gray-600 text-lg">{t.faqSubtitle}</p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {t.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-gray-900 font-semibold hover:no-underline py-5">
                  <ChevronDown className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" />
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 max-w-3xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-emerald-100/90 max-w-2xl mx-auto">
            {t.ctaDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href={DIGISTORE_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-bold text-lg px-10 py-7 rounded-xl shadow-lg shadow-emerald-400/25 transition-all duration-300 hover:shadow-emerald-400/40 hover:scale-105"
              >
                {t.ctaButton}
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-emerald-200/70 pt-2">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> {t.ctaGuarantee}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> {t.ctaSecurePayment}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4" /> {t.ctaInstantDelivery}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> {t.ctaPdfPages}
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-300/70 py-8">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-4">
          <p className="text-sm">{t.footerText}</p>
          <div className="flex justify-center gap-6 text-xs">
            <a
              href={DIGISTORE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-200 transition-colors"
            >
              {t.footerPayment}
            </a>
            <span className="text-emerald-700">|</span>
            <a
              href="https://www.digistore24.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-200 transition-colors"
            >
              Digistore24
            </a>
          </div>
          <p className="text-xs text-emerald-400/50">
            {t.footerCopyright.replace("{year}", String(new Date().getFullYear()))}
          </p>
        </div>
      </footer>
    </div>
  );
}
