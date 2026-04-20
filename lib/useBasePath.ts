"use client";

/**
 * Hook to get the base path for assets at runtime
 * Returns the basePath from Next.js config, which is set during GitHub Pages deployment
 */
export function useBasePath(): string {
  if (typeof window === "undefined") {
    return "";
  }

  // Access the basePath from Next.js's internal data
  const basePath = (window as any).__NEXT_DATA__?.basePath || "";
  return basePath;
}

/**
 * Utility function to prefix an asset path with the basePath
 * Handles both local paths (/assets/*) and external URLs
 * @param path - The asset path (should start with / for local assets)
 * @returns The path prefixed with basePath if it exists
 */
export function withBasePath(path: string): string {
  // Don't prefix external URLs (http://, https://, //)
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("//")
  ) {
    return path;
  }

  // For client-side runtime, access the basePath from Next.js
  if (typeof window !== "undefined") {
    const basePath = (window as any).__NEXT_DATA__?.basePath || "";
    if (basePath && path.startsWith("/")) {
      return basePath + path;
    }
  }

  return path;
}

/**
 * Server-side utility to get basePath from environment
 * Should be used in server components or during static generation
 */
export function getBasePath(): string {
  // During build time in GitHub Actions, GITHUB_ACTIONS will be set
  // and basePath will be /${repo}
  const isGithubActions = process.env.GITHUB_ACTIONS || false;
  const repo = "nxt-ikigai-learning-ngo";
  return isGithubActions ? `/${repo}` : "";
}
