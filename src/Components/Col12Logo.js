import AvaLogo from './../assets/avatara-logo.png'
export default function Col12Logo(props) {
  return (
    <div className={`row my-5 ${props.className}`}>
      <div className="col-12 text-center">
        <img src={AvaLogo} width='200' alt="Avatara Resort" />
      </div>
    </div>
  )
}
