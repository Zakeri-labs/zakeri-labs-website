import { PortfolioRoute } from "@/components/site/pages/PortfolioRoute";
import { localizedPage } from "@/lib/pages";

export const revalidate = 60;

const page = localizedPage("portfolio", PortfolioRoute);
export const generateMetadata = page.generateMetadata;
export default page.Page;
