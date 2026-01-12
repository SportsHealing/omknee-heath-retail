/**
 * Compliant Language Playbook PDF Generator
 * UK/EU Food Supplement Regulatory Compliance Guide
 */

import jsPDF from 'jspdf';

export const generateCompliancePlaybook = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);
  let y = 20;

  const addPage = () => {
    doc.addPage();
    y = 20;
  };

  const checkPageBreak = (requiredSpace: number) => {
    if (y + requiredSpace > 270) {
      addPage();
    }
  };

  // Title Page
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('Compliant Language Playbook', pageWidth / 2, 60, { align: 'center' });
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('UK & EU Food Supplement Regulatory Compliance', pageWidth / 2, 75, { align: 'center' });
  
  doc.setFontSize(10);
  doc.text('OmKneeHealth Internal Reference Guide', pageWidth / 2, 90, { align: 'center' });
  
  doc.setFontSize(9);
  doc.setTextColor(100);
  doc.text(`Generated: ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}`, pageWidth / 2, 105, { align: 'center' });
  
  doc.setTextColor(0);
  
  // Regulatory Context Box
  doc.setFillColor(245, 245, 245);
  doc.roundedRect(margin, 120, contentWidth, 50, 3, 3, 'F');
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('REGULATORY CONTEXT', margin + 5, 130);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  const contextText = [
    '• UK Food Supplements Regulations 2003',
    '• EU Regulation 1924/2006 (Nutrition & Health Claims)',
    '• EFSA (European Food Safety Authority) authorised claims',
    '• ASA/CAP Code for advertising standards'
  ];
  contextText.forEach((line, i) => {
    doc.text(line, margin + 5, 140 + (i * 6));
  });

  // Core Principle
  doc.setFillColor(220, 240, 220);
  doc.roundedRect(margin, 180, contentWidth, 25, 3, 3, 'F');
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('CORE PRINCIPLE', margin + 5, 190);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('This is a FOOD SUPPLEMENT, not a medicine. No disease claims permitted.', margin + 5, 198);

  // Page 2 - Approved Verbs
  addPage();
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('1. Approved Verbs & Phrases', margin, y);
  y += 12;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Use these verbs when describing product benefits:', margin, y);
  y += 10;

  const approvedVerbs = [
    { verb: 'Contributes to', example: '"Vitamin C contributes to normal collagen formation"' },
    { verb: 'Supports', example: '"Supports normal muscle function" (with EFSA backing)' },
    { verb: 'Helps maintain', example: '"Helps maintain normal bone health"' },
    { verb: 'Provides', example: '"Provides nutritional building blocks"' },
    { verb: 'Complements', example: '"Complements a balanced diet"' },
    { verb: 'May contribute to', example: '"May contribute to overall joint wellness"' },
    { verb: 'Designed to support', example: '"Designed to support your nutritional needs"' },
    { verb: 'Part of', example: '"Part of a broader approach to joint health"' }
  ];

  doc.setFillColor(240, 248, 240);
  doc.roundedRect(margin, y, contentWidth, approvedVerbs.length * 12 + 10, 3, 3, 'F');
  y += 8;

  approvedVerbs.forEach((item) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text(`✓ ${item.verb}`, margin + 5, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text(item.example, margin + 45, y);
    y += 12;
  });

  y += 10;

  // Prohibited Words
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('2. Prohibited Words & Phrases', margin, y);
  y += 12;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Never use these terms in marketing copy:', margin, y);
  y += 10;

  const prohibitedWords = [
    'Treats / Treatment / Therapeutic',
    'Cures / Cure / Curative',
    'Heals / Healing / Healer',
    'Repairs / Repair / Regenerates',
    'Reduces pain / Pain relief / Painkiller',
    'Anti-inflammatory (as a product claim)',
    'Clinically proven / Scientifically proven',
    'Reverses damage / Stops degeneration',
    'Prevents disease / Disease prevention',
    'Fixes / Fix your joints'
  ];

  doc.setFillColor(255, 240, 240);
  doc.roundedRect(margin, y, contentWidth, prohibitedWords.length * 8 + 10, 3, 3, 'F');
  y += 8;

  prohibitedWords.forEach((word) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text(`✗ ${word}`, margin + 5, y);
    y += 8;
  });

  // Page 3 - Before/After Examples
  addPage();
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('3. Compliant vs Non-Compliant Examples', margin, y);
  y += 15;

  const examples = [
    { bad: 'Reduces joint pain', good: 'Contributes to normal joint function' },
    { bad: 'Anti-inflammatory formula', good: 'Contains curcumin with antioxidant properties' },
    { bad: 'Repairs damaged cartilage', good: 'Provides amino acids used in cartilage structure' },
    { bad: 'Clinically proven to work', good: 'Formulated using research-informed doses' },
    { bad: 'Heals your knees', good: 'Nutritional support for joint wellness' },
    { bad: 'Stops joint degeneration', good: 'Part of a broader approach to joint health' },
    { bad: 'Restores mobility', good: 'Designed to complement your joint care routine' },
    { bad: 'Eliminates stiffness', good: 'Nutrients relevant to joint health' },
    { bad: 'Proven pain relief', good: 'Contains ingredients commonly studied in research' },
    { bad: 'Rebuilds cartilage naturally', good: 'Provides building blocks found in cartilage' }
  ];

  examples.forEach((ex, index) => {
    checkPageBreak(25);
    
    // Non-compliant
    doc.setFillColor(255, 235, 235);
    doc.roundedRect(margin, y, contentWidth / 2 - 5, 18, 2, 2, 'F');
    doc.setFontSize(7);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(180, 0, 0);
    doc.text('NON-COMPLIANT', margin + 3, y + 5);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(0);
    doc.text(`"${ex.bad}"`, margin + 3, y + 13);

    // Compliant
    doc.setFillColor(235, 255, 235);
    doc.roundedRect(margin + contentWidth / 2 + 5, y, contentWidth / 2 - 5, 18, 2, 2, 'F');
    doc.setFontSize(7);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 120, 0);
    doc.text('COMPLIANT', margin + contentWidth / 2 + 8, y + 5);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(0);
    doc.text(`"${ex.good}"`, margin + contentWidth / 2 + 8, y + 13);

    y += 22;
  });

  // Page 4 - Ingredient Descriptions
  addPage();
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('4. Approved Ingredient Descriptions', margin, y);
  y += 12;

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('Use these safe descriptions when referencing ingredients:', margin, y);
  y += 10;

  const ingredients = [
    { name: 'Collagen', desc: 'Provides amino acids that contribute to the body\'s collagen synthesis processes.' },
    { name: 'Glucosamine', desc: 'A naturally occurring compound found in cartilage. Research outcomes are mixed.' },
    { name: 'Chondroitin', desc: 'A structural component of cartilage, contributing to its ability to retain water.' },
    { name: 'Hyaluronic Acid', desc: 'A component of synovial fluid within joints.' },
    { name: 'Curcumin', desc: 'Has antioxidant properties. Paired with piperine to enhance absorption.' },
    { name: 'Boswellia', desc: 'Contains boswellic acids—compounds studied for their biological activity.' },
    { name: 'Vitamin C', desc: 'Contributes to normal collagen formation for the normal function of cartilage (EFSA).' },
    { name: 'Vitamin D', desc: 'Contributes to normal muscle function and maintenance of normal bones (EFSA).' },
    { name: 'Vitamin K2', desc: 'Contributes to the maintenance of normal bones (EFSA).' },
    { name: 'Magnesium', desc: 'Contributes to normal muscle function and maintenance of normal bones (EFSA).' },
    { name: 'Zinc', desc: 'Contributes to normal protein synthesis and maintenance of normal bones (EFSA).' },
    { name: 'Copper', desc: 'Contributes to maintenance of normal connective tissues (EFSA).' },
    { name: 'Manganese', desc: 'Contributes to normal formation of connective tissue (EFSA).' }
  ];

  ingredients.forEach((ing) => {
    checkPageBreak(18);
    doc.setFillColor(248, 248, 248);
    doc.roundedRect(margin, y, contentWidth, 14, 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text(ing.name, margin + 3, y + 5);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text(ing.desc, margin + 3, y + 11);
    y += 16;
  });

  // Page 5 - CTAs and Disclaimers
  addPage();
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('5. Approved CTAs', margin, y);
  y += 12;

  const approvedCTAs = [
    'Explore the formula',
    'Learn more',
    'View ingredients',
    'Take the assessment',
    'Add to basket',
    'Subscribe & save',
    'When you\'re ready',
    'Contact our team'
  ];

  const prohibitedCTAs = [
    'Start healing today',
    'Get relief now',
    'Fix your knees',
    'Feel the difference',
    'Start feeling better',
    'Cure your pain'
  ];

  doc.setFontSize(10);
  doc.text('Use these neutral, exploratory CTAs:', margin, y);
  y += 8;

  doc.setFillColor(240, 248, 240);
  doc.roundedRect(margin, y, contentWidth / 2 - 5, approvedCTAs.length * 7 + 8, 2, 2, 'F');
  
  doc.setFillColor(255, 240, 240);
  doc.roundedRect(margin + contentWidth / 2 + 5, y, contentWidth / 2 - 5, prohibitedCTAs.length * 7 + 8, 2, 2, 'F');

  let ctaY = y + 6;
  approvedCTAs.forEach((cta) => {
    doc.setFontSize(8);
    doc.text(`✓ "${cta}"`, margin + 3, ctaY);
    ctaY += 7;
  });

  ctaY = y + 6;
  prohibitedCTAs.forEach((cta) => {
    doc.setFontSize(8);
    doc.text(`✗ "${cta}"`, margin + contentWidth / 2 + 8, ctaY);
    ctaY += 7;
  });

  y += Math.max(approvedCTAs.length, prohibitedCTAs.length) * 7 + 20;

  // Global Disclaimer
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('6. Required Disclaimer', margin, y);
  y += 12;

  doc.setFillColor(255, 250, 230);
  doc.roundedRect(margin, y, contentWidth, 30, 3, 3, 'F');
  doc.setDrawColor(200, 180, 100);
  doc.roundedRect(margin, y, contentWidth, 30, 3, 3, 'S');
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text('GLOBAL DISCLAIMER (use on all product pages and footer):', margin + 5, y + 8);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  const disclaimer = 'Food supplement. Not intended to diagnose, treat, cure, or prevent any disease. Not a substitute for a varied, balanced diet and healthy lifestyle. Consult your healthcare provider before use.';
  const disclaimerLines = doc.splitTextToSize(disclaimer, contentWidth - 10);
  doc.text(disclaimerLines, margin + 5, y + 16);

  y += 45;

  // Placement Guidelines
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Disclaimer Placement:', margin, y);
  y += 8;

  const placements = [
    '• Footer (all pages) — mandatory',
    '• Product page hero section — mandatory',
    '• Product FAQ section — recommended',
    '• Checkout page — mandatory',
    '• Email marketing — mandatory'
  ];

  placements.forEach((p) => {
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(p, margin + 5, y);
    y += 6;
  });

  // Page 6 - Quick Reference
  addPage();
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('7. Quick Reference Checklist', margin, y);
  y += 15;

  const checklist = [
    'Does the copy avoid disease treatment/cure claims?',
    'Are all health claims EFSA-authorised?',
    'Is "evidence-informed" used instead of "clinically proven"?',
    'Does it acknowledge mixed research where applicable?',
    'Is the disclaimer present and visible?',
    'Are CTAs neutral and non-outcome-based?',
    'Does it direct to healthcare professionals for medical concerns?',
    'Is the copy educational rather than promotional?'
  ];

  checklist.forEach((item, index) => {
    doc.setFillColor(248, 248, 248);
    doc.roundedRect(margin, y, contentWidth, 12, 2, 2, 'F');
    doc.setFontSize(9);
    doc.text(`☐  ${item}`, margin + 5, y + 8);
    y += 14;
  });

  y += 10;

  // Contact
  doc.setFillColor(240, 240, 250);
  doc.roundedRect(margin, y, contentWidth, 25, 3, 3, 'F');
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('Questions about compliance?', margin + 5, y + 10);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('Contact the regulatory team before publishing any new copy.', margin + 5, y + 18);

  // Save the PDF
  doc.save('OmKneeHealth-Compliance-Playbook.pdf');
};

export default generateCompliancePlaybook;
