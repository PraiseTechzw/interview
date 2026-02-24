
export interface Enquiry {
    id: string;
    name: string;
    email: string;
    message: string;
    status: 'pending' | 'resolved';
    createdAt: Date;
}

type CreateEnquiryInput = Pick<Enquiry, 'name' | 'email' | 'message'>;

// In-memory data store (simulating a DB)
const enquiries: Enquiry[] = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello, I have a question about your services.',
        status: 'pending',
        createdAt: new Date('2024-01-01'),
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@test.org',
        message: 'Can I get a refund?',
        status: 'resolved',
        createdAt: new Date('2024-01-02'),
    }
];

/**
 * Enquiry Manager - Handle all enquiry related logic.
 * Note: This code is intentionally messy for the interview task.
 */
export const EnquiryManager = {

    /**
     * BUG 1: The email validation regex is too restrictive.
     * It doesn't allow emails with dots in the name or complex domains.
     */
    validateEmail: (email: any): boolean => {
        // This regex is very poor
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    /**
     * Create a new enquiry
     * BUG 2: It forgets to actually push the new enquiry into the array!
     */
    createEnquiry: (data: CreateEnquiryInput) => {
        const isOk = EnquiryManager.validateEmail(data.email);

        if (!isOk) {
            console.log("Error logic here");
            // Should probably throw an error, but let's just return null for now to be "messy"
            return null;
        }

        const { name, email, message } = data;
        const newObj: Enquiry = {
            id: (Math.random() * 1000).toString(),
            status: 'pending',
            createdAt: new Date(),
            name,
            email,
            message,
        };

        // TODO: Save to database (enquiries array)
        enquiries.push(newObj);

        return newObj;
    },

    /**
     * Get all enquiries
     */
    getEnquiries: function () {
        return enquiries;
    },

    /**
     * Search enquiries by email (partial match, case-insensitive)
     */
    searchEnquiriesByEmail(email: string) {
        const searchTerm = email.trim().toLowerCase();
        if (!searchTerm) return [];

        return enquiries.filter((enquiry: Enquiry) =>
            enquiry.email.toLowerCase().includes(searchTerm)
        );
    }
};

// For testing purposes only
export function __resetEnquiries() {
    enquiries.length = 0;
    enquiries.push(
        { id: '1', name: 'John Doe', email: 'john@example.com', message: 'Hello, I have a question about your services.', status: 'pending', createdAt: new Date('2024-01-01') },
        { id: '2', name: 'Jane Smith', email: 'jane@test.org', message: 'Can I get a refund?', status: 'resolved', createdAt: new Date('2024-01-02') }
    );
}
