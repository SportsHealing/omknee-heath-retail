import { Stethoscope, GraduationCap } from "lucide-react";

const FoundersStory = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Story
          </h2>
          <p className="text-lg text-muted-foreground">
            How clinical frustration became a mission for better knee health education
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p>
            OmKneeHealth was founded by clinicians who spent years working directly 
            with patients seeking guidance on knee concerns. In clinic after 
            clinic, we saw the same pattern: people arriving overwhelmed by conflicting 
            information, confused by aggressive supplement marketing, and unsure what 
            actually mattered for their knee health.
          </p>

          <p>
            We saw patients who had spent hundreds of pounds on products that made 
            exaggerated claims. We met people who avoided seeking help because 
            they'd been burned before. And we worked with individuals who simply wanted 
            straight answers—not sales pitches disguised as advice.
          </p>

          <p>
            That frustration became the foundation of OmKneeHealth. We asked ourselves: 
            what if there was a resource that approached knee health the way we do in 
            our best clinical conversations? What if people could access honest, 
            evidence-based guidance without feeling pressured to purchase anything?
          </p>

          <div className="bg-muted/30 rounded-xl p-8 my-8">
            <p className="text-foreground font-medium italic text-center">
              "We built OmKneeHealth to be the resource we wished existed for our 
              patients—educational first, commercial never."
            </p>
          </div>

          <p>
            This isn't a supplement company that hired some consultants. This is a 
            clinical team that chose to build something different. Our products exist 
            because we couldn't find formulations that met our standards. Our education 
            exists because we believe knowledge should be freely accessible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Clinical Background</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Our founding team includes physiotherapists, orthopaedic specialists, 
              and sports medicine practitioners with decades of combined experience 
              in musculoskeletal health and education.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Research-Driven</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Every recommendation we make is grounded in peer-reviewed research. 
              We continuously review emerging evidence to ensure our guidance 
              reflects current best practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersStory;
