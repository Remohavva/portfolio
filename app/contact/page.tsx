'use client';

import { useState } from 'react';
import { SectionTitle } from '@/components/section-title';
import { Card } from '@/components/ui/card';
import { Input, Textarea } from '@/components/ui/input';
import { contactFormSchema } from '@/lib/validations';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setStatus('loading');

    const result = contactFormSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      setStatus('idle');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <SectionTitle subtitle="Let's discuss your next project">
          Get In Touch
        </SectionTitle>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              error={errors.name}
              placeholder="Your name"
            />

            <Input
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={errors.email}
              placeholder="your.email@example.com"
            />

            <Textarea
              label="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              error={errors.message}
              placeholder="Tell me about your project..."
              rows={6}
            />

            <button 
              type="submit" 
              disabled={status === 'loading'} 
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-400 text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </Card>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4 text-white">Other Ways to Connect</h3>
          <div className="flex justify-center gap-6">
            <a href="mailto:your.email@example.com" className="text-blue-400 hover:underline">
              Email
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
