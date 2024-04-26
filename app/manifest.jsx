export default function manifest() {
  return {
    name: 'Lasana',
    short_name: 'Lasana',
    description: 'Get cyber security experty, graphic designs and programming',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}