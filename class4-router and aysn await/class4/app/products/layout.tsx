export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <>
        {children}
<br />
        <h1> kuch sochna paday ga</h1>
        </>
  );
}
