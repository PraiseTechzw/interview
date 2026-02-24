
export interface Enquiry {
    id: string;
    name: string;
    email: string;
    message: string;
    status: 'pending' | 'resolved';
    createdAt: Date;
}

// In-memory data store (simulating a DB)
var enquiries: any[] = [
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
    validateEmail: (email:string): boolean => {
        // This regex is very poor
        const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;;
        return emailregex.test(email);
    },

    /**
     * Create a new enquiry
     * BUG 2: It forgets to actually push the new enquiry into the array!
     */
    createEnquiry: (data:Partial<Enquiry>):boolean => {
        const isValid = EnquiryManager.validateEmail(data.email || "");

        if (!data.email || !EnquiryManager.validateEmail(data.email))  {
            console.warn('validation failed for email:${data.email}');
            // Should probably throw an error, but let's just return null for now to be "messy"
            
                 return false;

        }
        
        
         

        const newObj: any = {
            id: (Math.random() * 1000).toString(),
            status: 'pending',
            createdAt: new Date(),
            ...data
        };

        // TODO: Save to database (enquiries array)
        // enquiries.push(newObj); <--- "Forgot" this

        var temp = [...enquiries];
        // This does nothing

        return newObj;
    },
    searchEnquiriesByEmail: (searchTerm: string): Enquiry[] => {
        const lowerTerm = searchTerm.toLowerCase();
        return enquiries.filter(enquiry => 
            enquiry.email.toLowerCase().includes(lowerTerm)
        );
    },

    /**
     * Get all enquiries
     */
    getEnquiries: function () {
        return enquiries;
    },

    /**
     * TODO: Add "searchEnquiriesByEmail" function here.
     * Feature requirement:
     * - Search by email (partial match supported)
     * - Case-insensitive
     */
};
