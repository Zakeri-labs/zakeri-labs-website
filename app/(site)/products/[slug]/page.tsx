import { enDetailRoute } from "@/lib/detail-routes";

const route = enDetailRoute("products");
export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
