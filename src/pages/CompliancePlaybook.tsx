/**
 * Compliance Playbook Download Page
 * Internal team resource for regulatory compliance
 */

import { Button } from "@/components/ui/button";
import { FileDown, Shield, CheckCircle, AlertTriangle, BookOpen } from "lucide-react";
import { generateCompliancePlaybook } from "@/lib/generateCompliancePlaybook";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const CompliancePlaybook = () => {
  const handleDownload = () => {
    generateCompliancePlaybook();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 lg:pt-56 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                Compliant Language Playbook
              </h1>
              <p className="text-muted-foreground font-sans">
                UK & EU Food Supplement Regulatory Compliance Guide
              </p>
            </div>

            {/* Download Card */}
            <div className="bg-card rounded-xl border border-border p-8 mb-8 text-center">
              <FileDown className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-xl text-foreground mb-2">
                Download PDF Guide
              </h2>
              <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                A printable reference guide for writing compliant marketing copy. 
                Keep this handy when creating content for the website, emails, or social media.
              </p>
              <Button size="lg" onClick={handleDownload} className="px-8">
                <FileDown className="w-4 h-4 mr-2" />
                Download Playbook PDF
              </Button>
            </div>

            {/* Quick Summary */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 dark:bg-green-950/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h3 className="font-serif text-lg text-foreground">Approved Language</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• "Contributes to normal..."</li>
                  <li>• "Supports" (with EFSA backing)</li>
                  <li>• "Helps maintain"</li>
                  <li>• "Evidence-informed"</li>
                  <li>• "Research explores..."</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-950/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <h3 className="font-serif text-lg text-foreground">Prohibited Language</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• "Treats" / "Cures" / "Heals"</li>
                  <li>• "Reduces pain"</li>
                  <li>• "Clinically proven"</li>
                  <li>• "Anti-inflammatory" (as claim)</li>
                  <li>• "Repairs cartilage"</li>
                </ul>
              </div>
            </div>

            {/* Regulatory Context */}
            <div className="bg-secondary/50 rounded-xl p-6 border border-border mb-8">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
                <h3 className="font-serif text-lg text-foreground">Regulatory Framework</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>UK Food Supplements Regulations 2003</strong> — Primary UK legislation</li>
                <li>• <strong>EU Regulation 1924/2006</strong> — Nutrition and health claims regulation</li>
                <li>• <strong>EFSA</strong> — European Food Safety Authority authorised claims</li>
                <li>• <strong>ASA/CAP Code</strong> — Advertising standards for marketing</li>
              </ul>
            </div>

            {/* Core Principle */}
            <div className="bg-amber-50 dark:bg-amber-950/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800 text-center">
              <p className="font-serif text-lg text-foreground mb-2">
                Core Principle
              </p>
              <p className="text-muted-foreground">
                This is a <strong>food supplement</strong>, not a medicine. 
                No disease prevention, treatment, or cure claims are permitted.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CompliancePlaybook;
