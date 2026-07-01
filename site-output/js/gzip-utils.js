/**
 * Utility functions for handling gzip archives in the browser
 */

/**
 * Checks if gzip decompression is supported in this browser
 * @returns {boolean} - True if supported
 */
function isGzipSupported() {
    return typeof DecompressionStream !== 'undefined';
}

/**
 * Fetches and decompresses a gzip archive, returning the contained JSON files
 * @param {string} archiveUrl - URL to the .tar.gz archive
 * @returns {Promise<Object>} - Object with filename as key and parsed JSON as value
 */
async function fetchAndDecompressArchive(archiveUrl) {
    try {
        // Check browser support first
        if (!isGzipSupported()) {
            throw new Error('Gzip decompression not supported in this browser. Please use a modern browser (Chrome 80+, Firefox 65+, Safari 16.4+).');
        }

        console.log(`Fetching archive: ${archiveUrl}`);

        // Fetch the compressed archive
        const response = await fetch(archiveUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch archive: ${response.status} ${response.statusText}`);
        }

        const compressedData = await response.arrayBuffer();
        console.log(`Downloaded ${compressedData.byteLength} bytes`);

        // Decompress the gzip data
        const decompressedData = await decompressGzip(compressedData);
        console.log(`Decompressed to ${decompressedData.byteLength} bytes`);

        // Parse the tar data to extract individual files
        const files = await extractTarFiles(decompressedData);
        console.log(`Extracted ${Object.keys(files).length} files from archive`);

        // Parse JSON files
        const jsonFiles = {};
        for (const [filename, content] of Object.entries(files)) {
            if (filename.endsWith('.json')) {
                try {
                    jsonFiles[filename] = JSON.parse(content);
                } catch (error) {
                    console.error(`Failed to parse JSON from ${filename}:`, error);
                }
            }
        }

        return jsonFiles;
    } catch (error) {
        console.error('Error fetching and decompressing archive:', error);
        throw error;
    }
}

/**
 * Decompresses gzip data using the browser's DecompressionStream API
 * @param {ArrayBuffer} compressedData - The gzip compressed data
 * @returns {Promise<ArrayBuffer>} - The decompressed data
 */
async function decompressGzip(compressedData) {
    // Check if DecompressionStream is available (modern browsers)
    if (typeof DecompressionStream !== 'undefined') {
        const stream = new DecompressionStream('gzip');
        const writer = stream.writable.getWriter();
        const reader = stream.readable.getReader();

        // Write compressed data
        writer.write(new Uint8Array(compressedData));
        writer.close();

        // Read decompressed data
        const chunks = [];
        let done = false;
        while (!done) {
            const { value, done: readerDone } = await reader.read();
            done = readerDone;
            if (value) {
                chunks.push(value);
            }
        }

        // Combine chunks
        const totalLength = chunks.reduce((acc, chunk) => acc + chunk.length, 0);
        const result = new Uint8Array(totalLength);
        let offset = 0;
        for (const chunk of chunks) {
            result.set(chunk, offset);
            offset += chunk.length;
        }

        return result.buffer;
    } else {
        // Fallback for older browsers
        throw new Error('Gzip decompression not supported in this browser. DecompressionStream API is required (Chrome 80+, Firefox 65+, Safari 16.4+).');
    }
}

/**
 * Simple tar file extractor for browser use
 * @param {ArrayBuffer} tarData - The tar file data
 * @returns {Promise<Object>} - Object with filename as key and content as value
 */
async function extractTarFiles(tarData) {
    const files = {};
    const dataView = new DataView(tarData);
    let offset = 0;

    while (offset < tarData.byteLength) {
        // Check if we've reached the end (tar files are padded with null bytes)
        if (offset + 512 > tarData.byteLength) break;

        // Read tar header (512 bytes)
        const header = new Uint8Array(tarData, offset, 512);

        // Check if this is a null header (end of archive)
        const isNullHeader = header.every(byte => byte === 0);
        if (isNullHeader) break;

        // Extract filename (first 100 bytes, null-terminated)
        let filename = '';
        let filenameBytes = [];
        for (let i = 0; i < 100; i++) {
            if (header[i] === 0) break;
            filenameBytes.push(header[i]);
        }
        if (filenameBytes.length > 0) {
            filename = new TextDecoder('utf-8').decode(new Uint8Array(filenameBytes));
        }

        // Extract file size (bytes 124-135, octal)
        let sizeStr = '';
        for (let i = 124; i < 136; i++) {
            if (header[i] === 0 || header[i] === 32) break; // null or space
            sizeStr += String.fromCharCode(header[i]);
        }
        const fileSize = parseInt(sizeStr, 8) || 0;

        // Extract file type (byte 156)
        const fileType = String.fromCharCode(header[156]);

        offset += 512; // Move past header

        // Only process regular files
        if (fileType === '0' || fileType === '\0') {
            if (fileSize > 0 && filename) {
                // Read file content
                const content = new Uint8Array(tarData, offset, fileSize);
                files[filename] = new TextDecoder('utf-8').decode(content);
            }
        }

        // Move to next file (files are padded to 512-byte boundaries)
        offset += Math.ceil(fileSize / 512) * 512;
    }

    return files;
}

/**
 * Checks if gzip archives are available for a given date
 * @param {string} date - Date in YYYY-MM-DD format
 * @returns {Promise<boolean>} - True if archive exists
 */
async function checkArchiveAvailability(date) {
    try {
        const archiveUrl = `accessibility-reports/archives/reports_${date}.tar.gz`;
        const response = await fetch(archiveUrl, { method: 'HEAD' });
        return response.ok;
    } catch (error) {
        console.warn(`Archive check failed for ${date}:`, error);
        return false;
    }
}

/**
 * Fetches the archive index to get metadata about available archives
 * @returns {Promise<Array>} - Array of archive metadata objects
 */
async function fetchArchiveIndex() {
    try {
        const response = await fetch('accessibility-reports/archives/archive_index.json');
        if (!response.ok) {
            throw new Error(`Failed to fetch archive index: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.warn('Archive index not available:', error);
        return [];
    }
}

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        fetchAndDecompressArchive,
        checkArchiveAvailability,
        fetchArchiveIndex,
        decompressGzip,
        extractTarFiles,
        isGzipSupported
    };
}
