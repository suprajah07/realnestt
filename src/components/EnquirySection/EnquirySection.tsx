import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, Loader2, Send } from 'lucide-react';
import { companyContact } from '../../data/contactInfo';
import './EnquirySection.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  location: string;
  budget: string;
  propertyType: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const interestOptions = ['Buying', 'Selling', 'Renting', 'Leasing', 'Investment Advisory', 'Other'];
const budgetOptions = [
  'Select budget range',
  'Under ₹50 Lakhs',
  '₹50L – ₹1 Crore',
  '₹1 Cr – ₹2 Crore',
  '₹2 Cr – ₹5 Crore',
  'Above ₹5 Crore',
  'Open to Discussion',
];
const propertyTypeOptions = ['Select type', 'Apartment', 'Villa', 'Residential Plot', 'Commercial', 'Not Sure'];

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  interest: '',
  location: '',
  budget: '',
  propertyType: '',
  message: '',
  consent: false,
};

function validate(form: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = 'Please enter your full name.';
  }
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\s|-/g, ''))) {
    errors.phone = 'Please enter a valid 10-digit Indian mobile number.';
  }
  if (!form.interest) {
    errors.interest = 'Please select what you are interested in.';
  }
  if (!form.consent) {
    errors.consent = 'Please confirm you agree to be contacted.';
  }
  return errors;
}

