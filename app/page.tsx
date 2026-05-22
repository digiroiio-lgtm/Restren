import {
  Hero,
  LeadFormSection,
  ProjectShowcase,
  ServiceGrid,
  TrustAndTestimonials,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <ProjectShowcase />
      <TrustAndTestimonials />
      <LeadFormSection />
    </>
  );
}
