/**
 * Centralized Leadership, Experience, & Education Data
 */
export const experienceData = [
  {
    number: "01",
    organization: "OFFICE OF ACADEMIC AFFAIRS",
    institution: "Chandigarh University",
    rolePrimary: "Central Team",
    roleSecondary: "Social Media Executive",
    kicker: "ORGANIZATIONAL ENGAGEMENT",
    focus: [
      "Social media strategy & institutional digital engagement",
      "Digital content production & creative curation",
      "Official promotional event posters & identity systems",
      "Institutional communication material & executive releases",
      "Campus event promotion & multi-format creative media",
      "Narrative continuity & visual branding architecture"
    ]
  },
  {
    number: "02",
    organization: "VIPROTECH DIGITAL",
    institution: "Industrial Training",
    rolePrimary: "CYBER SECURITY",
    kicker: "INDUSTRIAL TRAINING",
    focus: [
      "Industrial cybersecurity methodologies & network security inspection",
      "Vulnerability assessments & secure development posture",
      "System hardening, threat analysis & architectural integrity"
    ]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Engineering (BE)",
    field: "Computer Science and Engineering",
    institution: "Chandigarh University",
    timeline: "Expected completion: 2028",
    badge: "Undergraduate"
  },
  {
    degree: "Senior Secondary (12th)",
    field: "Science Stream",
    institution: "Anglo Sanskrit Model Senior Secondary School",
    timeline: "Completed: 2024",
    badge: "Class XII"
  },
  {
    degree: "Secondary School (10th)",
    field: "General Curriculum",
    institution: "Anglo Sanskrit Model Senior Secondary School",
    timeline: "Completed: 2022",
    badge: "Class X"
  }
];

export const creativeDisciplines = [
  {
    title: "Filmmaking",
    kicker: "01 / DIRECTING",
    desc: "Directing and structuring narrative sequences, concept films, and visual pacing from storyboard to export."
  },
  {
    title: "Cinematography",
    kicker: "02 / VISUALS",
    desc: "Camera movement, dynamic framing, lighting composition, and intentional visual rhythm."
  },
  {
    title: "Photography",
    kicker: "03 / CAPTURE",
    desc: "Capturing high-contrast environmental portraits, moody lighting, and decisive moments."
  },
  {
    title: "Content Creation",
    kicker: "04 / MEDIA",
    desc: "Developing cinematic short-form and long-form visual assets tailored for modern digital ecosystems."
  },
  {
    title: "Social Media Strategy",
    kicker: "05 / ENGAGEMENT",
    desc: "Curating narrative continuity, engagement architecture, and cohesive aesthetics across platforms."
  },
  {
    title: "Editing & Post-Production",
    kicker: "06 / ASSEMBLY",
    desc: "Precision timing, color grading, sound design, and visual effects integration."
  },
  {
    title: "Branding",
    kicker: "07 / IDENTITY",
    desc: "Crafting memorable visual identities, typography lockups, and design systems for organizations."
  },
  {
    title: "Digital Marketing",
    kicker: "08 / REACH",
    desc: "Translating creative media into audience reach, campaign momentum, and institutional visibility."
  }
];

if (typeof window !== "undefined") {
  window.experienceData = experienceData;
  window.educationData = educationData;
  window.creativeDisciplines = creativeDisciplines;
}
