import { articleRoute } from "@/lib/article-routes";

export const generateStaticParams = articleRoute.generateStaticParams;
export const generateMetadata = articleRoute.generateMetadata;
export default articleRoute.Page;
