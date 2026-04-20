"use client";

import { useEffect, useState } from "react";

/**
 * Hook to safely get the base path for assets
 * Avoids hydration issues by deferring to client-side only with useEffect
 */
export function useBasePath(): string {
  const [basePath, setBasePath] = useState<string>("");

  useEffect(() => {
    try {
      // Method 1: Try to get from Next.js internal data
      const nextBasePath = (window as any).__NEXT_DATA__?.basePath;
      if (nextBasePath) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setBasePath(nextBasePath);
        return;
      }

      // Method 2: Infer from current pathname
      // If we're on GitHub Pages, the pathname will start with /nxt-ikigai-learning-ngo/
      const pathname = window.location.pathname;
      if (pathname.startsWith("/nxt-ikigai-learning-ngo/")) {
        setBasePath("/nxt-ikigai-learning-ngo");
        return;
      }

      // Default: no basePath (running locally)
      setBasePath("");
    } catch (error) {
      console.warn("Failed to determine basePath:", error);
      setBasePath("");
    }
  }, []);

  return basePath;
}

/**
 * Utility function to prefix an asset path with the basePath
 * Use this in non-client contexts
 */
export function withBasePath(path: string): string {
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("//")
  ) {
    return path;
  }

  if (typeof window !== "undefined") {
    try {
      // Try Next.js internal data first
      const basePath = (window as any).__NEXT_DATA__?.basePath;
      if (basePath && path.startsWith("/")) {
        return basePath + path;
      }

      // Fall back to pathname-based detection
      if (window.location.pathname.startsWith("/nxt-ikigai-learning-ngo/")) {
        return "/nxt-ikigai-learning-ngo" + path;
      }
    } catch (error) {
      // Silently fail
    }
  }

  return path;
}

/**
 * Get the basePath at build/server time (for server components)
 */
export function getBasePath(): string {
  const isGithubActions = process.env.GITHUB_ACTIONS || false;
  const repo = "nxt-ikigai-learning-ngo";
  return isGithubActions ? `/${repo}` : "";
}
