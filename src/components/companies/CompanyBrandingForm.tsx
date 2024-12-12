import React from 'react';
import { Upload, Link } from 'lucide-react';

interface CompanyBrandingFormProps {
  formData: {
    logo: File | null;
    coverImage: File | null;
    brandColors: {
      primary: string;
      secondary: string;
    };
    socialLinks: {
      linkedin: string;
      twitter: string;
      facebook: string;
      instagram: string;
    };
  };
  onChange: (data: Partial<CompanyBrandingFormProps['formData']>) => void;
}

export function CompanyBrandingForm({ formData, onChange }: CompanyBrandingFormProps) {
  return (
    <div className="space-y-8">
      {/* Logo Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Company Logo
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-brand-500 transition-colors">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => onChange({ logo: e.target.files?.[0] || null })}
            className="hidden"
            id="logo-upload"
          />
          <label htmlFor="logo-upload" className="cursor-pointer">
            <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600">
              {formData.logo ? formData.logo.name : 'Upload company logo'}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              PNG, JPG up to 2MB
            </p>
          </label>
        </div>
      </div>

      {/* Cover Image Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Cover Image
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-brand-500 transition-colors">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => onChange({ coverImage: e.target.files?.[0] || null })}
            className="hidden"
            id="cover-upload"
          />
          <label htmlFor="cover-upload" className="cursor-pointer">
            <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600">
              {formData.coverImage ? formData.coverImage.name : 'Upload cover image'}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Recommended size: 1600x400px
            </p>
          </label>
        </div>
      </div>

      {/* Brand Colors */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Brand Colors</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Primary Color</label>
            <input
              type="color"
              value={formData.brandColors.primary}
              onChange={(e) => onChange({ 
                brandColors: { ...formData.brandColors, primary: e.target.value } 
              })}
              className="h-10 w-full rounded-lg cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Secondary Color</label>
            <input
              type="color"
              value={formData.brandColors.secondary}
              onChange={(e) => onChange({ 
                brandColors: { ...formData.brandColors, secondary: e.target.value } 
              })}
              className="h-10 w-full rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Social Media Links</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">LinkedIn</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Link className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="url"
                value={formData.socialLinks.linkedin}
                onChange={(e) => onChange({ 
                  socialLinks: { ...formData.socialLinks, linkedin: e.target.value } 
                })}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                placeholder="https://linkedin.com/company/..."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Twitter</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Link className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="url"
                value={formData.socialLinks.twitter}
                onChange={(e) => onChange({ 
                  socialLinks: { ...formData.socialLinks, twitter: e.target.value } 
                })}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                placeholder="https://twitter.com/..."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Facebook</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Link className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="url"
                value={formData.socialLinks.facebook}
                onChange={(e) => onChange({ 
                  socialLinks: { ...formData.socialLinks, facebook: e.target.value } 
                })}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                placeholder="https://facebook.com/..."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Instagram</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Link className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="url"
                value={formData.socialLinks.instagram}
                onChange={(e) => onChange({ 
                  socialLinks: { ...formData.socialLinks, instagram: e.target.value } 
                })}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                placeholder="https://instagram.com/..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}