import { ProductsPage } from "@/components/site/pages/ProductsPage";
import { enPage } from "@/lib/pages";

const page = enPage("products", ProductsPage);
export const generateMetadata = page.generateMetadata;
export default page.Page;
