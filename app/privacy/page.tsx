import { PrivacyPage } from "@/components/site/pages/PrivacyPage";
import { enPage } from "@/lib/pages";

const page = enPage("privacy", PrivacyPage);
export const generateMetadata = page.generateMetadata;
export default page.Page;
