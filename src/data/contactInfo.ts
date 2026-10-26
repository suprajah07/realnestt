// ============================================================
// REALNEST — CENTRALIZED COMPANY CONTACT CONFIGURATION
// Easily configure verified contact information before publication
// ============================================================

export interface CompanyContact {
  phoneDisplay: string;
  phoneTel: string;
  email: string;
  officeLocation: string;
  officeAddress: string;
  workingHours: string;
  workingDays: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  whatsappMessage: string;
}

export const companyContact: CompanyContact = {
  phoneDisplay: '+91 98765 43210',
  phoneTel: '+919876543210',
  email: 'hello@realnest.in',
  officeLocation: 'Anna Nagar & OMR',
  officeAddress: 'Anna Nagar & OMR, Chennai, Tamil Nadu 600040',
  workingHours: '9:00 AM – 7:00 PM',
  workingDays: 'Monday to Saturday',
  whatsappNumber: '919876543210',
  whatsappDisplay: '+91 98765 43210',
  whatsappMessage: 'Hello Realnest, I would like to enquire about a property.',
};
