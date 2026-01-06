/**
 * Ghana Phone Number Validation Utility
 * Supports all major networks: MTN, Vodafone, AirtelTigo
 */

export interface PhoneValidationResult {
    isValid: boolean;
    formatted?: string;
    network?: string;
    error?: string;
}

// Ghana network prefixes
const NETWORK_PREFIXES = {
    MTN: ['024', '025', '053', '054', '055', '059'],
    Vodafone: ['020', '050'],
    AirtelTigo: ['026', '027', '056', '057'],
    Glo: ['023', '028'],
};

/**
 * Validate a Ghana phone number
 * @param phone - Phone number to validate
 * @returns Validation result with formatted number and network
 */
export function validateGhanaPhone(phone: string): PhoneValidationResult {
    if (!phone) {
        return {
            isValid: false,
            error: 'Phone number is required',
        };
    }

    // Remove all non-digit characters
    const cleaned = phone.replace(/\D/g, '');

    // Check length (should be 10 digits)
    if (cleaned.length !== 10) {
        return {
            isValid: false,
            error: 'Phone number must be 10 digits',
        };
    }

    // Check if starts with 0
    if (!cleaned.startsWith('0')) {
        return {
            isValid: false,
            error: 'Phone number must start with 0',
        };
    }

    // Extract prefix (first 3 digits)
    const prefix = cleaned.substring(0, 3);

    // Find network
    let network = 'Unknown';
    for (const [networkName, prefixes] of Object.entries(NETWORK_PREFIXES)) {
        if (prefixes.includes(prefix)) {
            network = networkName;
            break;
        }
    }

    // Validate prefix
    const allValidPrefixes = Object.values(NETWORK_PREFIXES).flat();
    if (!allValidPrefixes.includes(prefix)) {
        return {
            isValid: false,
            error: `Invalid network prefix. Valid prefixes: ${allValidPrefixes.join(', ')}`,
        };
    }

    // Format: 0XX-XXX-XXXX
    const formatted = `${cleaned.substring(0, 3)}-${cleaned.substring(3, 6)}-${cleaned.substring(6)}`;

    return {
        isValid: true,
        formatted,
        network,
    };
}

/**
 * Format a phone number for display
 * @param phone - Phone number to format
 * @returns Formatted phone number or original if invalid
 */
export function formatPhoneNumber(phone: string): string {
    const result = validateGhanaPhone(phone);
    return result.formatted || phone;
}

/**
 * Get network from phone number
 * @param phone - Phone number
 * @returns Network name or 'Unknown'
 */
export function getPhoneNetwork(phone: string): string {
    const result = validateGhanaPhone(phone);
    return result.network || 'Unknown';
}

/**
 * Check if phone number is valid (simple boolean check)
 * @param phone - Phone number to check
 * @returns true if valid, false otherwise
 */
export function isValidGhanaPhone(phone: string): boolean {
    return validateGhanaPhone(phone).isValid;
}
