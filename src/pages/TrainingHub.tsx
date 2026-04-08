import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Rocket,
  Users,
  MessageSquare,
  FileText,
  Zap,
  CalendarDays,
  Kanban,
  Mail,
  MessageCircle,
  Share2,
  Star,
  CreditCard,
  FileSignature,
  BarChart3,
  UserPlus,
  Plug,
  Code,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  ClipboardList,
  Layout,
  Settings,
  Globe,
  MapPin,
} from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const STORAGE_KEY = "ghl-training-checklist";

// --- DATA ---

const checklistDays = [
  {
    day: 1,
    title: "Getting Started (Module 1)",
    tasks: ["Log in to your account", "Explore the dashboard", "Open each main menu and get familiar with the layout"],
  },
  {
    day: 2,
    title: "Contacts (Module 2)",
    tasks: ["Add 3 contacts manually", "Add a tag to a contact", "Review a contact's detail page"],
  },
  {
    day: 3,
    title: "Conversations (Module 3)",
    tasks: ["Send a test SMS to yourself", "Reply to a message in the inbox"],
  },
  {
    day: 4,
    title: "Funnels & Forms (Module 4)",
    tasks: ["Open your funnel and review the page", "Submit a test lead through the form", "Check the lead appeared in Contacts"],
  },
  {
    day: 5,
    title: "Automation & Calendar (Modules 5 & 6)",
    tasks: ["Trigger an automation and confirm SMS/email was sent", "Book a test appointment via your booking link", "Check the appointment confirmation"],
  },
  {
    day: 6,
    title: "Pipeline & Reputation (Modules 7 & 9)",
    tasks: ["Move a lead through pipeline stages", "Send a test review request", "Check your reviews dashboard"],
  },
  {
    day: 7,
    title: "Integrations & Review (Module 8)",
    tasks: ["Connect Google or another integration", "Verify your calendar is syncing", "Review your full system end-to-end"],
  },
];

