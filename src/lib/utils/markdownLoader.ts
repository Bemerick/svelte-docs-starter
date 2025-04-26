import { marked } from 'marked';
import { chunkText } from './textChunker';

interface Document {
    id: string;
    name: string;
    rawContent: string;
    htmlContent: string;
    chunks: string[];
    embeddings?: number[][];
    prepared?: boolean;
}

// Function to process markdown content
export function processMarkdownContent(content: string, filename: string): Document {
    const html = marked.parse(content) as string;
    
    return {
        id: filename,
        name: filename,
        rawContent: content,
        htmlContent: html,
        chunks: chunkText(content)
    };
}

// Function to prepare document for AI
export async function prepareForAI(document: Document): Promise<Document> {
    try {
        const response = await fetch('http://localhost:3000/api/prepare-document', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chunks: document.chunks
            })
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        document.embeddings = data.embeddings;
        document.prepared = true;

        return document;
    } catch (error) {
        console.error('Error preparing document for AI:', error);
        document.prepared = true;
        console.warn('Using fallback document preparation without embeddings');
        return document;
    }
}
