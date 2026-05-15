export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  readMinutes: number;
  excerpt: string;
  /** Each section is rendered as <h2>{heading}</h2> followed by paragraphs. */
  sections: { heading: string; paragraphs: string[] }[];
}

export const posts: Post[] = [
  {
    slug: "missed-call-cost-australian-business",
    title: "How Much a Missed Call Actually Costs Your Australian Business",
    description:
      "We crunched the numbers on missed-call leakage for Australian service businesses — here's what every unanswered call is really costing you.",
    date: "2025-04-12",
    readMinutes: 6,
    excerpt:
      "If you run a service business in Australia and you miss even two calls a day, you're almost certainly losing more in jobs than a 24/7 AI receptionist would cost you for the entire year.",
    sections: [
      {
        heading: "The hidden tax on every Aussie service business",
        paragraphs: [
          "If your phone rings and nobody answers, that customer doesn't leave a voicemail and try again later. They scroll back to Google and call the next business on the list. BIA Kelsey research puts the call-back rate on missed business calls at around 15% — meaning 85 out of every 100 missed calls are gone for good.",
          "For an Australian plumber, electrician, sparky, painter, salon, dentist, real estate agent or auto shop, that's not a rounding error. That's the difference between a great month and a flat one.",
        ],
      },
      {
        heading: "Doing the maths on a single missed call",
        paragraphs: [
          "Take a typical Sydney plumber. Average job value $480. Conversion rate from a phone enquiry: roughly 60%. That's $288 of expected revenue per inbound call.",
          "Miss two calls a day, five days a week — that's 10 lost calls. At 85% never-call-back, you've lost about $2,448 of expected revenue every week. Across the year that's $127,000 you never even knew was on the table.",
          "Even at half that, the answer is the same: any system that picks up the phone pays for itself almost immediately.",
        ],
      },
      {
        heading: "Why traditional answering services don't fix it",
        paragraphs: [
          "Call centres charge per call or per minute, transfer hot leads while the customer's still mid-sentence, and have no idea what jobs you actually do. Voicemail is worse — most people will not leave a message.",
          "A 24/7 AI receptionist like Get Booked Out is different: it knows your services, prices, suburbs and calendar, books the job in real time, and texts you the summary. No transfers, no hold music, no missed enquiries.",
        ],
      },
      {
        heading: "The fix takes 48 hours",
        paragraphs: [
          "Forwarding your unanswered calls takes about 30 seconds with your telco. Onboarding the AI takes one short call. After that you stop losing jobs to the next plumber, electrician or salon on Google.",
        ],
      },
    ],
  },
  {
    slug: "ai-receptionist-vs-call-centre",
    title: "AI Receptionist vs Call Centre: Which Is Better for a Small Business?",
    description:
      "Side-by-side breakdown of AI receptionists vs traditional call centres for Australian small businesses — cost, accuracy, speed and customer experience.",
    date: "2025-04-22",
    readMinutes: 7,
    excerpt:
      "Call centres made sense in 2010. In 2026, an AI receptionist answers faster, books straight into your calendar, costs a fraction of the price, and never has a bad day.",
    sections: [
      {
        heading: "What a call centre actually does for a small business",
        paragraphs: [
          "Most outsourced call centres in Australia work the same way: a shared pool of operators picks up your overflow calls using a generic script, takes a message and either transfers the call or emails you the lead.",
          "That model has three problems for a small business: per-minute pricing punishes you for popularity, the operator usually doesn't know your trade, and the customer can tell straight away they're talking to a stranger reading from a screen.",
        ],
      },
      {
        heading: "What an AI receptionist does differently",
        paragraphs: [
          "A modern AI receptionist (the kind we built Get Booked Out to be) is trained on your website, your prices, your service area and your calendar. It answers in a natural Aussie voice, qualifies the job, books straight into Google Calendar or your CRM, filters spam, and sends you a transcript and recording.",
          "It never has a bad day, never goes on a smoke break, never puts a customer on hold and never costs more when you get more calls.",
        ],
      },
      {
        heading: "Cost: per-minute vs flat rate",
        paragraphs: [
          "Australian call centres typically charge $1.50–$3.00 per minute, with monthly minimums on top. A busy week of phone enquiries can rack up $1,500+ very quickly.",
          "A flat-rate AI receptionist (Get Booked Out plans start at $99/week) doesn't get more expensive when you get more leads. The more you grow, the better the value gets.",
        ],
      },
      {
        heading: "When a human still wins",
        paragraphs: [
          "AI is not the answer for highly emotional calls — bereavement services, crisis lines, complex legal triage. For everything else (trades, salons, clinics, real estate, automotive, hospitality, professional services), AI now matches or beats a call centre on every measurable axis.",
        ],
      },
    ],
  },
  {
    slug: "google-reviews-for-tradies",
    title: "How to Get More Google Reviews as a Tradie (Without Being Awkward)",
    description:
      "A simple, no-pressure system Australian tradies use to triple their Google reviews — without ever asking face-to-face.",
    date: "2025-05-02",
    readMinutes: 5,
    excerpt:
      "Most tradies do brilliant work and have terrible Google reviews. Not because customers aren't happy — because nobody's asking. Here's the simple automated system that fixes it.",
    sections: [
      {
        heading: "Why your reviews don't reflect your work",
        paragraphs: [
          "Happy customers forget. Unhappy customers don't. That's why the average Aussie tradie has a Google profile that doesn't look anything like their actual workmanship.",
          "The fix isn't asking harder face-to-face. It's automating a friendly text the moment the job's done.",
        ],
      },
      {
        heading: "The 5-star gating trick (the legal one)",
        paragraphs: [
          "Send every customer a one-tap rating link after the job. If they tap five stars, they go straight to your Google review page. If they tap four or below, they go to a private feedback form so you can fix it before it ever hits Google.",
          "This is allowed under Google's policies as long as you ask every customer the same question and don't filter based on identity. It's the same approach Get Booked Out builds in for every customer at /rate-us.",
        ],
      },
      {
        heading: "When to ask",
        paragraphs: [
          "Within two hours of the job being marked complete. Wait until tomorrow and your conversion rate falls off a cliff.",
          "Send by SMS, not email — open rates on tradie review SMS sit around 95% versus 20% for email.",
        ],
      },
      {
        heading: "Doing it without lifting a finger",
        paragraphs: [
          "Get Booked Out fires the review request automatically the second a job is marked done in your calendar or CRM. Most customers see it before they've even washed their hands. That's how you go from 12 reviews to 120 in a year without ever feeling pushy.",
        ],
      },
    ],
  },
];
