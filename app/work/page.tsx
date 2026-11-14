import { WorkPage } from "@/components/site/pages/WorkPage";
import { enPage } from "@/lib/pages";

const page = enPage("work", WorkPage);
export const generateMetadata = page.generateMetadata;
export default page.Page;
