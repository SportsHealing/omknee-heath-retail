import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import KneeScoreEmbed from "@/components/home/KneeScoreEmbed";

const Assessment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <KneeScoreEmbed />
      </main>
      <Footer />
    </div>
  );
};

export default Assessment;
