import { localizedDetailRoute } from "@/lib/detail-routes";

const route = localizedDetailRoute("work");
export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
