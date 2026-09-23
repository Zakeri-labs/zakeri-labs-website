import Link from "next/link";

export default function NotFound() {
  return (
    <div className="hero-glow flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="font-display text-8xl font-extrabold">
          <span className="gradient-text">404</span>
        </p>
        <h1 className="mt-4 text-2xl font-bold">Page not found · الصفحة غير موجودة</h1>
        <p className="mt-3 text-muted-foreground">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
          >
            Go home
          </Link>
          <Link
            href="/ar"
            className="rounded-full border border-input bg-surface px-6 py-3 font-semibold"
          >
            الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}
