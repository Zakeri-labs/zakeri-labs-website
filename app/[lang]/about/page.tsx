import { AboutPage } from "@/components/site/pages/AboutPage";
import { localizedPage } from "@/lib/pages";

const page = localizedPage("about", AboutPage);
export const generateMetadata = page.generateMetadata;
export default page.Page;
