/**
 * Brand Guidelines PDF Generator
 * Generates OmKneeHealth brand guidelines document
 */

import { jsPDF } from "jspdf";

export const generateBrandGuidelines = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  // Brand colors
  const darkGreen = [30, 70, 50];
  const lightGreen = [120, 160, 120];
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

  // === COVER PAGE ===
  doc.setFillColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.rect(0, 0, pageWidth, pageHeight, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(36);
  doc.setFont("helvetica", "bold");
  doc.text("OmKneeHealth", pageWidth / 2, pageHeight / 2 - 20, { align: "center" });

  doc.setFontSize(24);
  doc.setFont("helvetica", "normal");
  doc.text("Brand Guidelines", pageWidth / 2, pageHeight / 2 + 10, { align: "center" });

  doc.setFontSize(12);
  doc.text("Internal Document", pageWidth / 2, pageHeight - 40, { align: "center" });

  const date = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
  });
  doc.text(date, pageWidth / 2, pageHeight - 30, { align: "center" });

  // === SECTION 1: BRAND ESSENCE ===
  addNewPage();

  addSectionTitle("1. Brand Essence");

  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(black[0], black[1], black[2]);
  doc.text("Brand name: OmKneeHealth", margin, y);
  y += 8;

  doc.setFont("helvetica", "italic");
  doc.setTextColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.text("Tagline: Holistic knee care, personalised.", margin, y);
  y += 12;

  addParagraph(
    "OmKneeHealth represents a premium, evidence-led, holistic approach to knee health, longevity, and joint preservation. The brand sits at the intersection of clinical credibility, natural balance, and modern wellness science."
  );

  addParagraph("The identity must communicate:");
  addBulletList([
    "Trust and medical authority",
    "Calm, balance, and longevity",
    "Precision and personalisation",
    "Natural yet clinically robust care",
  ]);

  // === SECTION 2: LOGO SYSTEM ===
  addSectionTitle("2. Logo System");

  addSubsection("2.1 Primary Logo");
  addParagraph(
    "The OmKneeHealth wordmark and monogram are the core brand identifiers. The primary logo colour is Dark Green (default and preferred)."
  );
  addParagraph("This version should be used wherever possible across:");
  addBulletList([
    "Packaging",
    "Website headers",
    "Investor documents",
    "Clinical and patient-facing materials",
  ]);

  addSubsection("2.2 Secondary Logo Colourways");
  addParagraph("Approved secondary logo versions:");
  addBulletList([
    "Light Green",
    "Black",
    "White",
  ]);
  addParagraph(
    "These are used only when contrast, background, or production constraints require deviation from the primary dark green."
  );

  // === SECTION 3: LOGO USAGE RULES ===
  addSectionTitle("3. Logo Usage Rules");

  addSubsection("3.1 Background Control");
  addBulletList([
    "Dark Green logo on light or neutral backgrounds",
    "White logo on dark green or dark photographic backgrounds",
    "Black logo for monochrome print or regulatory documents",
    "Light Green logo for accent use only, not as the dominant brand identifier",
  ]);

  addParagraph("Never place the logo on:");
  addBulletList([
    "Busy or patterned backgrounds",
    "Low-contrast colours",
    "Gradients that reduce legibility",
  ]);

  addSubsection("3.2 Clear Space");
  addParagraph(
    'A clear exclusion zone must surround the logo at all times. Minimum clear space: Equal to the height of the "O" in OmKneeHealth, on all sides. No text, imagery, or graphic elements may enter this space.'
  );

  addSubsection("3.3 Minimum Size");
  addParagraph("To preserve legibility:");
  addBulletList([
    "Digital: Minimum width 120 px",
    "Print: Minimum width 30 mm",
  ]);
  addParagraph("Below these sizes, the logo must not be used.");

  // === SECTION 4: COLOUR SYSTEM ===
  addNewPage();
  addSectionTitle("4. Colour System");

  addSubsection("4.1 Primary Colour — Dark Green");
  addParagraph(
    "This is the anchor of the OmKneeHealth brand. Used for logos, headings, primary buttons, dividers, and key emphasis."
  );

  // Color swatch
  doc.setFillColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.rect(margin, y, 40, 20, "F");
  doc.setFontSize(9);
  doc.setTextColor(gray[0], gray[1], gray[2]);
  doc.text("Dark Green", margin + 45, y + 12);
  y += 28;

  addParagraph("Dark Green conveys:");
  addBulletList([
    "Longevity",
    "Medical trust",
    "Nature and balance",
    "Premium restraint",
  ]);

  addSubsection("4.2 Supporting Colours");
  
  // Light Green swatch
  doc.setFillColor(lightGreen[0], lightGreen[1], lightGreen[2]);
  doc.rect(margin, y, 30, 15, "F");
  doc.setFontSize(9);
  doc.setTextColor(gray[0], gray[1], gray[2]);
  doc.text("Light Green — secondary highlights", margin + 35, y + 10);
  y += 20;

  // White swatch
  doc.setDrawColor(200, 200, 200);
  doc.setFillColor(255, 255, 255);
  doc.rect(margin, y, 30, 15, "FD");
  doc.text("White — primary background colour", margin + 35, y + 10);
  y += 20;

  // Black swatch
  doc.setFillColor(20, 20, 20);
  doc.rect(margin, y, 30, 15, "F");
  doc.text("Black — text, regulatory and clinical documents", margin + 35, y + 10);
  y += 25;

  addParagraph(
    "No additional colours should be introduced without formal brand extension approval."
  );

  // === SECTION 5: TYPOGRAPHY ===
  addSectionTitle("5. Typography");

  addSubsection("5.1 Typographic Tone");
  addParagraph("Typography should feel:");
  addBulletList([
    "Calm",
    "Premium",
    "Clinical but human",
    "Unforced and highly legible",
  ]);

  addSubsection("5.2 Usage Principles");
  addBulletList([
    "Clear hierarchy",
    "Generous line spacing",
    "Avoid condensed or decorative fonts",
    "No novelty typefaces",
  ]);
  addParagraph(
    "Headings should feel authoritative and measured. Body text should prioritise readability and clarity for clinical and patient audiences."
  );

  // === SECTION 6: BRAND VOICE ===
  addNewPage();
  addSectionTitle("6. Brand Voice and Language");

  addSubsection("6.1 Tone");
  addBulletList([
    "Professional",
    "Evidence-led",
    "Reassuring",
    "Precise",
  ]);

  addSubsection("6.2 Language Principles");
  addBulletList([
    "Avoid hype or exaggerated claims",
    "Use medically accurate terminology",
    "Calm confidence rather than marketing language",
    "Personalised but not informal",
  ]);

  // Examples box
  checkPageBreak(50);
  doc.setFillColor(240, 245, 240);
  doc.rect(margin, y, contentWidth, 45, "F");
  y += 8;
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.text("Correct examples:", margin + 5, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(gray[0], gray[1], gray[2]);
  doc.text('• "Supports cartilage health and joint resilience"', margin + 5, y);
  y += 6;
  doc.text('• "Formulated using evidence-based ingredients"', margin + 5, y);
  y += 10;
  doc.setFont("helvetica", "bold");
  doc.setTextColor(150, 50, 50);
  doc.text("Avoid:", margin + 5, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(gray[0], gray[1], gray[2]);
  doc.text("• Overpromising outcomes • Casual or playful phrasing • Trend-driven wellness language", margin + 5, y);
  y += 15;

  // === SECTION 7: IMAGERY ===
  addSectionTitle("7. Imagery and Illustration");

  addSubsection("7.1 Photography");
  addParagraph("Preferred imagery:");
  addBulletList([
    "Natural light",
    "Neutral backgrounds",
    "Human movement without strain",
    "Clinical environments softened by warmth",
  ]);

  addParagraph("Avoid:");
  addBulletList([
    "Stock fitness imagery",
    "Extreme athletic poses",
    "Overly stylised or artificial scenes",
  ]);

  addSubsection("7.2 Illustration Style");
  addParagraph("If illustrations are used:");
  addBulletList([
    "Minimal",
    "Clean line work",
    "Neutral, anatomical accuracy",
    "Calm, educational tone",
  ]);
  addParagraph("Illustrations should support understanding, not decorate.");

  // === SECTION 8: CO-BRANDING ===
  addNewPage();
  addSectionTitle("8. Co-Branding and Endorsements");
  addParagraph("When OmKneeHealth appears alongside other brands:");
  addBulletList([
    "OmKneeHealth logo must remain visually dominant",
    "Maintain full clear space",
    "Dark Green remains the anchor colour",
  ]);
  addParagraph("No logo recolouring or distortion is permitted.");

  // === SECTION 9: PROHIBITED USE ===
  addSectionTitle("9. Prohibited Logo Use");

  // Warning box
  checkPageBreak(40);
  doc.setFillColor(255, 240, 240);
  doc.rect(margin, y, contentWidth, 35, "F");
  y += 8;
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(150, 50, 50);
  doc.text("Never:", margin + 5, y);
  y += 8;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const prohibitions = [
    "Stretch or compress the logo",
    "Change logo colours outside approved palette",
    "Add shadows, outlines, or effects",
    "Rotate or crop the logo",
    "Place text inside the logo",
  ];
  prohibitions.forEach((item) => {
    doc.text(`• ${item}`, margin + 5, y);
    y += 6;
  });
  y += 10;

  addParagraph("The logo must always appear exactly as supplied.");

  // === SECTION 10: GOVERNANCE ===
  addSectionTitle("10. Brand Governance");
  addParagraph(
    "All OmKneeHealth brand assets are controlled centrally. Any extension, modification, or third-party use must conform strictly to these guidelines."
  );

  // Footer on last page
  y = pageHeight - 25;
  doc.setDrawColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;
  doc.setFontSize(9);
  doc.setTextColor(gray[0], gray[1], gray[2]);
  doc.text("OmKneeHealth Brand Guidelines — Internal Use Only", margin, y);
  doc.text(`Generated: ${new Date().toLocaleDateString("en-GB")}`, pageWidth - margin, y, { align: "right" });

  // Save
  doc.save("OmKneeHealth-Brand-Guidelines.pdf");
};
