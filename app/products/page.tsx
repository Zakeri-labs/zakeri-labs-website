import { ProductsPage } from "@/components/site/pages/ProductsPage";
import { enPage } from "@/lib/pages";

const page = enPage("products", ProductsPage);
export const metadata = page.metadata;
export default page.Page;
