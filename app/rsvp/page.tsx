import RsvpForm from "@/components/RsvpForm";
import LeafDivider from "@/components/LeafDivider";

export default function RsvpPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto text-center">
      <p className="font-script text-2xl text-sage-dark mb-2">
        Sua presença é o nosso maior presente
      </p>
      <h1 className="font-serif text-3xl md:text-4xl text-ink mb-6">
        Confirmação de Presença
      </h1>
      <LeafDivider className="mb-10 text-sage-dark" />
      <RsvpForm />
    </div>
  );
}
