import { HowWeWorkPage } from "@/components/site/pages/HowWeWorkPage";
import { enPage } from "@/lib/pages";

const page = enPage("how-we-work", HowWeWorkPage);
export const generateMetadata = page.generateMetadata;
export default page.Page;