export default function EnquirySection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setForm((prev) => ({ ...prev, [name]: val }));
    if (touched[name]) {
      const newErrors = validate({ ...form, [name]: val });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] || '' }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] || '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.keys(initialForm).reduce<Record<string, boolean>>(
      (acc, key) => ({ ...acc, [key]: true }), {}
    );
    setTouched(allTouched);
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');

    // ====================================================
    // DEMO MODE: Simulates a successful submission.
    // Connect this to your backend API / Supabase / CRM.
    // Required env variables:
    //   VITE_API_URL — Your enquiry submission endpoint
    //   (Keep secret keys server-side only)
    // ====================================================
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1800));

      // In production, replace with:
      // const response = await fetch(import.meta.env.VITE_API_URL + '/enquiry', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(form),
      // });
      // if (!response.ok) throw new Error('Submission failed');

      setStatus('success');
      setForm(initialForm);
      setTouched({});
      setErrors({});
    } catch {
      setStatus('error');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setForm(initialForm);
    setTouched({});
    setErrors({});
  };

  return (
    <section id="enquiry" className="section rn-enquiry" aria-labelledby="enquiry-heading">
      <div className="container">
        <div className="rn-enquiry__grid">
          {/* Left: Contact Info */}
          <div className="rn-enquiry__left">
            <p className="eyebrow reveal-fade-up">GET IN TOUCH</p>
            <h2 id="enquiry-heading" className="section-title rn-enquiry__heading reveal-heading">
              <span className="reveal-mask-line"><span>Let's Find the Right</span></span>
              <span className="reveal-mask-line">
                <span style={{ color: 'var(--champagne-gold)' }}>Property for You.</span>
              </span>
            </h2>
            <p className="text-body-lg rn-enquiry__subtext reveal-fade-up reveal-delay-1">
              Tell us what you are looking for, and our team can help you explore the next steps. No pressure, no spam — just helpful guidance.
            </p>

            <div className="rn-enquiry__contacts">
              <a
                href={`tel:${companyContact.phoneTel}`}
                className="rn-enquiry__contact-item"
                aria-label={`Call us at ${companyContact.phoneDisplay}`}
              >
                <div className="rn-enquiry__contact-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="rn-enquiry__contact-label">Phone</div>
                  <div className="rn-enquiry__contact-value">{companyContact.phoneDisplay}</div>
                  <span className="rn-enquiry__contact-sub">Direct Line · Advisory Desk</span>
                </div>
              </a>

              <a
                href={`mailto:${companyContact.email}`}
                className="rn-enquiry__contact-item"
                aria-label={`Email us at ${companyContact.email}`}
              >
                <div className="rn-enquiry__contact-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="rn-enquiry__contact-label">Email</div>
                  <div className="rn-enquiry__contact-value">{companyContact.email}</div>
                  <span className="rn-enquiry__contact-sub">Client Advisory & Queries</span>
                </div>
              </a>

              <div className="rn-enquiry__contact-item">
                <div className="rn-enquiry__contact-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="rn-enquiry__contact-label">Office</div>
                  <div className="rn-enquiry__contact-value">{companyContact.officeLocation}</div>
                  <span className="rn-enquiry__contact-sub">{companyContact.officeAddress}</span>
                </div>
              </div>

              <div className="rn-enquiry__contact-item">
                <div className="rn-enquiry__contact-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="rn-enquiry__contact-label">Working Hours</div>
                  <div className="rn-enquiry__contact-value">{companyContact.workingHours}</div>
                  <span className="rn-enquiry__contact-sub">{companyContact.workingDays}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Enquiry Form */}
          <div className="rn-enquiry__right">
            {status === 'success' ? (
              <div className="rn-enquiry__success" role="status" aria-live="polite">
                <div className="rn-enquiry__success-icon">
                  <CheckCircle size={48} />
                </div>
                <h3>Enquiry Received!</h3>
                <p>
                  Thank you for reaching out. Our advisory team will review your requirements and connect with you shortly.
                </p>
                <button
                  className="btn btn-outline"
                  onClick={handleReset}
                  id="enquiry-reset-btn"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form
                className="rn-enquiry-form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Property enquiry form"
              >
                <div className="rn-enquiry-form__header">
                  <h3 className="rn-enquiry-form__title">Property Enquiry</h3>
                  <p className="rn-enquiry-form__subtitle">All fields marked * are required.</p>
                </div>

                {/* Name + Email */}
                <div className="rn-form-row">
                  <div className="form-group">
                    <label htmlFor="enq-name" className="form-label">Full Name *</label>
                    <input
                      id="enq-name"
                      name="name"
                      type="text"
                      className={`form-input ${errors.name && touched.name ? 'error' : ''}`}
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      autoComplete="name"
                    />
                    {errors.name && touched.name && (
                      <span className="form-error" role="alert">
                        <AlertCircle size={13} />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="enq-email" className="form-label">Email Address *</label>
                    <input
                      id="enq-email"
                      name="email"
                      type="email"
                      className={`form-input ${errors.email && touched.email ? 'error' : ''}`}
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      autoComplete="email"
                    />
                    {errors.email && touched.email && (
                      <span className="form-error" role="alert">
                        <AlertCircle size={13} />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Phone + Interest */}
                <div className="rn-form-row">
                  <div className="form-group">
                    <label htmlFor="enq-phone" className="form-label">Mobile Number *</label>
                    <div className="rn-phone-input">
                      <span className="rn-phone-input__code">+91</span>
                      <input
                        id="enq-phone"
                        name="phone"
                        type="tel"
                        className={`form-input rn-phone-input__field ${errors.phone && touched.phone ? 'error' : ''}`}
                        placeholder="98765 43210"
                        value={form.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        autoComplete="tel"
                        maxLength={12}
                      />
                    </div>
                    {errors.phone && touched.phone && (
                      <span className="form-error" role="alert">
                        <AlertCircle size={13} />
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="enq-interest" className="form-label">I'm Interested In *</label>
                    <select
                      id="enq-interest"
                      name="interest"
                      className={`form-input form-select ${errors.interest && touched.interest ? 'error' : ''}`}
                      value={form.interest}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    >
                      <option value="">Select an option</option>
                      {interestOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                    {errors.interest && touched.interest && (
                      <span className="form-error" role="alert">
                        <AlertCircle size={13} />
                        {errors.interest}
                      </span>
                    )}
                  </div>
                </div>

                {/* Location + Budget */}
                <div className="rn-form-row">
                  <div className="form-group">
                    <label htmlFor="enq-location" className="form-label">Preferred Location</label>
                    <input
                      id="enq-location"
                      name="location"
                      type="text"
                      className="form-input"
                      placeholder="e.g., OMR, Anna Nagar"
                      value={form.location}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="enq-budget" className="form-label">Approximate Budget</label>
                    <select
                      id="enq-budget"
                      name="budget"
                      className="form-input form-select"
                      value={form.budget}
                      onChange={handleChange}
                    >
                      {budgetOptions.map((o) => <option key={o} value={o === 'Select budget range' ? '' : o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                {/* Property Type */}
                <div className="form-group">
                  <label htmlFor="enq-type" className="form-label">Property Type</label>
                  <select
                    id="enq-type"
                    name="propertyType"
                    className="form-input form-select"
                    value={form.propertyType}
                    onChange={handleChange}
                  >
                    {propertyTypeOptions.map((o) => <option key={o} value={o === 'Select type' ? '' : o}>{o}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="enq-message" className="form-label">Message / Additional Requirements</label>
                  <textarea
                    id="enq-message"
                    name="message"
                    className="form-input"
                    placeholder="Tell us more about what you're looking for..."
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                {/* Consent */}
                <div className="rn-enquiry-form__consent">
                  <label className="rn-consent-label">
                    <input
                      type="checkbox"
                      name="consent"
                      id="enq-consent"
                      checked={form.consent}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="rn-consent-checkbox"
                    />
                    <span className="rn-consent-text">
                      I agree to be contacted by the Realnest team about my property enquiry. I understand my information will be kept private and not shared with third parties without my consent.
                    </span>
                  </label>
                  {errors.consent && touched.consent && (
                    <span className="form-error" role="alert">
                      <AlertCircle size={13} />
                      {errors.consent}
                    </span>
                  )}
                </div>

                {/* Error State */}
                {status === 'error' && (
                  <div className="rn-enquiry-form__error" role="alert">
                    <AlertCircle size={18} />
                    <p>Something went wrong. Please try again or contact us directly.</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-full rn-enquiry-form__submit"
                  disabled={status === 'loading'}
                  id="enquiry-submit-btn"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="rn-spin" aria-hidden="true" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Submit Enquiry
                    </>
                  )}
                </button>

                <p className="rn-enquiry-form__privacy">
                  🔒 Your details are secure. We do not share your information with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
