/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
  
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      colors:{
        Primary:{
          White:' #FFFFFF',
          Black:'#000000',
          Red:'#C03545',
          Grey:'#A0AEC0',
          Dark:'#42424',  
          lighter:'#EEEEEE',
          light:'#9E9E9E', 
         

                   
        },
      },  
      letterSpacing: {
         tightest: '-.075em',
         tighter: '-.05em',
         tight: '-.025em',
         normal: '0em',
         wide: '.025em',
         wider: '.05em',
         widest: '.1em',
       /* widest: '.25em',*/
      },

     fontSize:{
        
         sm:'0.75rem', /*12px*/
         md:'3.25rem', /*52px*/
         lg:'0.875rem', /*14px*/
         xl: '1rem',      /*16px*/               
        '2xl':'2rem', /*32px*/
        '3xl':'3.375rem', /*54px*/
        '5xl': '1.875rem', /*30px*/
        '4xl': [ '2.25rem' ,'2.5rem'],
        '6xl':[ '0.75rem' ,'1rem'],
      },

      height:{
        '10': '540px',
        '11':  '52px',
        '12':  '5rem',
        '13':  '265px',
        '14':  '2rem',
        '15': '32px',
        '16': '64px',
        '17': '126px',
        '18':'0.375rem',
        '19': '560.86px',
        '20': '6px',
        '21':  '285px',
        '22': '1.25rem',


      },
    margin:{
        '10': '0px',
        '11': '1rem',
        '12': '4rem',
        '13': '1.5rem',
        '14':'77px',
        '15': '64px',
        '16': '5rem',
        '17': '0.5rem',
        '18': '268px',
        '19': '280px',
        '20': '-30px',
        '21': '-28px',
        '22': '40px',
        '23': '1.75rem',
        '24':'11px',
        '25':'0.25rem',
        '26':'-45px',
        '27':'32px',
        '28':'120px',
        '29':'400px',
        '30':'100px',
        '31':'110px',
        '32':'45px',
        '33':'20px',
        '34': '2.5rem',
        '35':'-60px',
        '36': '0.75rem',
        '37': '9rem',
        '38': '-2.5rem',
        '39': '5%',
        '40': '15px',
        '41': '-2px',
        '42': '3rem',
        '43': '180px',
        '44': '2.75rem',
        '45': '3.5rem',
        '46': '7rem',
        '47': '6rem',
        '48': '8rem',
        '49': '11rem',
    },
      padding:{
         '10': '0.5rem',
         '11': '1rem',
         '12': '2rem',
         '13': '4rem',
         '14': '70px',
         '15': '-40px',
         '16': '60px',
         '17': '80px',
         '18': '5rem',
         '19': '1rem',
         '20': '1.25rem',
         '21': '6rem',
         '22': '1.25rem',
         '23': '1.5rem'

      },
      fontWeight:{
         thin: '100',
         hairline: '100',
         extralight: '200',
         light: '300',
         normal: '400',
         medium: '500',
         semibold: '600',
         bold: '700',
         extrabold: '800',
      

      },

     
      
      extend: {
        colors:{
          Secondary:{
          Dark:'#182F43',
          Blue:'#1A355A'

          }
        }
      },
     
     /*textColor:{
        skin:{
          base:'var(--color-text-base)'
        },
      },*/
      screens: {
         sm: '350px',
         md: '768px',
         lg: '1024px',
         xl: '1280px',
         pxl: '1536px',
        
      },
      gap: {
       '11': '1.5rem',
       '12': '2.5rem',
       '13':  '0.5rem',
       '14':   '4rem ',
       '15':  '1rem',
       '16':  '2rem'
      },

      letterSpacing:{
        normal:'0em',

      },
      width:{
      full:'100%',
      '12':'201px',
      '13':'393px',
      '14':'188px',
      '15':'138px',
      '16':'16rem;',
      '17':' 50%',
      '18': '25%',
      '19': '1.25rem',
      '20': '652px',
          
      },
       
      lineHeight:{
        
      '12': '2.25rem',
      '13':'4.375rem',
      '14':'1rem',
      '15':'150%',
      '16': '48px',
      '17': '1rem',
      },
    opacity:{
      '60':'0.6',
      '80': '0.8',

    },
     
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
    plugins: []
  };