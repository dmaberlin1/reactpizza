import ContentLoader from "react-content-loader"

const PizzaSceleton = () => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
      <circle cx="123" cy="124" r="121" />
      <rect x="-13" y="248" rx="0" ry="0" width="249" height="34" />
      <rect x="17" y="299" rx="0" ry="0" width="3" height="0" />
      <rect x="87" y="340" rx="0" ry="0" width="1" height="0" />
      <rect x="148" y="145" rx="0" ry="0" width="1" height="0" />
      <rect x="5" y="293" rx="0" ry="0" width="233" height="41" />
      <rect x="10" y="346" rx="70" ry="70" width="87" height="61" />
      <rect x="137" y="350" rx="100" ry="100" width="87" height="61" />
  </ContentLoader>
)

export default PizzaSceleton