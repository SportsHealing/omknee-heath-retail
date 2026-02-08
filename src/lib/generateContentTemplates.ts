/**
 * Content Templates PDF Generator
 * Pre-approved templates for social media, email campaigns, and product descriptions
 */

import { jsPDF } from "jspdf";

export const generateContentTemplates = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  // Brand colors
  const darkGreen = [30, 70, 50];
  const black = [20, 20, 20];
  const gray = [100, 100, 100];

  const addNewPage = () => {
    doc.addPage();
    y = margin;
  };

  const checkPageBreak = (needed: number) => {
    if (y + needed > pageHeight - margin) {
      addNewPage();
    }
  };

  const addSectionTitle = (title: string) => {
    checkPageBreak(20);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(darkGreen[0], darkGreen[1], darkGreen[2]);
    doc.text(title, margin, y);
    y += 10;
  };

  const addSubsection = (title: string) => {
    checkPageBreak(15);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(black[0], black[1], black[2]);
    doc.text(title, margin, y);
    y += 7;
  };

  const addParagraph = (text: string) => {
    checkPageBreak(20);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(gray[0], gray[1], gray[2]);
    const lines = doc.splitTextToSize(text, contentWidth);
    doc.text(lines, margin, y);
    y += lines.length * 5 + 5;
  };

  const addTemplateBox = (title: string, content: string, notes?: string) => {
    const lines = doc.splitTextToSize(content, contentWidth - 10);
    const boxHeight = lines.length * 5 + (notes ? 20 : 12);
    checkPageBreak(boxHeight + 15);

    // Title
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(darkGreen[0], darkGreen[1], darkGreen[2]);
    doc.text(title, margin, y);
    y += 6;

    // Box background
    doc.setFillColor(245, 248, 245);
    doc.setDrawColor(200, 210, 200);
    doc.rect(margin, y - 2, contentWidth, boxHeight, "FD");

    // Content
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(black[0], black[1], black[2]);
    doc.text(lines, margin + 5, y + 4);

    if (notes) {
      y += lines.length * 5 + 6;
      doc.setFontSize(9);
      doc.setFont("helvetica", "italic");
      doc.setTextColor(gray[0], gray[1], gray[2]);
      const noteLines = doc.splitTextToSize(`Note: ${notes}`, contentWidth - 10);
      doc.text(noteLines, margin + 5, y);
    }

    y += boxHeight + 8;
  };

  // === COVER PAGE ===
  doc.setFillColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.rect(0, 0, pageWidth, pageHeight, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(36);
  doc.setFont("helvetica", "bold");
  doc.text("OmKneeHealth", pageWidth / 2, pageHeight / 2 - 20, { align: "center" });

  doc.setFontSize(24);
  doc.setFont("helvetica", "normal");
  doc.text("Content Templates", pageWidth / 2, pageHeight / 2 + 10, { align: "center" });

  doc.setFontSize(14);
  doc.text("Pre-Approved Marketing Copy", pageWidth / 2, pageHeight / 2 + 25, { align: "center" });

  doc.setFontSize(12);
  doc.text("Internal Document", pageWidth / 2, pageHeight - 40, { align: "center" });

  const date = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
  });
  doc.text(date, pageWidth / 2, pageHeight - 30, { align: "center" });

  // === SECTION 1: SOCIAL MEDIA TEMPLATES ===
  addNewPage();

  addSectionTitle("1. Social Media Templates");

  addParagraph(
    "All social media content must adhere to UK/EU food supplement regulations. These templates have been pre-approved for use. Replace [bracketed text] with specific details as needed."
  );

  addSubsection("1.1 Instagram/Facebook Posts");

  addTemplateBox(
    "Educational Post — Knee Anatomy",
    "Did you know your knee is the largest joint in your body? It's an incredible structure that supports your movement every day. 🦵\n\nUnderstanding how your knees work is the first step to caring for them. Visit our Learn section to explore knee anatomy and joint health.\n\n#KneeHealth #JointCare #OmKneeHealth",
    "Always use educational framing. Never claim to treat or cure conditions."
  );

  addTemplateBox(
    "Product Introduction Post",
    "Introducing our signature joint support formula. 🌿\n\nCrafted with carefully selected ingredients including hydrolysed collagen, turmeric extract, and vitamin C — all chosen for their role in supporting normal cartilage function.*\n\nDiscover more at omkneehealth.com\n\n*Vitamin C contributes to normal collagen formation for the normal function of cartilage.\n\n#NaturalSupport #JointHealth #OmKneeHealth"
  );

  addTemplateBox(
    "Lifestyle/Movement Post",
    "Movement is medicine for your joints. 💚\n\nGentle, consistent activity helps maintain joint flexibility and supports overall wellbeing. Whether it's a morning walk or evening stretch — every step counts.\n\nWhat's your favourite way to stay active?\n\n#KeepMoving #JointCare #ActiveLiving"
  );

  addNewPage();

  addSubsection("1.2 LinkedIn Posts");

  addTemplateBox(
    "Company Mission Post",
    "At OmKneeHealth, we believe in a holistic approach to joint care.\n\nOur mission is to provide evidence-led guidance and quality supplements that support people in maintaining their joint health and mobility.\n\nWe combine clinical expertise with natural ingredients to create products that prioritise both efficacy and safety.\n\nLearn more about our approach: omkneehealth.com/about"
  );

  addTemplateBox(
    "Industry Insight Post",
    "The joint health supplement market continues to evolve, with growing consumer demand for transparency and quality.\n\nAt OmKneeHealth, we're committed to:\n• Sourcing ingredients from certified suppliers\n• Maintaining full traceability\n• Providing clear, honest information\n\nQuality and trust are the foundation of everything we do."
  );

  // === SECTION 2: EMAIL TEMPLATES ===
  addNewPage();
  addSectionTitle("2. Email Campaign Templates");

  addSubsection("2.1 Welcome Email");

  addTemplateBox(
    "Subject: Welcome to OmKneeHealth",
    "Dear [First Name],\n\nThank you for joining the OmKneeHealth community.\n\nWe're dedicated to supporting your joint health journey with evidence-based guidance and carefully formulated supplements.\n\nHere's what you can explore:\n• Our Learn section for educational resources on knee anatomy and care\n• Our Assessment tools to understand your joint health needs\n• Our curated product recommendations\n\nIf you have any questions, our team is here to help.\n\nWarm regards,\nThe OmKneeHealth Team"
  );

  addSubsection("2.2 Order Confirmation");

  addTemplateBox(
    "Subject: Your OmKneeHealth Order Confirmation",
    "Dear [First Name],\n\nThank you for your order. We're preparing it with care.\n\nOrder Details:\n[Order Number]\n[Product Name] x [Quantity]\n[Delivery Address]\n\nExpected delivery: [Date Range]\n\nFor usage guidance, please refer to the product packaging or visit our website.\n\nWith thanks,\nThe OmKneeHealth Team\n\nP.S. Remember, supplements are most effective as part of a balanced lifestyle."
  );

  addNewPage();

  addSubsection("2.3 Educational Newsletter");

  addTemplateBox(
    "Subject: Understanding Your Joint Health",
    "Dear [First Name],\n\nThis month, we're exploring the importance of cartilage in joint function.\n\nCartilage acts as a cushion between your bones, allowing smooth movement. Supporting its health through nutrition and gentle activity can help maintain your mobility.\n\nKey nutrients that contribute to normal cartilage function:\n• Vitamin C — supports collagen formation*\n• Manganese — contributes to connective tissue maintenance*\n\nExplore our full guide: [Link]\n\nTo your joint health,\nThe OmKneeHealth Team\n\n*EU-authorised health claims",
    "Always cite EU-authorised claims. Never make treatment claims."
  );

  // === SECTION 3: PRODUCT DESCRIPTIONS ===
  addNewPage();
  addSectionTitle("3. Product Description Templates");

  addSubsection("3.1 Marine Formula");

  addTemplateBox(
    "Short Description (for product cards)",
    "Premium joint support formula featuring marine collagen, turmeric extract, and vitamin C. Designed for those seeking comprehensive cartilage and joint care.*\n\n*Vitamin C contributes to normal collagen formation for the normal function of cartilage."
  );

  addTemplateBox(
    "Long Description (for product pages)",
    "OmKneeHealth Marine Formula\n\nOur signature joint support supplement combines carefully selected ingredients to support your cartilage and joint health.\n\nKey Ingredients:\n• Hydrolysed Marine Collagen (Type I & II) — 3,000mg\n• Turmeric Extract (95% curcuminoids) — 500mg\n• Boswellia Serrata Extract — 300mg\n• Vitamin C — 80mg (100% NRV)\n• Black Pepper Extract — 10mg\n\nVitamin C contributes to normal collagen formation for the normal function of cartilage.*\n\nDirections: Take 2 capsules daily with food.\n\nSuitable for: Adults seeking to support their joint health.\n\n*EU-authorised health claim"
  );

  addNewPage();

  addSubsection("3.2 Vegetarian Formula");

  addTemplateBox(
    "Short Description",
    "Plant-based joint support with vitamin C, turmeric, and ginger. Suitable for vegetarians seeking to maintain normal cartilage function.*\n\n*Vitamin C contributes to normal collagen formation for the normal function of cartilage."
  );

  addTemplateBox(
    "Long Description",
    "OmKneeHealth Vegetarian Formula\n\nA plant-based approach to joint support, formulated without animal-derived ingredients.\n\nKey Ingredients:\n• Turmeric Extract (95% curcuminoids) — 500mg\n• Boswellia Serrata Extract — 300mg\n• Ginger Root Extract — 200mg\n• Vitamin C (from Acerola) — 80mg (100% NRV)\n• Black Pepper Extract — 10mg\n\nVitamin C contributes to normal collagen formation for the normal function of cartilage.*\n\nDirections: Take 2 capsules daily with food.\n\nSuitable for: Vegetarians and those preferring plant-based supplements.\n\n*EU-authorised health claim"
  );

  // === SECTION 4: WEBSITE COPY ===
  addNewPage();
  addSectionTitle("4. Website Copy Templates");

  addSubsection("4.1 Homepage Hero");

  addTemplateBox(
    "Hero Headline Options",
    "Option A: \"Holistic Knee Care, Personalised\"\n\nOption B: \"Supporting Your Joint Health Journey\"\n\nOption C: \"Evidence-Led Joint Care\"",
    "Never use claims like 'cure', 'treat', 'heal', or 'fix'."
  );

  addSubsection("4.2 About Us Excerpt");

  addTemplateBox(
    "Company Introduction",
    "OmKneeHealth was founded with a clear mission: to provide thoughtful, evidence-based support for joint health.\n\nWe combine clinical expertise with quality natural ingredients to create supplements that prioritise both efficacy and safety. Our approach is holistic — we believe that caring for your joints involves nutrition, movement, and understanding.\n\nEvery product we create reflects our commitment to transparency, quality, and your wellbeing."
  );

  addSubsection("4.3 CTA Buttons");

  addTemplateBox(
    "Approved Call-to-Action Text",
    "• \"Explore Our Formula\"\n• \"Learn More\"\n• \"Discover Our Approach\"\n• \"Take the Assessment\"\n• \"View Ingredients\"\n• \"Start Your Journey\"",
    "Avoid aggressive sales language like 'Buy Now', 'Limited Offer', 'Don't Miss Out'."
  );

  // === SECTION 5: DISCLAIMER TEMPLATES ===
  addNewPage();
  addSectionTitle("5. Required Disclaimers");

  addParagraph(
    "These disclaimers must be included in all marketing materials where applicable."
  );

  addTemplateBox(
    "Product Disclaimer (Required on all product pages)",
    "Food supplements should not be used as a substitute for a varied and balanced diet and healthy lifestyle. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place. If you are pregnant, breastfeeding, taking medication, or have a medical condition, consult your healthcare provider before use."
  );

  addTemplateBox(
    "Health Claims Disclaimer",
    "*[Claim] is an EU-authorised health claim under Regulation (EC) No 1924/2006."
  );

  addTemplateBox(
    "Assessment Tool Disclaimer",
    "This assessment is for informational purposes only and does not constitute medical advice. It is not intended to diagnose, treat, or replace consultation with a qualified healthcare professional. If you have concerns about your joint health, please consult your doctor or physiotherapist."
  );

  addTemplateBox(
    "Testimonial Disclaimer (if used)",
    "Individual experiences may vary. These statements reflect personal opinions and do not represent typical results. This product is not intended to diagnose, treat, cure, or prevent any disease."
  );

  // === FOOTER ===
  y = pageHeight - 25;
  doc.setDrawColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;
  doc.setFontSize(9);
  doc.setTextColor(gray[0], gray[1], gray[2]);
  doc.text("OmKneeHealth Content Templates — Internal Use Only", margin, y);
  doc.text(`Generated: ${new Date().toLocaleDateString("en-GB")}`, pageWidth - margin, y, { align: "right" });

  // Save
  doc.save("OmKneeHealth-Content-Templates.pdf");
};
