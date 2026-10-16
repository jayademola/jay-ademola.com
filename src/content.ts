export interface Project { name: string; label: string; domain: string; url: string; description: string; details: string; features: string[]; colour: string; mark: string; developerUrl?: string }
export const projects: Project[] = [
  { name: 'DIY Website Builder', label: 'Creation without constraints', domain: 'diy-website-builder.com', url: 'https://diy-website-builder.com', developerUrl: 'https://diy-website-builder.com/developers', description: 'Website creation, built into your product.', details: 'A drag-and-drop website builder for people creating their own sites and developers embedding an editor into their products. My work brings together reusable components, publishing and custom domains, with a framework-agnostic JavaScript SDK.', features: ['Visual editing', 'JavaScript SDK', 'Custom domains'], colour: 'builder', mark: 'diy.' },
  { name: 'FoxScheduling', label: 'Less admin. More appointments.', domain: 'foxscheduling.com', url: 'https://foxscheduling.com', description: 'A simpler way to get booked.', details: 'An appointment scheduling platform for service businesses. I built the booking workflow around services, staff availability and deposits, with calendar integrations to connect appointments to the working day.', features: ['Booking pages', 'Staff availability', 'Calendar integrations'], colour: 'fox', mark: 'foxscheduling' },
  { name: 'PrivateTutorHub', label: 'Your academy. Your identity.', domain: 'privatetutorhub.com', url: 'https://privatetutorhub.com', description: 'The platform behind a learning business.', details: 'A white-label platform for tutoring academies to run their own branded business. I built tools to manage tutors and students, sell courses and collect payments through each academy’s configured payment providers.', features: ['White-label platform', 'Course sales', 'Payments'], colour: 'tutor', mark: 'PrivateTutorHub' },
  { name: 'BrandQRCodes', label: 'One scan. More possibilities.', domain: 'brandqrcodes.com', url: 'https://brandqrcodes.com', description: 'Make every connection count.', details: 'A dynamic QR platform for businesses connecting physical touchpoints to online destinations. My work includes editable destinations, branded pages and analytics, so a printed code can keep working as a business changes.', features: ['Dynamic destinations', 'Branded pages', 'Analytics'], colour: 'qr', mark: 'BrandQRCodes' },
];
export const expertise = [
 ['SaaS & product development', 'From an early idea to a product people can use. Practical scope, thoughtful user journeys and a foundation that can evolve.'],
 ['Backend & cloud architecture', 'APIs and AWS infrastructure shaped around the requirement. Serverless where it fits, with maintainability and operating costs in mind.'],
 ['React & developer tools', 'Responsive applications and tools that make complex workflows easier. Clear interfaces for people and useful abstractions for developers.'],
 ['The connections that matter', 'Authentication, payments, real-time systems and third-party integrations, brought together into a coherent product.'],
 ['Performance & reliability', 'Understand the bottleneck, make the right trade-offs and keep the product dependable as its needs change.'],
];

export const assetBase = 'https://assets.diy-website-builder.com/a4d81438-7011-705b-3aeb-4e28bf7a6374/16c22964-14cb-407a-ba9d-099c75022296/assets/';
export const productImages: Record<string, string> = {
 'DIY Website Builder': '268b7a55-bd23-498f-a2a1-283693a2a7bb.jpeg',
 'FoxScheduling': '16680ff7-4a80-4716-9e25-ff5b9cfe1b09.png',
 'PrivateTutorHub': '141399bf-2efa-44ba-b660-0075b4741dc2.png',
 'BrandQRCodes': 'c7ddd271-d368-45e5-a231-a66ba9714326.png',
};
export const bookingUrl = 'https://jay-ademola.foxscheduling.com?showBackLink=true&showThemeToggle=false&theme=dark';
