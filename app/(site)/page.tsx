import { HomePage } from "@/components/site/pages/HomePage";
import { enPage } from "@/lib/pages";

const page = enPage("home", HomePage);
export const generateMetadata = page.generateMetadata;
export default page.Page;
