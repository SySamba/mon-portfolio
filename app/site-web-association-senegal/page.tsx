import ServiceLanding, { landingMetadata } from "@/components/ServiceLanding";
import { landings } from "@/lib/landings";

const page = landings["site-web-association-senegal"];

export const metadata = landingMetadata(page);

export default function Page() {
  return <ServiceLanding page={page} />;
}