const coreModules = [
  {
    title: "Module 1: Getting Started",
    icon: Rocket,
    content: {
      what: "Your command centre for everything. The dashboard gives you a snapshot of your leads, appointments, and tasks so you always know what needs attention first.",
      lessons: ["Welcome to your system", "Dashboard overview — where everything lives"],
      steps: null,
      benefits: null,
    },
  },
  {
    title: "Module 2: Contacts",
    icon: Users,
    content: {
      what: "Your customer database — every lead, past client, and new enquiry lives here. Think of it as your digital Rolodex that never loses a number and lets you follow up with anyone in seconds.",
      lessons: null,
      steps: ["Go to Contacts", "Click Add Contact", "Enter details", "Save"],
      benefits: ["Keeps customers organised", "Easy follow-ups"],
    },
  },
  {
    title: "Module 3: Conversations",
    icon: MessageSquare,
    content: {
      what: "Your all-in-one inbox for SMS, email, and calls — all in one place. No more switching between apps or missing messages. Every customer conversation is tracked so nothing falls through the cracks.",
      lessons: null,
      steps: ["Go to Conversations", "Select contact", "Send message"],
      benefits: ["Faster replies", "No missed messages"],
    },
  },
  {
    title: "Module 4: Funnels & Forms",
    icon: FileText,
    content: {
      what: "Landing pages and forms that capture leads automatically. When someone fills out your form, their details go straight into your system — no manual data entry, no missed leads, working for you 24/7.",
      lessons: null,
      steps: ["Go to Sites → Funnels", "Open funnel", "Check form"],
      benefits: ["Captures leads automatically", "Works 24/7"],
    },
  },
  {
    title: "Module 5: Automation",
    icon: Zap,
    content: {
      what: "Your automatic follow-up system that works while you sleep. When a new lead comes in, automation can instantly send an SMS, email, or even book them in — so you never lose a job because you were too slow to reply.",
      lessons: null,
      steps: ["Go to Automation → Workflows", "Open workflow", "Review trigger & actions"],
      benefits: ["Instant responses", "Saves time"],
    },
  },
  {
    title: "Module 6: Calendar",
    icon: CalendarDays,
    content: {
      what: "Your online booking system that lets customers schedule appointments directly. Share your booking link and let clients pick a time that works — no more back-and-forth phone calls or double bookings.",
      lessons: null,
      steps: ["Go to Calendar", "Open calendar", "Share booking link"],
      benefits: ["Easy scheduling", "Fewer missed bookings"],
    },
  },
  {
    title: "Module 7: Pipeline",
    icon: Kanban,
    content: {
      what: "A visual board that tracks every job from enquiry to completion. Drag and drop leads through stages so you can see exactly where every job is at and what needs doing next — like a whiteboard, but smarter.",
      lessons: null,
      steps: ["Go to Opportunities", "Move jobs between stages"],
      benefits: ["See all jobs at a glance", "Stay organised"],
    },
  },
  {
    title: "Module 8: Integrations",
    icon: Plug,
    content: {
      what: "Connect your favourite tools like Google, Facebook, Stripe, and more directly into your system. This means your calendars sync, your contacts stay updated, and you can manage payments — all without leaving the platform.",
      lessons: null,
      steps: [
        "Go to Settings → Integrations",
        "Find the app you want to connect (Google, Facebook, Stripe, etc.)",
        "Click Connect and sign in with your account",
        "Allow the requested permissions",
        "Once connected, your data will sync automatically",
      ],
      benefits: ["Sync calendars and contacts", "Manage everything from one place", "Connect payment and social tools"],
      subsections: [
        {
          title: "Google Integration",
          where: "Settings → Integrations → Google",
          steps: [
            "Click Connect next to Google",
            "Sign in with your Google account",
            "Allow permissions for Calendar & Contacts",
            "Choose which calendars to sync",
          ],
          benefits: ["Two-way calendar sync", "Import Google contacts", "Google sign-in for your team"],
        },
        {
          title: "Google Business Profile",
          where: "Settings → Integrations → Google Business Profile",
          steps: [
            "Click Connect next to Google Business Profile (or Google My Business)",
            "Sign in with the Google account linked to your business listing",
            "Select your business location from the list",
            "Once connected, manage reviews from Reputation → Reviews",
            "Post updates via Marketing → Social Planner",
          ],
          benefits: ["Manage Google reviews from your dashboard", "Post updates directly to your listing", "Track customer engagement"],
        },
      ],
    },
  },
  {
    title: "Module 9: Reputation Management (Reviews)",
    icon: Star,
    content: {
      what: "Your review headquarters — request, track, and respond to Google reviews without ever leaving the platform. More 5-star reviews means more trust, higher Google rankings, and more customers choosing you over the competition.",
      lessons: null,
      steps: [
        "Go to Reputation → Reviews",
        "View all your Google reviews in one dashboard",
        "Reply to reviews directly from the platform",
        "Go to Reputation → Requests to send review requests",
        "Send via SMS or email with your review link",
        "Track your overall rating and review count",
      ],
      benefits: ["Build trust with new customers", "Get more 5-star reviews", "Respond to reviews fast", "Boost your Google ranking"],
    },
  },
];

const advancedModules = [
  {
    title: "Email Marketing",
    icon: Mail,
    what: "Send professional emails to your customer list to stay top of mind. Great for promoting seasonal offers, sharing updates, or re-engaging past customers who haven't booked in a while.",
    steps: ["Go to Marketing → Emails", "Create template", "Send campaign"],
    benefits: ["Stay in touch", "Promote services"],
  },
  {
    title: "SMS Templates (Snippets)",
    icon: MessageCircle,
    what: "Pre-written text messages you can reuse with one click. Perfect for common replies like booking confirmations, follow-ups, or quote reminders — so you're not typing the same thing over and over.",
    steps: ["Go to Marketing → Snippets", "Create message", "Save"],
    benefits: ["Saves time", "Consistent replies"],
  },
  {
    title: "Social Planner",
    icon: Share2,
    what: "Schedule and publish posts to Facebook, Instagram, and Google Business Profile from one place. Plan your content ahead of time so your socials stay active even when you're busy on the tools.",
    steps: ["Go to Social Planner", "Create post", "Schedule"],
    benefits: ["Consistent social presence", "Save time batch-creating posts"],
  },
  {
    title: "Payments",
    icon: CreditCard,
    what: "Collect payments directly from your customers via payment links. Connect Stripe and send a link via SMS or email — no chasing invoices or awkward money conversations.",
    steps: ["Connect Stripe", "Create payment link", "Send to customer"],
    benefits: ["Get paid faster", "No more chasing invoices"],
  },
  {
    title: "Documents & Contracts",
    icon: FileSignature,
    what: "Create and send quotes, proposals, or agreements that customers can sign digitally. No more printing, scanning, or lost paperwork — everything is tracked and stored in one place.",
    steps: ["Create document", "Send to contact"],
    benefits: ["Professional proposals", "Digital signatures"],
  },
  {
    title: "Reporting",
    icon: BarChart3,
    what: "See how your business is performing at a glance — track leads, conversions, revenue, and more. Use these insights to understand what's working and where you can improve.",
    steps: ["Go to Reporting", "View stats"],
    benefits: ["Data-driven decisions", "Track growth over time"],
  },
  {
    title: "Users & Team",
    icon: UserPlus,
    what: "Add your team members so they can access the system too. Set permissions so everyone sees what they need — great for admin staff, apprentices, or business partners.",
    steps: ["Go to Settings → Staff", "Add user"],
    benefits: ["Team collaboration", "Role-based access"],
  },
  {
    title: "Custom Values (Personalisation)",
    icon: Code,
    what: "Auto-fill customer details like names and appointment times into your messages. This makes every SMS and email feel personal without you having to type it out each time.",
    steps: null,
    examples: ["{{contact.first_name}}", "{{appointment.start_time}}"],
    benefits: ["Personal messages", "Saves time"],
  },
];

