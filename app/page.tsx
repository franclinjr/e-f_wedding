import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import CelebrationSection from "@/components/CelebrationSection";
import GiftsSection from "@/components/GiftsSection";
import GallerySection from "@/components/GallerySection";
import RsvpForm from "@/components/RsvpForm";
import SectionDivider from "@/components/SectionDivider";
import LeafDivider from "@/components/LeafDivider";

export default function Home() {
  return (
    <>
      <section id="inicio">
        <Hero />
      </section>

      <div className="px-6">
        <SectionDivider className="text-sage" />
      </div>

      <section id="celebracao" className="scroll-mt-20">
        <CelebrationSection />
      </section>

      <div className="px-6">
        <SectionDivider className="text-sage" />
      </div>

      <section id="presentes" className="scroll-mt-20">
        <GiftsSection />
      </section>

      <div className="px-6">
        <SectionDivider className="text-sage" />
      </div>

      <section id="rsvp" className="scroll-mt-20">
        <div className="py-16 px-6 max-w-3xl mx-auto text-center">
          <p className="font-script text-2xl text-sage-dark mb-2">
            Sua presença é o nosso maior presente
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">
            Confirmação de Presença
          </h2>
          <RsvpForm />
        </div>
      </section>

    </>
  );
}
