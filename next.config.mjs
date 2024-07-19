import createNextIntlPlugin from "next-intl/plugin";
import withMDX from "@next/mdx";
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'


const withNextIntl = createNextIntlPlugin("./i18n.ts");


// Wrap the Next.js config with @next/mdx
const withMDXConfig = withMDX({
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkFrontmatter
    ],

  },
})

// Compose the plugins correctly
const nextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
};

// Apply the plugins to the Next.js configuration
export default withNextIntl(withMDXConfig(nextConfig));
