
import { describe, it, expect } from 'vitest';
import { EnquiryManager } from '../lib/enquiryManager';

describe('EnquiryManager', () => {

    it('should return all existing enquiries', () => {
        const list = EnquiryManager.getEnquiries();
        expect(list.length).toBeGreaterThanOrEqual(2);
    });

    /**
     * TEST 1: FAILING TEST
     * The validateEmail function is broken for common emails like 'user.name@domain.com'
     */
    it('should validate complex email addresses correctly', () => {
        const validEmail = 'john.doe@company.technology';
        expect(EnquiryManager.validateEmail(validEmail)).toBe(true);
    });

    /**
     * TEST 2: FAILING TEST
     * The createEnquiry function has a bug where it doesn't persist the new enquiry.
     */
    it('should persist a new enquiry in the list', () => {
        const initialCount = EnquiryManager.getEnquiries().length;

        EnquiryManager.createEnquiry({
            name: 'Test User',
            email: 'test@example.com',
            message: 'Persistent test message'
        });

        const finalCount = EnquiryManager.getEnquiries().length;
        expect(finalCount).toBe(initialCount + 1);
    });

});
