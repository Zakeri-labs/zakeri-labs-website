import { HowWeWorkPage } from "@/components/site/pages/HowWeWorkPage";
import { localizedPage } from "@/lib/pages";

const page = localizedPage("how-we-work", HowWeWorkPage);
export const generateMetadata = page.generateMetadata;
export default page.Page;
