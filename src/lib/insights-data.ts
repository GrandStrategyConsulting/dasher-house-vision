export type InsightSource = {
  label: string;
  url: string;
};

export type InsightSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type InsightArticle = {
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
  answer: string;
  sections: InsightSection[];
  faq: Array<{ question: string; answer: string }>;
  sources: InsightSource[];
};

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    slug: "what-makes-a-property-more-than-a-property",
    category: "Real Estate Development",
    title: "What Makes a Property More Than a Property?",
    description:
      "A practical framework for turning real estate into a destination, community asset, and durable source of value.",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1600&q=85",
    readTime: "7 min read",
    answer:
      "A property becomes more than a physical asset when its location, use, operations, identity, and relationship to the surrounding community work together. The strongest properties solve a real need, create a memorable experience, remain operationally sound, and contribute value beyond their lot lines.",
    sections: [
      {
        heading: "Start with purpose, not finishes",
        paragraphs: [
          "Paint, furniture, and landscaping can improve presentation, but they cannot rescue an unclear proposition. Before investing in design, define who the property is for, what problem it solves, and why people would choose it over an alternative. A home may become a short-stay destination, a gathering place, a multigenerational residence, or a long-term rental—but each use requires a different operating model.",
          "Purpose also establishes a filter for capital decisions. Improvements should support the intended user, increase resilience, remove friction, or protect the asset. Features that do none of those things may be attractive without being valuable.",
        ],
      },
      {
        heading: "Place creates value beyond the building",
        paragraphs: [
          "EPA smart-growth guidance emphasizes walkability, housing choice, a strong sense of place, and access to transportation. These are not abstract planning ideals. They influence convenience, demand, operating risk, and the range of people a property can serve.",
          "A serious property strategy therefore studies the block, neighborhood, infrastructure, public realm, and development pipeline—not only the structure. The building and its context form one customer experience.",
        ],
        bullets: [
          "Map access to jobs, services, transit, recreation, and community anchors.",
          "Understand zoning, permitted uses, parking, utilities, and future public investment.",
          "Identify neighborhood assets worth reinforcing rather than replacing.",
        ],
      },
      {
        heading: "Experience must be supported by operations",
        paragraphs: [
          "A destination is not created by photography alone. Arrival, access, cleanliness, acoustics, lighting, safety, maintenance, communication, and recovery after each use determine whether the promise is repeatable. Hospitality thinking makes these invisible systems visible.",
          "The goal is not to maximize activity at any cost. It is to design an experience the property, operator, and neighborhood can sustain. That balance is what converts a compelling idea into durable value.",
        ],
      },
      {
        heading: "Stewardship is a long-term investment discipline",
        paragraphs: [
          "Brookings research on placemaking warns that rising occupancy and property values do not capture every community outcome. Value creation should be assessed alongside accessibility, affordability, local participation, and displacement risk.",
          "A property becomes more than a property when it produces financial value while strengthening the place around it. That requires ongoing listening, reinvestment, measurement, and a willingness to adjust the operating model as conditions change.",
        ],
      },
    ],
    faq: [
      {
        question: "What is a property value proposition?",
        answer:
          "It is a clear explanation of who the property serves, what need or experience it provides, and why that offer is distinct and sustainable.",
      },
      {
        question: "Can placemaking increase property value?",
        answer:
          "Evidence links walkability, strong public spaces, and place-based investment with occupancy and property-value gains, although owners should also track affordability and displacement impacts.",
      },
    ],
    sources: [
      { label: "U.S. EPA — About Smart Growth", url: "https://www.epa.gov/smartgrowth/about-smart-growth" },
      {
        label: "U.S. EPA — Smart Growth and Economic Success",
        url: "https://www.epa.gov/smartgrowth/smart-growth-and-economic-success",
      },
      {
        label: "Brookings — Embracing placemaking as a core state strategy",
        url: "https://www.brookings.edu/articles/embracing-placemaking-as-a-core-state-strategy/",
      },
    ],
  },
  {
    slug: "how-to-think-like-a-developer-before-you-buy",
    category: "Property Ownership Lessons",
    title: "How to Think Like a Developer Before You Buy",
    description:
      "A developer-minded property due-diligence framework covering use, approvals, physical risk, demand, costs, and exit strategy.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=85",
    readTime: "9 min read",
    answer:
      "Thinking like a developer means testing a property against a specific plan before becoming emotionally committed. Confirm that the use is legal, physically feasible, financeable, operable, and supported by demand—then stress-test costs, timing, and exit options.",
    sections: [
      {
        heading: "Buy the plan, not the possibility",
        paragraphs: [
          "A low price does not create a good deal. Developers begin with an intended use and work backward through constraints. The first question is not whether the property is attractive; it is whether the proposed use can survive planning, design, construction, operations, and financing.",
          "Write a one-page investment thesis before touring: target user, proposed use, value-creation steps, estimated timeline, capital requirement, and exit. If the property does not fit the thesis, enthusiasm should not substitute for evidence.",
        ],
      },
      {
        heading: "Complete layered due diligence",
        paragraphs: [
          "EPA redevelopment guidance separates environmental due diligence from broader real-estate due diligence. Environmental review evaluates contamination and liability; property review examines zoning, liens, encroachments, title, utilities, access, and building condition.",
          "For certain nonresidential acquisitions, an ASTM-compliant Phase I environmental site assessment may be important to federal liability protections. EPA notes that All Appropriate Inquiries generally must be completed or updated within one year before acquisition, with specified components updated within 180 days. Legal and environmental professionals should determine what applies to a particular transaction.",
        ],
        bullets: [
          "Land use: zoning, overlays, setbacks, parking, occupancy, and approval pathway.",
          "Physical: structure, roof, drainage, mechanical systems, accessibility, and deferred maintenance.",
          "Legal: title, easements, liens, HOA or lease restrictions, and operating permissions.",
          "Market: comparable demand, achievable revenue, seasonality, and competing supply.",
          "Capital: acquisition, closing, design, construction, contingency, carrying costs, and reserves.",
        ],
      },
      {
        heading: "Model time and downside explicitly",
        paragraphs: [
          "A development budget without a schedule is incomplete. Interest, insurance, taxes, utilities, security, and professional fees continue while approvals or construction are delayed. Model a base case, a slower lease-up or booking case, and a cost-overrun case.",
          "The strongest deal is not necessarily the one with the highest projected return. It is the one whose downside remains survivable and whose value is not dependent on a single optimistic assumption.",
        ],
      },
      {
        heading: "Know the exit before entry",
        paragraphs: [
          "A property may be refinanced, sold, held for income, converted to another legal use, or partnered with another operator. Each route has different requirements. Multiple credible exits create resilience; an exit that depends on one buyer, one regulatory change, or one perfect revenue forecast creates fragility.",
        ],
      },
    ],
    faq: [
      {
        question: "What should a buyer check before purchasing development property?",
        answer:
          "Check zoning and approvals, title and easements, physical and environmental conditions, utility capacity, demand, total project cost, schedule, operating requirements, and exit options.",
      },
      {
        question: "What is a Phase I environmental site assessment?",
        answer:
          "It is a professional review of current and historical uses, records, site conditions, and adjoining properties to identify potential environmental concerns and possible liability.",
      },
    ],
    sources: [
      {
        label: "U.S. EPA — Brownfields All Appropriate Inquiries",
        url: "https://www.epa.gov/brownfields/brownfields-all-appropriate-inquiries",
      },
      {
        label: "U.S. EPA — Revitalization-Ready Guide: Reuse Assessment",
        url: "https://www.epa.gov/land-revitalization/revitalization-ready-guide-chapter-3-reuse-assessment",
      },
      {
        label: "U.S. Census Bureau — Building Permits Survey",
        url: "https://www.census.gov/construction/bps/index.html",
      },
    ],
  },
  {
    slug: "why-hospitality-thinking-matters-in-real-estate",
    category: "Hospitality-Led Real Estate",
    title: "Why Hospitality Thinking Matters in Real Estate",
    description:
      "How an experience-led operating approach can improve residential, rental, event, and community-focused property performance.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85",
    readTime: "7 min read",
    answer:
      "Hospitality thinking matters because people experience a property as a sequence of moments, not a list of features. Designing arrival, comfort, communication, safety, service recovery, and departure can strengthen reputation, repeat demand, and operational discipline across many real-estate uses.",
    sections: [
      {
        heading: "Hospitality is an operating lens",
        paragraphs: [
          "Hospitality is often mistaken for décor or friendliness. In real estate, it is better understood as a system for anticipating needs and reducing friction. The system begins before arrival and continues through access, use, support, checkout or departure, and follow-up.",
          "This lens applies beyond hotels. Multifamily properties, short-stay rentals, event venues, senior living, coworking, and mixed-use developments all depend on how consistently people can understand and use a place.",
        ],
      },
      {
        heading: "Design the full user journey",
        paragraphs: [
          "A useful journey map identifies every decision and possible failure point: finding the entrance, parking, unlocking a door, controlling temperature, locating amenities, reporting a problem, and leaving safely. Removing small points of confusion can have more operational value than adding an expensive feature.",
        ],
        bullets: [
          "Set accurate expectations before arrival.",
          "Make access, wayfinding, lighting, and instructions intuitive.",
          "Standardize cleaning, inspection, replenishment, and maintenance.",
          "Create a fast escalation and service-recovery process.",
          "Capture feedback and convert recurring issues into property improvements.",
        ],
      },
      {
        heading: "Safety and inclusion are part of the experience",
        paragraphs: [
          "Airbnb’s official home-safety standards call for secure access, working smoke and carbon-monoxide detectors, hazard disclosure, compliance with applicable laws, and attention to occupancy limits. ADA guidance also makes clear that businesses open to the public must provide equal access to their goods and services.",
          "These obligations should not be treated as back-office compliance. Clear exits, accessible routes, appropriate lighting, reliable locks, and honest communication directly shape trust.",
        ],
      },
      {
        heading: "Measure experience and asset health together",
        paragraphs: [
          "Review scores, renewals, referrals, repeat bookings, response time, maintenance frequency, and complaint themes can reveal whether the experience is supporting the property. Pair those measures with net operating income, reserve adequacy, lifecycle costs, and neighborhood impact.",
          "Hospitality thinking is valuable when it produces a better experience without compromising the building, operator, or community. The discipline is repeatability, not spectacle.",
        ],
      },
    ],
    faq: [
      {
        question: "What does hospitality-led real estate mean?",
        answer:
          "It means designing and operating property around the full user experience—including arrival, comfort, service, safety, communication, and departure—rather than focusing only on the physical asset.",
      },
      {
        question: "Does hospitality thinking apply to long-term housing?",
        answer:
          "Yes. Clear communication, reliable maintenance, intuitive common areas, accessibility, and thoughtful community programming can improve resident experience and retention.",
      },
    ],
    sources: [
      { label: "Airbnb — Safety requirements for homes", url: "https://www.airbnb.com/help/article/2904" },
      { label: "Airbnb — Responsible hosting in the United States", url: "https://www.airbnb.com/help/article/1376" },
      { label: "ADA.gov — Businesses That Are Open to the Public", url: "https://www.ada.gov/topics/title-iii/" },
    ],
  },
  {
    slug: "the-opportunity-in-regeneration-areas",
    category: "Regeneration Areas",
    title: "The Opportunity in Regeneration Areas",
    description:
      "How to identify credible neighborhood reinvestment signals while balancing returns, execution risk, and inclusive development.",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1600&q=85",
    readTime: "8 min read",
    answer:
      "Regeneration areas can offer opportunity when public investment, private capital, market demand, land-use capacity, and community priorities align. The best signal is not a single announcement or rising asking price; it is a pattern of funded projects, improving fundamentals, credible approvals, and local participation.",
    sections: [
      {
        heading: "Separate a story from a funded trajectory",
        paragraphs: [
          "Neighborhood narratives move faster than infrastructure. Verify whether proposed transit, parks, utilities, schools, or zoning changes are funded, scheduled, and governed by an accountable agency. Compare announcements with adopted plans, capital budgets, permits, and completed work.",
          "Census building-permit data can help investors compare construction activity across places, while local permit portals reveal what is happening parcel by parcel. Permits are evidence of intent, not proof of successful demand, but they are stronger than marketing language.",
        ],
      },
      {
        heading: "Read multiple market signals",
        paragraphs: [
          "Look for sustained changes in occupancy, business formation, building rehabilitation, infrastructure condition, code enforcement, transaction volume, rents, and time on market. No single metric is sufficient. A healthy regeneration thesis explains both demand and the delivery capacity required to meet it.",
        ],
        bullets: [
          "Public capital already appropriated, not merely proposed.",
          "Zoning that permits feasible projects and an approval process with realistic timing.",
          "Local institutions, employers, small businesses, and community organizations investing for the long term.",
          "Evidence of demand that is not dependent on one project or incentive.",
          "A credible plan for affordability, local benefit, and displacement prevention.",
        ],
      },
      {
        heading: "Account for displacement and distribution",
        paragraphs: [
          "Urban Institute research shows that revitalization can change safety perceptions, small-business conditions, capital investment, and displacement pressures. Brookings similarly cautions that higher property values and occupancy do not reveal who benefits or who may be priced out.",
          "Responsible regeneration includes early community engagement, support for existing businesses and residents, affordable housing strategies, local hiring or procurement, and transparent measurement. These measures are not separate from risk management; they can protect project legitimacy and long-term place value.",
        ],
      },
      {
        heading: "Invest with patient milestones",
        paragraphs: [
          "Regeneration rarely follows a straight line. Underwrite delays, uneven block-by-block change, interest-rate sensitivity, construction escalation, and longer lease-up. Establish milestones that can be observed—approvals, infrastructure delivery, anchor openings, occupancy, and operating performance—and update the thesis when evidence changes.",
        ],
      },
    ],
    faq: [
      {
        question: "What is a regeneration area in real estate?",
        answer:
          "It is an area undergoing coordinated reinvestment in property, infrastructure, services, public space, or economic activity after a period of underinvestment or transition.",
      },
      {
        question: "What are the strongest early regeneration signals?",
        answer:
          "Funded public projects, adopted land-use changes, rising permit activity, durable local institutions, improving occupancy, and transparent community investment are stronger than publicity alone.",
      },
    ],
    sources: [
      { label: "U.S. Census Bureau — Building Permits Survey", url: "https://www.census.gov/construction/bps/index.html" },
      {
        label: "Urban Institute — Turning the Corner",
        url: "https://www.urban.org/research/publication/turning-corner-implications-neighborhood-revitalization-public-safety-small-businesses-and-capital-investments",
      },
      {
        label: "Brookings — Embracing placemaking as a core state strategy",
        url: "https://www.brookings.edu/articles/embracing-placemaking-as-a-core-state-strategy/",
      },
    ],
  },
  {
    slug: "turning-a-home-into-a-destination",
    category: "Event Property Activation",
    title: "Turning a Home Into a Destination",
    description:
      "A step-by-step strategy for transforming a residential property into a distinctive, lawful, and operationally resilient destination.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    readTime: "8 min read",
    answer:
      "A home becomes a destination when it offers a clear reason to visit, a coherent sense of place, dependable hospitality, and operations that respect safety, regulation, the building, and neighbors. The transformation begins with permitted use and a viable operating model—not branding alone.",
    sections: [
      {
        heading: "Define the destination promise",
        paragraphs: [
          "The promise should be specific enough to guide design and marketing: a restorative retreat, an intimate gathering house, a creative workshop setting, or a gateway to a local experience. Generic luxury language is less useful than a clear audience, occasion, and emotional outcome.",
          "Build the concept around authentic strengths—architecture, landscape, history, proximity, or hosting capability. A destination that could exist anywhere is difficult to defend.",
        ],
      },
      {
        heading: "Confirm the use before investing",
        paragraphs: [
          "Residential zoning does not automatically permit short stays, events, commercial filming, food service, amplified sound, or higher occupancy. Review local zoning, licensing, building and fire codes, health requirements, parking, HOA or lease restrictions, and insurance with qualified professionals.",
          "If the property will serve the public, accessibility obligations may apply. ADA guidance covers accessible routes, parking, doors, service areas, and other elements for businesses open to the public.",
        ],
      },
      {
        heading: "Design operations before content",
        paragraphs: [
          "A photograph can attract attention, but operations determine whether the destination lasts. Map arrival, parking, access control, occupancy, circulation, restroom capacity, waste, cleaning, vendors, noise, emergency response, weather, and departure.",
        ],
        bullets: [
          "Set a safe capacity supported by approvals, exits, parking, and sanitation.",
          "Create written house rules, vendor rules, quiet hours, and escalation procedures.",
          "Protect high-wear surfaces and establish preventive-maintenance reserves.",
          "Develop a neighbor contact and rapid complaint-response process.",
          "Use truthful photography and descriptions to align expectations.",
        ],
      },
      {
        heading: "Build a revenue mix the property can carry",
        paragraphs: [
          "Possible revenue streams include stays, small events, retreats, workshops, content production, and partnerships. Each should be underwritten separately because capacity, labor, insurance, turnover, and neighborhood impact differ.",
          "The objective is not maximum bookings. It is a calendar and use mix that produces healthy margins while preserving the property and experience.",
        ],
      },
    ],
    faq: [
      {
        question: "Can any home become an event or short-stay destination?",
        answer:
          "No. Zoning, licenses, building and fire safety, accessibility, parking, insurance, HOA or lease rules, and neighborhood conditions can limit or prohibit the intended use.",
      },
      {
        question: "What makes a destination property distinctive?",
        answer:
          "A strong sense of place, a specific audience and occasion, consistent hospitality, memorable but authentic design, and reliable operations create distinction.",
      },
    ],
    sources: [
      { label: "Airbnb — Responsible hosting in the United States", url: "https://www.airbnb.com/help/article/1376" },
      { label: "Airbnb — Safety requirements for homes", url: "https://www.airbnb.com/help/article/2904" },
      { label: "ADA.gov — Businesses That Are Open to the Public", url: "https://www.ada.gov/topics/title-iii/" },
    ],
  },
  {
    slug: "what-property-owners-should-know-before-launching-an-airbnb",
    category: "Airbnb & Short-Stay Strategy",
    title: "What Property Owners Should Know Before Launching an Airbnb",
    description:
      "A verified readiness checklist for short-term rental laws, demand, safety, insurance, taxes, operations, neighbors, and financial modeling.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=85",
    readTime: "10 min read",
    answer:
      "Before launching an Airbnb, confirm that short-term rental use is lawful and contractually permitted, model realistic net income, prepare the home for safety and accessibility, obtain appropriate insurance, understand tax treatment, and create repeatable systems for guests, cleaning, maintenance, and neighbors.",
    sections: [
      {
        heading: "Legal permission comes first",
        paragraphs: [
          "Check city and county rules for zoning, registration, permits, business licenses, occupancy, inspections, parking, and lodging taxes. Then check leases, mortgage terms, condominium documents, cooperative rules, and HOA covenants. Platform availability is not proof that a particular property may legally host.",
          "Airbnb’s U.S. responsible-hosting guidance directs hosts to verify permitting, zoning, safety, health, tax, and insurance requirements. Rules change, so document the agencies consulted and review them regularly.",
        ],
      },
      {
        heading: "Underwrite net income, not headline nightly rate",
        paragraphs: [
          "Estimate achievable occupancy and average daily rate by season and day of week. Deduct platform fees, cleaning, supplies, utilities, internet, maintenance, landscaping, management, licenses, taxes, insurance, financing, furnishings, replacement reserves, and vacancy.",
          "Stress-test lower occupancy, rate compression, major repairs, regulatory change, and the inability to self-manage. A property that only works under peak-season assumptions is not ready.",
        ],
      },
      {
        heading: "Treat safety as a system",
        paragraphs: [
          "Airbnb requires hosts to address known hazards, provide secure access, disclose safety issues, and follow applicable laws and occupancy limits. Its guidance strongly emphasizes working smoke and carbon-monoxide detectors. Hosts should also review exits, extinguishers, railings, pools or ponds, electrical hazards, water temperature, trip hazards, and emergency instructions with appropriate professionals.",
        ],
        bullets: [
          "Document inspections and recurring detector tests.",
          "Change access codes between reservations and control vendor access.",
          "Provide the property address, emergency contacts, exits, and nearest medical resources.",
          "Disclose bodies of water, stairs, cameras or permitted monitoring devices, and other relevant conditions.",
        ],
      },
      {
        heading: "Plan for taxes, insurance, and records",
        paragraphs: [
          "The IRS generally requires rental income to be reported and explains that personal use can change the treatment and deductibility of expenses. The special rules for mixed personal and rental use are detailed; owners should keep booking calendars, receipts, mileage and work records, and consult a tax professional.",
          "Do not assume standard homeowner coverage is sufficient. Discuss short-term rental activity, liability, loss of income, property damage, amenities, employees or contractors, and event use with a licensed insurance professional.",
        ],
      },
      {
        heading: "Protect the neighborhood relationship",
        paragraphs: [
          "Set occupancy, parking, pet, visitor, and quiet-hour rules that can be enforced. Give neighbors a reliable local contact and respond quickly. A successful listing is compatible with its setting; recurring disturbance is an operating failure, not merely a guest problem.",
        ],
      },
    ],
    faq: [
      {
        question: "Do I need a permit to operate an Airbnb?",
        answer:
          "Many jurisdictions require registration, permits, licenses, inspections, or tax accounts, while some restrict or prohibit short-term rentals. Check the exact city, county, building, lease, and HOA rules for the property.",
      },
      {
        question: "Is Airbnb income taxable?",
        answer:
          "Generally, rental income must be reported, although federal rules include a limited exception for certain homes rented fewer than 15 days. Personal use and activity structure affect deductions; consult current IRS guidance and a tax professional.",
      },
      {
        question: "What safety equipment should a short-term rental have?",
        answer:
          "Requirements vary, but working smoke and carbon-monoxide detectors, secure access, clear exits, hazard disclosure, first-aid supplies, and code-compliant occupancy are foundational.",
      },
    ],
    sources: [
      { label: "Airbnb — Responsible hosting in the United States", url: "https://www.airbnb.com/help/article/1376" },
      { label: "Airbnb — Safety requirements for homes", url: "https://www.airbnb.com/help/article/2904" },
      { label: "IRS Topic 415 — Renting residential and vacation property", url: "https://www.irs.gov/taxtopics/tc415" },
    ],
  },
  {
    slug: "community-living-and-the-future-of-residential-development",
    category: "Community Living",
    title: "Community Living and the Future of Residential Development",
    description:
      "Why housing choice, shared spaces, social connection, accessibility, and neighborhood integration matter in residential development.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=85",
    readTime: "8 min read",
    answer:
      "Community-oriented residential development pairs private homes with intentional opportunities for connection, practical shared resources, accessible design, and links to the wider neighborhood. It succeeds when community is supported by operations and choice rather than imposed through programming.",
    sections: [
      {
        heading: "Housing performance includes connection",
        paragraphs: [
          "Square footage, rent, and unit count remain important, but they do not fully describe how a place supports daily life. Residents also experience circulation, thresholds, outdoor space, noise, maintenance, safety, accessibility, and opportunities for informal interaction.",
          "EPA smart-growth principles call for a range of housing choices, walkable neighborhoods, distinctive places, and development directed toward existing communities. These principles connect the home to services, mobility, and public life.",
        ],
      },
      {
        heading: "Design shared space around real routines",
        paragraphs: [
          "A large amenity room does not automatically create community. Useful shared spaces are visible, comfortable, accessible, acoustically appropriate, and connected to routines people already have: collecting mail, working, cooking, walking, gardening, supervising children, or spending time outdoors.",
        ],
        bullets: [
          "Offer a gradient from private to semi-private to shared space.",
          "Design for different ages, abilities, household types, and levels of social participation.",
          "Provide storage, lighting, power, seating, shade, and restrooms where the intended use needs them.",
          "Establish ownership, booking, cleaning, security, and repair responsibilities before opening.",
        ],
      },
      {
        heading: "Choice and inclusion protect the concept",
        paragraphs: [
          "Community should not require constant participation or compromise privacy. Residents need clear rules, quiet options, fair access to amenities, and meaningful ways to shape programming and management.",
          "Urban Institute’s evaluation of Choice Neighborhoods reflects a comprehensive approach spanning housing, people, and neighborhood conditions. That broader frame is useful for private development too: the physical product, resident outcomes, and surrounding place are interconnected.",
        ],
      },
      {
        heading: "Measure belonging and operations",
        paragraphs: [
          "Track retention, maintenance response, amenity use, resident feedback, conflicts, participation, accessibility issues, and referrals alongside financial performance. Community living is not a one-time design decision; it is an operating commitment.",
        ],
      },
    ],
    faq: [
      {
        question: "What is community living in real estate?",
        answer:
          "It is housing designed and operated to support both private life and voluntary connection through shared spaces, services, programming, and neighborhood access.",
      },
      {
        question: "What amenities create community?",
        answer:
          "Everyday spaces often outperform showpiece amenities: welcoming entries, porches, courtyards, gardens, shared work areas, kitchens, walking routes, and flexible rooms with clear management.",
      },
    ],
    sources: [
      { label: "U.S. EPA — Smart Growth and Housing", url: "https://www.epa.gov/smartgrowth/smart-growth-and-housing" },
      { label: "U.S. EPA — About Smart Growth", url: "https://www.epa.gov/smartgrowth/about-smart-growth" },
      { label: "Urban Institute — Choice Neighborhoods evaluation", url: "https://www.urban.org/research/publication/choice-neighborhoods" },
    ],
  },
  {
    slug: "what-regeneration-really-means-for-property-owners-and-developers",
    category: "Regeneration Areas",
    title: "What Regeneration Really Means for Property Owners and Developers",
    description:
      "A grounded definition of neighborhood regeneration and a framework for evaluating development outcomes, risk, and community benefit.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
    readTime: "9 min read",
    answer:
      "Regeneration is coordinated, long-term improvement in a place’s housing, infrastructure, economy, public realm, environmental condition, and resident opportunity. It is broader than redevelopment of a single parcel and should be judged by who benefits, what endures, and whether displacement risks are addressed.",
    sections: [
      {
        heading: "Redevelopment is a project; regeneration is a system",
        paragraphs: [
          "A renovated building may be valuable without changing neighborhood conditions. Regeneration connects multiple investments and institutions over time: housing, transportation, utilities, schools, public space, health, business support, environmental remediation, and community capacity.",
          "Urban Institute describes Choice Neighborhoods as a comprehensive model operating across housing, people, and neighborhood domains. That three-part lens prevents a narrow focus on buildings alone.",
        ],
      },
      {
        heading: "Use evidence at several scales",
        paragraphs: [
          "Measure the parcel, block, neighborhood, and resident experience. Building permits, vacancies, code conditions, business occupancy, infrastructure delivery, housing costs, tenure, and demographic change together provide a more reliable picture than appreciation alone.",
          "Urban Institute research on East Lake found significant changes in poverty, income, education, and home values while also noting demographic shifts. That is a reminder to distinguish changes in outcomes for existing residents from changes produced by who moves in or out.",
        ],
      },
      {
        heading: "Make community benefit concrete",
        paragraphs: [
          "Engagement is strongest when it influences decisions rather than merely explaining them. Depending on project scale and local needs, commitments may address affordable housing, local hiring and procurement, public space, transportation, small-business support, environmental performance, or anti-displacement resources.",
          "Community benefit agreements are one mechanism. Urban Institute describes them as legally binding contracts between community coalitions and developers, but their suitability and enforceability require local legal advice and a credible representative process.",
        ],
      },
      {
        heading: "Owners need a stewardship plan",
        paragraphs: [
          "Regeneration changes taxes, insurance, rents, demand, construction pressure, and operating expectations. Existing owners should review estate and ownership plans, capital needs, tenant communication, affordability options, and opportunities to participate rather than waiting for change to force decisions.",
          "Developers should underwrite not only acquisition and construction but also trust, approvals, local partnerships, and long-term management. A project can be financially complete while the work of regeneration is still beginning.",
        ],
      },
    ],
    faq: [
      {
        question: "What is the difference between regeneration and gentrification?",
        answer:
          "Regeneration refers to coordinated improvement and investment. Gentrification describes socioeconomic change that may accompany investment and can lead to cultural loss or displacement. Regeneration strategies should explicitly monitor and mitigate those risks.",
      },
      {
        question: "How should regeneration success be measured?",
        answer:
          "Use measures covering physical conditions, housing, business activity, infrastructure, resident well-being, affordability, participation, displacement, and long-term operating performance.",
      },
    ],
    sources: [
      { label: "Urban Institute — Choice Neighborhoods evaluation", url: "https://www.urban.org/research/publication/choice-neighborhoods" },
      { label: "Urban Institute — Atlanta’s East Lake Initiative", url: "https://www.urban.org/research/publication/atlantas-east-lake-initiative" },
      {
        label: "Urban Institute — Community Benefit Agreements",
        url: "https://www.urban.org/apps/pursuing-housing-justice-interventions-impact/community-benefit-agreements",
      },
    ],
  },
  {
    slug: "how-to-evaluate-whether-a-property-can-become-an-event-space",
    category: "Event Property Activation",
    title: "How to Evaluate Whether a Property Can Become an Event Space",
    description:
      "A feasibility checklist for event-space zoning, capacity, access, parking, safety, accessibility, acoustics, operations, and financial performance.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
    readTime: "10 min read",
    answer:
      "A property is a viable event-space candidate only when the intended event use is legally permitted, the site can safely support the proposed occupancy, guests can arrive and leave without creating unacceptable impacts, the building is accessible and resilient, and realistic revenue exceeds staffing, maintenance, insurance, and capital costs.",
    sections: [
      {
        heading: "Define the event before evaluating the property",
        paragraphs: [
          "A ten-person workshop, a fifty-person dinner, and a wedding with vendors and amplified music are different land uses operationally, even if marketed under one brand. Define event types, frequency, hours, guest count, staff, vendors, alcohol, food preparation, indoor and outdoor areas, and weather contingencies.",
          "The use profile becomes the basis for conversations with planning, building, fire, health, licensing, insurance, and design professionals.",
        ],
      },
      {
        heading: "Verify entitlement and code feasibility",
        paragraphs: [
          "Confirm zoning and whether the use is permitted by right, requires a conditional or special-use approval, or is prohibited. Determine the building’s occupancy classification, occupant load, exit requirements, restroom count, fire protection, structural capacity, food-service requirements, and alcohol rules.",
          "ADA Title III generally applies to businesses that serve the public. Accessibility evaluation may include routes from parking and public ways, entrances, doors, ramps, restrooms, seating, service areas, and communication access.",
        ],
      },
      {
        heading: "Test the site and neighborhood interface",
        paragraphs: [
          "Most event-space failures occur at the edges: parking overflow, rideshare queues, vendor loading, trash, lighting, outdoor sound, late departures, and unclear emergency access. Map these flows at the busiest plausible moment.",
        ],
        bullets: [
          "Document on-site and legally available off-site parking.",
          "Preserve emergency and accessible routes at all times.",
          "Model indoor and outdoor sound, hours, and enforcement.",
          "Plan vendor loading, power, food handling, waste, and restroom servicing.",
          "Create rain, heat, cold, power-loss, and medical-response plans.",
        ],
      },
      {
        heading: "Underwrite operations and wear",
        paragraphs: [
          "Revenue should be modeled by event type and season, then reduced by staffing, sales, setup, breakdown, cleaning, security, utilities, waste, repairs, grounds, insurance, permits, payment fees, marketing, and reserves. Include the cost of days blocked for turnover or maintenance.",
          "Capacity should be determined by law, safety, comfort, and operating capability—not the maximum number of people that physically fit in a photograph.",
        ],
      },
      {
        heading: "Use a staged go/no-go process",
        paragraphs: [
          "Begin with a regulatory and physical feasibility screen before commissioning full designs. If viable, develop a concept plan, preliminary code analysis, operating plan, community-impact plan, budget, and demand test. Advance only when each layer supports the same use and capacity.",
        ],
      },
    ],
    faq: [
      {
        question: "Can a residential property legally host paid events?",
        answer:
          "Sometimes, but not automatically. Local zoning, building and fire codes, health rules, alcohol requirements, parking, HOA or lease restrictions, and permits determine what is allowed.",
      },
      {
        question: "How is event-space capacity determined?",
        answer:
          "Authorities and design professionals evaluate occupancy classification, floor area, exits, fire protection, seating arrangement, restrooms, accessibility, and other code requirements. Operational comfort may justify a lower limit.",
      },
      {
        question: "What is the biggest event-property risk?",
        answer:
          "There is no single universal risk, but unverified legal use, unsafe occupancy, inadequate access or parking, neighborhood disturbance, and underpriced operations are recurring failure points.",
      },
    ],
    sources: [
      { label: "ADA.gov — Businesses That Are Open to the Public", url: "https://www.ada.gov/topics/title-iii/" },
      { label: "ADA.gov — Guidance on Web Accessibility and the ADA", url: "https://www.ada.gov/resources/web-guidance/" },
      { label: "Airbnb — Safety requirements for homes", url: "https://www.airbnb.com/help/article/2904" },
    ],
  },
];

export function getInsightArticle(slug: string) {
  return INSIGHT_ARTICLES.find((article) => article.slug === slug);
}
