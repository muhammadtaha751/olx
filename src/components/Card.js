function Card(props) {
  
    return (
      <div 
        onClick={props.onClick}
        style={{ color: 'black', height: 200, width: 200, border: '1px solid black', background: 'white', boxShadow: 'black 7px 13px 17px -2px', margin: 5 }}>
        {props.images}
        <br/>
        {props.price}
        <br/>
        {props.title}
        <br/>
       
      </div>
    )
  }
  
  export default Card