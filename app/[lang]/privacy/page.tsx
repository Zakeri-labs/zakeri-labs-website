import { PrivacyPage } from "@/components/site/pages/PrivacyPage";
import { localizedPage } from "@/lib/pages";

const page = localizedPage("privacy", PrivacyPage);
export const generateMetadata = page.generateMetadata;
export default page.Page;
