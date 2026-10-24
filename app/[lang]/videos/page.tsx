import { VideosRoute } from "@/components/site/pages/VideosRoute";
import { localizedPage } from "@/lib/pages";

export const revalidate = 60;

const page = localizedPage("videos", VideosRoute);
export const generateMetadata = page.generateMetadata;
export default page.Page;
