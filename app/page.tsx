import { HomePage } from "@/components/site/pages/HomePage";
import { enPage } from "@/lib/pages";

const page = enPage("home", HomePage);
export const metadata = page.metadata;
export default page.Page;
