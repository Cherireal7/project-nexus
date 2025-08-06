export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 text-sm w-full">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-6 pt-6">
                {/* Company */}
                <div>
                    <h4 className="text-white font-medium mb-2">Company</h4>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Careers</a></li>
                    </ul>
                </div>

                {/* Need Help */}
                <div>
                    <h4 className="text-white font-medium mb-2">Need Help</h4>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline">Visit Help Center?</a></li>
                        <li><a href="#" className="hover:underline">Share Feedback</a></li>
                    </ul>
                </div>

                {/* Website Language */}
                <div>
                    <h4 className="text-white font-medium mb-2">View Website in</h4>
                    <select className="bg-transparent border border-gray-600 rounded px-2 py-1 text-white">
                        <option>English</option>
                        {/* Add more languages if needed */}
                    </select>
                </div>

                {/* Social Media */}
                <div>
                    <h4 className="text-white font-medium mb-2">Social Media</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white">📷</a>
                        <a href="#" className="hover:text-white">🐦</a>
                        <a href="#" className="hover:text-white">▶️</a>
                    </div>
                </div>


            </div>

            {/* Bottom Strip */}
            <div className="border-t border-gray-700 mt-6 py-4 text-center text-xs text-gray-500 px-6">
                <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-2">
                    <p>© 2025 Project Nexus. All Rights Reserved.</p>
                    <div className="space-x-4">
                        <a href="#" className="hover:underline">Terms of Use</a>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">FAQ</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
