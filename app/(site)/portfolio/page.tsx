import { PortfolioRoute } from "@/components/site/pages/PortfolioRoute";
import { enPage } from "@/lib/pages";

export const revalidate = 60;

const page = enPage("portfolio", PortfolioRoute);
export const generateMetadata = page.generateMetadata;
export default page.Page;
