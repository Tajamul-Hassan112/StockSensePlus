"use client";

import React from 'react';
import { FaGlobe, FaFileAlt, FaBuilding, FaLink } from 'react-icons/fa';

const integrations = [
  {
    name: 'E-commerce Platforms',
    description: 'Integrate seamlessly with popular e-commerce platforms like Shopify, Magento, and WooCommerce to manage your online inventory efficiently.',
    icon: <FaGlobe className="h-6 w-6 text-blue-600" />
  },
  {
    name: 'ERP Systems',
    description: 'Connect with ERP systems like SAP and Oracle to synchronize your inventory data with other business processes and ensure consistency across the board.',
    icon: <FaBuilding className="h-6 w-6 text-green-600" />
  },
  {
    name: 'Third-Party APIs',
    description: 'Leverage various third-party APIs for real-time data integration, including shipping, payment gateways, and analytics services.',
    icon: <FaLink className="h-6 w-6 text-purple-600" />
  },
  {
    name: 'Custom Integrations',
    description: 'Create custom integrations tailored to your specific business needs using our API and developer tools.',
    icon: <FaFileAlt className="h-6 w-6 text-red-600" />
  }
];

const IntegrationPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex items-center space-x-4">
        <FaGlobe className="h-8 w-8" />
        <h1 className="text-3xl font-bold">Smart Inventory Management Integrations</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow mt-6">
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Integrate with Your Favorite Tools</h2>
          <p className="mb-4">
            StockSense Plus offers a wide range of integrations to help you streamline your inventory management. Connect with various platforms and services to enhance your operational efficiency and business insights.
          </p>

          {/* Integration List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {integration.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{integration.name}</h3>
                  <p className="text-gray-700">{integration.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* API Documentation */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">API Documentation</h2>
          <p className="mb-4">
            Access our API documentation to learn how to integrate StockSense Plus with other systems. Our APIs provide endpoints for various functionalities, including data synchronization, custom reporting, and more.
          </p>
          <a href="/api-docs" className="text-blue-600 hover:underline">
            View API Documentation
          </a>
        </section>

        {/* Integration Guides */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Integration Guides</h2>
          <p className="mb-4">
            Check out our integration guides for step-by-step instructions on connecting StockSense Plus with other systems and services.
          </p>
          <ul className="list-disc pl-6">
            <li><a href="/guides/ecommerce" className="text-blue-600 hover:underline">E-commerce Platforms Integration</a></li>
            <li><a href="/guides/erp" className="text-blue-600 hover:underline">ERP Systems Integration</a></li>
            <li><a href="/guides/custom" className="text-blue-600 hover:underline">Custom Integrations</a></li>
          </ul>
        </section>

        {/* Support and Contact */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Support and Contact</h2>
          <p className="mb-4">
            If you need assistance with integrations or have any questions, our support team is here to help. Reach out to us for guidance and troubleshooting.
          </p>
          <a href="/support" className="text-blue-600 hover:underline">
            Contact Support
          </a>
        </section>
      </main>
    </div>
  );
};

export default IntegrationPage;
