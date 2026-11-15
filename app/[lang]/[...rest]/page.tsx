import { notFound } from "next/navigation";

/** Unknown /ar/... URLs show the Arabic 404 inside the RTL site shell. */
export default function UnknownLocalizedPage() {
  notFound();
}
