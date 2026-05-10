import type { NavLink, Feature, Testimonial, PricingTier, FAQItem } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const features: Feature[] = [
  {
    icon: "Brain",
    title: "AI Insights",
    description:
      "Get intelligent forecasts and anomaly detection powered by machine learning.",
  },
  {
    icon: "RefreshCw",
    title: "Real-time Sync",
    description:
      "All your accounts, cards, and wallets in one live dashboard.",
  },
  {
    icon: "Users",
    title: "Team Collaboration",
    description:
      "Shared workspaces with role-based access and audit trails.",
  },
  {
    icon: "BarChart3",
    title: "Smart Reports",
    description:
      "Generate investor-ready reports in one click.",
  },
  {
    icon: "Shield",
    title: "Bank-grade Security",
    description:
      "256-bit encryption, SOC 2 compliant, MFA enabled.",
  },
  {
    icon: "Plug",
    title: "API & Integrations",
    description:
      "Connect with Stripe, QuickBooks, Plaid, and 200+ tools.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "CFO",
    company: "Meridian Labs",
    quote:
      "FinSync transformed how we track expenses across departments. The AI insights caught a billing anomaly that saved us $24k last quarter.",
    initials: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Finance",
    company: "Stackwise",
    quote:
      "We went from spending 3 hours on monthly reports to 10 minutes. The dashboard is genuinely the best financial tool we've ever used.",
    initials: "MR",
  },
  {
    name: "Emily Nakamura",
    role: "CEO",
    company: "Aether Systems",
    quote:
      "The real-time sync with our banking APIs is flawless. Our investors love the reports and we finally have full visibility into our burn rate.",
    initials: "EN",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small teams getting started.",
    features: [
      "Up to 5 team members",
      "Basic analytics dashboard",
      "Monthly reports",
      "Email support",
      "2 bank connections",
      "Export to CSV",
    ],
    highlighted: false,
    cta: "Start Free Trial",
  },
  {
    name: "Pro",
    price: "$79",
    period: "/month",
    description: "For growing teams that need more power.",
    features: [
      "Up to 25 team members",
      "Advanced AI insights",
      "Real-time dashboards",
      "Priority support",
      "Unlimited bank connections",
      "Custom reports",
      "API access",
      "Team collaboration tools",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with advanced needs.",
    features: [
      "Unlimited team members",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "SSO & SAML",
      "Advanced security controls",
      "On-premise deployment option",
      "24/7 phone support",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "How does the free trial work?",
    answer:
      "You get full access to your chosen plan for 14 days. No credit card required. At the end of your trial, you can upgrade to a paid plan or your account will be downgraded to our free tier.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Absolutely. We use 256-bit AES encryption, are SOC 2 Type II certified, and never store your banking credentials. All connections use read-only access through Plaid's secure infrastructure.",
  },
  {
    question: "Can I connect multiple bank accounts?",
    answer:
      "Yes. Starter plans support up to 2 bank connections, while Pro and Enterprise plans support unlimited connections including credit cards, investment accounts, and crypto wallets.",
  },
  {
    question: "How does the AI insights feature work?",
    answer:
      "Our machine learning models analyze your transaction patterns to detect anomalies, forecast cash flow, and identify cost-saving opportunities. The models improve over time as they learn your business patterns.",
  },
  {
    question: "Can I export my data?",
    answer:
      "Yes. All plans support CSV exports. Pro and Enterprise plans also support PDF reports, Excel exports, and direct integrations with accounting software like QuickBooks and Xero.",
  },
  {
    question: "What happens if I cancel my subscription?",
    answer:
      "You can cancel anytime. Your data remains accessible in read-only mode for 30 days after cancellation. You can export all your data during this period.",
  },
];

// Dashboard mock data
export const revenueData = [
  { month: "Jan", revenue: 18500 },
  { month: "Feb", revenue: 22300 },
  { month: "Mar", revenue: 19800 },
  { month: "Apr", revenue: 27400 },
  { month: "May", revenue: 31200 },
  { month: "Jun", revenue: 28900 },
  { month: "Jul", revenue: 34100 },
  { month: "Aug", revenue: 32800 },
  { month: "Sep", revenue: 38200 },
  { month: "Oct", revenue: 35600 },
  { month: "Nov", revenue: 41200 },
  { month: "Dec", revenue: 48239 },
];

export const comparisonData = [
  { month: "Jul", thisYear: 34100, lastYear: 24500 },
  { month: "Aug", thisYear: 32800, lastYear: 26200 },
  { month: "Sep", thisYear: 38200, lastYear: 28900 },
  { month: "Oct", thisYear: 35600, lastYear: 30100 },
  { month: "Nov", thisYear: 41200, lastYear: 32400 },
  { month: "Dec", thisYear: 48239, lastYear: 35800 },
];

export const spendingData = [
  { name: "Operations", value: 35, color: "#818cf8" },
  { name: "Marketing", value: 25, color: "#6366f1" },
  { name: "Payroll", value: 28, color: "#4f46e5" },
  { name: "Software", value: 12, color: "#a78bfa" },
];

export const transactions = [
  { name: "Stripe Payment", amount: "+$2,450.00", status: "Completed", date: "Dec 12" },
  { name: "AWS Services", amount: "-$1,280.00", status: "Completed", date: "Dec 11" },
  { name: "Client Invoice", amount: "+$5,200.00", status: "Pending", date: "Dec 11" },
  { name: "Office Lease", amount: "-$3,500.00", status: "Completed", date: "Dec 10" },
  { name: "Contractor Pay", amount: "-$4,100.00", status: "Pending", date: "Dec 09" },
];

export const stats = [
  { label: "Total Revenue", value: "$48,239", change: "+12.5%", positive: true },
  { label: "Active Users", value: "2,847", change: "+8.2%", positive: true },
  { label: "Transactions", value: "14,209", change: "-3.1%", positive: false },
  { label: "Avg. Order", value: "$34.12", change: "+5.7%", positive: true },
];
