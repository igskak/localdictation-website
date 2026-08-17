const localBase = new URL("https://localdictation.invalid");

function trimmed(value: string | null | undefined) {
  const candidate = value?.trim();
  if (!candidate || [...candidate].some((character) => {
    const codePoint = character.codePointAt(0) ?? 0;
    return codePoint <= 31 || codePoint === 127;
  })) return null;
  return candidate;
}

export function safeHttpsUrl(value: string | null | undefined): URL | null {
  const candidate = trimmed(value);
  if (!candidate) return null;

  try {
    const target = new URL(candidate);
    if (target.protocol !== "https:" || target.username || target.password || target.hash) return null;
    return target;
  } catch {
    return null;
  }
}

export function safeLeadEndpoint(value: string | null | undefined): string | null {
  const candidate = trimmed(value);
  if (!candidate) return null;

  if (candidate.startsWith("/")) {
    try {
      const target = new URL(candidate, localBase);
      if (target.origin !== localBase.origin || target.hash) return null;
      return `${target.pathname}${target.search}`;
    } catch {
      return null;
    }
  }

  return safeHttpsUrl(candidate)?.toString() ?? null;
}
