import { Service } from './types';
import commissioningImage from '@/assets/commissioning.jpg';
import laserImage from '@/assets/laser-alignment.jpg';
import warehouseImage from '@/assets/warehouse.jpg';
import heroImage from '@/assets/hero-image.jpg';

export const servicesData: Service[] = [
  {
    id: 'srv-1',
    slug: 'commissioning',
    title: 'Commissioning & Start-Up',
    short_description: 'Professional commissioning and start-up support to ensure pump systems are installed, verified, and prepared for reliable operation.',
    content: 'Professional commissioning and start-up procedures are essential to transition newly installed pump equipment into dependable, long-term service. ZAD engineers conduct meticulous pre-commissioning checks, electrical verification, rotational direction checks, hydraulic verification, and baseline diagnostic documentation. Adhering to standard installation, operation, and maintenance guidelines, we verify that all operating parameters conform strictly to design requirements before handover.',
    iconName: 'Settings',
    heroImage: commissioningImage,
    activities: [
      'Pre-start mechanical and electrical verification',
      'Shaft alignment inspection and verification',
      'Rotational direction and phase sequence checks',
      'Operating pressure, flow rate, and head verification',
      'Vibration and temperature baseline logging',
      'Control panel and automation interlock testing',
      'Formal commissioning documentation and handover records'
    ],
    applications: [
      'Commercial office complexes and shopping malls',
      'High-rise residential pressure booster systems',
      'Industrial process water and cooling loops',
      'Municipal water distribution pumping stations',
      'HVAC chilled and condenser water installations'
    ],
    benefits: [
      'Protects equipment manufacturer warranties through verified startup',
      'Identifies and corrects installation discrepancies prior to commissioning',
      'Minimizes initial startup stress on mechanical seals and bearings',
      'Provides accurate baseline operating data for future predictive maintenance'
    ],
    faqs: [
      {
        question: 'Why is professional commissioning critical for pump systems?',
        answer: 'Commissioning verifies that hydraulic, electrical, and mechanical parameters match the design specifications. Improper startup often causes premature mechanical seal failure, bearing damage, or electrical overload.'
      },
      {
        question: 'What documentation is provided after commissioning?',
        answer: 'ZAD delivers a comprehensive commissioning certificate and technical report detailing baseline pressures, motor currents, vibration levels, operating temperatures, and control setpoints.'
      }
    ],
    seo_title: 'Pump Commissioning & Start-Up Services Egypt | ZAD',
    seo_description: 'Professional pump commissioning and start-up services across Egypt. Mechanical verification, electrical checks, laser alignment, and full handover documentation.',
    featured: true
  },
  {
    id: 'srv-2',
    slug: 'maintenance-repair',
    title: 'Maintenance & Repair',
    short_description: 'Preventive and corrective electromechanical maintenance designed to address equipment issues, minimize downtime, and maintain system performance.',
    content: 'Pump systems operate under constant mechanical, thermal, and hydraulic stresses. ZAD provides structured preventive maintenance programs and skilled overhaul repairs for pumps, motors, and control assemblies. Our engineering technicians diagnose root causes of performance decay, replace worn components with genuine parts, and restore units to their optimal operating curve.',
    iconName: 'Wrench',
    heroImage: warehouseImage,
    activities: [
      'Scheduled preventive maintenance inspections',
      'Mechanical seal and packing replacement',
      'Bearing replacement and precision lubrication',
      'Impeller inspection, clearance adjustment, and wear ring replacement',
      'Motor winding insulation and resistance testing',
      'Coupling inspection and elastomeric insert replacement',
      'Workshop overhaul and dynamic balancing'
    ],
    applications: [
      'HVAC circulation and condenser pumps',
      'Booster pump sets in commercial and residential towers',
      'Industrial process fluid and transfer systems',
      'Drainage and sump pump stations'
    ],
    benefits: [
      'Reduces risk of sudden catastrophic equipment failure',
      'Maintains hydraulic efficiency and minimizes energy consumption',
      'Extends mean time between failures (MTBF)',
      'Guarantees restoration using genuine replacement components'
    ],
    faqs: [
      {
        question: 'What is the difference between preventive and corrective maintenance?',
        answer: 'Preventive maintenance involves scheduled inspections, lubrication, and consumable replacements to avoid failures. Corrective maintenance diagnoses and repairs faults after an operational issue or failure has occurred.'
      },
      {
        question: 'Can repairs be executed on-site or do pumps need workshop overhaul?',
        answer: 'Routine repairs like seal replacement, motor adjustments, and alignment are executed on-site. Complex overhauls, major machining, or re-winding are handled in our equipped technical facilities.'
      }
    ],
    seo_title: 'Pump Maintenance & Repair Services in Egypt | ZAD',
    seo_description: 'Reliable preventive and corrective maintenance for pumps in Egypt. Mechanical seal replacement, bearing overhauls, motor testing, and emergency repairs.',
    featured: true
  },
  {
    id: 'srv-3',
    slug: 'inspection',
    title: 'Pump Inspection & Diagnostics',
    short_description: 'Technical inspection to identify potential mechanical and operational issues before they develop into larger failures.',
    content: 'Unplanned downtime is costly and disruptive. ZAD utilizes specialized diagnostic instruments including laser shaft alignment equipment, infrared thermal imagers, and digital tachometers to evaluate pump health without invasive dismantling. Our diagnostic engineers assess operating temperatures, rotational speed consistency, alignment tolerances, and hydraulic stability to detect early degradation patterns.',
    iconName: 'Shield',
    heroImage: laserImage,
    activities: [
      'Shaft alignment evaluation with precision laser tools',
      'Infrared thermal scanning of bearings, casings, and electrical panels',
      'Rotational speed verification via digital optical tachometer',
      'Visual hydraulic inspection for cavitation pitting and corrosion',
      'Operating pressure differential and flow curve verification',
      'Detailed condition evaluation report with actionable recommendations'
    ],
    applications: [
      'Critical facility chiller and boiler feed pumps',
      'Continuous-duty municipal and industrial water networks',
      'Pre-purchase or pre-commissioning asset assessments',
      'Post-repair quality verification checks'
    ],
    benefits: [
      'Detects underlying faults early before catastrophic secondary damage',
      'Enables planned scheduled repairs instead of costly emergency shutdowns',
      'Verifies compliance with equipment installation tolerances',
      'Provides clear engineering data to optimize asset lifecycle budgets'
    ],
    faqs: [
      {
        question: 'How does non-invasive diagnostic inspection save operational costs?',
        answer: 'By identifying shaft misalignment or abnormal thermal friction early, operators can rectify minor issues in minutes rather than replacing destroyed impellers, bearings, or burned-out motors later.'
      },
      {
        question: 'Which specialized diagnostic tools does ZAD deploy?',
        answer: 'We utilize SKF precision laser alignment tools, calibrated infrared thermometers, and digital tachometers operated by qualified technicians.'
      }
    ],
    seo_title: 'Technical Pump Inspection & Diagnostics Egypt | ZAD',
    seo_description: 'Advanced diagnostic inspection for pump systems in Egypt. Laser alignment, infrared thermal scanning, tachometer speed checks, and failure prevention.',
    featured: true
  },
  {
    id: 'srv-4',
    slug: 'local-assembly',
    title: 'Local Pump Assembly',
    short_description: 'Local assembly capabilities that support shorter lead times, reduced logistical complexity, and greater flexibility for project requirements.',
    content: 'Meeting tight project deadlines and tailored engineering specifications requires agile local manufacturing capabilities. Established in 2020 as a subsidiary of Kayan for Import, ZAD operates dedicated assembly and testing infrastructure in Egypt. We configure, assemble, inspect, and test pump systems locally, reducing procurement lead times and adapting skids, piping, and controls to site-specific conditions.',
    iconName: 'Zap',
    heroImage: warehouseImage,
    activities: [
      'Pump skid and baseframe fabrication and mounting',
      'Electric motor and pump coupling assembly',
      'Precision laser alignment before dispatch',
      'Control panel integration, wiring, and automation logic setup',
      'Hydrostatic pressure testing and quality assurance checks',
      'Packaging, logistical coordination, and on-site delivery'
    ],
    applications: [
      'Multi-pump pressure booster systems for commercial developments',
      'HVAC packaged primary/secondary pumping skids',
      'Custom industrial fluid transfer skid packages',
      'Rapid-replacement pumping units for critical infrastructure'
    ],
    benefits: [
      'Dramatically shorter delivery lead times compared to overseas imports',
      'Direct customization of baseplates, manifolds, and control logic',
      'Simplified logistics and responsive engineering collaboration',
      'Rigorous quality control and pre-delivery inspection'
    ],
    faqs: [
      {
        question: 'What pump categories are assembled at ZAD local facilities?',
        answer: 'Our local capabilities encompass multi-pump booster sets, end-suction centrifugal assemblies, and split-case configurations engineered for local project demands.'
      },
      {
        question: 'What quality testing is conducted prior to site delivery?',
        answer: 'Every assembled unit undergoes structural integrity checks, electrical continuity testing, laser shaft alignment, and pressure verification.'
      }
    ],
    seo_title: 'Local Pump Assembly & Skid Fabrication in Egypt | ZAD',
    seo_description: 'Local pump assembly in Egypt supporting short delivery lead times, customized booster sets, split-case skids, and rigorous quality inspection.',
    featured: true
  },
  {
    id: 'srv-5',
    slug: 'booster-sets',
    title: 'Booster Set Services',
    short_description: 'Comprehensive engineering services for multi-pump booster systems covering fault finding, repair, upgrades, and pressure optimization.',
    content: 'Multi-pump booster sets maintain steady water pressure across tall commercial structures, residential complexes, and hospital facilities. ZAD specializes in booster system engineering, addressing pressure fluctuations, variable frequency drive (VFD) inverter calibration, pressure vessel maintenance, manifold repairs, and complete control system retrofits.',
    iconName: 'Gauge',
    heroImage: heroImage,
    activities: [
      'Multi-pump pressure balancing and staging calibration',
      'Variable speed drive (VFD) inverter programming and troubleshooting',
      'Expansion tank bladder inspection and pre-charge pressure verification',
      'Mechanical seal and check valve overhauls',
      'Pressure transducer testing and calibration',
      'Complete control panel modernization and retrofit'
    ],
    applications: [
      'High-rise residential and mixed-use towers',
      'Hospital and healthcare sanitary water networks',
      'Hotels and resort potable water distribution',
      'Commercial office parks and shopping centers'
    ],
    benefits: [
      'Ensures steady pressure during high-demand peak hours',
      'Prevents water hammer and hydraulic shock on building piping',
      'Optimizes motor staging to reduce overall electrical power draw',
      'Restores automated redundancy so backup pumps engage seamlessly'
    ],
    faqs: [
      {
        question: 'Why does my booster system fluctuate in pressure or cycle rapidly?',
        answer: 'Rapid cycling usually stems from depleted pre-charge pressure in the expansion tank, faulty pressure transmitters, or misconfigured VFD ramp parameters.'
      },
      {
        question: 'Can ZAD upgrade an older fixed-speed booster set to VFD control?',
        answer: 'Yes, we design and install modern inverter control panels that convert older fixed-speed booster sets to smooth variable-speed operation.'
      }
    ],
    seo_title: 'Booster Pump System Services in Egypt | ZAD',
    seo_description: 'Specialized booster pump maintenance, VFD inverter tuning, pressure vessel charging, and repair services for commercial and residential facilities in Egypt.'
  },
  {
    id: 'srv-6',
    slug: 'chiller-pumps',
    title: 'Chiller Pump Services',
    short_description: 'Specialized services covering fault finding, installation, commissioning, energy assessment, and control upgrades for HVAC systems.',
    content: 'HVAC chilled water systems rely on continuous, balanced flow through chillers, cooling towers, and air handling units. ZAD delivers specialized chiller pump services ensuring correct hydraulic balance, minimal vibration transmission, proper thermal insulation protection, and seamless integration with building automation systems.',
    iconName: 'ThermometerSun',
    heroImage: commissioningImage,
    activities: [
      'Primary and secondary chilled water pump servicing',
      'Condenser water pump inspection and descaling',
      'Laser alignment to prevent vibration transmission into building structures',
      'Vibration isolator and inertia base inspection',
      'Flow balance and differential pressure verification',
      'Mechanical seal replacement with high-durability silicon carbide faces'
    ],
    applications: [
      'District cooling plants and central chiller facilities',
      'Data centers and telecom equipment cooling facilities',
      'Commercial shopping mall HVAC circulation',
      'Industrial process cooling loops'
    ],
    benefits: [
      'Maintains accurate delta-T across chillers for peak refrigeration efficiency',
      'Eliminates harmful vibration and structural noise propagation',
      'Prevents costly chiller tripping caused by unexpected water flow interruption',
      'Extends operating lifespan of heavy industrial HVAC circulation equipment'
    ],
    faqs: [
      {
        question: 'How does pump alignment impact chiller room vibration?',
        answer: 'Misaligned pump-motor couplings generate strong cyclic forces that resonate through pipe headers and building slabs. Laser alignment reduces vibration to within ISO standards.'
      }
    ],
    seo_title: 'Chiller & HVAC Pump Services in Egypt | ZAD',
    seo_description: 'Precision engineering services for chilled water and condenser pumps in Egypt. Laser alignment, flow optimization, seal replacement, and emergency support.'
  },
  {
    id: 'srv-7',
    slug: 'submersible-pumps',
    title: 'Submersible Pump Services',
    short_description: 'Technical support for submersible pump applications, including inspection, troubleshooting, overhaul, and station maintenance.',
    content: 'Submersible pumps operate submerged in demanding wastewater, sewage, stormwater, and deep-well environments. ZAD provides comprehensive technical support including wet-well inspections, guide rail and auto-coupling checks, motor moisture sensor diagnostics, cable seal integrity testing, and non-clog impeller overhauls.',
    iconName: 'Package',
    heroImage: warehouseImage,
    activities: [
      'Submersible sewage and drainage pump overhaul',
      'Motor insulation (megger) and moisture sensor evaluation',
      'Double mechanical seal replacement and oil chamber inspection',
      'Non-clog and cutter impeller repair and dynamic balancing',
      'Guide rail, bracket, and duckfoot auto-coupling servicing',
      'Submersible level float and ultrasonic sensor troubleshooting'
    ],
    applications: [
      'Basement sewage and wastewater lifting stations',
      'Stormwater retention and flood mitigation pumping',
      'Municipal drainage and lift stations',
      'Industrial effluent and wastewater treatment plants'
    ],
    benefits: [
      'Prevents catastrophic basement flooding and sewage overflows',
      'Detects moisture ingress before stator insulation burnout occurs',
      'Restores hydraulic cutting and non-clog pumping capability',
      'Improves reliability of automated level-controlled pump cycling'
    ],
    faqs: [
      {
        question: 'How often should submersible sewage pumps receive maintenance?',
        answer: 'Submersible wastewater pumps should be inspected at least semi-annually to inspect mechanical seal oil chambers, cable integrity, and impeller clearance.'
      }
    ],
    seo_title: 'Submersible Pump Maintenance & Repair Egypt | ZAD',
    seo_description: 'Complete submersible pump services in Egypt. Sewage lift stations, stormwater drainage, moisture sensor diagnostics, seal replacement, and workshop overhaul.'
  },
  {
    id: 'srv-8',
    slug: 'emergency-support',
    title: '24/7 Emergency Support',
    short_description: 'Responsive technical support for unexpected pump breakdowns and critical electromechanical failures.',
    content: 'When a critical water supply, chiller loop, or sewage station fails, immediate action is required to prevent business interruption, flooding, or process shutdown. ZAD maintains emergency technical dispatch capabilities to assist clients with rapid fault isolation, bypass operations, emergency component replacement, and system restoration.',
    iconName: 'Clock',
    heroImage: heroImage,
    activities: [
      'Emergency response dispatch for mission-critical failures',
      'Rapid on-site electrical and hydraulic diagnostics',
      'Temporary bypass and emergency pump configuration',
      'Expedited mechanical seal and coupling replacement',
      'On-site motor evaluation and emergency control re-wiring',
      'Root-cause failure analysis after emergency stabilization'
    ],
    applications: [
      'Hospital and critical healthcare water continuity',
      'Data center chilled water flow failures',
      'Basement stormwater and sewage overflow prevention',
      'Industrial manufacturing process cooling interruptions'
    ],
    benefits: [
      'Rapid engineering mobilization to minimize plant downtime',
      'Experienced electromechanical specialists equipped with diagnostic tools',
      'Direct access to our genuine spare parts inventory',
      'Systematic restoration that prioritizes long-term equipment safety'
    ],
    faqs: [
      {
        question: 'How do I request emergency pump assistance from ZAD?',
        answer: 'You can contact our emergency dispatch team at +20 2 3865 4079 or submit an urgent request through our website Request Service page with the Emergency option selected.'
      }
    ],
    seo_title: '24/7 Emergency Pump Support in Egypt | ZAD',
    seo_description: '24/7 emergency technical support for pump failures across Egypt. Fast response, expert diagnostic engineers, and genuine spare parts mobilization.',
    featured: true
  },
  {
    id: 'srv-9',
    slug: 'spare-parts',
    title: 'Genuine Spare Parts',
    short_description: 'Genuine spare-parts support backed by technical guidance to help reduce replacement delays and equipment downtime.',
    content: 'Equipment reliability relies upon installing the exact replacement components engineered for specific hydraulic pressures, speeds, and temperatures. ZAD maintains an extensive inventory of genuine spare parts including mechanical seals, bearings, wear rings, impellers, shafts, O-rings, and control components. Our engineering team assists with equipment plate identification to ensure 100% component compatibility.',
    iconName: 'Shield',
    heroImage: warehouseImage,
    activities: [
      'Nameplate and pump model cross-referencing',
      'Supply of genuine mechanical seals in diverse face materials (SiC, TC, Carbon)',
      'Precision bearings and lip seals',
      'OEM replacement impellers, diffusers, and wear rings',
      'Motor coupling inserts, sleeves, and hardware',
      'Control panel contactors, relays, transducers, and inverters'
    ],
    applications: [
      'Planned preventive maintenance overhauls',
      'Facility engineering spare-parts inventory replenishment',
      'Rapid emergency breakdown replacement',
      'Modernization and retrofit projects'
    ],
    benefits: [
      'Guarantees exact dimensional fit and material compatibility',
      'Avoids premature failure associated with counterfeit or inferior parts',
      'Reduces delivery wait times through local inventory stocks',
      'Backed by technical identification guidance from experienced engineers'
    ],
    faqs: [
      {
        question: 'What information is needed to identify the correct spare part?',
        answer: 'A photo of the equipment nameplate showing pump model, serial number, and head/flow ratings, alongside a description or photo of the part to replace.'
      }
    ],
    seo_title: 'Genuine Pump Spare Parts in Egypt | ZAD',
    seo_description: 'Genuine pump spare parts supply in Egypt. Mechanical seals, bearings, impellers, wear rings, and technical identification support.'
  }
];
