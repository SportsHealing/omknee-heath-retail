/**
 * Product Knowledge Base PDF Generator
 * Detailed ingredient information, sourcing, and formulation documentation
 */

import { jsPDF } from "jspdf";

export const generateProductKnowledgeBase = () => {
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

  const addBulletList = (items: string[]) => {
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(gray[0], gray[1], gray[2]);
    items.forEach((item) => {
      checkPageBreak(8);
      const lines = doc.splitTextToSize(`• ${item}`, contentWidth - 5);
      doc.text(lines, margin + 5, y);
      y += lines.length * 5 + 2;
    });
    y += 3;
  };

  const addIngredientCard = (name: string, latinName: string, details: { label: string; value: string }[]) => {
    checkPageBreak(50);
    
    // Card background
    doc.setFillColor(245, 248, 245);
    doc.roundedRect(margin, y - 3, contentWidth, 45, 3, 3, "F");
    
    // Ingredient name
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(darkGreen[0], darkGreen[1], darkGreen[2]);
    doc.text(name, margin + 5, y + 5);
    
    // Latin name
    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(gray[0], gray[1], gray[2]);
    doc.text(latinName, margin + 5, y + 12);
    
    // Details
    let detailY = y + 20;
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    details.forEach((detail, index) => {
      const xPos = margin + 5 + (index % 2) * 85;
      if (index === 2) detailY += 10;
      doc.setFont("helvetica", "bold");
      doc.text(`${detail.label}:`, xPos, detailY);
      doc.setFont("helvetica", "normal");
      doc.text(detail.value, xPos + 30, detailY);
    });
    
    y += 52;
  };

  // === COVER PAGE ===
  doc.setFillColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.rect(0, 0, pageWidth, pageHeight, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(36);
  doc.setFont("helvetica", "bold");
  doc.text("OmKneeHealth", pageWidth / 2, pageHeight / 2 - 30, { align: "center" });

  doc.setFontSize(24);
  doc.setFont("helvetica", "normal");
  doc.text("Product Knowledge Base", pageWidth / 2, pageHeight / 2, { align: "center" });

  doc.setFontSize(14);
  doc.text("Ingredient Information & Formulation", pageWidth / 2, pageHeight / 2 + 15, { align: "center" });

  doc.setFontSize(12);
  doc.text("Internal Document — Confidential", pageWidth / 2, pageHeight - 40, { align: "center" });

  const date = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
  });
  doc.text(date, pageWidth / 2, pageHeight - 30, { align: "center" });

  // === SECTION 1: PRODUCT OVERVIEW ===
  addNewPage();

  addSectionTitle("1. Product Overview");

  addSubsection("1.1 Joint Health Supplement");
  addParagraph(
    "OmKneeHealth Joint Health Supplement is a premium food supplement formulated to support joint health and mobility. The product is designed for adults seeking nutritional support for their joints, particularly the knees."
  );

  addSubsection("1.2 Product Format");
  addBulletList([
    "Format: Powder sachets for oral consumption",
    "Serving size: One sachet daily",
    "Packaging: Individual sachets in branded pouches",
    "Storage: Cool, dry place away from direct sunlight",
    "Shelf life: 24 months from manufacture date",
  ]);

  addSubsection("1.3 Regulatory Classification");
  addParagraph(
    "This product is classified as a food supplement under UK Food Supplements Regulations 2003 and EU Regulation (EC) No 1924/2006. It is not a medicinal product and no therapeutic claims are made."
  );

  // === SECTION 2: INGREDIENT PROFILES ===
  addSectionTitle("2. Core Ingredient Profiles");

  addIngredientCard(
    "Hydrolysed Collagen",
    "Type I & III Collagen Peptides",
    [
      { label: "Source", value: "Bovine (grass-fed)" },
      { label: "Dose", value: "5,000 mg" },
      { label: "Form", value: "Hydrolysed peptides" },
      { label: "Origin", value: "EU certified" },
    ]
  );

  addParagraph(
    "Hydrolysed collagen provides amino acids including glycine, proline, and hydroxyproline. These are building blocks for the body's own collagen production. Collagen is a major structural protein found in connective tissues including cartilage, tendons, and ligaments."
  );

  addIngredientCard(
    "Turmeric Extract",
    "Curcuma longa",
    [
      { label: "Source", value: "Root extract" },
      { label: "Dose", value: "500 mg" },
      { label: "Curcuminoids", value: "95% standardised" },
      { label: "Origin", value: "India" },
    ]
  );

  addParagraph(
    "Turmeric has been used in traditional medicine for centuries. The active compounds, curcuminoids, are the subject of ongoing scientific research. Our extract is standardised to 95% curcuminoids for consistency."
  );

  addNewPage();

  addIngredientCard(
    "Boswellia Serrata",
    "Boswellia serrata (Indian Frankincense)",
    [
      { label: "Source", value: "Gum resin extract" },
      { label: "Dose", value: "250 mg" },
      { label: "AKBA", value: "30% standardised" },
      { label: "Origin", value: "India" },
    ]
  );

  addParagraph(
    "Boswellia serrata resin has a long history in Ayurvedic tradition. The extract is standardised to 30% AKBA (acetyl-11-keto-β-boswellic acid), considered the key bioactive compound."
  );

  addIngredientCard(
    "Vitamin C",
    "Ascorbic Acid",
    [
      { label: "Source", value: "Synthetic" },
      { label: "Dose", value: "80 mg (100% NRV)" },
      { label: "Form", value: "Ascorbic acid" },
      { label: "Function", value: "EFSA approved" },
    ]
  );

  addParagraph(
    "Vitamin C contributes to normal collagen formation for the normal function of cartilage (EFSA authorised health claim). This is one of the permitted health claims under EU Regulation 432/2012."
  );

  addIngredientCard(
    "Ginger Extract",
    "Zingiber officinale",
    [
      { label: "Source", value: "Root extract" },
      { label: "Dose", value: "100 mg" },
      { label: "Gingerols", value: "5% standardised" },
      { label: "Origin", value: "India" },
    ]
  );

  addParagraph(
    "Ginger has been used in traditional medicine across many cultures. Our extract is standardised to ensure consistent levels of gingerols, the characteristic bioactive compounds."
  );

  addIngredientCard(
    "Black Pepper Extract",
    "Piper nigrum (BioPerine®)",
    [
      { label: "Source", value: "Fruit extract" },
      { label: "Dose", value: "5 mg" },
      { label: "Piperine", value: "95% standardised" },
      { label: "Function", value: "Bioavailability" },
    ]
  );

  addParagraph(
    "Black pepper extract (piperine) is included to support the bioavailability of other ingredients, particularly curcumin. Research suggests piperine may enhance absorption of certain compounds."
  );

  // === SECTION 3: FORMULATION ===
  addNewPage();
  addSectionTitle("3. Formulation Details");

  addSubsection("3.1 Full Ingredient List");
  addParagraph("In order of weight:");
  addBulletList([
    "Hydrolysed Bovine Collagen (5,000 mg)",
    "Turmeric Extract (Curcuma longa) standardised to 95% curcuminoids (500 mg)",
    "Boswellia Serrata Extract standardised to 30% AKBA (250 mg)",
    "Ginger Extract (Zingiber officinale) standardised to 5% gingerols (100 mg)",
    "Vitamin C (Ascorbic Acid) (80 mg)",
    "Black Pepper Extract (Piper nigrum) standardised to 95% piperine (5 mg)",
    "Natural flavouring",
    "Citric acid",
    "Stevia leaf extract (sweetener)",
  ]);

  addSubsection("3.2 Allergen Information");
  addParagraph("Contains: None of the 14 major allergens.");
  addParagraph("Free from: Gluten, dairy, soy, nuts, eggs, fish, shellfish.");
  addParagraph(
    "Note: Manufactured in a facility that also handles products containing milk, soy, and gluten. Suitable for those following a gluten-free diet."
  );

  addSubsection("3.3 Dietary Suitability");
  addBulletList([
    "Not suitable for vegetarians or vegans (contains bovine collagen)",
    "Halal certified",
    "Free from artificial colours and preservatives",
    "No added sugar (sweetened with stevia)",
  ]);

  // === SECTION 4: SOURCING ===
  addSectionTitle("4. Sourcing & Quality");

  addSubsection("4.1 Supplier Standards");
  addParagraph("All ingredient suppliers must meet the following criteria:");
  addBulletList([
    "GMP (Good Manufacturing Practice) certification",
    "ISO 22000 food safety management",
    "Full traceability documentation",
    "Certificate of Analysis for each batch",
    "Heavy metal testing within EU limits",
    "Microbiological testing compliance",
  ]);

  addSubsection("4.2 Collagen Sourcing");
  addParagraph(
    "Our hydrolysed collagen is sourced from grass-fed, pasture-raised cattle from EU-approved farms. The collagen is extracted using enzymatic hydrolysis to produce small peptides (average molecular weight 2,000-5,000 Daltons) for optimal absorption."
  );

  addSubsection("4.3 Botanical Sourcing");
  addParagraph(
    "Turmeric, Boswellia, and Ginger are sourced from established suppliers in India with full supply chain traceability. Each batch undergoes identity testing and standardisation verification."
  );

  // === SECTION 5: MANUFACTURING ===
  addNewPage();
  addSectionTitle("5. Manufacturing");

  addSubsection("5.1 Production Facility");
  addParagraph("Product is manufactured in the United Kingdom at a facility holding:");
  addBulletList([
    "BRC Global Standard for Food Safety (Grade A)",
    "GMP certification",
    "MHRA registration",
    "Organic certification (for applicable products)",
  ]);

  addSubsection("5.2 Quality Control");
  addParagraph("Each batch undergoes:");
  addBulletList([
    "Raw material identity verification",
    "Potency testing for active ingredients",
    "Microbiological testing",
    "Heavy metal analysis",
    "Moisture content testing",
    "Visual and organoleptic inspection",
    "Weight uniformity testing",
    "Stability testing (accelerated and real-time)",
  ]);

  addSubsection("5.3 Batch Documentation");
  addParagraph(
    "Full batch records are maintained for each production run including: raw material certificates, in-process checks, finished product testing, and release documentation. Records are retained for 5 years beyond shelf life."
  );

  // === SECTION 6: USAGE ===
  addSectionTitle("6. Usage Guidelines");

  addSubsection("6.1 Recommended Use");
  addBulletList([
    "Adults: One sachet daily",
    "Mix with 200ml water or juice",
    "Best taken with food",
    "Allow 8-12 weeks for nutritional support to take effect",
  ]);

  addSubsection("6.2 Contraindications & Warnings");
  addBulletList([
    "Not suitable for children under 18",
    "Not suitable during pregnancy or breastfeeding",
    "Consult a healthcare professional if taking blood-thinning medication",
    "Consult a healthcare professional if you have a medical condition",
    "Do not exceed the recommended daily intake",
    "Food supplements should not replace a varied, balanced diet",
  ]);

  // === SECTION 7: CUSTOMER QUERIES ===
  addNewPage();
  addSectionTitle("7. Common Customer Queries");

  const faqs = [
    {
      q: "How long until I notice a difference?",
      a: "Nutritional support is gradual. We recommend consistent use for 8-12 weeks. Individual responses vary based on diet, lifestyle, and other factors.",
    },
    {
      q: "Can I take this with my medication?",
      a: "We recommend consulting your healthcare provider before combining any supplement with prescription medication, particularly blood thinners, diabetes medication, or immunosuppressants.",
    },
    {
      q: "Is the collagen from grass-fed cattle?",
      a: "Yes, our hydrolysed collagen is sourced exclusively from grass-fed, pasture-raised cattle from EU-certified farms.",
    },
    {
      q: "Why is there black pepper in the formula?",
      a: "Black pepper extract (piperine) is included to support the absorption and bioavailability of curcumin from turmeric.",
    },
    {
      q: "Is this product suitable for vegetarians?",
      a: "No, this product contains bovine collagen and is not suitable for vegetarians or vegans.",
    },
  ];

  faqs.forEach((faq) => {
    checkPageBreak(30);
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(black[0], black[1], black[2]);
    const qLines = doc.splitTextToSize(`Q: ${faq.q}`, contentWidth);
    doc.text(qLines, margin, y);
    y += qLines.length * 5 + 3;

    doc.setFont("helvetica", "normal");
    doc.setTextColor(gray[0], gray[1], gray[2]);
    const aLines = doc.splitTextToSize(`A: ${faq.a}`, contentWidth);
    doc.text(aLines, margin, y);
    y += aLines.length * 5 + 8;
  });

  // === FOOTER ===
  y = pageHeight - 25;
  doc.setDrawColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;
  doc.setFontSize(9);
  doc.setTextColor(gray[0], gray[1], gray[2]);
  doc.text("OmKneeHealth Product Knowledge Base — Internal Use Only", margin, y);
  doc.text(`Generated: ${new Date().toLocaleDateString("en-GB")}`, pageWidth - margin, y, { align: "right" });

  // Save
  doc.save("OmKneeHealth-Product-Knowledge-Base.pdf");
};
