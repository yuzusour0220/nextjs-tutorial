// @はエイリアス。configの何処かで指定している
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* フォントを指定し、よりきれいに表示 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
