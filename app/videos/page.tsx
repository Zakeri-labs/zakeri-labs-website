import { VideosRoute } from "@/components/site/pages/VideosRoute";
import { enPage } from "@/lib/pages";

export const revalidate = 60;

const page = enPage("videos", VideosRoute);
export const generateMetadata = page.generateMetadata;
export default page.Page;
