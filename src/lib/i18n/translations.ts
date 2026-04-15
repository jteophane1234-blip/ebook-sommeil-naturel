import type { Locale, Translations } from "./types";

export const SUPPORTED_LOCALES: { code: Locale; label: string; flag: string }[] = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
];

export const DEFAULT_LOCALE: Locale = "fr";

const translations: Record<Locale, Translations> = {
  fr: {
    // Meta
    metaTitle: "15 Recettes Culinaires Naturelles pour un Meilleur Sommeil | Ebook",
    metaDescription: "Retrouvez un sommeil profond et réparateur grâce à 15 recettes culinaires 100% naturelles. Plan alimentaire de 30 jours inclus. Livraison instantanée par e-mail.",

    // Hero
    heroBadge: "Ebook — Livraison instantanée",
    heroTitle1: "15 Recettes Culinaires",
    heroTitleHighlight: "Naturelles",
    heroTitle2: "pour un Meilleur Sommeil",
    heroDescription1: "Vous passez vos nuits à tourner dans votre lit ? Vous vous réveillez fatigué(e) chaque matin malgré des heures de sommeil ? Vous en avez assez des somnifères et de leurs effets secondaires ?",
    heroDescriptionStrong: "Ce guide est fait pour vous.",
    heroCta: "Obtenir l'Ebook — 12,50 $",
    heroGuarantee: "Garantie remboursement 60 jours",
    heroDelivery: "Livraison par e-mail",
    heroFormat: "Format PDF — 33 pages",
    heroLanguage: "100% en français",
    coverAlt: "Couverture — 15 Recettes Culinaires Naturelles pour un Meilleur Sommeil",

    // Problems
    problemTitle: "Vous vous reconnaissez dans ces situations ?",
    problems: [
      "Vous passez des heures à vous tourner dans votre lit avant de trouver le sommeil",
      "Vous vous réveillez plusieurs fois par nuit et ne retrouvez jamais un sommeil profond",
      "Vous êtes dépendant(e) des somnifères et redoutez leurs effets secondaires",
      "Vous vous sentez épuisé(e) dès le matin, comme si vous n'aviez pas dormi",
      "Votre manque de sommeil affecte votre humeur, votre concentration et votre productivité",
      "Vous avez essayé de nombreuses solutions sans jamais trouver celle qui fonctionne vraiment",
    ],
    problemCta1: "Si vous avez répondu oui à au moins une de ces questions,",
    problemCta2: "alors cet ebook est exactement ce dont vous avez besoin.",

    // Benefits
    benefitsBadge: "La Solution Naturelle",
    benefitsTitle: "Pourquoi ce livre va changer vos nuits",
    benefitsSubtitle: "Découvrez comment l'alimentation peut devenir votre alliée la plus puissante pour retrouver un sommeil de qualité, naturellement et durablement.",
    benefits: [
      {
        title: "Sommeil profond et réparateur",
        description: "Grâce à des aliments soigneusement sélectionnés pour leurs propriétés favorisant le sommeil, vous retrouverez des nuits apaisantes et un repos véritablement récupérateur. Chaque recette a été conçue pour optimiser la production naturelle de mélatonine et de sérotonine.",
      },
      {
        title: "100% naturel, sans produits chimiques",
        description: "Dites adieu aux somnifères et à leurs effets secondaires. Nos recettes n'utilisent que des ingrédients que l'on trouve dans la nature : fruits, légumes, herbes aromatiques et épices aux vertus apaisantes reconnues depuis des générations.",
      },
      {
        title: "Résultats dès les premiers jours",
        description: "Un plan alimentaire structuré sur 30 jours vous guide pas à pas. Dès la première semaine, vous ressentirez une amélioration notable de la qualité de votre sommeil. Les recettes sont simples, rapides à préparer et délicieuses.",
      },
      {
        title: "Bien-être global amélioré",
        description: "Un bon sommeil ne profite pas qu'à vos nuits. En retrouvant un rythme de repos naturel, vous constaterez une amélioration de votre énergie, de votre concentration, de votre humeur et même de votre digestion au quotidien.",
      },
    ],

    // Included
    includedTitle: "Ce que contient votre ebook",
    includedSubtitle: "Un guide complet et structuré pour transformer votre alimentation et retrouver un sommeil réparateur en 30 jours.",
    includedCoverAlt: "Aperçu de l'ebook — 15 Recettes Culinaires Naturelles pour un Meilleur Sommeil",
    included: [
      "15 recettes culinaires détaillées avec instructions pas à pas",
      "Un plan alimentaire complet de 30 jours pour un sommeil optimal",
      "Liste d'ingrédients accessibles et faciles à trouver",
      "Conseils nutritionnels pour maximiser les bienfaits de chaque repas",
      "Recettes rapides : de 10 à 25 minutes de préparation",
      "Livraison instantanée par e-mail — commencez dès aujourd'hui",
    ],

    // How it works
    howTitle: "Comment ça fonctionne ?",
    howSubtitle: "Un processus simple en 3 étapes pour retrouver le sommeil que vous méritez.",
    steps: [
      {
        title: "Commandez votre ebook",
        description: "Un paiement sécurisé via Digistore24 (PayPal, carte bancaire ou Google Pay). Vous recevez instantanément votre ebook PDF par e-mail, prêt à être consulté sur tous vos appareils.",
      },
      {
        title: "Suivez le plan de 30 jours",
        description: "Commencez le plan alimentaire structuré sur 4 semaines. Chaque semaine, de nouvelles recettes sont introduites progressivement. Les instructions sont claires, les ingrédients accessibles et la préparation rapide.",
      },
      {
        title: "Retrouvez un sommeil naturel",
        description: "Dès les premiers jours, vous ressentirez les bienfaits d'une alimentation pensée pour favoriser le sommeil. En un mois, votre cycle de repos sera régulé naturellement, sans aucun produit chimique.",
      },
    ],

    // Testimonials
    testimonialsBadge: "Témoignages vérifiés",
    testimonialsTitle: "Ce que nos lecteurs en disent",
    testimonialsSubtitle: "Des personnes comme vous ont déjà transformé la qualité de leur sommeil grâce à nos recettes naturelles.",
    testimonials: [
      {
        name: "Sophie M.",
        location: "Paris, France",
        text: "Depuis que j'utilise ces recettes, je dors comme un bébé ! Après des mois d'insomnie et de traitements médicamenteux, j'ai enfin trouvé une solution naturelle qui fonctionne vraiment. Le plan de 30 jours est facile à suivre et les plats sont délicieux.",
      },
      {
        name: "Marc D.",
        location: "Bruxelles, Belgique",
        text: "J'étais très sceptique au début, mais les résultats ont dépassé mes attentes. En deux semaines, ma qualité de sommeil s'est nettement améliorée. Je me réveille reposé et plein d'énergie. Ce livre vaut chaque centime investi.",
      },
      {
        name: "Amina B.",
        location: "Casablanca, Maroc",
        text: "Ce qui m'a plu, c'est la simplicité des recettes. Pas besoin d'être un chef pour les préparer ! Les ingrédients sont courants et abordables. Ma famille entière profite maintenant de repas qui favorisent le sommeil de tous.",
      },
      {
        name: "Jean-Luc R.",
        location: "Lyon, France",
        text: "En tant que travailleur de nuit, retrouver un sommeil de qualité était un vrai défi. Ce livre m'a aidé à réorganiser mon alimentation de manière intelligente. Je recommande vivement à tous ceux qui souffrent de troubles du sommeil.",
      },
    ],

    // Guarantee
    guaranteeTitle: "Garantie de remboursement de 60 jours",
    guaranteeText1: "Nous sommes tellement confiants dans l'efficacité de notre ebook que nous vous offrons une garantie",
    guaranteeTextStrong: "satisfait ou remboursé de 60 jours, sans poser de questions.",
    guaranteeText2: "Si pour quelque raison que ce soit notre guide ne répond pas à vos attentes, il vous suffit de nous contacter et nous vous rembourserons intégralement. Aucun risque pour vous, aucun formulaire compliqué, aucune justification requise.",
    guaranteeBadge: "Achat 100% sécurisé et sans risque",

    // FAQ
    faqTitle: "Questions fréquentes",
    faqSubtitle: "Vous avez des questions ? Nous avons les réponses.",
    faqs: [
      {
        question: "Est-ce que ce livre convient aux personnes ayant des allergies alimentaires ?",
        answer: "Oui, la plupart des recettes peuvent être adaptées en fonction de vos allergies ou intolérances alimentaires. Chaque recette propose des alternatives pour les allergènes courants comme le gluten, les produits laitiers ou les noix. Si vous avez une condition médicale spécifique, nous vous recommandons de consulter votre médecin avant de commencer le programme.",
      },
      {
        question: "Combien de temps faut-il pour voir les premiers résultats ?",
        answer: "La plupart de nos lecteurs constatent une amélioration dès les 5 à 7 premiers jours. Le plan alimentaire de 30 jours est conçu pour des résultats progressifs et durables. Les premières semaines visent à réguler votre cycle de sommeil, tandis que les semaines suivantes consolidant ces bienfaits pour un sommeil de qualité à long terme.",
      },
      {
        question: "Les ingrédients sont-ils faciles à trouver et coûteux ?",
        answer: "Absolument ! Toutes les recettes utilisent des ingrédients que l'on trouve facilement dans n'importe quel supermarché ou marché local. Nous avons volontairement évité les produits exotiques ou onéreux. Le budget hebdomadaire estimé pour suivre le plan alimentaire est comparable à vos achats alimentaires habituels, sans frais supplémentaires significatifs.",
      },
      {
        question: "Comment reçois-je l'ebook après l'achat ?",
        answer: "Votre ebook est livré instantanément par e-mail dès que votre paiement est confirmé sur Digistore24. Vous recevrez un lien de téléchargement sécurisé pour le fichier PDF. Le livre compte 33 pages et est lisible sur tous les supports : ordinateur, tablette et smartphone. Vous pouvez commencer à lire et à appliquer les conseils immédiatement.",
      },
      {
        question: "Comment fonctionne la garantie de remboursement de 60 jours ?",
        answer: "Nous offrons une garantie satisfait ou remboursé de 60 jours, sans aucune condition ni question posée. Si pour quelque raison que ce soit le livre ne répond pas à vos attentes, il vous suffit de nous contacter via Digistore24 et nous vous rembourserons intégralement. C'est notre façon de vous montrer la confiance que nous avons en notre produit.",
      },
      {
        question: "Ce livre remplace-t-il un traitement médical ?",
        answer: "Non, ce livre est un guide nutritionnel complémentaire et ne se substitue en aucun cas à un avis ou un traitement médical professionnel. Si vous souffrez de troubles du sommeil sévères ou chroniques, nous vous encourageons vivement à consulter un professionnel de santé. Les recettes proposées visent à favoriser un sommeil naturel par une alimentation saine et équilibrée.",
      },
    ],

    // Final CTA
    ctaTitle: "Prêt(e) à retrouver le sommeil que vous méritez ?",
    ctaDescription: "Ne laissez pas une mauvaise nuit gâcher vos journées. Avec nos 15 recettes 100% naturelles et un plan alimentaire de 30 jours, transformez vos nuits dès aujourd'hui.",
    ctaButton: "Oui, je veux mieux dormir maintenant — 12,50 $",
    ctaGuarantee: "Garantie 60 jours",
    ctaSecurePayment: "Paiement sécurisé",
    ctaInstantDelivery: "Livraison instantanée",
    ctaPdfPages: "PDF — 33 pages",

    // Footer
    footerText: "Ce produit est vendu via Digistore24, une plateforme de paiement sécurisée reconnue internationalement.",
    footerPayment: "Page de paiement",
    footerCopyright: "© {year} — 15 Recettes Culinaires Naturelles pour un Meilleur Sommeil. Tous droits réservés.",
  },

  en: {
    metaTitle: "15 Natural Culinary Recipes for Better Sleep | Ebook",
    metaDescription: "Rediscover deep, restorative sleep with 15 completely natural recipes. 30-day meal plan included. Instant delivery by email.",

    heroBadge: "Ebook — Instant Delivery",
    heroTitle1: "15 Natural Culinary",
    heroTitleHighlight: "Recipes",
    heroTitle2: "for Better Sleep",
    heroDescription1: "Do you spend your nights tossing and turning in bed? Do you wake up tired every morning despite hours of sleep? Are you fed up with sleeping pills and their side effects?",
    heroDescriptionStrong: "This guide is for you.",
    heroCta: "Get the Ebook — $12.50",
    heroGuarantee: "60-day money-back guarantee",
    heroDelivery: "Delivery by email",
    heroFormat: "PDF format — 33 pages",
    heroLanguage: "100% in French",
    coverAlt: "Cover — 15 Natural Culinary Recipes for Better Sleep",

    problemTitle: "Do you recognize yourself in these situations?",
    problems: [
      "You spend hours tossing and turning in bed before finding sleep",
      "You wake up several times a night and never achieve deep sleep",
      "You're dependent on sleeping pills and worry about their side effects",
      "You feel exhausted in the morning, as if you hadn't slept at all",
      "Your lack of sleep affects your mood, concentration, and productivity",
      "You've tried many solutions without finding one that truly works",
    ],
    problemCta1: "If you answered yes to at least one of these questions,",
    problemCta2: "then this ebook is exactly what you need.",

    benefitsBadge: "The Natural Solution",
    benefitsTitle: "Why this book will transform your nights",
    benefitsSubtitle: "Discover how nutrition can become your most powerful ally for quality sleep, naturally and sustainably.",
    benefits: [
      {
        title: "Deep, restorative sleep",
        description: "Thanks to carefully selected foods with sleep-promoting properties, you'll rediscover peaceful nights and truly restorative rest. Each recipe was designed to optimize natural melatonin and serotonin production.",
      },
      {
        title: "100% natural, no chemicals",
        description: "Say goodbye to sleeping pills and their side effects. Our recipes use only ingredients found in nature: fruits, vegetables, aromatic herbs, and spices with soothing properties recognized for generations.",
      },
      {
        title: "Results from the first few days",
        description: "A structured 30-day meal plan guides you step by step. From the first week, you'll notice a significant improvement in your sleep quality. The recipes are simple, quick to prepare, and delicious.",
      },
      {
        title: "Improved overall well-being",
        description: "Good sleep benefits more than just your nights. By restoring a natural rest rhythm, you'll notice improvements in your energy, concentration, mood, and even daily digestion.",
      },
    ],

    includedTitle: "What's inside your ebook",
    includedSubtitle: "A complete, structured guide to transform your diet and restore restorative sleep in 30 days.",
    includedCoverAlt: "Preview of the ebook — 15 Natural Culinary Recipes for Better Sleep",
    included: [
      "15 detailed culinary recipes with step-by-step instructions",
      "A complete 30-day meal plan for optimal sleep",
      "List of affordable, easy-to-find ingredients",
      "Nutritional tips to maximize the benefits of every meal",
      "Quick recipes: 10 to 25 minutes preparation time",
      "Instant delivery by email — start today",
    ],

    howTitle: "How does it work?",
    howSubtitle: "A simple 3-step process to restore the sleep you deserve.",
    steps: [
      {
        title: "Order your ebook",
        description: "Secure payment via Digistore24 (PayPal, credit card, or Google Pay). You instantly receive your PDF ebook by email, ready to view on all your devices.",
      },
      {
        title: "Follow the 30-day plan",
        description: "Start the structured meal plan over 4 weeks. Each week, new recipes are introduced progressively. The instructions are clear, the ingredients accessible, and preparation quick.",
      },
      {
        title: "Restore natural sleep",
        description: "From the first few days, you'll feel the benefits of a diet designed to promote sleep. In one month, your rest cycle will be naturally regulated, without any chemicals.",
      },
    ],

    testimonialsBadge: "Verified testimonials",
    testimonialsTitle: "What our readers say",
    testimonialsSubtitle: "People like you have already transformed their sleep quality thanks to our natural recipes.",
    testimonials: [
      {
        name: "Sophie M.",
        location: "Paris, France",
        text: "Since I started using these recipes, I sleep like a baby! After months of insomnia and medication, I've finally found a natural solution that really works. The 30-day plan is easy to follow and the dishes are delicious.",
      },
      {
        name: "Marc D.",
        location: "Brussels, Belgium",
        text: "I was very skeptical at first, but the results exceeded my expectations. Within two weeks, my sleep quality improved significantly. I wake up rested and full of energy. This book is worth every penny invested.",
      },
      {
        name: "Amina B.",
        location: "Casablanca, Morocco",
        text: "What I loved is the simplicity of the recipes. You don't need to be a chef to prepare them! The ingredients are common and affordable. My whole family now enjoys meals that promote sleep for everyone.",
      },
      {
        name: "Jean-Luc R.",
        location: "Lyon, France",
        text: "As a night shift worker, getting quality sleep was a real challenge. This book helped me reorganize my diet intelligently. I highly recommend it to anyone suffering from sleep disorders.",
      },
    ],

    guaranteeTitle: "60-day money-back guarantee",
    guaranteeText1: "We are so confident in the effectiveness of our ebook that we offer a",
    guaranteeTextStrong: "60-day satisfaction guarantee, no questions asked.",
    guaranteeText2: "If for any reason our guide doesn't meet your expectations, simply contact us and we'll refund you in full. Zero risk for you, no complicated forms, no justification required.",
    guaranteeBadge: "100% secure and risk-free purchase",

    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Have questions? We have answers.",
    faqs: [
      {
        question: "Is this book suitable for people with food allergies?",
        answer: "Yes, most recipes can be adapted for your allergies or food intolerances. Each recipe offers alternatives for common allergens such as gluten, dairy, or nuts. If you have a specific medical condition, we recommend consulting your doctor before starting the program.",
      },
      {
        question: "How long does it take to see the first results?",
        answer: "Most of our readers notice an improvement within the first 5 to 7 days. The 30-day meal plan is designed for gradual and lasting results. The first weeks aim to regulate your sleep cycle, while subsequent weeks consolidate these benefits for long-term quality sleep.",
      },
      {
        question: "Are the ingredients easy to find and expensive?",
        answer: "Absolutely! All recipes use ingredients easily found in any supermarket or local market. We deliberately avoided exotic or expensive products. The estimated weekly budget for following the meal plan is comparable to your regular grocery purchases, without significant additional costs.",
      },
      {
        question: "How do I receive the ebook after purchase?",
        answer: "Your ebook is delivered instantly by email as soon as your payment is confirmed on Digistore24. You'll receive a secure download link for the PDF file. The book contains 33 pages and is readable on all devices: computer, tablet, and smartphone. You can start reading and applying the tips immediately.",
      },
      {
        question: "How does the 60-day money-back guarantee work?",
        answer: "We offer a 60-day satisfaction guarantee, with no conditions or questions asked. If for any reason the book doesn't meet your expectations, simply contact us via Digistore24 and we'll refund you in full. This is our way of showing the confidence we have in our product.",
      },
      {
        question: "Does this book replace medical treatment?",
        answer: "No, this book is a complementary nutritional guide and does not replace professional medical advice or treatment in any way. If you suffer from severe or chronic sleep disorders, we strongly encourage you to consult a healthcare professional. The proposed recipes aim to promote natural sleep through a healthy, balanced diet.",
      },
    ],

    ctaTitle: "Ready to restore the sleep you deserve?",
    ctaDescription: "Don't let a bad night ruin your day. With our 15 completely natural recipes and a 30-day meal plan, transform your nights starting today.",
    ctaButton: "Yes, I want to sleep better now — $12.50",
    ctaGuarantee: "60-day guarantee",
    ctaSecurePayment: "Secure payment",
    ctaInstantDelivery: "Instant delivery",
    ctaPdfPages: "PDF — 33 pages",

    footerText: "This product is sold through Digistore24, an internationally recognized secure payment platform.",
    footerPayment: "Payment page",
    footerCopyright: "© {year} — 15 Natural Culinary Recipes for Better Sleep. All rights reserved.",
  },

  es: {
    metaTitle: "15 Recetas Culinarias Naturales para un Mejor Sueño | Ebook",
    metaDescription: "Recupera un sueño profundo y reparador con 15 recetas 100% naturales. Plan alimentario de 30 días incluido. Entrega instantánea por email.",

    heroBadge: "Ebook — Entrega instantánea",
    heroTitle1: "15 Recetas Culinarias",
    heroTitleHighlight: "Naturales",
    heroTitle2: "para un Mejor Sueño",
    heroDescription1: "¿Pasas las noches dando vueltas en la cama? ¿Te despiertas cansado/a cada mañana a pesar de horas de sueño? ¿Estás harto/a de los somníferos y sus efectos secundarios?",
    heroDescriptionStrong: "Esta guía es para ti.",
    heroCta: "Obtener el Ebook — 12,50 $",
    heroGuarantee: "Garantía de reembolso de 60 días",
    heroDelivery: "Entrega por email",
    heroFormat: "Formato PDF — 33 páginas",
    heroLanguage: "100% en francés",
    coverAlt: "Portada — 15 Recetas Culinarias Naturales para un Mejor Sueño",

    problemTitle: "¿Te identificas con estas situaciones?",
    problems: [
      "Pasas horas dando vueltas en la cama antes de conseguir dormir",
      "Te despiertas varias veces por la noche y nunca logras un sueño profundo",
      "Eres dependiente de los somníferos y temes sus efectos secundarios",
      "Te sientes agotado/a desde por la mañana, como si no hubieras dormido",
      "Tu falta de sueño afecta tu humor, concentración y productividad",
      "Has probado muchas soluciones sin encontrar una que realmente funcione",
    ],
    problemCta1: "Si has respondido sí a al menos una de estas preguntas,",
    problemCta2: "entonces este ebook es exactamente lo que necesitas.",

    benefitsBadge: "La Solución Natural",
    benefitsTitle: "Por qué este libro transformará tus noches",
    benefitsSubtitle: "Descubre cómo la alimentación puede convertirse en tu aliada más poderosa para un sueño de calidad, de forma natural y duradera.",
    benefits: [
      {
        title: "Sueño profundo y reparador",
        description: "Gracias a alimentos cuidadosamente seleccionados por sus propiedades que favorecen el sueño, recuperarás noches tranquilas y un descanso verdaderamente reparador. Cada receta fue diseñada para optimizar la producción natural de melatonina y serotonina.",
      },
      {
        title: "100% natural, sin productos químicos",
        description: "Adiós a los somníferos y sus efectos secundarios. Nuestras recetas utilizan solo ingredientes que se encuentran en la naturaleza: frutas, verduras, hierbas aromáticas y especias con propiedades calmantes reconocidas desde generaciones.",
      },
      {
        title: "Resultados desde los primeros días",
        description: "Un plan alimentario estructurado de 30 días te guía paso a paso. Desde la primera semana, notarás una mejora significativa en la calidad de tu sueño. Las recetas son simples, rápidas de preparar y deliciosas.",
      },
      {
        title: "Bienestar general mejorado",
        description: "Un buen sueño no beneficia solo tus noches. Al recuperar un ritmo de descanso natural, notarás una mejora en tu energía, concentración, humor e incluso digestión diaria.",
      },
    ],

    includedTitle: "Lo que contiene tu ebook",
    includedSubtitle: "Una guía completa y estructurada para transformar tu alimentación y recuperar un sueño reparador en 30 días.",
    includedCoverAlt: "Vista previa del ebook — 15 Recetas Culinarias Naturales para un Mejor Sueño",
    included: [
      "15 recetas culinarias detalladas con instrucciones paso a paso",
      "Un plan alimentario completo de 30 días para un sueño óptimo",
      "Lista de ingredientes accesibles y fáciles de encontrar",
      "Consejos nutricionales para maximizar los beneficios de cada comida",
      "Recetas rápidas: de 10 a 25 minutos de preparación",
      "Entrega instantánea por email — empieza hoy",
    ],

    howTitle: "¿Cómo funciona?",
    howSubtitle: "Un proceso simple en 3 pasos para recuperar el sueño que mereces.",
    steps: [
      {
        title: "Pide tu ebook",
        description: "Pago seguro a través de Digistore24 (PayPal, tarjeta bancaria o Google Pay). Recibirás instantáneamente tu ebook PDF por email, listo para consultar en todos tus dispositivos.",
      },
      {
        title: "Sigue el plan de 30 días",
        description: "Comienza el plan alimentario estructurado de 4 semanas. Cada semana, se introducen nuevas recetas progresivamente. Las instrucciones son claras, los ingredientes accesibles y la preparación rápida.",
      },
      {
        title: "Recupera un sueño natural",
        description: "Desde los primeros días, sentirás los beneficios de una alimentación pensada para favorecer el sueño. En un mes, tu ciclo de descanso se regulará naturalmente, sin ningún producto químico.",
      },
    ],

    testimonialsBadge: "Testimonios verificados",
    testimonialsTitle: "Lo que dicen nuestros lectores",
    testimonialsSubtitle: "Personas como tú ya han transformado la calidad de su sueño gracias a nuestras recetas naturales.",
    testimonials: [
      {
        name: "Sophie M.",
        location: "París, Francia",
        text: "¡Desde que uso estas recetas, duermo como un bebé! Después de meses de insomnio y tratamientos médicos, por fin encontré una solución natural que realmente funciona. El plan de 30 días es fácil de seguir y los platos son deliciosos.",
      },
      {
        name: "Marc D.",
        location: "Bruselas, Bélgica",
        text: "Al principio era muy escéptico, pero los resultados superaron mis expectativas. En dos semanas, la calidad de mi sueño mejoró notablemente. Me despierto descansado y lleno de energía. Este libro vale cada céntimo invertido.",
      },
      {
        name: "Amina B.",
        location: "Casablanca, Marruecos",
        text: "Lo que me gustó es la simplicidad de las recetas. ¡No necesitas ser un chef para prepararlas! Los ingredientes son comunes y asequibles. Toda mi familia ahora disfruta de comidas que favorecen el sueño de todos.",
      },
      {
        name: "Jean-Luc R.",
        location: "Lyon, Francia",
        text: "Como trabajador nocturno, conseguir un sueño de calidad era un verdadero desafío. Este libro me ayudó a reorganizar mi alimentación de forma inteligente. Lo recomiendo encarecidamente a todos los que sufren trastornos del sueño.",
      },
    ],

    guaranteeTitle: "Garantía de reembolso de 60 días",
    guaranteeText1: "Estamos tan seguros de la eficacia de nuestro ebook que te ofrecemos una",
    guaranteeTextStrong: "garantía de devolución de 60 días, sin preguntas.",
    guaranteeText2: "Si por cualquier razón nuestra guía no cumple tus expectativas, simplemente contáctanos y te reembolsaremos íntegramente. Cero riesgo para ti, sin formularios complicados, sin justificación necesaria.",
    guaranteeBadge: "Compra 100% segura y sin riesgo",

    faqTitle: "Preguntas frecuentes",
    faqSubtitle: "¿Tienes preguntas? Tenemos las respuestas.",
    faqs: [
      {
        question: "¿Este libro es adecuado para personas con alergias alimentarias?",
        answer: "Sí, la mayoría de las recetas se pueden adaptar según tus alergias o intolerancias alimentarias. Cada receta ofrece alternativas para alérgenos comunes como el gluten, los lácteos o los frutos secos. Si tienes una condición médica específica, te recomendamos consultar a tu médico antes de empezar el programa.",
      },
      {
        question: "¿Cuánto tiempo se tarda en ver los primeros resultados?",
        answer: "La mayoría de nuestros lectores notan una mejora en los primeros 5 a 7 días. El plan alimentario de 30 días está diseñado para resultados graduales y duraderos. Las primeras semanas buscan regular tu ciclo de sueño, mientras que las semanas siguientes consolidan estos beneficios para un sueño de calidad a largo plazo.",
      },
      {
        question: "¿Son los ingredientes fáciles de encontrar y caros?",
        answer: "¡Por supuesto! Todas las recetas utilizan ingredientes que se encuentran fácilmente en cualquier supermercado o mercado local. Hemos evitado deliberadamente productos exóticos o costosos. El presupuesto semanal estimado para seguir el plan alimentario es comparable a tus compras habituales, sin costes adicionales significativos.",
      },
      {
        question: "¿Cómo recibo el ebook después de la compra?",
        answer: "Tu ebook se entrega instantáneamente por email tan pronto como se confirma tu pago en Digistore24. Recibirás un enlace de descarga seguro para el archivo PDF. El libro tiene 33 páginas y es legible en todos los dispositivos: ordenador, tablet y móvil. Puedes empezar a leer y aplicar los consejos inmediatamente.",
      },
      {
        question: "¿Cómo funciona la garantía de reembolso de 60 días?",
        answer: "Ofrecemos una garantía de devolución de 60 días, sin condiciones ni preguntas. Si por cualquier razón el libro no cumple tus expectativas, simplemente contáctanos a través de Digistore24 y te reembolsaremos íntegramente. Es nuestra forma de mostrar la confianza que tenemos en nuestro producto.",
      },
      {
        question: "¿Este libro sustituye un tratamiento médico?",
        answer: "No, este libro es una guía nutricional complementaria y no sustituye en ningún caso el consejo o tratamiento médico profesional. Si sufres trastornos del sueño graves o crónicos, te recomendamos encarecidamente consultar a un profesional de salud. Las recetas propuestas buscan favorecer un sueño natural a través de una alimentación sana y equilibrada.",
      },
    ],

    ctaTitle: "¿Listo/a para recuperar el sueño que mereces?",
    ctaDescription: "No dejes que una mala noche arruine tus días. Con nuestras 15 recetas 100% naturales y un plan alimentario de 30 días, transforma tus noches desde hoy.",
    ctaButton: "Sí, quiero dormir mejor ahora — 12,50 $",
    ctaGuarantee: "Garantía 60 días",
    ctaSecurePayment: "Pago seguro",
    ctaInstantDelivery: "Entrega instantánea",
    ctaPdfPages: "PDF — 33 páginas",

    footerText: "Este producto se vende a través de Digistore24, una plataforma de pago segura reconocida internacionalmente.",
    footerPayment: "Página de pago",
    footerCopyright: "© {year} — 15 Recetas Culinarias Naturales para un Mejor Sueño. Todos los derechos reservados.",
  },

  de: {
    metaTitle: "15 Natürliche Kochrezepte für Besseren Schlaf | Ebook",
    metaDescription: "Finden Sie tiefen, erholsamen Schlaf mit 15 vollständig natürlichen Rezepten. 30-Tage-Ernährungsplan inklusive. Sofortige Lieferung per E-Mail.",

    heroBadge: "Ebook — Sofortige Lieferung",
    heroTitle1: "15 Natürliche",
    heroTitleHighlight: "Kochrezepte",
    heroTitle2: "für Besseren Schlaf",
    heroDescription1: "Wälzen Sie sich nachts stundenlang im Bett hin und her? Wachen Sie jeden Morgen trotz Stunden Schlaf müde auf? Haben Sie genug von Schlafmitteln und ihren Nebenwirkungen?",
    heroDescriptionStrong: "Dieser Leitfaden ist für Sie.",
    heroCta: "Ebook erhalten — 12,50 $",
    heroGuarantee: "60-Tage Geld-zurück-Garantie",
    heroDelivery: "Lieferung per E-Mail",
    heroFormat: "PDF-Format — 33 Seiten",
    heroLanguage: "100% auf Französisch",
    coverAlt: "Titelbild — 15 Natürliche Kochrezepte für Besseren Schlaf",

    problemTitle: "Erkennen Sie sich in diesen Situationen wieder?",
    problems: [
      "Sie verbringen Stunden damit, sich im Bett hin und her zu wälzen, bevor Sie einschlafen",
      "Sie wachen mehrmals pro Nacht auf und finden nie tiefen Schlaf",
      "Sie sind von Schlaftabletten abhängig und fürchten deren Nebenwirkungen",
      "Sie fühlen sich morgens völlig erschöpft, als hätten Sie gar nicht geschlafen",
      "Ihr Schlafmangel beeinträchtigt Ihre Stimmung, Konzentration und Produktivität",
      "Sie haben viele Lösungen ausprobiert, ohne die Richtige zu finden",
    ],
    problemCta1: "Wenn Sie auf mindestens eine dieser Fragen mit Ja geantwortet haben,",
    problemCta2: "dann ist dieses Ebook genau das Richtige für Sie.",

    benefitsBadge: "Die Natürliche Lösung",
    benefitsTitle: "Warum dieses Buch Ihre Nächte verändern wird",
    benefitsSubtitle: "Entdecken Sie, wie Ernährung Ihr stärkster Verbündeter für qualitativ hochwertigen Schlaf werden kann — natürlich und nachhaltig.",
    benefits: [
      {
        title: "Tiefer, erholsamer Schlaf",
        description: "Dank sorgfältig ausgewählter Lebensmittel mit schlaffördernden Eigenschaften finden Sie zu ruhigen Nächten und wahrhaft erholsamem Schlaf. Jedes Rezept wurde entwickelt, um die natürliche Produktion von Melatonin und Serotonin zu optimieren.",
      },
      {
        title: "100% natürlich, ohne Chemie",
        description: "Sagen Sie Schlafmitteln und ihren Nebenwirkungen Auf Wiedersehen. Unsere Rezepte verwenden nur Zutaten aus der Natur: Obst, Gemüse, aromatische Kräuter und Gewürze mit beruhigenden Eigenschaften, die seit Generationen bekannt sind.",
      },
      {
        title: "Ergebnisse ab den ersten Tagen",
        description: "Ein strukturierter 30-Tage-Ernährungsplan führt Sie Schritt für Schritt. Ab der ersten Woche werden Sie eine spürbare Verbesserung Ihrer Schlafqualität feststellen. Die Rezepte sind einfach, schnell zubereitet und köstlich.",
      },
      {
        title: "Verbessertes allgemeines Wohlbefinden",
        description: "Guter Schlaf kommt nicht nur Ihren Nächten zugute. Wenn Sie einen natürlichen Ruherhythmus wiederherstellen, werden Sie eine Verbesserung Ihrer Energie, Konzentration, Stimmung und sogar Ihrer täglichen Verdauung feststellen.",
      },
    ],

    includedTitle: "Was Ihr Ebook enthält",
    includedSubtitle: "Ein vollständiger, strukturierter Leitfaden zur Umstellung Ihrer Ernährung und Wiedererlangung von erholsamem Schlaf in 30 Tagen.",
    includedCoverAlt: "Vorschau des Ebooks — 15 Natürliche Kochrezepte für Besseren Schlaf",
    included: [
      "15 detaillierte Kochrezepte mit Schritt-für-Schritt-Anleitung",
      "Ein vollständiger 30-Tage-Ernährungsplan für optimalen Schlaf",
      "Liste erschwinglicher, leicht verfügbarer Zutaten",
      "Ernährungstipps zur Maximierung der Vorteile jeder Mahlzeit",
      "Schnelle Rezepte: 10 bis 25 Minuten Zubereitungszeit",
      "Sofortige Lieferung per E-Mail — starten Sie noch heute",
    ],

    howTitle: "Wie funktioniert es?",
    howSubtitle: "Ein einfacher 3-Schritte-Prozess für den Schlaf, den Sie verdienen.",
    steps: [
      {
        title: "Bestellen Sie Ihr Ebook",
        description: "Sichere Bezahlung über Digistore24 (PayPal, Kreditkarte oder Google Pay). Sie erhalten sofort Ihr PDF-Ebook per E-Mail, bereit zum Ansehen auf allen Ihren Geräten.",
      },
      {
        title: "Folgen Sie dem 30-Tage-Plan",
        description: "Starten Sie den strukturierten Ernährungsplan über 4 Wochen. Jede Woche werden schrittweise neue Rezepte eingeführt. Die Anweisungen sind klar, die Zutaten zugänglich und die Zubereitung schnell.",
      },
      {
        title: "Finden Sie natürlichen Schlaf",
        description: "Ab den ersten Tagen werden Sie die Vorteile einer schlaffördernden Ernährung spüren. In einem Monat wird Ihr Ruhez Zyklus natürlich reguliert — ganz ohne Chemie.",
      },
    ],

    testimonialsBadge: "Verifizierte Erfahrungsberichte",
    testimonialsTitle: "Was unsere Leser sagen",
    testimonialsSubtitle: "Menschen wie Sie haben ihre Schlafqualität bereits mit unseren natürlichen Rezepten transformiert.",
    testimonials: [
      {
        name: "Sophie M.",
        location: "Paris, Frankreich",
        text: "Seit ich diese Rezepte verwende, schlafe ich wie ein Baby! Nach Monaten von Schlaflosigkeit und medikamentöser Behandlung habe ich endlich eine natürliche Lösung gefunden, die wirklich funktioniert. Der 30-Tage-Plan ist einfach zu befolgen und die Gerichte sind köstlich.",
      },
      {
        name: "Marc D.",
        location: "Brüssel, Belgien",
        text: "Ich war anfangs sehr skeptisch, aber die Ergebnisse haben meine Erwartungen übertroffen. Innerhalb von zwei Wochen hat sich meine Schlafqualität deutlich verbessert. Ich wache erholt und voller Energie auf. Dieses Buch ist jeden Cent wert.",
      },
      {
        name: "Amina B.",
        location: "Casablanca, Marokko",
        text: "Was mir gefallen hat, ist die Einfachheit der Rezepte. Man muss kein Koch sein, um sie zuzubereiten! Die Zutaten sind üblich und erschwinglich. Meine ganze Familie genießt jetzt Mahlzeiten, die den Schlaf aller fördern.",
      },
      {
        name: "Jean-Luc R.",
        location: "Lyon, Frankreich",
        text: "Als Schichtarbeiter war guter Schlaf eine echte Herausforderung. Dieses Buch hat mir geholfen, meine Ernährung intelligent neu zu organisieren. Ich empfehle es wärmstens allen, die unter Schlafstörungen leiden.",
      },
    ],

    guaranteeTitle: "60-Tage Geld-zurück-Garantie",
    guaranteeText1: "Wir sind so überzeugt von der Wirksamkeit unseres Ebooks, dass wir Ihnen eine",
    guaranteeTextStrong: "60-Tage Zufriedenheitsgarantie ohne Wenn und Aber anbieten.",
    guaranteeText2: "Wenn unser Leitfaden aus irgendeinem Grund nicht Ihren Erwartungen entspricht, kontaktieren Sie uns einfach und wir erstatten Ihnen den vollen Betrag. Null Risiko für Sie, keine komplizierten Formulare, keine Begründung erforderlich.",
    guaranteeBadge: "100% sicherer und risikofreier Kauf",

    faqTitle: "Häufig gestellte Fragen",
    faqSubtitle: "Haben Sie Fragen? Wir haben die Antworten.",
    faqs: [
      {
        question: "Ist dieses Buch für Personen mit Lebensmittelallergien geeignet?",
        answer: "Ja, die meisten Rezepte können an Ihre Allergien oder Nahrungsmittelunverträglichkeiten angepasst werden. Jedes Rezept bietet Alternativen für häufige Allergene wie Gluten, Milchprodukte oder Nüsse. Wenn Sie eine spezifische medizinische Erkrankung haben, empfehlen wir Ihnen, vor Beginn des Programms Ihren Arzt zu konsultieren.",
      },
      {
        question: "Wie lange dauert es, bis man die ersten Ergebnisse sieht?",
        answer: "Die meisten unserer Leser bemerken eine Verbesserung innerhalb der ersten 5 bis 7 Tage. Der 30-Tage-Ernährungsplan ist für schrittweise und dauerhafte Ergebnisse konzipiert. Die ersten Wochen zielen darauf ab, Ihren Schlafrhythmus zu regulieren, während die folgenden Wochen diese Vorteile für langfristig qualitativ hochwertigen Schlaf festigen.",
      },
      {
        question: "Sind die Zutaten leicht zu finden und teuer?",
        answer: "Absolut! Alle Rezepte verwenden Zutaten, die in jedem Supermarkt oder lokalen Markt leicht zu finden sind. Wir haben bewusst exotische oder teure Produkte vermieden. Das geschätzte wöchentliche Budget für den Ernährungsplan ist mit Ihren normalen Lebensmitteleinkäufen vergleichbar, ohne nennenswerte Mehrkosten.",
      },
      {
        question: "Wie erhalte ich das Ebook nach dem Kauf?",
        answer: "Ihr Ebook wird sofort per E-Mail geliefert, sobald Ihre Zahlung auf Digistore24 bestätigt ist. Sie erhalten einen sicheren Download-Link für die PDF-Datei. Das Buch hat 33 Seiten und ist auf allen Geräten lesbar: Computer, Tablet und Smartphone. Sie können sofort mit dem Lesen und Anwenden der Tipps beginnen.",
      },
      {
        question: "Wie funktioniert die 60-Tage Geld-zurück-Garantie?",
        answer: "Wir bieten eine 60-Tage Zufriedenheitsgarantie ohne Bedingungen und ohne Fragen. Wenn das Buch aus irgendeinem Grund nicht Ihren Erwartungen entspricht, kontaktieren Sie uns einfach über Digistore24 und wir erstatten Ihnen den vollen Betrag. So zeigen wir unser Vertrauen in unser Produkt.",
      },
      {
        question: "Ersetzt dieses Buch eine medizinische Behandlung?",
        answer: "Nein, dieses Buch ist ein ergänzender Ernährungsleitfaden und ersetzt in keinem Fall eine professionelle medizinische Beratung oder Behandlung. Wenn Sie unter schweren oder chronischen Schlafstörungen leiden, empfehlen wir Ihnen dringend, einen Arzt aufzusuchen. Die vorgeschlagenen Rezepte zielen darauf ab, natürlichen Schlaf durch eine gesunde, ausgewogene Ernährung zu fördern.",
      },
    ],

    ctaTitle: "Bereit, den Schlaf zu finden, den Sie verdienen?",
    ctaDescription: "Lassen Sie nicht zu, dass eine schlechte Nacht Ihren Tag ruiniert. Mit unseren 15 vollständig natürlichen Rezepten und einem 30-Tage-Ernährungsplan transformieren Sie Ihre Nächte ab heute.",
    ctaButton: "Ja, ich will jetzt besser schlafen — 12,50 $",
    ctaGuarantee: "60-Tage-Garantie",
    ctaSecurePayment: "Sichere Bezahlung",
    ctaInstantDelivery: "Sofortige Lieferung",
    ctaPdfPages: "PDF — 33 Seiten",

    footerText: "Dieses Produkt wird über Digistore24 verkauft, eine international anerkannte, sichere Zahlungsplattform.",
    footerPayment: "Zahlungsseite",
    footerCopyright: "© {year} — 15 Natürliche Kochrezepte für Besseren Schlaf. Alle Rechte vorbehalten.",
  },

  it: {
    metaTitle: "15 Ricette Culinarie Naturali per un Sonno Migliore | Ebook",
    metaDescription: "Ritrova un sonno profondo e ristoratore con 15 ricette 100% naturali. Piano alimentare di 30 giorni incluso. Consegna istantanea via email.",

    heroBadge: "Ebook — Consegna istantanea",
    heroTitle1: "15 Ricette Culinarie",
    heroTitleHighlight: "Naturali",
    heroTitle2: "per un Sonno Migliore",
    heroDescription1: "Passi le notti a rigirarti nel letto? Ti svegli stanco/a ogni mattina nonostante ore di sonno? Hai abbastanza dei sonniferi e dei loro effetti collaterali?",
    heroDescriptionStrong: "Questa guida è per te.",
    heroCta: "Ottieni l'Ebook — 12,50 $",
    heroGuarantee: "Garanzia di rimborso di 60 giorni",
    heroDelivery: "Consegna via email",
    heroFormat: "Formato PDF — 33 pagine",
    heroLanguage: "100% in francese",
    coverAlt: "Copertina — 15 Ricette Culinarie Naturali per un Sonno Migliore",

    problemTitle: "Ti riconosci in queste situazioni?",
    problems: [
      "Passi ore a rigirarti nel letto prima di trovare il sonno",
      "Ti svegli diverse volte a notte e non riesci mai a trovare un sonno profondo",
      "Sei dipendente dai sonniferi e ne temi gli effetti collaterali",
      "Ti senti esausto/a già dal mattino, come se non avessi dormito",
      "La mancanza di sonno influenza il tuo umore, la concentrazione e la produttività",
      "Hai provato molte soluzioni senza mai trovare quella che funziona davvero",
    ],
    problemCta1: "Se hai risposto sì ad almeno una di queste domande,",
    problemCta2: "allora questo ebook è esattamente ciò di cui hai bisogno.",

    benefitsBadge: "La Soluzione Naturale",
    benefitsTitle: "Perché questo libro cambierà le tue notti",
    benefitsSubtitle: "Scopri come l'alimentazione può diventare la tua alleata più potente per un sonno di qualità, in modo naturale e duraturo.",
    benefits: [
      {
        title: "Sonno profondo e ristoratore",
        description: "Grazie ad alimenti accuratamente selezionati per le loro proprietà che favoriscono il sonno, ritroverai notti serene e un riposo veramente rigenerante. Ogni ricetta è stata pensata per ottimizzare la produzione naturale di melatonina e serotonina.",
      },
      {
        title: "100% naturale, senza prodotti chimici",
        description: "Dì addio ai sonniferi e ai loro effetti collaterali. Le nostre ricette utilizzano solo ingredienti che si trovano in natura: frutta, verdura, erbe aromatiche e spezie dalle proprietà calming riconosciute da generazioni.",
      },
      {
        title: "Risultati già dai primi giorni",
        description: "Un piano alimentare strutturato di 30 giorni ti guida passo dopo passo. Dalla prima settimana, noterai un miglioramento significativo della qualità del tuo sonno. Le ricette sono semplici, veloci da preparare e deliziose.",
      },
      {
        title: "Benessere generale migliorato",
        description: "Un buon sonno non beneficia solo delle tue notti. Ripristinando un ritmo di riposo naturale, noterai un miglioramento della tua energia, concentrazione, umore e persino della digestione quotidiana.",
      },
    ],

    includedTitle: "Cosa contiene il tuo ebook",
    includedSubtitle: "Una guida completa e strutturata per trasformare la tua alimentazione e ritrovare un sonno ristoratore in 30 giorni.",
    includedCoverAlt: "Anteprima dell'ebook — 15 Ricette Culinarie Naturali per un Sonno Migliore",
    included: [
      "15 ricette culinarie dettagliate con istruzioni passo dopo passo",
      "Un piano alimentare completo di 30 giorni per un sonno ottimale",
      "Elenco di ingredienti accessibili e facili da trovare",
      "Consigli nutrizionali per massimizzare i benefici di ogni pasto",
      "Ricette veloci: da 10 a 25 minuti di preparazione",
      "Consegna istantanea via email — inizia oggi",
    ],

    howTitle: "Come funziona?",
    howSubtitle: "Un semplice processo in 3 passi per ritrovare il sonno che meriti.",
    steps: [
      {
        title: "Ordina il tuo ebook",
        description: "Pagamento sicuro tramite Digistore24 (PayPal, carta bancaria o Google Pay). Riceverai istantaneamente il tuo ebook PDF via email, pronto per essere consultato su tutti i tuoi dispositivi.",
      },
      {
        title: "Segui il piano di 30 giorni",
        description: "Inizia il piano alimentare strutturato su 4 settimane. Ogni settimana vengono introdotte progressivamente nuove ricette. Le istruzioni sono chiare, gli ingredienti accessibili e la preparazione veloce.",
      },
      {
        title: "Ritrova un sonno naturale",
        description: "Già dai primi giorni, sentirai i benefici di un'alimentazione pensata per favorire il sonno. In un mese, il tuo ciclo di riposo si regolerà naturalmente, senza alcun prodotto chimico.",
      },
    ],

    testimonialsBadge: "Testimonianze verificate",
    testimonialsTitle: "Cosa dicono i nostri lettori",
    testimonialsSubtitle: "Persone come te hanno già trasformato la qualità del loro sonno grazie alle nostre ricette naturali.",
    testimonials: [
      {
        name: "Sophie M.",
        location: "Parigi, Francia",
        text: "Da quando uso queste ricette, dormo come un bambino! Dopo mesi di insonnia e trattamenti medici, ho finalmente trovato una soluzione naturale che funziona davvero. Il piano di 30 giorni è facile da seguire e i piatti sono deliziosi.",
      },
      {
        name: "Marc D.",
        location: "Bruxelles, Belgio",
        text: "Ero molto scettico all'inizio, ma i risultati hanno superato le mie aspettative. In due settimane, la qualità del mio sonno è migliorata notevolmente. Mi sveglio riposato e pieno di energia. Questo libro vale ogni centesimo investito.",
      },
      {
        name: "Amina B.",
        location: "Casablanca, Marocco",
        text: "Ciò che mi è piaciuto è la semplicità delle ricette. Non serve essere uno chef per prepararle! Gli ingredienti sono comuni e accessibili. Ora tutta la mia famiglia gode di pasti che favoriscono il sonno di tutti.",
      },
      {
        name: "Jean-Luc R.",
        location: "Lione, Francia",
        text: "Come lavoratore notturno, ritrovare un sonno di qualità era una vera sfida. Questo libro mi ha aiutato a riorganizzare la mia alimentazione in modo intelligente. Lo consiglio vivamente a tutti quelli che soffrono di disturbi del sonno.",
      },
    ],

    guaranteeTitle: "Garanzia di rimborso di 60 giorni",
    guaranteeText1: "Siamo così sicuri dell'efficacia del nostro ebook che ti offriamo una",
    guaranteeTextStrong: "garanzia di soddisfazione di 60 giorni, senza domande.",
    guaranteeText2: "Se per qualsiasi motivo la nostra guida non soddisfa le tue aspettative, contattaci e ti rimborseremo integralmente. Nessun rischio per te, nessun modulo complicato, nessuna giustificazione richiesta.",
    guaranteeBadge: "Acquisto 100% sicuro e senza rischi",

    faqTitle: "Domande frequenti",
    faqSubtitle: "Hai domande? Abbiamo le risposte.",
    faqs: [
      {
        question: "Questo libro è adatto a persone con allergie alimentari?",
        answer: "Sì, la maggior parte delle ricette può essere adattata in base alle tue allergie o intolleranze alimentari. Ogni ricetta offre alternative per gli allergeni comuni come glutine, latticini o noci. Se hai una condizione medica specifica, ti consigliamo di consultare il tuo medico prima di iniziare il programma.",
      },
      {
        question: "Quanto tempo ci vuole per vedere i primi risultati?",
        answer: "La maggior parte dei nostri lettori nota un miglioramento già nei primi 5-7 giorni. Il piano alimentare di 30 giorni è progettato per risultati graduali e duraturi. Le prime settimane mirano a regolare il tuo ciclo del sonno, mentre le settimane successive consolidano questi benefici per un sonno di qualità a lungo termine.",
      },
      {
        question: "Gli ingredienti sono facili da trovare e costosi?",
        answer: "Assolutamente sì! Tutte le ricette utilizzano ingredienti che si trovano facilmente in qualsiasi supermercato o mercato locale. Abbiamo deliberatamente evitato prodotti esotici o costosi. Il budget settimanale stimato per seguire il piano alimentare è paragonabile ai tuoi acquisti alimentari abituali, senza costi aggiuntivi significativi.",
      },
      {
        question: "Come ricevo l'ebook dopo l'acquisto?",
        answer: "Il tuo ebook viene consegnato istantaneamente via email non appena il tuo pagamento viene confermato su Digistore24. Riceverai un link di download sicuro per il file PDF. Il libro contiene 33 pagine ed è leggibile su tutti i dispositivi: computer, tablet e smartphone. Puoi iniziare a leggere e applicare i consigli immediatamente.",
      },
      {
        question: "Come funziona la garanzia di rimborso di 60 giorni?",
        answer: "Offriamo una garanzia di soddisfazione di 60 giorni, senza condizioni e senza domande. Se per qualsiasi motivo il libro non soddisfa le tue aspettative, contattaci semplicemente tramite Digistore24 e ti rimborseremo integralmente. È il nostro modo di mostrare la fiducia che abbiamo nel nostro prodotto.",
      },
      {
        question: "Questo libro sostituisce un trattamento medico?",
        answer: "No, questo libro è una guida nutrizionale complementare e non sostituisce in alcun modo un parere o trattamento medico professionale. Se soffri di disturbi del sonno gravi o cronici, ti incoraggiamo vivamente a consultare un professionista della salute. Le ricette proposte mirano a favorire un sonno naturale attraverso un'alimentazione sana ed equilibrata.",
      },
    ],

    ctaTitle: "Pronto/a a ritrovare il sonno che meriti?",
    ctaDescription: "Non permettere a una brutta notte di rovinare le tue giornate. Con le nostre 15 ricette 100% naturali e un piano alimentare di 30 giorni, trasforma le tue notti a partire da oggi.",
    ctaButton: "Sì, voglio dormire meglio ora — 12,50 $",
    ctaGuarantee: "Garanzia 60 giorni",
    ctaSecurePayment: "Pagamento sicuro",
    ctaInstantDelivery: "Consegna istantanea",
    ctaPdfPages: "PDF — 33 pagine",

    footerText: "Questo prodotto viene venduto tramite Digistore24, una piattaforma di pagamento sicura riconosciuta a livello internazionale.",
    footerPayment: "Pagamento",
    footerCopyright: "© {year} — 15 Ricette Culinarie Naturali per un Sonno Migliore. Tutti i diritti riservati.",
  },

  pt: {
    metaTitle: "15 Receitas Culinárias Naturais para um Sono Melhor | Ebook",
    metaDescription: "Recupere um sono profundo e restaurador com 15 receitas 100% naturais. Plano alimentar de 30 dias incluído. Entrega instantânea por email.",

    heroBadge: "Ebook — Entrega instantânea",
    heroTitle1: "15 Receitas Culinárias",
    heroTitleHighlight: "Naturais",
    heroTitle2: "para um Sono Melhor",
    heroDescription1: "Passa as noites a virar-se na cama? Acorda cansado/a todas as manhãs apesar de horas de sono? Já tem enough dos soníferos e dos seus efeitos secundários?",
    heroDescriptionStrong: "Este guia é para si.",
    heroCta: "Obter o Ebook — 12,50 $",
    heroGuarantee: "Garantia de reembolso de 60 dias",
    heroDelivery: "Entrega por email",
    heroFormat: "Formato PDF — 33 páginas",
    heroLanguage: "100% em francês",
    coverAlt: "Capa — 15 Receitas Culinárias Naturais para um Sono Melhor",

    problemTitle: "Identifica-se com estas situações?",
    problems: [
      "Passa horas a virar-se na cama antes de conseguir adormecer",
      "Acorda várias vezes por noite e nunca consegue um sono profundo",
      "É dependente de soníferos e receia os seus efeitos secundários",
      "Sente-se exausto/a logo de manhã, como se não tivesse dormido",
      "A sua falta de sono afeta o humor, a concentração e a produtividade",
      "Já tentou muitas soluções sem encontrar a que realmente funciona",
    ],
    problemCta1: "Se respondeu sim a pelo menos uma destas perguntas,",
    problemCta2: "então este ebook é exatamente o que precisa.",

    benefitsBadge: "A Solução Natural",
    benefitsTitle: "Por que este livro vai transformar as suas noites",
    benefitsSubtitle: "Descubra como a alimentação pode tornar-se a sua aliada mais poderosa para um sono de qualidade, de forma natural e duradoura.",
    benefits: [
      {
        title: "Sono profundo e restaurador",
        description: "Graças a alimentos cuidadosamente selecionados pelas suas propriedades que favorecem o sono, vai recuperar noites tranquilas e um descanso verdadeiramente reparador. Cada receita foi concebida para otimizar a produção natural de melatonina e serotonina.",
      },
      {
        title: "100% natural, sem produtos químicos",
        description: "Diga adeus aos soníferos e aos seus efeitos secundários. As nossas receitas utilizam apenas ingredientes que se encontram na natureza: frutas, legumes, ervas aromáticas e especiarias com propriedades calmantes reconhecidas há gerações.",
      },
      {
        title: "Resultados desde os primeiros dias",
        description: "Um plano alimentar estruturado de 30 dias guia-o passo a passo. Desde a primeira semana, notará uma melhoria significativa na qualidade do seu sono. As receitas são simples, rápidas de preparar e deliciosas.",
      },
      {
        title: "Bem-estar geral melhorado",
        description: "Um bom sono não beneficia apenas as suas noites. Ao recuperar um ritmo de descanso natural, notará uma melhoria na sua energia, concentração, humor e até na sua digestão diária.",
      },
    ],

    includedTitle: "O que contém o seu ebook",
    includedSubtitle: "Um guia completo e estruturado para transformar a sua alimentação e recuperar um sono reparador em 30 dias.",
    includedCoverAlt: "Pré-visualização do ebook — 15 Receitas Culinárias Naturais para um Sono Melhor",
    included: [
      "15 receitas culinárias detalhadas com instruções passo a passo",
      "Um plano alimentar completo de 30 dias para um sono ótimo",
      "Lista de ingredientes acessíveis e fáceis de encontrar",
      "Conselhos nutricionais para maximizar os benefícios de cada refeição",
      "Receitas rápidas: de 10 a 25 minutos de preparação",
      "Entrega instantânea por email — comece hoje",
    ],

    howTitle: "Como funciona?",
    howSubtitle: "Um processo simples em 3 passos para recuperar o sono que merece.",
    steps: [
      {
        title: "Encomende o seu ebook",
        description: "Pagamento seguro através da Digistore24 (PayPal, cartão bancário ou Google Pay). Recebe instantaneamente o seu ebook PDF por email, pronto a consultar em todos os seus dispositivos.",
      },
      {
        title: "Siga o plano de 30 dias",
        description: "Comece o plano alimentar estruturado de 4 semanas. Cada semana, novas receitas são introduzidas progressivamente. As instruções são claras, os ingredientes acessíveis e a preparação rápida.",
      },
      {
        title: "Recupere um sono natural",
        description: "Desde os primeiros dias, sentirá os benefícios de uma alimentação pensada para favorecer o sono. Em um mês, o seu ciclo de descanso será regulado naturalmente, sem qualquer produto químico.",
      },
    ],

    testimonialsBadge: "Testemunhos verificados",
    testimonialsTitle: "O que os nossos leitores dizem",
    testimonialsSubtitle: "Pessoas como si já transformaram a qualidade do seu sono graças às nossas receitas naturais.",
    testimonials: [
      {
        name: "Sophie M.",
        location: "Paris, França",
        text: "Desde que uso estas receitas, durmo como um bebé! Após meses de insónia e tratamentos médicos, encontrei finalmente uma solução natural que realmente funciona. O plano de 30 dias é fácil de seguir e os pratos são deliciosos.",
      },
      {
        name: "Marc D.",
        location: "Bruxelas, Bélgica",
        text: "No início era muito cético, mas os resultados superaram as minhas expectativas. Em duas semanas, a qualidade do meu sono melhorou significativamente. Acordo descansado e cheio de energia. Este livro vale cada cêntimo investido.",
      },
      {
        name: "Amina B.",
        location: "Casablanca, Marrocos",
        text: "O que me agradou foi a simplicidade das receitas. Não precisa de ser um chef para as preparar! Os ingredientes são comuns e acessíveis. Toda a minha família desfruta agora de refeições que favorecem o sono de todos.",
      },
      {
        name: "Jean-Luc R.",
        location: "Lyon, França",
        text: "Como trabalhador noturno, recuperar um sono de qualidade era um verdadeiro desafio. Este livro ajudou-me a reorganizar a minha alimentação de forma inteligente. Recomendo vivamente a todos os que sofrem de distúrbios do sono.",
      },
    ],

    guaranteeTitle: "Garantia de reembolso de 60 dias",
    guaranteeText1: "Estamos tão confiantes na eficácia do nosso ebook que lhe oferecemos uma",
    guaranteeTextStrong: "garantia de satisfação de 60 dias, sem perguntas.",
    guaranteeText2: "Se por qualquer motivo o nosso guia não corresponder às suas expectativas, basta contactar-nos e reembolsaremos integralmente. Zero risco para si, sem formulários complicados, sem justificação necessária.",
    guaranteeBadge: "Compra 100% segura e sem risco",

    faqTitle: "Perguntas frequentes",
    faqSubtitle: "Tem perguntas? Temos as respostas.",
    faqs: [
      {
        question: "Este livro é adequado para pessoas com alergias alimentares?",
        answer: "Sim, a maioria das receitas pode ser adaptada de acordo com as suas alergias ou intolerâncias alimentares. Cada receita oferece alternativas para alergénios comuns como glúten, laticínios ou nozes. Se tem uma condição médica específica, recomendamos que consulte o seu médico antes de iniciar o programa.",
      },
      {
        question: "Quanto tempo demora para ver os primeiros resultados?",
        answer: "A maioria dos nossos leitores nota uma melhoria nos primeiros 5 a 7 dias. O plano alimentar de 30 dias foi concebido para resultados graduais e duradouros. As primeiras semanas visam regular o seu ciclo de sono, enquanto as semanas seguintes consolidam estes benefícios para um sono de qualidade a longo prazo.",
      },
      {
        question: "Os ingredientes são fáceis de encontrar e caros?",
        answer: "Com certeza! Todas as receitas utilizam ingredientes que se encontram facilmente em qualquer supermercado ou mercado local. Evitámos deliberadamente produtos exóticos ou dispendiosos. O orçamento semanal estimado para seguir o plano alimentar é comparável às suas compras habituais, sem custos adicionais significativos.",
      },
      {
        question: "Como recebo o ebook após a compra?",
        answer: "O seu ebook é entregue instantaneamente por email assim que o seu pagamento for confirmado na Digistore24. Receberá um link de download seguro para o ficheiro PDF. O livro tem 33 páginas e é legível em todos os dispositivos: computador, tablet e smartphone. Pode começar a ler e aplicar os conselhos imediatamente.",
      },
      {
        question: "Como funciona a garantia de reembolso de 60 dias?",
        answer: "Oferecemos uma garantia de satisfação de 60 dias, sem condições e sem perguntas. Se por qualquer motivo o livro não corresponder às suas expectativas, basta contactar-nos através da Digistore24 e reembolsaremos integralmente. É a nossa forma de mostrar a confiança que temos no nosso produto.",
      },
      {
        question: "Este livro substitui um tratamento médico?",
        answer: "Não, este livro é um guia nutricional complementar e não substitui de forma alguma um conselho ou tratamento médico profissional. Se sofre de distúrbios do sono graves ou crónicos, recomendamos vivamente que consulte um profissional de saúde. As receitas propostas visam favorecer um sono natural através de uma alimentação saudável e equilibrada.",
      },
    ],

    ctaTitle: "Pronto/a para recuperar o sono que merece?",
    ctaDescription: "Não deixe uma má noite estragar os seus dias. Com as nossas 15 receitas 100% naturais e um plano alimentar de 30 dias, transforme as suas noites a partir de hoje.",
    ctaButton: "Sim, quero dormir melhor agora — 12,50 $",
    ctaGuarantee: "Garantia 60 dias",
    ctaSecurePayment: "Pagamento seguro",
    ctaInstantDelivery: "Entrega instantânea",
    ctaPdfPages: "PDF — 33 páginas",

    footerText: "Este produto é vendido através da Digistore24, uma plataforma de pagamento segura reconhecida internacionalmente.",
    footerPayment: "Página de pagamento",
    footerCopyright: "© {year} — 15 Receitas Culinárias Naturais para um Sono Melhor. Todos os direitos reservados.",
  },
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations[DEFAULT_LOCALE];
}
