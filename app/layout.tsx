import '@styles/global.css';

export const metaData = {
  title: 'Music Player',
  description: 'Explore the World with different Songs'
}

const RootLayout = ({children} : any) => {
  return (
    <html lang='en'>
      <body className='raleway no-scrollbar  bg-primary-SmokyBlack'>
        <div className='main bg-black h-9 sticky top-0'></div>
        <main className='app'>
          {children}
        </main>
        <div className='main bg-black h-9 sticky bottom-0'></div>
      </body>
    </html>
  )
}

export default RootLayout;