"use client";
import { useEffect } from "react";

export default function SchemaInjector({ schemaJSON }) {
  useEffect(() => {
    if (!schemaJSON) return;

    const existingScript = document.getElementById("payload-schema");
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "payload-schema";

    script.textContent =
      typeof schemaJSON === "string" ? schemaJSON : JSON.stringify(schemaJSON);

    document.head.appendChild(script);

    return () => {
      const cleanup = document.getElementById("payload-schema");
      if (cleanup) cleanup.remove();
    };
  }, [schemaJSON]);

  return null;
}
