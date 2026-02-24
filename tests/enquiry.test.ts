
import { describe, it, expect } from 'vitest';
import { EnquiryManager } from '../lib/enquiryManager';

describe('EnquiryManager', () => {

    it('should return all existing enquiries', () => {
        const list = EnquiryManager.getEnquiries();
        expect(list.length).toBeGreaterThanOrEqual(2);
    });

    /**
     * TEST 1: Email validation
     */
    it('should validate complex email addresses correctly', () => {
        const validEmail = 'john.doe@company.technology';
        expect(EnquiryManager.validateEmail(validEmail)).toBe(true);
    });

    /**
     * TEST 2: Persistence
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

    /**
     * TEST 3: New Search Feature
     */
    it('should find enquiries by partial email (case-insensitive)', () => {
        EnquiryManager.createEnquiry({
            name: 'Jane Smith',
            email: 'jane@test.org',
            message: 'Search test'
        });

        const results = EnquiryManager.searchEnquiriesByEmail('JANE');

        expect(results.length).toBeGreaterThan(0);
        expect(results[0].email.toLowerCase()).toContain('jane');
    });

});