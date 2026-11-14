import { IndustriesPage } from "@/components/site/pages/IndustriesPage";
import { localizedPage } from "@/lib/pages";

const page = localizedPage("industries", IndustriesPage);
export const generateMetadata = page.generateMetadata;
export default page.Page;
