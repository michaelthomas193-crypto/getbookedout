export interface LocationData {
  slug: string;
  city: string;
  state: string;
  stateFull: string;
  blurb: string;
  suburbs: string[];
  industries: string[];
}

export const locations: LocationData[] = [
  {
    slug: "sydney",
    city: "Sydney",
    state: "NSW",
    stateFull: "New South Wales",
    blurb:
      "Sydney trades, clinics and service businesses lose thousands of dollars a month to missed calls. Get Booked Out is a 24/7 AI receptionist that picks up every Sydney enquiry — day, night, weekend, public holiday.",
    suburbs: ["Bondi", "Parramatta", "Manly", "Chatswood", "Newtown", "Cronulla", "Penrith", "Liverpool"],
    industries: ["Plumbers", "Electricians", "Painters", "Landscapers", "Handyman services", "Carpenters", "Concreters"],
  },
  {
    slug: "melbourne",
    city: "Melbourne",
    state: "VIC",
    stateFull: "Victoria",
    blurb:
      "From Brunswick cafés to Box Hill clinics to Cranbourne tradies, Melbourne service businesses run hard. Get Booked Out answers every call so you never lose a job to a competitor's voicemail.",
    suburbs: ["Richmond", "St Kilda", "Brunswick", "Footscray", "Box Hill", "Frankston", "Geelong", "Dandenong"],
    industries: ["Trades", "Salons & beauty", "Health & dental", "Real estate", "Automotive", "Cleaners"],
  },
  {
    slug: "brisbane",
    city: "Brisbane",
    state: "QLD",
    stateFull: "Queensland",
    blurb:
      "Brisbane and the Gold Coast are full of busy operators who can't always grab the phone. Get Booked Out is a 24/7 AI receptionist for Brisbane businesses — books jobs straight into your calendar while you work.",
    suburbs: ["Fortitude Valley", "South Brisbane", "Chermside", "Ipswich", "Logan", "Redcliffe", "Gold Coast", "Sunshine Coast"],
    industries: ["Trades", "Pool & spa", "Real estate", "Dental & medical", "Auto repair", "Cleaners"],
  },
  {
    slug: "perth",
    city: "Perth",
    state: "WA",
    stateFull: "Western Australia",
    blurb:
      "Perth service businesses can't afford to miss a call when the next customer is 40km away. Get Booked Out answers, qualifies and books every Perth enquiry — 24/7, in a natural Aussie voice.",
    suburbs: ["Fremantle", "Joondalup", "Subiaco", "Cottesloe", "Midland", "Rockingham", "Mandurah", "Armadale"],
    industries: ["Trades", "Mining services", "Salons", "Health & wellness", "Cleaners", "Automotive"],
  },
  {
    slug: "adelaide",
    city: "Adelaide",
    state: "SA",
    stateFull: "South Australia",
    blurb:
      "Adelaide tradies, clinics and small businesses get a 24/7 AI receptionist that never misses a call, never sleeps and never costs you a job to a competitor.",
    suburbs: ["Glenelg", "Norwood", "Prospect", "Port Adelaide", "Marion", "Modbury", "Salisbury", "Mount Barker"],
    industries: ["Trades", "Health clinics", "Salons", "Real estate", "Automotive", "Cleaners"],
  },
];
