import { DeletionPage } from "@/components/site/pages/PrivacyPage";
import { localizedPage } from "@/lib/pages";

const page = localizedPage("deletion", DeletionPage);
export const generateMetadata = page.generateMetadata;
export default page.Page;
