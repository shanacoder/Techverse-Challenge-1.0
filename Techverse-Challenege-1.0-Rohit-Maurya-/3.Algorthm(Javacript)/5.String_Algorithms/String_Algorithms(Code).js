function naiveStringMatch(text, pattern) {
    const occurrences = [];
    const n = text.length;
    const m = pattern.length;

    for (let i = 0; i <= n - m; i++) {
        let j;
        for (j = 0; j < m; j++) {
            if (text[i + j] !== pattern[j]) {
                break;
            }
        }
        if (j === m) {
            occurrences.push(i);
        }
    }

    return occurrences;
}
function computeLPSArray(pattern) {
    const lps = [0];
    let len = 0;
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

function KMPSearch(text, pattern) {
    const occurrences = [];
    const n = text.length;
    const m = pattern.length;
    const lps = computeLPSArray(pattern);

    let i = 0; // Index for text[]
    let j = 0; // Index for pattern[]

    while (i < n) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }
        if (j === m) {
            occurrences.push(i - j);
            j = lps[j - 1];
        } else if (i < n && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return occurrences;
}
