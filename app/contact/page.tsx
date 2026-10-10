import { ContactPage } from "@/components/site/pages/ContactPage";
import { enPage } from "@/lib/pages";

const page = enPage("contact", ContactPage);
export const generateMetadata = page.generateMetadata;
export default page.Page;
