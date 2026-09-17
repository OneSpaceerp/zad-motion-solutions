import { Solution } from './types';
import commissioningImage from '@/assets/commissioning.jpg';
import laserImage from '@/assets/laser-alignment.jpg';
import warehouseImage from '@/assets/warehouse.jpg';
import heroImage from '@/assets/hero-image.jpg';

export const solutionsData: Solution[] = [
  {
    id: 'sol-1',
    slug: 'booster-sets',
    title: 'Booster Sets',
    short_description: 'Engineered multi-pump pressure boosting solutions for high-rise commercial buildings, residential compounds, and industrial water networks.',
    content: 'Potable water supply in modern multistory infrastructure requires stable, energy-efficient pressure control regardless of fluctuating consumer demand. ZAD designs, configures, assembles, and maintains multi-pump booster sets equipped with intelligent variable frequency drives (VFD). Our booster systems maintain constant discharge pressure, prevent hydraulic shock, and distribute runtime evenly across pump units to maximize operating lifespan.',
    iconName: 'Gauge',
    heroImage: heroImage,
    scopeOfWork: [
      'Custom manifold design and skid fabrication',
      'Multi-pump parallel arrangement (2 to 6 pumps)',
      'VFD inverter control panels with cascade and master/follower logic',
      'Diaphragm pressure tank sizing and pre-charge verification',
      'Vibration damping baseframes and flexible pipe connectors',
      'Comprehensive pressure transducer calibration and commissioning'
    ],
    diagnosticApproach: [
      'Dynamic pressure transient logging to detect water hammer',
      'VFD inverter error log analysis and parameter optimization',
      'Expansion tank bladder integrity and air pre-charge measurement',
      'Pump mechanical seal and non-return check valve leakage testing',
      'Electrical motor load balancing across multi-pump stages'
    ],
    typicalApplications: [
      'High-rise commercial office towers and corporate headquarters',
      'Gated residential compounds and master-planned communities',
      'Hospitals and healthcare campuses requiring uninterrupted pressure',
      'Hotels, resorts, and high-demand recreational developments'
    ],
    keyFeatures: [
      'Variable speed continuous pressure regulation',
      'Automated rotational duty alternation across pumps',
      'Integrated dry-run protection and phase failure safeguards',
      'Compact footprint assembled locally for rapid site integration'
    ],
    seo_title: 'Multi-Pump Booster Sets Egypt | ZAD Electromechanical Services',
    seo_description: 'Engineered water pressure booster sets in Egypt. Multi-pump configurations, VFD inverter control, local assembly, and 24/7 technical service support.'
  },
  {
    id: 'sol-2',
    slug: 'chiller-pumps',
    title: 'Chiller Pump Systems',
    short_description: 'High-efficiency primary, secondary, and condenser pumping systems engineered for central HVAC and industrial process cooling loops.',
    content: 'Chilled water circulation is the lifeblood of large commercial HVAC systems and industrial thermal processes. Inadequate flow or unbalanced pressure differential directly impairs chiller efficiency and can trigger emergency compressor shutdowns. ZAD provides comprehensive chiller pump system solutions, encompassing pump selection, laser-aligned installation, differential pressure tuning, and predictive vibration monitoring.',
    iconName: 'ThermometerSun',
    heroImage: commissioningImage,
    scopeOfWork: [
      'Primary constant-flow and secondary variable-flow pump configurations',
      'Condenser water circulation pumping assemblies for cooling towers',
      'SKF laser alignment between heavy-duty motors and centrifugal pumps',
      'Inertia block and spring vibration isolator integration',
      'Differential pressure transmitter calibration for Delta-T optimization',
      'Mechanical seal retrofits with abrasion-resistant face materials'
    ],
    diagnosticApproach: [
      'Thermal imaging of bearing housings, motor casings, and drive couplings',
      'Precision laser alignment to eliminate coupling strain and pipe resonance',
      'Differential pressure and flow velocity cross-checking against chiller design tables',
      'Vibration amplitude measurement to protect structural slabs from noise transmission'
    ],
    typicalApplications: [
      'District cooling plants and central chiller energy centers',
      'Data centers and telecommunication mission-critical facilities',
      'Shopping malls, retail complexes, and exhibition centers',
      'Pharmaceutical, food processing, and industrial production plants'
    ],
    keyFeatures: [
      'Laser-aligned shaft coupling for whisper-quiet plant room operation',
      'High hydraulic efficiency impellers minimizing thermal plant energy costs',
      'Heavy-duty mechanical seals resilient to glycol and water treatments',
      'Full compatibility with building management systems (BMS)'
    ],
    seo_title: 'Chiller & HVAC Pump Systems Egypt | ZAD Electromechanical Services',
    seo_description: 'Chiller pump systems in Egypt. Primary, secondary, and condenser water circulation pumping solutions with laser alignment and energy optimization.'
  },
  {
    id: 'sol-3',
    slug: 'submersible-pumps',
    title: 'Submersible Pump Systems',
    short_description: 'Robust wastewater, sewage, and stormwater submersible pump systems designed for demanding drainage applications.',
    content: 'Submersible pumping environments demand rugged mechanical construction, reliable moisture sealing, and solid-handling hydraulic designs. ZAD delivers engineered submersible pump solutions for wastewater lift stations, basement sewage ejection, stormwater detention basins, and industrial drainage. Every station is engineered with automated dual-rail retrieval systems, dual mechanical seal chambers, and multi-tier float or ultrasonic level automation.',
    iconName: 'Package',
    heroImage: warehouseImage,
    scopeOfWork: [
      'Vortex, single-channel, and cutter impeller pump selection',
      'Dual guide rail systems with duckfoot auto-coupling pedestals',
      'Duplex and triplex alternating submersible control panels',
      'Moisture intrusion and thermal winding protector integration',
      'Heavy-duty check valves and non-slam gate valve manifolds',
      'Hazardous location (ATEX/explosion-proof) equipment sourcing'
    ],
    diagnosticApproach: [
      'Stator winding megohmmeter insulation resistance testing',
      'Seal leakage probe sensor continuity and dielectric oil verification',
      'Impeller wear clearance checks and cutting mechanism clearance adjustments',
      'Guide rail alignment check to ensure leak-free duckfoot seating'
    ],
    typicalApplications: [
      'Building basement drainage and sewage collection sumps',
      'Municipal stormwater pumping stations and retention ponds',
      'Industrial wastewater pre-treatment and effluent transfer',
      'Highway underpass drainage and stormwater mitigation'
    ],
    keyFeatures: [
      'Non-clog hydraulic impellers capable of handling large suspended solids',
      'Quick-release auto-coupling for inspection without basin dewatering',
      'Double mechanical seals with dedicated oil barrier chamber',
      'Automated alternation with redundant high-water alarm floats'
    ],
    seo_title: 'Submersible Pump Systems Egypt | ZAD Electromechanical Services',
    seo_description: 'Submersible wastewater and stormwater pump systems in Egypt. Sewage stations, auto-coupling guide rails, cutter pumps, and duplex control panels.'
  },
  {
    id: 'sol-4',
    slug: 'pump-systems',
    title: 'Pump Systems & Packaged Skids',
    short_description: 'Integrated electromechanical pumping packages, modular skids, and customized fluid handling systems assembled in Egypt.',
    content: 'Modular, pre-engineered pump skids reduce on-site installation time, eliminate contractor coordination delays, and guarantee factory-inspected quality. ZAD designs and manufactures custom pump skids tailored to project-specific hydraulic, dimensional, and environmental parameters. From compact utility water skids to complex multi-stage transfer stations, our local assembly unit delivers turnkey reliability.',
    iconName: 'Settings',
    heroImage: laserImage,
    scopeOfWork: [
      'Structural steel baseplate engineering and anti-corrosion coating',
      'End-suction, horizontal split-case, and multi-stage pump mounting',
      'Factory piping fabrication, flanged connections, and pressure testing',
      'Integrated electrical motor control center (MCC) packaging',
      'Pre-dispatch laser alignment and vibration characterization',
      'Comprehensive factory acceptance documentation'
    ],
    diagnosticApproach: [
      'Hydrostatic pressure testing of assembled manifolds at 1.5x working pressure',
      'Electrical continuity, phase balance, and insulation resistance checks',
      'Pre-delivery laser alignment to verify transport tolerance stability',
      'Simulated automation staging and safety shutdown interlock verification'
    ],
    typicalApplications: [
      'Municipal water transfer and raw water booster stations',
      'Industrial process water treatment and filtration skids',
      'Agricultural and landscape pressurized irrigation packages',
      'Commercial facility retrofit and rapid equipment replacement'
    ],
    keyFeatures: [
      'Factory assembled and pre-tested for rapid plug-and-play site startup',
      'Engineered to client dimensional constraints and room layout',
      'Local assembly ensures shorter lead times and direct technical support',
      'Robust industrial components built to withstand local operating environments'
    ],
    seo_title: 'Packaged Pump Systems & Modular Skids Egypt | ZAD',
    seo_description: 'Turnkey pump systems and packaged modular skids assembled in Egypt. Pre-tested, laser-aligned, and customized for commercial and industrial applications.'
  }
];
