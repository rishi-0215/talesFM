// scripts/generate-llms-txt.js
// Auto-generates llms.txt file for LLM crawlers
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const siteUrl = 'https://talesfm.com';
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
const outputPath = path.join(__dirname, '..', 'public', 'llms.txt');

// Site information
const siteInfo = {
  name: 'TalesFM',
  description: 'Discover, stream, and share your favorite music with the world\'s most advanced music platform',
  tagline: 'Your All-in-one Audio World',
};

// Page descriptions mapping
const pageDescriptions = {
  '/': 'Home page - Free online radio and music streaming platform',
  '/about-us': 'About us - Learn about TalesFM and our mission',
  '/blog': 'Blog - Articles about online radio, music streaming, and audio technology',
  '/contact-us': 'Contact us - Get in touch with our team',
  '/terms': 'Terms of Service - Legal terms and conditions',
  '/privacy-policy': 'Privacy Policy - How we handle your data and privacy',
  '/author': 'Author page - Information about content authors',
};

function getPageDescription(url) {
  const pathname = new URL(url).pathname;
  
  // Check exact match first
  if (pageDescriptions[pathname]) {
    return pageDescriptions[pathname];
  }
  
  // Check blog posts
  if (pathname.startsWith('/blog/')) {
    const slug = pathname.replace('/blog/', '').replace('/', '');
    if (slug) {
      return `Blog post: ${slug.replace(/-/g, ' ')}`;
    }
    return 'Blog post';
  }
  
  return 'Page on TalesFM';
}

function parseSitemapXml(xmlContent) {
  const urls = [];
  // Simple regex to extract <loc> tags
  const locPattern = /<loc>(.*?)<\/loc>/g;
  let match;
  
  while ((match = locPattern.exec(xmlContent)) !== null) {
    urls.push(match[1]);
  }
  
  return urls;
}

function generateLlmsTxt() {
  try {
    // Read sitemap.xml
    if (!fs.existsSync(sitemapPath)) {
      console.warn('⚠️  sitemap.xml not found. Generating llms.txt with default pages.');
      generateDefaultLlmsTxt();
      return;
    }

    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const urls = parseSitemapXml(sitemapContent);
    
    if (urls.length === 0) {
      console.warn('⚠️  No URLs found in sitemap.xml. Generating default llms.txt.');
      generateDefaultLlmsTxt();
      return;
    }

    // Sort URLs: homepage first, then main pages, then blog posts
    const sortedUrls = urls.sort((a, b) => {
      if (a === siteUrl + '/') return -1;
      if (b === siteUrl + '/') return 1;
      if (a.includes('/blog/') && !b.includes('/blog/')) return 1;
      if (!a.includes('/blog/') && b.includes('/blog/')) return -1;
      return a.localeCompare(b);
    });

    // Generate llms.txt content
    const now = new Date();
    const lastUpdated = now.toISOString().split('T')[0];
    
    let content = `# ${siteInfo.name}\n\n`;
    content += `> ${siteInfo.tagline}\n\n`;
    content += `${siteInfo.description}\n\n`;
    content += `## Available Pages\n\n`;

    // Main pages (non-blog)
    const mainPages = sortedUrls.filter(url => {
      const pathname = new URL(url).pathname;
      return !pathname.startsWith('/blog/') || pathname === '/blog';
    });

    if (mainPages.length > 0) {
      content += `### Main Pages\n\n`;
      mainPages.forEach(url => {
        const description = getPageDescription(url);
        content += `- [${description}](${url})\n`;
      });
      content += `\n`;
    }

    // Blog posts
    const blogPosts = sortedUrls.filter(url => {
      const pathname = new URL(url).pathname;
      return pathname.startsWith('/blog/') && pathname !== '/blog';
    });

    if (blogPosts.length > 0) {
      content += `### Blog Posts\n\n`;
      blogPosts.forEach(url => {
        const description = getPageDescription(url);
        content += `- [${description}](${url})\n`;
      });
      content += `\n`;
    }

    content += `## Contact\n\n`;
    content += `- Website: ${siteUrl}\n`;
    content += `- Contact Page: ${siteUrl}/contact-us\n\n`;

    content += `## Last Updated\n\n`;
    content += `This file was last updated on ${lastUpdated}.\n`;

    // Write to file
    fs.writeFileSync(outputPath, content, 'utf8');
    console.log(`✅ llms.txt generated successfully with ${sortedUrls.length} URLs.`);
    console.log(`   File saved to: ${outputPath}`);
  } catch (error) {
    console.error('❌ Error generating llms.txt:', error.message);
    // Fallback to default content
    generateDefaultLlmsTxt();
  }
}

function generateDefaultLlmsTxt() {
  const now = new Date();
  const lastUpdated = now.toISOString().split('T')[0];
  
  const content = `# ${siteInfo.name}\n\n` +
    `> ${siteInfo.tagline}\n\n` +
    `${siteInfo.description}\n\n` +
    `## Available Pages\n\n` +
    `### Main Pages\n\n` +
    `- [Home page](${siteUrl}/)\n` +
    `- [About us](${siteUrl}/about-us)\n` +
    `- [Blog](${siteUrl}/blog)\n` +
    `- [Contact us](${siteUrl}/contact-us)\n` +
    `- [Terms of Service](${siteUrl}/terms)\n` +
    `- [Privacy Policy](${siteUrl}/privacy-policy)\n` +
    `- [Author page](${siteUrl}/author)\n\n` +
    `## Contact\n\n` +
    `- Website: ${siteUrl}\n` +
    `- Contact Page: ${siteUrl}/contact-us\n\n` +
    `## Last Updated\n\n` +
    `This file was last updated on ${lastUpdated}.\n`;

  fs.writeFileSync(outputPath, content, 'utf8');
  console.log(`✅ llms.txt generated with default content.`);
}

// Run the generator
generateLlmsTxt();

