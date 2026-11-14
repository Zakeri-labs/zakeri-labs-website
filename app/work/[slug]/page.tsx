import { enDetailRoute } from "@/lib/detail-routes";

const route = enDetailRoute("work");
export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
