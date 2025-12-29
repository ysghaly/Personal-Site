'use client';

import { Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '@/data/personalData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: personalInfo.socialLinks.github },
    { name: 'LinkedIn', icon: Linkedin, url: personalInfo.socialLinks.linkedin },
    { name: 'Twitter', icon: Twitter, url: personalInfo.socialLinks.twitter },
  ].filter(link => link.url);

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

