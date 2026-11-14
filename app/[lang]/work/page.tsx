import { WorkPage } from "@/components/site/pages/WorkPage";
import { localizedPage } from "@/lib/pages";

const page = localizedPage("work", WorkPage);
export const generateMetadata = page.generateMetadata;
export default page.Page;
