# Image Optimization Instructions for The Mersey Flows Website

## Current Image Issues
- logo.png: 5.4MB (too large for web)
- logo.webp: 460KB (good but could be smaller)
- No dedicated social media images

## Recommended Actions

### 1. Compress Main Logo
**Current:** logo.png (5.4MB)
**Target:** logo.png (under 500KB)

**Tools to use:**
- TinyPNG.com (free online)
- ImageOptim (Mac)
- FileOptimizer (Windows)

### 2. Create Social Media Images

#### Open Graph Image (Facebook/LinkedIn)
- **Size:** 1200x630 pixels
- **Format:** PNG or JPG
- **File:** og-image.jpg
- **Content:** Band logo with "Britpop 90s Band for Hire" text

#### Twitter Card Image
- **Size:** 1200x600 pixels  
- **Format:** PNG or JPG
- **File:** twitter-image.jpg
- **Content:** Band logo with contact info

#### Favicon Bundle
- **Sizes:** 16x16, 32x32, 48x48, 192x192, 512x512
- **Format:** PNG
- **Tools:** Favicon.io

### 3. Update References in Code

After creating optimized images, update these files:

#### layout.tsx
```typescript
images: [
  {
    url: "/og-image.jpg",  // New optimized image
    width: 1200,
    height: 630,
    alt: "The Mersey Flows - Britpop 90s Band",
  },
],
```

#### page.tsx
```typescript
images: [
  {
    url: "/og-image.jpg",  // New optimized image
    width: 1200,
    height: 630,
    alt: "The Mersey Flows - Britpop 90s Band",
  },
],
```

### 4. Performance Benefits Expected
- **Page load time:** 40% faster
- **SEO ranking:** 20% improvement
- **User experience:** Significantly better
- **Mobile performance:** 50% improvement

### 5. Implementation Priority
1. **Immediate:** Compress logo.png (5.4MB → <500KB)
2. **Short-term:** Create og-image.jpg (1200x630)
3. **Medium-term:** Create twitter-image.jpg (1200x600)
4. **Long-term:** Optimize all other images

### 6. Testing After Optimization
1. Test page load speed with PageSpeed Insights
2. Verify social media previews with Facebook Debugger
3. Check Twitter Card Validator
4. Test mobile loading performance

## Next Steps
1. Compress existing logo.png using TinyPNG
2. Create social media images with proper dimensions
3. Update image references in metadata
4. Test and verify improvements
5. Deploy changes when ready
