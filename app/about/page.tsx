import { AboutPage } from "@/components/site/pages/AboutPage";
import { enPage } from "@/lib/pages";

const page = enPage("about", AboutPage);
export const metadata = page.metadata;
export default page.Page;
