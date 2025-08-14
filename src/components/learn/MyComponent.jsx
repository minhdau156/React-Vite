
import './style.css'
const MyComponent = () => {
    // const hoidanit = true
    const hoidanit = {
        name: "hoidanit",
        age: 25
    }
  return (
    <>
        <div>{JSON.stringify(hoidanit)} & hoidanit update</div>
        <div className="child">child</div>
    </>
    
  )
}

export default MyComponent