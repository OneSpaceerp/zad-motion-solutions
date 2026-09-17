import { KnowledgeArticle } from './types';

export const knowledgeData: KnowledgeArticle[] = [
  {
    id: 'art-1',
    slug: 'what-is-pump-commissioning',
    title: 'What Is Pump Commissioning & Why Does It Matter?',
    category: 'Commissioning & Engineering',
    readTime: '5 min read',
    publishDate: '2024-01-15',
    author: 'ZAD Technical Team',
    excerpt: 'Explore the fundamental steps involved in professional pump commissioning and how proper start-up procedures prevent premature equipment breakdown.',
    takeaways: [
      'Commissioning validates that mechanical, electrical, and hydraulic settings conform to design standards.',
      'Improper initial rotation direction or dry running can ruin mechanical seals within seconds.',
      'Baseline data collected at start-up serves as the crucial benchmark for all future condition monitoring.'
    ],
    content: `Pump commissioning is the structured engineering process that transitions newly installed or overhauled pumping machinery into safe, active service. It bridges the gap between mechanical installation and day-to-day operations.

### Key Stages of Commissioning
1. **Pre-Commissioning Mechanical Check:** Verification of foundation anchoring, pipe strain isolation, suction/discharge valve readiness, and free rotational movement by hand.
2. **Electrical & Control Verification:** Phase sequence confirmation, motor insulation resistance measurement, thermal overload setting verification, and control panel interlock testing.
3. **Hydraulic Priming & Venting:** Ensuring the pump casing and suction line are completely flooded to eliminate entrained air that causes cavitation.
4. **Initial Start-Up & Direction Check:** Brief motor jog to confirm correct impeller rotation before sustained operation.
5. **Operating Parameter Verification:** Logging operating suction pressure, discharge pressure, motor current draw, bearing temperatures, and vibration velocity.

### Why Skipping Commissioning Is Costly
Up to 30% of premature pump failures occur due to installation and startup errors, including pipe strain distortion, reverse rotation, unvented air pockets, and severe shaft misalignment. Professional commissioning creates an auditable technical baseline and safeguards manufacturer warranty coverage.`,
    seo_title: 'What Is Pump Commissioning? Engineering Guide | ZAD',
    seo_description: 'Learn why pump commissioning is vital for mechanical reliability, what steps are involved, and how it protects your electromechanical investment.'
  },
  {
    id: 'art-2',
    slug: 'why-shaft-alignment-matters',
    title: 'Why Laser Shaft Alignment Matters in Rotating Machinery',
    category: 'Diagnostics & Precision Tools',
    readTime: '6 min read',
    publishDate: '2024-02-10',
    author: 'ZAD Diagnostic Engineering',
    excerpt: 'Understand how shaft misalignment causes over 50% of rotating machinery breakdowns and how precision laser tools eliminate premature wear.',
    takeaways: [
      'Shaft misalignment is responsible for over 50% of rotating machinery breakdowns.',
      'Flexible couplings absorb slight motion but do NOT prevent harmful bearing and seal forces.',
      'Laser alignment achieves tolerances down to 0.01 mm, drastically extending equipment lifespan.'
    ],
    content: `In directly coupled pump-motor assemblies, the centerlines of rotation of both shafts must be collinear under normal operating conditions. When these axes are offset or angled relative to each other, severe cyclic forces are generated twice per revolution.

### The Myth of Flexible Couplings
Many facility teams assume that installing a flexible coupling eliminates the need for precision alignment. In reality, while flexible elements tolerate minor thermal movement, they continuously transmit excessive radial and axial bending forces directly into bearings and mechanical seals.

### Consequences of Misalignment:
- **Premature Bearing Failure:** Increased loading generates excessive frictional heat and spalling on bearing races.
- **Mechanical Seal Leakage:** Angular shaft deflection causes seal faces to separate, allowing fluid leakage and abrasive particle contamination.
- **Elevated Power Consumption:** Misalignment causes mechanical binding, drawing up to 10% more electrical energy.
- **Increased Plant Noise and Vibration:** Harmonic vibration transmits through pipe headers and building structures.

### The Precision Advantage of Laser Alignment
Traditional straightedges and dial indicators are prone to human error, indicator sag, and slow setup. Advanced laser alignment tools, such as the SKF TKSA-51 systems utilized by ZAD, deliver live digital feedback and sub-millimeter precision to ensure flawless equipment setup.`,
    seo_title: 'Why Laser Shaft Alignment Matters | ZAD Electromechanical Services',
    seo_description: 'Discover how precision laser shaft alignment prevents bearing failure, saves electrical energy, and eliminates machinery vibration.'
  },
  {
    id: 'art-3',
    slug: 'common-causes-of-pump-failure',
    title: 'Common Causes of Centrifugal Pump Failure & How to Prevent Them',
    category: 'Maintenance & Reliability',
    readTime: '7 min read',
    publishDate: '2024-03-05',
    author: 'ZAD Technical Team',
    excerpt: 'A comprehensive technical overview of cavitation, dry running, bearing degradation, and mechanical seal wear in centrifugal pumps.',
    takeaways: [
      'Mechanical seal leakage accounts for the largest single reason for pump decommissioning.',
      'Cavitation implosions erode metal surfaces and destabilize hydraulic balance.',
      'Routine diagnostic checks detect early indicators long before catastrophic shutdown.'
    ],
    content: `Centrifugal pumps are rugged workhorses, yet they operate under demanding hydraulic and mechanical forces. When a pump fails, the failure is rarely instantaneous—it is almost always preceded by observable symptoms.

### 1. Mechanical Seal Failure
Mechanical seals operate with microscopic fluid barrier films between rotating and stationary faces. Common failure causes include:
- Dry running or loss of flushing fluid.
- Abrasive solids in the pumped medium scratching seal faces.
- Thermal shock from sudden temperature fluctuations.
- Shaft deflection caused by operating far off the Best Efficiency Point (BEP).

### 2. Cavitation
When suction pressure drops below the fluid vapor pressure, microscopic vapor bubbles form and collapse violently against impeller vanes. This causes characteristic gravel-rattling noise, metal pitting, and reduced hydraulic head.
*Prevention:* Maintain adequate Net Positive Suction Head Available (NPSHa) and inspect suction strainers regularly.

### 3. Bearing Overheating & Fatigue
Bearings support the rotating assembly and maintain radial/axial alignment. Failures stem from:
- Over-greasing or incorrect lubricant selection.
- Moisture or particulate contamination past lip seals.
- Uncorrected coupling misalignment.

### 4. Operating Outside Permissible Curve Limits
Running a pump near shut-off head creates internal recirculation and rapid fluid heating, while running at excessive run-out causes motor overload and cavitation. Maintaining operations near BEP ensures maximum lifecycle.`,
    seo_title: 'Common Causes of Pump Failure & Prevention | ZAD',
    seo_description: 'Explore the primary root causes of centrifugal pump breakdowns: cavitation, seal failure, bearing wear, and off-curve operation.'
  },
  {
    id: 'art-4',
    slug: 'preventive-vs-corrective-maintenance',
    title: 'Preventive vs. Corrective Maintenance: A Lifecycle Cost Comparison',
    category: 'Maintenance & Reliability',
    readTime: '5 min read',
    publishDate: '2024-03-22',
    author: 'ZAD Engineering Team',
    excerpt: 'Compare the economic and operational impact of scheduled preventive maintenance versus running equipment to failure in critical facilities.',
    takeaways: [
      'Corrective emergency repairs typically cost 3x to 5x more than scheduled preventive maintenance.',
      'Unplanned downtime disrupts critical facility processes, tenants, and production.',
      'Preventive inspection schedules maintain peak electrical efficiency and lower utility bills.'
    ],
    content: `Facility and maintenance managers are constantly tasked with balancing operational budgets against reliability targets. The choice between reactive (corrective) and proactive (preventive) maintenance fundamentally shapes total ownership costs.

### The Real Cost of Run-to-Failure
Running equipment until it breaks down appears cost-effective on paper because no money is spent until an event occurs. However, when a primary pump fails without warning:
- Unplanned downtime halts production or leaves multistory tenants without water.
- Emergency technician callouts and expedited freight for spare parts incur heavy premiums.
- Secondary damage multiplies: a seized bearing can score the shaft, destroy the impeller, and burn out motor windings.

### The Value of Structured Preventive Maintenance
A structured preventive program involves scheduled condition inspections, lubrication renewal, seal checks, and electrical testing:
- **Planned Interventions:** Maintenance occurs during scheduled, low-demand windows.
- **Longer Asset Lifespan:** Minor adjustments preserve expensive major castings and impellers.
- **Energy Optimization:** Properly aligned and non-degraded pumps consume significantly less kilowatt-hours.

ZAD partners with facilities across Egypt to implement targeted maintenance programs tailored to the criticality of their specific pumping infrastructure.`,
    seo_title: 'Preventive vs Corrective Pump Maintenance | ZAD Egypt',
    seo_description: 'Analyze the true lifecycle cost difference between scheduled preventive pump maintenance and emergency corrective breakdowns.'
  },
  {
    id: 'art-5',
    slug: 'when-does-a-pump-need-inspection',
    title: '5 Warning Signs Your Pump System Needs Immediate Inspection',
    category: 'Diagnostics & Precision Tools',
    readTime: '4 min read',
    publishDate: '2024-04-12',
    author: 'ZAD Diagnostic Engineering',
    excerpt: 'Identify five subtle operational symptoms that indicate internal pump wear before an unexpected catastrophic shutdown occurs.',
    takeaways: [
      'Abnormal acoustic changes like knocking or grinding indicate imminent bearing or impeller issues.',
      'Elevated casing or bearing housing temperatures indicate friction or electrical binding.',
      'Pressure drops at standard motor speeds suggest internal wear ring erosion or cavitation.'
    ],
    content: `Pumps communicate their internal physical condition through physical cues. Recognizing these symptoms allows engineering teams to intervene while repairs are still minor and manageable.

### 1. Unusual Noise or Vibration
A healthy pump hums smoothly. If you hear a distinctive sound resembling gravel pumping through the casing, cavitation is occurring. Metallic screeching or knocking indicates failing ball bearings or coupling mechanical contact.

### 2. High Bearing or Motor Temperatures
Using infrared thermography, ZAD routinely discovers bearing housings running 20°C to 30°C above normal design range. Excess heat is a clear sign of lubricant breakdown, misalignment, or overloading.

### 3. Visible Fluid Dripping from Seal Housings
While conventional gland packing requires a slight controlled drip to lubricate the packing, modern mechanical seals should show zero visible leakage. Any steady drip indicates worn seal faces or damaged secondary O-rings.

### 4. Loss of Pressure or Discharge Flow
If the pump runs at full rated RPM (verified via tachometer) but fails to generate expected discharge pressure or flow, internal wear rings have likely enlarged, allowing high-pressure fluid to slip back into the suction eye.

### 5. Frequent Thermal Overload Trips
If motor starters or frequency inverters trip on overcurrent, the pump may be experiencing mechanical binding, bearing seizure, or operating too far out on its curve. Immediate inspection is required before the motor stator is damaged.`,
    seo_title: '5 Warning Signs Your Pump Needs Inspection | ZAD',
    seo_description: 'Learn the 5 critical warning signs that indicate your pump needs professional inspection: vibration, temperature, leakage, and flow drops.'
  },
  {
    id: 'art-6',
    slug: 'understanding-booster-pump-systems',
    title: 'Understanding Booster Pump Systems: VFD vs. Fixed-Speed Controls',
    category: 'Pump Systems & Solutions',
    readTime: '6 min read',
    publishDate: '2024-05-02',
    author: 'ZAD Technical Team',
    excerpt: 'An engineering comparison of variable frequency drive (VFD) pressure boosting versus traditional fixed-speed cascade staging.',
    takeaways: [
      'VFD boosters maintain constant target pressure regardless of how many taps or fixtures open.',
      'Variable speed staging reduces electrical energy consumption by up to 35% to 45%.',
      'Soft-starting motors completely eliminates the hydraulic water hammer that bursts pipes.'
    ],
    content: `Water demand in multi-tenant towers, hotels, and hospitals varies drastically between peak morning usage and midnight lulls. Booster pump control architecture determines how effectively the system adapts to these variations.

### The Limitations of Fixed-Speed Booster Sets
Traditional fixed-speed systems rely on pressure switches to start and stop pumps across step thresholds.
- **Pressure Swings:** Water pressure constantly cycles between high cut-out and low cut-in pressures.
- **Frequent Cycling:** Repeated across-the-line electrical starting stresses motor contactors and windings.
- **Hydraulic Shock:** Sudden full-speed starts and stops send shockwaves through building risers (water hammer).

### The Modern VFD Booster Solution
Variable frequency drive (VFD) booster sets modulate pump motor rotational speed in real time based on feedback from a high-precision pressure transducer.
- **Stable Pressure:** The system holds pressure constant down to fractions of a bar.
- **Proportional Energy Consumption:** According to the Affinity Laws, power is proportional to the cube of speed. Running at 80% speed requires roughly half the electrical power of full speed.
- **Soft Acceleration & Deceleration:** Eliminates pipe shock and extends plumbing fixture lifespan.

ZAD configures and retrofits intelligent multi-pump booster sets featuring leading VFD architectures assembled locally in Egypt.`,
    seo_title: 'Understanding Booster Pump Systems: VFD vs Fixed | ZAD',
    seo_description: 'Compare VFD inverter booster pumps with fixed-speed systems. Energy savings, pressure stabilization, and water hammer prevention.'
  },
  {
    id: 'art-7',
    slug: 'how-to-identify-the-correct-spare-part',
    title: 'How to Correctly Identify Pump Spare Parts & Avoid Costly Errors',
    category: 'Spare Parts & Hardware',
    readTime: '5 min read',
    publishDate: '2024-05-18',
    author: 'ZAD Parts Support Team',
    excerpt: 'A practical guide for facility engineers on reading pump nameplates, identifying seal types, and ordering exact replacement components.',
    takeaways: [
      'The pump nameplate is the single most important document for exact component identification.',
      'Mechanical seals require verifying shaft diameter, face materials (e.g. SiC vs. TC), and elastomer type.',
      'Counterfeit or sub-spec spare parts often cause repeat breakdowns within weeks of installation.'
    ],
    content: `Ordering the wrong spare part causes frustrating delivery delays, wasted budget, and prolonged equipment downtime. Because pump models evolve across manufacturing generations, exact identification is paramount.

### The Golden Rule: Photograph the Nameplate
Every pump carries a metal or etched nameplate specifying:
- Exact model designation and series code.
- Serial number and production date.
- Impeller diameter (often trimmed specifically for the site).
- Rated head (H), flow (Q), and maximum operating pressure (PN).

Capturing a clear photo of this plate allows ZAD engineers to instantly cross-reference factory bills of materials.

### Identifying Mechanical Seals
Mechanical seals cannot be ordered by pump horsepower alone. Key criteria include:
1. **Shaft Diameter:** Measured with calipers at the seal seat position.
2. **Face Materials:** Carbon/Ceramic for clean domestic water; Silicon Carbide (SiC) or Tungsten Carbide (TC) for abrasive or high-pressure applications.
3. **Elastomer Compounds:** EPDM for hot and potable water; Viton (FKM) for hydrocarbons, chemicals, and high temperatures.

### The Risk of Non-Genuine or Generic Alternatives
Inferior imitation seals often use low-grade carbon or weak springs that warp under thermal expansion, causing catastrophic leakage. ZAD supplies 100% genuine, factory-grade spare parts backed by technical guidance to guarantee right-first-time replacement.`,
    seo_title: 'How to Identify Pump Spare Parts Correctly | ZAD',
    seo_description: 'Practical guide to identifying pump spare parts from nameplates, seal dimensions, and materials to ensure exact replacement fit.'
  },
  {
    id: 'art-8',
    slug: 'why-local-pump-assembly-matters',
    title: 'Why Local Pump Assembly Is a Game Changer for Egyptian Projects',
    category: 'Local Assembly & Localization',
    readTime: '6 min read',
    publishDate: '2024-06-05',
    author: 'ZAD Engineering Team',
    excerpt: 'How localized pump skid assembly in Egypt shortens lead times, slashes logistical risk, and accommodates custom engineering configurations.',
    takeaways: [
      'Overseas pump package lead times often take 12 to 20 weeks; local assembly cuts this to days or weeks.',
      'Skid dimensions, pipe connections, and control panels can be tailored to tight plant room dimensions.',
      'Local assembly builds national engineering capability and ensures rapid post-sales lifecycle support.'
    ],
    content: `Modern construction, infrastructure, and industrial projects in Egypt operate under rigorous timelines and volatile global supply chains. Importing fully assembled pump skids from abroad introduces severe delivery uncertainties, shipping delays, and foreign exchange exposure.

### The Benefits of Local Assembly
Established in 2020 as a subsidiary of Kayan for Import, ZAD recognized the vital strategic need to localize pump assembly and engineering support in Egypt.

1. **Drastically Shorter Delivery Times:** While importing complete skid systems from overseas typically demands 12 to 20 weeks, local assembly enables systems to be configured and tested in a fraction of that time.
2. **Customized Engineering Flexibility:** Site plant rooms often have awkward dimensions, non-standard riser heights, or specific electrical panel orientations. Local assembly allows baseplates, header manifolds, and control layouts to be tailored to site constraints.
3. **Pre-Commissioned Factory Quality:** Assembling locally does not mean compromising on quality. Every ZAD skid undergoes rigorous dimensional inspection, hydrostatic pressure testing, electrical verification, and laser alignment before dispatch.
4. **Lifecycle Accountability:** The engineers who assemble and test the system locally are the same specialists who provide commissioning, warranty support, and long-term maintenance.`,
    seo_title: 'Why Local Pump Assembly Matters in Egypt | ZAD',
    seo_description: 'Understand how local pump assembly in Egypt provides shorter lead times, customized skid design, and dependable electromechanical lifecycle support.'
  }
];
