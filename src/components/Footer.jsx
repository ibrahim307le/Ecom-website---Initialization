export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Help Section */}
        <div>
          <h3 className="font-bold mb-2">Help</h3>
          <p>Order Tracking</p>
          <p>Returns</p>
          <p>Payment Options</p>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <p>About</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="font-bold mb-2">Legal</h3>
          <p>Terms of Sale</p>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>

        {/* Location + Contact */}
        <div>
          <h3 className="font-bold mb-2">Location</h3>
          <p>India</p>
          <h3 className="font-bold mt-4 mb-2">Contact</h3>
          <p>1400 John F Kennedy Blvd</p>
          <p>Philadelphia, PA 19107</p>
          <div className="flex space-x-3 mt-2">
            <a href="#" className="text-lg">🌐</a>
            <a href="#" className="text-lg">🐦</a>
            <a href="#" className="text-lg">📸</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs mt-6 border-t pt-4">
        © 2025 Tarique, Inc. All rights reserved. | Terms of Sale | Terms of Use
      </div>
    </footer>
  );
}
