
export default {
   content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center:true,
         padding: {
               DEFAULT: '1rem',
               lg: '2rem',
          },
           screens:{
             'xsm': '100%',
          'sm': '100%',
          'md': '100%',
          'lg': '100%',
          'xlg': '100%',
          'xl': '100%',
          '2xl': '1660px',
           }
       },
       screens:{
         'xsm': '420px',
          'sm': '576px',
          'md': '768px',
          'lg': '992px',
          'xlg': '1024px',
          'xl': '1200px',
           'lxl':'1320px',
          '1xl':'1440px',
          '2xl': '1660px',
       },
      fontFamily: {
        'Josefin': ['Josefin Sans', 'sans-serif'],
        'ubuntu':['Ubuntu', 'sans-serif']
      },
      colors:{
         'primary':"#1A609A",
         'secondary':"#9A1A60",
          'primary-alt':"#DCE5E5",
         'accent':"#0C2A35",
         'accent1':"#1A1D1F",
         'background':"#F6F7F7",
         'border':"#657A783D"
      },
      fontSize: {
        h1: ["clamp(1.5rem, 0.8636rem + 3.6364vw, 4.5rem)", {
          fontWeight: "700"
        }],
        h2: ["clamp(1.375rem, 1.1364rem + 1.3636vw, 2.5rem)", {
          fontWeight: "600"
        }],
        h3: ["clamp(1.125rem, 0.9924rem + 0.7576vw, 1.75rem)", {
          fontWeight: "600"
        }],
        h4:["clamp(1rem, 0.8939rem + 0.6061vw, 1.5rem);",{
           fontWeight:"500" 
        } 
        ],
        text50:["clamp(1.125rem, 0.7008rem + 2.4242vw, 3.125rem)",{
             fontWeight: "500"
        }]

      },
       backgroundImage: {
         'banner':"",  
       },
      // boxShadow:{
      // }
    },
  },
  plugins: [],
};

