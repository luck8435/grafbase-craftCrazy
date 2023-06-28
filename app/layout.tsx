import Footer from '@/components/Footer';
import './globals.css';
import Navbar from '@/components/Navbar';
export const metadata = {
    title: 'CraftCrazy',
    description: 'Showcase and discover remarkable developer projects',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
