import { Carousel } from 'react-responsive-carousel';
export default function ImageBackground(props) {
  if(Array.isArray(props.image)){
    return(
        <div className="row">
          <div className="col-12">
            <Carousel autoPlay={true} showStatus={false} showThumbs={false} infiniteLoop={true}>
              {props.image.map((x, index) =>
                <div>
            <img style={{objectFit: 'cover'}} src={x} alt={index} height="500px" />
        </div>)}
              </Carousel>
          </div>
        </div>
    )
  }else{
    return (
      <div className="row">
        <div className="col-12" style={{backgroundImage: `url(${props.image})`, height: '500px', backgroundSize: 'cover', backgroundPosition: 'center'}}>
          {props.children}
        </div>
      </div>
    )
  }
}
