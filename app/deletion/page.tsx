import { DeletionPage } from "@/components/site/pages/PrivacyPage";
import { enPage } from "@/lib/pages";

const page = enPage("deletion", DeletionPage);
export const generateMetadata = page.generateMetadata;
export default page.Page;
