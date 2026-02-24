"use client";

import { useState } from 'react';
import { EnquiryManager, Enquiry } from '../lib/enquiryManager';

export default function Home() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>(EnquiryManager.getEnquiries());
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [search, setSearch] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const res = EnquiryManager.createEnquiry({ name, email, message });
    if (res) {
      alert("Enquiry added! (But why doesn't it show up in the list?)");
      // BUG: The developer forgot to update the state here!
      // setEnquiries(EnquiryManager.getEnquiries());
    } else {
      alert("Failed to add enquiry. Check the console.");
    }
  };

  const handleSearch = () => {
    // TASK: Interviewee will need to use their new searchEnquiriesByEmail method here
    console.log("Searching for:", search);
    // const results = EnquiryManager.searchEnquiriesByEmail(search);
    // setEnquiries(results);
    alert("Search functionality is not implemented yet!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Enquiry Dashboard</h1>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search by email..."
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Search
            </button>
          </div>
        </header>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Add New Enquiry</h2>
          <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              required
              placeholder="Name"
              className="p-2 border rounded"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              required
              placeholder="Email"
              className="p-2 border rounded"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              required
              placeholder="Message"
              className="p-2 border rounded"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <button type="submit" className="md:col-span-3 bg-green-600 text-white p-2 rounded hover:bg-green-700">
              Submit Enquiry
            </button>
          </form>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Current Enquiries</h2>
          <div className="grid gap-4">
            {enquiries.map((e) => (
              <div key={e.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex justify-between">
                <div>
                  <h3 className="font-bold">{e.name} ({e.email})</h3>
                  <p className="text-gray-600">{e.message}</p>
                </div>
                <span className={`px-2 py-1 rounded text-xs h-fit ${e.status === 'resolved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {e.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
