module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        theme: {
            extend: {
              animation: {
                'fade-in': 'fadeIn 1s ease-out',
                'slide-up': 'slideUp 1s ease-out'
              },
              keyframes: {
                fadeIn: {
                  '0%': { opacity: 0 },
                  '100%': { opacity: 1 },
                },
                slideUp: {
                  '0%': { transform: 'translateY(20px)', opacity: 0 },
                  '100%': { transform: 'translateY(0)', opacity: 1 },
                }
              }
            }
          }
          
      },
    },
    plugins: [],
  }