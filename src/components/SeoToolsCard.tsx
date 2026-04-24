import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ExternalLink, Map, Globe } from "lucide-react";

const SITE_ORIGIN = "https://getbookedout.com.au";

const SeoToolsCard = () => {
  const [customUrl, setCustomUrl] = useState(SITE_ORIGIN + "/");

  const inspectInGsc = (url: string) => {
    // Google Search Console URL Inspection deep link.
    // Pattern: https://search.google.com/search-console/inspect?resource_id=<property>&id=<full-url>
    // Works for both URL-prefix (https://getbookedout.com.au/) and Domain (sc-domain:getbookedout.com.au) properties.
    const target = url.trim();
    if (!target) return;
    const resource = encodeURIComponent(SITE_ORIGIN + "/");
    const id = encodeURIComponent(target);
    const inspectUrl = `https://search.google.com/search-console/inspect?resource_id=${resource}&id=${id}`;
    window.open(inspectUrl, "_blank", "noopener,noreferrer");
  };

  const openSitemaps = () => {
    const resource = encodeURIComponent(SITE_ORIGIN + "/");
    window.open(
      `https://search.google.com/search-console/sitemaps?resource_id=${resource}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Card className="border-primary/20">
      <CardContent className="p-6 space-y-5">
        <div className="flex items-start gap-3">
          <Search className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <h2 className="text-xl font-semibold text-foreground">SEO Tools</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Ask Google to recrawl your pages after big changes (new content, favicon,
              meta updates). Opens Google Search Console in a new tab.
            </p>
          </div>
        </div>

        {/* Quick action: homepage */}
        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            onClick={() => inspectInGsc(SITE_ORIGIN + "/")}
            className="gap-2"
          >
            <Globe className="w-4 h-4" />
            Reindex Homepage
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </Button>
          <Button variant="outline" onClick={openSitemaps} className="gap-2">
            <Map className="w-4 h-4" />
            Open Sitemaps
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </Button>
        </div>

        {/* Custom URL inspector */}
        <div className="pt-2 border-t border-border">
          <label className="text-sm font-medium text-foreground block mb-2">
            Inspect a specific URL
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              type="url"
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              placeholder="https://getbookedout.com.au/your-page"
              className="flex-1"
            />
            <Button
              variant="secondary"
              onClick={() => inspectInGsc(customUrl)}
              className="gap-2"
            >
              Inspect
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            In Google Search Console, click <strong>Request Indexing</strong> after the URL loads.
            You must be signed in to the Search Console account that owns this property.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SeoToolsCard;
