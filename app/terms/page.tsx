import { TermsPage } from "@/components/site/pages/PrivacyPage";
import { enPage } from "@/lib/pages";

const page = enPage("terms", TermsPage);
export const generateMetadata = page.generateMetadata;
export default page.Page;
