export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-400 text-center p-4 mt-10">
            <p>&copy; {new Date().getFullYear()} Movie Recommendation App. All rights reserved.</p>
        </footer>
    );
}
