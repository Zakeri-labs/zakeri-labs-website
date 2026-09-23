import { ServicesPage } from "@/components/site/pages/ServicesPage";
import { localizedPage } from "@/lib/pages";

const page = localizedPage("services", ServicesPage);
export const generateMetadata = page.generateMetadata;
export default page.Page;
