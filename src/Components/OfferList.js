import AvaDouble from './../assets/ava-double.png'
export default function OfferList(){
  return (
    <div className="row justify-content-around">
      <OfferItem />
    <OfferItem />
  <OfferItem />
<OfferItem />
    </div>
  )
}

function OfferItem(){
  return(
    <div className="col-11 col-md-4 my-2 ">
      <div className="card">
        <img className="card-img-top" src={AvaDouble} alt="promotion" />
      <div className="card-body">
        <h5>Flash Sales</h5>
      <h6>Benefit:</h6>
      <ul>
        <li>Discount 10% restaurant</li>
      </ul>
      </div>
      </div>
    </div>
  )
}
