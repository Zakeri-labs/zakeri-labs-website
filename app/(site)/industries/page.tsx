import { IndustriesPage } from "@/components/site/pages/IndustriesPage";
import { enPage } from "@/lib/pages";

const page = enPage("industries", IndustriesPage);
export const generateMetadata = page.generateMetadata;
export default page.Page;
