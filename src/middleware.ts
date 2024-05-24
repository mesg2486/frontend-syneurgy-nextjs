export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/settings/:path*",
    "/teams/:path*",
    "/behavior/:path*",
    "/challenges/:path*",
    "/meetings/:path*",
  ],
};
