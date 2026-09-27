import { TermsPage } from "@/components/site/pages/PrivacyPage";
import { localizedPage } from "@/lib/pages";

const page = localizedPage("terms", TermsPage);
export const generateMetadata = page.generateMetadata;
export default page.Page;
