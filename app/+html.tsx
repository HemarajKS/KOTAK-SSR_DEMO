import { ScrollViewStyleReset } from 'expo-router/html';

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Expo SSR App</title>
        <ScrollViewStyleReset />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.__SERVER_DATA__ = ${JSON.stringify({
                users: [
                  { id: 1, name: 'John Doe', email: 'john@example.com' },
                  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
                ],
                timestamp: new Date().toISOString()
              })};
              fetch('/api/about')
                .then(res => res.json())
                .then(data => {
                  window.__ABOUT_DATA__ = data;
                  window.dispatchEvent(new Event('aboutDataLoaded'));
                })
                .catch(err => console.error('Failed to load about data:', err));
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}