/**
 * Customer Response Scripts PDF Generator
 * Approved responses for common customer inquiries and complaints
 */

import { jsPDF } from "jspdf";

export const generateCustomerResponseScripts = () => {
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

  const addScriptBox = (scenario: string, response: string, notes?: string) => {
    const scenarioLines = doc.splitTextToSize(`Scenario: ${scenario}`, contentWidth - 10);
    const responseLines = doc.splitTextToSize(response, contentWidth - 10);
    const boxHeight = scenarioLines.length * 5 + responseLines.length * 5 + (notes ? 15 : 10);
    checkPageBreak(boxHeight + 20);

    // Box background
    doc.setFillColor(245, 248, 245);
    doc.setDrawColor(200, 210, 200);
    doc.rect(margin, y, contentWidth, boxHeight, "FD");

    // Scenario
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(darkGreen[0], darkGreen[1], darkGreen[2]);
    doc.text(scenarioLines, margin + 5, y + 6);
    y += scenarioLines.length * 5 + 4;

    // Response
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(black[0], black[1], black[2]);
    doc.text(responseLines, margin + 5, y + 4);
    y += responseLines.length * 5;

    if (notes) {
      y += 4;
      doc.setFontSize(9);
      doc.setFont("helvetica", "italic");
      doc.setTextColor(gray[0], gray[1], gray[2]);
      const noteLines = doc.splitTextToSize(`💡 ${notes}`, contentWidth - 10);
      doc.text(noteLines, margin + 5, y);
      y += noteLines.length * 4;
    }

    y += 10;
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
  doc.text("Customer Response Scripts", pageWidth / 2, pageHeight / 2 + 10, { align: "center" });

  doc.setFontSize(14);
  doc.text("Approved Responses Guide", pageWidth / 2, pageHeight / 2 + 25, { align: "center" });

  doc.setFontSize(12);
  doc.text("Internal Document", pageWidth / 2, pageHeight - 40, { align: "center" });

  const date = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
  });
  doc.text(date, pageWidth / 2, pageHeight - 30, { align: "center" });

  // === INTRODUCTION ===
  addNewPage();

  addSectionTitle("Introduction");

  addParagraph(
    "This document provides pre-approved response scripts for common customer inquiries. All responses have been reviewed for regulatory compliance and brand tone consistency."
  );

  addParagraph(
    "Key principles for all customer communications:"
  );

  // Principles box
  doc.setFillColor(240, 245, 240);
  doc.rect(margin, y, contentWidth, 35, "F");
  y += 8;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(black[0], black[1], black[2]);
  const principles = [
    "• Be warm, professional, and empathetic",
    "• Never make medical claims or give medical advice",
    "• Always recommend consulting a healthcare professional for health concerns",
    "• Respond within 24 hours during business days",
    "• Escalate complex issues to the appropriate team member",
  ];
  principles.forEach((p) => {
    doc.text(p, margin + 5, y);
    y += 6;
  });
  y += 10;

  // === SECTION 1: PRODUCT INQUIRIES ===
  addSectionTitle("1. Product Inquiries");

  addSubsection("1.1 General Product Questions");

  addScriptBox(
    "Customer asks what ingredients are in the product",
    "Thank you for your interest in our formulation. Our [Marine/Vegetarian] Formula contains [list key ingredients]. You can find the complete ingredient list and detailed information on each component on our product page at omkneehealth.com/product.\n\nIf you have any specific questions about individual ingredients, I'm happy to help.",
    "Always direct to the website for full details. Never make claims about ingredient effects."
  );

  addScriptBox(
    "Customer asks if the product will work for their specific condition",
    "Thank you for reaching out. Our supplements are formulated to support joint health as part of a balanced lifestyle. However, I'm not able to provide advice about specific health conditions.\n\nI would recommend speaking with your doctor or healthcare provider, who can give you personalised guidance based on your individual circumstances.\n\nIf you'd like to learn more about our ingredients and approach, please visit our Science page at omkneehealth.com/science.",
    "Never suggest the product will treat, cure, or improve any medical condition."
  );

  addNewPage();

  addScriptBox(
    "Customer asks about the difference between Marine and Vegetarian formulas",
    "Great question! Our two formulas are designed for different preferences:\n\n• Marine Formula: Contains hydrolysed marine collagen (Types I & II) alongside turmeric, boswellia, vitamin C, and black pepper extract. Ideal for those seeking collagen-based support.\n\n• Vegetarian Formula: A plant-based option with turmeric, boswellia, ginger, vitamin C, and black pepper extract. Suitable for vegetarians and those who prefer not to consume animal-derived ingredients.\n\nBoth formulas include vitamin C, which contributes to normal collagen formation for the normal function of cartilage. Would you like more details about either option?"
  );

  addSubsection("1.2 Dosage and Usage");

  addScriptBox(
    "Customer asks about recommended dosage",
    "The recommended dosage is 2 capsules daily, taken with food. This information is also printed on your product packaging.\n\nPlease note: Do not exceed the recommended daily intake. If you are pregnant, breastfeeding, taking medication, or have a medical condition, please consult your healthcare provider before use.",
    "Always include the safety reminder about consulting healthcare providers."
  );

  addScriptBox(
    "Customer asks how long before they see results",
    "Thank you for your question. Individual experiences vary, and we cannot predict specific outcomes or timelines.\n\nOur supplements are designed to be taken as part of your daily routine alongside a balanced diet and healthy lifestyle. Many customers choose to incorporate them into their ongoing wellness regimen.\n\nIf you have concerns about your joint health, we recommend speaking with your healthcare provider for personalised guidance."
  );

  // === SECTION 2: ORDERS & SHIPPING ===
  addNewPage();
  addSectionTitle("2. Orders & Shipping");

  addSubsection("2.1 Order Status");

  addScriptBox(
    "Customer asks about order status",
    "Thank you for your order! I'd be happy to help you track it.\n\nCould you please provide your order number? You can find this in your order confirmation email. Once I have that, I'll check the status for you right away."
  );

  addScriptBox(
    "Customer's order is delayed",
    "I'm sorry to hear your order hasn't arrived as expected. I understand how frustrating that can be.\n\nLet me look into this for you immediately. Could you please confirm your order number and the delivery address on the order?\n\nI'll investigate with our shipping partner and get back to you with an update within [timeframe]."
  );

  addSubsection("2.2 Shipping Information");

  addScriptBox(
    "Customer asks about shipping costs and times",
    "Thank you for your interest! Here are our current shipping options:\n\n• Standard Delivery (3-5 business days): [Price]\n• Express Delivery (1-2 business days): [Price]\n• Free Standard Delivery on orders over [Threshold]\n\nPlease note that delivery times may vary during peak periods. You'll receive tracking information via email once your order has been dispatched.",
    "Update pricing and thresholds as needed."
  );

  addScriptBox(
    "Customer asks about international shipping",
    "Thank you for your enquiry about international shipping.\n\nCurrently, we ship to [list of countries/regions]. Shipping costs and delivery times vary by destination.\n\nPlease note that international orders may be subject to customs duties and taxes, which are the responsibility of the recipient.\n\nIf your country isn't listed, please let us know and we'll see if we can accommodate your request."
  );

  // === SECTION 3: RETURNS & REFUNDS ===
  addNewPage();
  addSectionTitle("3. Returns & Refunds");

  addScriptBox(
    "Customer wants to return an unopened product",
    "I'm sorry to hear you'd like to return your order. We're happy to help.\n\nFor unopened products in original condition, we offer a [X-day] return window from the date of delivery. To initiate a return:\n\n1. Please email us at [email] with your order number\n2. We'll provide you with return instructions\n3. Once we receive the returned item, we'll process your refund within [X] business days\n\nPlease note that return shipping costs are the responsibility of the customer unless the product was faulty or incorrect."
  );

  addScriptBox(
    "Customer is unhappy with the product and wants a refund",
    "I'm sorry to hear our product didn't meet your expectations. Your feedback is important to us.\n\nCould you share a bit more about your experience? This helps us improve and also allows me to see how we can best assist you.\n\nRegarding refunds, [explain your refund policy for opened products]. I want to ensure we find a fair resolution for you.",
    "Be empathetic first, then explain policy. Escalate if needed."
  );

  addScriptBox(
    "Customer received damaged or incorrect product",
    "I'm very sorry to hear about this. That's certainly not the experience we want you to have.\n\nTo resolve this quickly, could you please:\n1. Send a photo of the damaged/incorrect item\n2. Confirm your order number\n\nOnce I receive these, I'll arrange for a replacement to be sent to you immediately at no extra cost. You won't need to return the damaged item.\n\nAgain, my sincere apologies for the inconvenience."
  );

  // === SECTION 4: COMPLAINTS ===
  addNewPage();
  addSectionTitle("4. Handling Complaints");

  addSubsection("4.1 General Complaint Handling");

  addParagraph(
    "When handling complaints, follow the HEARD framework:"
  );

  doc.setFillColor(255, 245, 238);
  doc.rect(margin, y, contentWidth, 40, "F");
  y += 8;
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(black[0], black[1], black[2]);
  const heard = [
    "H — Hear: Listen fully without interrupting",
    "E — Empathise: Acknowledge their feelings",
    "A — Apologise: Say sorry for their experience",
    "R — Resolve: Offer a solution or next steps",
    "D — Diagnose: Follow up to prevent recurrence",
  ];
  heard.forEach((h) => {
    doc.text(h, margin + 5, y);
    y += 7;
  });
  y += 10;

  addSubsection("4.2 Specific Complaint Scenarios");

  addScriptBox(
    "Customer complains about product quality",
    "I'm truly sorry to hear about your experience with our product. We take quality very seriously, and this is certainly not the standard we aim for.\n\nCould you please share:\n• Your order number and batch number (found on the packaging)\n• A description of the quality issue\n• Photos if possible\n\nThis will help me investigate and ensure we address this properly. In the meantime, I'd like to offer you [appropriate resolution].\n\nThank you for bringing this to our attention."
  );

  addScriptBox(
    "Customer reports adverse reaction",
    "I'm very sorry to hear you've experienced this. Your wellbeing is our priority.\n\nFirst and foremost, if you're experiencing any concerning symptoms, please consult your doctor or healthcare provider immediately.\n\nCould you please provide:\n• Your order number and batch number\n• Details of what you experienced\n• When you started taking the product\n\nI will escalate this to our quality team for immediate review. We take all such reports seriously.\n\nPlease discontinue use until you've spoken with your healthcare provider.",
    "ALWAYS escalate adverse reaction reports to management immediately."
  );

  // === SECTION 5: HEALTH-RELATED INQUIRIES ===
  addNewPage();
  addSectionTitle("5. Health-Related Inquiries");

  addParagraph(
    "IMPORTANT: We cannot provide medical advice. Always direct customers to healthcare professionals for health-related questions."
  );

  addScriptBox(
    "Customer asks if the product is suitable for their medical condition",
    "Thank you for reaching out. While I appreciate you sharing this with me, I'm not qualified to provide medical advice.\n\nBecause you have [condition/are taking medication], I would strongly recommend consulting with your doctor or pharmacist before starting any new supplement. They can review our ingredient list (available on our website) and advise whether it's appropriate for your individual situation.\n\nYour health and safety are our top priority."
  );

  addScriptBox(
    "Customer asks for medical advice",
    "Thank you for your question. While I wish I could help, I'm not a medical professional and am unable to provide health advice.\n\nFor any health concerns, I'd recommend speaking with your GP or a qualified healthcare provider who can give you personalised guidance.\n\nIf you have questions specifically about our products or ingredients, I'm happy to help with that."
  );

  addScriptBox(
    "Customer asks if they can take product with medication",
    "That's an important question, and I'm glad you're thinking about it carefully.\n\nBecause supplement-medication interactions can vary, I'd recommend checking with your doctor or pharmacist before adding any supplement to your routine. They can review your current medications alongside our ingredient list to ensure there are no concerns.\n\nYou can find our complete ingredient list at omkneehealth.com/product, which you're welcome to share with your healthcare provider."
  );

  // === SECTION 6: SUBSCRIPTION & ACCOUNT ===
  addNewPage();
  addSectionTitle("6. Subscription & Account");

  addScriptBox(
    "Customer wants to cancel subscription",
    "I'm sorry to see you go, but I completely understand.\n\nTo cancel your subscription, I'll need to verify your account. Could you please confirm [email address/order details]?\n\nOnce confirmed, I'll process the cancellation immediately. You'll receive an email confirmation, and you won't be charged going forward.\n\nBefore you go, is there anything we could have done differently? Your feedback helps us improve.",
    "Always ask for feedback when a customer cancels."
  );

  addScriptBox(
    "Customer wants to pause or modify subscription",
    "Of course! I can help you with that.\n\nWe offer the following options:\n• Pause: Skip your next [X] deliveries\n• Change frequency: Adjust from monthly to every 6/8/12 weeks\n• Update quantity: Increase or decrease the number of products\n\nWhich option would work best for you? I can make the change right away."
  );

  addScriptBox(
    "Customer has trouble accessing their account",
    "I'm sorry you're having trouble accessing your account.\n\nLet's get this sorted for you:\n\n1. First, try resetting your password using the 'Forgot Password' link on the login page\n2. Check your spam folder for the reset email\n3. If you still can't access your account, reply with your registered email address and I'll look into it\n\nIs there anything specific you need to access urgently? I can help with order information while we resolve the login issue."
  );

  // === SECTION 7: ESCALATION ===
  addNewPage();
  addSectionTitle("7. Escalation Procedures");

  addParagraph(
    "Some situations require escalation to senior team members. Know when to escalate:"
  );

  // Escalation table
  checkPageBreak(50);
  doc.setFillColor(255, 240, 240);
  doc.rect(margin, y, contentWidth, 45, "F");
  y += 8;
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(150, 50, 50);
  doc.text("Escalate Immediately If:", margin + 5, y);
  y += 8;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(black[0], black[1], black[2]);
  const escalations = [
    "• Customer reports adverse reaction or health concern",
    "• Legal threat or regulatory complaint",
    "• Media enquiry or influencer complaint",
    "• Repeated complaint from same customer",
    "• Request for refund exceeding [threshold]",
    "• Complaint about a team member",
  ];
  escalations.forEach((e) => {
    doc.text(e, margin + 5, y);
    y += 6;
  });
  y += 15;

  addScriptBox(
    "When escalating, inform the customer",
    "Thank you for your patience. To ensure this is handled with the attention it deserves, I'm going to escalate this to our [senior team/customer care manager].\n\nThey will be in touch with you within [timeframe] to discuss this further. In the meantime, please don't hesitate to reach out if you have any other questions.\n\nAgain, I appreciate you bringing this to our attention."
  );

  // === FOOTER ===
  y = pageHeight - 25;
  doc.setDrawColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;
  doc.setFontSize(9);
  doc.setTextColor(gray[0], gray[1], gray[2]);
  doc.text("OmKneeHealth Customer Response Scripts — Internal Use Only", margin, y);
  doc.text(`Generated: ${new Date().toLocaleDateString("en-GB")}`, pageWidth - margin, y, { align: "right" });

  // Save
  doc.save("OmKneeHealth-Customer-Response-Scripts.pdf");
};
