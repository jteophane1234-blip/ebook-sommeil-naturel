export type Locale = "fr" | "en" | "es" | "de" | "it" | "pt";

export interface Testimonial {
  name: string;
  location: string;
  text: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Translations {
  // Meta
  metaTitle: string;
  metaDescription: string;

  // Hero
  heroBadge: string;
  heroTitle1: string;
  heroTitleHighlight: string;
  heroTitle2: string;
  heroDescription1: string;
  heroDescriptionStrong: string;
  heroCta: string;
  heroGuarantee: string;
  heroDelivery: string;
  heroFormat: string;
  heroLanguage: string;
  coverAlt: string;

  // Problems
  problemTitle: string;
  problems: string[];
  problemCta1: string;
  problemCta2: string;

  // Benefits
  benefitsBadge: string;
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefits: Benefit[];

  // Included
  includedTitle: string;
  includedSubtitle: string;
  includedCoverAlt: string;
  included: string[];

  // How it works
  howTitle: string;
  howSubtitle: string;
  steps: Step[];

  // Testimonials
  testimonialsBadge: string;
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  testimonials: Testimonial[];

  // Guarantee
  guaranteeTitle: string;
  guaranteeText1: string;
  guaranteeTextStrong: string;
  guaranteeText2: string;
  guaranteeBadge: string;

  // FAQ
  faqTitle: string;
  faqSubtitle: string;
  faqs: FAQ[];

  // CTA
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  ctaGuarantee: string;
  ctaSecurePayment: string;
  ctaInstantDelivery: string;
  ctaPdfPages: string;

  // Footer
  footerText: string;
  footerPayment: string;
  footerCopyright: string;
}
