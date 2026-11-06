import React from 'react';

interface JsonLdProps {
    data: Record<string, unknown>;
}

/**
 * Structured data is written inside a <script> tag, so the JSON must never contain a
 * literal "<" (for example "</script>" in a post title). Escaping these characters keeps
 * the JSON identical for search engines but stops text from closing the tag.
 */
export const serializeJsonLd = (data: unknown): string =>
    JSON.stringify(data)
        .replace(/</g, '\\u003c')
        .replace(/>/g, '\\u003e')
        .replace(/&/g, '\\u0026')
        .replace(/\u2028/g, '\\u2028')
        .replace(/\u2029/g, '\\u2029');

const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
        />
    );
};

export default JsonLd;
