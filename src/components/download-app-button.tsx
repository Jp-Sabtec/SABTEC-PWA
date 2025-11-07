"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function DownloadAppButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isAppInstalled, setIsAppInstalled] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });

    window.addEventListener("appinstalled", () => {
      setIsAppInstalled(true);
    });

    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsAppInstalled(true);
    }
  }, []);

  const handleDownloadClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setIsAppInstalled(true);
      }
      setDeferredPrompt(null);
    }
  };

  if (isAppInstalled || !deferredPrompt) {
    return null;
  }

  return (
    <Button onClick={handleDownloadClick} variant="outline" className="w-full">
      <Download className="mr-2 h-4 w-4" />
      Download App
    </Button>
  );
}