const flowSteps = [
  "Lead submits form",
  "Automation sends message",
  "You reply in Conversations",
  "Customer books",
  "Job tracked in Pipeline",
];

const dailyTasks = [
  "Check Conversations",
  "Update Pipeline",
  "Review Calendar",
  "Follow up leads",
];

// --- COMPONENT ---

const TrainingHub = () => {
  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
  }, [checked]);

  const toggleCheck = (key: string) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allChecklistKeys = checklistDays.flatMap((d) =>
    d.tasks.map((_, i) => `day${d.day}-${i}`)
  );
  const completedCount = allChecklistKeys.filter((k) => checked[k]).length;
  const progressPercent = Math.round((completedCount / allChecklistKeys.length) * 100);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-primary/5 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Client Training
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            GoHighLevel Training Hub
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Your step-by-step guide to managing leads, conversations, bookings, and jobs using your system.
          </p>

          {/* Progress */}
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="font-medium text-foreground">Your Setup Progress</span>
              <span className="text-primary font-semibold">{progressPercent}%</span>
            </div>
            <Progress value={progressPercent} className="h-3" />
            <p className="text-xs text-muted-foreground mt-2">
              {completedCount} of {allChecklistKeys.length} tasks completed
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        {/* How to use */}
        <Card className="border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <Layout className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <h2 className="text-xl font-semibold text-foreground">How to Use This Training</h2>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />Start from Module 1 if you're new</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />Complete 1–2 modules per day</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />Use this as your reference anytime</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />Follow the 7-Day Checklist below</li>
            </ul>
          </CardContent>
        </Card>

        {/* 7-Day Checklist */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <ClipboardList className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">7-Day Onboarding Checklist</h2>
          </div>

          <Accordion type="multiple" defaultValue={["checklist-0"]} className="space-y-3">
            {checklistDays.map((day, dayIdx) => {
              const dayKeys = day.tasks.map((_, i) => `day${day.day}-${i}`);
              const dayDone = dayKeys.every((k) => checked[k]);
              return (
                <AccordionItem
                  key={dayIdx}
                  value={`checklist-${dayIdx}`}
                  className={`rounded-xl border px-4 md:px-6 transition-all ${
                    dayDone
                      ? "border-primary/40 bg-primary/5"
                      : "border-border bg-card"
                  }`}
                >
                  <AccordionTrigger className="py-4 md:py-5 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                          dayDone
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {dayDone ? "✓" : day.day}
                      </span>
                      <div className="text-left">
                        <span className="font-semibold text-foreground">Day {day.day}: {day.title}</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="space-y-3 pl-11">
                      {day.tasks.map((task, taskIdx) => {
                        const key = `day${day.day}-${taskIdx}`;
                        return (
                          <label
                            key={taskIdx}
                            className="flex items-center gap-3 cursor-pointer group"
                          >
                            <Checkbox
                              checked={!!checked[key]}
                              onCheckedChange={() => toggleCheck(key)}
                            />
                            <span
                              className={`text-sm transition-all ${
                                checked[key]
                                  ? "line-through text-muted-foreground"
                                  : "text-foreground group-hover:text-primary"
                              }`}
                            >
                              {task}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </section>

        {/* Core Modules */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Core Training Modules</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {coreModules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <AccordionItem
                  key={idx}
                  value={`core-${idx}`}
                  className="rounded-xl border border-border bg-card px-4 md:px-6 data-[state=open]:border-primary/50 transition-all"
                >
                  <AccordionTrigger className="py-4 md:py-5 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-semibold text-foreground text-left">{mod.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="pl-12 space-y-4">
                      {mod.content.what && (
                        <p className="text-muted-foreground font-medium">{mod.content.what}</p>
                      )}
                      {mod.content.lessons && (
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-2">Lessons:</p>
                          <ul className="space-y-1.5">
                            {mod.content.lessons.map((l, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                {l}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {mod.content.steps && (
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-2">Steps:</p>
                          <ol className="space-y-1.5">
                            {mod.content.steps.map((s, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center shrink-0 mt-0.5 font-semibold">{i + 1}</span>
                                {s}
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                      {mod.content.benefits && (
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-2">Benefits:</p>
                          <ul className="space-y-1.5">
                            {mod.content.benefits.map((b, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Star className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {"subsections" in mod.content && (mod.content as any).subsections?.map((sub: any, si: number) => (
                        <div key={si} className="bg-muted/30 rounded-lg p-4 border border-border space-y-3">
                          <p className="font-semibold text-foreground">{sub.title}</p>
                          {sub.where && (
                            <div className="bg-background rounded-md p-2 border border-border">
                              <p className="text-xs font-semibold text-muted-foreground">📍 Where to find it:</p>
                              <p className="text-sm font-mono text-foreground">{sub.where}</p>
                            </div>
                          )}
                          {sub.steps && (
                            <ol className="space-y-1.5">
                              {sub.steps.map((s: string, i: number) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center shrink-0 mt-0.5 font-semibold">{i + 1}</span>
                                  {s}
                                </li>
                              ))}
                            </ol>
                          )}
                          {sub.benefits && (
                            <ul className="space-y-1.5">
                              {sub.benefits.map((b: string, i: number) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <Star className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                                  {b}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </section>

        {/* Advanced Features */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Settings className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Additional Tools</h2>
            <span className="text-sm text-muted-foreground">(Use When Needed)</span>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {advancedModules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <AccordionItem
                  key={idx}
                  value={`adv-${idx}`}
                  className="rounded-xl border border-border bg-card px-4 md:px-6 data-[state=open]:border-primary/50 transition-all"
                >
                  <AccordionTrigger className="py-4 md:py-5 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <span className="font-semibold text-foreground text-left">{mod.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="pl-12 space-y-4">
                      <p className="text-muted-foreground font-medium">{mod.what}</p>
                      {mod.steps && (
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-2">Steps:</p>
                          <ol className="space-y-1.5">
                            {mod.steps.map((s, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center shrink-0 mt-0.5 font-semibold">{i + 1}</span>
                                {s}
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                      {"examples" in mod && mod.examples && (
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-2">Examples:</p>
                          <div className="flex flex-wrap gap-2">
                            {(mod as any).examples.map((ex: string, i: number) => (
                              <code key={i} className="bg-muted px-2 py-1 rounded text-xs font-mono text-foreground">{ex}</code>
                            ))}
                          </div>
                        </div>
                      )}
                      {"where" in mod && mod.where && (
                        <div className="bg-muted/50 rounded-lg p-3 border border-border">
                          <p className="text-sm font-semibold text-foreground mb-1">📍 Where to find it:</p>
                          <p className="text-sm text-muted-foreground font-mono">{(mod as any).where}</p>
                        </div>
                      )}
                      {mod.benefits && (
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-2">Benefits:</p>
                          <ul className="space-y-1.5">
                            {mod.benefits.map((b, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Star className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </section>

        {/* System Flow */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Zap className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">How Your System Works</h2>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-0">
                {flowSteps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3 md:gap-0 flex-1">
                    <div className="flex items-center gap-3 flex-1">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-sm font-medium text-foreground">{step}</span>
                    </div>
                    {idx < flowSteps.length - 1 && (
                      <ArrowRight className="w-5 h-5 text-primary hidden md:block mx-2 shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Daily Usage */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <ClipboardList className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Daily Usage Guide</h2>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dailyTasks.map((task, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                    <Checkbox
                      checked={!!checked[`daily-${idx}`]}
                      onCheckedChange={() => toggleCheck(`daily-${idx}`)}
                    />
                    <span
                      className={`text-sm transition-all ${
                        checked[`daily-${idx}`]
                          ? "line-through text-muted-foreground"
                          : "text-foreground group-hover:text-primary"
                      }`}
                    >
                      {task}
                    </span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final Notes */}
        <section className="pb-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Final Notes</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                  Keep everything simple
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                  Focus on responding fast
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                  Use automation to save time
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default TrainingHub;
