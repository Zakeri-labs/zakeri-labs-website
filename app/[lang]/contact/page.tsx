import { ContactPage } from "@/components/site/pages/ContactPage";
import { localizedPage } from "@/lib/pages";

const page = localizedPage("contact", ContactPage);
export const generateMetadata = page.generateMetadata;
export default page.Page;
