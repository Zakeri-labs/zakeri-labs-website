import { ServicesPage } from "@/components/site/pages/ServicesPage";
import { enPage } from "@/lib/pages";

const page = enPage("services", ServicesPage);
export const generateMetadata = page.generateMetadata;
export default page.Page;
