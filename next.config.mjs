import createNextIntlPlugin from "next-intl/plugin";
import withMDX from "@next/mdx";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

// Define MDX options if needed
const mdxOptions = {};

// Wrap the Next.js config with @next/mdx
const withMDXConfig = withMDX({
  options: mdxOptions,
})

// Compose the plugins correctly
const nextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
};

// Apply the plugins to the Next.js configuration
export default withNextIntl(withMDXConfig(nextConfig));
