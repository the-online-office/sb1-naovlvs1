import React from 'react';
import { Code, Palette, PenTool, Megaphone, Camera, BookOpen } from 'lucide-react';

const categories = [
  { icon: Code, name: 'Development', count: 2150 },
  { icon: Palette, name: 'Design', count: 1832 },
  { icon: PenTool, name: 'Creative Writing', count: 945 },
  { icon: Megaphone, name: 'Marketing', count: 1203 },
  { icon: Camera, name: 'Photography', count: 728 },
  { icon: BookOpen, name: 'Education', count: 891 }
];

export function CategorySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map(({ icon: Icon, name, count }) => (
            <div
              key={name}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <Icon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-sm font-medium text-gray-900 mb-1">{name}</h3>
              <p className="text-xs text-gray-500">{count} services</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}