import { SamplePage, sampleMetadata } from "@/lib/portfolio-sample";

export const revalidate = 60;
export const dynamicParams = true;
// samples are added from the admin page, so none is known at build time
export const generateStaticParams = () => [];

export const generateMetadata = sampleMetadata;
export default SamplePage;
