import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="w-full min-h-screen px-6 py-20 md:px-24 md:py-32 bg-amber-50">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-center md:text-left mb-6">
        Privacy Policy
      </h1>

      <div className="space-y-6 text-base md:text-lg leading-relaxed w-full max-w-5xl">
        <p><strong>Last updated:</strong> June 28, 2024</p>

        <p>
          This Privacy Policy describes Our policies and procedures on the collection, use,
          and disclosure of Your information when You use the Service and tells You about
          Your privacy rights and how the law protects You. We use Your Personal data to
          provide and improve the Service. By using the Service, You agree to the collection
          and use of information in accordance with this Privacy Policy.
        </p>

        <h2 className="text-2xl font-bold underline pt-6">Interpretation and Definitions</h2>

        <h3 className="text-xl font-semibold underline pt-4">Interpretation</h3>
        <p>
          The words of which the initial letter is capitalized have meanings defined under
          the following conditions. The following definitions shall have the same meaning
          regardless of whether they appear in singular or in plural.
        </p>

        <h3 className="text-xl font-semibold underline pt-4">Definitions</h3>
        <p>For the purposes of this Privacy Policy:</p>
        <ul className="list-disc pl-6">
          <li><strong>Account:</strong> A unique account created for You to access our Service.</li>
          <li><strong>Institution:</strong> Refers to institutions run by P S Govindaswamy Naidu and Sons charities.</li>
          <li><strong>Cookies:</strong> Small files stored in Your browser containing usage data.</li>
          <li><strong>Country:</strong> Refers to Tamil Nadu, India.</li>
          <li><strong>Device:</strong> Any device like computer, phone, or tablet used to access the Service.</li>
          <li><strong>Personal Data:</strong> Information that relates to an identifiable individual.</li>
          <li><strong>Service:</strong> Refers to the Website.</li>
          <li><strong>Service Provider:</strong> Third-party who processes data on behalf of the Institution.</li>
          <li><strong>Usage Data:</strong> Data collected automatically during Service usage.</li>
          <li>
            <strong>Website:</strong> Our institutions’ website: <a className="text-blue-900 underline" href="https://www.psgsonscharities.org/#edu-odyssey" target="_blank" rel="noopener noreferrer">https://www.psgsonscharities.org/#edu-odyssey</a>
          </li>
          <li><strong>You:</strong> The individual/student/parent using the Service.</li>
        </ul>

        <h2 className="text-2xl font-bold underline pt-6">Collecting and Using Your Personal Data</h2>

        <h3 className="text-xl font-semibold underline pt-4">Types of Data Collected</h3>

        <h4 className="text-lg font-bold pt-2">Personal Data</h4>
        <p>
          While using Our portal, We may ask You to provide certain personally identifiable
          information such as:
        </p>
        <ul className="list-disc pl-6">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Gender, Date of Birth</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
          <li>Usage Data</li>
        </ul>

        <h4 className="text-lg font-bold underline pt-4">Usage Data</h4>
        <p>
          Usage Data is collected automatically when using the Service and may include IP
          address, browser type, pages visited, and diagnostic data.
        </p>
        <p>
          When accessed via mobile, it may include device type, OS, browser, and identifiers.
        </p>

        <h4 className="text-lg font-bold underline pt-4">Tracking Technologies and Cookies</h4>
        <p>
          We use Cookies and similar tracking tools to analyze Service use and improve experience.
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Cookies:</strong> You can instruct your browser to refuse all cookies. Some
            features may not function properly if disabled.
          </li>
          <li>
            <strong>Web Beacons:</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Institution, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).
          </li>
        </ul>
        <p>
          Cookies can be "Session" (deleted on close) or "Persistent" (stay until manually deleted).
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
