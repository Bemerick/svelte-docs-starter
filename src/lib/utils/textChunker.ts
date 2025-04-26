// Split text into manageable chunks for better AI processing
export function chunkText(text: string, chunkSize = 1000): string[] {
    const chunks: string[] = [];
    let currentChunk: string = '';

    // Split by paragraphs first
    const paragraphs: string[] = text.split(/\n\s*\n/);

    for (const paragraph of paragraphs) {
        if (currentChunk.length + paragraph.length < chunkSize) {
            currentChunk += (currentChunk ? '\n\n' : '') + paragraph;
        } else {
            if (currentChunk) {
                chunks.push(currentChunk);
            }
            currentChunk = paragraph;
        }
    }

    if (currentChunk) {
        chunks.push(currentChunk);
    }

    return chunks;
}
