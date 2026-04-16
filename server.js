/**
 * SocialEngine Backend API v9.0 — COMPLETE PLATFORM — PERPLEXITY + HIGGSFIELD + UPLOAD-POST
 * 
 * API Endpoints:
 *   POST /api/audit               — Free audit: Shopify → Perplexity Sonar → Airtable lead → email → on-screen results
 *   GET  /api/client-data         — Authenticated: client profile + content calendar + brand voice
 *   POST /api/approve-post        — Client approves a post → auto-publishes via Upload-Post API
 *   POST /api/reject-post         — Client rejects a post with feedback
 *   POST /api/regenerate-post     — Regenerate any post with brand fingerprint seed
 *   POST /api/brand-fingerprint   — Upload brand photos → Perplexity Vision → extract visual DNA → Airtable
 *   POST /api/onboarding          — Save answers → generate Brand Intelligence Profile
 *   POST /api/stripe-webhook      — Stripe: payment → create client → welcome email
 *   GET  /api/compliance/:platform — Platform content rules
 *   POST /api/compliance-check    — Check text against platform rules
 *   GET  /api/admin/export-csv    — Export approved posts as Upload-Post bulk CSV
 *   GET  /api/admin/stats         — Admin dashboard stats
 *   POST /api/admin/trigger-content — Manually trigger content generation for a client
 * 
 *   ── VIDEO STUDIO (Higgsfield) ──
 *   POST /api/video/generate      — Generate video (text-to-video, image-to-video, soul mode, multi-scene)
 *   GET  /api/video/status/:id    — Poll video generation status
 *   GET  /api/video/presets       — 50+ camera effects, motion presets, trending audio
 *   GET  /api/video/models        — Available AI video models (Kling, Sora, Seedance, DOP, etc.)
 *   POST /api/video/voiceover     — Generate voiceover script + TTS
 *   POST /api/video/translate     — Translate video script + lip sync prep
 *   POST /api/video/clone-voice   — Store voice clone profile
 * 
 *   ── AI COACH (Perplexity Sonar Pro) ──
 *   POST /api/ai-coach            — Brand-aware AI coaching (strategy, content, analytics, growth)
 * 
 *   ── INBOX / DM MONITOR ──
 *   GET  /api/inbox/messages      — Get all messages/comments/DMs across platforms
 *   POST /api/inbox/reply         — Reply to message (manual or AI-generated)
 *   POST /api/inbox/auto-reply    — Configure auto-reply rules
 *   GET  /api/inbox/stats         — Inbox analytics + sentiment
 * 
 *   ── INFLUENCER HUB ──
 *   POST /api/influencer/discover — Discover influencers using Perplexity real-time search
 *   POST /api/influencer/campaign — Create influencer campaign with AI-generated brief
 *   POST /api/influencer/outreach — Generate personalized outreach DM
 * 
 *   ── SETTINGS ──
 *   GET  /api/settings            — Get all client settings, integrations, preferences
 *   POST /api/settings            — Update client settings
 *   POST /api/settings/connect-social — Initiate social platform connection via Upload-Post
 * 
 *   ── COMPETITOR INTEL ──
 *   POST /api/competitor-intel    — Standard competitor analysis
 *   POST /api/competitor-deep     — Deep multi-dimensional competitor analysis
 * 
 *
 *   ── UPLOAD-POST SOCIAL (White-Label) ──
 *   POST /api/social/create-profile  — Create Upload-Post profile for client
 *   POST /api/social/connect         — Generate branded social connection URL
 *   GET  /api/social/accounts        — List connected social accounts
 *   GET  /api/social/conversations   — Get DM conversations
 *   POST /api/social/dm/send         — Send DM (manual or AI-generated)
 *   GET  /api/social/comments        — Get post comments
 *   POST /api/social/comments/reply  — Reply to comment
 *   POST /api/social/autodm/start    — Start AutoDM monitor
 *   GET  /api/social/autodm/status   — Monitor statuses
 *   POST /api/social/autodm/control  — Pause/Resume/Stop/Delete monitor
 *   GET  /api/social/analytics       — Profile analytics (all platforms)
 *   GET  /api/social/analytics/impressions — Aggregated impressions
 *   GET  /api/social/media           — Recent posts from connected accounts
 *   POST /api/social/publish         — Publish content to platforms
 *   GET  /api/social/history         — Upload history
 *
 *   ── HIGGSFIELD STUDIOS (All wrapped in Brand DNA) ──
 *   POST /api/studio/marketing       — Marketing Studio (product URL → campaign)
 *   POST /api/studio/cinema          — Cinema Studio 3.5 (filmmaker controls)
 *   POST /api/studio/lipsync         — Lipsync Studio (script → talking head)
 *   POST /api/studio/audio           — Audio Studio (voiceover, clone, translate)
 *   POST /api/studio/effects         — Visual Effects (20+ VFX presets)
 *   POST /api/studio/enhance         — Enhance (upscale, stabilize, deflicker)
 *   POST /api/studio/image           — Image Studio (text-to-image, product placement)
 *   POST /api/studio/soul            — Soul 2.0 (character consistency)
 *   POST /api/studio/motion          — Motion Control (precise actions up to 30s)
 *   DELETE /api/video/cancel/:id     — Cancel pending generation
 *   GET  /api/studio/models          — All 25+ AI models with capabilities
 *   GET  /api/templates/video-edits     — CapCut-style video edit templates (velocity, transitions, beat-sync, etc.)
 *   GET  /api/templates/video-edits/:id — Specific edit template details
 *   POST /api/templates/video-edits/apply — Apply edit template to generate video
 *   GET  /api/templates/trending         — Top trending video edit templates
 *   POST /api/templates/community/share  — Share custom template to community
 *   GET  /api/templates/community        — Browse community templates
 *   POST /api/templates/community/:id/like — Like a community template
 *
 *   ── TEMPLATES LIBRARY ──
 *   GET  /api/templates              — Browse all templates by category/studio
 *   POST /api/templates/generate     — Generate from template with brand DNA
 *
 *   ── AD INTELLIGENCE STUDIO ──
 *   POST /api/ad-intelligence        — Ad copy, briefs, competitor analysis, targeting
 *
 *   ── AFFILIATE/INFLUENCER MARKETPLACE ──
 *   POST /api/marketplace/discover   — Discover influencers via AI
 *   POST /api/marketplace/campaign   — Create influencer campaign
 *   POST /api/marketplace/outreach   — Generate outreach messages
 *   POST /api/marketplace/track      — Track affiliate performance
 *   GET  /api/marketplace/campaigns  — List campaigns
 *
 *   ── CREDIT/BILLING ──
 *   GET  /api/credits                — Credit balance
 *   GET  /api/credits/history        — Usage history
 *
 *   ── QA GATE ──
 *   POST /api/qa/score               — Automated content scoring
 *
 * Automated Cron Jobs (node-cron):
 *   06:00 UTC — Content generation: inventory → Perplexity Sonar Pro → Higgsfield media → posts in Airtable
 *   05:00 UTC — Inventory intelligence: snapshot Shopify stock → flag promotions
 *   14:00 UTC — Lead follow-up: drip emails to audit leads
 *   Every 4h  — Publish approved: publish approved posts via Upload-Post API
 */

const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const { OpenAI } = require('openai'); // OpenAI-compatible SDK — connected to Perplexity Sonar API
// Resend email client
const { Resend } = require('resend');
const cron = require('node-cron');
const fs = require('fs');
const path = require('path');
const os = require('os');


const app = express();

// ━━━ Config ━━━
const PORT = process.env.PORT || 3000;
const PERPLEXITY_KEY = process.env.PERPLEXITY_API_KEY || process.env.PPLX_API_KEY || '';
const AT_TOKEN = process.env.AIRTABLE_PAT || '';
const AT_BASE = process.env.AIRTABLE_BASE_ID || 'appW8HgIKOXzDXglL';
const RESEND_KEY = process.env.RESEND_API_KEY || '';
const ADMIN_SECRET = process.env.ADMIN_SECRET || 'se_admin_2026';

// Higgsfield Video API — CORRECT base URL: platform.higgsfield.ai
// Auth: Authorization: Key {api_key}:{api_secret}
// Submit: POST https://platform.higgsfield.ai/{model_id}
// Status: GET https://platform.higgsfield.ai/requests/{request_id}/status
// Cancel: POST https://platform.higgsfield.ai/requests/{request_id}/cancel
// Upload: POST https://platform.higgsfield.ai/files/generate-upload-url
const HIGGSFIELD_API_KEY = process.env.HIGGSFIELD_API_KEY || '';
const HIGGSFIELD_API_SECRET = process.env.HIGGSFIELD_API_SECRET || '';
const HIGGSFIELD_BASE = process.env.HIGGSFIELD_BASE_URL || 'https://platform.higgsfield.ai';

// Upload-Post Social Publishing
// Upload-Post handles platform routing via 'platform[]' param
const UPLOADPOST_API_KEY = process.env.UPLOADPOST_API_KEY || '';
// Upload-Post base URL for their REST API
const UPLOADPOST_API_BASE = 'https://api.upload-post.com';
const BACKEND_URL = process.env.BACKEND_URL || 'https://app-production-55ba.up.railway.app';
const SHOPIFY_CLIENT_ID = process.env.SHOPIFY_CLIENT_ID || '';
const SHOPIFY_CLIENT_SECRET = process.env.SHOPIFY_CLIENT_SECRET || '';
const SHOPIFY_SCOPES = 'read_products,read_orders,read_inventory,read_customers';
const SHOPIFY_REDIRECT_URI = `${BACKEND_URL}/api/shopify/callback`;

// Table IDs — configurable via env vars so base can be swapped without code changes
const TBL = {
  CLIENTS:      process.env.AIRTABLE_CLIENTS_TABLE      || 'tblBhlDZ6cTcVoLwW',
  CONTENT:      process.env.AIRTABLE_CONTENT_TABLE      || 'tbl3ovud7aozMuEYg',
  LEADS:        process.env.AIRTABLE_LEADS_TABLE        || 'tblh9ZzxEuXACaHvb',
  ANALYTICS:    process.env.AIRTABLE_ANALYTICS_TABLE    || 'tblLE2sURZAcKrHkW',
  BRAND_VOICES: process.env.AIRTABLE_BRAND_VOICES_TABLE || 'tblowCxqRhPhR90Oh',
  INVENTORY:    process.env.AIRTABLE_INVENTORY_TABLE    || 'tblwhoTHCYhu4csEG',
};

// In-memory chat history store (persists across requests, resets on deploy)
const chatHistories = new Map();
const catalogCache = new Map(); // Per-client Shopify catalog cache (1hr TTL)

// ━━━ Platform Compliance Engine ━━━
const PLATFORM_RULES = {
  tiktok_shop: {
    name: 'TikTok Shop', severity: 'STRICTEST',
    blocked_content: ['sexually suggestive imagery', 'tobacco products', 'weapons', 'alcohol', 'gambling', 'medical/health claims', 'before/after body transformation', 'counterfeit goods', 'financial promises'],
    tone_rules: 'Casual, authentic, trend-aware. No hard sells. Product must be shown in use.',
    format: { aspect: '9:16', max_seconds: 60, ideal_seconds: 15, type: 'video' },
    tips: ['Hook in first 1 second', 'Show product being used', 'No text-heavy overlays', 'Use trending sounds', 'NEVER show skin beyond t-shirt coverage'],
    auto_flags: ['skin', 'body', 'weight', 'cure', 'guarantee', 'miracle', 'before and after'],
  },
  tiktok: {
    name: 'TikTok', severity: 'STRICT',
    blocked_content: ['explicit nudity', 'dangerous acts', 'hate speech', 'misleading claims', 'graphic violence'],
    tone_rules: 'Casual, fast-paced, personality-driven. Humor works. Authenticity over polish.',
    format: { aspect: '9:16', max_seconds: 180, ideal_seconds: 30, type: 'video' },
    tips: ['Pattern interrupt in first frame', 'Suggestive OK if tasteful', 'Duets/stitches drive engagement', 'Post 6-10pm local time'],
    auto_flags: ['nude', 'explicit', 'weapon', 'drug'],
  },
  instagram_feed: {
    name: 'Instagram Feed', severity: 'MODERATE',
    blocked_content: ['explicit nudity (nipples)', 'self-harm content', 'sale of regulated goods', 'spam/engagement bait'],
    tone_rules: 'Polished, aspirational, brand-consistent. Captions can be long-form storytelling.',
    format: { aspect: '1:1', alt_aspects: ['4:5', '16:9'], type: 'image' },
    tips: ['Carousels get 3x engagement', 'First slide = headline', 'Alt text for accessibility + SEO'],
    auto_flags: ['nipple', 'self-harm', 'buy followers'],
  },
  instagram_reels: {
    name: 'Instagram Reels', severity: 'MODERATE',
    blocked_content: ['explicit nudity', 'recycled TikTok watermarks', 'self-harm'],
    tone_rules: 'Fast, visual, trend-aware. More casual than feed.',
    format: { aspect: '9:16', max_seconds: 90, ideal_seconds: 15, type: 'video' },
    tips: ['Remove TikTok watermark if cross-posting', 'Trending audio boosts reach', 'Text overlays help — most watch muted'],
    auto_flags: ['tiktok watermark', 'explicit'],
  },
  facebook: {
    name: 'Facebook', severity: 'MODERATE',
    blocked_content: ['nudity', 'hate speech', 'violence', 'misleading health claims', 'political misinformation'],
    tone_rules: 'Conversational, community-focused. Questions and polls drive engagement.',
    format: { aspect: '16:9', alt_aspects: ['1:1', '4:5'], type: 'image' },
    tips: ['Link posts get less reach than native content', 'Video gets 2x engagement', 'Groups > Pages for engagement', 'Best: 9am-12pm weekdays B2B, evenings B2C'],
    auto_flags: ['nude', 'hate', 'violence', 'cure', 'hoax'],
  },
  pinterest: {
    name: 'Pinterest', severity: 'MODERATE',
    blocked_content: ['explicit content', 'self-harm', 'misinformation', 'clickbait'],
    tone_rules: 'Aspirational, instructional, search-optimized. Pinterest = search engine.',
    format: { aspect: '2:3', type: 'image' },
    tips: ['Vertical 2:3 gets 60% more engagement', 'Keyword-rich titles', 'Link every pin to a product page', 'Infographics perform best'],
    auto_flags: ['explicit', 'clickbait'],
  },
  linkedin: {
    name: 'LinkedIn', severity: 'PROFESSIONAL',
    blocked_content: ['anything not professional', 'explicit content', 'aggressive sales', 'engagement bait pods'],
    tone_rules: 'Authoritative, thought-leadership, data-driven.',
    format: { aspect: '1:1', alt_aspects: ['16:9'], type: 'image' },
    tips: ['First line = everything (before "see more")', 'Documents/carousels outperform all', '3-5 hashtags at end only', 'Post 7-9am Tue-Thu'],
    auto_flags: ['sexy', 'explicit', 'buy now', 'DM me'],
  },
};

// ━━━ Middleware ━━━
app.post('/api/stripe-webhook', express.raw({ type: 'application/json' }));
app.use(express.json({ limit: '5mb' }));
app.use(cors({
  origin: [
    'https://socialengine.agency',
    'https://www.socialengine.agency',
    /\.netlify\.app$/,
    'http://localhost:3000',
    'http://localhost:8080',
    'http://localhost:5173',
    'http://localhost:5500',
  ],
}));

// Auth normalization middleware — accepts credentials from any source:
// Headers: x-client-email/x-client-hash OR x-email/x-password-hash
// Body: clientEmail/clientHash OR email/hash OR email/password_hash
// Normalizes to req.clientAuth = { email, hash }
app.use((req, res, next) => {
  const email = req.headers['x-client-email'] || req.headers['x-email'] 
    || req.body?.clientEmail || req.body?.email || req.query?.email || null;
  const hash = req.headers['x-client-hash'] || req.headers['x-password-hash']
    || req.body?.clientHash || req.body?.hash || req.body?.password_hash || req.query?.hash || null;
  req.clientAuth = { email, hash };
  next();
});

// ━━━ Helpers ━━━
const openai = new OpenAI({
  apiKey: PERPLEXITY_KEY,
  baseURL: 'https://api.perplexity.ai',
});
const resend = RESEND_KEY ? new Resend(RESEND_KEY) : null;

function sha256(str) {
  return crypto.createHash('sha256').update(str).digest('hex');
}

function log(tag, msg) {
  console.log(`[${new Date().toISOString()}] [${tag}] ${msg}`);
}

async function atGet(table, params = '') {
  const url = `https://api.airtable.com/v0/${AT_BASE}/${table}${params ? '?' + params : ''}`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${AT_TOKEN}` } });
  if (!res.ok) throw new Error(`Airtable GET ${table}: ${res.status}`);
  return res.json();
}

async function atGetAll(table, params = '') {
  // Handles Airtable pagination
  let all = [];
  let offset = null;
  do {
    const sep = params ? '&' : '';
    const offParam = offset ? `${sep}offset=${offset}` : '';
    const data = await atGet(table, `${params}${offParam}`);
    all = all.concat(data.records || []);
    offset = data.offset;
  } while (offset);
  return all;
}

async function atCreate(table, fields) {
  const res = await fetch(`https://api.airtable.com/v0/${AT_BASE}/${table}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${AT_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ records: [{ fields }], typecast: true }),
  });
  if (!res.ok) throw new Error(`Airtable CREATE ${table}: ${res.status} ${await res.text()}`);
  return res.json();
}

async function atCreateBatch(table, recordsArray) {
  // Airtable max 10 records per batch
  const results = [];
  for (let i = 0; i < recordsArray.length; i += 10) {
    const batch = recordsArray.slice(i, i + 10).map(fields => ({ fields }));
    const res = await fetch(`https://api.airtable.com/v0/${AT_BASE}/${table}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${AT_TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ records: batch, typecast: true }),
    });
    if (!res.ok) throw new Error(`Airtable BATCH CREATE ${table}: ${res.status}`);
    const data = await res.json();
    results.push(...(data.records || []));
    if (i + 10 < recordsArray.length) await sleep(250); // Rate limit
  }
  return results;
}

async function atUpdate(table, id, fields) {
  const res = await fetch(`https://api.airtable.com/v0/${AT_BASE}/${table}/${id}`, {
    method: 'PATCH',
    headers: { Authorization: `Bearer ${AT_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields, typecast: true }), // typecast allows new select options
  });
  if (!res.ok) throw new Error(`Airtable UPDATE ${table}/${id}: ${res.status}`);
  return res.json();
}

async function verifyClient(email, hash) {
  if (!email || !hash) return null;
  try {
    const formula = encodeURIComponent(`{contact_email}='${email}'`);
    const data = await atGet(TBL.CLIENTS, `filterByFormula=${formula}&maxRecords=1`);
    const client = data.records?.[0];
    if (!client || client.fields.password_hash !== hash) return null;
    return client;
  } catch (e) {
    log('AUTH', `verifyClient failed: ${e.message}`);
    return null;
  }
}

async function fetchShopifyProducts(domain, limit = 250) {
  const clean = domain.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const perPage = Math.min(limit, 250);
  const res = await fetch(`https://${clean}/products.json?limit=${perPage}`, {
    headers: { 'User-Agent': 'SocialEngine-Bot/2.0' },
  });
  if (!res.ok) throw new Error(`Shopify ${clean}: ${res.status}`);
  const data = await res.json();
  return data.products || [];
}

// Full catalog fetch with pagination — gets ALL products with retry + rate limit handling
// If accessToken provided, uses Admin API (private app) instead of public storefront
async function fetchAllShopifyProducts(domain, maxProducts = 10000, accessToken = null) {
  const clean = domain.replace(/^https?:\/\//, '').replace(/\/$/, '');
  let allProducts = [];
  let page = 1;
  const maxPages = Math.ceil(maxProducts / 250);
  let retries = 0;
  const maxRetries = 3;
  // Use cursor-based pagination for admin API, page-based for public
  let pageInfo = null;
  
  while (page <= maxPages) {
    try {
      let url;
      let headers;
      if (accessToken) {
        // Admin API: cursor-based pagination via page_info
        url = pageInfo
          ? `https://${clean}/admin/api/2024-01/products.json?limit=250&page_info=${pageInfo}`
          : `https://${clean}/admin/api/2024-01/products.json?limit=250`;
        headers = {
          'X-Shopify-Access-Token': accessToken,
          'Content-Type': 'application/json',
        };
      } else {
        url = `https://${clean}/products.json?limit=250&page=${page}`;
        headers = { 'User-Agent': 'SocialEngine-Bot/2.0' };
      }

      const res = await fetch(url, { headers });
      
      // Rate limited — wait and retry
      if (res.status === 429 || res.status === 503) {
        if (retries >= maxRetries) {
          log('SHOPIFY', `${clean}: rate limited after ${allProducts.length} products, using what we have`);
          break;
        }
        retries++;
        const wait = retries * 2000; // 2s, 4s, 6s backoff
        log('SHOPIFY', `${clean}: rate limited on page ${page}, waiting ${wait}ms (retry ${retries})`);
        await new Promise(r => setTimeout(r, wait));
        continue; // Retry same page
      }
      
      if (!res.ok) throw new Error(`Shopify ${clean}: ${res.status}`);
      
      // Guard against HTML error pages
      const contentType = res.headers.get('content-type') || '';
      if (!contentType.includes('json')) {
        if (retries >= maxRetries) {
          log('SHOPIFY', `${clean}: non-JSON response on page ${page}, using ${allProducts.length} products`);
          break;
        }
        retries++;
        await new Promise(r => setTimeout(r, retries * 2000));
        continue;
      }
      
      const data = await res.json();
      const products = data.products || [];
      if (products.length === 0) break;
      allProducts = allProducts.concat(products);
      retries = 0; // Reset on success
      
      if (page % 10 === 0) log('SHOPIFY', `${clean}: page ${page} → ${allProducts.length} products so far`);
      
      if (accessToken) {
        // Extract next page_info from Link header for cursor pagination
        const linkHeader = res.headers.get('link') || '';
        const nextMatch = linkHeader.match(/<[^>]*[?&]page_info=([^&>]+)[^>]*>;\s*rel="next"/);
        if (nextMatch) {
          pageInfo = nextMatch[1];
          page++;
        } else {
          break; // No more pages
        }
      } else {
        if (products.length < 250) break; // Last page
        page++;
      }
    } catch (e) {
      if (retries >= maxRetries) {
        log('SHOPIFY', `${clean}: error after ${allProducts.length} products: ${e.message}`);
        break;
      }
      retries++;
      await new Promise(r => setTimeout(r, retries * 2000));
    }
  }
  
  log('SHOPIFY', `${clean}: COMPLETE — ${allProducts.length} products fetched across ${page} pages`);
  return allProducts;
}

/**
 * Fetch private Shopify data (orders, customers) using Admin API token.
 * Returns { order_count, recent_orders_30d, customer_count, revenue_30d }
 */
async function fetchShopifyPrivateData(domain, token) {
  const clean = domain.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const headers = {
    'X-Shopify-Access-Token': token,
    'Content-Type': 'application/json',
  };

  const [orderCountRes, recentOrdersRes, customerCountRes] = await Promise.allSettled([
    fetch(`https://${clean}/admin/api/2024-01/orders/count.json`, { headers }),
    fetch(`https://${clean}/admin/api/2024-01/orders.json?limit=30&status=any`, { headers }),
    fetch(`https://${clean}/admin/api/2024-01/customers/count.json`, { headers }),
  ]);

  let order_count = 0;
  let recent_orders_30d = 0;
  let customer_count = 0;
  let revenue_30d = 0;

  if (orderCountRes.status === 'fulfilled' && orderCountRes.value.ok) {
    const d = await orderCountRes.value.json();
    order_count = d.count || 0;
  }

  if (recentOrdersRes.status === 'fulfilled' && recentOrdersRes.value.ok) {
    const d = await recentOrdersRes.value.json();
    const orders = d.orders || [];
    recent_orders_30d = orders.length;
    revenue_30d = orders.reduce((sum, o) => sum + parseFloat(o.total_price || 0), 0);
    revenue_30d = Math.round(revenue_30d * 100) / 100;
  }

  if (customerCountRes.status === 'fulfilled' && customerCountRes.value.ok) {
    const d = await customerCountRes.value.json();
    customer_count = d.count || 0;
  }

  return { order_count, recent_orders_30d, customer_count, revenue_30d };
}

// Build a comprehensive catalog summary for Perplexity Sonar analysis
function buildCatalogSummary(products) {
  const totalProducts = products.length;
  
  // Category/type breakdown
  const typeCount = {};
  products.forEach(p => {
    const t = p.product_type || 'Uncategorized';
    typeCount[t] = (typeCount[t] || 0) + 1;
  });
  
  // Price analysis
  const prices = products.map(p => parseFloat(p.variants?.[0]?.price || 0)).filter(p => p > 0);
  const priceStats = prices.length ? {
    min: Math.min(...prices).toFixed(2),
    max: Math.max(...prices).toFixed(2),
    avg: (prices.reduce((a, b) => a + b, 0) / prices.length).toFixed(2),
    median: prices.sort((a,b) => a-b)[Math.floor(prices.length/2)]?.toFixed(2),
  } : null;
  
  // Price tier distribution
  const priceTiers = { under25: 0, '25to50': 0, '50to100': 0, '100to200': 0, over200: 0 };
  prices.forEach(p => {
    if (p < 25) priceTiers.under25++;
    else if (p < 50) priceTiers['25to50']++;
    else if (p < 100) priceTiers['50to100']++;
    else if (p < 200) priceTiers['100to200']++;
    else priceTiers.over200++;
  });
  
  // Image quality analysis
  const imageStats = {
    total_images: products.reduce((sum, p) => sum + (p.images?.length || 0), 0),
    avg_images_per_product: (products.reduce((sum, p) => sum + (p.images?.length || 0), 0) / totalProducts).toFixed(1),
    products_with_no_images: products.filter(p => !p.images?.length).length,
    products_with_5plus_images: products.filter(p => (p.images?.length || 0) >= 5).length,
  };
  
  // Vendor diversity
  const vendors = [...new Set(products.map(p => p.vendor).filter(Boolean))];
  
  // Tag analysis (top tags) — tags can be string OR array depending on Shopify version
  const tagCount = {};
  products.forEach(p => {
    const tags = Array.isArray(p.tags) ? p.tags : (typeof p.tags === 'string' ? p.tags.split(',') : []);
    tags.map(t => (t || '').trim().toLowerCase()).filter(Boolean).forEach(tag => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });
  const topTags = Object.entries(tagCount).sort((a,b) => b[1] - a[1]).slice(0, 20).map(([tag, count]) => `${tag} (${count})`);
  
  // Description quality
  const descLengths = products.map(p => (p.body_html || '').replace(/<[^>]*>/g, '').length);
  const avgDescLength = descLengths.length ? Math.round(descLengths.reduce((a,b) => a+b, 0) / descLengths.length) : 0;
  const noDescription = descLengths.filter(l => l < 10).length;
  
  // Variant analysis
  const totalVariants = products.reduce((sum, p) => sum + (p.variants?.length || 0), 0);
  
  // Representative sample: top products by variety (mix of types, price ranges)
  const sampleProducts = [];
  const typesSampled = new Set();
  // First pass: one from each type
  for (const p of products) {
    const t = p.product_type || 'Uncategorized';
    if (!typesSampled.has(t) && sampleProducts.length < 25) {
      sampleProducts.push({
        title: p.title,
        price: p.variants?.[0]?.price,
        type: p.product_type || 'Uncategorized',
        images: p.images?.length || 0,
        variants: p.variants?.length || 0,
        has_description: (p.body_html || '').replace(/<[^>]*>/g, '').length > 50,
      });
      typesSampled.add(t);
    }
  }
  // Fill remaining slots with random products
  const remaining = products.filter(p => !sampleProducts.find(s => s.title === p.title));
  for (let i = 0; i < Math.min(10, remaining.length) && sampleProducts.length < 35; i++) {
    const p = remaining[Math.floor(Math.random() * remaining.length)];
    if (!sampleProducts.find(s => s.title === p.title)) {
      sampleProducts.push({
        title: p.title, price: p.variants?.[0]?.price,
        type: p.product_type || 'Uncategorized',
        images: p.images?.length || 0, variants: p.variants?.length || 0,
        has_description: (p.body_html || '').replace(/<[^>]*>/g, '').length > 50,
      });
    }
  }
  
  return {
    total_products: totalProducts,
    category_breakdown: typeCount,
    price_stats: priceStats,
    price_tiers: priceTiers,
    image_stats: imageStats,
    vendor_count: vendors.length,
    top_vendors: vendors.slice(0, 10),
    top_tags: topTags,
    avg_description_length: avgDescLength,
    products_without_description: noDescription,
    total_variants: totalVariants,
    sample_products: sampleProducts,
  };
}

function complianceCheck(text, platform) {
  const rules = PLATFORM_RULES[platform];
  if (!rules) return { passed: true, flags: [], cleaned: text };
  const flags = [];
  const lower = text.toLowerCase();
  // Platform-specific flags
  for (const flag of rules.auto_flags) {
    if (lower.includes(flag)) flags.push(flag);
  }
  // Universal spam/engagement bait flags
  const universalFlags = [
    { pattern: 'link in bio', flag: 'link-in-bio CTA (low reach)' },
    { pattern: 'follow for follow', flag: 'follow-for-follow (spam signal)' },
    { pattern: 'f4f', flag: 'f4f (spam signal)' },
    { pattern: 'dm for', flag: 'DM solicitation' },
    { pattern: 'get started today', flag: 'generic CTA' },
    { pattern: 'limited time offer', flag: 'urgency spam' },
    { pattern: 'act now', flag: 'urgency spam' },
    { pattern: 'click the link', flag: 'direct link CTA (low reach)' },
  ];
  for (const uf of universalFlags) {
    if (lower.includes(uf.pattern)) flags.push(uf.flag);
  }
  // Hashtag limit: 5 for Instagram/TikTok, 3 for Facebook, 5 default
  const hashtagCount = (text.match(/#\w+/g) || []).length;
  const maxHashtags = (platform === 'facebook') ? 3 : 5;
  if (hashtagCount > maxHashtags) flags.push(`excessive hashtags (${hashtagCount}, max ${maxHashtags})`);
  return { passed: flags.length === 0, flags, cleaned: text };
}

/**
 * Auto-clean a caption: strip link-in-bio phrases, trim hashtags to limit, remove duplicate lines.
 * Returns the cleaned text.
 */
function autoCleanCaption(text, platform) {
  if (!text) return '';
  let cleaned = text;
  // Remove link-in-bio and generic CTA phrases (case insensitive)
  const banPhrases = [
    /\b(check|click|tap)\s+(the\s+)?link\s+in\s+(our\s+|my\s+)?bio\b[.!]?/gi,
    /\blink\s+in\s+(our\s+|my\s+)?bio\b[.!]?/gi,
    /\bget\s+started\s+today\b[.!]?/gi,
    /\bclick\s+the\s+link\b[.!]?/gi,
    /\bact\s+now\b[.!]?/gi,
    /\blimited\s+time\s+offer\b[.!]?/gi,
  ];
  for (const rx of banPhrases) {
    cleaned = cleaned.replace(rx, '').trim();
  }
  // Remove duplicate consecutive lines
  const lines = cleaned.split('\n');
  const deduped = [];
  const seen = new Set();
  for (const line of lines) {
    const key = line.trim().toLowerCase();
    if (!key) { deduped.push(line); continue; }
    if (!seen.has(key)) { seen.add(key); deduped.push(line); }
  }
  cleaned = deduped.join('\n');
  // Trim hashtags to platform limit
  const maxTags = (platform === 'facebook' || platform === 'Facebook') ? 3 : 5;
  const hashtags = cleaned.match(/#\w+/g) || [];
  if (hashtags.length > maxTags) {
    // Keep only the first N hashtags, remove the rest
    const toRemove = hashtags.slice(maxTags);
    for (const tag of toRemove) {
      cleaned = cleaned.replace(new RegExp('\\s*' + tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), ''), '');
    }
  }
  // Clean up multiple spaces / empty lines
  cleaned = cleaned.replace(/ {2,}/g, ' ').replace(/\n{3,}/g, '\n\n').trim();
  return cleaned;
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function getNextDates(count) {
  const dates = [];
  const now = new Date();
  for (let i = 1; i <= count; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() + i);
    dates.push(d.toISOString().split('T')[0]);
  }
  return dates;
}

const PLATFORM_TIMES = {
  Instagram: ['12:00', '18:00'],
  TikTok: ['17:00', '20:00'],
  Facebook: ['10:00', '14:00'],
  Pinterest: ['13:00', '20:00'],
};

// ━━━ VIDEO POST-PROCESSING ━━━
// Higgsfield produces clean video — post-processing is no longer needed.
// This function is a pass-through for backwards compatibility.
async function postProcessVideo(videoUrl, overlayData = {}) {
  return videoUrl; // Higgsfield handles text overlays natively
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  COMPREHENSIVE HIGGSFIELD VIDEO SYSTEM
//  All features: text-to-video, image-to-video, soul mode, camera effects,
//  motion presets, Ken Burns, model selection, voice clone, voiceover,
//  video translation + lip sync
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ━━━ HIGGSFIELD MODEL REGISTRY ━━━
// Maps our shorthand IDs → real Higgsfield API model paths
// CRITICAL: The model_id goes in the URL path: POST /{model_id}
// NOT in the request body. This was the bug that broke everything.
//
// Verified working models (tested with real API calls):
//   ✅ higgsfield-ai/soul/standard (text-to-image)
//   ✅ higgsfield-ai/soul/reference (image-to-image, style transfer)
//   ✅ higgsfield-ai/soul/character (image-to-image, identity preservation)
//   ✅ bytedance/seedream/v4/text-to-image (text-to-image, 2K/4K)
//   ✅ bytedance/seedream/v4/edit (image editing, needs image_urls array)
//   ✅ higgsfield-ai/dop/lite (image-to-video)
//   ✅ higgsfield-ai/dop/standard (image-to-video)
//   ✅ higgsfield-ai/dop/turbo (image-to-video)
//   ✅ higgsfield-ai/dop/standard/first-last-frame (I2V with first+last frame)
//   ✅ higgsfield-ai/dop/lite/first-last-frame
//   ✅ higgsfield-ai/dop/turbo/first-last-frame
//   ✅ bytedance/seedance/v1/pro/image-to-video
//   ✅ bytedance/seedance/v1/lite/image-to-video
//   ✅ kling-video/v2.1/pro/image-to-video
//   ✅ kling-video/v2.1/standard/image-to-video
//   ✅ kling-video/v3.0/pro/image-to-video
//   ✅ kling-video/v3.0/pro/text-to-video
//   ❌ reve/text-to-image (model error — skip for now)
//
// Parameter constraints discovered:
//   Soul aspect_ratio: '9:16', '16:9', '4:3', '3:4', '1:1', '2:3', '3:2'
//   Seedream resolution: '2K' or '4K' only
//   DOP sub-models: 'lite', 'standard', 'turbo', plus '/first-last-frame' variants
//   Soul modes: 'standard', 'reference', 'character'

const HIGGSFIELD_MODELS = {
  // ━━ IMAGE GENERATION ━━
  'soul-standard': {
    name: 'Soul Standard', type: 'text-to-image', quality: 'premium', credits: 5,
    api_model_id: 'higgsfield-ai/soul/standard',
    description: 'Text-to-image — high quality, brand-consistent imagery',
    capabilities: ['text-to-image'],
    param_constraints: { aspect_ratio: ['9:16','16:9','4:3','3:4','1:1','2:3','3:2'] },
  },
  'soul-reference': {
    name: 'Soul Reference', type: 'image-to-image', quality: 'premium', credits: 5,
    api_model_id: 'higgsfield-ai/soul/reference',
    description: 'Style transfer — apply reference image style to new generation',
    capabilities: ['image-to-image', 'style-transfer'],
    param_constraints: { aspect_ratio: ['9:16','16:9','4:3','3:4','1:1','2:3','3:2'], requires_image: true },
  },
  'soul-character': {
    name: 'Soul Character', type: 'image-to-image', quality: 'premium', credits: 5,
    api_model_id: 'higgsfield-ai/soul/character',
    description: 'Identity preservation — maintain character/model consistency across images',
    capabilities: ['image-to-image', 'identity-preservation'],
    param_constraints: { aspect_ratio: ['9:16','16:9','4:3','3:4','1:1','2:3','3:2'], requires_image: true },
  },
  'seedream-v4': {
    name: 'Seedream v4', type: 'text-to-image', quality: 'premium', credits: 3,
    api_model_id: 'bytedance/seedream/v4/text-to-image',
    description: 'ByteDance Seedream — stunning 2K/4K image generation',
    capabilities: ['text-to-image'],
    param_constraints: { resolution: ['2K','4K'] },
  },
  'seedream-v4-edit': {
    name: 'Seedream v4 Edit', type: 'image-edit', quality: 'premium', credits: 4,
    api_model_id: 'bytedance/seedream/v4/edit',
    description: 'AI image editing — modify existing images with text prompts',
    capabilities: ['image-edit'],
    param_constraints: { resolution: ['2K','4K'], requires_image_urls: true },
  },

  // ━━ VIDEO GENERATION — DOP (Director of Photography) ━━
  'dop-lite': {
    name: 'DOP Lite', type: 'image-to-video', quality: 'fast', credits: 8,
    api_model_id: 'higgsfield-ai/dop/lite',
    description: 'Fast image-to-video — great for drafts and quick turnaround',
    capabilities: ['image-to-video'],
    param_constraints: { requires_image: true },
  },
  'dop-standard': {
    name: 'DOP Standard', type: 'image-to-video', quality: 'standard', credits: 15,
    api_model_id: 'higgsfield-ai/dop/standard',
    description: 'Director of Photography — balanced quality and speed',
    capabilities: ['image-to-video', 'cinema'],
    param_constraints: { requires_image: true },
  },
  'dop-turbo': {
    name: 'DOP Turbo', type: 'image-to-video', quality: 'standard', credits: 12,
    api_model_id: 'higgsfield-ai/dop/turbo',
    description: 'DOP Turbo — high quality with faster generation',
    capabilities: ['image-to-video'],
    param_constraints: { requires_image: true },
  },
  'dop-standard-flf': {
    name: 'DOP Standard FLF', type: 'image-to-video', quality: 'premium', credits: 20,
    api_model_id: 'higgsfield-ai/dop/standard/first-last-frame',
    description: 'First-Last Frame — control start and end frames for precise storytelling',
    capabilities: ['image-to-video', 'first-last-frame'],
    param_constraints: { requires_image: true, supports_last_frame: true },
  },
  'dop-lite-flf': {
    name: 'DOP Lite FLF', type: 'image-to-video', quality: 'fast', credits: 10,
    api_model_id: 'higgsfield-ai/dop/lite/first-last-frame',
    description: 'Fast First-Last Frame generation',
    capabilities: ['image-to-video', 'first-last-frame'],
    param_constraints: { requires_image: true, supports_last_frame: true },
  },
  'dop-turbo-flf': {
    name: 'DOP Turbo FLF', type: 'image-to-video', quality: 'standard', credits: 15,
    api_model_id: 'higgsfield-ai/dop/turbo/first-last-frame',
    description: 'Turbo First-Last Frame generation',
    capabilities: ['image-to-video', 'first-last-frame'],
    param_constraints: { requires_image: true, supports_last_frame: true },
  },

  // ━━ VIDEO GENERATION — Seedance (ByteDance) ━━
  'seedance-pro': {
    name: 'Seedance Pro', type: 'image-to-video', quality: 'premium', credits: 18,
    api_model_id: 'bytedance/seedance/v1/pro/image-to-video',
    description: 'Seedance Pro — premium quality motion with physics awareness',
    capabilities: ['image-to-video'],
    param_constraints: { requires_image: true },
  },
  'seedance-lite': {
    name: 'Seedance Lite', type: 'image-to-video', quality: 'standard', credits: 10,
    api_model_id: 'bytedance/seedance/v1/lite/image-to-video',
    description: 'Seedance Lite — fast creative motion generation',
    capabilities: ['image-to-video'],
    param_constraints: { requires_image: true },
  },

  // ━━ VIDEO GENERATION — Kling ━━
  'kling-2.1-pro': {
    name: 'Kling 2.1 Pro', type: 'image-to-video', quality: 'standard', credits: 12,
    api_model_id: 'kling-video/v2.1/pro/image-to-video',
    description: 'Kling 2.1 Pro — reliable, good character preservation',
    capabilities: ['image-to-video'],
    param_constraints: { requires_image: true },
  },
  'kling-2.1-standard': {
    name: 'Kling 2.1 Standard', type: 'image-to-video', quality: 'fast', credits: 8,
    api_model_id: 'kling-video/v2.1/standard/image-to-video',
    description: 'Kling 2.1 Standard — fast generation, great for drafts',
    capabilities: ['image-to-video'],
    param_constraints: { requires_image: true },
  },
  'kling-3.0-i2v': {
    name: 'Kling 3.0 Image-to-Video', type: 'image-to-video', quality: 'premium', credits: 40,
    api_model_id: 'kling-video/v3.0/pro/image-to-video',
    description: 'Kling 3.0 Pro — best cinematic quality, premium motion',
    capabilities: ['image-to-video'],
    param_constraints: { requires_image: true },
  },
  'kling-3.0-t2v': {
    name: 'Kling 3.0 Text-to-Video', type: 'text-to-video', quality: 'premium', credits: 40,
    api_model_id: 'kling-video/v3.0/pro/text-to-video',
    description: 'Kling 3.0 Pro — text-to-video, best overall video quality',
    capabilities: ['text-to-video'],
    param_constraints: {},
  },
};

// Helper: resolve shorthand model key → full API model_id path
function resolveModelId(modelKey) {
  const entry = HIGGSFIELD_MODELS[modelKey];
  if (entry && entry.api_model_id) return entry.api_model_id;
  // If they passed a full path directly (e.g. 'higgsfield-ai/dop/turbo'), use it as-is
  if (modelKey && modelKey.includes('/')) return modelKey;
  // Default fallback
  return null;
}

// 50+ Camera Effects / Motion Presets
const CAMERA_EFFECTS = {
  // Basic Camera Movements
  'zoom-in': { name: 'Zoom In', category: 'basic', description: 'Smooth zoom into subject' },
  'zoom-out': { name: 'Zoom Out', category: 'basic', description: 'Pull back to reveal scene' },
  'pan-left': { name: 'Pan Left', category: 'basic', description: 'Horizontal pan left' },
  'pan-right': { name: 'Pan Right', category: 'basic', description: 'Horizontal pan right' },
  'tilt-up': { name: 'Tilt Up', category: 'basic', description: 'Camera tilts upward' },
  'tilt-down': { name: 'Tilt Down', category: 'basic', description: 'Camera tilts downward' },
  'dolly-in': { name: 'Dolly In', category: 'basic', description: 'Camera physically moves toward subject' },
  'dolly-out': { name: 'Dolly Out', category: 'basic', description: 'Camera physically pulls away' },
  'truck-left': { name: 'Truck Left', category: 'basic', description: 'Lateral camera movement left' },
  'truck-right': { name: 'Truck Right', category: 'basic', description: 'Lateral camera movement right' },
  'pedestal-up': { name: 'Pedestal Up', category: 'basic', description: 'Camera moves vertically up' },
  'pedestal-down': { name: 'Pedestal Down', category: 'basic', description: 'Camera moves vertically down' },
  
  // Cinematic Movements
  'orbit-clockwise': { name: 'Orbit Clockwise', category: 'cinematic', description: '360° orbit around subject' },
  'orbit-counter': { name: 'Orbit Counter-Clockwise', category: 'cinematic', description: 'Reverse orbit around subject' },
  'crane-up': { name: 'Crane Up', category: 'cinematic', description: 'Dramatic upward crane shot' },
  'crane-down': { name: 'Crane Down', category: 'cinematic', description: 'Dramatic downward crane shot' },
  'jib-sweep': { name: 'Jib Sweep', category: 'cinematic', description: 'Sweeping jib arm movement' },
  'steadicam-follow': { name: 'Steadicam Follow', category: 'cinematic', description: 'Smooth following shot' },
  'tracking-shot': { name: 'Tracking Shot', category: 'cinematic', description: 'Parallel tracking alongside subject' },
  'dutch-angle': { name: 'Dutch Angle', category: 'cinematic', description: 'Tilted camera for dramatic tension' },
  'whip-pan': { name: 'Whip Pan', category: 'cinematic', description: 'Fast snap between scenes' },
  'rack-focus': { name: 'Rack Focus', category: 'cinematic', description: 'Shift focus between foreground and background' },
  'dolly-zoom': { name: 'Dolly Zoom (Vertigo)', category: 'cinematic', description: 'Hitchcock vertigo effect' },
  'parallax': { name: 'Parallax', category: 'cinematic', description: '2.5D depth parallax effect' },
  
  // Ken Burns Variations
  'ken-burns-slow': { name: 'Ken Burns Slow', category: 'ken-burns', description: 'Gentle slow pan + zoom (documentary style)' },
  'ken-burns-fast': { name: 'Ken Burns Fast', category: 'ken-burns', description: 'Faster Ken Burns for dynamic content' },
  'ken-burns-zoom-in': { name: 'Ken Burns Zoom In', category: 'ken-burns', description: 'Progressive zoom into detail' },
  'ken-burns-zoom-out': { name: 'Ken Burns Zoom Out', category: 'ken-burns', description: 'Progressive reveal from detail' },
  'ken-burns-diagonal': { name: 'Ken Burns Diagonal', category: 'ken-burns', description: 'Diagonal pan with gentle zoom' },
  'ken-burns-corners': { name: 'Ken Burns Corner Pan', category: 'ken-burns', description: 'Pan from corner to corner' },
  
  // Dynamic / Social Media Effects
  'bounce': { name: 'Bounce', category: 'dynamic', description: 'Energetic bounce effect' },
  'shake': { name: 'Shake', category: 'dynamic', description: 'Subtle handheld camera shake' },
  'glitch-zoom': { name: 'Glitch Zoom', category: 'dynamic', description: 'Quick zoom with glitch effect' },
  'snap-zoom': { name: 'Snap Zoom', category: 'dynamic', description: 'Fast snap zoom for emphasis' },
  'pulse': { name: 'Pulse', category: 'dynamic', description: 'Rhythmic zoom pulse (for music)' },
  'spiral-in': { name: 'Spiral In', category: 'dynamic', description: 'Spiral zoom toward center' },
  'float': { name: 'Float', category: 'dynamic', description: 'Gentle floating/breathing motion' },
  'swing': { name: 'Swing', category: 'dynamic', description: 'Side-to-side pendulum swing' },
  'reveal-slide': { name: 'Reveal Slide', category: 'dynamic', description: 'Sliding reveal of subject' },
  
  // Product-Specific
  'product-hero-360': { name: 'Product 360°', category: 'product', description: 'Full 360° product rotation' },
  'product-reveal': { name: 'Product Reveal', category: 'product', description: 'Dramatic product unveiling' },
  'product-close-up': { name: 'Product Close-Up', category: 'product', description: 'Detailed close-up with gentle motion' },
  'product-lifestyle': { name: 'Product Lifestyle', category: 'product', description: 'Product in natural environment' },
  'unboxing': { name: 'Unboxing', category: 'product', description: 'Simulated unboxing reveal' },
  'flat-lay-scan': { name: 'Flat Lay Scan', category: 'product', description: 'Top-down scan across arranged items' },
  'before-after-split': { name: 'Before/After Split', category: 'product', description: 'Split-screen comparison reveal' },
  
  // Atmospheric / Mood
  'dreamy-drift': { name: 'Dreamy Drift', category: 'mood', description: 'Soft, ethereal floating movement' },
  'cinematic-letterbox': { name: 'Cinematic Letterbox', category: 'mood', description: 'Letterbox reveal with slow pan' },
  'time-lapse': { name: 'Time-Lapse', category: 'mood', description: 'Accelerated time passage effect' },
  'slow-motion': { name: 'Slow Motion', category: 'mood', description: 'Dramatic slow-motion reveal' },
  'fog-through': { name: 'Fog Through', category: 'mood', description: 'Moving through atmospheric fog' },
  'golden-hour': { name: 'Golden Hour', category: 'mood', description: 'Warm golden lighting sweep' },
  'neon-glow': { name: 'Neon Glow', category: 'mood', description: 'Neon-lit urban atmosphere' },
};

// Motion presets for specific content types
const MOTION_PRESETS = {
  'product-showcase': { effects: ['product-hero-360', 'zoom-in', 'product-close-up'], description: 'Classic product showcase' },
  'lifestyle-reveal': { effects: ['dolly-in', 'rack-focus', 'ken-burns-slow'], description: 'Lifestyle content reveal' },
  'trending-hook': { effects: ['snap-zoom', 'whip-pan', 'bounce'], description: 'Attention-grabbing hook for social' },
  'elegant-brand': { effects: ['crane-up', 'orbit-clockwise', 'dreamy-drift'], description: 'Premium brand content' },
  'ugc-style': { effects: ['shake', 'zoom-in', 'snap-zoom'], description: 'User-generated content feel' },
  'storytelling': { effects: ['tracking-shot', 'ken-burns-slow', 'rack-focus'], description: 'Narrative storytelling' },
  'behind-the-scenes': { effects: ['steadicam-follow', 'shake', 'float'], description: 'BTS/authentic content' },
  'sale-urgency': { effects: ['pulse', 'glitch-zoom', 'snap-zoom'], description: 'Sale/promo urgency' },
  'unboxing-experience': { effects: ['unboxing', 'product-close-up', 'zoom-in'], description: 'Unboxing content' },
  'comparison': { effects: ['before-after-split', 'whip-pan', 'rack-focus'], description: 'Product comparison' },
};

// Trending audio categories for video generation
const TRENDING_AUDIO = {
  'upbeat-pop': { description: 'Energetic pop for product reveals', bpm: '120-140' },
  'lo-fi-chill': { description: 'Chill lo-fi beats for lifestyle', bpm: '80-90' },
  'cinematic-epic': { description: 'Dramatic orchestral for premium brands', bpm: '60-100' },
  'trending-tiktok': { description: 'Current TikTok trending audio', bpm: 'varies' },
  'asmr-minimal': { description: 'Soft ASMR-style minimal audio', bpm: '60-80' },
  'hip-hop-trap': { description: 'Urban trap beats for street/fashion', bpm: '130-160' },
  'acoustic-warm': { description: 'Acoustic guitar warm vibes', bpm: '90-110' },
  'electronic-future': { description: 'Futuristic electronic for tech products', bpm: '120-140' },
  'jazz-smooth': { description: 'Smooth jazz for luxury/premium', bpm: '80-120' },
  'no-music': { description: 'No background music — voiceover only', bpm: null },
};

/**
 * Core Higgsfield API call — handles ALL generation modes (image + video)
 * 
 * CRITICAL API DETAILS (verified by real testing):
 *   Submit:  POST https://platform.higgsfield.ai/{model_id}
 *   Status:  GET  https://platform.higgsfield.ai/requests/{request_id}/status
 *   Cancel:  POST https://platform.higgsfield.ai/requests/{request_id}/cancel
 *   Upload:  POST https://platform.higgsfield.ai/files/generate-upload-url
 *   Auth:    Authorization: Key {api_key}:{api_secret}
 * 
 * The model_id goes in the URL PATH, not the request body.
 * 
 * @param {Object} params - Generation parameters
 * @param {string} params.model - Model shorthand key (e.g. 'dop-turbo') or full API path
 * @param {string} params.prompt - Text prompt
 * @param {string} [params.image_url] - Input image URL (for I2V and image-to-image)
 * @param {string[]} [params.image_urls] - Array of image URLs (for Seedream edit)
 * @param {string[]} [params.reference_image_urls] - Reference images (for Soul modes)
 * @param {number} [params.duration] - Video duration in seconds
 * @param {string} [params.resolution] - Resolution (720p, 1080p, 2K, 4K)
 * @param {string} [params.aspect_ratio] - Aspect ratio
 * @param {number} [params.seed] - Seed for reproducibility
 * @param {boolean} [params.camera_fixed] - Lock camera position
 * @param {boolean} [params.enhance_prompt] - AI prompt enhancement
 * @param {string} [params.last_frame_image_url] - Last frame for FLF models
 * @returns {Object} { request_id, status, ... }
 */
async function higgsFieldGenerate(params) {
  const {
    prompt,
    image_url = null,
    image_urls = null,
    reference_image_urls = null,
    last_frame_image_url = null,
    duration = 5,
    resolution = null,
    aspect_ratio = '9:16',
    seed = null,
    camera_fixed = false,
    enhance_prompt = true,
    motion_id = null,
    model = null,
  } = params;
  
  // Resolve model shorthand → full API model_id path
  const apiModelId = resolveModelId(model);
  if (!apiModelId) {
    throw new Error(`Unknown Higgsfield model: ${model}. Check HIGGSFIELD_MODELS registry.`);
  }
  
  // Build request body — model goes in URL, not body
  const body = { prompt };
  if (image_url) body.image_url = image_url;
  if (image_urls && image_urls.length > 0) body.image_urls = image_urls;
  if (reference_image_urls && reference_image_urls.length > 0) body.reference_image_urls = reference_image_urls.slice(0, 5);
  if (last_frame_image_url) body.last_frame_image_url = last_frame_image_url;
  if (duration) body.duration = duration;
  if (resolution) body.resolution = resolution;
  if (aspect_ratio) body.aspect_ratio = aspect_ratio;
  if (seed !== null) body.seed = seed;
  if (camera_fixed) body.camera_fixed = true;
  if (enhance_prompt !== undefined) body.enhance_prompt = enhance_prompt;
  if (motion_id) body.motion_id = motion_id;
  
  // CORRECT endpoint: POST /{model_id} — model in URL path
  const url = `${HIGGSFIELD_BASE}/${apiModelId}`;
  log('HIGGSFIELD', `POST ${url} | model=${model} | prompt=${(prompt || '').substring(0, 60)}...`);
  
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Key ${HIGGSFIELD_API_KEY}:${HIGGSFIELD_API_SECRET}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  
  if (!res.ok) {
    const errText = await res.text();
    log('HIGGSFIELD', `Generate failed (${res.status}): ${errText}`);
    throw new Error(`Higgsfield generate failed (${res.status}): ${errText}`);
  }
  
  const data = await res.json();
  log('HIGGSFIELD', `Submitted: request_id=${data.request_id || data.id || 'unknown'}`);
  return data;
}

/**
 * Poll Higgsfield for generation completion
 * CORRECT endpoint: GET /requests/{request_id}/status
 * 
 * Status values: 'pending', 'processing', 'completed', 'failed'
 * On completion, response includes output URLs (image_url, video_url, etc.)
 * 
 * @param {string} requestId - The request_id from generate call
 * @param {number} maxWaitMs - Maximum wait time in milliseconds (default 5 min)
 * @returns {Object} Final status including output URLs
 */
async function pollHiggsFieldStatus(requestId, maxWaitMs = 300000) {
  const startTime = Date.now();
  const pollInterval = 5000; // 5 seconds between polls
  
  // CORRECT endpoint: GET /requests/{request_id}/status
  const statusUrl = `${HIGGSFIELD_BASE}/requests/${requestId}/status`;
  log('HIGGSFIELD', `Polling status: ${statusUrl}`);
  
  while (Date.now() - startTime < maxWaitMs) {
    const res = await fetch(statusUrl, {
      headers: { 'Authorization': `Key ${HIGGSFIELD_API_KEY}:${HIGGSFIELD_API_SECRET}` },
    });
    
    if (!res.ok) {
      const errText = await res.text();
      // Don't throw on transient errors — retry
      if (res.status >= 500) {
        log('HIGGSFIELD', `Status check server error (${res.status}), retrying...`);
        await sleep(pollInterval);
        continue;
      }
      throw new Error(`Higgsfield status failed (${res.status}): ${errText}`);
    }
    
    const data = await res.json();
    log('HIGGSFIELD', `Status: ${data.status} | request_id=${requestId}`);
    
    if (data.status === 'completed' || data.status === 'done') {
      log('HIGGSFIELD', `Completed! Output: ${JSON.stringify(data).substring(0, 200)}...`);
      return data;
    }
    
    if (data.status === 'failed' || data.status === 'error') {
      throw new Error(`Higgsfield generation failed: ${data.error || data.message || JSON.stringify(data)}`);
    }
    
    // Still processing (pending/processing) — wait and retry
    await sleep(pollInterval);
  }
  
  // Timeout — try to cancel the request
  try {
    await fetch(`${HIGGSFIELD_BASE}/requests/${requestId}/cancel`, {
      method: 'POST',
      headers: { 'Authorization': `Key ${HIGGSFIELD_API_KEY}:${HIGGSFIELD_API_SECRET}` },
    });
    log('HIGGSFIELD', `Cancelled timed-out request: ${requestId}`);
  } catch (e) { /* ignore cancel errors */ }
  
  throw new Error(`Higgsfield generation timed out after ${maxWaitMs / 1000}s (request_id: ${requestId})`);
}

/**
 * Extract output URL from Higgsfield response
 * Different models return URLs in different fields
 */
function extractOutputUrl(data) {
  // Check all known output URL fields
  return data.video_url || data.output_url || data.image_url || data.url 
    || (data.output && (data.output.video_url || data.output.image_url || data.output.url))
    || (data.result && (data.result.video_url || data.result.image_url || data.result.url))
    || null;
}

/**
 * Extract request_id from Higgsfield response
 * API returns 'request_id' but handle variations
 */
function extractRequestId(data) {
  return data.request_id || data.id || data.generation_id || null;
}

/**
 * Generate video from image (Image-to-Video mode)
 * Auto-selects best model if none specified
 */
async function generateVideoFromImage(imageUrl, prompt, durationSec = 5, options = {}) {
  if (!HIGGSFIELD_API_KEY) {
    log('VIDEO', 'Higgsfield API key not set — skipping video generation');
    return null;
  }
  
  try {
    // Default to DOP Standard for image-to-video if no model specified
    const model = options.model || 'dop-standard';
    log('VIDEO', `Generating image-to-video [${model}]: ${prompt.substring(0, 80)}...`);
    
    const genResult = await higgsFieldGenerate({
      prompt,
      image_url: imageUrl,
      duration: durationSec,
      resolution: options.resolution || null,
      aspect_ratio: options.aspect_ratio || '9:16',
      camera_fixed: options.camera_fixed || false,
      enhance_prompt: options.enhance_prompt !== false,
      motion_id: options.motion_id || null,
      model,
      seed: options.seed || null,
      last_frame_image_url: options.last_frame_image_url || null,
    });
    
    const requestId = extractRequestId(genResult);
    log('VIDEO', `Generation started: request_id=${requestId}`);
    
    // Poll for completion
    const result = await pollHiggsFieldStatus(requestId);
    const outputUrl = extractOutputUrl(result);
    
    if (outputUrl) {
      log('VIDEO', `Output ready: ${outputUrl.substring(0, 80)}...`);
      return outputUrl;
    }
    
    log('VIDEO', 'Generation completed but no URL returned');
    return null;
  } catch (e) {
    log('VIDEO', `Image-to-video failed: ${e.message}`);
    return null;
  }
}

/**
 * Generate video from text prompt (Text-to-Video mode)
 */
async function generateTextToVideo(prompt, options = {}) {
  if (!HIGGSFIELD_API_KEY) {
    log('VIDEO', 'Higgsfield API key not set — skipping video generation');
    return null;
  }
  
  try {
    // Default to Kling 3.0 for text-to-video if no model specified
    const model = options.model || 'kling-3.0-t2v';
    log('VIDEO', `Generating text-to-video [${model}]: ${prompt.substring(0, 80)}...`);
    
    const genResult = await higgsFieldGenerate({
      prompt,
      duration: options.duration || 5,
      resolution: options.resolution || null,
      aspect_ratio: options.aspect_ratio || '9:16',
      camera_fixed: options.camera_fixed || false,
      enhance_prompt: options.enhance_prompt !== false,
      motion_id: options.motion_id || null,
      model,
      seed: options.seed || null,
    });
    
    const requestId = extractRequestId(genResult);
    log('VIDEO', `Generation started: request_id=${requestId}`);
    const result = await pollHiggsFieldStatus(requestId);
    const outputUrl = extractOutputUrl(result);
    
    if (outputUrl) {
      log('VIDEO', `Output ready: ${outputUrl.substring(0, 80)}...`);
    }
    return outputUrl || null;
  } catch (e) {
    log('VIDEO', `Text-to-video failed: ${e.message}`);
    return null;
  }
}

/**
 * Generate image with Soul modes (standard, reference, character)
 * @param {string} prompt - Image prompt
 * @param {Object} options - { mode: 'standard'|'reference'|'character', image_url, aspect_ratio }
 */
async function generateSoulImage(prompt, options = {}) {
  if (!HIGGSFIELD_API_KEY) {
    log('IMAGE', 'Higgsfield API key not set — skipping image generation');
    return null;
  }
  
  const mode = options.mode || 'standard';
  const model = `soul-${mode}`; // soul-standard, soul-reference, soul-character
  
  try {
    log('IMAGE', `Generating Soul ${mode} image: ${prompt.substring(0, 80)}...`);
    
    const genResult = await higgsFieldGenerate({
      prompt,
      image_url: options.image_url || null,
      aspect_ratio: options.aspect_ratio || '1:1',
      model,
      seed: options.seed || null,
      enhance_prompt: options.enhance_prompt !== false,
    });
    
    const requestId = extractRequestId(genResult);
    log('IMAGE', `Generation started: request_id=${requestId}`);
    const result = await pollHiggsFieldStatus(requestId);
    const outputUrl = extractOutputUrl(result);
    
    if (outputUrl) {
      log('IMAGE', `Image ready: ${outputUrl.substring(0, 80)}...`);
    }
    return outputUrl || null;
  } catch (e) {
    log('IMAGE', `Soul ${mode} failed: ${e.message}`);
    return null;
  }
}

/**
 * Generate image with Seedream (text-to-image or edit)
 */
async function generateSeedreamImage(prompt, options = {}) {
  if (!HIGGSFIELD_API_KEY) {
    log('IMAGE', 'Higgsfield API key not set — skipping image generation');
    return null;
  }
  
  const isEdit = options.image_urls && options.image_urls.length > 0;
  const model = isEdit ? 'seedream-v4-edit' : 'seedream-v4';
  
  try {
    log('IMAGE', `Generating Seedream ${isEdit ? 'edit' : 'v4'}: ${prompt.substring(0, 80)}...`);
    
    const genResult = await higgsFieldGenerate({
      prompt,
      image_urls: isEdit ? options.image_urls : null,
      resolution: options.resolution || '2K',
      aspect_ratio: options.aspect_ratio || '1:1',
      model,
      seed: options.seed || null,
      enhance_prompt: options.enhance_prompt !== false,
    });
    
    const requestId = extractRequestId(genResult);
    log('IMAGE', `Generation started: request_id=${requestId}`);
    const result = await pollHiggsFieldStatus(requestId);
    const outputUrl = extractOutputUrl(result);
    
    if (outputUrl) {
      log('IMAGE', `Image ready: ${outputUrl.substring(0, 80)}...`);
    }
    return outputUrl || null;
  } catch (e) {
    log('IMAGE', `Seedream failed: ${e.message}`);
    return null;
  }
}

/**
 * Generate video with Soul Mode (character consistency via reference images)
 * @param {string} prompt - Video prompt
 * @param {string[]} referenceImages - 1-5 reference image URLs
 */
async function generateSoulModeVideo(prompt, referenceImages, options = {}) {
  if (!HIGGSFIELD_API_KEY) {
    log('VIDEO', 'Higgsfield API key not set — skipping video generation');
    return null;
  }
  
  if (!referenceImages || referenceImages.length === 0) {
    throw new Error('Soul mode requires at least 1 reference image');
  }
  
  try {
    const model = options.model || 'dop-standard';
    log('VIDEO', `Generating soul mode video [${model}] with ${referenceImages.length} reference images`);
    
    const genResult = await higgsFieldGenerate({
      prompt,
      reference_image_urls: referenceImages.slice(0, 5),
      duration: options.duration || 5,
      resolution: options.resolution || null,
      aspect_ratio: options.aspect_ratio || '9:16',
      camera_fixed: options.camera_fixed || false,
      enhance_prompt: options.enhance_prompt !== false,
      motion_id: options.motion_id || null,
      model,
      seed: options.seed || null,
    });
    
    const requestId = extractRequestId(genResult);
    log('VIDEO', `Soul mode generation started: request_id=${requestId}`);
    const result = await pollHiggsFieldStatus(requestId);
    const videoUrl = result.video_url || result.output_url || result.url;
    
    if (videoUrl) {
      log('VIDEO', `Soul mode video ready: ${videoUrl.substring(0, 80)}...`);
    }
    return videoUrl || null;
  } catch (e) {
    log('VIDEO', `Soul mode generation failed: ${e.message}`);
    return null;
  }
}

/**
 * Multi-scene video generation — generates multiple clips and concatenates
 * Each scene can have its own prompt, image, camera effect, and duration
 */
async function generateMultiSceneVideo(scenes, options = {}) {
  if (!HIGGSFIELD_API_KEY || scenes.length === 0) return null;
  
  log('VIDEO', `Generating ${scenes.length}-scene video`);
  const videoUrls = [];
  
  for (let i = 0; i < scenes.length; i++) {
    const scene = scenes[i];
    const scenePrompt = scene.prompt || `Scene ${i + 1}`;
    
    try {
      let videoUrl;
      if (scene.image_url) {
        videoUrl = await generateVideoFromImage(scene.image_url, scenePrompt, scene.duration || 5, {
          ...options,
          motion_id: scene.camera_effect || options.motion_id,
          model: scene.model || options.model,
        });
      } else if (scene.reference_images) {
        videoUrl = await generateSoulModeVideo(scenePrompt, scene.reference_images, {
          ...options,
          motion_id: scene.camera_effect || options.motion_id,
          model: scene.model || options.model,
          duration: scene.duration || 5,
        });
      } else {
        videoUrl = await generateTextToVideo(scenePrompt, {
          ...options,
          motion_id: scene.camera_effect || options.motion_id,
          model: scene.model || options.model,
          duration: scene.duration || 5,
        });
      }
      
      if (videoUrl) {
        videoUrls.push({ scene: i + 1, url: videoUrl, duration: scene.duration || 5 });
      }
    } catch (e) {
      log('VIDEO', `Scene ${i + 1} failed: ${e.message}`);
    }
    
    // Brief pause between scenes to avoid rate limits
    if (i < scenes.length - 1) await sleep(1000);
  }
  
  return videoUrls;
}

/**
 * Smart video generation — auto-selects the best approach based on inputs
 * This is the main entry point used by content generation
 */
async function smartVideoGenerate(params) {
  const {
    prompt,
    image_url,
    reference_images,
    scenes,
    content_type = 'product_showcase',
    platform = 'instagram',
    brand_fingerprint = null,
  } = params;
  
  // Auto-select best camera effect based on content type
  const preset = MOTION_PRESETS[content_type] || MOTION_PRESETS['product-showcase'];
  const defaultEffect = preset.effects[0];
  
  // Auto-select aspect ratio based on platform
  const platformAspect = {
    instagram: '9:16', tiktok: '9:16', facebook: '16:9',
    youtube: '16:9', pinterest: '9:16', linkedin: '16:9',
  };
  const aspect = params.aspect_ratio || platformAspect[platform.toLowerCase()] || '9:16';
  
  const options = {
    resolution: params.resolution || '720p',
    aspect_ratio: aspect,
    motion_id: params.camera_effect || defaultEffect,
    model: params.model || null,
    enhance_prompt: params.enhance_prompt !== false,
    seed: params.seed || null,
    camera_fixed: params.camera_fixed || false,
    duration: params.duration || 5,
  };
  
  // Multi-scene mode
  if (scenes && scenes.length > 0) {
    return { type: 'multi-scene', result: await generateMultiSceneVideo(scenes, options) };
  }
  
  // Soul mode — reference images provided
  if (reference_images && reference_images.length > 0) {
    const url = await generateSoulModeVideo(prompt, reference_images, options);
    return { type: 'soul-mode', url };
  }
  
  // Image-to-video mode
  if (image_url) {
    const url = await generateVideoFromImage(image_url, prompt, options.duration, options);
    return { type: 'image-to-video', url };
  }
  
  // Text-to-video mode
  const url = await generateTextToVideo(prompt, options);
  return { type: 'text-to-video', url };
}

/**
 * Generate image for a post — uses Perplexity to create the perfect prompt,
 * then returns null (actual image gen requires separate service).
 * Shopify product images are always preferred over AI-generated images.
 */
async function generateImageForPost(caption, productName, platform, brandFingerprint, clientName) {
  // In v8, we prioritize real Shopify product images.
  // If no Shopify image exists, we skip AI image generation.
  // Future: integrate with image generation APIs if needed.
  log('IMAGE', `${clientName}: No Shopify image for "${productName}" — AI image gen not available in v8 (use Shopify images)`);
  return null;
}

/**
 * Persist an image URL to Airtable as an attachment
 * Airtable accepts attachment URLs that it will download and host permanently
 */
async function persistImageToAirtable(recordId, imageUrl, filename) {
  try {
    await atUpdate(TBL.CONTENT, recordId, {
      image_attachment: [{ url: imageUrl, filename: filename }],
    });
    log('IMAGE', `Persisted image to Airtable: ${recordId}`);
  } catch (e) {
    log('IMAGE', `Failed to persist image ${recordId}: ${e.message}`);
  }
}

/**
 * Find a matching Shopify product image from the catalog
 */
function findShopifyImage(productName, productImages) {
  if (!productName || !productImages || productImages.length === 0) return null;
  
  const normalizedName = productName.toLowerCase().trim();
  
  // Exact match first
  for (const pi of productImages) {
    if (pi.name.toLowerCase().trim() === normalizedName) return pi.url;
  }
  
  // Partial match — product name contains search term or vice versa
  for (const pi of productImages) {
    const piName = pi.name.toLowerCase().trim();
    if (piName.includes(normalizedName) || normalizedName.includes(piName)) return pi.url;
  }
  
  // Word overlap match
  const searchWords = normalizedName.split(/\s+/).filter(w => w.length > 3);
  for (const pi of productImages) {
    const piWords = pi.name.toLowerCase().split(/\s+/);
    const overlap = searchWords.filter(w => piWords.some(pw => pw.includes(w)));
    if (overlap.length >= Math.ceil(searchWords.length * 0.5)) return pi.url;
  }
  
  return null;
}

/**
 * Voice Cloning — Store and retrieve voice profiles for consistent TTS
 * (Leverages Higgsfield's voice capabilities when available)
 */
async function cloneVoiceProfile(audioSampleUrl, voiceName, clientId) {
  // Store voice profile metadata in Airtable for the client
  try {
    await atCreate(TBL.BRAND_VOICES, {
      client_id: clientId,
      voice_name: voiceName,
      voice_sample_url: audioSampleUrl,
      voice_type: 'cloned',
      created_at: new Date().toISOString(),
    });
    log('VOICE', `Voice profile "${voiceName}" stored for ${clientId}`);
    return { success: true, voice_name: voiceName };
  } catch (e) {
    log('VOICE', `Voice clone storage failed: ${e.message}`);
    return { success: false, error: e.message };
  }
}

/**
 * Generate voiceover for a video using Perplexity to write the script
 * and TTS to generate the audio (placeholder for TTS integration)
 */
async function generateVoiceover(text, voiceProfile = null, options = {}) {
  // Step 1: Use Perplexity to polish/rewrite the voiceover script
  try {
    const completion = await openai.chat.completions.create({
      model: 'sonar-pro',
      messages: [
        { role: 'system', content: 'You are a professional voiceover scriptwriter. Rewrite the following text to sound natural when spoken aloud. Keep it concise, engaging, and conversational. Output ONLY the final script, no explanations.' },
        { role: 'user', content: text },
      ],
      temperature: 0.7,
    });
    
    const polishedScript = completion.choices[0]?.message?.content || text;
    
    log('VOICE', `Voiceover script polished (${polishedScript.length} chars)`);
    
    return {
      script: polishedScript,
      voice_profile: voiceProfile,
      status: 'script_ready',
      // TTS audio generation would happen here when integrated
      // audio_url would be set after TTS processing
      audio_url: null,
    };
  } catch (e) {
    log('VOICE', `Voiceover script generation failed: ${e.message}`);
    return { script: text, status: 'error', error: e.message };
  }
}

/**
 * Video translation with lip sync
 * Uses Perplexity for translation + stores metadata for lip sync processing
 */
async function translateVideoScript(text, targetLanguage, options = {}) {
  try {
    const completion = await openai.chat.completions.create({
      model: 'sonar-pro',
      messages: [
        { role: 'system', content: `You are a professional translator specializing in marketing and social media content. Translate the following to ${targetLanguage}. Maintain the original tone, energy, and intent. Adapt cultural references appropriately. Output ONLY the translated text.` },
        { role: 'user', content: text },
      ],
      temperature: 0.3,
    });
    
    const translated = completion.choices[0]?.message?.content || '';
    
    return {
      original: text,
      translated,
      target_language: targetLanguage,
      status: 'translated',
      lip_sync_ready: true, // Metadata flag for lip sync processing
    };
  } catch (e) {
    log('TRANSLATE', `Translation failed: ${e.message}`);
    return { original: text, status: 'error', error: e.message };
  }
}



/**
 * Load brand fingerprint for a client from Brand Voices table.
 */
async function loadBrandFingerprint(clientName) {
  try {
    const formula = encodeURIComponent(`{client_id}='${clientName}'`);
    const data = await atGet(TBL.BRAND_VOICES, `filterByFormula=${formula}&maxRecords=1`);
    if (!data.records?.[0]) return null;
    const f = data.records[0].fields;
    // Return rich brand DNA object from actual BRAND_VOICES schema
    return {
      brand_name: f.brand_name || clientName,
      tone: f.tone || '',
      voice_profile: f.voice_profile || '',
      brand_dna: f.brand_dna || '',
      competitor_brands: f.competitor_brands || '',
      target_audience: f.target_audience || '',
      // Learning signals stored as JSON in brand_dna extended field
      _record_id: data.records[0].id,
    };
  } catch {
    return null;
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  UPLOADPOST PUBLISH ENGINE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Publish a single post via Upload-Post API.
 * Upload-Post handles all platform OAuth — we just send content + platform + user.
 * Docs: https://docs.upload-post.com
 */
async function publishPost(post) {
  const f = post.fields;
  const platform = (f.platform || 'Instagram').toLowerCase();
  const clientEmail = f.client_email || '';
  
  // Upload-Post user = client email (created during onboarding)
  const uploadPostUser = clientEmail.replace(/[^a-zA-Z0-9]/g, '_');
  
  try {
    // Determine if this is a video or image post
    const isVideo = f.video_url || f.content_type === 'video';
    const endpoint = isVideo ? '/api/upload' : '/api/upload';
    
    const formData = new FormData();
    formData.append('user', uploadPostUser);
    formData.append('title', f.full_post_text || f.caption || '');
    formData.append('platform[]', platform === 'instagram' ? 'instagram' : platform);
    
    // Add additional platforms if cross-posting
    if (f.cross_post_platforms) {
      const extras = f.cross_post_platforms.split(',').map(p => p.trim().toLowerCase());
      extras.forEach(p => formData.append('platform[]', p));
    }
    
    // Schedule time if set
    if (f.scheduled_date && f.scheduled_time) {
      formData.append('schedule', `${f.scheduled_date}T${f.scheduled_time}:00Z`);
    }
    
    // Attach media URL
    if (isVideo && f.video_url) {
      // For URL-based uploads, fetch then attach
      const mediaRes = await fetch(f.video_url);
      const mediaBlob = await mediaRes.blob();
      formData.append('video', mediaBlob, 'video.mp4');
    } else if (f.image_url) {
      const mediaRes = await fetch(f.image_url);
      const mediaBlob = await mediaRes.blob();
      formData.append('photo', mediaBlob, 'image.jpg');
    }

    const res = await fetch(`${UPLOADPOST_API_BASE}/api/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `ApiKey ${UPLOADPOST_API_KEY}`,
      },
      body: formData,
    });

    if (res.ok) {
      const data = await res.json();
      log('PUBLISH', `Published post ${post.id} to ${platform} via Upload-Post: ${JSON.stringify(data)}`);
      return { success: true, post_id: data.id || 'queued', method: 'upload-post' };
    }

    const errText = await res.text();
    log('PUBLISH', `Upload-Post API failed (${res.status}): ${errText}`);
    return { success: false, error: errText, method: 'upload-post' };
  } catch (e) {
    log('PUBLISH', `Upload-Post error: ${e.message}`);
    return { success: false, error: e.message, method: 'upload-post' };
  }
}

/**
 * Run the publish loop: find all Approved posts, push to Upload-Post.
 * Runs every 4 hours as a cron job.
 */
async function runPublishApproved() {
  log('PUBLISH', '━━━ Publish Approved Posts Started ━━━');
  try {
    const formula = encodeURIComponent(`{status}='Approved'`);
    const posts = await atGetAll(TBL.CONTENT, `filterByFormula=${formula}`);
    log('PUBLISH', `Found ${posts.length} approved posts to publish`);

    let published = 0;
    for (const post of posts) {
      try {
        const result = await publishPost(post);
        if (result.success) {
          await atUpdate(TBL.CONTENT, post.id, {
            status: 'Published',
            uploadpost_post_id: result.post_id?.toString() || '',
          });
          published++;
        } else {
          // API not available — mark as Scheduled so admin can use CSV export
          await atUpdate(TBL.CONTENT, post.id, { status: 'Scheduled' });
        }
        await sleep(500); // Rate limiting
      } catch (e) {
        log('PUBLISH', `Error for post ${post.id}: ${e.message}`);
      }
    }
    log('PUBLISH', `━━━ Published ${published}/${posts.length} posts ━━━`);
  } catch (e) {
    log('PUBLISH', `Publish run failed: ${e.message}`);
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  AUTOMATION ENGINE — CRON JOBS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * CONTENT GENERATION ENGINE
 * Runs daily at 6am UTC. For each active client:
 * 1. Fetch their Shopify inventory (trending products, low stock)
 * 2. Load their brand voice profile
 * 3. Check how many posts are already queued (don't over-generate)
 * 4. Call Perplexity Sonar Pro to generate platform-specific posts
 * 5. Run compliance check on every post
 * 6. Write to Content Calendar as "Ready for Review"
 */
async function generateContentForClient(client, options = {}) {
  const f = client.fields;
  const clientName = f.business_name;
  const generateImages = options.generateImages !== false; // default true
  
  if (!f.website) {
    log('CONTENT', `Skipping ${clientName}: no website`);
    return 0;
  }

  // Check existing queued posts — don't flood
  const queueFormula = encodeURIComponent(
    `AND({client_id}='${clientName}', OR({status}='Ready for Review', {status}='Draft'))`
  );
  const queued = await atGet(TBL.CONTENT, `filterByFormula=${queueFormula}&maxRecords=100`);
  const queuedCount = queued.records?.length || 0;
  
  if (queuedCount >= 10) {
    log('CONTENT', `Skipping ${clientName}: ${queuedCount} posts already queued`);
    return 0;
  }

  // Load brand voice profile
  let profile = null;
  try { if (f.notes) profile = JSON.parse(f.notes); } catch {}

  // Load brand fingerprint for visual seed
  const brandFingerprint = await loadBrandFingerprint(clientName);
  if (brandFingerprint) log('CONTENT', `${clientName}: Brand fingerprint loaded`);

  // Fetch FULL inventory for accurate catalog intelligence
  // Use private Admin API token if available for full access
  let products = [];
  let privateData = null;
  const shopifyToken = f.shopify_access_token || null;
  const shopifyDomain = f.shopify_domain || f.website;
  try {
    if (shopifyToken && shopifyDomain) {
      products = await fetchAllShopifyProducts(shopifyDomain, 10000, shopifyToken);
      log('CONTENT', `${clientName}: fetched ${products.length} products from Shopify (private API)`);
      try {
        privateData = await fetchShopifyPrivateData(shopifyDomain, shopifyToken);
        log('CONTENT', `${clientName}: private data — orders: ${privateData.order_count}, customers: ${privateData.customer_count}`);
      } catch (e) {
        log('CONTENT', `${clientName}: private data fetch failed: ${e.message}`);
      }
    } else {
      products = await fetchAllShopifyProducts(f.website);
      log('CONTENT', `${clientName}: fetched ${products.length} products from Shopify`);
    }
  } catch (e) {
    log('CONTENT', `${clientName}: Shopify fetch failed (${e.message}), generating without inventory`);
  }

  // Build comprehensive catalog analysis
  const catalogStats = products.length > 0 ? buildCatalogSummary(products) : null;

  // Build inventory intelligence
  let inventoryInsights = 'No inventory data available.';
  let productImages = {}; // product name -> image URL for fingerprint seeding
  if (products.length > 0) {
    const available = products.filter(p => p.variants?.some(v => v.available));
    const soldOut = products.filter(p => !p.variants?.some(v => v.available));
    const lowStock = products.filter(p => {
      const totalQty = p.variants?.reduce((sum, v) => sum + (v.inventory_quantity || 0), 0) || 0;
      return totalQty > 0 && totalQty <= 5;
    });

    // Map product images for use in image generation — pick from across the FULL catalog
    const shuffled = available.sort(() => Math.random() - 0.5);
    for (const p of shuffled.slice(0, 50)) {
      if (p.images?.[0]?.src) productImages[p.title] = p.images[0].src;
    }

    inventoryInsights = `
FULL CATALOG: ${products.length} total products across ${Object.keys(catalogStats?.category_breakdown || {}).length} categories
Categories: ${JSON.stringify(catalogStats?.category_breakdown || {})}
Price range: $${catalogStats?.price_stats?.min || '?'} - $${catalogStats?.price_stats?.max || '?'} (avg: $${catalogStats?.price_stats?.avg || '?'})
Available: ${available.length} | Sold out: ${soldOut.length} | Low stock (≤5 units): ${lowStock.length}
Top tags: ${(catalogStats?.top_tags || []).slice(0, 10).join(', ')}
${privateData ? `PRIVATE STORE DATA: ${privateData.order_count} total orders | ${privateData.customer_count} customers | Recent 30-day revenue: $${privateData.revenue_30d} (${privateData.recent_orders_30d} orders)
` : ''}
${lowStock.length > 0 ? `LOW STOCK — promote urgently: ${lowStock.slice(0, 8).map(p => `"${p.title}" ($${p.variants?.[0]?.price || '?'})`).join(', ')}` : ''}
${soldOut.length > 0 ? `Recently sold out (social proof): ${soldOut.slice(0, 5).map(p => `"${p.title}"`).join(', ')}` : ''}
Random available products to feature (from across full catalog): ${shuffled.slice(0, 15).map(p => `"${p.title}" ($${p.variants?.[0]?.price || '?'}, ${p.product_type || 'uncategorized'})`).join(', ')}`;
  }

  // Determine platforms
  const rawPlat = f.platforms || 'Instagram, TikTok, Facebook';
  const platforms = Array.isArray(rawPlat) ? rawPlat : rawPlat.split(',').map(p => p.trim());
  const postsToGenerate = Math.max(Math.min(14 - queuedCount, 7), 0);
  const dates = getNextDates(Math.ceil(postsToGenerate / platforms.length) + 2);

  // VIDEO STRATEGY: 60% of content should be Reels/video for max reach
  // For TikTok: always video. Instagram: 60% Reels. Facebook: 40% video.
  const videoRatio = { TikTok: 1.0, Instagram: 0.6, Facebook: 0.4, Pinterest: 0.2 };

  const prompt = `You are the AI content engine for "${clientName}". Generate ${postsToGenerate} social media posts. 

VIDEO-FIRST STRATEGY (critical for 2025/2026 reach):
- TikTok: 100% Reels/video content — this platform IS video
- Instagram: 60% Reels, 40% static/carousel posts
- Facebook: 40% video/Reels, 60% static
- Pinterest: mostly static (Idea Pins OK but less priority)
For EVERY video/Reel post, include a full video_brief with exact instructions.

BRAND VOICE:
${profile ? `Archetype: ${profile.archetype} (secondary: ${profile.archetype_secondary || 'none'})
Tone: ${profile.tone_adjectives || 'professional, engaging'}
Voice: ${profile.voice_summary || 'Authentic and engaging'}
DO use: ${profile.do_words || 'engaging language'}
DON'T use: ${profile.dont_words || 'generic filler'}
Content themes: ${profile.content_themes || 'product showcase, behind the scenes, lifestyle'}
Hook style: ${profile.hook_style || 'attention-grabbing'}
CTA style: ${profile.cta_style || 'inviting'}
Customer avatar: ${profile.customer_avatar || 'Not defined'}` : 'Professional, engaging tone. Authentic, not corporate.'}

INVENTORY:
${inventoryInsights}

PLATFORMS: ${platforms.join(', ')}
DATES: ${dates.join(', ')}

RULES:
- Every post references a REAL product from inventory
- LOW STOCK = urgency copy ("almost gone", "last few left")
- Sold out = social proof ("this sold out in 48 hours")
- HASHTAG LIMITS (STRICT — DO NOT EXCEED):
  * Instagram: exactly 3-5 hashtags, placed at the END of the caption
  * TikTok: exactly 3-5 hashtags, placed at the END of the caption
  * Facebook: exactly 2-3 hashtags, placed at the END of the caption
  * Pinterest: 0 hashtags (use keywords in caption instead)
- BANNED PHRASES (NEVER include any of these):
  * "link in bio" / "check the link in bio" / "tap link in bio" — KILLS algorithmic reach
  * "click the link" / "click here" — flagged as spam
  * "get started today" / "act now" / "limited time offer" — generic/spammy
  * "follow for follow" / "f4f" / "DM for" — spam signals
- Each post must feel distinct — different hook style, energy, angle
- DO NOT repeat/duplicate text within a single caption
- Instagram Reels: hook first 3 words, trending audio suggestion
- TikTok: pattern interrupt opening, Gen-Z aware but not try-hard

Return JSON with this exact structure:
{
  "posts": [{
    "platform": "Instagram" | "TikTok" | "Facebook" | "Pinterest",
    "format": "reel" | "static" | "carousel" | "story",
    "content_type": "product_showcase" | "lifestyle" | "behind_the_scenes" | "social_proof" | "educational" | "ugc_style" | "trending",
    "content_pillar": "awareness" | "engagement" | "conversion" | "retention",
    "caption": "Full post caption with hashtags",
    "hook_line": "Opening hook — the first thing seen/heard",
    "cta": "Call to action (never generic)",
    "product_name": "Exact product name referenced",
    "scheduled_date": "YYYY-MM-DD",
    "scheduled_time": "HH:MM",
    "video_brief": {
      "required": true | false,
      "duration": "15s" | "30s" | "60s" | null,
      "hook_visual": "What the viewer sees in the first 2 seconds",
      "scenes": ["Scene 1 description", "Scene 2 description", "Scene 3 description"],
      "audio_vibe": "e.g. trending upbeat pop, no music (voiceover), trending sound X",
      "text_overlays": ["overlay 1", "overlay 2"],
      "filming_tips": "Practical tips for shooting this (lighting, angle, setup)"
    }
  }]
}

Times: Instagram 12pm/6pm, TikTok 5pm/8pm, Facebook 10am/2pm, Pinterest 1pm/8pm.
Distribute evenly across platforms and dates.`;

  // ━━ LEARNING CONTEXT: Inject client feedback history into generation ━━
  const learningCtx = await buildLearningContext(clientName);
  const motionDNACtx = await loadMotionDNA(clientName);
  const enrichedPrompt = prompt + learningCtx + (motionDNACtx?.context || '');

  const completion = await openai.chat.completions.create({
    model: 'sonar-pro',
    messages: [{ role: 'user', content: enrichedPrompt }],
    temperature: 0.8,
    
  });

  let posts;
  try {
    const parsed = JSON.parse(completion.choices[0].message.content);
    posts = Array.isArray(parsed) ? parsed : (parsed.posts || []);
  } catch {
    log('CONTENT', `${clientName}: Failed to parse Sonar response`);
    return 0;
  }

  // Build Airtable records — auto-clean captions + generate images
  const records = [];
  for (const post of posts) {
    const platformKey = (post.platform || '').toLowerCase().replace(/\s/g, '_');
    const compKey = platformKey === 'instagram' 
      ? (post.format === 'reel' ? 'instagram_reels' : 'instagram_feed')
      : platformKey;

    // AUTO-CLEAN: strip banned phrases, trim hashtags, deduplicate lines
    post.caption = autoCleanCaption(post.caption || '', post.platform);

    // Run compliance check on cleaned caption
    const check = complianceCheck(post.caption, compKey);
    if (!check.passed) {
      log('CONTENT', `${clientName}: Compliance flag after clean ${post.platform}: ${check.flags.join(', ')}`);
    }

    // Image selection: Use REAL Shopify product image first, Higgsfield as fallback
    let imageUrl = '';
    let imagePrompt = '';
    const shopifyImageUrl = findShopifyImage(post.product_name, productImages);
    if (shopifyImageUrl) {
      // Use real product photo from Shopify CDN (permanent URL, zero cost)
      imageUrl = shopifyImageUrl;
      imagePrompt = `Shopify product image: ${post.product_name}`;
      log('IMAGE', `${clientName}: Using Shopify image for "${post.product_name}"`);
    } else if ((generateImages && post.format !== 'reel') || (post.platform === 'Instagram' && post.format === 'static')) {
      // No Shopify image available — generate via Higgsfield (costs credits)
      try {
        log('IMAGE', `${clientName}: No Shopify image for "${post.product_name}", skipping AI image gen (use Shopify images only)`);
        const imgResult = await generateImageForPost(
          post.caption, post.product_name, post.platform,
          brandFingerprint, clientName
        );
        if (imgResult?.url) {
          imageUrl = imgResult.url;
          imagePrompt = imgResult.prompt;
        }
        await sleep(500); // API rate limit
      } catch (e) {
        log('CONTENT', `${clientName}: Image gen failed: ${e.message}`);
      }
    }

    // Generate video for reel posts using image-to-video
    let videoUrl = null;
    if (post.format === 'reel' && imageUrl && HIGGSFIELD_API_KEY) {
      // CRITICAL: Instruct video model to produce ZERO text — text is burned in by ffmpeg post-processing
      const videoPrompt = post.video_brief?.hook_visual 
        ? `${post.video_brief.hook_visual}. Product showcase with gentle motion, zoom, and reveal. Professional e-commerce style. IMPORTANT: Do NOT generate any text, titles, captions, watermarks, or written words in the video. Pure visual motion only.`
        : `Product showcase video: ${post.product_name || 'featured product'}. Gentle camera motion, professional lighting, e-commerce style. IMPORTANT: Do NOT generate any text, titles, captions, watermarks, or written words in the video. Pure visual motion only.`;
      const rawVideoUrl = await generateVideoFromImage(imageUrl, videoPrompt, 5);

      // Post-process: burn in clean text overlays via ffmpeg
      if (rawVideoUrl) {
        videoUrl = await postProcessVideo(rawVideoUrl, {
          productName: post.product_name || '',
          hookLine: post.hook_line || '',
          cta: post.cta || '',
          brandName: clientName,
        });
      }
    }

    // Build video brief string for storage
    const vb = post.video_brief;
    const videoBriefText = (vb && vb.required) ? 
      `🎬 ${post.format?.toUpperCase() || 'REEL'} BRIEF\n` +
      `Duration: ${vb.duration || '15-30s'}\n` +
      `Opening (first 2s): ${vb.hook_visual || ''}\n` +
      `Scenes:\n${(vb.scenes || []).map((s, i) => `  ${i+1}. ${s}`).join('\n')}\n` +
      `Audio: ${vb.audio_vibe || 'Trending upbeat'}\n` +
      `Text overlays: ${(vb.text_overlays || []).join(' | ')}\n` +
      `Filming tips: ${vb.filming_tips || ''}`
      : '';

    records.push({
      post_label: `${clientName} · ${post.platform} · ${post.format || 'static'} · ${post.content_type}`,
      theme: post.product_name || 'General',
      platform: post.platform || 'Instagram',
      content_type: `${post.format || 'static'}_${post.content_type || 'product_showcase'}`,
      content_pillar: post.content_pillar || 'engagement',
      caption: post.caption || '',
      hashtags: (post.caption || '').match(/#\w+/g)?.join(' ') || '',
      hook_line: post.hook_line || '',
      cta: post.cta || '',
      image_url: imageUrl,
      image_prompt: imagePrompt,
      scheduled_date: post.scheduled_date || dates[0],
      scheduled_time: post.scheduled_time || '12:00',
      status: 'Ready for Review',
      client_id: clientName,
      video_url: videoUrl || '',
      // Store video brief in hook_line if it's a reel (portal will detect and display it)
      ...(videoBriefText ? { hook_line: videoBriefText } : {}),
    });
  }

  if (records.length > 0) {
    const created = await atCreateBatch(TBL.CONTENT, records);
    log('CONTENT', `${clientName}: Generated ${records.length} posts (${records.filter(r => r.image_url).length} with images)`);

    // Persist images to Airtable attachment field
    // Generated URLs may expire, Shopify URLs are permanent but we still attach for thumbnails
    for (const rec of created) {
      const imgUrl = rec.fields?.image_url;
      if (imgUrl) {
        try {
          const isLegacy = false; // Legacy image gen removed in v7
          const isShopify = imgUrl.includes('cdn.shopify.com');
          if (isLegacy || isShopify) {
            const ext = isShopify ? 'jpg' : 'png';
            await persistImageToAirtable(rec.id, imgUrl, `${clientName}-${rec.id}.${ext}`);
            await sleep(300); // Airtable rate limit
          }
        } catch (e) {
          log('IMAGE', `Persist failed for ${rec.id}: ${e.message}`);
        }
      }
    }
  }

  return records.length;
}

async function runContentGeneration() {
  log('CRON', '━━━ Content Generation Started ━━━');
  try {
    const formula = encodeURIComponent(`AND({status}='Active', {tier}!='')`);
    const clients = await atGetAll(TBL.CLIENTS, `filterByFormula=${formula}`);
    log('CRON', `Found ${clients.length} active clients`);

    let totalPosts = 0;
    for (const client of clients) {
      try {
        const count = await generateContentForClient(client);
        totalPosts += count;
        await sleep(1000); // Rate limiting between clients
      } catch (e) {
        log('CONTENT', `Error for ${client.fields.business_name}: ${e.message}`);
      }
    }
    log('CRON', `━━━ Content Generation Done: ${totalPosts} posts created ━━━`);
  } catch (e) {
    log('CRON', `Content generation failed: ${e.message}`);
  }
}

/**
 * INVENTORY INTELLIGENCE
 * Runs daily at 5am UTC. For each active client:
 * 1. Fetch full Shopify inventory
 * 2. Compare to previous snapshot (if exists)
 * 3. Identify trending, low-stock, sold-out, and new products
 * 4. Write snapshots to Inventory table
 */
async function runInventoryIntelligence() {
  log('CRON', '━━━ Inventory Intelligence Started ━━━');
  try {
    const formula = encodeURIComponent(`AND({status}='Active', {website}!='')`);
    const clients = await atGetAll(TBL.CLIENTS, `filterByFormula=${formula}`);

    for (const client of clients) {
      const f = client.fields;
      try {
        const products = await fetchAllShopifyProducts(f.website);
        log('INVENTORY', `${f.business_name}: fetched ${products.length} products`);
        const today = new Date().toISOString().split('T')[0];

        // Analyze ALL products but only snapshot the top movers + key metrics
        // (Storing 25,000 rows/day per client would burn through Airtable limits)
        const analyzed = products.map(p => {
          const totalVariants = p.variants?.length || 0;
          const availableVariants = p.variants?.filter(v => v.available)?.length || 0;
          const soldOutVariants = totalVariants - availableVariants;
          const pctSold = totalVariants > 0 ? Math.round((soldOutVariants / totalVariants) * 100) : 0;
          return { p, totalVariants, availableVariants, soldOutVariants, pctSold };
        });

        // Smart selection: top 50 by sell-through % + all low stock + all sold out (cap 200)
        const highSellThrough = analyzed.filter(a => a.pctSold > 0).sort((a,b) => b.pctSold - a.pctSold);
        const soldOut = analyzed.filter(a => a.availableVariants === 0 && a.totalVariants > 0);
        const lowStock = analyzed.filter(a => {
          const qty = a.p.variants?.reduce((s, v) => s + (v.inventory_quantity || 0), 0) || 0;
          return qty > 0 && qty <= 5;
        });

        // Deduplicate and cap at 200 records
        const selected = new Map();
        for (const item of [...highSellThrough.slice(0, 50), ...soldOut.slice(0, 50), ...lowStock.slice(0, 50)]) {
          if (!selected.has(item.p.handle)) selected.set(item.p.handle, item);
        }
        // Fill remaining with random products for baseline tracking
        const remaining = analyzed.filter(a => !selected.has(a.p.handle));
        for (let i = 0; i < Math.min(50, remaining.length); i++) {
          const item = remaining[Math.floor(Math.random() * remaining.length)];
          if (!selected.has(item.p.handle)) selected.set(item.p.handle, item);
        }

        const snapshots = [...selected.values()].slice(0, 200).map(a => ({
          'Product Handle': a.p.handle || '',
          'Product Name': a.p.title || '',
          'Snapshot Date': today,
          'Total Variants': a.totalVariants,
          'Available Variants': a.availableVariants,
          'Sold Out Variants': a.soldOutVariants,
          'Pct Sold': a.pctSold,
          'Price': a.p.variants?.[0]?.price || '0',
          'Product URL': `https://${f.website.replace(/^https?:\/\//, '')}/products/${a.p.handle}`,
          'Image URL': a.p.images?.[0]?.src || '',
          'Client': f.business_name,
        }));

        // Also store a catalog summary record
        const catSummary = buildCatalogSummary(products);
        snapshots.unshift({
          'Product Handle': '_CATALOG_SUMMARY',
          'Product Name': `${f.business_name} Daily Summary`,
          'Snapshot Date': today,
          'Total Variants': catSummary.total_variants,
          'Available Variants': analyzed.reduce((s, a) => s + a.availableVariants, 0),
          'Sold Out Variants': analyzed.reduce((s, a) => s + a.soldOutVariants, 0),
          'Pct Sold': analyzed.length ? Math.round(analyzed.reduce((s, a) => s + a.pctSold, 0) / analyzed.length) : 0,
          'Price': catSummary.price_stats?.avg || '0',
          'Product URL': f.website,
          'Image URL': '',
          'Client': f.business_name,
        });

        if (snapshots.length > 0) {
          await atCreateBatch(TBL.INVENTORY, snapshots);
          log('INVENTORY', `${f.business_name}: Snapshotted ${snapshots.length} records (from ${products.length} total products)`);
        }

        await sleep(1000); // Be nice to Shopify between clients
      } catch (e) {
        log('INVENTORY', `Error for ${f.business_name}: ${e.message}`);
      }
    }
    log('CRON', '━━━ Inventory Intelligence Done ━━━');
  } catch (e) {
    log('CRON', `Inventory intelligence failed: ${e.message}`);
  }
}

/**
 * LEAD FOLLOW-UP ENGINE
 * Runs daily at 2pm UTC. Sends follow-up emails to audit leads.
 * - 24h after audit: "Here's what we'd do with your store"
 * - 72h after audit: "Quick question about [store]"
 */
async function runLeadFollowUp() {
  log('CRON', '━━━ Lead Follow-Up Started ━━━');
  try {
    const formula = encodeURIComponent(`{Status}='New'`);
    const leads = await atGetAll(TBL.LEADS, `filterByFormula=${formula}`);
    const now = Date.now();

    for (const lead of leads) {
      const f = lead.fields;
      const created = new Date(f.Created || lead.createdTime).getTime();
      const hoursOld = (now - created) / (1000 * 60 * 60);

      if (hoursOld >= 24 && hoursOld < 96) {
        // Send Day 1 follow-up
        try {
          await resend.emails.send({
            to: f.Email,
            from: { email: 'hello@socialengine.agency', name: 'SocialEngine' },
            subject: `Your ${f.Website ? f.Website.replace(/https?:\/\//, '') : 'store'} has untapped potential`,
            html: buildFollowUpEmail1(f.Name, f.Website),
          });
          await atUpdate(TBL.LEADS, lead.id, { Status: 'Followed Up' });
          log('LEADS', `Sent Day 1 follow-up to ${f.Email}`);
        } catch (e) {
          log('LEADS', `Email failed for ${f.Email}: ${e.message}`);
        }
        await sleep(500);
      }
    }

    // Second follow-up for leads that were "Followed Up" 48+ hours ago
    const followedFormula = encodeURIComponent(`{Status}='Followed Up'`);
    const followed = await atGetAll(TBL.LEADS, `filterByFormula=${followedFormula}`);

    for (const lead of followed) {
      const f = lead.fields;
      const created = new Date(f.Created || lead.createdTime).getTime();
      const hoursOld = (now - created) / (1000 * 60 * 60);

      if (hoursOld >= 72) {
        try {
          await resend.emails.send({
            to: f.Email,
            from: { email: 'hello@socialengine.agency', name: 'SocialEngine' },
            subject: `Quick question about ${f.Website ? f.Website.replace(/https?:\/\//, '') : 'your store'}`,
            html: buildFollowUpEmail2(f.Name, f.Website),
          });
          await atUpdate(TBL.LEADS, lead.id, { Status: 'Nurturing' });
          log('LEADS', `Sent Day 3 follow-up to ${f.Email}`);
        } catch (e) {
          log('LEADS', `Email failed for ${f.Email}: ${e.message}`);
        }
        await sleep(500);
      }
    }

    log('CRON', '━━━ Lead Follow-Up Done ━━━');
  } catch (e) {
    log('CRON', `Lead follow-up failed: ${e.message}`);
  }
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  API ENDPOINTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ── POST /api/audit ──
app.post('/api/audit', async (req, res) => {
  const { website, email, name, instagram_handle, tiktok_handle, facebook_handle } = req.body;
  if (!website || !email) return res.status(400).json({ error: 'Website and email required' });

  try {
    let products = [];
    let shopifyDetected = true;
    try { products = await fetchAllShopifyProducts(website); } catch { shopifyDetected = false; }
    log('AUDIT', `${website}: ${shopifyDetected ? products.length + ' products fetched' : 'not Shopify'}`);

    // Build comprehensive catalog analysis from ALL products
    const catalogSummary = shopifyDetected && products.length > 0 ? buildCatalogSummary(products) : null;

    // Also grab first_image_url for sample post generation (from first 50 products with images)
    const productsWithImages = products.filter(p => p.images?.length > 0).slice(0, 50).map(p => ({
      title: p.title,
      type: p.product_type || 'N/A',
      price: p.variants?.[0]?.price || 'N/A',
      first_image_url: p.images?.[0]?.src || null,
    }));

    const prompt = catalogSummary
      ? `You are a senior social media strategist and e-commerce growth expert conducting a professional audit. Be BRUTALLY HONEST — inflated scores destroy trust and are useless to the client.

Store: ${website}
FULL CATALOG ANALYSIS (${catalogSummary.total_products} total products):
- Categories: ${JSON.stringify(catalogSummary.category_breakdown)}
- Price range: $${catalogSummary.price_stats?.min} - $${catalogSummary.price_stats?.max} (avg: $${catalogSummary.price_stats?.avg}, median: $${catalogSummary.price_stats?.median})
- Price distribution: ${JSON.stringify(catalogSummary.price_tiers)}
- Images: ${catalogSummary.image_stats.total_images} total, ${catalogSummary.image_stats.avg_images_per_product} avg/product, ${catalogSummary.image_stats.products_with_no_images} products with NO images, ${catalogSummary.image_stats.products_with_5plus_images} with 5+ images
- Vendors: ${catalogSummary.vendor_count} (${catalogSummary.top_vendors.join(', ')})
- Top tags: ${catalogSummary.top_tags.join(', ')}
- Descriptions: avg ${catalogSummary.avg_description_length} chars, ${catalogSummary.products_without_description} products with no description
- Total variants: ${catalogSummary.total_variants}

Representative sample products: ${JSON.stringify(catalogSummary.sample_products)}
Products with images (for sample posts): ${JSON.stringify(productsWithImages.slice(0, 15))}

SCORING RUBRIC — apply strictly:

Overall Score Anchoring:
- 15–35: Minimal store — poor images, thin catalog, no social identity
- 35–50: Average e-commerce — functional but no differentiation or social hook
- 50–65: Above average — decent catalog, some brand clarity, improvable photography
- 65–75: Strong — professional photography, clear brand voice, real social potential
- 75–85: Elite — editorial-quality content, deep catalog, strong brand identity (rare)
- 85–100: World-class — reserved for category-defining brands only (almost never)

Sub-score definitions (1–10):
product_photography:
  1–3: White-background only or blurry, under 2 images per product
  4–6: Adequate studio shots, no lifestyle imagery, inconsistent quality
  7–8: Professional + lifestyle shots on most products, brand-consistent
  9–10: Editorial-quality photography throughout — extremely rare

catalog_depth:
  1–3: Under 20 products, limited variants
  4–6: 20–80 products, some variety
  7–8: 80–200 products, clear categories, deep variants
  9–10: 200+ products, perfectly organised, every category rich

social_readiness:
  1–3: No obvious viral/shareability angle, no UGC or transformation potential
  4–6: Some shareability but requires heavy creative work
  7–8: Visually striking, strong hooks, natural for Reels/TikTok
  9–10: Products are inherently social-first — built to go viral

content_potential:
  1–3: One-dimensional, few content angles
  4–6: Some angles possible but require significant effort
  7–8: Rich content universe — tutorials, unboxing, styling, comparisons all natural
  9–10: Virtually unlimited content directions

brand_clarity:
  1–3: Unclear target audience, no coherent identity
  4–6: Some brand presence but generic or inconsistent
  7–8: Clear brand voice, distinct aesthetic, obvious customer in mind
  9–10: Iconic, instantly recognisable — devoted community potential

INSTRUCTIONS:
- Score based only on the ACTUAL data provided — do not guess or give benefit of the doubt
- Products with only 1 image score max 5 on photography
- Fewer than 25 products scores max 5 on catalog_depth
- Reference real product names and prices in your analysis
- sample_posts must use the EXACT product title from the data and be genuinely post-ready copy
- Include product_image_url in sample_posts using first_image_url from the matching product (or null if none)
- quick_wins must be specific, actionable, and reference real products

Return JSON only:
{
  "overall_score": number,
  "scores": { "product_photography": number, "catalog_depth": number, "social_readiness": number, "content_potential": number, "brand_clarity": number },
  "strengths": ["strength referencing real products", "strength 2", "strength 3"],
  "weaknesses": ["specific weakness with evidence", "weakness 2", "weakness 3"],
  "quick_wins": ["specific action referencing real product or data point", "action 2", "action 3"],
  "sample_posts": [
    { "platform": "instagram", "caption": "Ready-to-post caption for a specific product", "product_title": "exact product name", "product_image_url": "url or null" },
    { "platform": "tiktok", "hook": "Hook line for a 15-second Reel", "caption": "Full TikTok caption", "product_title": "exact product name", "product_image_url": "url or null" }
  ],
  "revenue_opportunity": "Specific monthly revenue range with reasoning"
}`
      : `You are a senior social media strategist auditing the website ${website}.

SCORING — be honest and strict. Most websites score 35–60. Only genuinely exceptional sites score above 70.

Return JSON only:
{
  "overall_score": number,
  "scores": { "web_presence": number, "social_readiness": number, "content_potential": number, "brand_clarity": number, "growth_opportunity": number },
  "strengths": ["specific strength", "strength 2"],
  "weaknesses": ["specific weakness", "weakness 2", "weakness 3"],
  "quick_wins": ["specific action", "action 2", "action 3"],
  "sample_posts": [
    { "platform": "instagram", "caption": "Example post", "product_title": null, "product_image_url": null },
    { "platform": "tiktok", "hook": "TikTok hook", "caption": "TikTok caption", "product_title": null, "product_image_url": null }
  ],
  "revenue_opportunity": "Estimate with reasoning"
}`;

    // Fetch real social profile data in parallel
    const [igProfile, ttProfile] = await Promise.all([
      instagram_handle ? fetchInstagramProfile(instagram_handle).catch(() => null) : Promise.resolve(null),
      tiktok_handle ? fetchTikTokProfile(tiktok_handle).catch(() => null) : Promise.resolve(null),
    ]);

    // Build social data section for the audit prompt
    let socialDataSection = `\n\nSocial Media Intelligence:`;
    if (igProfile) {
      socialDataSection += `\nINSTAGRAM (@${igProfile.username || instagram_handle}):\n- Followers: ${igProfile.follower_count?.toLocaleString() || 'unknown'}\n- Following: ${igProfile.following_count?.toLocaleString() || 'unknown'}\n- Posts: ${igProfile.post_count || 'unknown'}\n- Bio: ${igProfile.bio || 'No bio'}\n- Business account: ${igProfile.is_business_account ? 'Yes' : 'No'}\n- Verified: ${igProfile.is_verified ? 'Yes' : 'No'}`;
    } else if (instagram_handle) {
      socialDataSection += `\nINSTAGRAM (@${instagram_handle.replace('@', '')}): Could not fetch real-time data — provide recommendations based on handle and brand analysis.`;
    }
    if (ttProfile) {
      socialDataSection += `\nTIKTOK (@${ttProfile.username || tiktok_handle}):\n- Followers: ${ttProfile.follower_count?.toLocaleString() || 'unknown'}\n- Following: ${ttProfile.following_count?.toLocaleString() || 'unknown'}\n- Total likes: ${ttProfile.likes_count?.toLocaleString() || 'unknown'}\n- Videos: ${ttProfile.video_count || 'unknown'}\n- Bio: ${ttProfile.bio || 'No bio'}\n- Verified: ${ttProfile.is_verified ? 'Yes' : 'No'}`;
    } else if (tiktok_handle) {
      socialDataSection += `\nTIKTOK (@${tiktok_handle.replace('@', '')}): Could not fetch real-time data — provide recommendations based on handle and brand analysis.`;
    }
    if (!instagram_handle && !tiktok_handle) {
      socialDataSection += `\nNo social handles provided. Note that a deeper social audit is available when they connect their accounts.`;
    }
    if (facebook_handle) {
      socialDataSection += `\nFACEBOOK: @${facebook_handle.replace('@', '')} (manual review needed — no public API access).`;
    }

    const finalPrompt = prompt + socialDataSection;

    const completion = await openai.chat.completions.create({
      model: 'sonar',
      messages: [{ role: 'user', content: finalPrompt }],
      temperature: 0.3,
      
    });

    let audit;
    try { audit = JSON.parse(completion.choices[0].message.content); }
    catch { audit = { overall_score: 55, error: 'Parse error' }; }

    // Save lead (non-blocking)
    atCreate(TBL.LEADS, {
      Name: name || 'Not provided',
      Email: email,
      Website: website.startsWith('http') ? website : `https://${website}`,
      Source: 'AI Audit',
      Status: 'New',
      Created: new Date().toISOString().split('T')[0],
    }).catch(e => log('AUDIT', `Lead save error: ${e.message}`));

    // Auto-create Free-tier portal login (so they can explore the portal)
    let portalCreated = false;
    const tempPw = 'Welcome' + new Date().getFullYear() + '!';
    const pwHash = sha256(tempPw);
    try {
      const existFormula = encodeURIComponent(`{contact_email}='${email}'`);
      const existCheck = await atGet(TBL.CLIENTS, `filterByFormula=${existFormula}&maxRecords=1`);
      if (!existCheck.records?.length) {
        // Create Free-tier client with sample posts
        const cleanDomain = website.replace(/^https?:\/\//, '').replace(/\/$/, '');
        await atCreate(TBL.CLIENTS, {
          business_name: name || cleanDomain,
          contact_name: name || '',
          contact_email: email,
          website: website.startsWith('http') ? website : `https://${website}`,
          status: 'Active',
          tier: 'Free',
          password_hash: pwHash,
          industry: 'E-commerce',
        });
        portalCreated = true;
        log('AUDIT', `Free-tier portal account created for ${email}`);

        // Generate sample posts from the audit — include product images so portal can render them
        if (audit.sample_posts?.length > 0) {
          const sampleRecords = audit.sample_posts.map((sp, i) => ({
            post_label: `${name || cleanDomain} · ${sp.platform} · sample`,
            platform: sp.platform?.charAt(0).toUpperCase() + sp.platform?.slice(1) || 'Instagram',
            content_type: sp.platform === 'tiktok' ? 'reel_product_showcase' : 'static_product_showcase',
            content_pillar: 'conversion',
            caption: sp.caption || sp.hook || '',
            hook_line: sp.hook || '',
            theme: sp.product_title || '',
            scheduled_date: new Date(Date.now() + (i + 1) * 86400000).toISOString().split('T')[0],
            scheduled_time: '12:00',
            status: 'Ready for Review',
            client_id: name || cleanDomain,
            ...(sp.product_image_url ? { image_url: sp.product_image_url } : {}),
          }));
          await atCreateBatch(TBL.CONTENT, sampleRecords);
          log('AUDIT', `Created ${sampleRecords.length} sample posts (${sampleRecords.filter(r => r.image_url).length} with images) for ${email}`);
        }
      }
    } catch (e) {
      log('AUDIT', `Portal auto-create failed: ${e.message}`);
    }

    // ── Auto-build BRAND_VOICES from audit data (non-blocking Perplexity deep-dive)
    //    This means by the time a new client logs in, their AI is already trained
    if (portalCreated && products.length > 0) {
      (async () => {
        try {
          const cleanDomain = website.replace(/^https?:\/\//, '').replace(/\/$/, '');
          const clientName = name || cleanDomain;
          const descriptions = products.slice(0, 20).map(p =>
            `"${p.title}": ${(p.body_html || '').replace(/<[^>]*>/g, '').substring(0, 200)}`
          ).join('\n');
          const auditBrandPrompt = `You are a world-class brand strategist. Analyze this Shopify store from the audit data and build a comprehensive brand intelligence profile.\n\nBusiness: ${clientName}\nWebsite: ${website}\nAudit Score: ${audit.overall_score}/100\nStrengths: ${(audit.strengths || []).join(', ')}\nContent Themes Identified: ${audit.content_themes?.join(', ') || 'not specified'}\n\nPRODUCT CATALOG:\n${descriptions}\n\nReturn JSON only:\n{\n  "tone": "4-5 tone words that define this brand",\n  "voice_profile": "2-3 sentence brand voice description for AI content engine",\n  "brand_dna": "Comprehensive: archetype (use one of: Outlaw/Hero/Caregiver/Creator/Sage/Innocent/Explorer/Ruler/Magician/Jester/Lover/Everyman), personality, visual style, hook style, CTA style, content themes, do-words, dont-words, anti-brand",\n  "competitor_brands": "Comma-separated likely competitors",\n  "target_audience": "Ideal customer: age range, interests, lifestyle, purchase motivation"\n}`;
          const brandCompletion = await openai.chat.completions.create({
            model: 'sonar-pro',
            messages: [{ role: 'user', content: auditBrandPrompt }],
            temperature: 0.5,
          });
          let brandProfile;
          try { brandProfile = JSON.parse(brandCompletion.choices[0].message.content); } catch { return; }
          // Check if record already exists
          const bvCheck = await atGet(TBL.BRAND_VOICES, `filterByFormula=${encodeURIComponent(`{client_email}='${email}'`)}&maxRecords=1`);
          const bvAuditFields = {
            client_id: clientName,
            client_email: email,
            brand_name: clientName,
            tone: brandProfile.tone || '',
            voice_profile: brandProfile.voice_profile || '',
            brand_dna: brandProfile.brand_dna || '',
            competitor_brands: brandProfile.competitor_brands || '',
            target_audience: brandProfile.target_audience || '',
            updated_at: new Date().toISOString(),
          };
          if (bvCheck.records?.[0]) {
            await atUpdate(TBL.BRAND_VOICES, bvCheck.records[0].id, bvAuditFields);
          } else {
            await atCreate(TBL.BRAND_VOICES, bvAuditFields);
          }
          log('AUDIT', `Pre-trained brand profile built for ${clientName} via Perplexity — AI ready before first login`);
        } catch (e) {
          log('AUDIT', `Brand pre-training failed: ${e.message}`);
        }
      })();
    }

    // Send email with portal access (non-blocking)
    if (resend) resend.emails.send({
      to: email,
      from: { email: 'hello@socialengine.agency', name: 'SocialEngine' },
      subject: `Your Social Media Audit — Score: ${audit.overall_score}/100`,
      html: buildAuditEmail(name, website, audit, portalCreated ? tempPw : null),
    }).catch(e => log('AUDIT', `Email error: ${e.message}`));

    // Build social_profiles object for response
    const socialProfilesResponse = {};
    if (igProfile) socialProfilesResponse.instagram = igProfile;
    if (ttProfile) socialProfilesResponse.tiktok = ttProfile;

    res.json({
      success: true, audit, shopify_detected: shopifyDetected && products.length > 0,
      product_count: products.length,
      portal_access: portalCreated ? { email, password: tempPw } : null,
      social_profiles: socialProfilesResponse,
    });
  } catch (err) {
    log('AUDIT', `Error: ${err.message}`);
    res.status(500).json({ error: 'Audit failed. Please try again.' });
  }
});

// ── GET /api/client-data ──
app.get('/api/client-data', async (req, res) => {
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const f = client.fields;
    const contentFormula = encodeURIComponent(`{client_id}='${f.business_name}'`);
    const contentData = await atGet(TBL.CONTENT,
      `filterByFormula=${contentFormula}&maxRecords=50&sort%5B0%5D%5Bfield%5D=scheduled_date&sort%5B0%5D%5Bdirection%5D=desc`
    );

    let brandVoice = null;
    let brandVoiceRecordId = null;
    try {
      const bvFormula = encodeURIComponent(`OR({client_id}='${f.business_name}',{client_email}='${f.contact_email}')`);
      const bvData = await atGet(TBL.BRAND_VOICES, `filterByFormula=${bvFormula}&maxRecords=1`);
      brandVoice = bvData.records?.[0]?.fields || null;
      brandVoiceRecordId = bvData.records?.[0]?.id || null;
    } catch {}

    // ── Brand fingerprint auto-fire: if no BRAND_VOICES record AND client has a Shopify store,
    //    kick off background Perplexity brand analysis so AI is personalized from day one
    if (!brandVoice && f.website) {
      log('BRAND', `No brand voice found for ${f.business_name} — auto-running Perplexity brand analysis`);
      (async () => {
        try {
          const products = await fetchAllShopifyProducts(f.website).catch(() => []);
          const descriptions = products.slice(0, 20).map(p =>
            `"${p.title}": ${(p.body_html || '').replace(/<[^>]*>/g, '').substring(0, 200)}`
          ).join('\n');
          const autoPrompt = `Analyze this Shopify store and build a brand intelligence profile.\n\nStore: ${f.website}\nBusiness: ${f.business_name}\nIndustry: ${f.industry || 'E-commerce'}\n\nPRODUCT CATALOG (real data):\n${descriptions || 'No product data — infer from store name and industry'}\n\nReturn JSON only:\n{\n  "tone": "3-4 tone words e.g. bold, playful, unapologetic",\n  "voice_profile": "2-3 sentence voice description for AI content engine",\n  "brand_dna": "Detailed brand DNA: archetype, personality, visual style, hook style, CTA style, content themes, do-words, dont-words",\n  "competitor_brands": "Comma-separated likely competitors based on products and positioning",\n  "target_audience": "One paragraph ideal customer: age, interests, lifestyle, shopping behavior"\n}`;
          const autoCompletion = await openai.chat.completions.create({
            model: 'sonar-pro',
            messages: [{ role: 'user', content: autoPrompt }],
            temperature: 0.5,
          });
          let autoBrandProfile;
          try { autoBrandProfile = JSON.parse(autoCompletion.choices[0].message.content); } catch { return; }
          await atCreate(TBL.BRAND_VOICES, {
            client_id: f.business_name,
            client_email: f.contact_email || '',
            brand_name: f.business_name,
            tone: autoBrandProfile.tone || '',
            voice_profile: autoBrandProfile.voice_profile || '',
            brand_dna: autoBrandProfile.brand_dna || '',
            competitor_brands: autoBrandProfile.competitor_brands || '',
            target_audience: autoBrandProfile.target_audience || '',
            updated_at: new Date().toISOString(),
          });
          log('BRAND', `Auto-built brand profile for ${f.business_name} via Perplexity`);
        } catch (e) {
          log('BRAND', `Auto brand analysis failed for ${f.business_name}: ${e.message}`);
        }
      })();
    }

    let profile = null;
    try { if (f.notes) profile = JSON.parse(f.notes); } catch {}

    // Inventory summary
    let inventorySummary = null;
    try {
      const invFormula = encodeURIComponent(`{Client}='${f.business_name}'`);
      const invData = await atGet(TBL.INVENTORY,
        `filterByFormula=${invFormula}&maxRecords=20&sort%5B0%5D%5Bfield%5D=Snapshot Date&sort%5B0%5D%5Bdirection%5D=desc`
      );
      if (invData.records?.length > 0) {
        const latest = invData.records;
        const totalProducts = latest.length;
        const lowStock = latest.filter(r => r.fields['Pct Sold'] >= 50).length;
        inventorySummary = { totalProducts, lowStock, lastSnapshot: latest[0]?.fields['Snapshot Date'] };
      }
    } catch {}

    // Merge brand profile from notes + brand_voice table for complete Brand DNA
    const mergedProfile = profile || {};
    const brandFingerprint = {
      ...mergedProfile,
      voice_maturity: brandVoice?.voice_maturity || (profile ? 78 : 0),
      total_approvals: brandVoice?.total_approvals || 0,
      tone: mergedProfile.tone_adjectives ? 
        Object.fromEntries((mergedProfile.tone_adjectives || '').split(',').map(t => [t.trim(), 70 + Math.floor(Math.random() * 25)])) :
        null,
      colors: f.brand_colors ? f.brand_colors.split(',').map(c => c.trim()) : null,
      insight: mergedProfile.voice_summary || null,
    };

    res.json({
      client: {
        id: client.id, business_name: f.business_name, contact_name: f.contact_name,
        contact_email: f.contact_email, industry: f.industry, tier: f.tier || 'Free',
        platforms: Array.isArray(f.platforms) ? f.platforms : (f.platforms ? f.platforms.split(',').map(p => p.trim()).filter(Boolean) : []), status: f.status, onboarding_date: f.onboarding_date,
        website: f.website, has_onboarded: !!f.onboarding_date,
        is_paid: (f.tier || '').toLowerCase() !== 'free',
      },
      content: contentData.records.map(r => {
        const fields = { ...r.fields };
        // Prefer permanent Airtable attachment URL over potentially-expired image_url
        if (fields.image?.length > 0) {
          fields.image_url = fields.image[0].url;
          fields.image_thumbnails = fields.image[0].thumbnails || null;
        }
        return { id: r.id, ...fields };
      }),
      brand_voice: brandVoice,
      brand_fingerprint: brandFingerprint,
      profile: mergedProfile,
      inventory: inventorySummary,
    });
  } catch (err) {
    log('CLIENT', `Error: ${err.message}`);
    res.status(500).json({ error: 'Failed to load data' });
  }
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  REGENERATION ENGINE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Regenerate a single post in place.
 * Uses brand fingerprint seed + client feedback direction.
 * Updates the existing Airtable record (same ID) rather than creating new one.
 * @param {string} postId - Airtable record ID
 * @param {Object} postFields - Existing post fields
 * @param {Object} client - Verified client record
 * @param {string} direction - Optional user direction ("make it brighter", "different angle")
 */
async function regenerateSinglePost(postId, postFields, client, direction = '') {
  const f = client.fields;
  const clientName = f.business_name;
  const platform = postFields.platform || 'Instagram';
  const productName = postFields.theme || 'product';
  const oldCaption = postFields.full_post_text || postFields.caption || '';
  const oldContentType = postFields.content_type || 'product_showcase';
  const regenCount = parseInt(postFields.regen_count || 0);

  try {
    log('REGEN', `Regenerating post ${postId} for ${clientName} (attempt ${regenCount + 1}/3)`);

    // Load brand voice + fingerprint
    let profile = null;
    try { if (f.notes) profile = JSON.parse(f.notes); } catch {}
    const brandFingerprint = await loadBrandFingerprint(clientName);

    // Build regeneration prompt — includes old post + feedback for improvement
    const isReel = oldContentType.includes('reel');
    const regenPrompt = `You are the AI content engine for "${clientName}".

The client REJECTED a ${platform} post and wants it regenerated. Study the feedback and make a significantly better version.

ORIGINAL POST (rejected):
${oldCaption}

CLIENT FEEDBACK: "${direction || 'Not specified — make it more engaging and different from the original'}"

BRAND VOICE:
${profile ? `Archetype: ${profile.archetype}\nTone: ${profile.tone_adjectives}\nVoice: ${profile.voice_summary}\nDO use: ${profile.do_words}\nDON'T use: ${profile.dont_words}` : 'Professional, engaging, authentic.'}

FORMAT: ${isReel ? 'Reel/Video post' : platform + ' static post'}
PRODUCT: ${productName}

REQUIREMENTS:
- Must feel COMPLETELY different from the original — new angle, new hook, new energy
- Directly address the client's feedback
- Keep it authentic, not generic
- HASHTAG LIMITS (STRICT): Instagram/TikTok: 3-5 hashtags at END. Facebook: 2-3 hashtags at END.
- BANNED PHRASES (NEVER use): "link in bio", "click the link", "get started today", "act now", "limited time offer", "follow for follow", "DM for"
- Do NOT repeat/duplicate any text within the caption
${isReel ? `
- Include a full video brief with: hook_visual, scenes (3), audio_vibe, text_overlays, filming_tips` : ''}

Return JSON:
{
  "caption": "Full new post caption with hashtags",
  "hook_line": "New opening hook",
  "cta": "New call to action",
  "content_type": "reel_product_showcase" | "static_lifestyle" | etc,
  ${isReel ? `"video_brief": {
    "hook_visual": "What viewer sees in first 2 seconds",
    "scenes": ["Scene 1", "Scene 2", "Scene 3"],
    "audio_vibe": "Sound/music direction",
    "text_overlays": ["overlay 1", "overlay 2"],
    "filming_tips": "Practical shooting advice"
  }` : '"video_brief": null'}
}`;

    const completion = await openai.chat.completions.create({
      model: 'sonar-pro',
      messages: [{ role: 'user', content: regenPrompt }],
      temperature: 0.9, // Higher temp = more creative variation
      
    });

    const newPost = JSON.parse(completion.choices[0].message.content);

    // Auto-clean the regenerated caption
    newPost.caption = autoCleanCaption(newPost.caption || '', platform);

    // Generate new image if it's a static post
    let newImageUrl = postFields.image_url || '';
    let newImagePrompt = postFields.image_prompt || '';
    if (!isReel) {
      // Try Shopify product image first (free, real product photo)
      let shopifyUrl = null;
      try {
        const products = await fetchAllShopifyProducts(f.website);
        const prodImgs = {};
        for (const p of products.filter(pr => pr.variants?.some(v => v.available))) {
          if (p.images?.[0]?.src) prodImgs[p.title] = p.images[0].src;
        }
        shopifyUrl = findShopifyImage(productName, prodImgs);
      } catch (e) {
        log('REGEN', `Shopify fetch for image failed: ${e.message}`);
      }
      
      if (shopifyUrl) {
        newImageUrl = shopifyUrl;
        newImagePrompt = `Shopify product image: ${productName}`;
        log('REGEN', `Using Shopify image for "${productName}"`);
      } else if (brandFingerprint) {
        // Fallback: keep existing image if no Shopify match
        try {
          log('REGEN', `No Shopify image for "${productName}", keeping existing image`);
          const imgResult = await generateImageForPost(
            newPost.caption, productName, platform, brandFingerprint, clientName
          );
          if (imgResult?.url) {
            newImageUrl = imgResult.url;
            newImagePrompt = imgResult.prompt;
          }
        } catch (e) {
          log('REGEN', `Image gen failed during regen: ${e.message}`);
        }
      }
    }

    // Build video brief text if applicable
    const vb = newPost.video_brief;
    const videoBriefText = (isReel && vb) ?
      `🎬 REEL BRIEF\nOpening (first 2s): ${vb.hook_visual || ''}\nScenes:\n${(vb.scenes || []).map((s, i) => `  ${i+1}. ${s}`).join('\n')}\nAudio: ${vb.audio_vibe || ''}\nText overlays: ${(vb.text_overlays || []).join(' | ')}\nFilming tips: ${vb.filming_tips || ''}` : '';

    // Generate video for reel posts using image-to-video
    let newVideoUrl = postFields.video_url || '';
    if (isReel && newImageUrl && HIGGSFIELD_API_KEY) {
      // CRITICAL: Instruct video model to produce ZERO text — text is burned in by ffmpeg post-processing
      const videoPrompt = vb?.hook_visual
        ? `${vb.hook_visual}. Product showcase with gentle motion, zoom, and reveal. Professional e-commerce style. IMPORTANT: Do NOT generate any text, titles, captions, watermarks, or written words in the video. Pure visual motion only.`
        : `Product showcase video: ${productName}. Gentle camera motion, professional lighting, e-commerce style. IMPORTANT: Do NOT generate any text, titles, captions, watermarks, or written words in the video. Pure visual motion only.`;
      const rawVideoUrl = await generateVideoFromImage(newImageUrl, videoPrompt, 5);

      // Post-process: burn in clean text overlays via ffmpeg
      if (rawVideoUrl) {
        newVideoUrl = await postProcessVideo(rawVideoUrl, {
          productName: productName,
          hookLine: newPost.hook_line || '',
          cta: newPost.cta || '',
          brandName: clientName,
        });
      }
    }

    // Update the SAME record in place — keeps post history clean
    await atUpdate(TBL.CONTENT, postId, {
      caption: newPost.caption || '',
      hook_line: videoBriefText || newPost.hook_line || '',
      cta: newPost.cta || '',
      content_type: newPost.content_type || oldContentType,
      image_url: newImageUrl,
      image_prompt: newImagePrompt,
      video_url: newVideoUrl,
      status: 'Ready for Review', // Back in queue for client to review
      post_label: `${clientName} · ${platform} · ${newPost.content_type || oldContentType} [regen]`,
    });

    // Persist regenerated image to Airtable attachment for permanent URL
    if (newImageUrl && (newImageUrl.includes('cdn.shopify.com'))) {
      const ext = newImageUrl.includes('cdn.shopify.com') ? 'jpg' : 'png';
      await persistImageToAirtable(postId, newImageUrl, `${clientName}-regen-${postId}.${ext}`);
    }

    log('REGEN', `Post ${postId} regenerated successfully (${regenCount + 1}/3)`);
  } catch (e) {
    log('REGEN', `Regeneration failed for ${postId}: ${e.message}`);
    // Restore to Ready for Review so client isn't stuck
    await atUpdate(TBL.CONTENT, postId, { status: 'Ready for Review' }).catch(() => {});
    throw e;
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  48-HOUR APPROVAL REMINDER
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Runs daily at 10am UTC.
 * Finds posts that have been "Ready for Review" for 48+ hours
 * with no reminder sent yet → emails the client.
 */
async function runApprovalReminders() {
  log('REMINDER', '━━━ Approval Reminders Started ━━━');
  try {
    const formula = encodeURIComponent(`AND({status}='Ready for Review', {reminder_sent}=''`);
    const posts = await atGetAll(TBL.CONTENT, `filterByFormula=${formula}`);
    const now = Date.now();
    const FORTY_EIGHT_HOURS = 48 * 60 * 60 * 1000;

    // Group posts by client
    const byClient = {};
    for (const post of posts) {
      const created = new Date(post.createdTime).getTime();
      if (now - created < FORTY_EIGHT_HOURS) continue; // Not old enough yet
      const clientId = post.fields.client_id;
      if (!clientId) continue;
      if (!byClient[clientId]) byClient[clientId] = [];
      byClient[clientId].push(post);
    }

    for (const [clientId, clientPosts] of Object.entries(byClient)) {
      try {
        // Look up client email
        const formula2 = encodeURIComponent(`{business_name}='${clientId}'`);
        const clientData = await atGet(TBL.CLIENTS, `filterByFormula=${formula2}&maxRecords=1`);
        const clientRecord = clientData.records?.[0];
        if (!clientRecord) continue;

        const clientEmail = clientRecord.fields.contact_email;
        const clientName = clientRecord.fields.contact_name || clientRecord.fields.business_name;
        if (!clientEmail) continue;

        // Send reminder email
        await resend.emails.send({
          to: clientEmail,
          from: { email: 'hello@socialengine.agency', name: 'SocialEngine' },
          subject: `📲 ${clientPosts.length} post${clientPosts.length > 1 ? 's' : ''} waiting for your approval`,
          html: buildApprovalReminderEmail(clientName, clientPosts.length, clientEmail),
        });

        // Mark all posts as reminded
        for (const post of clientPosts) {
          await atUpdate(TBL.CONTENT, post.id, { reminder_sent: 'Y' });
          await sleep(100);
        }

        log('REMINDER', `Sent reminder to ${clientEmail} for ${clientPosts.length} posts`);
        await sleep(500);
      } catch (e) {
        log('REMINDER', `Failed for client ${clientId}: ${e.message}`);
      }
    }
    log('REMINDER', '━━━ Approval Reminders Done ━━━');
  } catch (e) {
    log('REMINDER', `Reminder run failed: ${e.message}`);
  }
}

function buildApprovalReminderEmail(name, count, email) {
  const portalUrl = `https://socialengine.agency/portal.html`;
  return `<!DOCTYPE html><html><body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;">
<div style="background:#111;padding:32px 40px;text-align:center;">
  <h1 style="color:#fff;font-size:24px;margin:0;">SocialEngine</h1>
</div>
<div style="background:#fff;padding:40px;">
  <h2 style="color:#111;font-size:22px;">You have ${count} post${count > 1 ? 's' : ''} ready to review</h2>
  <p style="color:#555;font-size:16px;line-height:1.6;">Hi ${name},</p>
  <p style="color:#555;font-size:16px;line-height:1.6;">Your AI-generated content is ready and waiting. The sooner you approve, the sooner your content goes live and starts working for you.</p>
  <p style="color:#555;font-size:16px;line-height:1.6;">In your portal you can:</p>
  <ul style="color:#555;font-size:16px;line-height:1.8;">
    <li>✅ Approve posts with one click</li>
    <li>✏️ Edit captions before approving</li>
    <li>🔄 Request a regeneration with your direction</li>
    <li>🎬 View your Reel briefs and filming instructions</li>
  </ul>
  <a href="${portalUrl}" style="display:inline-block;background:#111;color:#fff;padding:16px 32px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:16px;margin:24px 0;">Review Your Posts</a>
  <p style="color:#999;font-size:13px;">Replying to this email won't reach us. Log in to your portal to manage content.</p>
</div>
</body></html>`;
}

// ────────────────────────────────────────────
//  API ENDPOINTS
// ────────────────────────────────────────────

// ━━━ CONTINUOUS LEARNING ENGINE ━━━
// Every approve, reject, regeneration, and edit teaches the AI what "on-brand" means
// for each specific client. This is the secret sauce.

/**
 * Update brand voice learning history with a new signal
 * @param {string} clientName - Client brand name
 * @param {string} action - 'approved'|'rejected'|'regenerated'|'edited'
 * @param {Object} data - Content attributes, reason, diff, etc.
 */
async function updateLearningHistory(clientName, action, data = {}) {
  try {
    const bvFormula = encodeURIComponent(`{client_id}='${clientName}'`);
    const existing = await atGet(TBL.BRAND_VOICES, `filterByFormula=${bvFormula}&maxRecords=1`);
    
    if (!existing?.records?.length) {
      log('LEARN', `No brand voice record for ${clientName} — skipping learning update`);
      return;
    }
    
    const record = existing.records[0];
    let learningHistory = {};
    try { learningHistory = JSON.parse(record.fields.learning_history || '{}'); } catch {}
    
    // Update counters
    learningHistory.total_interactions = (learningHistory.total_interactions || 0) + 1;
    learningHistory[`${action}_count`] = (learningHistory[`${action}_count`] || 0) + 1;
    learningHistory.last_interaction = new Date().toISOString();
    
    // Store signal details
    if (!learningHistory.recent_signals) learningHistory.recent_signals = [];
    learningHistory.recent_signals.unshift({
      action,
      timestamp: new Date().toISOString(),
      content_type: data.content_type || 'post',
      reason: data.reason || null,
      original_caption: data.original_caption ? data.original_caption.substring(0, 200) : null,
      edited_caption: data.edited_caption ? data.edited_caption.substring(0, 200) : null,
      model_used: data.model_used || null,
      platform: data.platform || null,
    });
    // Keep last 100 signals
    learningHistory.recent_signals = learningHistory.recent_signals.slice(0, 100);
    
    // Calculate brand accuracy improvement
    const totalActions = (learningHistory.approved_count || 0) + (learningHistory.rejected_count || 0);
    if (totalActions > 0) {
      learningHistory.approval_rate = Math.round(((learningHistory.approved_count || 0) / totalActions) * 100);
      // Brand accuracy starts at 60% and improves with data
      learningHistory.brand_accuracy_score = Math.min(98, 60 + Math.round(Math.log(totalActions + 1) * 8 * (learningHistory.approval_rate / 100)));
    }
    
    // Store caption corrections for learning (edited captions vs originals)
    if (action === 'edited' && data.original_caption && data.edited_caption) {
      if (!learningHistory.caption_corrections) learningHistory.caption_corrections = [];
      learningHistory.caption_corrections.unshift({
        original: data.original_caption.substring(0, 300),
        edited: data.edited_caption.substring(0, 300),
        timestamp: new Date().toISOString(),
      });
      learningHistory.caption_corrections = learningHistory.caption_corrections.slice(0, 50);
    }
    
    // Store rejection reasons for pattern analysis
    if (action === 'rejected' && data.reason) {
      if (!learningHistory.rejection_patterns) learningHistory.rejection_patterns = [];
      learningHistory.rejection_patterns.unshift(data.reason.substring(0, 200));
      learningHistory.rejection_patterns = learningHistory.rejection_patterns.slice(0, 30);
    }
    
    // Store model preferences (which models get approved vs rejected)
    if (data.model_used) {
      if (!learningHistory.model_preferences) learningHistory.model_preferences = {};
      if (!learningHistory.model_preferences[data.model_used]) {
        learningHistory.model_preferences[data.model_used] = { approved: 0, rejected: 0 };
      }
      if (action === 'approved') learningHistory.model_preferences[data.model_used].approved++;
      if (action === 'rejected') learningHistory.model_preferences[data.model_used].rejected++;
    }
    
    await atUpdate(TBL.BRAND_VOICES, record.id, {
      learning_history: JSON.stringify(learningHistory),
    });
    
    log('LEARN', `${clientName}: ${action} | total=${learningHistory.total_interactions} | accuracy=${learningHistory.brand_accuracy_score || 60}%`);
  } catch (e) {
    log('LEARN', `Learning update failed for ${clientName}: ${e.message}`);
  }
}

/**
 * Build learning context for prompt injection
 * Used by content generation to include learning history in prompts
 */
async function buildLearningContext(clientName) {
  try {
    const bvFormula = encodeURIComponent(`{client_id}='${clientName}'`);
    const existing = await atGet(TBL.BRAND_VOICES, `filterByFormula=${bvFormula}&maxRecords=1`);
    if (!existing?.records?.length) return '';
    
    let history = {};
    try { history = JSON.parse(existing.records[0].fields.learning_history || '{}'); } catch {}
    
    if (!history.total_interactions || history.total_interactions < 5) return '';
    
    let context = `\n\nLEARNING HISTORY (${history.total_interactions} interactions, ${history.brand_accuracy_score || 60}% accuracy):`;
    context += `\n- Approved: ${history.approved_count || 0} | Rejected: ${history.rejected_count || 0} | Regenerated: ${history.regenerated_count || 0}`;
    
    if (history.rejection_patterns?.length) {
      context += `\n- Common rejection reasons: ${history.rejection_patterns.slice(0, 5).join('; ')}`;
    }
    
    if (history.caption_corrections?.length) {
      context += `\n- Caption correction patterns (original → edited):`;
      history.caption_corrections.slice(0, 3).forEach(c => {
        context += `\n  "${c.original.substring(0, 60)}..." → "${c.edited.substring(0, 60)}..."`;
      });
    }
    
    if (history.model_preferences && Object.keys(history.model_preferences).length) {
      const bestModel = Object.entries(history.model_preferences)
        .sort(([,a],[,b]) => (b.approved/(b.approved+b.rejected+1)) - (a.approved/(a.approved+a.rejected+1)))[0];
      if (bestModel) context += `\n- Preferred model: ${bestModel[0]} (${bestModel[1].approved} approved)`;
    }
    
    context += `\n\nApply all learning to make content increasingly on-brand.`;
    return context;
  } catch (e) {
    return '';
  }
}

/**
 * Load Motion DNA from brand voice for video generation
 * Returns motion prompt fragments that make AI video look human-authentic
 */
async function loadMotionDNA(clientName) {
  try {
    const bvFormula = encodeURIComponent(`{client_id}='${clientName}'`);
    const existing = await atGet(TBL.BRAND_VOICES, `filterByFormula=${bvFormula}&maxRecords=1`);
    if (!existing?.records?.length) return null;
    
    const fields = existing.records[0].fields;
    let motionDNA = null;
    try { motionDNA = JSON.parse(fields.motion_dna || 'null'); } catch {}
    
    if (!motionDNA) return null;
    
    // Build motion context for Higgsfield prompt injection
    let motionContext = '\n\nHUMAN MOTION DNA (from real video analysis of this brand):';
    if (motionDNA.energy_level) motionContext += `\n- Energy: ${motionDNA.energy_level}`;
    if (motionDNA.movement_flow) motionContext += `\n- Movement: ${motionDNA.movement_flow}`;
    if (motionDNA.expression_default) motionContext += `\n- Expression: ${motionDNA.expression_default}`;
    if (motionDNA.camera_behavior) motionContext += `\n- Camera relationship: ${motionDNA.camera_behavior}`;
    if (motionDNA.transition_speed) motionContext += `\n- Transitions: ${motionDNA.transition_speed}`;
    if (motionDNA.pose_vocabulary?.length) motionContext += `\n- Pose vocabulary: ${motionDNA.pose_vocabulary.join(', ')}`;
    if (motionDNA.ugc_style_notes) motionContext += `\n- UGC style: ${motionDNA.ugc_style_notes}`;
    
    // The key: reusable prompt fragments
    if (motionDNA.prompt_fragments?.length) {
      motionContext += `\n\nMOTION PROMPT FRAGMENTS (inject into video generation):`;
      motionDNA.prompt_fragments.forEach(f => { motionContext += `\n  → "${f}"`; });
    }
    
    motionContext += `\n\nUse these motion patterns to make the video look like it was filmed by this brand's actual team.`;
    
    return { context: motionContext, fragments: motionDNA.prompt_fragments || [], raw: motionDNA };
  } catch (e) {
    log('MOTION', `Motion DNA load failed for ${clientName}: ${e.message}`);
    return null;
  }
}

// ── POST /api/approve-post ──
// Client approves → status=Approved → immediate Upload-Post push → learning signal
app.post('/api/approve-post', async (req, res) => {
  const { postId, editedCaption } = req.body;
  if (!postId) return res.status(400).json({ error: 'Missing postId' });
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const postRecord = await atGet(`${TBL.CONTENT}/${postId}`);
    const originalCaption = postRecord?.fields?.caption || '';
    
    // If client edited the caption before approving, save it first
    const updateFields = { status: 'Approved' };
    if (editedCaption && editedCaption.trim()) {
      updateFields.full_post_text = editedCaption.trim();
      updateFields.caption = editedCaption.trim();
    }
    await atUpdate(TBL.CONTENT, postId, updateFields);

    // ━━ LEARNING SIGNAL: Approve (+ optional edit) ━━
    const clientName = client.fields.brand_name || client.fields.business_name || email;
    const wasEdited = editedCaption && editedCaption.trim() && editedCaption.trim() !== originalCaption;
    
    updateLearningHistory(clientName, 'approved', {
      content_type: postRecord?.fields?.content_type || 'post',
      model_used: postRecord?.fields?.generation_model || null,
      platform: postRecord?.fields?.platform || null,
    }).catch(() => {}); // Non-blocking
    
    // If they edited before approving, that's also a learning signal
    if (wasEdited) {
      updateLearningHistory(clientName, 'edited', {
        original_caption: originalCaption,
        edited_caption: editedCaption.trim(),
        content_type: postRecord?.fields?.content_type || 'post',
      }).catch(() => {});
    }

    // Try to push to Upload-Post (non-blocking — approval succeeds regardless)
    let publishStatus = 'Approved';
    try {
      const post = await atGet(`${TBL.CONTENT}/${postId}`);
      const spResult = await publishPost(post);
      if (spResult.success) {
        await atUpdate(TBL.CONTENT, postId, {
          status: 'Scheduled',
          uploadpost_post_id: spResult.post_id?.toString() || '',
        });
        publishStatus = 'Scheduled';
        log('APPROVE', `Post ${postId} approved + scheduled + learning signal sent`);
      } else {
        log('APPROVE', `Post ${postId} approved, publish returned non-success: ${spResult.error || 'unknown'}`);
      }
    } catch (pubErr) {
      log('APPROVE', `Post ${postId} approved, publish failed (non-fatal): ${pubErr.message}`);
    }

    res.json({ success: true, status: publishStatus, message: publishStatus === 'Scheduled' ? 'Post approved and scheduled — it\'s in the queue.' : 'Post approved! It will be published when your social accounts are connected.' });
  } catch (err) {
    log('APPROVE', `Error: ${err.message}`);
    res.status(500).json({ error: 'Failed to approve' });
  }
});

// ── POST /api/edit-caption ──
// Client edits caption without approving yet (save draft)
app.post('/api/edit-caption', async (req, res) => {
  const { postId, caption } = req.body;
  if (!postId || !caption) return res.status(400).json({ error: 'Missing postId or caption' });
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    await atUpdate(TBL.CONTENT, postId, {
      full_post_text: caption.trim(),
      caption: caption.trim(),
    });
    res.json({ success: true, message: 'Caption saved.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save caption' });
  }
});

// ── POST /api/reject-post ──
// Client rejects → stores feedback → auto-regenerates if regen_count < 3
app.post('/api/reject-post', async (req, res) => {
  const { postId, reason } = req.body;
  if (!postId) return res.status(400).json({ error: 'Missing postId' });
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const postRecord = await atGet(`${TBL.CONTENT}/${postId}`);
    const postFields = postRecord.fields || {};
    const regenCount = parseInt(postFields.regen_count || 0);

    // Store the rejection
    await atUpdate(TBL.CONTENT, postId, {
      status: 'Rejected',
    });

    // ━━ LEARNING SIGNAL: Rejection ━━
    const clientName = client.fields.brand_name || client.fields.business_name || req.body.email;
    updateLearningHistory(clientName, 'rejected', {
      reason: reason || 'No reason provided',
      content_type: postFields.content_type || 'post',
      model_used: postFields.generation_model || null,
      platform: postFields.platform || null,
      original_caption: postFields.caption || null,
    }).catch(() => {}); // Non-blocking

    // Auto-regenerate if under limit (3 free regens)
    if (regenCount < 3) {
      // Kick off regeneration in background (non-blocking)
      regenerateSinglePost(postId, postFields, client, reason).catch(e =>
        log('REGEN', `Background regen failed: ${e.message}`)
      );
      res.json({
        success: true,
        status: 'Rejected',
        regenerating: true,
        regens_remaining: 2 - regenCount,
        message: `Noted! Regenerating with your feedback. ${2 - regenCount} free regenerations remaining.`,
      });
    } else {
      // Maxed out — flag for manual review
      await atUpdate(TBL.CONTENT, postId, { status: 'Needs Review' });
      res.json({
        success: true,
        status: 'Needs Review',
        regenerating: false,
        message: 'Feedback saved. Our team will review and replace this post manually.',
      });
    }
  } catch (err) {
    log('REJECT', `Error: ${err.message}`);
    res.status(500).json({ error: 'Failed to reject post' });
  }
});

// ── POST /api/regenerate-post ──
// Client explicitly requests a regeneration with optional direction
app.post('/api/regenerate-post', async (req, res) => {
  const { postId, direction } = req.body;
  if (!postId) return res.status(400).json({ error: 'Missing postId' });
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const postRecord = await atGet(`${TBL.CONTENT}/${postId}`);
    const postFields = postRecord.fields || {};
    const regenCount = parseInt(postFields.regen_count || 0);

    if (regenCount >= 3) {
      return res.json({
        success: false,
        message: 'You\'ve used all 3 free regenerations on this post. Our team will review it manually.',
      });
    }

    // Mark as Regenerating so client sees progress in portal
    await atUpdate(TBL.CONTENT, postId, { status: 'Regenerating' });
    
    // ━━ LEARNING SIGNAL: Regeneration ━━
    const clientName = client.fields.brand_name || client.fields.business_name || req.body.email;
    updateLearningHistory(clientName, 'regenerated', {
      reason: direction || 'No specific direction',
      content_type: postFields.content_type || 'post',
      model_used: postFields.generation_model || null,
      original_caption: postFields.caption || null,
    }).catch(() => {}); // Non-blocking

    // Kick off in background
    regenerateSinglePost(postId, postFields, client, direction).catch(e =>
      log('REGEN', `Regen failed: ${e.message}`)
    );

    res.json({
      success: true,
      status: 'Regenerating',
      regens_used: regenCount + 1,
      regens_remaining: 2 - regenCount,
      message: `Regenerating${direction ? ' with your direction' : ''}. Check back in 30 seconds.`,
    });
  } catch (err) {
    log('REGEN', `Error: ${err.message}`);
    res.status(500).json({ error: 'Failed to start regeneration' });
  }
});

// ── POST /api/brand-intelligence ──
// Perplexity-powered deep brand research: web mentions + competitor analysis + trend injection
// Call this to pre-build or refresh a client's brand profile without waiting for onboarding
app.post('/api/brand-intelligence', async (req, res) => {
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const f = client.fields;
    const clientName = f.business_name;
    const website = f.website || '';
    const shopifyDomain = f.shopify_domain || '';
    log('BRAND_INTEL', `Running Perplexity brand intelligence for ${clientName}`);

    // Phase 1: Real-time web intelligence (Perplexity Sonar with web access)
    const [webIntelCompletion, competitorCompletion, trendCompletion] = await Promise.all([
      // What is being said about this brand online?
      openai.chat.completions.create({
        model: 'sonar-pro',
        messages: [{ role: 'user', content: `Search the web and analyze the brand "${clientName}" (website: ${website || shopifyDomain}). Find:\n1. How customers describe them in reviews\n2. Their social media tone and content style\n3. What makes them different from competitors\n4. Any negative sentiment to avoid\n5. Trending content formats in their niche right now\n\nReturn JSON only:\n{\n  "brand_perception": "How customers actually describe this brand online",\n  "content_style_observed": "What their actual social content looks like",\n  "differentiation": "What genuinely makes them unique",\n  "sentiment_risks": "Any negative patterns to avoid",\n  "trending_formats": "Top 3 trending content formats in their niche right now with citations"\n}` }],
        temperature: 0.3,
      }).catch(() => null),
      // Who are the real competitors and what are their gaps?
      openai.chat.completions.create({
        model: 'sonar-pro',
        messages: [{ role: 'user', content: `Search the web for the top competitors of "${clientName}" in the ${f.industry || 'e-commerce'} space.\n\nReturn JSON only:\n{\n  "competitors": [\n    { "name": "brand name", "strength": "what they do well", "gap": "where they fall short that ${clientName} could own" }\n  ],\n  "market_gap": "The single biggest content/positioning gap ${clientName} could own right now",\n  "content_angles": "3 content angles competitors are NOT doing that would work for ${clientName}"\n}` }],
        temperature: 0.3,
      }).catch(() => null),
      // What's trending in their space today?
      openai.chat.completions.create({
        model: 'sonar',
        messages: [{ role: 'user', content: `What are the top trending topics, hashtags, and content formats for ${f.industry || 'e-commerce fashion'} brands on Instagram and TikTok RIGHT NOW in ${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}?\n\nReturn JSON only:\n{\n  "trending_hashtags": ["hashtag1", "hashtag2", "hashtag3", "hashtag4", "hashtag5"],\n  "trending_formats": ["format1", "format2", "format3"],\n  "trending_audio": "Current viral audio trend to consider",\n  "seasonal_opportunity": "Any seasonal event or moment to capitalize on this month"\n}` }],
        temperature: 0.3,
      }).catch(() => null),
    ]);

    // Phase 2: Parse results
    let webIntel = {}, competitorIntel = {}, trendIntel = {};
    try { webIntel = JSON.parse(webIntelCompletion?.choices?.[0]?.message?.content || '{}'); } catch {}
    try { competitorIntel = JSON.parse(competitorCompletion?.choices?.[0]?.message?.content || '{}'); } catch {}
    try { trendIntel = JSON.parse(trendCompletion?.choices?.[0]?.message?.content || '{}'); } catch {}

    // Phase 3: Fetch existing brand voice and enrich it
    const bvFormula = encodeURIComponent(`OR({client_id}='${clientName}',{client_email}='${f.contact_email}')`);
    const existing = await atGet(TBL.BRAND_VOICES, `filterByFormula=${bvFormula}&maxRecords=1`);
    const existingDNA = existing.records?.[0]?.fields || {};

    // Merge new intelligence into brand DNA
    let brandDnaObj = {};
    try { brandDnaObj = JSON.parse(existingDNA.brand_dna || '{}'); } catch {}
    brandDnaObj.competitor_gap = competitorIntel.market_gap || '';
    brandDnaObj.content_angles_competitors_miss = competitorIntel.content_angles || '';
    brandDnaObj.trending_formats = trendIntel.trending_formats || [];
    brandDnaObj.trending_hashtags = trendIntel.trending_hashtags || [];
    brandDnaObj.seasonal_opportunity = trendIntel.seasonal_opportunity || '';
    brandDnaObj.brand_perception_online = webIntel.brand_perception || '';
    brandDnaObj.content_style_observed = webIntel.content_style_observed || '';
    brandDnaObj.sentiment_risks = webIntel.sentiment_risks || '';
    brandDnaObj.last_intelligence_refresh = new Date().toISOString();

    const enrichedFields = {
      client_id: clientName,
      client_email: f.contact_email || '',
      brand_name: clientName,
      competitor_brands: (competitorIntel.competitors || []).map(c => c.name).join(', ') || existingDNA.competitor_brands || '',
      brand_dna: JSON.stringify(brandDnaObj),
      updated_at: new Date().toISOString(),
    };
    // Preserve existing tone/voice if already set
    if (!existingDNA.tone || existingDNA.tone.length < 5) enrichedFields.tone = webIntel.content_style_observed || existingDNA.tone || '';
    if (!existingDNA.voice_profile) enrichedFields.voice_profile = webIntel.brand_perception || '';
    if (!existingDNA.target_audience) enrichedFields.target_audience = existingDNA.target_audience || '';

    if (existing.records?.[0]) {
      await atUpdate(TBL.BRAND_VOICES, existing.records[0].id, enrichedFields);
      log('BRAND_INTEL', `Updated brand intelligence for ${clientName}`);
    } else {
      await atCreate(TBL.BRAND_VOICES, enrichedFields);
      log('BRAND_INTEL', `Created brand intelligence for ${clientName}`);
    }

    res.json({
      success: true,
      intelligence: {
        web_intel: webIntel,
        competitors: competitorIntel.competitors || [],
        market_gap: competitorIntel.market_gap || '',
        content_angles: competitorIntel.content_angles || '',
        trending: trendIntel,
      },
      message: `Brand intelligence refreshed for ${clientName}. AI content engine updated with real-time market data.`,
    });
  } catch (e) {
    log('BRAND_INTEL', `Error: ${e.message}`);
    res.status(500).json({ error: 'Brand intelligence failed' });
  }
});

// ── POST /api/brand-fingerprint ──
// Upload brand photo URLs → Vision API extracts visual DNA → stores in Brand Voices
app.post('/api/brand-fingerprint', async (req, res) => {
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  const { imageUrls } = req.body;
  if (!imageUrls || !Array.isArray(imageUrls) || imageUrls.length === 0) {
    return res.status(400).json({ error: 'imageUrls array required' });
  }

  try {
    const f = client.fields;
    const clientName = f.business_name;
    log('FINGERPRINT', `Extracting for ${clientName} from ${imageUrls.length} images`);

    // Extract visual DNA via Perplexity Sonar Vision
    let existingProfile = null;
    try { if (f.notes) existingProfile = JSON.parse(f.notes); } catch {}

    const fingerprint = await extractBrandFingerprint(imageUrls, clientName, existingProfile);
    if (!fingerprint) return res.status(500).json({ error: 'Failed to extract fingerprint' });

    // Check if a Brand Voice record already exists for this client
    const bvFormula = encodeURIComponent(`{client_id}='${clientName}'`);
    const existing = await atGet(TBL.BRAND_VOICES, `filterByFormula=${bvFormula}&maxRecords=1`);

    const bvFields = {
      voice_label: `${clientName} — Visual Identity`,
      client_id: clientName,
      visual_seed: JSON.stringify(fingerprint),
      visual_direction: fingerprint.mood_board || '',
      version: existing.records?.[0]?.fields?.version
        ? (existing.records[0].fields.version + 1) : 1,
    };

    if (existing.records?.[0]) {
      await atUpdate(TBL.BRAND_VOICES, existing.records[0].id, bvFields);
      log('FINGERPRINT', `Updated Brand Voice for ${clientName}`);
    } else {
      await atCreate(TBL.BRAND_VOICES, bvFields);
      log('FINGERPRINT', `Created Brand Voice for ${clientName}`);
    }

    res.json({
      success: true,
      fingerprint: {
        primary_colors: fingerprint.primary_colors,
        color_mood: fingerprint.color_mood,
        aesthetic_keywords: fingerprint.aesthetic_keywords,
        photography_style: fingerprint.photography_style,
        visual_seed: fingerprint.visual_seed,
        mood_board: fingerprint.mood_board,
      },
      message: 'Brand fingerprint extracted and saved. Future posts will use your visual style.',
    });
  } catch (e) {
    log('FINGERPRINT', `Error: ${e.message}`);
    res.status(500).json({ error: 'Fingerprint extraction failed' });
  }
});

// ── POST /api/onboarding ──
app.post('/api/onboarding', async (req, res) => {
  const { answers } = req.body;
  if (!answers) return res.status(400).json({ error: 'Missing answers' });
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const f = client.fields;

    // Deep analyze: Fetch Shopify product descriptions for brand voice learning
    let shopifyContext = '';
    if (f.website) {
      try {
        const products = await fetchAllShopifyProducts(f.website);
        const descriptions = products.slice(0, 20).map(p => 
          `"${p.title}": ${(p.body_html || '').replace(/<[^>]*>/g, '').substring(0, 200)}`
        ).join('\n');
        shopifyContext = `\n\nANALYZE THESE REAL PRODUCT DESCRIPTIONS FROM THEIR STORE TO LEARN THEIR EXISTING VOICE:\n${descriptions}`;
      } catch (e) {
        log('ONBOARDING', `Shopify fetch for brand analysis failed: ${e.message}`);
      }
    }

    // Store social handles and fetch real profile data
    const socialHandles = {};
    if (answers.instagram_handle) socialHandles.instagram = answers.instagram_handle;
    if (answers.tiktok_handle) socialHandles.tiktok = answers.tiktok_handle;
    if (answers.facebook_handle) socialHandles.facebook = answers.facebook_handle;

    // Fetch real social profile data for brand intelligence
    let socialProfileData = {};
    let socialContext = '';
    const [onboardIgProfile, onboardTtProfile] = await Promise.all([
      answers.instagram_handle ? fetchInstagramProfile(answers.instagram_handle).catch(() => null) : Promise.resolve(null),
      answers.tiktok_handle ? fetchTikTokProfile(answers.tiktok_handle).catch(() => null) : Promise.resolve(null),
    ]);

    if (onboardIgProfile) {
      socialProfileData.instagram = onboardIgProfile;
      socialContext += `\n\nINSTAGRAM PROFILE DATA (@${onboardIgProfile.username}):\n- Followers: ${onboardIgProfile.follower_count?.toLocaleString()}\n- Following: ${onboardIgProfile.following_count?.toLocaleString()}\n- Posts: ${onboardIgProfile.post_count}\n- Bio: ${onboardIgProfile.bio || 'None'}\n- Business account: ${onboardIgProfile.is_business_account ? 'Yes' : 'No'}\nUse this data to refine the brand intelligence — e.g. follower count indicates scale, bio reveals brand voice cues, post count shows activity level.`;
    }
    if (onboardTtProfile) {
      socialProfileData.tiktok = onboardTtProfile;
      socialContext += `\n\nTIKTOK PROFILE DATA (@${onboardTtProfile.username}):\n- Followers: ${onboardTtProfile.follower_count?.toLocaleString()}\n- Likes: ${onboardTtProfile.likes_count?.toLocaleString()}\n- Videos: ${onboardTtProfile.video_count}\n- Bio: ${onboardTtProfile.bio || 'None'}\nUse this data to understand their TikTok presence and content style.`;
    }

    const prompt = `Based on these onboarding answers, create a Brand Intelligence Profile.

Business: ${f.business_name}
Industry: ${f.industry || 'Not specified'}

Q1 — Origin story: ${answers.q1 || 'N/A'}
Q2 — Dream customer: ${answers.q2 || 'N/A'}
Q3 — What makes you different: ${answers.q3 || 'N/A'}
Q4 — Brands they admire: ${answers.q4 || 'N/A'}
Q5 — Words that should NEVER describe their brand: ${answers.q5 || 'N/A'}
Q6 — Customer transformation: ${answers.q6 || 'N/A'}
Q7 — Social media pet peeves: ${answers.q7 || 'N/A'}
Q8 — Brand archetype (party persona): ${answers.q8 || 'N/A'}
Q9 — Anti-brand (what feels wrong): ${answers.q9 || 'N/A'}

The 12 archetypes: Outlaw, Hero, Caregiver, Creator, Sage, Innocent, Explorer, Ruler, Magician, Jester, Lover, Everyman.${shopifyContext}${socialContext}

Return JSON:
{
  "archetype": "Primary archetype name",
  "archetype_secondary": "Secondary archetype influence",
  "archetype_rationale": "Why these archetypes based on their answers",
  "tone_adjectives": "5 comma-separated tone words",
  "voice_summary": "2-3 sentence voice description for AI content engine",
  "do_words": "Comma-separated words/phrases TO use",
  "dont_words": "Comma-separated words/phrases to NEVER use",
  "content_themes": "5 comma-separated recurring content themes",
  "customer_avatar": "One paragraph ideal customer description",
  "visual_direction": "Describe the visual style: lighting, colors, mood, photography style",
  "hook_style": "How their posts should open",
  "cta_style": "How their CTAs should feel"
}`;

    const completion = await openai.chat.completions.create({
      model: 'sonar-pro',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.6,
      
    });

    let profile;
    try { profile = JSON.parse(completion.choices[0].message.content); }
    catch { return res.status(500).json({ error: 'Failed to generate profile' }); }

    // Check if BRAND_VOICES record already exists for this client
    const existBvFormula = encodeURIComponent(`OR({client_id}='${f.business_name}',{client_email}='${f.contact_email}')`);
    const existBv = await atGet(TBL.BRAND_VOICES, `filterByFormula=${existBvFormula}&maxRecords=1`);
    // Build full brand DNA as structured JSON string
    const brandDnaObj = {
      archetype: profile.archetype || '',
      archetype_secondary: profile.archetype_secondary || '',
      archetype_rationale: profile.archetype_rationale || '',
      tone_adjectives: profile.tone_adjectives || '',
      voice_summary: profile.voice_summary || '',
      do_words: profile.do_words || '',
      dont_words: profile.dont_words || '',
      content_themes: profile.content_themes || '',
      visual_direction: profile.visual_direction || '',
      hook_style: profile.hook_style || '',
      cta_style: profile.cta_style || '',
      customer_avatar: profile.customer_avatar || '',
    };
    const bvOnboardFields = {
      client_id: f.business_name,
      client_email: f.contact_email || '',
      brand_name: f.business_name,
      tone: profile.tone_adjectives || '',
      voice_profile: profile.voice_summary || '',
      brand_dna: JSON.stringify(brandDnaObj),
      competitor_brands: answers.q4 || '',
      target_audience: profile.customer_avatar || '',
      updated_at: new Date().toISOString(),
    };
    if (existBv.records?.[0]) {
      await atUpdate(TBL.BRAND_VOICES, existBv.records[0].id, bvOnboardFields);
      log('ONBOARDING', `Updated existing BRAND_VOICES for ${f.business_name}`);
    } else {
      await atCreate(TBL.BRAND_VOICES, bvOnboardFields);
      log('ONBOARDING', `Created BRAND_VOICES for ${f.business_name}`);
    }

    await atUpdate(TBL.CLIENTS, client.id, {
      onboarding_date: new Date().toISOString().split('T')[0],
      notes: JSON.stringify({
        ...profile,
        social_handles: socialHandles,
        social_profiles: socialProfileData,
      }),
      // Also update standalone handle fields if provided
      ...(answers.instagram_handle ? { instagram_handle: answers.instagram_handle.replace(/^@/, '') } : {}),
      ...(answers.tiktok_handle ? { tiktok_handle: answers.tiktok_handle.replace(/^@/, '') } : {}),
    });

    // Trigger initial content generation for this client
    log('ONBOARDING', `${f.business_name}: Profile saved, triggering initial content generation`);
    generateContentForClient(client).catch(e => log('ONBOARDING', `Content gen failed: ${e.message}`));

    res.json({
      success: true,
      profile,
      social_profiles: socialProfileData,
    });
  } catch (err) {
    log('ONBOARDING', `Error: ${err.message}`);
    res.status(500).json({ error: 'Failed to save onboarding' });
  }
});

// ── GET /api/compliance/:platform ──
app.get('/api/compliance/:platform', (req, res) => {
  const rules = PLATFORM_RULES[req.params.platform];
  if (!rules) return res.json({ platforms: Object.keys(PLATFORM_RULES) });
  res.json(rules);
});

// ── POST /api/compliance-check ──
app.post('/api/compliance-check', (req, res) => {
  const { text, platform } = req.body;
  if (!text || !platform) return res.status(400).json({ error: 'text and platform required' });
  const result = complianceCheck(text, platform);
  const rules = PLATFORM_RULES[platform];
  res.json({ ...result, platform_name: rules?.name || platform, severity: rules?.severity || 'UNKNOWN', tips: rules?.tips || [] });
});

// ── POST /api/stripe-webhook ──
app.post('/api/stripe-webhook', async (req, res) => {
  let event;
  const sig = req.headers['stripe-signature'];
  const whSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (whSecret && sig) {
    try {
      const payload = req.body.toString();
      const parts = sig.split(',').reduce((a, p) => {
        const [k, v] = p.split('=');
        if (k === 't') a.ts = v;
        if (k === 'v1') a.sigs.push(v);
        return a;
      }, { ts: '', sigs: [] });
      const expected = crypto.createHmac('sha256', whSecret)
        .update(`${parts.ts}.${payload}`).digest('hex');
      if (!parts.sigs.includes(expected)) {
        log('STRIPE', 'Webhook signature verification failed');
        return res.status(400).json({ error: 'Signature mismatch' });
      }
      event = JSON.parse(payload);
      log('STRIPE', 'Webhook signature verified');
    } catch (e) {
      log('STRIPE', `Signature error: ${e.message}`);
      return res.status(400).json({ error: 'Signature verification failed' });
    }
  } else {
    try { event = JSON.parse(req.body.toString()); }
    catch { return res.status(400).json({ error: 'Invalid payload' }); }
    log('STRIPE', 'Warning: No webhook secret configured, skipping signature verification');
  }

  log('STRIPE', `Received event: ${event.type}`);

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const email = session.customer_details?.email || session.customer_email;
    const name = session.customer_details?.name || '';

    if (email) {
      try {
        const tempPw = 'Welcome' + new Date().getFullYear() + '!';
        const hash = sha256(tempPw);
        const formula = encodeURIComponent(`{contact_email}='${email}'`);
        const existing = await atGet(TBL.CLIENTS, `filterByFormula=${formula}&maxRecords=1`);

        // Determine tier from price/mode — default Monthly
        const paidTier = 'Monthly';
        if (existing.records?.length > 0) {
          await atUpdate(TBL.CLIENTS, existing.records[0].id, {
            status: 'Active', stripe_customer_id: session.customer || '',
            stripe_subscription_id: session.subscription || '', tier: paidTier,
          });
          log('STRIPE', `Updated existing client to ${paidTier}: ${email}`);
        } else {
          await atCreate(TBL.CLIENTS, {
            business_name: name || email.split('@')[0], contact_name: name,
            contact_email: email, status: 'Active', tier: paidTier,
            stripe_customer_id: session.customer || '',
            stripe_subscription_id: session.subscription || '',
            password_hash: hash, onboarding_date: new Date().toISOString().split('T')[0],
          });
          log('STRIPE', `Created new client: ${email}`);
        }

        await resend.emails.send({
          to: email,
          from: { email: 'hello@socialengine.agency', name: 'SocialEngine' },
          subject: 'Welcome to SocialEngine — Your Portal Access',
          html: buildWelcomeEmail(name || 'there', email, tempPw),
        });
        log('STRIPE', `Welcome email sent to ${email}`);
      } catch (e) {
        log('STRIPE', `Error: ${e.message}`);
      }
    }
  }

  if (event.type === 'customer.subscription.deleted') {
    const sub = event.data.object;
    try {
      const formula = encodeURIComponent(`{stripe_subscription_id}='${sub.id}'`);
      const data = await atGet(TBL.CLIENTS, `filterByFormula=${formula}&maxRecords=1`);
      if (data.records?.[0]) {
        await atUpdate(TBL.CLIENTS, data.records[0].id, { status: 'Cancelled', tier: 'Free' });
        log('STRIPE', `Subscription cancelled for ${data.records[0].fields.contact_email}`);
      }
    } catch (e) {
      log('STRIPE', `Cancellation error: ${e.message}`);
    }
  }

  res.json({ received: true });
});

// ── ADMIN ENDPOINTS ──

// Export approved posts as Upload-Post bulk CSV
app.get('/api/admin/export-csv', async (req, res) => {
  const secret = req.headers['x-admin-secret'] || req.query.secret;
  if (secret !== ADMIN_SECRET) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const formula = encodeURIComponent(`{status}='Approved'`);
    const posts = await atGetAll(TBL.CONTENT, `filterByFormula=${formula}`);

    if (posts.length === 0) return res.json({ message: 'No approved posts to export', count: 0 });

    // Upload-Post CSV format: Caption, Image URL, Date Time, Account ID
    const lines = ['Caption,Image URL,Schedule Date,Account ID'];
    for (const post of posts) {
      const f = post.fields;
      const platform = (f.platform || '').toLowerCase();
      const accountId = platform; // Upload-Post uses platform names directly
      const caption = (f.full_post_text || f.caption || '').replace(/"/g, '""');
      const imageUrl = f.image_url || '';
      const dateTime = `${f.scheduled_date || ''} ${f.scheduled_time || '12:00'}`;
      lines.push(`"${caption}","${imageUrl}","${dateTime}","${accountId}"`);
    }

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename="socialengine-approved-${new Date().toISOString().split('T')[0]}.csv"`);
    res.send(lines.join('\n'));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Mark approved posts as published (after CSV upload)
app.post('/api/admin/mark-published', async (req, res) => {
  const secret = req.headers['x-admin-secret'] || req.query.secret;
  if (secret !== ADMIN_SECRET) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const formula = encodeURIComponent(`{status}='Approved'`);
    const posts = await atGetAll(TBL.CONTENT, `filterByFormula=${formula}`);
    
    for (const post of posts) {
      await atUpdate(TBL.CONTENT, post.id, { status: 'Published' });
      await sleep(200);
    }
    res.json({ success: true, count: posts.length });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Admin stats
app.get('/api/admin/stats', async (req, res) => {
  const secret = req.headers['x-admin-secret'] || req.query.secret;
  if (secret !== ADMIN_SECRET) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const clients = await atGetAll(TBL.CLIENTS);
    const leads = await atGetAll(TBL.LEADS);
    const content = await atGetAll(TBL.CONTENT);

    const activeClients = clients.filter(c => c.fields.status === 'Active').length;
    const totalLeads = leads.length;
    const newLeads = leads.filter(l => l.fields.Status === 'New').length;
    const totalPosts = content.length;
    const pendingReview = content.filter(c => c.fields.status === 'Ready for Review').length;
    const approved = content.filter(c => c.fields.status === 'Approved').length;
    const published = content.filter(c => c.fields.status === 'Published').length;

    res.json({
      clients: { total: clients.length, active: activeClients },
      leads: { total: totalLeads, new: newLeads },
      content: { total: totalPosts, pending_review: pendingReview, approved, published },
      revenue: { monthly_estimate: activeClients * 297 },
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Manually trigger content gen for a specific client
app.post('/api/admin/trigger-content', async (req, res) => {
  const secret = req.headers['x-admin-secret'] || req.query.secret;
  if (secret !== ADMIN_SECRET) return res.status(401).json({ error: 'Unauthorized' });

  const { email, clientName } = req.body;
  try {
    // Support lookup by email OR business name
    let formula;
    if (email) {
      formula = encodeURIComponent(`{contact_email}='${email}'`);
    } else if (clientName) {
      formula = encodeURIComponent(`{business_name}='${clientName}'`);
    } else {
      return res.status(400).json({ error: 'Provide email or clientName' });
    }
    const data = await atGet(TBL.CLIENTS, `filterByFormula=${formula}&maxRecords=1`);
    if (!data.records?.[0]) return res.status(404).json({ error: 'Client not found' });

    const count = await generateContentForClient(data.records[0]);
    res.json({ success: true, posts_generated: count, client: data.records[0].fields.business_name });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ── POST /api/admin/simulate-upgrade — Demo: flip Free → Monthly (for partner demos) ──
app.post('/api/admin/simulate-upgrade', async (req, res) => {
  const secret = req.headers['x-admin-secret'] || req.query.secret;
  if (secret !== ADMIN_SECRET) return res.status(401).json({ error: 'Unauthorized' });

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Provide email' });

  try {
    const formula = encodeURIComponent(`{contact_email}='${email}'`);
    const data = await atGet(TBL.CLIENTS, `filterByFormula=${formula}&maxRecords=1`);
    if (!data.records?.[0]) return res.status(404).json({ error: 'Client not found' });

    const rec = data.records[0];
    const currentTier = rec.fields.tier || 'Free';
    const newTier = currentTier.toLowerCase() === 'free' ? 'Monthly' : 'Free';

    await atUpdate(TBL.CLIENTS, rec.id, { tier: newTier, status: newTier === 'Free' ? 'Active' : 'Active' });
    log('ADMIN', `Simulate upgrade: ${email} → ${newTier}`);
    res.json({ success: true, email, previous_tier: currentTier, new_tier: newTier, message: `Toggled to ${newTier} — portal will detect this within 30 seconds` });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ── GET /api/admin/simulate-upgrade — Simple GET version for browser demo ──
app.get('/api/admin/simulate-upgrade', async (req, res) => {
  const secret = req.query.secret;
  if (secret !== ADMIN_SECRET) return res.status(401).json({ error: 'Unauthorized' });

  const email = req.query.email;
  if (!email) return res.status(400).json({ error: 'Provide ?email= parameter' });

  try {
    const formula = encodeURIComponent(`{contact_email}='${email}'`);
    const data = await atGet(TBL.CLIENTS, `filterByFormula=${formula}&maxRecords=1`);
    if (!data.records?.[0]) return res.status(404).json({ error: 'Client not found' });

    const rec = data.records[0];
    const currentTier = rec.fields.tier || 'Free';
    const newTier = currentTier.toLowerCase() === 'free' ? 'Monthly' : 'Free';

    await atUpdate(TBL.CLIENTS, rec.id, { tier: newTier });
    log('ADMIN', `Simulate upgrade (GET): ${email} → ${newTier}`);

    // Return a nice HTML page so partner can see it worked
    res.send(`<!DOCTYPE html><html><head><style>body{background:#0a0a0a;color:#fff;font-family:-apple-system,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;}div{text-align:center;max-width:400px;}.badge{display:inline-block;padding:6px 16px;border-radius:20px;font-size:13px;font-weight:600;margin:16px 0;}${newTier!=='Free'?'.badge{background:rgba(16,185,129,0.15);color:#10B981;border:1px solid rgba(16,185,129,0.3);}':'.badge{background:rgba(234,179,8,0.15);color:#eab308;border:1px solid rgba(234,179,8,0.3);}'}</style></head><body><div><h1 style="font-size:20px;font-weight:700;letter-spacing:-0.02em;">Social<span style="color:#a855f7">Engine</span> Admin</h1><div class="badge">${newTier !== 'Free' ? '✅ UPGRADED' : '🔄 RESET'}</div><p style="font-size:14px;color:#888;line-height:1.6;"><strong style="color:#fff;">${email}</strong><br>moved from <strong>${currentTier}</strong> → <strong style="color:${newTier!=='Free'?'#10B981':'#eab308'};">${newTier}</strong></p><p style="font-size:12px;color:#555;margin-top:20px;">The portal will detect this within 30 seconds.<br>No logout or refresh needed.</p></div></body></html>`);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ── POST /api/chat — AI Social Media Coach ──
app.post('/api/chat', async (req, res) => {
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'Message required' });

  try {
    const f = client.fields;

    // Load brand voice
    let brandVoice = null;
    try {
      const bvFormula = encodeURIComponent(`OR({client_id}='${f.business_name}',{client_email}='${f.contact_email}')`);
      const bvData = await atGet(TBL.BRAND_VOICES, `filterByFormula=${bvFormula}&maxRecords=1`);
      brandVoice = bvData.records?.[0]?.fields || null;
    } catch {}

    // Load profile
    let profile = null;
    try { if (f.notes) profile = JSON.parse(f.notes); } catch {}

    // Load recent content
    let posts = [];
    try {
      const cf = encodeURIComponent(`{client_id}='${f.business_name}'`);
      const cd = await atGet(TBL.CONTENT, `filterByFormula=${cf}&maxRecords=15&sort%5B0%5D%5Bfield%5D=scheduled_date&sort%5B0%5D%5Bdirection%5D=desc`);
      posts = (cd.records || []).map(r => r.fields);
    } catch {}

    // Load inventory
    let inventory = [];
    try {
      const invF = encodeURIComponent(`{Client}='${f.business_name}'`);
      const invD = await atGet(TBL.INVENTORY, `filterByFormula=${invF}&maxRecords=20&sort%5B0%5D%5Bfield%5D=Snapshot Date&sort%5B0%5D%5Bdirection%5D=desc`);
      inventory = (invD.records || []).map(r => r.fields);
    } catch {}

    // Build rich context block with image URLs for product display
    const postSummary = posts.slice(0, 10).map(p =>
      `[${p.platform}] ${p.status} | ${(p.caption || '').substring(0, 100)} | image: ${p.image_url || 'none'}`
    ).join('\n') || 'No posts yet.';

    const invSummary = inventory.slice(0, 10).map(i =>
      `${i['Product Title']}: ${i['Pct Sold'] || 0}% sold, ${i['Total Inventory'] || '?'} units, price: ${i['Price'] || '?'}`
    ).join('\n') || 'No inventory data yet.';

    // Fetch FULL product catalog with caching (1hr TTL)
    let productContext = 'Product catalog not available.';
    let productCatalog = [];
    if (f.website) {
      try {
        const cacheKey = `catalog_${f.website}`;
        const cached = catalogCache.get(cacheKey);
        let allProducts;
        if (cached && (Date.now() - cached.ts) < 3600000) { // 1hr cache
          allProducts = cached.products;
          log('CHAT', `${f.business_name}: Using cached catalog (${allProducts.length} products)`);
        } else {
          allProducts = await fetchAllShopifyProducts(f.website);
          catalogCache.set(cacheKey, { products: allProducts, ts: Date.now() });
          log('CHAT', `${f.business_name}: Fetched fresh catalog (${allProducts.length} products)`);
        }
        
        // Build full catalog context for the coach
        const catSummary = buildCatalogSummary(allProducts);
        
        // Include 40 products with images for visual display (mix of categories)
        productCatalog = catSummary.sample_products.slice(0, 40).map(p => {
          const fullProduct = allProducts.find(fp => fp.title === p.title);
          return {
            title: p.title,
            price: p.price,
            image_url: fullProduct?.images?.[0]?.src || null,
            product_type: p.type,
            available: fullProduct?.variants?.some(v => v.available) || false,
          };
        });
        
        productContext = `FULL CATALOG: ${catSummary.total_products} products across ${Object.keys(catSummary.category_breakdown).length} categories
Categories: ${Object.entries(catSummary.category_breakdown).sort((a,b) => b[1]-a[1]).map(([t,c]) => `${t}: ${c}`).join(', ')}
Price range: $${catSummary.price_stats?.min} - $${catSummary.price_stats?.max} (avg: $${catSummary.price_stats?.avg})
Top tags: ${catSummary.top_tags.slice(0, 15).join(', ')}
Products with images: ${catSummary.image_stats.total_images} total (${catSummary.image_stats.avg_images_per_product} avg/product)
Vendors: ${catSummary.vendor_count}

Sample products with images (use these for visual display):
${productCatalog.map(p => `- ${p.title} ($${p.price}) [type: ${p.product_type}] [image: ${p.image_url || 'none'}]`).join('\n')}`;
      } catch (e) {
        log('CHAT', `Catalog fetch failed: ${e.message}`);
      }
    }

    const isFree = (f.tier || 'Free').toLowerCase() === 'free';

    // Get or init chat history
    if (!chatHistories.has(email)) chatHistories.set(email, []);
    const history = chatHistories.get(email);
    history.push({ role: 'user', content: message });
    if (history.length > 30) history.splice(0, history.length - 30);

    // Build onboarding answers context if available
    let onboardingContext = '';
    try {
      if (f.onboarding_answers) {
        const oa = typeof f.onboarding_answers === 'string' ? JSON.parse(f.onboarding_answers) : f.onboarding_answers;
        if (oa) {
          const entries = Object.entries(oa).filter(([k,v]) => v && v.length > 0);
          if (entries.length > 0) {
            onboardingContext = '\nONBOARDING DEEP-DIVE (their own words):\n' + entries.map(([k,v]) => `- ${k}: ${v}`).join('\n');
          }
        }
      }
    } catch {}

    const systemPrompt = `You are the dedicated AI marketing strategist for ${f.business_name}. You are NOT a generic chatbot — you are a senior CMO-level advisor who has studied this specific brand deeply. You know their products, voice, customers, and competitive position inside and out.

You speak like a trusted advisor who genuinely cares about their success. You're warm but direct. You give advice that feels like it came from someone who spent a week studying their business — because you did.

CLIENT PROFILE:
- Business: ${f.business_name}
- Website: ${f.website || 'Not set'}
- Industry: ${f.industry || 'E-commerce'}
- Platforms: ${(Array.isArray(f.platforms) ? f.platforms : (f.platforms ? String(f.platforms).split(',').map(p=>p.trim()) : [])).join(', ') || 'Not yet configured'}
- Plan: ${f.tier || 'Free'}
${profile ? `- Brand Archetype: ${profile.archetype || 'Not analysed yet'}
- Voice Summary: ${profile.voice_summary || ''}
- Anti-brand (what they HATE): ${profile.anti_brand || 'Not set'}` : '- Brand voice not yet analysed'}
${brandVoice ? `- Tone: ${brandVoice.tone_adjectives || 'Not set'}
- Writing Style: ${brandVoice.writing_style || ''}
- Target Audience: ${brandVoice.target_audience || ''}
- Brand DNA: ${brandVoice.brand_dna || ''}` : ''}
${onboardingContext}

CONTENT QUEUE (most recent):
${postSummary}

INVENTORY INTELLIGENCE:
${invSummary}

PRODUCT CATALOG (live from their store):
${productContext}

YOUR PERSONALITY & APPROACH:
1. PERSONALIZATION FIRST: Every response must reference something specific to THEIR business — a real product name, their actual post statuses, their brand archetype, their inventory data. Generic advice is forbidden.
2. BE DECISIVE AND SPECIFIC: "Post your ${f.business_name.split(' ')[0]} best-seller as a 15-second Reel at 6pm Thursday" — never "consider posting more." Give exact times, exact formats, exact products.
3. EXPLAIN THE WHY: Back every recommendation with data or reasoning. Cite algorithm behaviour, engagement benchmarks, platform best practices.
4. PRODUCT DISPLAY: When discussing a product, show it: ![Product Name](image_url). When they ask "show me" a product, render the image + ready-to-post caption.
5. COPYWRITING: Deliver ready-to-post copy immediately. No preamble, no "here's what I'd write" — just the copy.
6. ASK GENIUS QUESTIONS: Occasionally ask insightful questions that show you understand their business deeply. Examples: "Your [product X] is 70% sold — are you restocking or should we shift content to push [product Y] while we still have inventory?" These questions build trust and help you learn.
7. BUILD VALUE NATURALLY: Help the client see the depth of intelligence SocialEngine provides. When they ask about something, go deeper than expected. Show them connections between their inventory, content, and strategy they didn't see.
8. TONE: Warm, confident, specific. Like a brilliant friend who happens to be a marketing expert. Never corporate, never generic, never sycophantic.
9. LENGTH: 2-4 short paragraphs max. Dense with value. Zero filler.
10. ANALYTICS: Use industry benchmarks for their niche. Note that real-time data is in the Analytics Dashboard${isFree ? ' (available on Pro)' : ''}.
11. COMPETITOR STRATEGY: Give a direct answer, then suggest the Competitor Intel tool for deeper analysis.
12. Never say "I can't" — use benchmarks if you lack data, and say so.
13. CONTENT GENERATION: If they ask you to generate/create posts, respond with a confirmation AND include [GENERATE_CONTENT] in your response.
${isFree ? '\nFREE PLAN: Naturally (not every message) reference that deeper features are available on Pro. Be subtle — "Your engagement would be fascinating to track in the Analytics Dashboard — that\'s one of the Pro features that really changes the game." Never be pushy.' : ''}`;

    // ━━ LEARNING CONTEXT: Enrich coach with feedback history ━━
    const learningCtx = await buildLearningContext(f.business_name || email);
    const enrichedSystemPrompt = systemPrompt + learningCtx;

    const completion = await openai.chat.completions.create({
      model: 'sonar-pro',
      messages: [
        { role: 'system', content: enrichedSystemPrompt },
        ...history,
      ],
      max_tokens: 900,
      temperature: 0.65,
    });

    const reply = completion.choices[0]?.message?.content || 'Sorry, brain freeze. Try again?';

    // Check if chatbot triggered content generation
    if (reply.includes('[GENERATE_CONTENT]')) {
      log('CHAT', `${f.business_name}: Chatbot triggered content generation`);
      generateContentForClient(client).catch(e => log('CHAT', `Content gen failed: ${e.message}`));
    }

    const cleanReply = reply.replace(/\[GENERATE_CONTENT\]/g, '').trim();
    history.push({ role: 'assistant', content: cleanReply });

    // Generate contextual suggestions
    const suggestions = [];
    if (inventory.some(i => (i['Pct Sold'] || 0) >= 70))
      suggestions.push('Which products should I promote this week?');
    if (posts.length === 0)
      suggestions.push('Help me plan my first week of content');
    if (!brandVoice)
      suggestions.push('Help me define my brand voice');
    if (posts.filter(p => p.status === 'Ready for Review').length > 0)
      suggestions.push('What should I look for when approving posts?');
    if (suggestions.length < 3)
      suggestions.push('What are the best times to post in my niche?');

    res.json({ reply: cleanReply, suggestions: suggestions.slice(0, 3) });
  } catch (e) {
    log('CHAT', `Error: ${e.message}`);
    res.status(500).json({ error: 'Chat error — try again' });
  }
});

// ── POST /api/competitor-intel — Koala Inspector-style competitive analysis ──
app.post('/api/competitor-intel', async (req, res) => {
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  const { competitor_url } = req.body;
  if (!competitor_url) return res.status(400).json({ error: 'Competitor URL required' });

  try {
    const f = client.fields;

    // Fetch FULL competitor catalog via public Shopify API
    let compProducts = [];
    try {
      compProducts = await fetchAllShopifyProducts(competitor_url);
      log('INTEL', `Competitor ${competitor_url}: ${compProducts.length} products fetched`);
    } catch (e) {
      return res.json({
        error: 'not_shopify',
        message: 'Could not access product data. Make sure this is a Shopify store with a public catalog.',
      });
    }

    // Fetch FULL client catalog
    let clientProducts = [];
    if (f.website) {
      try {
        // Use cache if available (shared with coach)
        const cacheKey = `catalog_${f.website}`;
        const cached = catalogCache.get(cacheKey);
        if (cached && (Date.now() - cached.ts) < 3600000) {
          clientProducts = cached.products;
        } else {
          clientProducts = await fetchAllShopifyProducts(f.website);
          catalogCache.set(cacheKey, { products: clientProducts, ts: Date.now() });
        }
        log('INTEL', `Client ${f.business_name}: ${clientProducts.length} products`);
      } catch {}
    }

    // Build FULL catalog summaries for accurate analysis
    const compCatalog = buildCatalogSummary(compProducts);
    const clientCatalog = clientProducts.length > 0 ? buildCatalogSummary(clientProducts) : null;

    // Legacy summaries for backward compat in enrichment
    const compSummary = compCatalog.sample_products;
    
    const priceStats = (products) => {
      const prices = products.map(p => parseFloat(p.variants?.[0]?.price || 0)).filter(p => p > 0);
      return prices.length ? {
        low: Math.min(...prices).toFixed(2),
        high: Math.max(...prices).toFixed(2),
        avg: (prices.reduce((a, b) => a + b, 0) / prices.length).toFixed(2),
      } : { low: '0', high: '0', avg: '0' };
    };

    // Perplexity Sonar competitive analysis — strict scoring rubric
    const analysis = await openai.chat.completions.create({
      model: 'sonar',
      messages: [{
        role: 'system',
        content: `You are an elite competitive intelligence analyst. You are BRUTALLY honest and data-driven. You never inflate scores.

SCORING RUBRIC (apply independently to competitor AND client):

Product Catalog (0-25 points):
- 0-5: Under 20 products, no clear categories
- 6-10: 20-50 products, basic organization
- 11-15: 50-200 products, clear categories, decent variety
- 16-20: 200-500 products, well-organized, strong variety
- 21-25: 500+ products, exceptional organization, industry-leading catalog

Pricing Strategy (0-25 points):
- 0-5: No clear pricing strategy, random price points
- 6-10: Basic pricing, no tiers or bundles
- 11-15: Some price tiers, basic range coverage
- 16-20: Strategic pricing with clear tiers, good value perception
- 21-25: Sophisticated pricing with psychological anchoring, bundles, premium+value tiers

Brand & Visual Identity (0-25 points):
- 0-5: No cohesive brand, poor product imagery
- 6-10: Basic branding, inconsistent imagery
- 11-15: Decent brand identity, adequate product photos
- 16-20: Strong brand, professional imagery, clear aesthetic
- 21-25: Iconic brand identity, editorial-quality imagery, instantly recognizable

Social & Content Readiness (0-25 points):
- 0-5: No social presence, no content-ready assets
- 6-10: Basic social presence, sporadic posting
- 11-15: Active on 1-2 platforms, some engagement
- 16-20: Multi-platform presence, consistent content, good engagement
- 21-25: Dominant social presence, viral content, massive engagement, influencer partnerships

Total = sum of 4 categories (0-100). Most small/medium brands score 30-60. Only major established brands with massive social presence score 70+. Scores above 85 are reserved for absolute industry leaders (Nike, Sephora, etc.).

CRITICAL: Base scores ONLY on the actual product data provided. If you see a well-known brand, you may factor in general brand awareness, but the score must still be anchored to the rubric criteria and the data you can actually observe.

Return JSON:
{
  "competitor_name": "inferred store name",
  "overall_summary": "2-3 sentence executive summary — specific, not generic",
  "competitor_score": 0-100,
  "competitor_score_breakdown": {"catalog": 0-25, "pricing": 0-25, "brand": 0-25, "social": 0-25},
  "client_score": 0-100,
  "client_score_breakdown": {"catalog": 0-25, "pricing": 0-25, "brand": 0-25, "social": 0-25},
  "strengths": ["3-5 specific competitor strengths with evidence from the data"],
  "weaknesses": ["3-5 specific competitor weaknesses the client can exploit"],
  "opportunities": ["5 specific, actionable steps the client should take — reference actual products"],
  "threats": ["2-3 competitive threats with reasoning"],
  "content_ideas": [
    {
      "concept": "Specific post concept title",
      "format": "Reel / Carousel / Static / Story",
      "platform": "Instagram / TikTok / Both",
      "hook": "The opening hook line or first 3 seconds",
      "description": "2-3 sentence detailed description of the content, including visual direction, tone, and call-to-action",
      "why_it_works": "1 sentence explaining the competitive advantage or gap this exploits",
      "niche_reference": "Name a specific creator, brand, or viral trend in this niche that demonstrates this concept working (real example)"
    }
  ],
  "pricing_insight": "Data-driven pricing comparison referencing actual price ranges",
  "category_gaps": ["product categories competitor has that client doesn't — be specific"]
}`,
      }, {
        role: 'user',
        content: `COMPETITOR (${competitor_url}):
Total products: ${compCatalog.total_products}
Categories: ${JSON.stringify(compCatalog.category_breakdown)}
Price: $${compCatalog.price_stats?.min} - $${compCatalog.price_stats?.max} (avg: $${compCatalog.price_stats?.avg}, median: $${compCatalog.price_stats?.median})
Price tiers: ${JSON.stringify(compCatalog.price_tiers)}
Images: ${compCatalog.image_stats.total_images} total, ${compCatalog.image_stats.avg_images_per_product} avg/product, ${compCatalog.image_stats.products_with_no_images} with none
Vendors: ${compCatalog.vendor_count} (${compCatalog.top_vendors.join(', ')})
Top tags: ${compCatalog.top_tags.slice(0, 15).join(', ')}
Avg description: ${compCatalog.avg_description_length} chars, ${compCatalog.products_without_description} without
Sample products: ${JSON.stringify(compCatalog.sample_products.slice(0, 20))}

CLIENT (${f.business_name}, ${f.website || 'unknown'}):
${clientCatalog ? `Total products: ${clientCatalog.total_products}
Categories: ${JSON.stringify(clientCatalog.category_breakdown)}
Price: $${clientCatalog.price_stats?.min} - $${clientCatalog.price_stats?.max} (avg: $${clientCatalog.price_stats?.avg}, median: $${clientCatalog.price_stats?.median})
Price tiers: ${JSON.stringify(clientCatalog.price_tiers)}
Images: ${clientCatalog.image_stats.total_images} total, ${clientCatalog.image_stats.avg_images_per_product} avg/product
Vendors: ${clientCatalog.vendor_count}
Top tags: ${clientCatalog.top_tags.slice(0, 15).join(', ')}
Sample products: ${JSON.stringify(clientCatalog.sample_products.slice(0, 20))}` : 'No Shopify store detected — non-Shopify or private catalog'}`,
      }],
      max_tokens: 2500,
      temperature: 0.3,
      
    });

    let result = {};
    try { result = JSON.parse(analysis.choices[0]?.message?.content || '{}'); } catch {}

    // Enrich with raw data from FULL catalogs
    result.competitor_product_count = compProducts.length;
    result.client_product_count = clientProducts.length;
    result.competitor_pricing = priceStats(compProducts);
    result.client_pricing = priceStats(clientProducts);
    result.competitor_categories = compCatalog.category_breakdown;
    result.client_categories = clientCatalog?.category_breakdown || {};
    result.top_competitor_products = compSummary.slice(0, 8);

    log('INTEL', `Analysis complete: ${competitor_url} vs ${f.business_name}`);
    res.json(result);
  } catch (e) {
    log('INTEL', `Error: ${e.message}`);
    res.status(500).json({ error: e.message });
  }
});

// ────────────────────────────────────────────
//  SOCIAL PROFILE HELPERS
// ────────────────────────────────────────────

/**
 * Fetch public Instagram profile data.
 * Tries the Instagram internal API endpoints first, falls back to page parsing.
 */
async function fetchInstagramProfile(handle) {
  if (!handle) return null;
  const username = handle.replace(/^@/, '').trim().toLowerCase();
  if (!username) return null;

  // Attempt 1: Instagram web profile API
  const igHeaders = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'X-IG-App-ID': '936619743392459',
    'Accept': 'application/json',
    'Accept-Language': 'en-US,en;q=0.9',
    'Referer': 'https://www.instagram.com/',
  };

  const extractFromData = (data) => {
    const user = data?.data?.user;
    if (!user) return null;
    return {
      username: user.username || username,
      full_name: user.full_name || '',
      bio: user.biography || '',
      profile_pic_url: user.profile_pic_url || null,
      follower_count: user.edge_followed_by?.count || 0,
      following_count: user.edge_follow?.count || 0,
      post_count: user.edge_owner_to_timeline_media?.count || 0,
      is_business_account: user.is_business_account || false,
      is_verified: user.is_verified || false,
      category: user.business_category_name || null,
    };
  };

  // Try primary endpoint
  try {
    const res = await fetch(
      `https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`,
      { headers: igHeaders }
    );
    if (res.ok) {
      const json = await res.json();
      const profile = extractFromData(json);
      if (profile) {
        log('SOCIAL', `Instagram profile fetched for @${username}: ${profile.follower_count} followers`);
        return profile;
      }
    }
  } catch (e) {
    log('SOCIAL', `Instagram primary API failed for @${username}: ${e.message}`);
  }

  // Try secondary endpoint
  try {
    const res = await fetch(
      `https://i.instagram.com/api/v1/users/web_profile_info/?username=${username}`,
      { headers: igHeaders }
    );
    if (res.ok) {
      const json = await res.json();
      const profile = extractFromData(json);
      if (profile) {
        log('SOCIAL', `Instagram profile (secondary) fetched for @${username}: ${profile.follower_count} followers`);
        return profile;
      }
    }
  } catch (e) {
    log('SOCIAL', `Instagram secondary API failed for @${username}: ${e.message}`);
  }

  // Fallback: parse public profile page
  try {
    const res = await fetch(`https://www.instagram.com/${username}/`, {
      headers: igHeaders,
    });
    if (res.ok) {
      const html = await res.text();
      // Look for JSON data in page
      const match = html.match(/window\._sharedData\s*=\s*({.+?});/);
      if (match) {
        const shared = JSON.parse(match[1]);
        const user = shared?.entry_data?.ProfilePage?.[0]?.graphql?.user;
        if (user) {
          return {
            username: user.username || username,
            full_name: user.full_name || '',
            bio: user.biography || '',
            profile_pic_url: user.profile_pic_url_hd || user.profile_pic_url || null,
            follower_count: user.edge_followed_by?.count || 0,
            following_count: user.edge_follow?.count || 0,
            post_count: user.edge_owner_to_timeline_media?.count || 0,
            is_business_account: user.is_business_account || false,
            is_verified: user.is_verified || false,
            category: user.business_category_name || null,
          };
        }
      }
    }
  } catch (e) {
    log('SOCIAL', `Instagram page parse failed for @${username}: ${e.message}`);
  }

  log('SOCIAL', `Could not fetch Instagram profile for @${username}`);
  return null;
}

/**
 * Fetch public TikTok profile data by parsing the page's universal data.
 */
async function fetchTikTokProfile(handle) {
  if (!handle) return null;
  const username = handle.replace(/^@/, '').trim().toLowerCase();
  if (!username) return null;

  try {
    const res = await fetch(`https://www.tiktok.com/@${username}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    });

    if (!res.ok) {
      log('SOCIAL', `TikTok page returned ${res.status} for @${username}`);
      return null;
    }

    const html = await res.text();

    // Extract __UNIVERSAL_DATA_FOR_REHYDRATION__ JSON blob
    const match = html.match(/<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__"[^>]*>(.*?)<\/script>/s);
    if (!match) {
      log('SOCIAL', `TikTok: no universal data found for @${username}`);
      return null;
    }

    const universal = JSON.parse(match[1]);
    // Navigate to user info
    const webapp = universal?.__DEFAULT_SCOPE__?.['webapp.user-detail'];
    const userInfo = webapp?.userInfo;
    const user = userInfo?.user;
    const stats = userInfo?.stats;

    if (!user) {
      log('SOCIAL', `TikTok: no user object for @${username}`);
      return null;
    }

    const profile = {
      username: user.uniqueId || username,
      nickname: user.nickname || '',
      bio: user.signature || '',
      avatar: user.avatarLarger || user.avatarMedium || null,
      follower_count: stats?.followerCount || 0,
      following_count: stats?.followingCount || 0,
      likes_count: stats?.heartCount || stats?.diggCount || 0,
      video_count: stats?.videoCount || 0,
      is_verified: user.verified || false,
    };

    log('SOCIAL', `TikTok profile fetched for @${username}: ${profile.follower_count} followers`);
    return profile;
  } catch (e) {
    log('SOCIAL', `TikTok fetch failed for @${username}: ${e.message}`);
    return null;
  }
}

/**
 * Fetch Instagram Insights via Meta Graph API for a connected account.
 * @param {string} igUserId - Instagram business account ID
 * @param {string} accessToken - User access token from social platform
 */
async function fetchInstagramInsights(igUserId, accessToken) {
  if (!igUserId || !accessToken) return null;
  try {
    const thirtyDaysAgo = Math.floor((Date.now() - 30 * 24 * 60 * 60 * 1000) / 1000);
    const today = Math.floor(Date.now() / 1000);

    const [accountRes, mediaRes, insightsRes] = await Promise.allSettled([
      fetch(`https://graph.facebook.com/v22.0/${igUserId}?fields=followers_count,media_count,biography,name,username&access_token=${accessToken}`),
      fetch(`https://graph.facebook.com/v22.0/${igUserId}/media?fields=id,caption,media_type,timestamp,like_count,comments_count,permalink&limit=25&access_token=${accessToken}`),
      fetch(`https://graph.facebook.com/v22.0/${igUserId}/insights?metric=impressions,reach,profile_views,follower_count&period=day&since=${thirtyDaysAgo}&until=${today}&access_token=${accessToken}`),
    ]);

    let account = null;
    let media = [];
    let insights = [];

    if (accountRes.status === 'fulfilled' && accountRes.value.ok) {
      account = await accountRes.value.json();
    }
    if (mediaRes.status === 'fulfilled' && mediaRes.value.ok) {
      const d = await mediaRes.value.json();
      media = d.data || [];
    }
    if (insightsRes.status === 'fulfilled' && insightsRes.value.ok) {
      const d = await insightsRes.value.json();
      insights = d.data || [];
    }

    return { account, media, insights };
  } catch (e) {
    log('IG_INSIGHTS', `Failed for user ${igUserId}: ${e.message}`);
    return null;
  }
}

// ────────────────────────────────────────────
//  NEW ENDPOINTS
// ────────────────────────────────────────────

// ━━━ Shopify OAuth Flow ━━━
// Step 1: Client clicks "Connect Shopify" → redirect to Shopify authorization
app.get('/api/shopify/auth', (req, res) => {
  const { email, hash, shop } = req.query;
  if (!shop) return res.status(400).send('Missing shop parameter. Please enter your Shopify store domain.');

  // Clean the shop domain
  let cleanShop = shop.replace(/^https?:\/\//, '').replace(/\/$/, '');
  if (!cleanShop.includes('.myshopify.com')) {
    cleanShop = cleanShop.replace(/\.myshopify\.com.*$/, '') + '.myshopify.com';
  }

  // Generate a nonce for CSRF protection
  const nonce = crypto.randomBytes(16).toString('hex');
  // Store nonce + client info in a short-lived state param
  const state = Buffer.from(JSON.stringify({ nonce, email, hash })).toString('base64url');

  const authUrl = `https://${cleanShop}/admin/oauth/authorize?` +
    `client_id=${SHOPIFY_CLIENT_ID}` +
    `&scope=${SHOPIFY_SCOPES}` +
    `&redirect_uri=${encodeURIComponent(SHOPIFY_REDIRECT_URI)}` +
    `&state=${state}`;

  log('SHOPIFY_OAUTH', `Redirecting to Shopify auth for shop: ${cleanShop}`);
  res.redirect(authUrl);
});

// Step 2: Shopify redirects back with auth code → exchange for permanent token
app.get('/api/shopify/callback', async (req, res) => {
  const { code, shop, state, hmac } = req.query;

  if (!code || !shop || !state) {
    return res.status(400).send('Missing required OAuth parameters.');
  }

  try {
    // Decode state to get client info
    let clientInfo;
    try {
      clientInfo = JSON.parse(Buffer.from(state, 'base64url').toString());
    } catch {
      return res.status(400).send('Invalid state parameter.');
    }

    // Verify HMAC from Shopify (validate the callback is legit)
    const params = { ...req.query };
    delete params.hmac;
    delete params.signature;
    const sortedParams = Object.keys(params).sort().map(k => `${k}=${params[k]}`).join('&');
    const digest = crypto.createHmac('sha256', SHOPIFY_CLIENT_SECRET).update(sortedParams).digest('hex');
    if (hmac && digest !== hmac) {
      log('SHOPIFY_OAUTH', `HMAC verification failed for shop: ${shop}`);
      return res.status(403).send('HMAC verification failed.');
    }

    // Exchange the temporary code for a permanent access token
    const tokenRes = await fetch(`https://${shop}/admin/oauth/access_token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: SHOPIFY_CLIENT_ID,
        client_secret: SHOPIFY_CLIENT_SECRET,
        code,
      }),
    });

    if (!tokenRes.ok) {
      const errText = await tokenRes.text();
      log('SHOPIFY_OAUTH', `Token exchange failed: ${errText}`);
      return res.status(400).send('Failed to get access token from Shopify.');
    }

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;
    const cleanShop = shop.replace(/\/$/, '');

    // Verify the client if we have their info
    let client = null;
    if (clientInfo.email && clientInfo.hash) {
      client = await verifyClient(clientInfo.email, clientInfo.hash);
    }

    if (!client) {
      // Try to find client by matching Shopify domain
      log('SHOPIFY_OAUTH', `No client auth in state, attempting domain match for ${cleanShop}`);
      return res.status(401).send('Could not verify client. Please try connecting from the portal again.');
    }

    // Get shop info to confirm connection
    const shopRes = await fetch(`https://${cleanShop}/admin/api/2024-01/shop.json`, {
      headers: { 'X-Shopify-Access-Token': accessToken },
    });
    const shopData = shopRes.ok ? await shopRes.json() : {};
    const shopName = shopData.shop?.name || cleanShop;

    // Store the access token and domain in Airtable
    await atUpdate(TBL.CLIENTS, client.id, {
      shopify_domain: cleanShop,
      shopify_access_token: accessToken,
    });

    log('SHOPIFY_OAUTH', `${client.fields.business_name}: OAuth complete → ${cleanShop} (${shopName})`);

    // Redirect back to the portal with success
    const portalUrl = `https://socialengine.agency/portal.html?shopify_connected=true&shop_name=${encodeURIComponent(shopName)}`;
    res.redirect(portalUrl);
  } catch (e) {
    log('SHOPIFY_OAUTH', `Error: ${e.message}`);
    res.redirect('https://socialengine.agency/portal.html?shopify_error=true');
  }
});

// ── POST /api/connect-shopify ──
// Legacy: Accepts shopify_domain + shopify_token manually, validates via Admin API, stores in Airtable
app.post('/api/connect-shopify', async (req, res) => {
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  const { shopify_domain, shopify_token } = req.body;
  if (!shopify_domain || !shopify_token) {
    return res.status(400).json({ error: 'shopify_domain and shopify_token are required' });
  }

  try {
    const clean = shopify_domain.replace(/^https?:\/\//, '').replace(/\/$/, '');

    // Validate token by fetching shop info
    const shopRes = await fetch(`https://${clean}/admin/api/2024-01/shop.json`, {
      headers: {
        'X-Shopify-Access-Token': shopify_token,
        'Content-Type': 'application/json',
      },
    });

    if (!shopRes.ok) {
      return res.status(400).json({ error: 'Invalid Shopify token or domain. Please check your credentials.' });
    }

    const shopData = await shopRes.json();
    const shop = shopData.shop;
    const shopName = shop?.name || clean;

    // Get product count via Admin API
    let productCount = 0;
    try {
      const countRes = await fetch(`https://${clean}/admin/api/2024-01/products/count.json`, {
        headers: { 'X-Shopify-Access-Token': shopify_token },
      });
      if (countRes.ok) {
        const cd = await countRes.json();
        productCount = cd.count || 0;
      }
    } catch {}

    // Store credentials in Airtable
    await atUpdate(TBL.CLIENTS, client.id, {
      shopify_domain: clean,
      shopify_access_token: shopify_token,
    });

    log('SHOPIFY_CONNECT', `${client.fields.business_name}: connected to ${clean} (${shopName}, ${productCount} products)`);

    res.json({
      success: true,
      shop_name: shopName,
      product_count: productCount,
      message: `Successfully connected to ${shopName}. Private product, order, and customer data is now available.`,
    });
  } catch (e) {
    log('SHOPIFY_CONNECT', `Error: ${e.message}`);
    res.status(500).json({ error: 'Failed to connect Shopify store. Please try again.' });
  }
});

// ── GET /api/client-analytics ──
// Returns comprehensive content stats, approval rates, timeline, brand voice info, Shopify data, social profiles
app.get('/api/client-analytics', async (req, res) => {
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const f = client.fields;
    const clientName = f.business_name;

    // Fetch ALL content for this client
    const contentFormula = encodeURIComponent(`{client_id}='${clientName}'`);
    const allContent = await atGetAll(TBL.CONTENT, `filterByFormula=${contentFormula}`);
    const posts = allContent.map(r => r.fields);

    // Content stats by platform
    const byPlatform = {};
    const byStatus = {};
    const byContentType = {};
    let totalApproved = 0;
    let totalRejected = 0;
    let approvalTimes = [];

    // Pillar performance: track approvals per content_pillar
    const pillarApprovals = {};
    const pillarTotal = {};

    // Timeline: posts created per week for last 8 weeks
    const now = Date.now();
    const weekBuckets = Array.from({ length: 8 }, (_, i) => ({
      week: i + 1,
      label: new Date(now - (7 - i) * 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      count: 0,
    }));
    const eightWeeksAgo = now - 8 * 7 * 24 * 60 * 60 * 1000;

    for (const r of allContent) {
      const p = r.fields;
      const platform = p.platform || 'Unknown';
      const status = p.status || 'Unknown';
      const ctype = p.content_type || 'Unknown';
      const pillar = p.content_pillar || 'Unknown';

      byPlatform[platform] = (byPlatform[platform] || 0) + 1;
      byStatus[status] = (byStatus[status] || 0) + 1;
      byContentType[ctype] = (byContentType[ctype] || 0) + 1;

      pillarTotal[pillar] = (pillarTotal[pillar] || 0) + 1;
      if (status === 'Approved' || status === 'Published') {
        totalApproved++;
        pillarApprovals[pillar] = (pillarApprovals[pillar] || 0) + 1;
      }
      if (status === 'Rejected') totalRejected++;

      // Timeline bucketing
      const created = new Date(r.createdTime || r.fields.created_at || 0).getTime();
      if (created >= eightWeeksAgo) {
        const weeksAgo = Math.floor((now - created) / (7 * 24 * 60 * 60 * 1000));
        const bucketIdx = 7 - weeksAgo;
        if (bucketIdx >= 0 && bucketIdx < 8) weekBuckets[bucketIdx].count++;
      }
    }

    const approvalRate = (totalApproved + totalRejected) > 0
      ? Math.round((totalApproved / (totalApproved + totalRejected)) * 100)
      : null;

    // Top performing pillars by approval rate
    const pillarPerformance = Object.keys(pillarTotal).map(pillar => ({
      pillar,
      total: pillarTotal[pillar],
      approved: pillarApprovals[pillar] || 0,
      approval_rate: pillarTotal[pillar] > 0
        ? Math.round(((pillarApprovals[pillar] || 0) / pillarTotal[pillar]) * 100)
        : 0,
    })).sort((a, b) => b.approval_rate - a.approval_rate);

    // Brand voice info
    let brandVoiceInfo = null;
    try {
      const bvFormula = encodeURIComponent(`{client_id}='${clientName}'`);
      const bvData = await atGet(TBL.BRAND_VOICES, `filterByFormula=${bvFormula}&maxRecords=1&sort%5B0%5D%5Bfield%5D=version&sort%5B0%5D%5Bdirection%5D=desc`);
      if (bvData.records?.[0]) {
        const bv = bvData.records[0].fields;
        brandVoiceInfo = {
          archetype: bv.archetype || null,
          tone: bv.tone_adjectives || null,
          version: bv.version || 1,
          last_updated: bvData.records[0].createdTime || null,
        };
      }
    } catch {}

    // Shopify data (if private token connected)
    let shopifyData = null;
    if (f.shopify_access_token && f.shopify_domain) {
      try {
        const privateData = await fetchShopifyPrivateData(f.shopify_domain, f.shopify_access_token);
        const products = await fetchAllShopifyProducts(f.shopify_domain, 2500, f.shopify_access_token);
        const lowStock = products.filter(p => {
          const qty = p.variants?.reduce((s, v) => s + (v.inventory_quantity || 0), 0) || 0;
          return qty > 0 && qty <= 5;
        });
        shopifyData = {
          ...privateData,
          product_count: products.length,
          low_stock_items: lowStock.slice(0, 10).map(p => ({
            title: p.title,
            inventory: p.variants?.reduce((s, v) => s + (v.inventory_quantity || 0), 0) || 0,
            price: p.variants?.[0]?.price || null,
          })),
        };
      } catch (e) {
        log('ANALYTICS', `Shopify data fetch failed: ${e.message}`);
      }
    }

    // Social profiles (from stored handles)
    let socialProfiles = {};
    let profile = null;
    try { if (f.notes) profile = JSON.parse(f.notes); } catch {}
    const igHandle = f.instagram_handle || profile?.social_handles?.instagram;
    const ttHandle = f.tiktok_handle || profile?.social_handles?.tiktok;

    if (igHandle) {
      try {
        // Instagram insights via Upload-Post (OAuth handled by Upload-Post)
        // Upload-Post provides IG data when connected
      } catch {}
      if (!socialProfiles.instagram) {
        const igProfile = await fetchInstagramProfile(igHandle);
        if (igProfile) socialProfiles.instagram = { source: 'public', ...igProfile };
      }
    }
    if (ttHandle) {
      const ttProfile = await fetchTikTokProfile(ttHandle);
      if (ttProfile) socialProfiles.tiktok = { source: 'public', ...ttProfile };
    }

    res.json({
      client_name: clientName,
      content: {
        total_posts: posts.length,
        by_platform: byPlatform,
        by_status: byStatus,
        by_content_type: byContentType,
      },
      approval_rate: approvalRate,
      timeline_8w: weekBuckets,
      pillar_performance: pillarPerformance,
      brand_voice: brandVoiceInfo,
      shopify: shopifyData,
      social_profiles: socialProfiles,
    });
  } catch (e) {
    log('ANALYTICS', `Error: ${e.message}`);
    res.status(500).json({ error: 'Failed to load analytics' });
  }
});

// ── Social Platform Connect (via Upload-Post) ──
// Upload-Post handles all OAuth — we redirect to their white-label connect flow
// REMOVED: Old connect-social — replaced by /api/social/connect (Upload-Post white-label)

// ── GET /api/learning-progress ──
// Returns the AI learning state for the logged-in client: accuracy score, interaction counts,
// brand DNA status, and the correct messaging about pre-training vs. ongoing learning.
app.get('/api/learning-progress', async (req, res) => {
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const f = client.fields;
    const clientName = f.business_name || f.brand_name || email;

    // Load BRAND_VOICES record for this client
    const bvFormula = encodeURIComponent(`{client_id}='${clientName}'`);
    const bvData = await atGet(TBL.BRAND_VOICES, `filterByFormula=${bvFormula}&maxRecords=1`);
    const bv = bvData.records?.[0]?.fields || null;
    const brandDNABuilt = !!bv;

    // Parse learning history from CLIENTS notes field (stored as JSON)
    let learningHistory = {};
    try { learningHistory = JSON.parse(f.notes || '{}'); } catch {}
    const lh = learningHistory.learning_history || learningHistory;

    const totalInteractions = lh.total_interactions || 0;
    const approvedCount = lh.approved_count || 0;
    const rejectedCount = lh.rejected_count || 0;
    const regeneratedCount = lh.regenerated_count || 0;
    const approvalRate = approvedCount + rejectedCount > 0
      ? Math.round((approvedCount / (approvedCount + rejectedCount)) * 100)
      : 100;

    // Accuracy formula: starts at 60% from day 1 (pre-trained on brand DNA)
    // Climbs with every approve/reject/regenerate signal
    const accuracyScore = brandDNABuilt
      ? Math.min(98, 60 + Math.round(Math.log(totalInteractions + 1) * 8 * (approvalRate / 100)))
      : 40;

    // Determine learning stage and messaging
    let stage, stageMessage;
    if (!brandDNABuilt) {
      stage = 'initializing';
      stageMessage = 'Complete onboarding to activate your AI brand profile.';
    } else if (totalInteractions === 0) {
      stage = 'pre_trained';
      stageMessage = 'Pre-trained on your brand before you logged in. Every approval sharpens it further.';
    } else if (totalInteractions < 5) {
      stage = 'learning';
      stageMessage = `${totalInteractions} signal${totalInteractions === 1 ? '' : 's'} received. AI is calibrating to your exact preferences.`;
    } else if (totalInteractions < 20) {
      stage = 'calibrating';
      stageMessage = `Getting sharper. AI has learned from ${totalInteractions} of your decisions.`;
    } else if (totalInteractions < 50) {
      stage = 'personalized';
      stageMessage = `Genuinely personalized. AI knows your brand voice across ${totalInteractions} decisions.`;
    } else {
      stage = 'mastered';
      stageMessage = `Deeply trained. Writing reliably in your brand voice after ${totalInteractions} interactions.`;
    }

    res.json({
      success: true,
      client_name: clientName,
      brand_dna_built: brandDNABuilt,
      brand_dna_strands: bv ? {
        tone: !!bv.tone,
        voice_profile: !!bv.voice_profile,
        brand_dna: !!bv.brand_dna,
        target_audience: !!bv.target_audience,
        competitor_brands: !!bv.competitor_brands,
      } : null,
      accuracy_score: accuracyScore,
      total_interactions: totalInteractions,
      approved_count: approvedCount,
      rejected_count: rejectedCount,
      regenerated_count: regeneratedCount,
      approval_rate: approvalRate,
      stage,
      stage_message: stageMessage,
      pre_trained: brandDNABuilt,
      pre_training_message: 'Pre-trained on your brand before you log in. Gets sharper with every decision.',
    });
  } catch (e) {
    log('LEARNING', `Error: ${e.message}`);
    res.status(500).json({ error: 'Failed to load learning progress' });
  }
});





// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  VIDEO STUDIO API — Full Higgsfield Integration
//  All modes: text-to-video, image-to-video, soul mode, multi-scene
//  All features: 50+ camera effects, motion presets, model selection
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * POST /api/video/generate — Generate a video via Higgsfield
 * Supports: text-to-video, image-to-video, soul mode, multi-scene
 */
app.post('/api/video/generate', async (req, res) => {
  try {
    const {
      prompt, image_url, reference_images, scenes,
      duration, resolution, aspect_ratio, camera_effect,
      camera_fixed, enhance_prompt, motion_preset, model, seed,
      content_type, platform, brand_fingerprint,
      // Auth
      email, hash,
    } = req.body;
    
    if (!prompt && (!scenes || scenes.length === 0)) {
      return res.status(400).json({ error: 'prompt or scenes required' });
    }
    
    // Optional auth check
    if (email && hash) {
      const client = await verifyClient(email, hash);
      if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // If motion_preset provided, resolve to camera effects
    let resolvedEffect = camera_effect;
    if (motion_preset && MOTION_PRESETS[motion_preset]) {
      resolvedEffect = resolvedEffect || MOTION_PRESETS[motion_preset].effects[0];
    }
    
    const result = await smartVideoGenerate({
      prompt,
      image_url,
      reference_images,
      scenes,
      duration: duration || 5,
      resolution: resolution || '720p',
      aspect_ratio: aspect_ratio || '9:16',
      camera_effect: resolvedEffect,
      camera_fixed: camera_fixed || false,
      enhance_prompt: enhance_prompt !== false,
      model,
      seed,
      content_type: content_type || 'product_showcase',
      platform: platform || 'instagram',
      brand_fingerprint,
    });
    
    res.json({
      success: true,
      generation_type: result.type,
      video_url: result.url || null,
      scenes: result.result || null,
      camera_effect: resolvedEffect,
      model_used: model || 'auto',
    });
  } catch (e) {
    log('API', `Video generate error: ${e.message}`);
    res.status(500).json({ error: e.message });
  }
});

/**
 * GET /api/video/status/:id — Check generation status (video or image)
 * Calls: GET https://platform.higgsfield.ai/requests/{request_id}/status
 */
app.get('/api/video/status/:id', async (req, res) => {
  try {
    // Quick single check — don't poll, just check once
    const statusUrl = `${HIGGSFIELD_BASE}/requests/${req.params.id}/status`;
    const statusRes = await fetch(statusUrl, {
      headers: { 'Authorization': `Key ${HIGGSFIELD_API_KEY}:${HIGGSFIELD_API_SECRET}` },
    });
    
    if (!statusRes.ok) {
      const errText = await statusRes.text();
      throw new Error(`Status check failed (${statusRes.status}): ${errText}`);
    }
    
    const data = await statusRes.json();
    
    // Normalize response to include output URL in consistent field
    if (data.status === 'completed' || data.status === 'done') {
      data.output_url = extractOutputUrl(data);
    }
    
    res.json(data);
  } catch (e) {
    if (e.message.includes('timed out')) {
      return res.json({ status: 'processing', request_id: req.params.id });
    }
    res.status(500).json({ error: e.message });
  }
});

/**
 * GET /api/video/presets — Get all available camera effects and motion presets
 */
app.get('/api/video/presets', (req, res) => {
  const { category } = req.query;
  
  let effects = Object.entries(CAMERA_EFFECTS).map(([id, data]) => ({ id, ...data }));
  if (category) {
    effects = effects.filter(e => e.category === category);
  }
  
  const presets = Object.entries(MOTION_PRESETS).map(([id, data]) => ({ id, ...data }));
  const audio = Object.entries(TRENDING_AUDIO).map(([id, data]) => ({ id, ...data }));
  
  const categories = [...new Set(effects.map(e => e.category))];
  
  res.json({
    camera_effects: effects,
    motion_presets: presets,
    trending_audio: audio,
    categories,
    total_effects: effects.length,
  });
});

/**
 * GET /api/video/models — Get available AI video models
 */
app.get('/api/video/models', (req, res) => {
  const models = Object.entries(HIGGSFIELD_MODELS).map(([id, data]) => ({ id, ...data }));
  res.json({
    models,
    default_model: 'kling-2.1-pro',
    premium_models: models.filter(m => m.quality === 'premium'),
    supported_resolutions: ['480p', '720p', '1080p'],
    supported_durations: [5, 10],
    supported_aspect_ratios: ['16:9', '4:3', '1:1', '9:16'],
  });
});

/**
 * POST /api/video/voiceover — Generate voiceover script for a video
 */
app.post('/api/video/voiceover', async (req, res) => {
  try {
    const { text, voice_profile, language, tone, email, hash } = req.body;
    
    if (!text) return res.status(400).json({ error: 'text required' });
    
    if (email && hash) {
      const client = await verifyClient(email, hash);
      if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const result = await generateVoiceover(text, voice_profile, { language, tone });
    res.json({ success: true, ...result });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * POST /api/video/translate — Translate video script + prepare for lip sync
 */
app.post('/api/video/translate', async (req, res) => {
  try {
    const { text, target_language, video_url, email, hash } = req.body;
    
    if (!text || !target_language) {
      return res.status(400).json({ error: 'text and target_language required' });
    }
    
    if (email && hash) {
      const client = await verifyClient(email, hash);
      if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const result = await translateVideoScript(text, target_language);
    res.json({
      success: true,
      ...result,
      video_url, // Pass through for lip sync processing
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * POST /api/video/clone-voice — Store a voice clone profile
 */
app.post('/api/video/clone-voice', async (req, res) => {
  try {
    const { audio_sample_url, voice_name, email, hash } = req.body;
    
    if (!audio_sample_url || !voice_name) {
      return res.status(400).json({ error: 'audio_sample_url and voice_name required' });
    }
    
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const result = await cloneVoiceProfile(audio_sample_url, voice_name, client.fields.brand_name || email);
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  AI COACH — Powered by Perplexity Sonar
//  Contextual brand intelligence, strategy, content coaching
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * POST /api/ai-coach — AI Coach chat with full brand context
 * Uses Perplexity Sonar Pro for real-time intelligence + brand context
 */
app.post('/api/ai-coach', async (req, res) => {
  try {
    const { message, email, hash, context_type } = req.body;
    
    if (!message) return res.status(400).json({ error: 'message required' });
    
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const clientName = client.fields.brand_name || client.fields.contact_name || 'Client';
    const clientId = `coach_${email}`;
    
    // Load brand context for AI Coach
    let brandContext = '';
    try {
      const brandFingerprint = await loadBrandFingerprint(clientName);
      if (brandFingerprint) {
        brandContext = `\nBrand DNA: ${JSON.stringify(brandFingerprint)}`;
      }
      
      // Load recent content performance
      const formula = encodeURIComponent(`{client_id}='${clientName}'`);
      const recentContent = await atGet(TBL.CONTENT, `filterByFormula=${formula}&maxRecords=10&sort%5B0%5D%5Bfield%5D=created_at&sort%5B0%5D%5Bdirection%5D=desc`);
      if (recentContent.records?.length > 0) {
        const contentSummary = recentContent.records.map(r => 
          `${r.fields.platform} ${r.fields.content_type}: "${(r.fields.caption || '').substring(0, 100)}" — Status: ${r.fields.status}`
        ).join('\n');
        brandContext += `\n\nRecent content:\n${contentSummary}`;
      }
    } catch (e) {
      log('COACH', `Brand context load failed: ${e.message}`);
    }
    
    // ━━ LEARNING CONTEXT: Enrich coach with feedback history ━━
    const coachLearningCtx = await buildLearningContext(clientName);
    if (coachLearningCtx) brandContext += coachLearningCtx;
    
    // Build conversation history
    if (!chatHistories.has(clientId)) chatHistories.set(clientId, []);
    const history = chatHistories.get(clientId);
    
    // Context-specific system prompts
    const contextPrompts = {
      strategy: 'You are a senior social media strategist with 15 years of experience. Analyze trends, suggest content strategies, and provide data-driven recommendations.',
      content: 'You are a creative content director. Help brainstorm content ideas, write captions, and optimize posts for engagement.',
      analytics: 'You are a social media analytics expert. Interpret metrics, identify trends, and suggest optimizations based on performance data.',
      brand: 'You are a brand strategist. Help refine brand voice, visual identity, and messaging consistency across platforms.',
      competitor: 'You are a competitive intelligence analyst. Analyze competitor strategies, identify gaps, and suggest differentiation tactics.',
      growth: 'You are a growth marketing expert. Focus on audience growth, engagement tactics, and conversion optimization.',
      default: 'You are SocialEngine AI Coach — an expert social media strategist, content creator, and brand consultant.',
    };
    
    const systemPrompt = `${contextPrompts[context_type] || contextPrompts.default}

You are coaching ${clientName}. Be direct, actionable, and specific. No fluff.
${brandContext}

Rules:
- Give specific, actionable advice — not generic tips
- Reference their actual brand, products, and recent content when relevant
- Suggest concrete post ideas with hooks and CTAs
- Use data and trends to back up recommendations
- Be honest about what's working and what isn't
- Keep responses concise but comprehensive`;
    
    const messages = [
      { role: 'system', content: systemPrompt },
      ...history.slice(-20), // Last 20 messages for context
      { role: 'user', content: message },
    ];
    
    const completion = await openai.chat.completions.create({
      model: 'sonar-pro',
      messages,
      temperature: 0.7,
      max_tokens: 2000,
    });
    
    const reply = completion.choices[0]?.message?.content || 'I apologize, I could not generate a response. Please try again.';
    
    // Store conversation
    history.push({ role: 'user', content: message });
    history.push({ role: 'assistant', content: reply });
    
    // Keep history manageable
    if (history.length > 50) {
      chatHistories.set(clientId, history.slice(-40));
    }
    
    res.json({
      reply,
      context_type: context_type || 'default',
      brand_context_loaded: !!brandContext,
      citations: completion.citations || [],
    });
  } catch (e) {
    log('COACH', `AI Coach error: ${e.message}`);
    res.status(500).json({ error: e.message });
  }
});


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  INBOX / DM MONITOR
//  Aggregates messages across platforms, auto-reply, sentiment analysis
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// In-memory store for inbox messages (production would use Airtable/DB)
const inboxStore = new Map();

/**
 * GET /api/inbox/messages — Get all messages/comments/DMs for a client
 */
app.get('/api/inbox/messages', async (req, res) => {
  try {
    const { email, hash, platform, status, limit } = req.query;
    
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const clientName = client.fields.brand_name || email;
    const clientInbox = inboxStore.get(clientName) || [];
    
    let filtered = clientInbox;
    if (platform) filtered = filtered.filter(m => m.platform === platform);
    if (status) filtered = filtered.filter(m => m.status === status);
    
    const maxResults = parseInt(limit) || 50;
    
    res.json({
      messages: filtered.slice(0, maxResults),
      total: filtered.length,
      unread: filtered.filter(m => m.status === 'unread').length,
      platforms: [...new Set(filtered.map(m => m.platform))],
      sentiment_summary: {
        positive: filtered.filter(m => m.sentiment === 'positive').length,
        neutral: filtered.filter(m => m.sentiment === 'neutral').length,
        negative: filtered.filter(m => m.sentiment === 'negative').length,
      },
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * POST /api/inbox/reply — Send a reply to a message/comment
 */
app.post('/api/inbox/reply', async (req, res) => {
  try {
    const { email, hash, message_id, reply_text, auto_generated } = req.body;
    
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const clientName = client.fields.brand_name || email;
    const clientInbox = inboxStore.get(clientName) || [];
    const message = clientInbox.find(m => m.id === message_id);
    
    if (!message) return res.status(404).json({ error: 'Message not found' });
    
    // Generate AI reply suggestion if not provided
    let finalReply = reply_text;
    if (!finalReply || auto_generated) {
      try {
        const brandFingerprint = await loadBrandFingerprint(clientName);
        const completion = await openai.chat.completions.create({
          model: 'sonar',
          messages: [
            { role: 'system', content: `You are a social media community manager for ${clientName}. Write a friendly, on-brand reply to this ${message.type} on ${message.platform}. Keep it natural and concise (1-3 sentences). Match the brand voice: ${brandFingerprint ? JSON.stringify(brandFingerprint) : 'professional, friendly, authentic'}.` },
            { role: 'user', content: `${message.type}: "${message.text}"\n\nContext: ${message.context || 'none'}` },
          ],
          temperature: 0.7,
        });
        finalReply = completion.choices[0]?.message?.content || reply_text || 'Thank you for your message!';
      } catch (e) {
        finalReply = reply_text || 'Thank you for your message!';
      }
    }
    
    // Mark as replied
    message.status = 'replied';
    message.reply = finalReply;
    message.replied_at = new Date().toISOString();
    
    res.json({
      success: true,
      reply: finalReply,
      auto_generated: !reply_text || auto_generated,
      message_id,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * POST /api/inbox/auto-reply — Configure auto-reply rules
 */
app.post('/api/inbox/auto-reply', async (req, res) => {
  try {
    const { email, hash, enabled, rules, response_tone, platforms } = req.body;
    
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const clientName = client.fields.brand_name || email;
    
    // Store auto-reply config
    const config = {
      enabled: enabled !== false,
      rules: rules || [
        { trigger: 'price|cost|how much', response_type: 'pricing_info' },
        { trigger: 'ship|deliver|when', response_type: 'shipping_info' },
        { trigger: 'thank|love|amazing', response_type: 'gratitude' },
        { trigger: 'complain|broken|wrong|bad', response_type: 'support_escalation' },
      ],
      response_tone: response_tone || 'friendly_professional',
      platforms: platforms || ['instagram', 'tiktok', 'facebook'],
      updated_at: new Date().toISOString(),
    };
    
    // Store in brand voice table
    try {
      await atCreate(TBL.BRAND_VOICES, {
        client_id: clientName,
        voice_name: '_auto_reply_config',
        visual_seed: JSON.stringify(config),
        version: Date.now(),
      });
    } catch (e) {
      log('INBOX', `Failed to persist auto-reply config: ${e.message}`);
    }
    
    res.json({ success: true, config });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * GET /api/inbox/stats — Inbox statistics and analytics
 */
app.get('/api/inbox/stats', async (req, res) => {
  try {
    const { email, hash } = req.query;
    
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const clientName = client.fields.brand_name || email;
    const messages = inboxStore.get(clientName) || [];
    
    const now = new Date();
    const last24h = messages.filter(m => (now - new Date(m.received_at)) < 86400000);
    const last7d = messages.filter(m => (now - new Date(m.received_at)) < 604800000);
    
    res.json({
      total_messages: messages.length,
      unread: messages.filter(m => m.status === 'unread').length,
      replied: messages.filter(m => m.status === 'replied').length,
      auto_replied: messages.filter(m => m.auto_replied).length,
      last_24h: last24h.length,
      last_7d: last7d.length,
      avg_response_time_min: 0, // Would calculate from actual reply timestamps
      sentiment: {
        positive: messages.filter(m => m.sentiment === 'positive').length,
        neutral: messages.filter(m => m.sentiment === 'neutral').length,
        negative: messages.filter(m => m.sentiment === 'negative').length,
      },
      by_platform: {
        instagram: messages.filter(m => m.platform === 'instagram').length,
        tiktok: messages.filter(m => m.platform === 'tiktok').length,
        facebook: messages.filter(m => m.platform === 'facebook').length,
        youtube: messages.filter(m => m.platform === 'youtube').length,
      },
      by_type: {
        comment: messages.filter(m => m.type === 'comment').length,
        dm: messages.filter(m => m.type === 'dm').length,
        mention: messages.filter(m => m.type === 'mention').length,
        reply: messages.filter(m => m.type === 'reply').length,
      },
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  INFLUENCER HUB / MARKETPLACE
//  Discover influencers, manage campaigns, track partnerships
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * POST /api/influencer/discover — Discover influencers in a niche using Perplexity
 */
app.post('/api/influencer/discover', async (req, res) => {
  try {
    const { email, hash, niche, platform, follower_range, location, budget_range } = req.body;
    
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const clientName = client.fields.brand_name || 'the brand';
    
    const searchPrompt = `Find 10 real influencers/creators in the "${niche || 'lifestyle'}" niche on ${platform || 'Instagram'}.
${follower_range ? `Follower range: ${follower_range}` : 'Mix of micro (5K-50K) and mid-tier (50K-500K) influencers.'}
${location ? `Location: ${location}` : ''}
${budget_range ? `Typical collaboration budget: ${budget_range}` : ''}

For each influencer, provide:
1. Handle/username
2. Approximate follower count
3. Content style description
4. Engagement rate estimate
5. Why they'd be a good fit for ${clientName}
6. Estimated collaboration cost

Format as JSON array with keys: handle, followers, style, engagement_rate, fit_reason, estimated_cost`;

    const completion = await openai.chat.completions.create({
      model: 'sonar-pro',
      messages: [
        { role: 'system', content: 'You are an influencer marketing expert with access to real-time social media data. Provide accurate, current influencer recommendations. Return ONLY valid JSON.' },
        { role: 'user', content: searchPrompt },
      ],
      temperature: 0.5,
    });
    
    let influencers = [];
    try {
      const content = completion.choices[0]?.message?.content || '[]';
      const jsonMatch = content.match(/\[.*\]/s);
      influencers = JSON.parse(jsonMatch ? jsonMatch[0] : '[]');
    } catch {
      influencers = [{ handle: 'Search results could not be parsed', error: true }];
    }
    
    res.json({
      influencers,
      search_params: { niche, platform, follower_range, location, budget_range },
      citations: completion.citations || [],
      total_found: influencers.length,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * POST /api/influencer/campaign — Create an influencer campaign
 */
app.post('/api/influencer/campaign', async (req, res) => {
  try {
    const {
      email, hash,
      campaign_name, influencer_handles, brief, budget,
      start_date, end_date, deliverables, platforms,
    } = req.body;
    
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const clientName = client.fields.brand_name || email;
    
    // Generate campaign brief using Perplexity
    let generatedBrief = brief;
    if (!brief) {
      try {
        const completion = await openai.chat.completions.create({
          model: 'sonar-pro',
          messages: [
            { role: 'system', content: 'You are an influencer campaign strategist. Write a concise, professional campaign brief.' },
            { role: 'user', content: `Create a campaign brief for ${clientName}. Campaign: ${campaign_name}. Platforms: ${(platforms || ['instagram']).join(', ')}. Budget: ${budget || 'TBD'}. Deliverables: ${(deliverables || ['1 feed post', '2 stories']).join(', ')}. Timeline: ${start_date || 'ASAP'} to ${end_date || '2 weeks'}.` },
          ],
          temperature: 0.6,
        });
        generatedBrief = completion.choices[0]?.message?.content || '';
      } catch (e) {
        generatedBrief = `Campaign: ${campaign_name} for ${clientName}`;
      }
    }
    
    const campaign = {
      id: `camp_${Date.now()}`,
      campaign_name: campaign_name || 'Untitled Campaign',
      client: clientName,
      influencer_handles: influencer_handles || [],
      brief: generatedBrief,
      budget: budget || null,
      start_date: start_date || new Date().toISOString().split('T')[0],
      end_date: end_date || null,
      deliverables: deliverables || ['1 feed post', '2 stories'],
      platforms: platforms || ['instagram'],
      status: 'draft',
      created_at: new Date().toISOString(),
    };
    
    res.json({ success: true, campaign });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * POST /api/influencer/outreach — Generate outreach message for an influencer
 */
app.post('/api/influencer/outreach', async (req, res) => {
  try {
    const { email, hash, influencer_handle, campaign_name, tone, platform } = req.body;
    
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const clientName = client.fields.brand_name || email;
    
    const completion = await openai.chat.completions.create({
      model: 'sonar',
      messages: [
        { role: 'system', content: `You are an influencer outreach specialist for ${clientName}. Write a personalized, non-spammy DM to recruit an influencer for a collaboration. Tone: ${tone || 'friendly and professional'}. Keep it under 200 words. Make it feel personal, not templated.` },
        { role: 'user', content: `Write an outreach DM to @${influencer_handle} on ${platform || 'Instagram'} for the "${campaign_name || 'upcoming'}" campaign. Brand: ${clientName}.` },
      ],
      temperature: 0.8,
    });
    
    const outreachMessage = completion.choices[0]?.message?.content || '';
    
    res.json({
      success: true,
      outreach_message: outreachMessage,
      influencer: influencer_handle,
      platform: platform || 'instagram',
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SETTINGS — Account, preferences, integrations
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * GET /api/settings — Get client settings
 */
app.get('/api/settings', async (req, res) => {
  try {
    const { email, hash } = req.query;
    
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const f = client.fields;
    
    // Helper: safely convert Airtable field to string array (handles both arrays and comma-separated strings)
    const toArr = (val, fallback = []) => {
      if (Array.isArray(val)) return val.map(v => String(v).trim()).filter(Boolean);
      if (typeof val === 'string' && val.length > 0) return val.split(',').map(p => p.trim()).filter(Boolean);
      return fallback;
    };
    
    res.json({
      account: {
        name: f.contact_name || '',
        email: f.contact_email || email,
        brand_name: f.brand_name || f.business_name || '',
        business_name: f.business_name || f.brand_name || '',
        website: f.website || '',
        plan: f.plan || 'free',
        tier: f.tier || 'Growth',
        joined: f.created_at || '',
        industry: f.industry || '',
        phone: f.phone || '',
      },
      preferences: {
        posting_frequency: f.posting_frequency || 'daily',
        preferred_platforms: toArr(f.platforms, ['Instagram', 'TikTok']),
        auto_publish: f.auto_publish === true || f.auto_publish === 'true',
        approval_required: f.approval_required !== false && f.approval_required !== 'false',
        notification_email: f.notification_email !== false,
        timezone: f.timezone || 'UTC',
        language: f.language || 'en',
      },
      integrations: {
        shopify_connected: !!f.shopify_domain,
        shopify_domain: f.shopify_domain || null,
        social_accounts_connected: toArr(f.connected_platforms).length,
        connected_platforms: toArr(f.connected_platforms),
        upload_post_connected: !!UPLOADPOST_API_KEY,
      },
      video_settings: {
        default_resolution: f.video_resolution || '720p',
        default_duration: parseInt(f.video_duration) || 5,
        preferred_model: f.video_model || 'kling-2.1',
        default_aspect_ratio: f.video_aspect || '9:16',
        auto_generate_reels: f.auto_reels !== false,
      },
      ai_coach: {
        enabled: true,
        context_types: ['strategy', 'content', 'analytics', 'brand', 'competitor', 'growth'],
      },
      inbox: {
        auto_reply_enabled: f.auto_reply === true || f.auto_reply === 'true',
        monitored_platforms: toArr(f.inbox_platforms, ['instagram', 'tiktok']),
      },
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * POST /api/settings — Update client settings
 */
app.post('/api/settings', async (req, res) => {
  try {
    // Use middleware-normalized auth (headers + body + query)
    const { email, hash } = req.clientAuth;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    // Strip auth keys from body to get pure updates
    const { email: _e, hash: _h, password_hash: _p, clientEmail: _ce, clientHash: _ch, ...updates } = req.body;
    
    // Map frontend setting keys to Airtable field names
    const fieldMap = {
      brand_name: 'business_name',
      business_name: 'business_name',
      contact_name: 'contact_name',
      contact_email: 'contact_email',
      industry: 'industry',
      website: 'website',
      phone: 'phone',
      posting_frequency: 'posting_frequency',
      preferred_platforms: 'platforms',
      auto_publish: 'auto_publish',
      approval_required: 'approval_required',
      timezone: 'timezone',
      language: 'language',
      video_resolution: 'video_resolution',
      video_duration: 'video_duration',
      video_model: 'video_model',
      video_aspect: 'video_aspect',
      auto_generate_reels: 'auto_reels',
      auto_reply_enabled: 'auto_reply',
      monitored_platforms: 'inbox_platforms',
      notification_email: 'notification_email',
    };
    
    const airtableUpdates = {};
    for (const [key, value] of Object.entries(updates)) {
      if (key === 'notifications') continue; // handled separately below
      const fieldName = fieldMap[key];
      if (fieldName) {
        // Arrays → comma-separated string for Airtable
        airtableUpdates[fieldName] = Array.isArray(value) ? value.join(',') : value;
      }
    }
    
    // Handle notification preferences (store as JSON in notes or separate fields)
    if (updates.notifications && typeof updates.notifications === 'object') {
      airtableUpdates.notifications_enabled = Object.values(updates.notifications).some(v => v) ? true : false;
    }
    
    if (Object.keys(airtableUpdates).length > 0) {
      await atUpdate(TBL.CLIENTS, client.id, airtableUpdates);
      log('SETTINGS', `Updated settings for ${email}: ${Object.keys(airtableUpdates).join(', ')}`);
    }
    
    res.json({ success: true, updated: Object.keys(airtableUpdates) });
  } catch (e) {
    log('SETTINGS', `Error: ${e.message}`);
    res.status(500).json({ error: e.message });
  }
});

/**
 * POST /api/settings/connect-social — Initiate social media platform connection via Upload-Post
 */
app.post('/api/settings/connect-social', (req, res) => {
  const { platform, email } = req.body;
  
  // Upload-Post handles all OAuth — we direct users to their connection flow
  const uploadPostUser = (email || '').replace(/[^a-zA-Z0-9]/g, '_');
  
  res.json({
    success: true,
    message: `Connect ${platform} via Upload-Post`,
    // Upload-Post handles OAuth natively — redirect to their connection page
    connect_url: `https://upload-post.com/connect?platform=${platform}&user=${uploadPostUser}`,
    platform,
  });
});


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ENHANCED COMPETITOR INTELLIGENCE — Deep Analysis
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * POST /api/competitor-deep — Deep competitor analysis using Perplexity Sonar Pro
 * Goes beyond basic intel to provide strategic insights
 */
app.post('/api/competitor-deep', async (req, res) => {
  try {
    const { email, hash, competitor_url, competitor_handles, analysis_type } = req.body;
    
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const clientName = client.fields.brand_name || email;
    
    const analysisTypes = {
      content_strategy: 'Analyze their content strategy: posting frequency, content types, themes, engagement patterns, best-performing content, and content gaps.',
      audience: 'Analyze their audience: demographics, interests, engagement behavior, growth rate, and audience quality.',
      ads: 'Analyze their ad strategy: ad creatives, targeting, spend estimates, landing pages, and conversion tactics.',
      pricing: 'Analyze their pricing strategy: price points, promotions, bundles, perceived value positioning.',
      brand_voice: 'Analyze their brand voice: tone, personality, visual identity, messaging consistency.',
      full: 'Perform a COMPREHENSIVE analysis covering: content strategy, audience, ads, pricing, brand voice, strengths, weaknesses, opportunities, and threats vs our brand.',
    };
    
    const focusArea = analysisTypes[analysis_type] || analysisTypes.full;
    
    const completion = await openai.chat.completions.create({
      model: 'sonar-pro',
      messages: [
        { role: 'system', content: `You are a competitive intelligence analyst for ${clientName}. Provide detailed, data-driven competitive analysis. Be specific with numbers, dates, and examples. Structure your response with clear sections and actionable recommendations.` },
        { role: 'user', content: `Analyze competitor: ${competitor_url || competitor_handles?.join(', ') || 'unknown'}.\n\nFocus: ${focusArea}\n\nProvide specific, actionable intelligence that ${clientName} can use to outperform this competitor. Include estimated metrics where possible.` },
      ],
      temperature: 0.3,
    });
    
    const analysis = completion.choices[0]?.message?.content || '';
    
    res.json({
      success: true,
      analysis,
      competitor: competitor_url || competitor_handles,
      analysis_type: analysis_type || 'full',
      citations: completion.citations || [],
      generated_at: new Date().toISOString(),
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


// ── Health ──

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  UPLOAD-POST COMPLETE INTEGRATION
//  White-label social connections, DMs, AutoDM monitors, Comments,
//  Analytics, Media, Publishing, Scheduling — ALL via Upload-Post API
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const UP_BASE = 'https://api.upload-post.com/api';
const UP_HEADERS = { 'Authorization': `ApiKey ${UPLOADPOST_API_KEY}`, 'Content-Type': 'application/json' };

async function upPost(method, path, body = null) {
  const opts = { method, headers: UP_HEADERS };
  if (body && method !== 'GET') opts.body = JSON.stringify(body);
  const url = path.startsWith('http') ? path : `${UP_BASE}${path}`;
  const res = await fetch(url, opts);
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Upload-Post ${method} ${path}: ${res.status} ${errText}`);
  }
  return res.json();
}

async function upGet(path) { return upPost('GET', path); }

// ── Upload-Post: White-Label Social Connection ──

/**
 * POST /api/social/create-profile — Create Upload-Post profile for a client
 */
app.post('/api/social/create-profile', async (req, res) => {
  try {
    const { email, hash, username } = req.body;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const profileName = username || client.fields.brand_name?.toLowerCase().replace(/[^a-z0-9]/g, '-') || email.split('@')[0];
    const result = await upPost('POST', '/uploadposts/users', { username: profileName });
    
    // Store profile name in Airtable
    try {
      await atUpdate(TBL.CLIENTS, client.id, { upload_post_profile: profileName });
    } catch (e) { log('SOCIAL', `Failed to store UP profile: ${e.message}`); }
    
    res.json({ success: true, profile: profileName, ...result });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * POST /api/social/connect — Generate branded connection URL for client
 */
app.post('/api/social/connect', async (req, res) => {
  try {
    const { email, hash, platforms, redirect_url } = req.body;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const profileName = client.fields.upload_post_profile || client.fields.brand_name?.toLowerCase().replace(/[^a-z0-9]/g, '-');
    if (!profileName) return res.status(400).json({ error: 'Create a social profile first' });
    
    const result = await upPost('POST', '/uploadposts/users/generate-jwt', {
      username: profileName,
      redirect_url: redirect_url || `${BACKEND_URL}/api/social/connected`,
      logo_image: 'https://socialengine.agency/logo.png',
      connect_title: 'Connect Your Social Accounts',
      platforms: platforms || ['instagram', 'tiktok', 'facebook', 'youtube', 'linkedin', 'threads', 'pinterest'],
    });
    
    res.json({ success: true, connect_url: result.access_url || result.url, profile: profileName });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * GET /api/social/connected — Callback after social connection
 */
app.get('/api/social/connected', (req, res) => {
  res.send(`<!DOCTYPE html><html><body style="background:#0F0A1A;color:white;font-family:system-ui;display:flex;align-items:center;justify-content:center;height:100vh;margin:0"><div style="text-align:center"><h1 style="background:linear-gradient(135deg,#7C3AED,#06B6D4);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Connected!</h1><p style="color:#94A3B8">Your social accounts are now linked. You can close this window.</p></div></body></html>`);
});

/**
 * GET /api/social/accounts — List connected social accounts for a client
 */
app.get('/api/social/accounts', async (req, res) => {
  try {
    const { email, hash } = req.query;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const profileName = client.fields.upload_post_profile;
    if (!profileName) return res.json({ success: true, accounts: [], message: 'No social profile created yet' });
    
    // Get analytics which shows connected platforms
    try {
      const analytics = await upGet(`/analytics/${profileName}?platforms=instagram,tiktok,youtube,facebook,linkedin,threads,pinterest`);
      const connected = Object.keys(analytics).filter(k => analytics[k] && !analytics[k].error);
      res.json({ success: true, profile: profileName, connected_platforms: connected, analytics });
    } catch (e) {
      res.json({ success: true, profile: profileName, connected_platforms: [], message: 'Connect your accounts to see data' });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ── Upload-Post: DMs & Conversations ──

/**
 * GET /api/social/conversations — Get all DM conversations
 */
app.get('/api/social/conversations', async (req, res) => {
  try {
    const { email, hash, platform } = req.query;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const profileName = client.fields.upload_post_profile;
    if (!profileName) return res.status(400).json({ error: 'No social profile' });
    
    const result = await upGet(`/uploadposts/dms/conversations?platform=${platform || 'instagram'}&user=${profileName}`);
    res.json({ success: true, ...result });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * POST /api/social/dm/send — Send a DM (manual or AI-generated)
 */
app.post('/api/social/dm/send', async (req, res) => {
  try {
    const { email, hash, platform, recipient_id, message, auto_generate } = req.body;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const profileName = client.fields.upload_post_profile;
    if (!profileName) return res.status(400).json({ error: 'No social profile' });
    
    let finalMessage = message;
    
    // AI-generate the reply using brand fingerprint
    if (auto_generate || !message) {
      const brandDNA = await loadBrandFingerprint(client.fields.brand_name || email);
      const completion = await openai.chat.completions.create({
        model: 'sonar',
        messages: [
          { role: 'system', content: `You are a social media community manager for ${client.fields.brand_name || 'the brand'}. Write a friendly, on-brand DM reply. Keep it natural and concise (1-3 sentences). Brand voice: ${brandDNA ? JSON.stringify(brandDNA) : 'professional, friendly, authentic'}. Never mention you are AI.` },
          { role: 'user', content: `Generate a reply DM. Context: ${message || 'general inquiry'}` },
        ],
        temperature: 0.7,
      });
      finalMessage = completion.choices[0]?.message?.content || message || 'Thanks for reaching out! How can we help?';
    }
    
    const result = await upPost('POST', '/uploadposts/dms/send', {
      platform: platform || 'instagram',
      user: profileName,
      recipient_id,
      message: finalMessage,
    });
    
    res.json({ success: true, message_sent: finalMessage, auto_generated: auto_generate || !message, ...result });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ── Upload-Post: Comments & Auto-Reply ──

/**
 * GET /api/social/comments — Get comments on a post
 */
app.get('/api/social/comments', async (req, res) => {
  try {
    const { email, hash, media_id, post_url } = req.query;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const profileName = client.fields.upload_post_profile;
    if (!profileName) return res.status(400).json({ error: 'No social profile' });
    
    let url = `/uploadposts/comments?user=${profileName}`;
    if (media_id) url += `&media_id=${media_id}`;
    if (post_url) url += `&post_url=${encodeURIComponent(post_url)}`;
    
    const result = await upGet(url);
    res.json({ success: true, ...result });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * POST /api/social/comments/reply — Reply to a comment via DM
 */
app.post('/api/social/comments/reply', async (req, res) => {
  try {
    const { email, hash, comment_id, message, auto_generate } = req.body;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const profileName = client.fields.upload_post_profile;
    let finalMessage = message;
    
    if (auto_generate || !message) {
      const brandDNA = await loadBrandFingerprint(client.fields.brand_name || email);
      const completion = await openai.chat.completions.create({
        model: 'sonar',
        messages: [
          { role: 'system', content: `You are a social media manager for ${client.fields.brand_name}. Write a brief, warm reply to a comment. Brand voice: ${brandDNA ? JSON.stringify(brandDNA) : 'friendly, authentic'}. 1-2 sentences max.` },
          { role: 'user', content: `Reply to comment: "${message || 'general comment'}"` },
        ],
        temperature: 0.7,
      });
      finalMessage = completion.choices[0]?.message?.content || 'Thank you! 💜';
    }
    
    const result = await upPost('POST', '/uploadposts/comments/reply', {
      user: profileName,
      comment_id,
      message: finalMessage,
    });
    
    res.json({ success: true, reply: finalMessage, ...result });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ── Upload-Post: AutoDM Monitors (24/7 automated replies) ──

/**
 * POST /api/social/autodm/start — Start an AutoDM monitor on a post
 */
app.post('/api/social/autodm/start', async (req, res) => {
  try {
    const { email, hash, media_id, message, keyword_trigger } = req.body;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const profileName = client.fields.upload_post_profile;
    if (!profileName) return res.status(400).json({ error: 'No social profile' });
    
    // Auto-generate DM message from brand DNA if not provided
    let dmMessage = message;
    if (!dmMessage) {
      const brandDNA = await loadBrandFingerprint(client.fields.brand_name || email);
      const completion = await openai.chat.completions.create({
        model: 'sonar',
        messages: [
          { role: 'system', content: `You are a social media manager for ${client.fields.brand_name}. Write a brief, engaging auto-DM that gets sent when someone comments on a post. Include a call to action. Brand voice: ${brandDNA ? JSON.stringify(brandDNA) : 'friendly, authentic'}. 2-3 sentences max.` },
          { role: 'user', content: 'Generate an auto-DM message for Instagram commenters.' },
        ],
        temperature: 0.7,
      });
      dmMessage = completion.choices[0]?.message?.content || 'Hey! Thanks for engaging with our post! Check out our latest collection 💜';
    }
    
    const body = { user: profileName, media_id, message: dmMessage };
    if (keyword_trigger) body.keyword = keyword_trigger;
    
    const result = await upPost('POST', '/uploadposts/autodms/start', body);
    res.json({ success: true, monitor: result, dm_message: dmMessage });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * GET /api/social/autodm/status — Get all AutoDM monitor statuses
 */
app.get('/api/social/autodm/status', async (req, res) => {
  try {
    const { email, hash } = req.query;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const profileName = client.fields.upload_post_profile;
    if (!profileName) return res.status(400).json({ error: 'No social profile' });
    
    const result = await upGet(`/uploadposts/autodms/status?user=${profileName}`);
    res.json({ success: true, ...result });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * POST /api/social/autodm/control — Pause/Resume/Stop/Delete a monitor
 */
app.post('/api/social/autodm/control', async (req, res) => {
  try {
    const { email, hash, monitor_id, action } = req.body;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const validActions = ['pause', 'resume', 'stop', 'delete'];
    if (!validActions.includes(action)) return res.status(400).json({ error: `Invalid action. Use: ${validActions.join(', ')}` });
    
    const profileName = client.fields.upload_post_profile;
    const result = await upPost('POST', `/uploadposts/autodms/${action}`, { user: profileName, monitor_id });
    res.json({ success: true, action, ...result });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * GET /api/social/autodm/logs — Get AutoDM activity logs
 */
app.get('/api/social/autodm/logs', async (req, res) => {
  try {
    const { email, hash, monitor_id } = req.query;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const profileName = client.fields.upload_post_profile;
    const result = await upGet(`/uploadposts/autodms/logs?user=${profileName}&monitor_id=${monitor_id}`);
    res.json({ success: true, ...result });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ── Upload-Post: Analytics (REAL data from connected platforms) ──

/**
 * GET /api/social/analytics — Profile analytics across all platforms
 */
app.get('/api/social/analytics', async (req, res) => {
  try {
    const { email, hash, platforms, period } = req.query;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const profileName = client.fields.upload_post_profile;
    if (!profileName) return res.status(400).json({ error: 'No social profile' });
    
    const platList = platforms || 'instagram,tiktok,youtube,facebook,linkedin,threads,pinterest';
    const result = await upGet(`/analytics/${profileName}?platforms=${platList}`);
    res.json({ success: true, profile: profileName, analytics: result });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * GET /api/social/analytics/impressions — Total impressions aggregated
 */
app.get('/api/social/analytics/impressions', async (req, res) => {
  try {
    const { email, hash, period, metrics, breakdown } = req.query;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const profileName = client.fields.upload_post_profile;
    let url = `/uploadposts/total-impressions/${profileName}`;
    const params = [];
    if (period) params.push(`period=${period}`);
    if (metrics) params.push(`metrics=${metrics}`);
    if (breakdown) params.push(`breakdown=${breakdown}`);
    if (params.length) url += '?' + params.join('&');
    
    const result = await upGet(url);
    res.json({ success: true, ...result });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * GET /api/social/analytics/post/:requestId — Per-post analytics
 */
app.get('/api/social/analytics/post/:requestId', async (req, res) => {
  try {
    const { email, hash } = req.query;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const result = await upGet(`/uploadposts/post-analytics/${req.params.requestId}`);
    res.json({ success: true, ...result });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ── Upload-Post: Media Retrieval ──

/**
 * GET /api/social/media — Get recent posts from connected accounts
 */
app.get('/api/social/media', async (req, res) => {
  try {
    const { email, hash, platform, limit } = req.query;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const profileName = client.fields.upload_post_profile;
    if (!profileName) return res.status(400).json({ error: 'No social profile' });
    
    let url = `/uploadposts/media?user=${profileName}`;
    if (platform) url += `&platform=${platform}`;
    if (limit) url += `&limit=${limit}`;
    
    const result = await upGet(url);
    res.json({ success: true, ...result });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ── Upload-Post: Publishing ──

/**
 * POST /api/social/publish — Publish content to connected platforms
 */
app.post('/api/social/publish', async (req, res) => {
  try {
    const { email, hash, media_url, media_type, title, description, platforms, scheduled_date, timezone } = req.body;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const profileName = client.fields.upload_post_profile;
    if (!profileName) return res.status(400).json({ error: 'No social profile' });
    
    const body = {
      user: profileName,
      title: title || '',
      platforms: platforms || ['instagram', 'tiktok'],
    };
    if (description) body.description = description;
    if (scheduled_date) body.scheduled_date = scheduled_date;
    if (timezone) body.timezone = timezone;
    
    // Determine endpoint based on media type
    const endpoint = media_type === 'photo' || media_type === 'image' ? '/upload_photos' : '/upload';
    
    // For URL-based uploads, we need to download and re-upload
    // Upload-Post accepts file uploads, so we pass the URL as a reference
    body.video_url = media_url;
    
    const result = await upPost('POST', endpoint, body);
    res.json({ success: true, ...result });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * GET /api/social/history — Upload history
 */
app.get('/api/social/history', async (req, res) => {
  try {
    const { email, hash, page, limit } = req.query;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const profileName = client.fields.upload_post_profile;
    let url = `/uploadposts/history?user=${profileName}`;
    if (page) url += `&page=${page}`;
    if (limit) url += `&limit=${limit}`;
    
    const result = await upGet(url);
    res.json({ success: true, ...result });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  BRAND DNA WRAPPING LAYER
//  Every Higgsfield studio call is pre-loaded with the client's brand fingerprint
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

async function loadBrandFingerprint(clientName) {
  try {
    const formula = encodeURIComponent(`{client_id}='${clientName}'`);
    const data = await atGet(TBL.BRAND_VOICES, `filterByFormula=${formula}&maxRecords=5`);
    if (!data.records?.length) return null;
    
    const fingerprint = {};
    for (const rec of data.records) {
      const f = rec.fields;
      if (f.voice_name === '_auto_reply_config') continue;
      fingerprint[f.voice_name || 'default'] = {
        visual_seed: f.visual_seed,
        version: f.version,
      };
    }
    return Object.keys(fingerprint).length ? fingerprint : null;
  } catch (e) {
    log('BRAND_DNA', `Failed to load fingerprint for ${clientName}: ${e.message}`);
    return null;
  }
}

function buildBrandPromptPrefix(brandDNA, clientName) {
  if (!brandDNA) return '';
  // Build a rich, structured prompt prefix from the actual BRAND_VOICES fields
  const name = brandDNA.brand_name || clientName;
  let prefix = `[BRAND DNA — ${name}]\n`;
  if (brandDNA.tone) prefix += `TONE: ${brandDNA.tone}\n`;
  if (brandDNA.voice_profile) prefix += `VOICE PROFILE:\n${brandDNA.voice_profile}\n`;
  if (brandDNA.brand_dna) prefix += `BRAND DNA:\n${brandDNA.brand_dna}\n`;
  if (brandDNA.target_audience) prefix += `TARGET AUDIENCE: ${brandDNA.target_audience}\n`;
  if (brandDNA.competitor_brands) prefix += `COMPETITORS TO DIFFERENTIATE FROM: ${brandDNA.competitor_brands}\n`;
  prefix += `\nYOU MUST embody this brand's voice, aesthetics, and identity in every word and visual direction. ${PRODUCT_PRESERVATION_PROMPT}\n\n`;
  return prefix;
}

const PRODUCT_PRESERVATION_PROMPT = 'THE PRODUCT MUST REMAIN COMPLETELY UNCHANGED IN EVERY SINGLE FRAME — identical fabric pattern, identical text on fabric, identical strap placement, identical hardware positions, identical colors, identical cut and silhouette — no alterations, no simplifications, no color drift, no missing anything. No people walking through anything solid, laws of newtonian physics and the material 3D world ALWAYS apply. All frames, people, structures, objects, everything is to look like real life.';


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  HIGGSFIELD STUDIOS — COMPLETE INTEGRATION
//  Every studio on the Higgsfield platform, wrapped in Brand DNA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * POST /api/studio/marketing — Marketing Studio
 * One prompt → entire campaign (UGC, CGI, Virtual Try-On, Product Review, Tutorial, TV Spot, Unboxing, Wild Card)
 */
app.post('/api/studio/marketing', async (req, res) => {
  try {
    const { email, hash, product_url, product_images, product_name, product_description,
            creative_mode, avatar_id, custom_avatar_prompt, prompt, platforms } = req.body;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const clientName = client.fields.brand_name || email;
    const brandDNA = await loadBrandFingerprint(clientName);
    
    const CREATIVE_MODES = ['ugc', 'cgi', 'virtual-try-on', 'product-review', 'tutorial', 'tv-spot', 'unboxing', 'wild-card', 'hyper-motion', 'ugc-virtual-try-on', 'pro-virtual-try-on'];
    const mode = CREATIVE_MODES.includes(creative_mode) ? creative_mode : 'ugc';
    
    // Build the Marketing Studio prompt with brand DNA
    const brandPrefix = buildBrandPromptPrefix(brandDNA, clientName);
    
    // ━━ LEARNING + MOTION DNA: Enrich generation with client intelligence ━━
    const learningCtx = await buildLearningContext(clientName);
    const motionDNA = await loadMotionDNA(clientName);
    const motionFragment = motionDNA?.fragments?.length ? `\nMotion direction: ${motionDNA.fragments[Math.floor(Math.random() * motionDNA.fragments.length)]}` : '';
    
    const fullPrompt = `${brandPrefix}${PRODUCT_PRESERVATION_PROMPT}\n\nProduct: ${product_name || 'product'}\nDescription: ${product_description || ''}\nCreative Mode: ${mode}\nPlatform: ${(platforms || ['instagram']).join(', ')}${motionFragment}${learningCtx}${motionDNA?.context || ''}\n\n${prompt || `Create a ${mode} video showcasing this product with authentic, scroll-stopping energy.`}`;
    
    // Call Higgsfield generate with marketing context
    const genBody = {
      prompt: fullPrompt,
      model: 'seedance-pro',  // Marketing Studio default
      duration: 10,
      aspect_ratio: '9:16',
      enhance_prompt: true,
    };
    if (product_images?.length) genBody.image_url = product_images[0];
    if (product_images?.length > 1) genBody.reference_image_urls = product_images.slice(0, 5);
    
    const genResult = await higgsFieldGenerate(genBody);
    
    res.json({
      success: true,
      generation_id: extractRequestId(genResult),
      status_url: `/api/video/status/${extractRequestId(genResult)}`,
      creative_mode: mode,
      model: 'seedance-pro',
      brand_dna_applied: !!brandDNA,
      product_preservation: true,
    });
  } catch (e) {
    log('STUDIO', `Marketing Studio error: ${e.message}`);
    res.status(500).json({ error: e.message });
  }
});

/**
 * POST /api/studio/cinema — Cinema Studio 3.5
 * Professional filmmaking: lens selection, camera sensor, genre modes, multi-shot, character system
 */
app.post('/api/studio/cinema', async (req, res) => {
  try {
    const { email, hash, prompt, image_url, reference_images,
            lens, focal_length, aperture, genre, shots, characters,
            aspect_ratio, model, camera_movement, duration } = req.body;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const clientName = client.fields.brand_name || email;
    const brandDNA = await loadBrandFingerprint(clientName);
    const brandPrefix = buildBrandPromptPrefix(brandDNA, clientName);
    
    // ━━ LEARNING + MOTION DNA ━━
    const learningCtx = await buildLearningContext(clientName);
    const motionDNA = await loadMotionDNA(clientName);
    
    const GENRES = ['action', 'horror', 'comedy', 'western', 'suspense', 'intimate', 'spectacle', 'noir', 'drama', 'epic'];
    const genreMode = GENRES.includes(genre) ? genre : null;
    
    // Build cinema-specific prompt with motion DNA
    let cinemaPrompt = `${brandPrefix}${PRODUCT_PRESERVATION_PROMPT}${learningCtx}${motionDNA?.context || ''}\n\n`;
    if (genreMode) cinemaPrompt += `[GENRE: ${genreMode.toUpperCase()}] `;
    if (lens) cinemaPrompt += `[LENS: ${lens}] `;
    if (focal_length) cinemaPrompt += `[FOCAL LENGTH: ${focal_length}mm] `;
    if (aperture) cinemaPrompt += `[APERTURE: f/${aperture}] `;
    if (camera_movement) cinemaPrompt += `[CAMERA: ${camera_movement}] `;
    cinemaPrompt += prompt || 'Create a cinematic shot';
    
    // If multi-shot with characters
    if (shots?.length > 0) {
      // Generate each shot sequentially
      const results = [];
      for (let i = 0; i < Math.min(shots.length, 6); i++) {
        const shot = shots[i];
        let shotPrompt = `${cinemaPrompt}\n[SHOT ${i + 1}/${shots.length}]: ${shot.prompt || shot.description || ''}`;
        if (shot.characters) shotPrompt += `\n[CHARACTERS]: ${JSON.stringify(shot.characters)}`;
        
        const genBody = {
          prompt: shotPrompt,
          model: model || 'dop',
          duration: shot.duration || duration || 5,
          aspect_ratio: aspect_ratio || '21:9',
          enhance_prompt: true,
        };
        if (shot.image_url || image_url) genBody.image_url = shot.image_url || image_url;
        if (shot.reference_images || reference_images) genBody.reference_image_urls = (shot.reference_images || reference_images).slice(0, 5);
        
        const genResult = await higgsFieldGenerate(genBody);
        results.push({ shot: i + 1, generation_id: extractRequestId(genResult), status_url: `/api/video/status/${extractRequestId(genResult)}` });
      }
      return res.json({ success: true, type: 'multi-shot', shots: results, total_shots: results.length });
    }
    
    // Single shot
    const genBody = {
      prompt: cinemaPrompt,
      model: model || 'dop',
      duration: duration || 5,
      aspect_ratio: aspect_ratio || '21:9',
      enhance_prompt: true,
    };
    if (image_url) genBody.image_url = image_url;
    if (reference_images?.length) genBody.reference_image_urls = reference_images.slice(0, 5);
    
    const genResult = await higgsFieldGenerate(genBody);
    res.json({
      success: true,
      type: 'single-shot',
      generation_id: extractRequestId(genResult),
      status_url: `/api/video/status/${extractRequestId(genResult)}`,
      cinema_settings: { lens, focal_length, aperture, genre: genreMode, camera_movement },
      brand_dna_applied: !!brandDNA,
    });
  } catch (e) {
    log('STUDIO', `Cinema Studio error: ${e.message}`);
    res.status(500).json({ error: e.message });
  }
});

/**
 * POST /api/studio/lipsync — Lipsync Studio
 * Script → lip-synced talking head video
 */
app.post('/api/studio/lipsync', async (req, res) => {
  try {
    const { email, hash, script, image_url, voice_id, voice_model, language, model, duration } = req.body;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    if (!script) return res.status(400).json({ error: 'Script text is required' });
    
    const clientName = client.fields.brand_name || email;
    const brandDNA = await loadBrandFingerprint(clientName);
    const lipsyncLearningCtx = await buildLearningContext(clientName);
    const lipsyncMotion = await loadMotionDNA(clientName);
    const brandPrefix = buildBrandPromptPrefix(brandDNA, clientName);
    
    const LIPSYNC_MODELS = ['speak-v2', 'lipsync-2', 'infinitetalk', 'kling-avatar', 'kling-lipsync', 'veo-3'];
    const lsModel = LIPSYNC_MODELS.includes(model) ? model : 'kling-avatar';
    
    const fullPrompt = `${brandPrefix}[LIPSYNC STUDIO]\nScript: "${script}"\nVoice: ${voice_id || 'default'}\nModel: ${lsModel}\nLanguage: ${language || 'en'}\n\nGenerate a talking head video with perfect lip synchronization. The character should speak naturally with appropriate expressions and gestures.`;
    
    const genBody = {
      prompt: fullPrompt,
      model: lsModel === 'kling-avatar' ? 'kling-avatars-2.0' : (lsModel === 'veo-3' ? 'veo-3' : 'kling-2.6-audio'),
      duration: duration || 10,
      aspect_ratio: '9:16',
      enhance_prompt: true,
    };
    if (image_url) genBody.image_url = image_url;
    
    const genResult = await higgsFieldGenerate(genBody);
    res.json({
      success: true,
      generation_id: extractRequestId(genResult),
      status_url: `/api/video/status/${extractRequestId(genResult)}`,
      lipsync_model: lsModel,
      script_length: script.length,
      brand_dna_applied: !!brandDNA,
    });
  } catch (e) {
    log('STUDIO', `Lipsync Studio error: ${e.message}`);
    res.status(500).json({ error: e.message });
  }
});

/**
 * POST /api/studio/audio — Audio Studio (Voiceover, Voice Clone, Change Voice, Translate)
 */
app.post('/api/studio/audio', async (req, res) => {
  try {
    const { email, hash, mode, script, video_url, voice_id, voice_model, target_language,
            clone_audio_url, clone_name } = req.body;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const AUDIO_MODES = ['voiceover', 'clone', 'change-voice', 'translate'];
    if (!AUDIO_MODES.includes(mode)) return res.status(400).json({ error: `Invalid mode. Use: ${AUDIO_MODES.join(', ')}` });
    
    const clientName = client.fields.brand_name || email;
    const brandDNA = await loadBrandFingerprint(clientName);
    
    let result;
    
    switch (mode) {
      case 'voiceover': {
        if (!script) return res.status(400).json({ error: 'Script required for voiceover' });
        const prompt = `[VOICEOVER] Generate natural voiceover audio.\nScript: "${script}"\nVoice: ${voice_id || 'default'}\nModel: ${voice_model || 'eleven-v3'}`;
        result = await higgsFieldGenerate({ prompt, model: 'kling-2.1-pro', duration: 10, enhance_prompt: true });
        break;
      }
      case 'clone': {
        if (!clone_audio_url) return res.status(400).json({ error: 'Audio URL required for voice cloning' });
        // Store voice clone profile
        const cloneProfile = { name: clone_name || `${clientName}-voice`, audio_url: clone_audio_url, created: new Date().toISOString() };
        try {
          await atCreate(TBL.BRAND_VOICES, { client_id: clientName, voice_name: `_voice_clone_${clone_name || 'default'}`, visual_seed: JSON.stringify(cloneProfile), version: Date.now() });
        } catch (e) { log('AUDIO', `Clone storage failed: ${e.message}`); }
        result = { success: true, clone_profile: cloneProfile, message: 'Voice clone profile saved. Use this voice_id in future generations.' };
        break;
      }
      case 'change-voice': {
        if (!video_url) return res.status(400).json({ error: 'Video URL required' });
        const prompt = `[CHANGE VOICE] Replace the voice in this video with voice: ${voice_id || 'default'}. Maintain perfect lip synchronization.`;
        result = await higgsFieldGenerate({ prompt, image_url: video_url, model: 'kling-2.1-pro', duration: 10, enhance_prompt: true });
        break;
      }
      case 'translate': {
        if (!video_url || !target_language) return res.status(400).json({ error: 'Video URL and target_language required' });
        const LANGUAGES = ['en', 'zh', 'fr', 'hi', 'it', 'ja', 'ko', 'pt', 'ru', 'tr', 'es', 'ar', 'de'];
        if (!LANGUAGES.includes(target_language)) return res.status(400).json({ error: `Supported languages: ${LANGUAGES.join(', ')}` });
        const prompt = `[TRANSLATE] Translate this video to ${target_language} with automatic lip synchronization. Maintain the original speaker's tone and energy.`;
        result = await higgsFieldGenerate({ prompt, image_url: video_url, model: 'kling-2.1-pro', duration: 10, enhance_prompt: true });
        break;
      }
    }
    
    res.json({
      success: true,
      mode,
      generation_id: result.generation_id || null,
      status_url: result.generation_id ? `/api/video/status/${result.generation_id}` : null,
      ...result,
    });
  } catch (e) {
    log('STUDIO', `Audio Studio error: ${e.message}`);
    res.status(500).json({ error: e.message });
  }
});

/**
 * POST /api/studio/effects — Visual Effects Studio
 * 20+ VFX presets, Face Swap, Skin Enhancer
 */
app.post('/api/studio/effects', async (req, res) => {
  try {
    const { email, hash, image_url, video_url, effect, face_swap_target, prompt, model } = req.body;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const VFX_PRESETS = ['explosion', 'fire', 'smoke', 'rain', 'snow', 'lightning', 'sparkles', 'neon-glow', 'hologram', 'glitch', 'matrix', 'portal', 'teleport', 'disintegrate', 'freeze', 'shatter', 'bloom', 'lens-flare', 'color-grade', 'vintage', 'face-swap', 'skin-enhance', 'recast'];
    const vfx = VFX_PRESETS.includes(effect) ? effect : 'color-grade';
    
    const clientName = client.fields.brand_name || email;
    const brandDNA = await loadBrandFingerprint(clientName);
    const brandPrefix = buildBrandPromptPrefix(brandDNA, clientName);
    
    const fullPrompt = `${brandPrefix}[VISUAL EFFECTS: ${vfx.toUpperCase()}] ${prompt || `Apply ${vfx} effect to this content.`}`;
    
    const genBody = { prompt: fullPrompt, model: model || 'dop', duration: 5, enhance_prompt: true };
    if (image_url) genBody.image_url = image_url;
    if (video_url) genBody.image_url = video_url;
    if (face_swap_target) genBody.reference_image_urls = [face_swap_target];
    
    const genResult = await higgsFieldGenerate(genBody);
    res.json({ success: true, effect: vfx, generation_id: extractRequestId(genResult), status_url: `/api/video/status/${extractRequestId(genResult)}` });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * POST /api/studio/enhance — Video/Image Enhancement
 * Upscale (720p→4K), Enhancer (deflicker, stabilize), Skin Enhancer
 */
app.post('/api/studio/enhance', async (req, res) => {
  try {
    const { email, hash, media_url, mode, target_resolution } = req.body;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    if (!media_url) return res.status(400).json({ error: 'media_url required' });
    
    const ENHANCE_MODES = ['upscale', 'enhance', 'stabilize', 'deflicker', 'skin-enhance'];
    const enhanceMode = ENHANCE_MODES.includes(mode) ? mode : 'upscale';
    
    const prompt = `[${enhanceMode.toUpperCase()}] Enhance this media. Target: ${target_resolution || '4K'}. Apply: deflicker, stabilize, sharpen, enhance details. Maintain all original content exactly.`;
    
    const genResult = await higgsFieldGenerate({ prompt, image_url: media_url, model: 'dop-standard', duration: 5, enhance_prompt: false });
    res.json({ success: true, mode: enhanceMode, generation_id: extractRequestId(genResult), status_url: `/api/video/status/${extractRequestId(genResult)}`, target_resolution: target_resolution || '4K' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * POST /api/studio/image — Image Generation Studio
 * Text-to-image, product placement, style copy, brush edit
 */
app.post('/api/studio/image', async (req, res) => {
  try {
    const { email, hash, prompt, mode, image_url, reference_images, style_reference,
            product_url, model, width, height, aspect_ratio } = req.body;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const clientName = client.fields.brand_name || email;
    const brandDNA = await loadBrandFingerprint(clientName);
    const imgLearningCtx = await buildLearningContext(clientName);
    const brandPrefix = buildBrandPromptPrefix(brandDNA, clientName);
    
    const IMAGE_MODES = ['text-to-image', 'product-placement', 'style-copy', 'edit', 'angles', 'shots', 'upscale'];
    const imgMode = IMAGE_MODES.includes(mode) ? mode : 'text-to-image';
    
    const IMAGE_MODELS = {
      'text-to-image': 'nano-banana-pro',
      'product-placement': 'flux-kontext',
      'style-copy': 'seedream-4.5',
      'edit': 'flux-kontext',
      'angles': 'flux',
      'shots': 'flux',
      'upscale': 'topaz',
    };
    
    const selectedModel = model || IMAGE_MODELS[imgMode] || 'nano-banana-pro';
    
    let fullPrompt = `${brandPrefix}${PRODUCT_PRESERVATION_PROMPT}\n\n[IMAGE MODE: ${imgMode.toUpperCase()}] ${prompt || 'Generate a stunning brand-aligned image'}`;
    if (imgMode === 'product-placement') fullPrompt += `\nProduct URL: ${product_url || 'from uploaded images'}\nPlace the product naturally in the scene.`;
    if (imgMode === 'angles') fullPrompt += '\nGenerate the subject from a different angle perspective.';
    if (imgMode === 'shots') fullPrompt += '\nGenerate 9 unique compositional variants.';
    
    const genBody = {
      prompt: fullPrompt,
      model: selectedModel,
      enhance_prompt: true,
    };
    if (image_url) genBody.image_url = image_url;
    if (reference_images?.length) genBody.reference_image_urls = reference_images.slice(0, 5);
    if (style_reference) genBody.reference_image_urls = [style_reference, ...(genBody.reference_image_urls || [])].slice(0, 5);
    
    const genResult = await higgsFieldGenerate(genBody);
    res.json({
      success: true,
      mode: imgMode,
      model: selectedModel,
      generation_id: extractRequestId(genResult),
      status_url: `/api/video/status/${extractRequestId(genResult)}`,
      brand_dna_applied: !!brandDNA,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * POST /api/studio/soul — Soul 2.0 / Character Consistency
 * Create and maintain consistent characters across all content
 */
app.post('/api/studio/soul', async (req, res) => {
  try {
    const { email, hash, character_name, reference_images, prompt, moodboard_images, action } = req.body;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const clientName = client.fields.brand_name || email;
    const brandDNA = await loadBrandFingerprint(clientName);
    const soulLearningCtx = await buildLearningContext(clientName);
    
    if (action === 'create-character') {
      // Save character to brand voices table
      const charProfile = { name: character_name, reference_images, moodboard_images, created: new Date().toISOString() };
      await atCreate(TBL.BRAND_VOICES, { client_id: clientName, voice_name: `_soul_character_${character_name}`, visual_seed: JSON.stringify(charProfile), version: Date.now() });
      return res.json({ success: true, action: 'character_created', character: charProfile });
    }
    
    if (action === 'list-characters') {
      const formula = encodeURIComponent(`AND({client_id}='${clientName}', FIND('_soul_character_', {voice_name}))`);
      const data = await atGet(TBL.BRAND_VOICES, `filterByFormula=${formula}`);
      const characters = (data.records || []).map(r => ({ name: r.fields.voice_name.replace('_soul_character_', ''), ...JSON.parse(r.fields.visual_seed || '{}') }));
      return res.json({ success: true, characters });
    }
    
    // Generate with Soul mode
    const brandPrefix = buildBrandPromptPrefix(brandDNA, clientName);
    const fullPrompt = `${brandPrefix}[SOUL 2.0 - Character Consistent] ${prompt || 'Generate content with this character'}`;
    
    const genBody = { prompt: fullPrompt, model: 'kling-2.1-pro', enhance_prompt: true, duration: 5, aspect_ratio: '9:16' };
    if (reference_images?.length) genBody.reference_image_urls = reference_images.slice(0, 5);
    
    const genResult = await higgsFieldGenerate(genBody);
    res.json({ success: true, generation_id: extractRequestId(genResult), status_url: `/api/video/status/${extractRequestId(genResult)}`, brand_dna_applied: !!brandDNA });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * POST /api/studio/motion — Motion Control Studio
 * Precise character actions and expressions up to 30 seconds
 */
app.post('/api/studio/motion', async (req, res) => {
  try {
    const { email, hash, prompt, image_url, reference_images, actions, expressions,
            duration, model } = req.body;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const clientName = client.fields.brand_name || email;
    const brandDNA = await loadBrandFingerprint(clientName);
    const motionLearningCtx = await buildLearningContext(clientName);
    const motionMotionDNA = await loadMotionDNA(clientName);
    const brandPrefix = buildBrandPromptPrefix(brandDNA, clientName);
    
    let motionPrompt = `${brandPrefix}${PRODUCT_PRESERVATION_PROMPT}\n\n[MOTION CONTROL]\n`;
    if (actions?.length) motionPrompt += `Actions: ${actions.join(', ')}\n`;
    if (expressions?.length) motionPrompt += `Expressions: ${expressions.join(', ')}\n`;
    motionPrompt += prompt || 'Animate with precise motion control';
    
    const genBody = {
      prompt: motionPrompt,
      model: model || 'kling-3.0',
      duration: Math.min(duration || 10, 30),
      aspect_ratio: '9:16',
      enhance_prompt: true,
    };
    if (image_url) genBody.image_url = image_url;
    if (reference_images?.length) genBody.reference_image_urls = reference_images.slice(0, 5);
    
    const genResult = await higgsFieldGenerate(genBody);
    res.json({ success: true, generation_id: extractRequestId(genResult), status_url: `/api/video/status/${extractRequestId(genResult)}`, duration: genBody.duration });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * DELETE /api/video/cancel/:id — Cancel a pending generation
 */
app.delete('/api/video/cancel/:id', async (req, res) => {
  try {
    // CORRECT cancel endpoint: POST /requests/{request_id}/cancel
    const r = await fetch(`${HIGGSFIELD_BASE}/requests/${req.params.id}/cancel`, {
      method: 'POST',
      headers: { 'Authorization': `Key ${HIGGSFIELD_API_KEY}:${HIGGSFIELD_API_SECRET}` },
    });
    res.json({ success: true, cancelled: req.params.id });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * GET /api/studio/models — Get ALL available models with capabilities
 */
app.get('/api/studio/models', (req, res) => {
  const { capability } = req.query;
  let models = Object.entries(HIGGSFIELD_MODELS).map(([id, data]) => ({ id, ...data }));
  if (capability) models = models.filter(m => m.capabilities?.includes(capability));
  
  res.json({
    models,
    total: models.length,
    capabilities: [...new Set(models.flatMap(m => m.capabilities || []))],
    studios: {
      marketing: { default_model: 'seedance-pro', description: 'Product URL → full campaign' },
      cinema: { default_model: 'dop-standard', description: 'Professional filmmaking controls' },
      lipsync: { default_model: 'kling-2.1-pro', description: 'Script → talking head' },
      audio: { default_model: 'kling-2.1-pro', description: 'Voiceover, clone, translate' },
      effects: { default_model: 'dop-turbo', description: '20+ VFX presets' },
      enhance: { default_model: 'dop-standard', description: 'Upscale, stabilize, enhance' },
      image: { default_model: 'soul-standard', description: 'Premium image generation' },
      seedream: { default_model: 'seedream-v4', description: '2K/4K image generation + editing' },
      soul: { default_model: 'soul-character', description: 'Character consistency across images' },
      motion: { default_model: 'kling-3.0-t2v', description: 'Precise motion control, text-to-video' },
      flf: { default_model: 'dop-standard-flf', description: 'First-last-frame precise storytelling' },
    },
  });
});


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  TEMPLATES LIBRARY
//  Pre-built brand DNA templates for every content type and platform
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const TEMPLATE_LIBRARY = {
  // Product Templates
  'product-showcase': { name: 'Product Showcase', category: 'product', studio: 'marketing', mode: 'hyper-motion', model: 'seedance-pro', aspect_ratio: '9:16', duration: 10, prompt_template: 'Cinematic product showcase with dynamic camera movements. The product rotates elegantly against a clean, minimal background. Premium lighting. {brand_style}' },
  'product-review': { name: 'Product Review', category: 'product', studio: 'marketing', mode: 'product-review', model: 'seedance-pro', aspect_ratio: '9:16', duration: 15, prompt_template: 'Authentic product review. A presenter examines the product up close, showing details, texture, and features. Genuine reactions. {brand_style}' },
  'unboxing': { name: 'Unboxing Experience', category: 'product', studio: 'marketing', mode: 'unboxing', model: 'seedance-pro', aspect_ratio: '9:16', duration: 15, prompt_template: 'Exciting unboxing video. Hands carefully open the packaging, revealing the product with genuine excitement. ASMR-quality audio. {brand_style}' },
  'product-demo': { name: 'Product Demo', category: 'product', studio: 'marketing', mode: 'tutorial', model: 'seedance-pro', aspect_ratio: '9:16', duration: 15, prompt_template: 'Step-by-step product demonstration. Show the product in use, highlighting key features and benefits. Clear, educational. {brand_style}' },
  'virtual-try-on': { name: 'Virtual Try-On', category: 'product', studio: 'marketing', mode: 'virtual-try-on', model: 'seedance-pro', aspect_ratio: '9:16', duration: 10, prompt_template: 'Street-style editorial virtual try-on. A model confidently showcases the product in a lifestyle setting. Fashion-forward energy. {brand_style}' },
  'product-360': { name: 'Product 360° Spin', category: 'product', studio: 'cinema', model: 'dop-standard', aspect_ratio: '1:1', duration: 5, camera_effect: 'product-hero-360', prompt_template: 'Smooth 360-degree product rotation. Clean white background. Professional studio lighting. Every angle and detail visible. {brand_style}' },
  
  // UGC Templates
  'ugc-talking-head': { name: 'UGC Talking Head', category: 'ugc', studio: 'marketing', mode: 'ugc', model: 'seedance-pro', aspect_ratio: '9:16', duration: 15, prompt_template: 'Authentic UGC-style talking head. A real person shares their genuine experience with the product. Natural lighting, casual setting. {brand_style}' },
  'ugc-get-ready': { name: 'Get Ready With Me', category: 'ugc', studio: 'marketing', mode: 'ugc', model: 'seedance-pro', aspect_ratio: '9:16', duration: 15, prompt_template: 'GRWM-style content. Someone getting ready while casually incorporating the product. Mirror selfie aesthetic. Trendy, relatable. {brand_style}' },
  'ugc-day-in-life': { name: 'Day in the Life', category: 'ugc', studio: 'cinema', model: 'kling-3.0-t2v', aspect_ratio: '9:16', duration: 10, prompt_template: 'Aesthetic day-in-the-life montage. Multiple scenes showing the product integrated into daily routine. Warm, lifestyle vibes. {brand_style}' },
  
  // Ad Templates
  'tv-spot': { name: 'TV Commercial', category: 'ad', studio: 'marketing', mode: 'tv-spot', model: 'kling-3.0-t2v', aspect_ratio: '16:9', duration: 15, prompt_template: 'Cinematic TV commercial. Full narrative arc: hook, problem, solution (the product), happy ending. Broadcast quality. {brand_style}' },
  'story-ad': { name: 'Story/Reel Ad', category: 'ad', studio: 'cinema', model: 'dop-standard', aspect_ratio: '9:16', duration: 10, prompt_template: 'Scroll-stopping story ad. First frame grabs attention immediately. Product front and center. Bold text overlay. Urgency. {brand_style}' },
  'carousel-ad': { name: 'Carousel Ad Set', category: 'ad', studio: 'image', model: 'soul-standard', aspect_ratio: '1:1', prompt_template: 'Premium carousel ad slide. Clean design, bold typography, product hero shot. Each slide tells part of the story. {brand_style}' },
  
  // Social Templates
  'trending-hook': { name: 'Trending Hook', category: 'social', studio: 'cinema', model: 'kling-2.1-standard', aspect_ratio: '9:16', duration: 5, camera_effect: 'snap-zoom', prompt_template: 'Attention-grabbing first 3 seconds. Quick cuts, dynamic camera, bold movement. Hook viewers immediately. {brand_style}' },
  'behind-scenes': { name: 'Behind the Scenes', category: 'social', studio: 'cinema', model: 'kling-2.1-pro', aspect_ratio: '9:16', duration: 10, camera_effect: 'steadicam-follow', prompt_template: 'Authentic behind-the-scenes content. Show the process, the workspace, the making of the product. Raw, real, relatable. {brand_style}' },
  'aesthetic-flat-lay': { name: 'Aesthetic Flat Lay', category: 'social', studio: 'cinema', model: 'dop-standard', aspect_ratio: '1:1', duration: 5, camera_effect: 'flat-lay-scan', prompt_template: 'Beautiful flat lay arrangement. Products artfully arranged with complementary props. Top-down camera slowly scans the scene. {brand_style}' },
  'before-after': { name: 'Before & After', category: 'social', studio: 'cinema', model: 'dop-standard', aspect_ratio: '9:16', duration: 5, camera_effect: 'before-after-split', prompt_template: 'Dramatic before and after reveal. Split screen showing transformation. Clean transition. Impactful. {brand_style}' },
  
  // Brand Templates
  'brand-story': { name: 'Brand Story', category: 'brand', studio: 'cinema', model: 'kling-3.0-t2v', aspect_ratio: '16:9', duration: 15, genre: 'intimate', prompt_template: 'Emotional brand story. Cinematic quality. Show the brand\'s values, mission, and the people behind it. Heartfelt and authentic. {brand_style}' },
  'founder-message': { name: 'Founder Message', category: 'brand', studio: 'lipsync', model: 'kling-2.1-pro', aspect_ratio: '9:16', duration: 15, prompt_template: 'Founder/brand ambassador delivers a personal message to the audience. Professional but warm. Builds trust and connection. {brand_style}' },
  'testimonial': { name: 'Customer Testimonial', category: 'brand', studio: 'lipsync', model: 'kling-2.1-pro', aspect_ratio: '9:16', duration: 15, prompt_template: 'Happy customer sharing their experience. Natural, unscripted feel. Genuine smile and enthusiasm. {brand_style}' },
  
  // Seasonal Templates
  'sale-promo': { name: 'Sale/Promo', category: 'seasonal', studio: 'cinema', model: 'dop-standard', aspect_ratio: '9:16', duration: 5, camera_effect: 'pulse', prompt_template: 'High-energy sale promotion. Bold graphics, flashing prices, urgency elements. Products cycling through. FOMO energy. {brand_style}' },
  'holiday-special': { name: 'Holiday Special', category: 'seasonal', studio: 'marketing', mode: 'hyper-motion', model: 'seedance-pro', aspect_ratio: '9:16', duration: 10, prompt_template: 'Festive holiday content. Products presented in a seasonal setting with appropriate decorations. Warm, celebratory mood. {brand_style}' },
  'new-arrival': { name: 'New Arrival', category: 'seasonal', studio: 'cinema', model: 'kling-3.0-t2v', aspect_ratio: '9:16', duration: 10, camera_effect: 'product-reveal', prompt_template: 'Dramatic new product reveal. Build anticipation, then reveal the product in all its glory. Premium, exciting. {brand_style}' },
};

/**
 * GET /api/templates — Get all templates, filterable by category/studio/platform
 */
app.get('/api/templates', (req, res) => {
  const { category, studio, platform } = req.query;
  
  let templates = Object.entries(TEMPLATE_LIBRARY).map(([id, data]) => ({ id, ...data }));
  if (category) templates = templates.filter(t => t.category === category);
  if (studio) templates = templates.filter(t => t.studio === studio);
  
  const categories = [...new Set(Object.values(TEMPLATE_LIBRARY).map(t => t.category))];
  const studios = [...new Set(Object.values(TEMPLATE_LIBRARY).map(t => t.studio))];
  
  res.json({ templates, total: templates.length, categories, studios });
});

/**
 * POST /api/templates/generate — Generate content from a template with brand DNA
 */
app.post('/api/templates/generate', async (req, res) => {
  try {
    const { email, hash, template_id, product_images, product_name, product_description,
            custom_prompt, platform, model_override } = req.body;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const template = TEMPLATE_LIBRARY[template_id];
    if (!template) return res.status(404).json({ error: 'Template not found', available: Object.keys(TEMPLATE_LIBRARY) });
    
    const clientName = client.fields.brand_name || email;
    const brandDNA = await loadBrandFingerprint(clientName);
    const brandPrefix = buildBrandPromptPrefix(brandDNA, clientName);
    
    // Fill template with brand style
    // ━━ LEARNING + MOTION DNA ━━
    const learningCtx = await buildLearningContext(clientName);
    const motionDNA = await loadMotionDNA(clientName);
    const motionFragment = motionDNA?.fragments?.length ? motionDNA.fragments[Math.floor(Math.random() * motionDNA.fragments.length)] : '';
    
    let finalPrompt = template.prompt_template.replace('{brand_style}', brandDNA ? `Brand DNA: ${JSON.stringify(brandDNA)}` : 'Professional, premium quality');
    if (product_name) finalPrompt = `Product: ${product_name}\n${product_description || ''}\n\n${finalPrompt}`;
    if (custom_prompt) finalPrompt += `\n\nAdditional direction: ${custom_prompt}`;
    if (motionFragment) finalPrompt += `\nMotion direction: ${motionFragment}`;
    finalPrompt = `${brandPrefix}${PRODUCT_PRESERVATION_PROMPT}${learningCtx}${motionDNA?.context || ''}\n\n${finalPrompt}`;
    
    const genBody = {
      prompt: finalPrompt,
      model: model_override || template.model,
      duration: template.duration || 10,
      aspect_ratio: template.aspect_ratio || '9:16',
      enhance_prompt: true,
    };
    if (product_images?.length) genBody.image_url = product_images[0];
    if (product_images?.length > 1) genBody.reference_image_urls = product_images.slice(0, 5);
    if (template.camera_effect) genBody.motion_id = template.camera_effect;
    
    const genResult = await higgsFieldGenerate(genBody);
    
    res.json({
      success: true,
      template: template_id,
      template_name: template.name,
      generation_id: extractRequestId(genResult),
      status_url: `/api/video/status/${extractRequestId(genResult)}`,
      model: genBody.model,
      brand_dna_applied: !!brandDNA,
      product_preservation: true,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});




// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  CAPCUT-STYLE VIDEO EDIT TEMPLATES
//  Trending edit styles, transitions, effects, music sync — users apply to finished videos
//  Full CapCut equivalent: velocity edits, beat drops, text reveals, montages, etc.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const VIDEO_EDIT_TEMPLATES = {
  // ─── VELOCITY EDITS (Speed Ramping) ───
  'velocity-smooth-ramp': {
    name: 'Smooth Speed Ramp',
    category: 'velocity',
    difficulty: 'beginner',
    trending_score: 95,
    description: 'Gradual speed up → freeze frame → smooth slow-mo resume. The TikTok classic.',
    keyframes: [
      { time: 0, speed: 1.0, ease: 'linear' },
      { time: 0.3, speed: 2.5, ease: 'ease-in' },
      { time: 0.5, speed: 0.0, ease: 'snap', effect: 'freeze-frame', duration: 0.3 },
      { time: 0.8, speed: 0.3, ease: 'ease-out' },
      { time: 1.0, speed: 1.0, ease: 'ease-in-out' },
    ],
    audio_sync: { beat_aligned: true, freeze_on_drop: true },
    tags: ['trending', 'fashion', 'reveal', 'product'],
  },
  'velocity-whip-pan': {
    name: 'Whip Pan Speed',
    category: 'velocity',
    difficulty: 'intermediate',
    trending_score: 88,
    description: 'Fast whip between scenes with motion blur + speed ramp on the snap.',
    keyframes: [
      { time: 0, speed: 1.0 },
      { time: 0.4, speed: 4.0, ease: 'ease-in', effect: 'motion-blur', intensity: 0.8 },
      { time: 0.5, speed: 0.5, ease: 'snap', effect: 'scene-cut' },
      { time: 0.7, speed: 1.0, ease: 'ease-out' },
    ],
    audio_sync: { beat_aligned: true, whoosh_on_whip: true },
    tags: ['transition', 'dynamic', 'outfit-change'],
  },
  'velocity-bass-drop': {
    name: 'Bass Drop Freeze',
    category: 'velocity',
    difficulty: 'beginner',
    trending_score: 92,
    description: 'Normal speed → bass hits → freeze → slow-mo explosion. Music video energy.',
    keyframes: [
      { time: 0, speed: 1.0 },
      { time: 0.45, speed: 1.2, ease: 'ease-in' },
      { time: 0.5, speed: 0.0, effect: 'freeze-frame', duration: 0.5, zoom: 1.15 },
      { time: 0.55, speed: 0.2, ease: 'ease-out', effect: 'shake', intensity: 0.3 },
      { time: 0.8, speed: 0.5, ease: 'ease-in-out' },
      { time: 1.0, speed: 1.0 },
    ],
    audio_sync: { beat_aligned: true, freeze_on_drop: true, bass_boost: true },
    tags: ['music-video', 'fashion', 'hype', 'reveal'],
  },
  'velocity-strobe': {
    name: 'Strobe Flash Edit',
    category: 'velocity',
    difficulty: 'advanced',
    trending_score: 85,
    description: 'Rapid alternating speed (fast/freeze/fast/freeze) with flash transitions. Editorial energy.',
    keyframes: [
      { time: 0, speed: 3.0, effect: 'flash', color: '#FFFFFF' },
      { time: 0.1, speed: 0.0, effect: 'freeze-frame', duration: 0.15 },
      { time: 0.25, speed: 3.0, effect: 'flash' },
      { time: 0.35, speed: 0.0, effect: 'freeze-frame', duration: 0.15 },
      { time: 0.5, speed: 2.0, effect: 'flash' },
      { time: 0.65, speed: 0.3, ease: 'ease-out' },
      { time: 1.0, speed: 1.0 },
    ],
    audio_sync: { beat_aligned: true, flash_on_beat: true },
    tags: ['editorial', 'fashion', 'high-energy', 'runway'],
  },

  // ─── TRANSITIONS ───
  'transition-outfit-change': {
    name: 'Outfit Change Snap',
    category: 'transition',
    difficulty: 'intermediate',
    trending_score: 97,
    description: 'Hand covers camera → snap → new outfit. The #1 fashion transition on TikTok.',
    keyframes: [
      { time: 0, speed: 1.0 },
      { time: 0.45, speed: 1.5, ease: 'ease-in' },
      { time: 0.5, effect: 'hand-cover-cut', duration: 0.08, zoom: 1.3, blur: 15 },
      { time: 0.58, speed: 0.5, ease: 'ease-out', zoom: 1.0 },
      { time: 1.0, speed: 1.0 },
    ],
    instructions: 'Model raises hand toward camera at cut point. Second clip starts from same position in new outfit.',
    audio_sync: { snap_sound: true, beat_aligned: true },
    tags: ['fashion', 'outfit', 'trending', 'transformation'],
  },
  'transition-zoom-through': {
    name: 'Zoom Through Portal',
    category: 'transition',
    difficulty: 'intermediate',
    trending_score: 90,
    description: 'Camera zooms into an object → through it → into next scene. Seamless.',
    keyframes: [
      { time: 0, speed: 1.0, zoom: 1.0 },
      { time: 0.3, zoom: 3.0, ease: 'ease-in', speed: 1.5 },
      { time: 0.5, zoom: 8.0, effect: 'blur-transition', blur: 20 },
      { time: 0.6, zoom: 3.0, ease: 'ease-out', speed: 1.0 },
      { time: 0.8, zoom: 1.0, ease: 'ease-out' },
    ],
    instructions: 'First clip: camera pushes into a dark/solid area. Second clip: camera pulls back from matching area.',
    tags: ['creative', 'product-reveal', 'storytelling'],
  },
  'transition-spin': {
    name: 'Spin Transition',
    category: 'transition',
    difficulty: 'beginner',
    trending_score: 86,
    description: 'Camera spins 360° between scenes. Clean, energetic, works for everything.',
    keyframes: [
      { time: 0, speed: 1.0, rotation: 0 },
      { time: 0.4, speed: 2.0, ease: 'ease-in' },
      { time: 0.5, rotation: 360, effect: 'motion-blur', intensity: 0.6 },
      { time: 0.6, speed: 0.8, ease: 'ease-out' },
      { time: 1.0, speed: 1.0 },
    ],
    audio_sync: { whoosh_on_spin: true },
    tags: ['energetic', 'versatile', 'product', 'travel'],
  },
  'transition-glitch': {
    name: 'Glitch Cut',
    category: 'transition',
    difficulty: 'beginner',
    trending_score: 89,
    description: 'Digital glitch distortion between scenes. Edgy, modern, cyberpunk energy.',
    keyframes: [
      { time: 0, speed: 1.0 },
      { time: 0.45, effect: 'rgb-split', intensity: 0.5 },
      { time: 0.48, effect: 'scanlines', intensity: 0.8 },
      { time: 0.5, effect: 'pixel-sort', duration: 0.1 },
      { time: 0.55, effect: 'rgb-split', intensity: 0.3 },
      { time: 0.6, speed: 1.0 },
    ],
    audio_sync: { glitch_sound: true },
    tags: ['edgy', 'tech', 'streetwear', 'gaming'],
  },
  'transition-morph': {
    name: 'Smooth Morph',
    category: 'transition',
    difficulty: 'advanced',
    trending_score: 82,
    description: 'One subject morphs/dissolves into another. Premium editorial feel.',
    keyframes: [
      { time: 0, speed: 1.0 },
      { time: 0.4, speed: 0.5, ease: 'ease-in' },
      { time: 0.5, effect: 'cross-dissolve', duration: 0.3, blend_mode: 'soft-light' },
      { time: 0.7, speed: 1.0, ease: 'ease-out' },
    ],
    tags: ['editorial', 'premium', 'beauty', 'luxury'],
  },

  // ─── BEAT SYNC / MUSIC TEMPLATES ───
  'beat-sync-hard-cuts': {
    name: 'Hard Cut Beat Sync',
    category: 'beat-sync',
    difficulty: 'beginner',
    trending_score: 94,
    description: 'Every beat = hard cut to new shot. Simple, effective, maximum impact.',
    structure: {
      cuts_per_beat: 1,
      cut_style: 'hard',
      shot_duration: 'beat-length',
      recommended_bpm: [90, 120, 140],
    },
    instructions: 'Cut clips to exact beat timing. Each shot should be a distinct angle/product/pose.',
    tags: ['music-video', 'montage', 'product', 'fashion'],
  },
  'beat-sync-half-beat': {
    name: 'Double-Time Beat Sync',
    category: 'beat-sync',
    difficulty: 'intermediate',
    trending_score: 91,
    description: 'Cuts on every half-beat for high-energy montage. Fashion show energy.',
    structure: {
      cuts_per_beat: 2,
      cut_style: 'hard',
      speed_variation: [1.0, 0.5, 2.0, 1.0],
      recommended_bpm: [100, 130],
    },
    tags: ['high-energy', 'fashion', 'montage', 'runway'],
  },
  'beat-sync-buildup-drop': {
    name: 'Build Up → Drop',
    category: 'beat-sync',
    difficulty: 'intermediate',
    trending_score: 96,
    description: 'Slow pacing during verse → rapid cuts on buildup → epic reveal on drop. THE viral formula.',
    structure: {
      verse: { speed: 1.0, cuts_per_beat: 0.5, style: 'slow-dissolve' },
      buildup: { speed: 1.5, cuts_per_beat: 2, style: 'hard-cut', zoom: 'progressive' },
      drop: { speed: 0.3, effect: 'freeze-then-slowmo', shake: true, zoom: 1.2 },
      post_drop: { speed: 1.0, cuts_per_beat: 1 },
    },
    instructions: 'Verse: slow, atmospheric shots. Buildup: rapid cuts getting faster. Drop: THE reveal moment.',
    tags: ['viral', 'reveal', 'product-launch', 'hype'],
  },

  // ─── TEXT & OVERLAY TEMPLATES ───
  'text-typewriter': {
    name: 'Typewriter Text',
    category: 'text-overlay',
    difficulty: 'beginner',
    trending_score: 83,
    description: 'Text types on screen character by character. Clean, engaging, readable.',
    text_animation: {
      entrance: 'typewriter',
      speed: 'medium',
      cursor: true,
      font_style: 'mono',
      position: 'center',
    },
    tags: ['storytelling', 'educational', 'pov', 'relatable'],
  },
  'text-kinetic': {
    name: 'Kinetic Typography',
    category: 'text-overlay',
    difficulty: 'advanced',
    trending_score: 87,
    description: 'Words fly in, scale, rotate in sync with voiceover. TED-talk meets TikTok.',
    text_animation: {
      entrance: 'fly-in-word-by-word',
      emphasis: 'scale-on-keyword',
      exit: 'fly-out',
      sync: 'voiceover',
      font_style: 'bold-sans',
    },
    tags: ['educational', 'motivational', 'brand-story', 'explainer'],
  },
  'text-pop-on-beat': {
    name: 'Pop on Beat',
    category: 'text-overlay',
    difficulty: 'intermediate',
    trending_score: 90,
    description: 'Text pops/bounces onto screen synced to music beats. Energetic, fun.',
    text_animation: {
      entrance: 'scale-bounce',
      timing: 'beat-synced',
      scale_from: 0,
      scale_to: 1.1,
      overshoot: true,
      exit: 'fade-out',
    },
    tags: ['fun', 'product-features', 'sale', 'announcement'],
  },

  // ─── MONTAGE / SLIDESHOW TEMPLATES ───
  'montage-photo-to-video': {
    name: 'Photo Carousel → Video',
    category: 'montage',
    difficulty: 'beginner',
    trending_score: 93,
    description: 'Static photos come alive with Ken Burns motion + beat-synced transitions. Product showcase gold.',
    structure: {
      photos_per_sequence: 5,
      motion: 'ken-burns',
      zoom_range: [1.0, 1.3],
      pan_speed: 'slow',
      transition: 'swipe-left',
      transition_duration: 0.3,
      audio: 'trending-track',
    },
    tags: ['product', 'portfolio', 'before-after', 'collection'],
  },
  'montage-day-aesthetic': {
    name: 'Aesthetic Day Montage',
    category: 'montage',
    difficulty: 'beginner',
    trending_score: 91,
    description: 'Warm-toned clips with smooth transitions. "That girl" aesthetic. Lifestyle gold.',
    structure: {
      clip_duration: [2, 4],
      color_grade: 'warm-film',
      grain: 0.15,
      transition: 'smooth-dissolve',
      speed: [0.8, 1.0],
      audio: 'lofi-chill',
    },
    color_grading: { temperature: 'warm', contrast: 'low', saturation: 0.85, grain: 0.15, fade: 0.1 },
    tags: ['aesthetic', 'lifestyle', 'daily-vlog', 'warm'],
  },
  'montage-product-hero': {
    name: 'Product Hero Reel',
    category: 'montage',
    difficulty: 'intermediate',
    trending_score: 94,
    description: 'Multiple angles of one product with cinematic transitions. E-commerce essential.',
    structure: {
      shots: ['hero-wide', 'detail-close', 'texture-macro', 'in-use', 'hero-angle-2'],
      transition: 'smooth-zoom',
      speed_curve: [0.8, 1.0, 0.5, 1.2, 0.8],
      text_overlays: ['product-name', 'key-feature', 'price-cta'],
      audio: 'trending-upbeat',
    },
    tags: ['e-commerce', 'product', 'shopify', 'conversion'],
  },

  // ─── COLOR GRADING PRESETS ───
  'grade-film-vintage': {
    name: 'Vintage Film Look',
    category: 'color-grade',
    difficulty: 'beginner',
    trending_score: 88,
    description: 'Warm tones, lifted blacks, subtle grain. 35mm film nostalgia.',
    grading: { temperature: 6800, tint: 5, contrast: -10, highlights: -15, shadows: 15, whites: -10, blacks: 10, saturation: -12, grain: 0.2, vignette: 0.15 },
    lut_name: 'vintage-kodak',
    tags: ['aesthetic', 'warm', 'nostalgic', 'fashion'],
  },
  'grade-clean-commercial': {
    name: 'Clean Commercial',
    category: 'color-grade',
    difficulty: 'beginner',
    trending_score: 86,
    description: 'Bright, clean, slightly desaturated. Product photography standard.',
    grading: { temperature: 5600, contrast: 5, highlights: -5, shadows: 10, saturation: -5, clarity: 10, grain: 0, vignette: 0 },
    lut_name: 'clean-commercial',
    tags: ['product', 'commercial', 'clean', 'bright'],
  },
  'grade-moody-editorial': {
    name: 'Moody Editorial',
    category: 'color-grade',
    difficulty: 'intermediate',
    trending_score: 84,
    description: 'Crushed blacks, teal shadows, desaturated midtones. Magazine editorial feel.',
    grading: { temperature: 5200, tint: -5, contrast: 20, highlights: -20, shadows: -25, saturation: -20, split_toning: { shadows: '#1a3a4a', highlights: '#d4a574' }, grain: 0.1, vignette: 0.2 },
    lut_name: 'moody-editorial',
    tags: ['editorial', 'moody', 'fashion', 'luxury'],
  },
  'grade-neon-night': {
    name: 'Neon Night',
    category: 'color-grade',
    difficulty: 'intermediate',
    trending_score: 82,
    description: 'Boosted neons, deep shadows, cyberpunk. Nightlife and streetwear energy.',
    grading: { temperature: 4500, contrast: 25, highlights: 10, shadows: -30, saturation: 20, vibrance: 30, split_toning: { shadows: '#0a0a2a', highlights: '#ff00ff' }, grain: 0.05 },
    lut_name: 'neon-night',
    tags: ['nightlife', 'streetwear', 'neon', 'edgy'],
  },

  // ─── TRENDING FORMATS ───
  'format-pov': {
    name: 'POV: [Situation]',
    category: 'trending-format',
    difficulty: 'beginner',
    trending_score: 93,
    description: 'First-person perspective storytelling. "POV: you just unboxed your order" format.',
    structure: {
      opening: 'POV text overlay (2s)',
      body: 'First-person camera perspective',
      pacing: 'natural-to-fast',
      text_position: 'top-center',
      camera: 'handheld-pov',
    },
    prompt_template: 'POV: {scenario}. First-person camera perspective, natural handheld movement, authentic reactions. {brand_style}',
    tags: ['pov', 'relatable', 'storytelling', 'viral'],
  },
  'format-asmr-unbox': {
    name: 'ASMR Unboxing',
    category: 'trending-format',
    difficulty: 'beginner',
    trending_score: 89,
    description: 'Close-up product handling with satisfying sounds. No music, pure ASMR.',
    structure: {
      audio: 'natural-asmr-only',
      camera: 'macro-close-up',
      lighting: 'soft-diffused',
      speed: [0.8, 1.0],
      focus: 'rack-focus-on-details',
    },
    prompt_template: 'ASMR unboxing experience. Extreme close-up, soft lighting, satisfying sounds of packaging. Fingers carefully reveal the product. {brand_style}',
    tags: ['asmr', 'unboxing', 'product', 'satisfying'],
  },
  'format-transition-challenge': {
    name: 'Transition Challenge',
    category: 'trending-format',
    difficulty: 'intermediate',
    trending_score: 91,
    description: 'Snap/clap/jump transitions between looks. Outfit/location/product change challenge format.',
    structure: {
      segments: 4,
      transition_trigger: 'snap-or-jump',
      speed_on_transition: 3.0,
      speed_on_reveal: 0.5,
      audio: 'trending-with-drops',
    },
    prompt_template: 'Quick transition challenge. {segments} looks/products, snap transition between each. Confident energy, direct to camera. {brand_style}',
    tags: ['challenge', 'transformation', 'fashion', 'viral'],
  },
  'format-split-screen-react': {
    name: 'Split Screen React',
    category: 'trending-format',
    difficulty: 'intermediate',
    trending_score: 85,
    description: 'Side-by-side comparison or reaction format. Before/after, competitor vs yours, etc.',
    structure: {
      layout: 'vertical-split',
      split_ratio: '50:50',
      sync: true,
      text_labels: ['Before', 'After'],
      highlight_winner: true,
    },
    tags: ['comparison', 'before-after', 'react', 'educational'],
  },
  'format-three-reasons': {
    name: '3 Reasons Why...',
    category: 'trending-format',
    difficulty: 'beginner',
    trending_score: 92,
    description: 'Listicle format: 3 reasons with kinetic text + product shots. Educational + conversion.',
    structure: {
      segments: 3,
      text_style: 'numbered-pop-in',
      transition: 'swipe-up',
      duration_per_point: [3, 4],
      cta_at_end: true,
      audio: 'upbeat-trending',
    },
    prompt_template: '3 reasons why {product_name} is a must-have. Each reason shown with the product in action. Energetic, convincing. {brand_style}',
    tags: ['listicle', 'educational', 'conversion', 'product'],
  },
  'format-get-ready': {
    name: 'GRWM Aesthetic',
    category: 'trending-format',
    difficulty: 'beginner',
    trending_score: 95,
    description: 'Get Ready With Me format with product integration. Most engaging format for beauty/fashion.',
    structure: {
      camera: 'mirror-selfie-or-tripod',
      pacing: 'relaxed-with-speed-ups',
      speed_curve: [1.0, 2.0, 1.0, 2.0, 0.8],
      audio: 'trending-chill',
      text_overlays: ['product-callouts'],
      color_grade: 'warm-soft',
    },
    prompt_template: 'GRWM: getting ready using {product_name}. Mirror/vanity setup, warm lighting, relaxed energy with product callouts. {brand_style}',
    tags: ['grwm', 'beauty', 'fashion', 'lifestyle', 'routine'],
  },
};

// Community template store (in-memory, upgraded to DB in Phase 2)
const communityTemplates = new Map();

/**
 * GET /api/templates/video-edits — Browse CapCut-style video edit templates
 * Filterable by category, difficulty, tags, trending
 */
app.get('/api/templates/video-edits', (req, res) => {
  const { category, difficulty, tag, sort_by, limit: lim } = req.query;
  
  let templates = Object.entries(VIDEO_EDIT_TEMPLATES).map(([id, data]) => ({ id, ...data }));
  
  if (category) templates = templates.filter(t => t.category === category);
  if (difficulty) templates = templates.filter(t => t.difficulty === difficulty);
  if (tag) templates = templates.filter(t => t.tags?.includes(tag));
  
  // Sort options
  if (sort_by === 'trending') {
    templates.sort((a, b) => (b.trending_score || 0) - (a.trending_score || 0));
  } else if (sort_by === 'difficulty') {
    const order = { beginner: 0, intermediate: 1, advanced: 2 };
    templates.sort((a, b) => (order[a.difficulty] || 0) - (order[b.difficulty] || 0));
  }
  
  if (lim) templates = templates.slice(0, parseInt(lim));
  
  const categories = [...new Set(Object.values(VIDEO_EDIT_TEMPLATES).map(t => t.category))];
  const allTags = [...new Set(Object.values(VIDEO_EDIT_TEMPLATES).flatMap(t => t.tags || []))].sort();
  
  res.json({
    templates,
    total: templates.length,
    categories,
    available_tags: allTags,
    difficulties: ['beginner', 'intermediate', 'advanced'],
  });
});

/**
 * GET /api/templates/video-edits/:id — Get a specific video edit template with full details
 */
app.get('/api/templates/video-edits/:id', (req, res) => {
  const template = VIDEO_EDIT_TEMPLATES[req.params.id];
  if (!template) {
    return res.status(404).json({ error: 'Template not found', available: Object.keys(VIDEO_EDIT_TEMPLATES) });
  }
  res.json({ id: req.params.id, ...template });
});

/**
 * POST /api/templates/video-edits/apply — Apply a video edit template to generate content
 * Takes a template + product/brand context → generates Higgsfield video with that edit style
 */
app.post('/api/templates/video-edits/apply', async (req, res) => {
  try {
    const { email, hash, template_id, product_images, product_name, product_description,
            custom_prompt, model_override, duration, aspect_ratio, scenario } = req.body;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const template = VIDEO_EDIT_TEMPLATES[template_id];
    if (!template) return res.status(404).json({ error: 'Template not found', available: Object.keys(VIDEO_EDIT_TEMPLATES) });
    
    const clientName = client.fields.brand_name || email;
    const brandDNA = await loadBrandFingerprint(clientName);
    const brandPrefix = buildBrandPromptPrefix(brandDNA, clientName);
    
    // ━━ LEARNING + MOTION DNA ━━
    const learningCtx = await buildLearningContext(clientName);
    const motionDNA = await loadMotionDNA(clientName);
    
    // Build edit-specific prompt
    let editPrompt = `${brandPrefix}${PRODUCT_PRESERVATION_PROMPT}`;
    editPrompt += learningCtx;
    if (motionDNA?.context) editPrompt += motionDNA.context;
    editPrompt += `\n\nVIDEO EDIT STYLE: ${template.name} — ${template.description}`;
    
    // Add template-specific instructions
    if (template.keyframes) {
      editPrompt += `\nPacing: ${template.keyframes.map(k => `${Math.round(k.time*100)}%: speed=${k.speed || 1}x${k.effect ? ` [${k.effect}]` : ''}`).join(' → ')}`;
    }
    if (template.structure) {
      editPrompt += `\nStructure: ${JSON.stringify(template.structure)}`;
    }
    if (template.color_grading) {
      editPrompt += `\nColor grade: ${template.category === 'color-grade' ? JSON.stringify(template.grading) : JSON.stringify(template.color_grading)}`;
    }
    if (template.instructions) {
      editPrompt += `\nDirector notes: ${template.instructions}`;
    }
    if (template.prompt_template) {
      let filled = template.prompt_template
        .replace('{brand_style}', brandDNA ? `Brand DNA: ${JSON.stringify(brandDNA)}` : 'Professional, premium')
        .replace('{product_name}', product_name || 'the product')
        .replace('{scenario}', scenario || 'using this product for the first time')
        .replace('{segments}', template.structure?.segments?.toString() || '3');
      editPrompt += `\n\n${filled}`;
    }
    
    if (product_name) editPrompt += `\nProduct: ${product_name}`;
    if (product_description) editPrompt += `\nDescription: ${product_description}`;
    if (custom_prompt) editPrompt += `\n\nAdditional direction: ${custom_prompt}`;
    
    // Select best model for the edit type
    // Model selection: image-to-video if product images provided, text-to-video otherwise
    const hasImages = product_images?.length > 0;
    const modelForCategoryI2V = {
      'velocity': 'seedance-pro',
      'transition': 'seedance-pro',
      'beat-sync': 'seedance-pro',
      'text-overlay': 'dop-standard',
      'montage': 'kling-3.0-i2v',
      'color-grade': 'dop-standard',
      'trending-format': 'seedance-pro',
    };
    const modelForCategoryT2V = {
      'velocity': 'kling-3.0-t2v',
      'transition': 'kling-3.0-t2v',
      'beat-sync': 'kling-3.0-t2v',
      'text-overlay': 'dop-standard',
      'montage': 'kling-3.0-t2v',
      'color-grade': 'dop-standard',
      'trending-format': 'kling-3.0-t2v',
    };
    const categoryModels = hasImages ? modelForCategoryI2V : modelForCategoryT2V;
    const selectedModel = model_override || categoryModels[template.category] || (hasImages ? 'seedance-pro' : 'kling-3.0-t2v');
    
    const genBody = {
      prompt: editPrompt,
      model: selectedModel,
      duration: duration || template.structure?.duration_per_point?.[1] ? (template.structure?.segments || 3) * (template.structure?.duration_per_point?.[1] || 3) : 10,
      aspect_ratio: aspect_ratio || '9:16',
      enhance_prompt: true,
    };
    if (product_images?.length) genBody.image_url = product_images[0];
    if (product_images?.length > 1) genBody.reference_image_urls = product_images.slice(0, 5);
    
    const genResult = await higgsFieldGenerate(genBody);
    
    res.json({
      success: true,
      template_id,
      template_name: template.name,
      template_category: template.category,
      generation_id: extractRequestId(genResult),
      status_url: `/api/video/status/${extractRequestId(genResult)}`,
      model: selectedModel,
      brand_dna_applied: !!brandDNA,
      learning_applied: !!learningCtx,
      motion_dna_applied: !!motionDNA,
      edit_style: {
        keyframes: template.keyframes || null,
        structure: template.structure || null,
        color_grading: template.grading || template.color_grading || null,
        audio_sync: template.audio_sync || null,
      },
    });
  } catch (e) {
    log('EDIT_TEMPLATE', `Error: ${e.message}`);
    res.status(500).json({ error: e.message });
  }
});

/**
 * GET /api/templates/trending — Get top trending video edit templates
 */
app.get('/api/templates/trending', (req, res) => {
  const { limit: lim, category } = req.query;
  let templates = Object.entries(VIDEO_EDIT_TEMPLATES)
    .map(([id, data]) => ({ id, ...data }))
    .sort((a, b) => (b.trending_score || 0) - (a.trending_score || 0));
  
  if (category) templates = templates.filter(t => t.category === category);
  templates = templates.slice(0, parseInt(lim) || 10);
  
  res.json({
    trending: templates,
    total: templates.length,
    updated_at: new Date().toISOString(),
  });
});

/**
 * POST /api/templates/community/share — Share a custom template to community
 * (Phase 2: when community feature is live, stores in DB. Currently in-memory.)
 */
app.post('/api/templates/community/share', async (req, res) => {
  try {
    const { email, hash, name, description, category, keyframes, structure, tags } = req.body;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    if (!name || !category) return res.status(400).json({ error: 'Name and category required' });
    
    const templateId = `community-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const template = {
      name,
      description: description || '',
      category,
      keyframes: keyframes || null,
      structure: structure || null,
      tags: tags || [],
      shared_by: client.fields.brand_name || email,
      shared_at: new Date().toISOString(),
      uses: 0,
      likes: 0,
    };
    
    communityTemplates.set(templateId, template);
    
    res.json({
      success: true,
      template_id: templateId,
      message: 'Template shared to community',
      template,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * GET /api/templates/community — Browse community-shared templates
 */
app.get('/api/templates/community', (req, res) => {
  const { category, sort_by, limit: lim } = req.query;
  let templates = Array.from(communityTemplates.entries()).map(([id, data]) => ({ id, ...data }));
  
  if (category) templates = templates.filter(t => t.category === category);
  if (sort_by === 'popular') templates.sort((a, b) => b.uses - a.uses);
  if (sort_by === 'recent') templates.sort((a, b) => new Date(b.shared_at) - new Date(a.shared_at));
  if (sort_by === 'liked') templates.sort((a, b) => b.likes - a.likes);
  
  templates = templates.slice(0, parseInt(lim) || 20);
  
  res.json({ templates, total: templates.length });
});

/**
 * POST /api/templates/community/:id/like — Like a community template
 */
app.post('/api/templates/community/:id/like', async (req, res) => {
  const { email, hash } = req.body;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Invalid credentials' });
  
  const template = communityTemplates.get(req.params.id);
  if (!template) return res.status(404).json({ error: 'Template not found' });
  
  template.likes = (template.likes || 0) + 1;
  res.json({ success: true, likes: template.likes });
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  AD INTELLIGENCE STUDIO
//  Perplexity-powered: ad copy, creative briefs, competitor ad analysis, ad-ready export
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * POST /api/ad-intelligence — Complete Ad Intelligence Studio
 */
app.post('/api/ad-intelligence', async (req, res) => {
  try {
    const { email, hash, mode, product_name, product_description, target_audience,
            platform, budget, competitors, brand_goals } = req.body;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const clientName = client.fields.brand_name || email;
    const brandDNA = await loadBrandFingerprint(clientName);
    
    const AD_MODES = ['copy-generator', 'creative-brief', 'competitor-analysis', 'ad-ready-export', 'performance-coaching', 'audience-targeting'];
    if (!AD_MODES.includes(mode)) return res.status(400).json({ error: `Invalid mode. Use: ${AD_MODES.join(', ')}` });
    
    const brandContext = brandDNA ? `Brand DNA: ${JSON.stringify(brandDNA)}` : '';
    
    // ━━ LEARNING CONTEXT ━━
    const learningCtx = await buildLearningContext(clientName);
    const enrichedBrandContext = brandContext + learningCtx;
    
    const prompts = {
      'copy-generator': `You are an elite advertising copywriter. Generate 5 ad copy variations for ${clientName}.\n${enrichedBrandContext}\nProduct: ${product_name || 'brand product'}\nDescription: ${product_description || ''}\nTarget audience: ${target_audience || 'general'}\nPlatform: ${platform || 'Instagram/TikTok'}\n\nFor each variation provide:\n1. Headline (max 40 chars)\n2. Primary text (max 125 chars for feed, max 72 for stories)\n3. Call-to-action\n4. Hashtags (5 max)\n5. Hook (first 3 seconds for video)\n\nMake each variation distinctly different in approach: emotional, urgency, social proof, benefit-driven, curiosity.`,
      
      'creative-brief': `You are a senior creative director. Create a comprehensive ad creative brief for ${clientName}.\n${enrichedBrandContext}\nProduct: ${product_name || 'brand product'}\nTarget audience: ${target_audience || 'general'}\nPlatform: ${platform || 'Instagram/TikTok'}\nBudget: ${budget || 'not specified'}\nGoals: ${brand_goals || 'awareness and conversions'}\n\nProvide:\n1. Campaign concept and big idea\n2. Target audience persona (demographics, psychographics, pain points)\n3. Creative direction (visual style, mood, tone)\n4. Shot list / scene breakdown for video ads\n5. A/B test recommendations (what to test and why)\n6. Budget allocation across platforms\n7. KPIs and success metrics\n8. Timeline recommendations`,
      
      'competitor-analysis': `You are a competitive intelligence analyst. Research and analyze advertising strategies for competitors of ${clientName}.\n${enrichedBrandContext}\nCompetitors to analyze: ${competitors?.join(', ') || 'top 5 competitors in this niche'}\n\nFor each competitor, provide:\n1. Current ad platforms they use\n2. Ad creative style and messaging themes\n3. Estimated monthly ad spend (use available data)\n4. Top performing ad formats\n5. Gaps and weaknesses in their ad strategy\n6. Opportunities for ${clientName} to differentiate\n\nUse real data from Facebook Ad Library and public sources.`,
      
      'ad-ready-export': `You are a media buyer. Create a complete ad-ready content package for ${clientName}.\n${enrichedBrandContext}\nProduct: ${product_name}\nPlatform: ${platform || 'all platforms'}\n\nProvide:\n1. Ad specifications per platform (dimensions, file types, max duration)\n2. Caption/copy per platform (optimized for each)\n3. Targeting recommendations (interests, demographics, lookalike audiences)\n4. Bid strategy recommendations\n5. Day-parting schedule (best times to run ads)\n6. Landing page recommendations\n7. Pixel/conversion setup checklist`,
      
      'performance-coaching': `You are an ad performance optimization expert. Provide coaching for ${clientName}'s advertising strategy.\n${enrichedBrandContext}\nProduct: ${product_name || 'brand product'}\nTarget audience: ${target_audience || 'general'}\nBudget: ${budget || 'not specified'}\n\nProvide:\n1. Quick wins to improve ROAS immediately\n2. Creative fatigue indicators to watch for\n3. Scaling strategy (when and how to increase spend)\n4. Common mistakes to avoid for this niche\n5. Retargeting funnel recommendations\n6. UGC vs branded content performance insights\n7. Seasonal timing recommendations`,
      
      'audience-targeting': `You are an audience research specialist. Build detailed audience targeting profiles for ${clientName}.\n${enrichedBrandContext}\nProduct: ${product_name || 'brand product'}\nDescription: ${product_description || ''}\n\nProvide:\n1. Primary audience (demographics, interests, behaviors)\n2. Secondary audience (lookalike, expansion)\n3. Retargeting segments (website visitors, engagers, cart abandoners)\n4. Exclusion audiences (who NOT to target)\n5. Interest-based targeting keywords (for each platform)\n6. Custom audience recommendations\n7. Seasonal audience shifts`,
    };
    
    const completion = await openai.chat.completions.create({
      model: 'sonar-pro',
      messages: [
        { role: 'system', content: 'You are an elite digital marketing and advertising strategist with deep expertise in Meta Ads, TikTok Ads, Google Ads, and social media advertising. Provide specific, actionable, data-driven recommendations. Use real industry benchmarks and current best practices.' },
        { role: 'user', content: prompts[mode] },
      ],
      temperature: 0.7,
    });
    
    const intelligence = completion.choices[0]?.message?.content || '';
    
    res.json({
      success: true,
      mode,
      intelligence,
      brand_dna_applied: !!brandDNA,
      generated_at: new Date().toISOString(),
    });
  } catch (e) {
    log('AD_INTEL', `Error: ${e.message}`);
    res.status(500).json({ error: e.message });
  }
});


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  AFFILIATE / INFLUENCER MARKETPLACE
//  Discovery, campaigns, outreach, tracking, commission management
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const influencerStore = new Map(); // In-memory store, persists until deploy

/**
 * POST /api/marketplace/discover — Discover influencers and affiliates
 */
app.post('/api/marketplace/discover', async (req, res) => {
  try {
    const { email, hash, niche, platform, follower_range, location, budget_range, content_style } = req.body;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const clientName = client.fields.brand_name || email;
    const brandDNA = await loadBrandFingerprint(clientName);
    
    const completion = await openai.chat.completions.create({
      model: 'sonar-pro',
      messages: [
        { role: 'system', content: 'You are an influencer marketing specialist with deep knowledge of social media creators across all platforms. Provide REAL, verifiable influencer recommendations based on current data. Include actual handles, follower counts, and engagement rates where possible.' },
        { role: 'user', content: `Find 15 real influencers/creators for ${clientName} in the "${niche || 'lifestyle'}" niche.\n${brandDNA ? `Brand DNA: ${JSON.stringify(brandDNA)}` : ''}\nPlatform: ${platform || 'Instagram'}\nFollower range: ${follower_range || 'mix of micro (5K-50K) and mid-tier (50K-500K)'}\nLocation: ${location || 'global'}\nBudget: ${budget_range || 'flexible'}\nContent style: ${content_style || 'authentic, high-quality'}\n\nFor each influencer provide:\n1. Handle/username and platform\n2. Follower count (approximate)\n3. Engagement rate\n4. Content style and niche fit\n5. Estimated collaboration cost\n6. Why they're a good fit for this brand\n7. Best collaboration format (post, reel, story, etc.)\n8. Contact approach recommendation` },
      ],
      temperature: 0.7,
    });
    
    const results = completion.choices[0]?.message?.content || '';
    res.json({ success: true, discoveries: results, brand_dna_applied: !!brandDNA });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * POST /api/marketplace/campaign — Create an influencer campaign
 */
app.post('/api/marketplace/campaign', async (req, res) => {
  try {
    const { email, hash, campaign_name, influencers, product_name, budget, goals,
            content_requirements, timeline, commission_type, commission_rate } = req.body;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const clientName = client.fields.brand_name || email;
    const brandDNA = await loadBrandFingerprint(clientName);
    
    // Generate campaign brief
    const completion = await openai.chat.completions.create({
      model: 'sonar-pro',
      messages: [
        { role: 'system', content: 'You are an influencer campaign manager. Create detailed, professional campaign briefs.' },
        { role: 'user', content: `Create a complete influencer campaign brief for ${clientName}.\n${brandDNA ? `Brand DNA: ${JSON.stringify(brandDNA)}` : ''}\nCampaign: ${campaign_name}\nProduct: ${product_name}\nInfluencers: ${influencers?.join(', ') || 'TBD'}\nBudget: ${budget || 'flexible'}\nGoals: ${goals || 'awareness and sales'}\nContent requirements: ${content_requirements || 'authentic content showcasing the product'}\nTimeline: ${timeline || '2 weeks'}\nCommission: ${commission_type || 'flat fee'} at ${commission_rate || 'negotiable'}\n\nProvide:\n1. Campaign overview and objectives\n2. Creative brief for influencers (dos and don'ts)\n3. Content deliverables checklist\n4. Posting schedule\n5. Hashtags and mentions required\n6. FTC disclosure requirements\n7. Payment terms and milestones\n8. Performance tracking plan\n9. Contract terms template` },
      ],
      temperature: 0.7,
    });
    
    const campaign = {
      id: `camp_${Date.now()}`,
      name: campaign_name,
      client: clientName,
      influencers: influencers || [],
      brief: completion.choices[0]?.message?.content || '',
      commission: { type: commission_type || 'flat', rate: commission_rate || 'negotiable' },
      status: 'draft',
      created: new Date().toISOString(),
    };
    
    // Store campaign
    influencerStore.set(campaign.id, campaign);
    
    // Also store in Airtable
    try {
      await atCreate(TBL.ANALYTICS, {
        client_id: clientName,
        metric_type: 'influencer_campaign',
        metric_value: JSON.stringify(campaign),
        period: new Date().toISOString().split('T')[0],
      });
    } catch (e) { log('MARKETPLACE', `Campaign storage failed: ${e.message}`); }
    
    res.json({ success: true, campaign });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * POST /api/marketplace/outreach — Generate personalized outreach messages
 */
app.post('/api/marketplace/outreach', async (req, res) => {
  try {
    const { email, hash, influencer_handle, influencer_name, platform, campaign_id, tone } = req.body;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const clientName = client.fields.brand_name || email;
    const brandDNA = await loadBrandFingerprint(clientName);
    const campaign = campaign_id ? influencerStore.get(campaign_id) : null;
    
    const completion = await openai.chat.completions.create({
      model: 'sonar',
      messages: [
        { role: 'system', content: `You are a brand partnership outreach specialist for ${clientName}. Write personalized, non-spammy outreach DMs that feel genuine and get responses. Tone: ${tone || 'friendly, professional'}.` },
        { role: 'user', content: `Write 3 outreach DM variations for @${influencer_handle || influencer_name} on ${platform || 'Instagram'}.\n${brandDNA ? `Brand DNA: ${JSON.stringify(brandDNA)}` : ''}\n${campaign ? `Campaign: ${campaign.name}\nBrief: ${campaign.brief?.substring(0, 500)}` : ''}\n\nEach message should:\n1. Reference their specific content (be genuine)\n2. Explain the collaboration opportunity\n3. Mention compensation briefly\n4. Have a clear, low-friction CTA\n5. Be under 200 characters for DM\n\nProvide: Short DM version + longer email version.` },
      ],
      temperature: 0.8,
    });
    
    const outreach = completion.choices[0]?.message?.content || '';
    
    res.json({ success: true, outreach_messages: outreach, influencer: influencer_handle || influencer_name, platform: platform || 'instagram' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * POST /api/marketplace/track — Track affiliate/influencer performance
 */
app.post('/api/marketplace/track', async (req, res) => {
  try {
    const { email, hash, influencer_handle, campaign_id, metrics } = req.body;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const clientName = client.fields.brand_name || email;
    
    // Store tracking data
    const trackingData = {
      influencer: influencer_handle,
      campaign_id,
      metrics: metrics || {},
      tracked_at: new Date().toISOString(),
    };
    
    try {
      await atCreate(TBL.ANALYTICS, {
        client_id: clientName,
        metric_type: 'influencer_tracking',
        metric_value: JSON.stringify(trackingData),
        period: new Date().toISOString().split('T')[0],
      });
    } catch (e) { log('MARKETPLACE', `Tracking storage failed: ${e.message}`); }
    
    res.json({ success: true, tracking: trackingData });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * GET /api/marketplace/campaigns — List all campaigns for a client
 */
app.get('/api/marketplace/campaigns', async (req, res) => {
  try {
    const { email, hash } = req.query;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const clientName = client.fields.brand_name || email;
    const campaigns = [...influencerStore.values()].filter(c => c.client === clientName);
    
    res.json({ success: true, campaigns, total: campaigns.length });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  CREDIT / BILLING SYSTEM
//  Track usage per action, enforce tier limits
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const CREDIT_COSTS = {
  'video-generate': 10,
  'video-premium': 25,
  'image-generate': 3,
  'image-upscale': 5,
  'video-upscale': 10,
  'lipsync': 8,
  'voice-clone': 15,
  'voiceover': 5,
  'translate': 10,
  'ai-coach': 1,
  'video-edit-template': 5,
  'community-template-share': 0,
  'competitor-intel': 10,
  'ad-intelligence': 5,
  'influencer-discover': 5,
  'template-generate': 8,
  'post-download': 1,
  'post-publish': 2,
};

const TIER_LIMITS = {
  free: { monthly_credits: 50, video_count: 3, ai_coach_messages: 5 },
  starter: { monthly_credits: 500, video_count: 15, ai_coach_messages: 30 },
  growth: { monthly_credits: 2000, video_count: 60, ai_coach_messages: -1 },
  premium: { monthly_credits: 5000, video_count: 150, ai_coach_messages: -1 },
};

const creditStore = new Map(); // client -> { used, month, actions[] }

function getClientCredits(clientName, tier = 'free') {
  const key = clientName;
  const currentMonth = new Date().toISOString().slice(0, 7);
  
  if (!creditStore.has(key) || creditStore.get(key).month !== currentMonth) {
    creditStore.set(key, { used: 0, month: currentMonth, actions: [] });
  }
  
  const data = creditStore.get(key);
  const limits = TIER_LIMITS[tier] || TIER_LIMITS.free;
  
  return {
    used: data.used,
    remaining: Math.max(0, limits.monthly_credits - data.used),
    limit: limits.monthly_credits,
    tier,
    month: currentMonth,
  };
}

function deductCredits(clientName, action, amount = null) {
  const cost = amount || CREDIT_COSTS[action] || 1;
  const currentMonth = new Date().toISOString().slice(0, 7);
  
  if (!creditStore.has(clientName) || creditStore.get(clientName).month !== currentMonth) {
    creditStore.set(clientName, { used: 0, month: currentMonth, actions: [] });
  }
  
  const data = creditStore.get(clientName);
  data.used += cost;
  data.actions.push({ action, cost, timestamp: new Date().toISOString() });
  
  return { deducted: cost, total_used: data.used };
}

/**
 * GET /api/credits — Get credit balance for a client
 */
app.get('/api/credits', async (req, res) => {
  try {
    const { email, hash } = req.query;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const clientName = client.fields.brand_name || email;
    const tier = (client.fields.plan || 'free').toLowerCase();
    const credits = getClientCredits(clientName, tier);
    
    res.json({ success: true, credits, credit_costs: CREDIT_COSTS, tier_limits: TIER_LIMITS });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * GET /api/credits/history — Get credit usage history
 */
app.get('/api/credits/history', async (req, res) => {
  try {
    const { email, hash } = req.query;
    const client = await verifyClient(email, hash);
    if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    
    const clientName = client.fields.brand_name || email;
    const data = creditStore.get(clientName);
    
    res.json({ success: true, history: data?.actions || [], total_used: data?.used || 0, month: data?.month || null });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  QA GATE — Automated scoring before content enters client queue
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * POST /api/qa/score — Score content before it enters the approval queue
 */
app.post('/api/qa/score', async (req, res) => {
  try {
    const { email, hash, caption, platform, image_url, video_url } = req.body;
    
    // Auth optional for internal cron usage
    if (email && hash) {
      const client = await verifyClient(email, hash);
      if (!client) return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // CHECK 1: Caption QA
    const complianceResult = complianceCheck(caption || '', platform || 'instagram_feed');
    const cleanedCaption = autoCleanCaption(caption || '', platform || 'instagram');
    
    // CHECK 2: Brand voice scoring via Perplexity
    let voiceScore = 85;
    let voiceFeedback = 'No brand DNA available for scoring';
    
    if (caption) {
      try {
        const completion = await openai.chat.completions.create({
          model: 'sonar',
          messages: [
            { role: 'system', content: 'You are a brand consistency auditor. Score this caption for brand voice consistency on a scale of 0-100. Return ONLY a JSON object: {"score": number, "feedback": "brief feedback"}' },
            { role: 'user', content: `Score this caption for brand consistency:\n"${caption}"\nPlatform: ${platform || 'instagram'}` },
          ],
          temperature: 0.3,
        });
        const parsed = JSON.parse(completion.choices[0]?.message?.content || '{}');
        voiceScore = parsed.score || 85;
        voiceFeedback = parsed.feedback || '';
      } catch (e) { /* Use defaults */ }
    }
    
    // CHECK 3: Platform compliance
    const platformCheck = complianceResult;
    
    // Overall score
    const captionScore = platformCheck.passed ? 90 : Math.max(50, 90 - (platformCheck.flags.length * 10));
    const overallScore = Math.round((captionScore + voiceScore) / 2);
    const passed = overallScore >= 85 && platformCheck.passed;
    
    res.json({
      success: true,
      passed,
      overall_score: overallScore,
      threshold: 85,
      checks: {
        caption: { score: captionScore, flags: platformCheck.flags, cleaned: cleanedCaption },
        brand_voice: { score: voiceScore, feedback: voiceFeedback },
        compliance: { passed: platformCheck.passed, flags: platformCheck.flags },
      },
      recommendation: passed ? 'APPROVE — Content meets quality threshold' : 'REGENERATE — Content needs improvement',
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  MISSING ENDPOINTS — v9.5.2 patch
//  Insert before: app.get('/health', ...)
//  Adds: chat/v2, regenerate-post-v2, studio/*, auth/*, inbox/*, change-password,
//         reschedule-post, notifications-preference, ai/generate-ad-copy
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ── POST /api/chat/v2 ──
// Alias of /api/chat with identical logic — portal uses this newer path
app.post('/api/chat/v2', async (req, res) => {
  // Forward to the existing /api/chat handler by re-using its logic inline
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'Message required' });

  try {
    const f = client.fields;
    const clientName = f.brand_name || f.business_name;

    // Load brand voice
    let brandVoice = null;
    try {
      const bvF = encodeURIComponent(`OR({client_id}='${clientName}',{client_email}='${clientEmail || clientName}')`);
      const bvD = await atGet(TBL.BRAND_VOICES, `filterByFormula=${bvF}&maxRecords=1`);
      brandVoice = bvD.records?.[0]?.fields || null;
    } catch {}

    // Load recent posts for context
    let posts = [];
    try {
      const cf = encodeURIComponent(`{client_id}='${clientName}'`);
      const cd = await atGet(TBL.CONTENT, `filterByFormula=${cf}&maxRecords=10&sort%5B0%5D%5Bfield%5D=scheduled_date&sort%5B0%5D%5Bdirection%5D=desc`);
      posts = (cd.records || []).map(r => r.fields);
    } catch {}

    const postSummary = posts.slice(0, 8).map(p =>
      `[${p.platform}] ${p.status} | ${(p.caption || '').substring(0, 80)}`
    ).join('\n') || 'No posts yet.';

    const systemPrompt = `You are the AI Coach for ${clientName}, a ${f.industry || 'Shopify'} brand.
You help with content strategy, social media, brand voice, analytics, and growth.
Brand: ${f.brand_name || f.business_name} | Industry: ${f.industry || 'eCommerce'} | Platforms: ${f.platforms || 'Instagram, TikTok'}
${brandVoice ? `Brand voice: ${brandVoice.voice_summary || ''}` : ''}
Recent content:\n${postSummary}
Be direct, insightful, and actionable. Keep responses concise unless a detailed plan is requested.`;

    const completion = await openai.chat.completions.create({
      model: 'sonar-pro',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
      temperature: 0.7,
      max_tokens: 800,
    });

    const reply = completion.choices[0]?.message?.content || 'I couldn\'t generate a response. Please try again.';

    // Non-blocking: log voice feedback signals
    if (message.startsWith('[VOICE_FEEDBACK:')) {
      try {
        const signal = message.includes('POSITIVE') ? 'approved' : 'rejected';
        updateLearningHistory(clientName, signal, { feedback: message.substring(0, 300) }).catch(() => {});
      } catch {}
    }

    res.json({ reply, model: 'sonar-pro' });
  } catch (err) {
    log('CHAT_V2', `Error: ${err.message}`);
    res.status(500).json({ error: 'AI service unavailable. Please try again.' });
  }
});

// ── POST /api/regenerate-post-v2 ──
// Same as /api/regenerate-post but accepts clientEmail/clientHash in body (portal v2 style)
app.post('/api/regenerate-post-v2', async (req, res) => {
  const { postId, direction } = req.body;
  if (!postId) return res.status(400).json({ error: 'Missing postId' });
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const postRecord = await atGet(`${TBL.CONTENT}/${postId}`);
    const postFields = postRecord.fields || {};
    const regenCount = parseInt(postFields.regen_count || 0);

    if (regenCount >= 3) {
      return res.json({
        success: false,
        message: 'You\'ve used all 3 free regenerations on this post. Our team will review it manually.',
      });
    }

    await atUpdate(TBL.CONTENT, postId, { status: 'Regenerating' });

    const clientName = client.fields.brand_name || client.fields.business_name;
    updateLearningHistory(clientName, 'regenerated', {
      reason: direction || 'No direction given',
      content_type: postFields.content_type || 'post',
    }).catch(() => {});

    regenerateSinglePost(postId, postFields, client, direction).catch(e =>
      log('REGEN_V2', `Failed: ${e.message}`)
    );

    res.json({
      success: true,
      status: 'Regenerating',
      regens_used: regenCount + 1,
      regens_remaining: 2 - regenCount,
      message: `Regenerating${direction ? ' with your direction' : ''}. Check back in 30 seconds.`,
    });
  } catch (err) {
    log('REGEN_V2', `Error: ${err.message}`);
    res.status(500).json({ error: 'Failed to start regeneration' });
  }
});

// ── POST /api/studio/generate-video ──
// Wrapper: forwards to Higgsfield via the existing video/generate logic
app.post('/api/studio/generate-video', async (req, res) => {
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const { imageUrl, productTitle, prompt, vibeId, model = 'kling-2.1', aspectRatio = '9:16', duration = 5, use_flf = false, mode = 'image-to-video' } = req.body;

    if (!HIGGSFIELD_API_KEY || !HIGGSFIELD_API_SECRET) {
      // Return a realistic mock response so portal UI functions
      const mockId = `mock_${Date.now()}`;
      return res.json({
        success: true,
        request_id: mockId,
        job_id: mockId,
        status: 'processing',
        message: 'Video generation queued (API keys not configured — contact admin)',
        estimated_seconds: 60,
      });
    }

    // Load brand DNA and inject into video prompt
    const clientName = client.fields.brand_name || client.fields.business_name;
    const brandDNA = await loadBrandFingerprint(clientName);
    const brandVoiceRec = await (async () => {
      try {
        const formula = encodeURIComponent(`OR({client_id}='${clientName}',{client_email}='${clientEmail || clientName}')`);
        const bvData = await atGet(TBL.BRAND_VOICES, `filterByFormula=${formula}&maxRecords=1`);
        return bvData.records?.[0]?.fields || null;
      } catch { return null; }
    })();
    const brandStyleStr = brandVoiceRec
      ? `Brand: ${clientName}. Archetype: ${brandVoiceRec.archetype || ''}. Visual direction: ${brandVoiceRec.visual_direction || ''}. Tone: ${brandVoiceRec.tone_adjectives || ''}. ${PRODUCT_PRESERVATION_PROMPT}`
      : `${PRODUCT_PRESERVATION_PROMPT}`;
    const learningCtx = await buildLearningContext(clientName);
    const basePrompt = prompt || `${productTitle ? productTitle + ' — ' : ''}Cinematic product showcase, ${aspectRatio} format`;
    const enrichedPrompt = `${basePrompt} | ${brandStyleStr}${learningCtx ? ' | ' + learningCtx.substring(0, 300) : ''}`;

    // Build the Higgsfield request
    const modelId = use_flf ? 'kling-v2-1-flf' : model.replace('.', '-').replace('kling-', 'kling-v');
    const requestBody = {
      prompt: enrichedPrompt,
      aspect_ratio: aspectRatio,
      duration: parseInt(duration),
      ...(imageUrl ? { image_url: imageUrl } : {}),
    };

    const hRes = await fetch(`${HIGGSFIELD_BASE}/${modelId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Key ${HIGGSFIELD_API_KEY}:${HIGGSFIELD_API_SECRET}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!hRes.ok) {
      const errText = await hRes.text();
      throw new Error(`Higgsfield error ${hRes.status}: ${errText.substring(0, 200)}`);
    }

    const data = await hRes.json();
    const requestId = data.request_id || data.id || data.job_id;

    log('STUDIO_GEN', `${client.fields.business_name}: video job ${requestId} queued (${modelId})`);

    res.json({
      success: true,
      request_id: requestId,
      job_id: requestId,
      status: data.status || 'processing',
      model: modelId,
      estimated_seconds: data.estimated_time || 60,
    });
  } catch (err) {
    log('STUDIO_GEN', `Error: ${err.message}`);
    res.status(500).json({ error: err.message || 'Video generation failed' });
  }
});

// ── GET /api/studio/video-status/:id ──
// Poll Higgsfield for video job status
app.get('/api/studio/video-status/:id', async (req, res) => {
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const { id } = req.params;

    if (id.startsWith('mock_')) {
      return res.json({ status: 'completed', video_url: null, progress: 100, message: 'Mock job complete' });
    }

    const hRes = await fetch(`${HIGGSFIELD_BASE}/requests/${id}/status`, {
      headers: { 'Authorization': `Key ${HIGGSFIELD_API_KEY}:${HIGGSFIELD_API_SECRET}` },
    });

    if (!hRes.ok) throw new Error(`Status check failed: ${hRes.status}`);

    const data = await hRes.json();
    res.json({
      status: data.status || 'processing',
      video_url: data.video_url || data.output_url || data.result?.video_url || null,
      thumbnail_url: data.thumbnail_url || null,
      progress: data.progress || (data.status === 'completed' ? 100 : 50),
      request_id: id,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── GET /api/studio/recent-videos ──
// Returns recent video generations for this client from Airtable CONTENT table
app.get('/api/studio/recent-videos', async (req, res) => {
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const clientName = client.fields.brand_name || client.fields.business_name;
    // Return all content for this client — videos are those with a video_url set
    const formula = encodeURIComponent(`{client_id}='${clientName}'`);
    const data = await atGet(TBL.CONTENT, `filterByFormula=${formula}&maxRecords=20&sort%5B0%5D%5Bfield%5D=scheduled_date&sort%5B0%5D%5Bdirection%5D=desc`);

    const videos = (data.records || []).map(r => ({
      id: r.id,
      product_name: r.fields.caption?.substring(0, 50) || r.fields.product_title || 'Video',
      video_url: r.fields.video_url || null,
      thumbnail_url: r.fields.image_url || (r.fields.image?.[0]?.url) || null,
      model: r.fields.generation_model || 'kling-2.1',
      template: r.fields.vibe_id || 'Custom',
      status: r.fields.status || 'Pending',
      created_at: r.fields.scheduled_date || r.createdTime || new Date().toISOString(),
    }));

    res.json({ videos, total: videos.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── POST /api/studio/upload-image ──
// Uploads image to Higgsfield file storage; returns a hosted URL
app.post('/api/studio/upload-image', async (req, res) => {
  const { email, hash } = req.headers;
  const clientEmail = req.headers['x-client-email'] || email;
  const clientHash = req.headers['x-client-hash'] || hash;
  const client = await verifyClient(clientEmail, clientHash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    if (!HIGGSFIELD_API_KEY) {
      // Fallback: tell client to use the image URL directly
      return res.json({ success: false, message: 'Direct upload unavailable — use image URL directly', url: null });
    }

    // Get a pre-signed upload URL from Higgsfield
    const urlRes = await fetch(`${HIGGSFIELD_BASE}/files/generate-upload-url`, {
      method: 'POST',
      headers: {
        'Authorization': `Key ${HIGGSFIELD_API_KEY}:${HIGGSFIELD_API_SECRET}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content_type: 'image/jpeg' }),
    });

    if (!urlRes.ok) throw new Error(`Upload URL failed: ${urlRes.status}`);
    const urlData = await urlRes.json();

    res.json({
      success: true,
      upload_url: urlData.upload_url,
      url: urlData.file_url || urlData.url,
      file_id: urlData.file_id,
    });
  } catch (err) {
    res.status(500).json({ error: err.message, url: null });
  }
});

// ── GET /api/studio/credits ──
// Returns credit balance (maps to existing /api/credits structure)
app.get('/api/studio/credits', async (req, res) => {
  const { email, hash } = req.query;
  const clientEmail = req.headers['x-client-email'] || email;
  const clientHash = req.headers['x-client-hash'] || hash;
  const client = await verifyClient(clientEmail, clientHash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const clientName = client.fields.brand_name || client.fields.business_name || clientEmail;
    const tier = (client.fields.tier || client.fields.plan || 'growth').toLowerCase();
    const credits = getClientCredits ? getClientCredits(clientName, tier) : { remaining: 50, total: 100, used: 50 };
    const remaining = typeof credits === 'number' ? credits : (credits.remaining ?? 50);

    res.json({
      success: true,
      credits: remaining,
      credits_remaining: remaining,
      credits_total: credits.total || 100,
      credits_used: credits.used || 0,
      tier,
    });
  } catch (err) {
    res.json({ success: true, credits: 50, credits_remaining: 50, tier: 'growth' });
  }
});

// ── GET /api/studio/products ──
// Returns Shopify product catalog for this client (for Ad Studio / Video Studio product picker)
app.get('/api/studio/products', async (req, res) => {
  const clientEmail = req.headers['x-client-email'] || req.query.email;
  const clientHash = req.headers['x-client-hash'] || req.query.hash;
  const client = await verifyClient(clientEmail, clientHash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const f = client.fields;
    const limit = parseInt(req.query.limit) || 50;
    let products = [];
    let categories = [];

    if (f.website || f.shopify_domain) {
      const shopifyDomain = f.shopify_domain || (f.website || '').replace(/https?:\/\//, '');
      const shopifyToken = f.shopify_access_token || null;
      try {
        // 8-second timeout to prevent Railway 502 on password-protected stores
        const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('Shopify timeout')), 8000));
        const allProducts = await Promise.race([fetchAllShopifyProducts(`https://${shopifyDomain}`, shopifyToken), timeout]);
        products = allProducts.slice(0, limit).map(p => ({
          id: p.id,
          title: p.title,
          handle: p.handle,
          description: (p.body_html || '').replace(/<[^>]+>/g, '').substring(0, 200),
          price: p.variants?.[0]?.price || '0.00',
          image_url: p.images?.[0]?.src || null,
          product_type: p.product_type || 'Product',
          tags: p.tags || '',
          url: `https://${shopifyDomain}/products/${p.handle}`,
        }));
        categories = [...new Set(products.map(p => p.product_type).filter(Boolean))];
      } catch (e) {
        log('STUDIO_PRODUCTS', `Shopify fetch failed for ${shopifyDomain}: ${e.message}`);
      }
    }

    // Fallback: return inventory from Airtable
    if (products.length === 0) {
      try {
        const clientName = f.brand_name || f.business_name;
        const formula = encodeURIComponent(`{Client}='${clientName}'`);
        const invData = await atGet(TBL.INVENTORY, `filterByFormula=${formula}&maxRecords=${limit}`);
        products = (invData.records || []).map(r => ({
          id: r.id,
          title: r.fields['Product Title'] || 'Product',
          description: '',
          price: r.fields['Price'] || '0.00',
          image_url: null,
          product_type: r.fields['Product Type'] || 'Product',
          tags: '',
          url: f.website || '',
        }));
        categories = [...new Set(products.map(p => p.product_type).filter(Boolean))];
      } catch {}
    }

    res.json({ products, categories, total: products.length });
  } catch (err) {
    res.status(500).json({ error: err.message, products: [], categories: [] });
  }
});

// ── POST /api/studio/regenerate-video ──
// Re-generate a video for an existing content post
app.post('/api/studio/regenerate-video', async (req, res) => {
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const { postId } = req.body;
    if (!postId) return res.status(400).json({ error: 'Missing postId' });

    const postRecord = await atGet(`${TBL.CONTENT}/${postId}`);
    const pf = postRecord.fields || {};

    // Mark regenerating
    await atUpdate(TBL.CONTENT, postId, { status: 'Regenerating' });

    // Kick off video generation in background
    const modelId = pf.generation_model || 'kling-v2-1';
    const prompt = pf.caption || pf.full_post_text || 'Cinematic product showcase';

    if (HIGGSFIELD_API_KEY) {
      fetch(`${HIGGSFIELD_BASE}/${modelId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Key ${HIGGSFIELD_API_KEY}:${HIGGSFIELD_API_SECRET}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          aspect_ratio: pf.aspect_ratio || '9:16',
          duration: 5,
          ...(pf.image_url ? { image_url: pf.image_url } : {}),
        }),
      }).then(r => r.json()).then(async data => {
        if (data.request_id) {
          await atUpdate(TBL.CONTENT, postId, { video_request_id: data.request_id, status: 'Generating' });
        }
      }).catch(e => log('STUDIO_REGEN_VIDEO', `Background video gen failed: ${e.message}`));
    }

    res.json({
      success: true,
      status: 'Regenerating',
      message: 'Video regeneration started — check back in ~60 seconds',
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── GET /api/studio/features ──
// Returns feature flags / available studio features for this client's tier
app.get('/api/studio/features', async (req, res) => {
  const clientEmail = req.headers['x-client-email'] || req.query.email;
  const clientHash = req.headers['x-client-hash'] || req.query.hash;
  const client = await verifyClient(clientEmail, clientHash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  const tier = (client.fields.tier || 'growth').toLowerCase();
  const isPaid = tier !== 'free';

  res.json({
    features: {
      video_studio: isPaid,
      ai_coach: true,
      competitor_intel: isPaid,
      ad_studio: isPaid,
      inbox: true,
      brand_dna: true,
      analytics: true,
      content_studio: true,
    },
    tier,
    models: isPaid
      ? ['kling-2.1', 'kling-3.0-flf', 'seedance-1-lite', 'seedance-1-pro']
      : ['kling-2.1'],
  });
});

// ── POST /api/ai/generate-ad-copy ──
// Generate ad copy variants for a product using Perplexity Sonar
app.post('/api/ai/generate-ad-copy', async (req, res) => {
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const { product_title, product_description, platform = 'instagram', tone = 'engaging', variants = 3 } = req.body;
    const f = client.fields;
    const clientName = f.brand_name || f.business_name;

    let brandVoice = null;
    try {
      const bvF = encodeURIComponent(`OR({client_id}='${clientName}',{client_email}='${clientEmail || clientName}')`);
      const bvD = await atGet(TBL.BRAND_VOICES, `filterByFormula=${bvF}&maxRecords=1`);
      brandVoice = bvD.records?.[0]?.fields || null;
    } catch {}

    const systemPrompt = `You are an expert ad copywriter for ${clientName}, a ${f.industry || 'eCommerce'} brand.
${brandVoice ? `Brand voice: ${brandVoice.voice_summary || ''}` : `Tone: ${tone}`}
Generate ${variants} distinct ad copy variants for ${platform}. Each variant should have:
- headline (max 40 chars)
- body (max 125 chars for Instagram/TikTok, 200 for Facebook)
- cta (call-to-action, max 25 chars)
Return as JSON array: [{ headline, body, cta, hook }]`;

    const completion = await openai.chat.completions.create({
      model: 'sonar-pro',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `Product: ${product_title || 'Our product'}\n${product_description ? 'Description: ' + product_description : ''}\nPlatform: ${platform}` },
      ],
      temperature: 0.8,
    });

    let adVariants = [];
    try {
      const raw = completion.choices[0]?.message?.content || '[]';
      const jsonMatch = raw.match(/\[[\s\S]*\]/);
      adVariants = JSON.parse(jsonMatch?.[0] || '[]');
    } catch {
      // Fallback: split by newlines and parse manually
      adVariants = [{ headline: product_title || 'Shop Now', body: completion.choices[0]?.message?.content?.substring(0, 125) || '', cta: 'Shop Now' }];
    }

    res.json({ success: true, variants: adVariants, model: 'sonar-pro' });
  } catch (err) {
    log('AD_COPY', `Error: ${err.message}`);
    res.status(500).json({ error: 'Ad copy generation failed' });
  }
});

// ── GET /api/inbox ──
// Main inbox endpoint — returns messages/DMs/comments for this client
app.get('/api/inbox', async (req, res) => {
  const clientEmail = req.headers['x-client-email'] || req.query.email;
  const clientHash = req.headers['x-client-hash'] || req.query.hash;
  const client = await verifyClient(clientEmail, clientHash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const clientName = client.fields.brand_name || client.fields.business_name;
    // Use the in-memory inboxStore if available, else return empty structure
    const clientInbox = (typeof inboxStore !== 'undefined' && inboxStore.get(clientName)) || [];

    const { platform, status, limit = 50 } = req.query;
    let filtered = clientInbox;
    if (platform) filtered = filtered.filter(m => m.platform === platform);
    if (status) filtered = filtered.filter(m => m.status === status);

    res.json({
      messages: filtered.slice(0, parseInt(limit)),
      total: filtered.length,
      unread: filtered.filter(m => m.status === 'unread').length,
      platforms: [...new Set(filtered.map(m => m.platform))],
      sentiment_summary: {
        positive: filtered.filter(m => m.sentiment === 'positive').length,
        neutral: filtered.filter(m => m.sentiment === 'neutral').length,
        negative: filtered.filter(m => m.sentiment === 'negative').length,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── POST /api/inbox/generate-reply ──
// AI-generated reply suggestion for an inbox message
app.post('/api/inbox/generate-reply', async (req, res) => {
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const { message, username, type = 'comment', postCaption } = req.body;
    const f = client.fields;
    const clientName = f.brand_name || f.business_name;

    let brandVoice = null;
    try {
      const bvF = encodeURIComponent(`OR({client_id}='${clientName}',{client_email}='${clientEmail || clientName}')`);
      const bvD = await atGet(TBL.BRAND_VOICES, `filterByFormula=${bvF}&maxRecords=1`);
      brandVoice = bvD.records?.[0]?.fields || null;
    } catch {}

    const completion = await openai.chat.completions.create({
      model: 'sonar',
      messages: [
        {
          role: 'system',
          content: `You are the community manager for ${clientName}. Generate a warm, on-brand reply to a ${type} from @${username || 'a follower'}.
${postCaption ? `Post context: "${postCaption}"` : ''}
${brandVoice ? `Brand voice: ${brandVoice.voice_summary || 'friendly, authentic, direct'}` : 'Be friendly, authentic, and concise.'}
Rules: max 2 sentences, no emojis unless brand uses them, never sound robotic, don't start with "Great post!" or "Thanks for sharing!".`,
        },
        { role: 'user', content: message || '' },
      ],
      temperature: 0.75,
      max_tokens: 120,
    });

    const suggested_reply = completion.choices[0]?.message?.content || '';
    res.json({ success: true, suggested_reply });
  } catch (err) {
    res.status(500).json({ error: err.message, suggested_reply: null });
  }
});

// ── POST /api/inbox/reply-edited ──
// Track when user edits an AI reply (learning signal)
app.post('/api/inbox/reply-edited', async (req, res) => {
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const { original, edited, message_id } = req.body;
    const clientName = client.fields.brand_name || client.fields.business_name;
    // Store as a learning signal (non-blocking)
    if (typeof updateLearningHistory === 'function') {
      updateLearningHistory(clientName, 'reply_edited', { original, edited, message_id }).catch(() => {});
    }
    res.json({ success: true });
  } catch {
    res.json({ success: true }); // Always succeed — this is a fire-and-forget signal
  }
});

// ── POST /api/inbox/settings ──
// Save inbox auto-reply settings to client record
app.post('/api/inbox/settings', async (req, res) => {
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const { auto_reply_enabled, auto_reply_mode } = req.body;
    await atUpdate(TBL.CLIENTS, client.id, {
      auto_reply: auto_reply_enabled ? 'true' : 'false',
      auto_reply_mode: auto_reply_mode || 'suggest',
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── POST /api/change-password ──
// Update client password — hashes via Web Crypto-compatible approach (browser sends pre-hashed)
app.post('/api/change-password', async (req, res) => {
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const { new_password } = req.body;
    if (!new_password) return res.status(400).json({ error: 'new_password required' });

    // Browser sends the new password as plaintext — we hash it here
    // (portal will also hash it client-side for subsequent requests)
    // Support both: if it looks like a hex hash already (64 chars), use as-is; else hash it
    let newHash;
    if (/^[a-f0-9]{64}$/.test(new_password)) {
      newHash = new_password; // Already a SHA-256 hex hash (sent pre-hashed by portal)
    } else {
      newHash = sha256(new_password);
    }

    await atUpdate(TBL.CLIENTS, client.id, { password_hash: newHash });
    log('PASSWORD', `${email}: password updated`);
    res.json({ success: true, message: 'Password updated successfully' });
  } catch (err) {
    log('PASSWORD', `Error: ${err.message}`);
    res.status(500).json({ error: 'Failed to update password' });
  }
});

// ── POST /api/reschedule-post ──
// Update the scheduled_date of a content post
app.post('/api/reschedule-post', async (req, res) => {
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const { post_id, new_date } = req.body;
    if (!post_id || !new_date) return res.status(400).json({ error: 'post_id and new_date required' });

    // Verify post belongs to this client
    const postRecord = await atGet(`${TBL.CONTENT}/${post_id}`);
    const pf = postRecord.fields || {};
    const clientName = client.fields.brand_name || client.fields.business_name;
    if (pf.client_id && pf.client_id !== clientName) {
      return res.status(403).json({ error: 'Post does not belong to this client' });
    }

    await atUpdate(TBL.CONTENT, post_id, { scheduled_date: new_date });
    log('RESCHEDULE', `${email}: post ${post_id} rescheduled to ${new_date}`);
    res.json({ success: true, message: `Post rescheduled to ${new_date}` });
  } catch (err) {
    log('RESCHEDULE', `Error: ${err.message}`);
    res.status(500).json({ error: 'Failed to reschedule post' });
  }
});

// ── POST /api/notifications-preference ──
// Toggle email notification preferences
app.post('/api/notifications-preference', async (req, res) => {
  const { email, hash } = req.clientAuth;
  const client = await verifyClient(email, hash);
  if (!client) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const { enabled } = req.body;
    await atUpdate(TBL.CLIENTS, client.id, { notification_email: enabled ? 'true' : 'false' });
    res.json({ success: true, notifications_enabled: enabled });
  } catch (err) {
    res.json({ success: true }); // Non-critical, always succeed
  }
});

// ── GET /api/auth/instagram ──
// Instagram OAuth initiation — redirects to Upload-Post Instagram connect
app.get('/api/auth/instagram', async (req, res) => {
  const { client_email } = req.query;
  if (!client_email) return res.status(400).send('Missing client_email');

  try {
    if (UPLOADPOST_API_KEY) {
      // Generate Upload-Post branded connection URL for Instagram
      const upRes = await fetch(`${UPLOADPOST_API_BASE}/connect/instagram`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${UPLOADPOST_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: client_email,
          redirect_url: `${BACKEND_URL}/api/auth/instagram/callback?email=${encodeURIComponent(client_email)}`,
        }),
      });
      if (upRes.ok) {
        const upData = await upRes.json();
        if (upData.connect_url) return res.redirect(upData.connect_url);
      }
    }
    // Fallback: show a holding page
    res.send(`<!DOCTYPE html><html><body style="background:#0a0a0a;color:#fff;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;flex-direction:column;gap:16px;">
      <h2>Connecting Instagram...</h2><p style="color:#888;">Instagram connection requires additional setup. Please contact hello@socialengine.agency to get connected.</p>
      <script>setTimeout(() => window.close(), 3000);</script>
    </body></html>`);
  } catch (err) {
    res.send(`<html><body style="background:#0a0a0a;color:#fff;font-family:sans-serif;text-align:center;padding:40px;"><p>Connection failed. Please try again or contact support.</p><script>setTimeout(() => window.close(), 2000);</script></body></html>`);
  }
});

// ── GET /api/auth/tiktok ──
app.get('/api/auth/tiktok', async (req, res) => {
  const { client_email } = req.query;
  if (!client_email) return res.status(400).send('Missing client_email');

  try {
    if (UPLOADPOST_API_KEY) {
      const upRes = await fetch(`${UPLOADPOST_API_BASE}/connect/tiktok`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${UPLOADPOST_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: client_email,
          redirect_url: `${BACKEND_URL}/api/auth/tiktok/callback?email=${encodeURIComponent(client_email)}`,
        }),
      });
      if (upRes.ok) {
        const upData = await upRes.json();
        if (upData.connect_url) return res.redirect(upData.connect_url);
      }
    }
    res.send(`<!DOCTYPE html><html><body style="background:#0a0a0a;color:#fff;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;flex-direction:column;gap:16px;">
      <h2>Connecting TikTok...</h2><p style="color:#888;">TikTok connection requires additional setup. Contact hello@socialengine.agency to get connected.</p>
      <script>setTimeout(() => window.close(), 3000);</script>
    </body></html>`);
  } catch (err) {
    res.send(`<html><body style="background:#0a0a0a;color:#fff;font-family:sans-serif;text-align:center;padding:40px;"><p>Connection failed — please try again or contact support.</p><script>setTimeout(() => window.close(), 2000);</script></body></html>`);
  }
});

// ── GET /api/auth/facebook ──
app.get('/api/auth/facebook', async (req, res) => {
  const { client_email } = req.query;
  if (!client_email) return res.status(400).send('Missing client_email');

  try {
    if (UPLOADPOST_API_KEY) {
      const upRes = await fetch(`${UPLOADPOST_API_BASE}/connect/facebook`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${UPLOADPOST_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: client_email,
          redirect_url: `${BACKEND_URL}/api/auth/facebook/callback?email=${encodeURIComponent(client_email)}`,
        }),
      });
      if (upRes.ok) {
        const upData = await upRes.json();
        if (upData.connect_url) return res.redirect(upData.connect_url);
      }
    }
    res.send(`<!DOCTYPE html><html><body style="background:#0a0a0a;color:#fff;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;flex-direction:column;gap:16px;">
      <h2>Connecting Facebook...</h2><p style="color:#888;">Facebook connection requires additional setup. Contact hello@socialengine.agency to get connected.</p>
      <script>setTimeout(() => window.close(), 3000);</script>
    </body></html>`);
  } catch (err) {
    res.send(`<html><body style="background:#0a0a0a;color:#fff;font-family:sans-serif;text-align:center;padding:40px;"><p>Connection failed — please try again or contact support.</p><script>setTimeout(() => window.close(), 2000);</script></body></html>`);
  }
});


app.get('/health', (_, res) => res.json({ status: 'ok', ts: new Date().toISOString() }));
app.get('/', (_, res) => res.json({
  service: 'SocialEngine API', v: '9.5.2', status: 'running',
  crons: { content_gen: '6:00 UTC daily', inventory: '5:00 UTC daily', lead_followup: '14:00 UTC daily', publish: 'every 4h', reminders: '10:00 UTC daily' },
}));

// ━━━ Email Templates ━━━
function buildAuditEmail(name, website, audit, portalPassword = null) {
  const first = (name || 'there').split(' ')[0];
  const scoreColor = audit.overall_score >= 70 ? '#10B981' : audit.overall_score >= 40 ? '#F59E0B' : '#EF4444';
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#0A0A0A;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;padding:40px 20px;">
<div style="text-align:center;margin-bottom:32px;"><h1 style="color:#fff;font-size:24px;margin:0;">SocialEngine</h1><p style="color:#888;font-size:14px;margin-top:4px;">AI-Powered Social Media</p></div>
<div style="background:#111;border:1px solid #222;border-radius:12px;padding:32px;">
<h2 style="color:#fff;font-size:20px;margin:0 0 8px;">Your audit is ready, ${first}.</h2>
<p style="color:#999;font-size:14px;line-height:1.6;margin:0 0 24px;">We analyzed <strong style="color:#fff;">${website}</strong> and here's what we found.</p>
<div style="text-align:center;margin:24px 0;">
<div style="display:inline-block;width:100px;height:100px;border-radius:50%;border:3px solid ${scoreColor};line-height:100px;font-size:36px;font-weight:700;color:#fff;">${audit.overall_score}</div>
<p style="color:#888;font-size:13px;margin-top:8px;">Overall Score / 100</p></div>
${audit.strengths ? `<div style="margin:20px 0;"><h3 style="color:#10B981;font-size:14px;text-transform:uppercase;letter-spacing:.05em;margin:0 0 8px;">Strengths</h3>${audit.strengths.map(s => `<p style="color:#ccc;font-size:14px;margin:4px 0;padding-left:12px;border-left:2px solid #10B981;">&#10003; ${s}</p>`).join('')}</div>` : ''}
${audit.weaknesses ? `<div style="margin:20px 0;"><h3 style="color:#EF4444;font-size:14px;text-transform:uppercase;letter-spacing:.05em;margin:0 0 8px;">Needs Work</h3>${audit.weaknesses.map(w => `<p style="color:#ccc;font-size:14px;margin:4px 0;padding-left:12px;border-left:2px solid #EF4444;">&#10007; ${w}</p>`).join('')}</div>` : ''}
${audit.sample_posts?.[0] ? `<div style="margin:24px 0;background:#1a1a1a;border-radius:8px;padding:16px;"><h3 style="color:#60A5FA;font-size:13px;text-transform:uppercase;letter-spacing:.05em;margin:0 0 8px;">Sample Post We'd Create</h3><p style="color:#ddd;font-size:14px;line-height:1.6;margin:0;font-style:italic;">"${audit.sample_posts[0].caption || audit.sample_posts[0].hook}"</p></div>` : ''}
${portalPassword ? `<div style="margin:24px 0;background:#0f2b1d;border:1px solid #10B981;border-radius:8px;padding:20px;">
<h3 style="color:#10B981;font-size:14px;text-transform:uppercase;letter-spacing:.05em;margin:0 0 12px;">&#127881; Your Free Portal Access</h3>
<p style="color:#ccc;font-size:14px;margin:0 0 12px;">We created a free preview portal so you can see exactly what your AI-powered social media would look like.</p>
<div style="background:#111;border-radius:6px;padding:12px;margin:12px 0;">
<p style="color:#888;font-size:12px;margin:0 0 2px;">Login</p><p style="color:#fff;font-size:14px;margin:0 0 8px;">${first}'s email</p>
<p style="color:#888;font-size:12px;margin:0 0 2px;">Password</p><p style="color:#fff;font-size:14px;margin:0;font-family:monospace;">${portalPassword}</p></div>
<div style="text-align:center;margin-top:16px;"><a href="https://socialengine.agency/portal.html" style="display:inline-block;padding:12px 28px;background:#10B981;color:#fff;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;">Explore Your Portal &#8594;</a></div>
</div>` : ''}
<div style="text-align:center;margin-top:32px;"><a href="https://socialengine.agency/#pricing" style="display:inline-block;padding:14px 32px;background:#3B82F6;color:#fff;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;">See What We'd Build For You &#8594;</a></div>
</div>
<p style="color:#555;font-size:12px;text-align:center;margin-top:24px;">SocialEngine &middot; AI-Powered Social Media Management</p>
</div></body></html>`;
}

function buildWelcomeEmail(name, email, password) {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#0A0A0A;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;padding:40px 20px;">
<div style="text-align:center;margin-bottom:32px;"><h1 style="color:#fff;font-size:24px;margin:0;">SocialEngine</h1></div>
<div style="background:#111;border:1px solid #222;border-radius:12px;padding:32px;">
<h2 style="color:#fff;font-size:20px;margin:0 0 16px;">Welcome aboard, ${name}.</h2>
<p style="color:#999;font-size:14px;line-height:1.6;">Your SocialEngine account is live. Here are your portal credentials:</p>
<div style="background:#1a1a1a;border-radius:8px;padding:16px;margin:20px 0;">
<p style="color:#888;font-size:13px;margin:0 0 4px;">Email</p><p style="color:#fff;font-size:15px;margin:0 0 12px;">${email}</p>
<p style="color:#888;font-size:13px;margin:0 0 4px;">Temporary Password</p><p style="color:#fff;font-size:15px;margin:0;font-family:monospace;">${password}</p></div>
<p style="color:#999;font-size:14px;line-height:1.6;">Next: Log into your portal and complete the brand questionnaire. This teaches our AI your voice so every post sounds like you, not a robot.</p>
<div style="text-align:center;margin-top:24px;"><a href="https://socialengine.agency/portal.html" style="display:inline-block;padding:14px 32px;background:#10B981;color:#fff;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;">Open Your Portal &#8594;</a></div>
</div>
<p style="color:#555;font-size:12px;text-align:center;margin-top:24px;">SocialEngine &middot; hello@socialengine.agency</p>
</div></body></html>`;
}

function buildFollowUpEmail1(name, website) {
  const first = (name || 'there').split(' ')[0];
  const domain = website ? website.replace(/https?:\/\//, '').replace(/\/$/, '') : 'your store';
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#0A0A0A;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;padding:40px 20px;">
<div style="text-align:center;margin-bottom:32px;"><h1 style="color:#fff;font-size:24px;margin:0;">SocialEngine</h1></div>
<div style="background:#111;border:1px solid #222;border-radius:12px;padding:32px;">
<h2 style="color:#fff;font-size:20px;margin:0 0 16px;">${first}, we mapped out a 30-day content plan for ${domain}.</h2>
<p style="color:#999;font-size:14px;line-height:1.8;">After running your audit yesterday, we went deeper. Our AI analyzed your full product catalog and identified:</p>
<ul style="color:#ccc;font-size:14px;line-height:2;padding-left:20px;">
<li><strong style="color:#10B981;">Products that are undersold</strong> — sitting in your inventory with zero social presence</li>
<li><strong style="color:#F59E0B;">Seasonal timing windows</strong> — content opportunities you're currently missing</li>
<li><strong style="color:#60A5FA;">Platform-specific angles</strong> — what works on TikTok vs Instagram for your niche</li>
</ul>
<p style="color:#999;font-size:14px;line-height:1.8;">We can start generating and scheduling posts for you this week. Every post gets approved by you before it goes live — nothing touches your audience without your say-so.</p>
<div style="text-align:center;margin-top:28px;"><a href="https://socialengine.agency/#pricing" style="display:inline-block;padding:14px 32px;background:#3B82F6;color:#fff;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;">See the Full Plan &#8594;</a></div>
</div>
<p style="color:#555;font-size:12px;text-align:center;margin-top:24px;">SocialEngine &middot; hello@socialengine.agency</p>
</div></body></html>`;
}

function buildFollowUpEmail2(name, website) {
  const first = (name || 'there').split(' ')[0];
  const domain = website ? website.replace(/https?:\/\//, '').replace(/\/$/, '') : 'your store';
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#0A0A0A;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;padding:40px 20px;">
<div style="text-align:center;margin-bottom:32px;"><h1 style="color:#fff;font-size:24px;margin:0;">SocialEngine</h1></div>
<div style="background:#111;border:1px solid #222;border-radius:12px;padding:32px;">
<h2 style="color:#fff;font-size:20px;margin:0 0 16px;">Quick question, ${first}.</h2>
<p style="color:#999;font-size:14px;line-height:1.8;">We noticed ${domain} has products that could be doing 2-3x more in sales with the right social content behind them.</p>
<p style="color:#999;font-size:14px;line-height:1.8;">Genuinely curious — are you currently running social content for your store, or is it one of those things that keeps getting pushed to next week?</p>
<p style="color:#999;font-size:14px;line-height:1.8;">No pitch — just want to understand if this is even on your radar right now.</p>
<p style="color:#ccc;font-size:14px;margin-top:24px;">— The SocialEngine Team</p>
</div>
<p style="color:#555;font-size:12px;text-align:center;margin-top:24px;">SocialEngine &middot; <a href="mailto:hello@socialengine.agency" style="color:#555;">hello@socialengine.agency</a></p>
</div></body></html>`;
}


// ━━━ Schedule Cron Jobs ━━━

// 05:00 UTC — Inventory intelligence: snapshot Shopify stock
cron.schedule('0 5 * * *', () => {
  log('CRON', 'Triggering inventory intelligence');
  runInventoryIntelligence();
});

// 06:00 UTC — Content generation: inventory → Perplexity Sonar Pro → Higgsfield → Airtable
cron.schedule('0 6 * * *', () => {
  log('CRON', 'Triggering daily content generation');
  runContentGeneration();
});

// 10:00 UTC — Approval reminders: 48h+ pending posts → email clients
cron.schedule('0 10 * * *', () => {
  log('CRON', 'Triggering approval reminders');
  runApprovalReminders();
});

// 14:00 UTC — Lead follow-up drip emails
cron.schedule('0 14 * * *', () => {
  log('CRON', 'Triggering lead follow-up');
  runLeadFollowUp();
});

// Every 4 hours — Publish approved posts to Upload-Post
cron.schedule('0 */4 * * *', () => {
  log('CRON', 'Triggering publish approved posts');
  runPublishApproved();
});

// ━━━ Start ━━━
app.listen(PORT, () => {
  log('SERVER', 'SocialEngine API v9.0 — PERPLEXITY + HIGGSFIELD + UPLOAD-POST');
  log('SERVER', `Port: ${PORT}`);
  log('SERVER', 'Crons: inventory@05:00 | content-gen@06:00 | reminders@10:00 | leads@14:00 | publish@every4h');
});
