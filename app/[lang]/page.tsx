import { HomePage } from "@/components/site/pages/HomePage";
import { localizedPage } from "@/lib/pages";

const page = localizedPage("home", HomePage);
export const generateMetadata = page.generateMetadata;
export default page.Page;
