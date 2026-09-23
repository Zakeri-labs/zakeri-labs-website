import { ProductsPage } from "@/components/site/pages/ProductsPage";
import { localizedPage } from "@/lib/pages";

const page = localizedPage("products", ProductsPage);
export const generateMetadata = page.generateMetadata;
export default page.Page;
