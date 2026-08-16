import jsPDF from "jspdf";

interface PageAudit {
  page: string;
  path: string;
  status: "Compliant" | "Amended" | "Requires Review";
  findings: string[];
  amendments?: string[];
}

interface ComplianceAuditData {
  auditDate: string;
  auditor: string;
  jurisdiction: string;
  frameworks: string[];
  pages: PageAudit[];
  summary: {
    totalPages: number;
    compliant: number;
    amended: number;
    requiresReview: number;
  };
}

export const generateComplianceAuditPdf = (): void => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let yPos = 20;

  const auditData: ComplianceAuditData = {
    auditDate: new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    auditor: "UK Regulatory Compliance Specialist",
    jurisdiction: "United Kingdom (Primary), EU, US, Global English-speaking markets",
    frameworks: [
      "UK Advertising Standards Authority (ASA) CAP Code",
      "UK Food Standards Agency (FSA) Guidance",
      "EFSA Nutrition and Health Claims Regulation (EC) No 1924/2006",
      "General Consumer Protection Principles",
    ],
    pages: [
      {
        page: "Homepage",
        path: "/",
        status: "Compliant",
        findings: [
          "All claims use supportive language ('supports', 'contributes to')",
          "No medicinal or therapeutic claims identified",
          "Appropriate disclaimers present",
        ],
      },
      {
        page: "Product Page",
        path: "/product",
        status: "Amended",
        findings: [
          "Product claims align with EFSA authorised claims",
          "Vitamin C claim for cartilage function correctly attributed",
          "Two testimonials required amendment for implied therapeutic benefits",
        ],
        amendments: [
          "Testimonial 1: Removed 'improvement in my morning stiffness' → replaced with 'fits well into my daily routine'",
          "Testimonial 2: Removed 'knees feel more comfortable' → replaced with 'feel confident I'm supporting my joint health properly'",
        ],
      },
      {
        page: "Ingredients Overview",
        path: "/ingredients",
        status: "Compliant",
        findings: [
          "Ingredient descriptions are evidence-led but non-promissory",
          "EFSA claims correctly attributed where applicable",
          "No exaggerated efficacy claims",
        ],
      },
      {
        page: "Science & Evidence",
        path: "/science",
        status: "Compliant",
        findings: [
          "Evidence presented objectively without overstating conclusions",
          "Appropriate hedging language used",
          "No claims of disease treatment or prevention",
        ],
      },
      {
        page: "Learn (Knee Anatomy)",
        path: "/learn",
        status: "Compliant",
        findings: [
          "Educational content is factual and non-promotional",
          "Condition descriptions are informational only",
          "Appropriate medical referral guidance included",
        ],
      },
      {
        page: "About Us",
        path: "/about",
        status: "Compliant",
        findings: [
          "Clinical credentials presented appropriately",
          "No implied endorsement of treatment claims",
          "Professional, non-sensational tone",
        ],
      },
      {
        page: "FAQ",
        path: "/faq",
        status: "Compliant",
        findings: [
          "Answers use compliant language throughout",
          "No guarantees or certainty framing",
          "Appropriate disclaimers included",
        ],
      },
      {
        page: "Blog: Collagen Supplements",
        path: "/journal/do-collagen-supplements-help-knee-joints",
        status: "Compliant",
        findings: [
          "Correctly states collagen has no EFSA joint claims",
          "Vitamin C claim properly attributed",
          "Includes 'cannot treat/cure' disclaimers",
        ],
      },
      {
        page: "Blog: Supplements vs Painkillers",
        path: "/journal/knee-pain-supplements-vs-painkillers",
        status: "Compliant",
        findings: [
          "Explicitly states supplements are not medicines",
          "Strong medical disclaimer present",
          "No therapeutic claims made",
        ],
      },
      {
        page: "Blog: Support Joints as You Age",
        path: "/journal/support-knee-joints-as-you-age",
        status: "Compliant",
        findings: [
          "Uses only EFSA-authorised claims",
          "Notes 'no EFSA claims' for glucosamine/chondroitin",
          "No implied treatment claims",
        ],
      },
      {
        page: "Blog: Best Supplement for Cartilage",
        path: "/journal/best-supplement-knee-cartilage",
        status: "Compliant",
        findings: [
          "Evidence-based positioning",
          "Appropriate expectation setting",
          "Compliant claim language",
        ],
      },
      {
        page: "Blog: Supplements for Osteoarthritis",
        path: "/journal/supplements-osteoarthritis-evidence",
        status: "Compliant",
        findings: [
          "Clear distinction between support and treatment",
          "EFSA claims correctly attributed",
          "Appropriate medical referral guidance",
        ],
      },
    ],
    summary: {
      totalPages: 12,
      compliant: 11,
      amended: 1,
      requiresReview: 0,
    },
  };

  // Helper functions
  const addText = (text: string, size: number, style: "normal" | "bold" = "normal", color: number[] = [33, 33, 33]) => {
    doc.setFontSize(size);
    doc.setFont("helvetica", style);
    doc.setTextColor(color[0], color[1], color[2]);
  };

  const checkPageBreak = (requiredSpace: number) => {
    if (yPos + requiredSpace > doc.internal.pageSize.getHeight() - 20) {
      doc.addPage();
      yPos = 20;
      return true;
    }
    return false;
  };

  // Title
  addText("", 24, "bold", [45, 80, 65]);
  doc.text("COMPLIANCE AUDIT REPORT", pageWidth / 2, yPos, { align: "center" });
  yPos += 10;

  addText("", 14, "normal", [100, 100, 100]);
  doc.text("UK Health Claims & Advertising Compliance", pageWidth / 2, yPos, { align: "center" });
  yPos += 20;

  // Header info box
  doc.setFillColor(245, 247, 245);
  doc.roundedRect(margin, yPos, contentWidth, 45, 3, 3, "F");
  yPos += 10;

  addText("", 10, "bold");
  doc.text("Website:", margin + 5, yPos);
  addText("", 10, "normal");
  doc.text("omkneehealth.com", margin + 35, yPos);

  doc.text("Audit Date:", margin + 90, yPos);
  doc.text(auditData.auditDate, margin + 120, yPos);

  yPos += 8;
  addText("", 10, "bold");
  doc.text("Product:", margin + 5, yPos);
  addText("", 10, "normal");
  doc.text("Food Supplements (Joint/Knee Health)", margin + 35, yPos);

  yPos += 8;
  addText("", 10, "bold");
  doc.text("Jurisdiction:", margin + 5, yPos);
  addText("", 10, "normal");
  doc.text(auditData.jurisdiction, margin + 40, yPos);

  yPos += 8;
  addText("", 10, "bold");
  doc.text("Auditor:", margin + 5, yPos);
  addText("", 10, "normal");
  doc.text(auditData.auditor, margin + 30, yPos);

  yPos += 25;

  // Regulatory Frameworks
  addText("", 12, "bold", [45, 80, 65]);
  doc.text("REGULATORY FRAMEWORKS APPLIED", margin, yPos);
  yPos += 8;

  auditData.frameworks.forEach((framework) => {
    addText("", 9, "normal", [80, 80, 80]);
    doc.text(`• ${framework}`, margin + 5, yPos);
    yPos += 6;
  });

  yPos += 10;

  // Summary Box
  doc.setFillColor(45, 80, 65);
  doc.roundedRect(margin, yPos, contentWidth, 30, 3, 3, "F");
  yPos += 12;

  addText("", 11, "bold", [255, 255, 255]);
  doc.text("AUDIT SUMMARY", margin + 5, yPos);

  yPos += 10;
  const summaryItems = [
    { label: "Total Pages Reviewed:", value: auditData.summary.totalPages.toString() },
    { label: "Compliant:", value: auditData.summary.compliant.toString() },
    { label: "Amended:", value: auditData.summary.amended.toString() },
    { label: "Requires Review:", value: auditData.summary.requiresReview.toString() },
  ];

  let xOffset = margin + 5;
  summaryItems.forEach((item) => {
    addText("", 9, "normal", [200, 220, 200]);
    doc.text(item.label, xOffset, yPos);
    addText("", 9, "bold", [255, 255, 255]);
    doc.text(item.value, xOffset + 2, yPos + 6);
    xOffset += 42;
  });

  yPos += 25;

  // Page-by-page audit
  addText("", 12, "bold", [45, 80, 65]);
  doc.text("PAGE-BY-PAGE AUDIT RESULTS", margin, yPos);
  yPos += 10;

  auditData.pages.forEach((page) => {
    checkPageBreak(50);

    // Page header
    const statusColor = page.status === "Compliant" ? [34, 139, 34] : page.status === "Amended" ? [255, 140, 0] : [220, 53, 69];

    doc.setFillColor(250, 250, 250);
    doc.roundedRect(margin, yPos, contentWidth, 8, 2, 2, "F");

    addText("", 10, "bold", [33, 33, 33]);
    doc.text(page.page, margin + 3, yPos + 6);

    addText("", 8, "normal", [100, 100, 100]);
    doc.text(page.path, margin + 80, yPos + 6);

    // Status badge
    doc.setFillColor(statusColor[0], statusColor[1], statusColor[2]);
    doc.roundedRect(pageWidth - margin - 25, yPos + 1, 22, 6, 2, 2, "F");
    addText("", 7, "bold", [255, 255, 255]);
    doc.text(page.status, pageWidth - margin - 24, yPos + 5.5);

    yPos += 12;

    // Findings
    page.findings.forEach((finding) => {
      checkPageBreak(8);
      addText("", 8, "normal", [80, 80, 80]);
      const lines = doc.splitTextToSize(`✓ ${finding}`, contentWidth - 10);
      doc.text(lines, margin + 5, yPos);
      yPos += lines.length * 5;
    });

    // Amendments if any
    if (page.amendments && page.amendments.length > 0) {
      yPos += 3;
      addText("", 8, "bold", [255, 140, 0]);
      doc.text("Amendments Made:", margin + 5, yPos);
      yPos += 6;

      page.amendments.forEach((amendment) => {
        checkPageBreak(10);
        addText("", 8, "normal", [100, 80, 50]);
        const lines = doc.splitTextToSize(`→ ${amendment}`, contentWidth - 15);
        doc.text(lines, margin + 8, yPos);
        yPos += lines.length * 5;
      });
    }

    yPos += 8;
  });

  // Final certification
  checkPageBreak(60);
  yPos += 10;

  doc.setFillColor(245, 250, 245);
  doc.roundedRect(margin, yPos, contentWidth, 45, 3, 3, "F");
  doc.setDrawColor(45, 80, 65);
  doc.setLineWidth(0.5);
  doc.roundedRect(margin, yPos, contentWidth, 45, 3, 3, "S");

  yPos += 12;
  addText("", 12, "bold", [45, 80, 65]);
  doc.text("CERTIFICATION", pageWidth / 2, yPos, { align: "center" });

  yPos += 10;
  addText("", 9, "normal", [60, 60, 60]);
  const certText = doc.splitTextToSize(
    "This audit confirms that the OmKneeHealth website content has been reviewed against UK ASA CAP Code, FSA guidance, and EFSA health claims regulations. All identified non-compliant language has been amended. The site is cleared for launch in the UK market.",
    contentWidth - 20
  );
  doc.text(certText, pageWidth / 2, yPos, { align: "center", maxWidth: contentWidth - 20 });

  yPos += 20;
  addText("", 8, "bold", [45, 80, 65]);
  doc.text("STATUS: LAUNCH READY", pageWidth / 2, yPos, { align: "center" });

  // Footer on all pages
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    addText("", 8, "normal", [150, 150, 150]);
    doc.text(
      `OmKneeHealth Compliance Audit Report | Page ${i} of ${pageCount} | Generated ${auditData.auditDate}`,
      pageWidth / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: "center" }
    );
  }

  // Save
  doc.save(`OmKneeHealth-Compliance-Audit-${new Date().toISOString().split("T")[0]}.pdf`);
};
