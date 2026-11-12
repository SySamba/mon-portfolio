import ServiceLanding, { landingMetadata } from "@/components/ServiceLanding";
import { landings } from "@/lib/landings";

const page = landings["application-mobile-dakar"];

export const metadata = landingMetadata(page);

export default function Page() {
  return <ServiceLanding page={page} />;
}
